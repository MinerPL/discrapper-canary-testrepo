var n, i, o, a;
function s(t) {
	return t.type === n.literal;
}
function u(t) {
	return t.type === n.argument;
}
function c(t) {
	return t.type === n.number;
}
function l(t) {
	return t.type === n.date;
}
function h(t) {
	return t.type === n.time;
}
function f(t) {
	return t.type === n.select;
}
function p(t) {
	return t.type === n.plural;
}
function d(t) {
	return t.type === n.pound;
}
function m(t) {
	return t.type === n.tag;
}
function v(t) {
	return !!(t && 'object' == typeof t && t.type === i.number);
}
function g(t) {
	return !!(t && 'object' == typeof t && t.type === i.dateTime);
}
function y(t) {
	return {
		type: n.literal,
		value: t
	};
}
function b(t, e) {
	return {
		type: n.number,
		value: t,
		style: e
	};
}
r.d(e, {
	HI: function () {
		return m;
	},
	Ii: function () {
		return g;
	},
	Jo: function () {
		return p;
	},
	O4: function () {
		return s;
	},
	VG: function () {
		return u;
	},
	Wh: function () {
		return v;
	},
	Wi: function () {
		return f;
	},
	aV: function () {
		return i;
	},
	mD: function () {
		return y;
	},
	pe: function () {
		return h;
	},
	qx: function () {
		return b;
	},
	rp: function () {
		return l;
	},
	uf: function () {
		return c;
	},
	wD: function () {
		return n;
	},
	yx: function () {
		return d;
	}
}),
	((o = n || (n = {}))[(o.literal = 0)] = 'literal'),
	(o[(o.argument = 1)] = 'argument'),
	(o[(o.number = 2)] = 'number'),
	(o[(o.date = 3)] = 'date'),
	(o[(o.time = 4)] = 'time'),
	(o[(o.select = 5)] = 'select'),
	(o[(o.plural = 6)] = 'plural'),
	(o[(o.pound = 7)] = 'pound'),
	(o[(o.tag = 8)] = 'tag'),
	((a = i || (i = {}))[(a.number = 0)] = 'number'),
	(a[(a.dateTime = 1)] = 'dateTime');
