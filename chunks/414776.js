n.d(t, {
	B0: function () {
		return u;
	},
	IP: function () {
		return o;
	},
	Qb: function () {
		return s;
	},
	UI: function () {
		return l;
	},
	j$: function () {
		return i;
	},
	je: function () {
		return a;
	}
});
var r = Symbol.for('FluidValue:config'),
	i = function (e) {
		return !!s(e);
	};
function a(e) {
	var t = s(e);
	return t ? t.get() : e;
}
function s(e) {
	if (e) return e[r];
}
function o(e, t) {
	Object.defineProperty(e, r, {
		value: t,
		configurable: !0
	});
}
function l(e, t) {
	var n = s(e);
	if (n)
		return (
			n.addChild(t),
			function () {
				return n.removeChild(t);
			}
		);
}
var u = function () {
	o(this, this);
};
