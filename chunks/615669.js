t.d(n, {
	Z: function () {
		return o;
	},
	z: function () {
		return i;
	}
}),
	t(653041);
var i,
	a,
	l = t(442837),
	r = t(314897);
(a = i || (i = {}))[(a.END_EARLY = 0)] = 'END_EARLY';
let s = [];
function o(e) {
	let n = (0, l.e7)([r.default], () => r.default.getId()),
		{ poll: t } = e;
	if (!e.isPoll() || null == t) return s;
	let i = [];
	return !t.expiry.isSameOrBefore(Date.now()) && e.author.id === n && i.push(0), i;
}
