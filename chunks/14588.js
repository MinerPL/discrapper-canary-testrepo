r.d(t, {
	JY: function () {
		return n;
	},
	Q: function () {
		return a;
	},
	WG: function () {
		return o;
	}
});
function n(e, t = Date.now()) {
	let r = parseInt(`${e}`, 10);
	if (!isNaN(r)) return 1000 * r;
	let n = Date.parse(`${e}`);
	return isNaN(n) ? 60000 : n - t;
}
function a(e, t, r = Date.now()) {
	var n;
	return ((n = e)[t] || n.all || 0) > r;
}
function o(e, { statusCode: t, headers: r }, a = Date.now()) {
	let o = { ...e },
		i = r && r['x-sentry-rate-limits'],
		_ = r && r['retry-after'];
	if (i)
		for (let e of i.trim().split(',')) {
			let [t, r, , , n] = e.split(':', 5),
				i = parseInt(t, 10),
				_ = (isNaN(i) ? 60 : i) * 1000;
			if (r) for (let e of r.split(';')) 'metric_bucket' === e ? (!n || n.split(';').includes('custom')) && (o[e] = a + _) : (o[e] = a + _);
			else o.all = a + _;
		}
	else _ ? (o.all = a + n(_, a)) : 429 === t && (o.all = a + 60000);
	return o;
}
