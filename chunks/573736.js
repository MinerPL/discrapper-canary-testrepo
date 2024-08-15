n.d(e, {
	Cy: function () {
		return m;
	},
	HD: function () {
		return a;
	},
	J8: function () {
		return g;
	},
	Kj: function () {
		return d;
	},
	Le: function () {
		return l;
	},
	PO: function () {
		return h;
	},
	TX: function () {
		return u;
	},
	V9: function () {
		return y;
	},
	VW: function () {
		return o;
	},
	VZ: function () {
		return i;
	},
	cO: function () {
		return p;
	},
	fm: function () {
		return c;
	},
	kK: function () {
		return _;
	},
	pt: function () {
		return f;
	},
	y1: function () {
		return v;
	}
});
let r = Object.prototype.toString;
function i(t) {
	switch (r.call(t)) {
		case '[object Error]':
		case '[object Exception]':
		case '[object DOMException]':
			return !0;
		default:
			return y(t, Error);
	}
}
function s(t, e) {
	return r.call(t) === `[object ${e}]`;
}
function o(t) {
	return s(t, 'ErrorEvent');
}
function u(t) {
	return s(t, 'DOMError');
}
function c(t) {
	return s(t, 'DOMException');
}
function a(t) {
	return s(t, 'String');
}
function l(t) {
	return 'object' == typeof t && null !== t && '__sentry_template_string__' in t && '__sentry_template_values__' in t;
}
function f(t) {
	return null === t || l(t) || ('object' != typeof t && 'function' != typeof t);
}
function h(t) {
	return s(t, 'Object');
}
function p(t) {
	return 'undefined' != typeof Event && y(t, Event);
}
function _(t) {
	return 'undefined' != typeof Element && y(t, Element);
}
function d(t) {
	return s(t, 'RegExp');
}
function g(t) {
	return !!(t && t.then && 'function' == typeof t.then);
}
function m(t) {
	return h(t) && 'nativeEvent' in t && 'preventDefault' in t && 'stopPropagation' in t;
}
function y(t, e) {
	try {
		return t instanceof e;
	} catch (t) {
		return !1;
	}
}
function v(t) {
	return !!('object' == typeof t && null !== t && (t.__isVue || t._isVue));
}
