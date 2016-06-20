var sakaiTutorialSkin = 'sakaiTutorial';
var sakaiTutorialStartUrl = "/direct/tutorial/introToSakai_p1.json";
var sakaiTutorialLocationUrl = '/direct/tutorial/introToSakai_pTutorialLocation.json';
var optsCache;
var maxWidth = 500;
var previousClicked = false;
var dialogPosition = {
		my: 'center',
		at: 'center',
		target: $(window), // Position it via the document body...
		viewport: $(window)
};


function startTutorial(opts){
	showTutorialPage(sakaiTutorialStartUrl, opts);
}

function showTutorialPage(url, opts){
	//store options in cache so we can use the same options from start to end of the tutorial:
	if(opts != null)
		optsCache = opts;
	else if(optsCache != null)
		opts = optsCache;
	else{
		opts = {};
		optsCache = opts;
	}
	
	$.getJSON(url, 
			function(response){
				//Current fix for Sakai 10
				try{
				if(response.data.dialog == 'true'){
					response.data.selection = 'div#tutorial';
				}
				if(!$(response.data.selection).length 
						&& ((!previousClicked && response.data.nextUrl) 
								|| (previousClicked && response.data.previousUrl))){
					//this item doesn't exist, go to the next page if it exists
					if(previousClicked){
						showTutorialPage(response.data.previousUrl);
					}else{
						showTutorialPage(response.data.nextUrl);
					}
				}else{
					previousClicked = false;
					var mxWidth = maxWidth;
					var totalWidth = $(document).width();
					var totalHeight = $(document).height();
					if(totalWidth < mxWidth){
						mxWidth = totalWidth;
					}

					$(response.data.selection).qtip(
							{ 
								content: {
									title: response.data.title,
									button: $('<a class="qtipClose" href="#" onclick="if(\''+opts.showTutorialLocationOnHide + '\' == \'true\' && \'' + url + '\' != \'' + sakaiTutorialLocationUrl + '\'){showTutorialPage(\''+ sakaiTutorialLocationUrl + '\');}" title="' + $('.closeMe').find('.skip').text() +'"><img src="/library/image/silk/cancel.png" alt=""/><span class="skip">' + $('.closeMe').find('.skip').text() + '</span></a>'),
									text: response.data.body
								},
								position: response.data.dialog == 'true' ? dialogPosition: {
									my: response.data.positionTooltip,
									at: response.data.positionTarget,
									viewport: $(document.body)
								},
								style: {
									classes: 'qtip-tipped qtip-shadow qtipBodyContent',
									tip: {
										corner: response.data.positionTooltip
									}
								},
								show: {
									ready: true, // Show it when ready
									solo: true // And hide all other tooltips
								},
								hide: false,
								events: {
									hide: function()
									{
										// javascript to run after hiding
										$(response.data.selection).qtip("destroy");
                                        //pass the focus to top of page, make invisible
                                        $('#skipNav').attr('tabindex','-1').focus();
									},
									show: function(e)
									{
										if(response.data.fadeout){
											setTimeout(function(){
												$('.qtip').fadeOut(2000, function() {
													// Animation complete.
													$(response.data.selection).qtip("destroy", true);
												});
											}, 10000);
										}
									},
                                    visible : function() {  $('.qtip-title').attr('tabindex','-1').focus(); },
									render: function() {
                                           var api = this;
                                            $(window).bind('keydown', function(e) {
                                                if(e.keyCode === 27) {
                                                    api.hide(e);
                                                    $(response.data.selection).qtip("destroy", true);
                                                }
                                            });
                                        }
								}
							}
					);
				}
				}catch(e){
				//	$(this).qtip("destroy");
				}
		}
	);
}
