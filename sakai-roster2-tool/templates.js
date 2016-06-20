(function () {
// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\enrollment_header.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<table class=\"rosterPageHeader\">\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				<h3>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_status", options) : helperMissing.call(depth0, "translate", "title_status", options)))
    + ": ";
  if (helper = helpers.siteTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.siteTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			</td>\n			<td class=\"rosterPageHeaderRight\">\n				<input id=\"export_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "export_roster", options) : helperMissing.call(depth0, "translate", "export_roster", options)))
    + "\"/>\n				<input type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "print_roster", options) : helperMissing.call(depth0, "translate", "print_roster", options)))
    + "\" onclick=\"window.print()\" />\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['enrollment_header'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['enrollment_header'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\enrollment_section_filter.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	<tbody>\n		<tr>\n			<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "enrollment_status_filter", options) : helperMissing.call(depth0, "translate", "enrollment_status_filter", options)))
    + "</span></td>\n			<td>\n				<span class=\"filterElement\">\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.onlyOne), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</span>\n			</td>\n		</tr>\n		<tr>\n			<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "enrollment_status_filter_label", options) : helperMissing.call(depth0, "translate", "enrollment_status_filter_label", options)))
    + "</span></td>\n			<td><span class=\"filterElement\">\n					<select id=\"roster_form_enrollment_status_filter\" size=\"1\">\n						<option selected=\"selected\" value=\"\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_enrollment_status_all", options) : helperMissing.call(depth0, "translate", "roster_enrollment_status_all", options)))
    + "</option>\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrollmentStatusDescriptions), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</select>\n				</span>\n			</td>\n		</tr>\n	</tbody>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.enrollmentSets)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n					";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n					<select id=\"roster_form_enrollment_set_filter\" size=\"1\">\n						<option selected=\"selected\" value=\"\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_enrollment_status_all", options) : helperMissing.call(depth0, "translate", "roster_enrollment_status_all", options)))
    + "</option>\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrollmentSets), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</select>\n					";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							<option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n						";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							<option value=\"";
  if (helper = helpers.thisenrollmentStatusDescription) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thisenrollmentStatusDescription); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n						";
  return buffer;
  }

  buffer += "<table>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enrollmentSets), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['enrollment_section_filter'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['enrollment_section_filter'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\enrollment_status.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n			<th width=\"10%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_userId", options) : helperMissing.call(depth0, "translate", "facet_userId", options)))
    + "</a></th>\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n				<th width=\"20%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_email", options) : helperMissing.call(depth0, "translate", "facet_email", options)))
    + "</a></th>\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		<tr>\n			<td>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "no_participants", options) : helperMissing.call(depth0, "translate", "no_participants", options)))
    + "</td>\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewDisplayId), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewEmail), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<td></td>\n			<td></td>\n		</tr>\n	";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\n			<td></td>\n			";
  }

