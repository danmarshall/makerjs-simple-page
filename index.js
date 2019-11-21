import * as makerjs from 'makerjs';
import { Smile } from './smile';

const constructor = Smile;
const parameters = makerjs.kit.getParameterValues(constructor);

//optionally, override parameters here:
parameters[0] = 60;
parameters[2] = 5;

const model = makerjs.kit.construct(constructor, parameters);
const svg = makerjs.exporter.toSVG(model);
const app = document.getElementById('app');
app.innerHTML = svg;
