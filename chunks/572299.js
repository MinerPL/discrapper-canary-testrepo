n.d(e, {
	n: function () {
		return o;
	}
});
var r = n(101284),
	i = n(622916),
	s = n(263449);
function o(t, e) {
	let n = (0, s.s3)(),
		o = (0, s.aF)();
	if (!n) return;
	let { beforeBreadcrumb: u = null, maxBreadcrumbs: c = 100 } = n.getOptions();
	if (c <= 0) return;
	let a = {
			timestamp: (0, r.yW)(),
			...t
		},
		l = u ? (0, i.Cf)(() => u(a, e)) : a;
	null !== l && (n.emit && n.emit('beforeAddBreadcrumb', l, e), o.addBreadcrumb(l, c));
}
