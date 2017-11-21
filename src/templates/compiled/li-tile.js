import Handlebars from "handlebars";export default Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href='"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "' target='_blank'>\n    <li class='user-tile'>\n        <div class='row-1'>\n            <div class='col user-logo'>\n                <img src= "
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + ">\n            </div>\n            <div class='col user-details'>\n                <div class='display-name'>\n                    <p>"
    + alias4(((helper = (helper = helpers.display_name || (depth0 != null ? depth0.display_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"display_name","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n                <div class='user-status'>\n                    <p>"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n            <div class='col online-status'>\n                <p class='"
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n        <div class='row-2'>\n            <div class='col likes'>\n                <div class='col likes-icon'>\n                    <i class='fa fa-heart'></i>\n                </div>\n                <div class='col likes-count'>\n                    <p>"
    + alias4(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"followers","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n            <div class='col views'>\n                <div class='col views-icon'>\n                    <i class='fa fa-eye fa-lg'></i>\n                </div>\n                <div class='col views-count'>\n                    <p>"
    + alias4(((helper = (helper = helpers.views || (depth0 != null ? depth0.views : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"views","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n        </div>\n    </li>\n</a>\n";
},"useData":true});