function program8(depth0,data) {
  
  
  return "\n				<td></td>\n			";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrollment), {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program11(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canViewEnrollment), {hash:{},inverse:self.noop,fn:self.programWithDepth(12, program12, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			    <tr onMouseOver=\"this.className='rosterTableRowHighlight'\" onMouseOut=\"this.className='rosterTableRow'\">\n					<td>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewProfile), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.firstNameLastName), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewProfile), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewDisplayId), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewEmail), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<td>";
  if (helper = helpers.enrollmentStatus) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.enrollmentStatus); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n					<td>";
  if (helper = helpers.credits) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.credits); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n				</tr>\n			";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:;\" class=\"profile\" rel=\"";
  if (helper = helpers.formattedProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formattedProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                    ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        ";
  if (helper = helpers.sortName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sortName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                    ";
  return buffer;
  }

function program19(depth0,data) {
  
  
  return "\n                        </a>\n                    ";
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <td>";
  if (helper = helpers.displayId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <td><a href=\"mailto:";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n					";
  return buffer;
  }

  buffer += "<table cellspacing=\"0\" cellpadding=\"0\" class=\"listHier rosterTable\" id=\"roster_form_rosterTable\">\n	<thead>\n		<tr>\n			<th width=\"45%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_name", options) : helperMissing.call(depth0, "translate", "facet_name", options)))
    + "</a></th>\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewDisplayId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewEmail), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <th width=\"12.5%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_status", options) : helperMissing.call(depth0, "translate", "facet_status", options)))
    + "</a></th>\n            <th width=\"12.5%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_credits", options) : helperMissing.call(depth0, "translate", "facet_credits", options)))
    + "</a></th>\n		</tr>\n	</thead>\n	<tbody>\n	";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.enrollment)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['enrollment_status'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['enrollment_status'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\group_section_filter.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<table>\n	<tr>\n		<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "section_filter_pre", options) : helperMissing.call(depth0, "translate", "section_filter_pre", options)))
    + "</span></td>\n		<td>\n			<select id=\"roster_form_group_choice\" size=\"1\" name=\"roster_form:section_filter\">\n				<option selected=\"selected\" value=\"\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_ungrouped", options) : helperMissing.call(depth0, "translate", "roster_group_ungrouped", options)))
    + "</option>\n				<option value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_bygroup", options) : helperMissing.call(depth0, "translate", "roster_group_bygroup", options)))
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_bygroup", options) : helperMissing.call(depth0, "translate", "roster_group_bygroup", options)))
    + "</option>\n			</select>\n		</td>\n	</tr>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['group_section_filter'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['group_section_filter'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\group_section_filter_with_participants.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<table>\n	<tr>\n		<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "section_filter_pre", options) : helperMissing.call(depth0, "translate", "section_filter_pre", options)))
    + "</span></td>\n		<td>\n			<select id=\"roster_form_group_choice\" size=\"1\" name=\"roster_form:section_filter\">\n				<option selected=\"selected\" value=\"\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_ungrouped", options) : helperMissing.call(depth0, "translate", "roster_group_ungrouped", options)))
    + "</option>\n				<option value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_bygroup", options) : helperMissing.call(depth0, "translate", "roster_group_bygroup", options)))
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_group_bygroup", options) : helperMissing.call(depth0, "translate", "roster_group_bygroup", options)))
    + "</option>\n			</select>\n		</td>\n		<td>\n			<span class=\"instruction\">\n				<div class=\"rosterRoleTopLine\">";
  if (helper = helpers.participants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.participants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n				<div class=\"rosterRoleBottomLine\">(";
  if (helper = helpers.roleFragments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roleFragments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</div>\n			</span>\n		</td>\n	</tr>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['group_section_filter_with_participants'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['group_section_filter_with_participants'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\grouped.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		<tr>\n			<td>\n				<table width=\"100%\">\n					<tbody>\n						<tr>\n						    <td><h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3></td>\n						    <td>\n                                <div class=\"instruction rosterRoleGrouped\">\n                                    <div class=\"rosterRoleTopLineGrouped\">";
  if (helper = helpers.participants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.participants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                                    <div class=\"rosterRoleBottomLineGrouped\">(";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</div>\n                                </div>\n						    </td>\n						</tr>\n					</tbody>\n				</table>\n				<table cellpadding=\"0\" cellspacing=\"0\" class=\"listHier rosterTable\">\n					<thead>\n						<tr>\n                            <th width=\"25%\"><a href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_name", options) : helperMissing.call(depth0, "translate", "facet_name", options)))
    + "</a></th>\n							";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							<th width=\"15%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth1 && depth1.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_role", options) : helperMissing.call(depth0, "translate", "facet_role", options)))
    + "</a></th>\n							<th width=\"50%\">"
    + escapeExpression((helper = helpers.translate || (depth1 && depth1.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_groups", options) : helperMissing.call(depth0, "translate", "facet_groups", options)))
    + "</th>\n						</tr>\n					</thead>\n                    <tbody>\n					    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.members)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.programWithDepth(9, program9, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n				</table>\n			</td>\n		</tr>		\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.fragment) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fragment); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n								<th width=\"10%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_userId", options) : helperMissing.call(depth0, "translate", "facet_userId", options)))
    + "</a></th>\n							";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n						<tr>\n							<td>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "no_participants", options) : helperMissing.call(depth0, "translate", "no_participants", options)))
    + "</td>\n							";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							<td></td>\n							<td></td>\n						</tr>\n					    ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n								<td></td>\n							";
  }

