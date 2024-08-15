n.d(t, {
	f: function () {
		return a;
	}
});
var r = n(695170),
	i = n(686942);
function a(e, t, n, a, s, o) {
	for (var l = [], u = 0; u < e.length; u++) {
		var c = void 0,
			d = void 0,
			_ = e[u];
		_ < 0
			? ((c = Math.floor(_ / t.length)), (d = (0, i.Vy)(_, t.length)))
			: ((c = Math.floor((_ - 1) / t.length)), (d = (0, i.Vy)(_ - 1, t.length)));
		for (var E = [], f = n; f < a; f++) {
			var h = o[f];
			(0, i.EN)(h) && E.push(h);
		}
		var p = void 0;
		p = c < 0 ? E.slice(c)[0] : E[c];
		var I = t[d],
			m = (0, r.zU)(s.yearordinal + p),
			T = (0, r.$e)(m, I);
		!(0, i.q9)(l, T) && l.push(T);
	}
	return (0, r.DY)(l), l;
}
