"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.parse = void 0;
const js_yaml = require("js-yaml");
const yaml = require("yaml");
function parse(data) {
    return js_yaml.load(data);
}
exports.parse = parse;
function stringify(data) {
    return yaml.stringify(data);
}
exports.stringify = stringify;
