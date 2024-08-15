n.d(t, {
	B8: function () {
		return s;
	},
	Jn: function () {
		return u;
	},
	L_: function () {
		return d;
	},
	Ym: function () {
		return l;
	},
	g7: function () {
		return _;
	},
	m4: function () {
		return o;
	},
	sA: function () {
		return E;
	},
	wb: function () {
		return c;
	}
});
var r = '[-+]?\\d*\\.?\\d+',
	i = r + '%';
function a() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var s = RegExp('rgb' + a(r, r, r)),
	o = RegExp('rgba' + a(r, r, r, r)),
	l = RegExp('hsl' + a(r, i, i)),
	u = RegExp('hsla' + a(r, i, i, r)),
	c = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	_ = /^#([0-9a-fA-F]{6})$/,
	E = /^#([0-9a-fA-F]{8})$/;
