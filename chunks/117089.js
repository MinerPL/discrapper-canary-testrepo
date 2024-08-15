n.d(t, {
	D: function () {
		return a;
	}
});
var r = n(812975),
	i = n(686942);
function a(e, t, n, a, s, o) {
	var l = {
			lastyear: e,
			lastmonth: t,
			nwdaymask: []
		},
		u = [];
	if (o.freq === r.Ci.YEARLY) {
		if ((0, i.cS)(o.bymonth)) u = [[0, n]];
		else for (var c = 0; c < o.bymonth.length; c++) (t = o.bymonth[c]), u.push(a.slice(t - 1, t + 1));
	} else o.freq === r.Ci.MONTHLY && (u = [a.slice(t - 1, t + 1)]);
	if ((0, i.cS)(u)) return l;
	l.nwdaymask = (0, i.rx)(0, n);
	for (var c = 0; c < u.length; c++) {
		for (var d = u[c], _ = d[0], E = d[1] - 1, f = 0; f < o.bynweekday.length; f++) {
			var h = void 0,
				p = o.bynweekday[f],
				I = p[0],
				m = p[1];
			m < 0
				? ((h = E + (m + 1) * 7), (h -= (0, i.Vy)(s[h] - I, 7)))
				: ((h = _ + (m - 1) * 7), (h += (0, i.Vy)(7 - s[h] + I, 7))),
				_ <= h && h <= E && (l.nwdaymask[h] = 1);
		}
	}
	return l;
}