function program9(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n							";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.members), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					    ";
  return buffer;
  }
function program10(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <tr onMouseOver=\"this.className='rosterTableRowHighlight'\" onMouseOut=\"this.className='rosterTableRow'\">\n                                    <td>\n                                ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.viewProfile), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.firstNameLastName), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.viewProfile), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                    </td>\n                                ";
  stack1 = helpers['if'].call(depth0, (depth3 && depth3.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                    <td>";
  if (helper = helpers.role) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                    <td>";
  if (helper = helpers.groupsToString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupsToString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                </tr>\n						    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        <a href=\"javascript:;\" class=\"profile\" rel=\"";
  if (helper = helpers.formattedProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formattedProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        ";
  if (helper = helpers.sortName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sortName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                                ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "</a>";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <td>";
  if (helper = helpers.displayId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                ";
  return buffer;
  }

  buffer += "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n	<tbody>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.siteGroups), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['grouped'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['grouped'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\groups_header.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n	<span class=\"instruction rosterTitleMessage\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_msg_groups", options) : helperMissing.call(depth0, "translate", "title_msg_groups", options)))
    + "</span>\n";
  return buffer;
  }

  buffer += "<table class=\"rosterPageHeader\">\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				<h3>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_group_membership", options) : helperMissing.call(depth0, "translate", "title_group_membership", options)))
    + ": ";
  if (helper = helpers.siteTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.siteTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			</td>\n			<td class=\"rosterPageHeaderRight\">\n				<input id=\"export_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "export_roster", options) : helperMissing.call(depth0, "translate", "export_roster", options)))
    + "\"/>\n				<input type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "print_roster", options) : helperMissing.call(depth0, "translate", "print_roster", options)))
    + "\" onclick=\"window.print()\"/>\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitleMsg), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups_header'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['groups_header'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\navbar.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <li id=\"navbar_overview_link\" role=\"menuitem\"><span class=\"firstToolBarItem current\"><a title=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_overview_tooltip", options) : helperMissing.call(depth0, "translate", "navbar_overview_tooltip", options)))
    + "\" href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_overview", options) : helperMissing.call(depth0, "translate", "navbar_overview", options)))
    + "</a></span></li>\n    <li id=\"navbar_pics_link\" role=\"menuitem\"><span><a title=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_pics_tooltip", options) : helperMissing.call(depth0, "translate", "navbar_pics_tooltip", options)))
    + "\" href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_pics", options) : helperMissing.call(depth0, "translate", "navbar_pics", options)))
    + "</a></span></li>\n    <li id=\"navbar_group_membership_link\" role=\"menuitem\"><span><a title=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_group_membership_tooltip", options) : helperMissing.call(depth0, "translate", "navbar_group_membership_tooltip", options)))
    + "\" href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_group_membership", options) : helperMissing.call(depth0, "translate", "navbar_group_membership", options)))
    + "</a></span></li>\n    <li id=\"navbar_enrollment_status_link\" role=\"menuitem\"><span><a title=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_status_tooltip", options) : helperMissing.call(depth0, "translate", "navbar_status_tooltip", options)))
    + "\" href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_status", options) : helperMissing.call(depth0, "translate", "navbar_status", options)))
    + "</a></span></li>\n    <li id=\"navbar_permissions_link\" role=\"menuitem\"><span><a title=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_permissions_tooltip", options) : helperMissing.call(depth0, "translate", "navbar_permissions_tooltip", options)))
    + "\" href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_permissions", options) : helperMissing.call(depth0, "translate", "navbar_permissions", options)))
    + "</a></span></li>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['navbar'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['navbar'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\navbar_low_res.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			<option value=\"";
  if (helper = helpers.groupMembershipState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupMembershipState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_group_membership", options) : helperMissing.call(depth0, "translate", "navbar_group_membership", options)))
    + "</option>\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " \n			<option value=\"";
  if (helper = helpers.enrollmentStatusState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.enrollmentStatusState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_status", options) : helperMissing.call(depth0, "translate", "navbar_status", options)))
    + "</option>\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			<option value=\"";
  if (helper = helpers.permissionsState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.permissionsState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_permissions", options) : helperMissing.call(depth0, "translate", "navbar_permissions", options)))
    + "</option>\n		";
  return buffer;
  }

  buffer += "<div class=\"navIntraTool rosterNavBar\">\n	<select id=\"roster_navbar_dropdown\">\n		<option value=\"";
  if (helper = helpers.overviewState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.overviewState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_overview", options) : helperMissing.call(depth0, "translate", "navbar_overview", options)))
    + "</option>\n		<option value=\"";
  if (helper = helpers.picturesState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturesState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "navbar_pics", options) : helperMissing.call(depth0, "translate", "navbar_pics", options)))
    + "</option>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canViewEnrollments), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canUpdatePermissions), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</select>\n</div>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['navbar_low_res'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['navbar_low_res'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\overview.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <th width=\"25%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_userId", options) : helperMissing.call(depth0, "translate", "facet_userId", options)))
    + "</a></th>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n				<th width=\"25%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_email", options) : helperMissing.call(depth0, "translate", "facet_email", options)))
    + "</a></th>\n            ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		<tr>\n			<td>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "no_participants", options) : helperMissing.call(depth0, "translate", "no_participants", options)))
    + "</td>\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewEmail), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<td></td>\n		</tr>\n	";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\n				<td></td>\n			";
  }

