'use strict';

var n = require('js-yaml');
var t = require('yaml');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var n__namespace = /*#__PURE__*/_interopNamespace(n);
var t__namespace = /*#__PURE__*/_interopNamespace(t);

function a(r){return n__namespace.load(r)}function i(r){return t__namespace.stringify(r)}

exports.parse = a;
exports.stringify = i;
