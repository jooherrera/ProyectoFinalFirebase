(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['producto'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <div class=\"row  row-cols-md-3  g-4\">\n   <div class=\"col m-auto mt-3\">\n      <div class=\"card h-100 w-100\">\n        <div class=\"d-flex w-auto h-auto mt-2\">\n          <img src="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"pictureURL") : stack1), depth0))
    + " class=\"text-center m-auto\" alt=\"...\" width=\"70\" height=\"70\" >\n        </div>\n        \n        <div class=\"card-body h-auto w-auto\">\n          <h5 class=\"card-title text-center \">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h5>\n          <p class=\"card-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"descripcion") : stack1), depth0))
    + "</p>\n        </div>\n        <div class=\"card-footer  w-auto \">\n        <div class=\" d-flex  m-auto\">\n          <button type=\"button\" class=\"btn btn-primary addToCart\" id="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "> <small> Agregar al carrito</small></button>\n            <p class=\" text-center m-auto text-black-50\"><b>$"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"price") : stack1), depth0))
    + "</b></p>\n        </div>\n\n     \n           <div class=\"adminn\" style=\"visibility : hidden; display : none\">\n          <div class=\"mt-2 \" >\n             <button type=\"button\" class=\"btn btn-danger deleteBtn\" id="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + " > <small>Eliminar producto</small> </button>\n             \n          </div>\n           <div class=\"mt-2 \" >\n             <button type=\"button\" class=\"btn btn-danger actualizarBtn "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" identificador = "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + " > <small>Actualizar</small> </button>\n          </div>\n        </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n <div class=\"row  row-cols-md-3  g-4\">\n   <div class=\"col m-auto mt-3\">\n      <div class=\"card h-100 w-100\">\n        <div class=\"d-flex w-auto h-auto\">\n        </div>\n        \n        <div class=\"card-body h-auto w-auto\">\n          <h5 class=\"card-title text-center \">No existe</h5>\n          <p class=\"card-text\">El producto que estas buscando no existe.</p>\n        </div>\n        <div class=\"card-footer d-flex \">\n        \n          <button type=\"button\" disabled class=\"btn btn-primary\">Agregar al carrito</button>\n            <p class=\"text-muted text-center m-auto\">$ xxxxx </p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":61,"column":8}}})) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});
})();