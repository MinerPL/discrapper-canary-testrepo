let r;
n.d(e, {
	Z1: function () {
		return u;
	},
	ph: function () {
		return o;
	},
	yW: function () {
		return s;
	}
});
var i = n(899517);
function s() {
	return Date.now() / 1000;
}
let o = (function () {
		let { performance: t } = i.n;
		if (!t || !t.now) return s;
		let e = Date.now() - t.now(),
			n = void 0 == t.timeOrigin ? e : t.timeOrigin;
		return () => (n + t.now()) / 1000;
	})(),
	u = (() => {
		let { performance: t } = i.n;
		if (!t || !t.now) return;
		let e = t.now(),
			n = Date.now(),
			r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 3600000,
			s = t.timing && t.timing.navigationStart,
			o = 'number' == typeof s ? Math.abs(s + e - n) : 3600000;
		if (r < 3600000 || o < 3600000) return r <= o ? t.timeOrigin : s;
		return n;
	})();
