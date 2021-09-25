(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['productos'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <table class=\"table table-dark table-hover\">\n    <thead>\n      <tr class=\"text-center\" >\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Producto</th>\n        <th scope=\"col\">Precio</th>\n        <th scope=\"col\">Picture URL</th>\n      </tr>\n    </thead>\n    <tbody>\n\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"products") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "\n\n\n    </tbody>\n  </table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n      <tr class=\"text-center\" >\n        <th  scope=\"row\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</th>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"price") : depth0), depth0))
    + "</td>\n        <td><img src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"pictureURL") : depth0), depth0))
    + " class=\"img-fluid\" alt="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + " width=\"60\"></td>\n      </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"text-center text-danger\">No se encontraron productos</h1>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container\">\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"products") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n\n</div>";
},"useData":true});
})();