var makerjs = require('makerjs');
var constructor = require('./smile');
var parameters = makerjs.kit.getParameterValues(constructor);

//optionally, override parameters here:
parameters[0] = 60;
parameters[2] = 5;

var model = makerjs.kit.construct(constructor, parameters);
var svg = makerjs.exporter.toSVG(model);
var app = document.getElementById('app');
app.innerHTML = svg;