function program8(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.membership), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program9(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<tr onMouseOver=\"this.className='rosterTableRowHighlight'\" onMouseOut=\"this.className='rosterTableRow'\">\n                <td>\n                ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewProfile), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.firstNameLastName), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewProfile), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </td>\n				";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewEmail), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<td>";
  if (helper = helpers.role) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n			</tr>\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:;\" class=\"profile\" rel=\"";
  if (helper = helpers.formattedProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formattedProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    ";
  if (helper = helpers.sortName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sortName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                ";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "\n                    </a>\n                ";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <td>";
  if (helper = helpers.displayId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<td><a href=\"mailto:";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n				";
  return buffer;
  }

  buffer += "<table cellspacing=\"0\" cellpadding=\"0\" class=\"listHier rosterTable\" id=\"roster_form_rosterTable\">\n	<thead>\n		<tr>\n            <th width=\"35%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_name", options) : helperMissing.call(depth0, "translate", "facet_name", options)))
    + "</a></th>\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewEmail), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <th width=\"15%\"><a href=\"#\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_role", options) : helperMissing.call(depth0, "translate", "facet_role", options)))
    + "</a></th>\n		</tr>\n	</thead>\n	<tbody>\n	";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.membership)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.programWithDepth(8, program8, data, depth0),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['overview'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['overview'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\overview_header.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n	<span class=\"instruction rosterTitleMessage\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_msg", options) : helperMissing.call(depth0, "translate", "title_msg", options)))
    + "</span>\n";
  return buffer;
  }

  buffer += "<table class=\"rosterPageHeader\">\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				<h3>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_overview", options) : helperMissing.call(depth0, "translate", "title_overview", options)))
    + ": ";
  if (helper = helpers.siteTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.siteTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			</td>\n			<td class=\"rosterPageHeaderRight\">\n				<input id=\"export_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "export_roster", options) : helperMissing.call(depth0, "translate", "export_roster", options)))
    + "\"/>\n				<input type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "print_roster", options) : helperMissing.call(depth0, "translate", "print_roster", options)))
    + "\" onclick=\"window.print()\" />\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitleMsg), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['overview_header'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['overview_header'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\participants.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

  buffer += "<span class=\"instruction\">\n	<div class=\"rosterRoleTopLine\">";
  if (helper = helpers.participants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.participants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n	<div class=\"rosterRoleBottomLine\">(";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roleFragments), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</div>\n</span>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['participants'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['participants'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\permissions.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <th style=\"text-align:center;\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewallmembers")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewallmembers\"/></td>\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewhidden")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewhidden\"/></td>\n            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewgroup")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewgroup\"/></td>\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewenrollmentstatus")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewenrollmentstatus\"/></td>\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewprofile")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewprofile\"/></td>\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewemail")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewemail\"/></td>\n            ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.viewofficialphoto")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.viewofficialphoto\"/></td>\n            ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td align=\"center\"><input type=\"checkbox\" class=\"roster_permission_checkbox\" ";
  stack1 = (helper = helpers.roleAllowed || (depth0 && depth0.roleAllowed),options={hash:{
    'permission': ("roster.export")
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "roleAllowed", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":roster.export\"/></td>\n            ";
  return buffer;
  }

  buffer += "<p class=\"instruction\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_msg_permissions", options) : helperMissing.call(depth0, "translate", "title_msg_permissions", options)))
    + "</p>\n<table id=\"roster_permissions_table\" class=\"listHier lines tableList\">\n    <thead>\n        <tr class=\"listHier\">\n            <th style=\"text-align:center;\">Permission</th>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td align=\"left\">viewallmembers</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">viewhidden</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n	        <td align=\"left\">viewgroup</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">viewenrollmentstatus</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">viewprofile</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">viewemail</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">viewofficialphoto</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n        <tr>\n            <td align=\"left\">export</td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n    </tbody>\n</table>\n<div class=\"act\">\n    <input id=\"roster_permissions_save_button\" type=\"button\" class=\"active\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_save_button", options) : helperMissing.call(depth0, "translate", "roster_save_button", options)))
    + "\"/>\n    <input id=\"roster_cancel_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_cancel_button", options) : helperMissing.call(depth0, "translate", "roster_cancel_button", options)))
    + "\"/>\n</div>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['permissions'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['permissions'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\permissions_header.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<table class=\"rosterPageHeader\">\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				<h3>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_permissions", options) : helperMissing.call(depth0, "translate", "title_permissions", options)))
    + ": ";
  if (helper = helpers.siteTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.siteTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			</td>\n			<td class=\"rosterPageHeaderRight\">\n				<input type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "print_roster", options) : helperMissing.call(depth0, "translate", "print_roster", options)))
    + "\" onclick=\"window.print()\" />\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['permissions_header'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['permissions_header'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\pics.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideNames), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewSingleColumn), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</td>\n		</tr>\n	</tbody>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <input id=\"roster_form_hide_names\" type=\"button\"\n						value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_show_names", options) : helperMissing.call(depth0, "translate", "roster_show_names", options)))
    + "\" />\n				";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <input id=\"roster_form_hide_names\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_hide_names", options) : helperMissing.call(depth0, "translate", "roster_hide_names", options)))
    + "\" />\n				";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <input id=\"roster_form_pics_view\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "view_table", options) : helperMissing.call(depth0, "translate", "view_table", options)))
    + "\"/>\n				";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <input id=\"roster_form_pics_view\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "view_single", options) : helperMissing.call(depth0, "translate", "view_single", options)))
    + "\"/>\n				";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "rosterPictures";
  }

