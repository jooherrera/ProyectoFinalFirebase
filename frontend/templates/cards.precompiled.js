(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cards'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  \n  <div class=\"row  row-cols-1 row-cols-md-3  g-4\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "   <div class=\"col m-auto mt-3\">\n      <div class=\"card h-100 w-100\">\n        <div class=\"d-flex w-auto h-auto mt-2\">\n          <img src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"pictureURL") : depth0), depth0))
    + " class=\"text-center m-auto\" alt=\"...\" width=\"70\" height=\"70\" >\n        </div>\n        \n        <div class=\"card-body h-auto w-auto\">\n          <h5 class=\"card-title  text-center text-capitalize\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h5>\n          <p class=\"card-text\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"descripcion") : depth0), depth0))
    + "</p>\n        </div>\n        <div class=\"card-footer  w-auto \">\n        <div class=\" d-flex  m-auto\">\n          <button type=\"button\" class=\"btn btn-primary addToCart\"  id="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"_id") : depth0), depth0))
    + "> <small> Agregar al carrito</small></button>\n            <p class=\" text-center m-auto text-black-50\"><b>$"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"price") : depth0), depth0))
    + "</b></p>\n        </div>\n        <div class=\"adminn\" style=\"visibility : hidden; display : none\">\n          <div class=\"mt-2 \" >\n             <button type=\"button\" class=\"btn btn-danger deleteBtn\" id="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"_id") : depth0), depth0))
    + " > <small>Eliminar producto</small> </button>\n             \n          </div>\n           <div class=\"mt-2 \" >\n             <button type=\"button\" class=\"btn btn-danger actualizarBtn \"  identificador = "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"_id") : depth0), depth0))
    + " > <small>Actualizar</small> </button>\n          </div>\n        </div>\n         \n\n        </div>\n\n      </div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "\n  <div class=\"row  row-cols-md-3  g-4\">\n   <div class=\"col m-auto mt-3\">\n      <div class=\"card h-100 w-100\">\n        <div class=\"d-flex w-auto h-auto\">\n        </div>\n        \n        <div class=\"card-body h-auto w-auto\">\n          <h5 class=\"card-title text-center \">No existe</h5>\n          <p class=\"card-text\">El producto que estas buscando no existe.</p>\n        </div>\n        <div class=\"card-footer d-flex \">\n        \n          <button type=\"button\" disabled class=\"btn btn-primary\">Agregar al carrito</button>\n            <p class=\"text-muted text-center m-auto\">$ xxxxx </p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":63,"column":8}}})) != null ? stack1 : "")
    + "\n\n\n\n</div>\n<script src=\"./addToCart.js\"></script>";
},"useData":true});
})();