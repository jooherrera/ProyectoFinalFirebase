(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nuevoProducto'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <h2 class=\"text-center mb-3\"> Ingrese producto</h2>\n    <form class=\"form-floating\" action=\"http://localhost:8080/productos\" method=\"POST\" id=\"Form\" >\n    <div class=\"form-floating mb-3\">\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Nombre\" name=\"title\" required>\n      <label for=\"floatingInput\">Nombre</label>\n    </div>\n    <div class=\"form-floating mb-3\">\n      <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Precio\" name=\"price\" required>\n      <label for=\"floatingInput\">Precio</label>\n    </div>\n    <div class=\"form-floating mb-3\">\n      <input type=\"text\" class=\"form-control\" id=\"pictureURL\" placeholder=\"pictureURL\" name=\"pictureURL\" required>\n      <label for=\"floatingPassword\">Foto URL</label>\n    </div> \n\n     <div class=\"form-floating mb-3\">\n      <input type=\"text\" class=\"form-control\" id=\"descripcion\" placeholder=\"descripcion\" name=\"descripcion\" required>\n      <label for=\"floatingPassword\">Descripcion</label>\n    </div>\n\n     <div class=\"form-floating mb-3\">\n      <input type=\"number\" class=\"form-control\" id=\"codigo\" placeholder=\"codigo\" name=\"codigo\" required>\n      <label for=\"floatingPassword\">Codigo</label>\n    </div>\n     <div class=\"form-floating mb-3\">\n      <input type=\"number\" class=\"form-control\" id=\"stock\" placeholder=\"stock\" name=\"stock\" required>\n      <label for=\"floatingPassword\">Stock</label>\n    </div>\n\n    <div class=\"d-flex justify-content-around m-auto w-50\">\n      <div class=\"text-center mt-5\">\n        <a href=\"index.html\">\n         <button type=\"button\" id=\"btnBacj\" class=\"btn btn-danger mb-3\">Volver</button>\n      </a>\n        <button type=\"submit\" id=\"send\" class=\"btn btn-primary mb-3\">Enviar</button>\n       \n      </div>\n\n\n  </div>\n  </form>\n\n \n\n<!-- Button trigger modal -->\n\n  \n  </div> \n";
},"useData":true});
})();