function program12(depth0,data) {
  
  
  return "rosterPicturesSingleColumn";
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n		<tr><td>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "no_participants", options) : helperMissing.call(depth0, "translate", "no_participants", options)))
    + "</td></tr>\n	";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewSingleColumn), {hash:{},inverse:self.programWithDepth(20, program20, data, depth0),fn:self.programWithDepth(17, program17, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program17(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.membership), {hash:{},inverse:self.noop,fn:self.programWithDepth(18, program18, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program18(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "\n        <tr>\n            <td>\n                "
    + escapeExpression((helper = helpers.profilePicture || (depth2 && depth2.profilePicture),options={hash:{
    'viewProfile': ((depth2 && depth2.viewProfile))
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "profilePicture", options)))
    + "\n            </td>\n            <td>\n                "
    + escapeExpression((helper = helpers.userInfo || (depth2 && depth2.userInfo),options={hash:{
    'hideNames': ((depth2 && depth2.hideNames)),
    'firstNameLastName': ((depth2 && depth2.firstNameLastName)),
    'viewUserDisplayId': ((depth2 && depth2.viewUserDisplayId)),
    'viewProfile': ((depth2 && depth2.viewProfile)),
    'viewEmail': ((depth2 && depth2.viewEmail)),
    'viewConnections': ((depth2 && depth2.viewConnections)),
    'currentUserId': ((depth2 && depth2.currentUserId))
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "userInfo", options)))
    + "\n            </td>\n        </tr>\n            ";
  return buffer;
  }

function program20(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            \n        <tr>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.membership), {hash:{},inverse:self.noop,fn:self.programWithDepth(21, program21, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n		";
  return buffer;
  }
function program21(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td>\n                "
    + escapeExpression((helper = helpers.profilePicture || (depth2 && depth2.profilePicture),options={hash:{
    'viewProfile': ((depth2 && depth2.viewProfile))
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "profilePicture", options)))
    + "\n                "
    + escapeExpression((helper = helpers.userInfo || (depth2 && depth2.userInfo),options={hash:{
    'hideNames': ((depth2 && depth2.hideNames)),
    'firstNameLastName': ((depth2 && depth2.firstNameLastName)),
    'viewUserDisplayId': ((depth2 && depth2.viewUserDisplayId)),
    'viewProfile': ((depth2 && depth2.viewProfile)),
    'viewEmail': ((depth2 && depth2.viewEmail)),
    'viewConnections': ((depth2 && depth2.viewConnections)),
    'currentUserId': ((depth2 && depth2.currentUserId))
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "userInfo", options)))
    + "\n			</td>\n                ";
  stack1 = (helper = helpers.rowComplete || (depth2 && depth2.rowComplete),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "rowComplete", (data == null || data === false ? data : data.index), options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		    ";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return "\n        </tr>\n        <tr>\n                ";
  }

  buffer += "<table class=\"rosterPicturesFilter\">\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.membership)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n\n<table class=\"";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.viewSingleColumn), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<tbody>\n    ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.membership)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['pics'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['pics'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\pics_header.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<table class=\"rosterPageHeader\">\n	<tbody>\n		<tr>\n			<td class=\"rosterPageHeaderLeft\">\n				<h3>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "title_pictures", options) : helperMissing.call(depth0, "translate", "title_pictures", options)))
    + ": ";
  if (helper = helpers.siteTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.siteTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			</td>\n			<td class=\"rosterPageHeaderRight\">\n				<input type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "print_roster", options) : helperMissing.call(depth0, "translate", "print_roster", options)))
    + "\" onclick=\"window.print()\" />\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['pics_header'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['pics_header'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\pics_wrapper.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <input type=\"radio\" name=\"roster_picture_type\" value=\"official\" id=\"roster_official_picture_button\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkOfficialPicturesButton), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/><span>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_show_official_pictures", options) : helperMissing.call(depth0, "translate", "roster_show_official_pictures", options)))
    + "</span>\n    <input type=\"radio\" name=\"roster_picture_type\" value=\"profile\" id=\"roster_profile_picture_button\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.checkOfficialPicturesButton), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/><span>"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_show_profile_pictures", options) : helperMissing.call(depth0, "translate", "roster_show_profile_pictures", options)))
    + "</span>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"roster_type_selector\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewOfficialPhoto), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div id=\"roster_pics\"></div>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['pics_wrapper'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['pics_wrapper'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\search_with_participants.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.searchQuery) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchQuery); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_search_text", options) : helperMissing.call(depth0, "translate", "roster_search_text", options)));
  }

  buffer += "<table id=\"roster_form:search_group\" class=\"searchFilter\">\n	<tbody>\n		<tr>\n			<td>\n				<div id=\"roster_form:search_filter\" class=\"act\">\n					<input id=\"roster_form_search_field\" type=\"text\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.searchQuery), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" name=\"roster_form_search\" />\n					<input id=\"roster_form_search_button\" class=\"active\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_search_button", options) : helperMissing.call(depth0, "translate", "roster_search_button", options)))
    + "\" name=\"roster_form:search_button\" />\n					<input id=\"roster_form_clear_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_clear_button", options) : helperMissing.call(depth0, "translate", "roster_clear_button", options)))
    + "\" name=\"roster_form:clear_button\" />\n				</div>\n			</td>\n			<td>\n				<span class=\"instruction\">\n					<div class=\"rosterRoleTopLine\">";
  if (helper = helpers.participants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.participants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n					<div class=\"rosterRoleBottomLine\">(";
  if (helper = helpers.roleFragments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roleFragments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</div>\n				</span>\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['search_with_participants'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['search_with_participants'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\search_with_students.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<table id=\"roster_form:search_group\" class=\"searchFilter\">\n	<tbody>\n		<tr>\n			<td>\n				<div id=\"roster_form:search_filter\" class=\"act\">\n					<input id=\"roster_form_search_field\" type=\"text\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_search_text", options) : helperMissing.call(depth0, "translate", "roster_search_text", options)))
    + "\" name=\"roster_form_search\" />\n					<input id=\"roster_form_search_button\" class=\"active\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_search_button", options) : helperMissing.call(depth0, "translate", "roster_search_button", options)))
    + "\" name=\"roster_form:search_button\" />\n					<input id=\"roster_form_clear_button\" type=\"button\" value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_clear_button", options) : helperMissing.call(depth0, "translate", "roster_clear_button", options)))
    + "\" name=\"roster_form:clear_button\" />\n				</div>\n			</td>\n			<td>\n				<span class=\"instruction\">\n					<div class =\"rosterRoleTopLine\">";
  if (helper = helpers.students) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.students); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n				</span>\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['search_with_students'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['search_with_students'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\section_filter.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n				";
  return buffer;
  }

  buffer += "<table>\n	<tr>\n		<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "section_filter_pre", options) : helperMissing.call(depth0, "translate", "section_filter_pre", options)))
    + "</span></td>\n		<td>\n			<select id=\"roster_form_section_filter\" size=\"1\">\n				<option selected=\"selected\" value=\"\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_sections_all", options) : helperMissing.call(depth0, "translate", "roster_sections_all", options)))
    + "</option>\n				<option value=\""
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_section_sep_line", options) : helperMissing.call(depth0, "translate", "roster_section_sep_line", options)))
    + "\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "roster_section_sep_line", options) : helperMissing.call(depth0, "translate", "roster_section_sep_line", options)))
    + "</option>\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.siteGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</select>\n		</td>\n		<td><span class=\"filterLabel\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "section_filter_post", options) : helperMissing.call(depth0, "translate", "section_filter_post", options)))
    + "</span></td>\n	</tr>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['section_filter'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['section_filter'] = template;


