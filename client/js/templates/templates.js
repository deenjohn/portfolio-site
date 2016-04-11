(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.tmpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n  <div>\n    <ul>\n      <li><Link to=\"/\">Home</Link></li>\n      <li><Link to=\"/about\">Skills</Link></li>\n      <li><Link to=\"/portfolio\">Portfolio</Link></li>\n      <li><a href=\"http://melindabernrdo.github.io\">Blog</a></li>\n      <li><Link to=\"/contact\">Contact</Link></li>\n    </ul>\n  </div>\n  <div class=\"social-media\">\n    <ul>\n      <li>\n        <a href=\"https://twitter.com/melindabernrdo\">\n          <img src=\"./client/assets/social-media/twitter.png\" alt=\"Twitter icon\"/>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://github.com/melindabernrdo\">\n          <img src=\"./client/assets/social-media/github.png\" alt=\"github icon\"/>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://www.linkedin.com/in/melindabernardo\">\n          <img src=\"./client/assets/social-media/linkedin.png\" alt=\"linkedin icon\"/>\n        </a>\n      </li>\n    </ul>\n  </div>\n    <span>Copyright 2016 Melinda Bernardo - All Rights Reserved</span>\n  </div>\n</footer>\n    \n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav.tmpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div className=\"nav\">\n  <ul>\n    <li><Link to=\"/about\">Skills</Link></li>\n    <li><Link to=\"/portfolio\">Portfolio</Link></li>\n    <li><Link to=\"/\"><img class=\"logo\" src=\"./client/assets/logo.png\"/></Link></li>\n    <li><a href=\"http://melindabernrdo.github.io\">Blog</a></li>\n    <li><Link to=\"/contact\">Contact</Link></li>\n  </ul>\n</div>\n";
},"useData":true});
})();