// Source: C:\opt\sakai-master-10-7\roster2\src\webapp\WEB-INF\templates\ungrouped.handlebars

  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n				<th width=\"10%\"><a href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_userId", options) : helperMissing.call(depth0, "translate", "facet_userId", options)))
    + "</a></th>\n			";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<tr onMouseOver=\"this.className='rosterTableRowHighlight'\" onMouseOut=\"this.className='rosterTableRow'\">\n                <td>\n            ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.viewProfile), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.firstNameLastName), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.viewProfile), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </td>\n            ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<td>";
  if (helper = helpers.role) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.role); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n				<td>";
  if (helper = helpers.groupsToString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupsToString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n			</tr>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:;\" class=\"profile\" rel=\"";
  if (helper = helpers.formattedProfileUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formattedProfileUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    ";
  if (helper = helpers.sortName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sortName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n                    </a>\n            ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <td>";
  if (helper = helpers.displayId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            ";
  return buffer;
  }

  buffer += "<table cellspacing=\"0\" cellpadding=\"0\" class=\"listHier rosterTable\" id=\"roster_form_rosterTable\">\n	<thead>\n		<tr>\n            <th width=\"35%\"><a href=\"javascript:;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_name", options) : helperMissing.call(depth0, "translate", "facet_name", options)))
    + "</a></th>\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewUserDisplayId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<th width=\"15%\"><a href=\"javascript;;\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_role", options) : helperMissing.call(depth0, "translate", "facet_role", options)))
    + "</a></th>\n			<th width=\"50%\">"
    + escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},data:data},helper ? helper.call(depth0, "facet_groups", options) : helperMissing.call(depth0, "translate", "facet_groups", options)))
    + "</th>\n		</tr>\n	</thead>\n	<tbody>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.membership), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</tbody>\n</table>\n";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['ungrouped'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['ungrouped'] = template;



})();