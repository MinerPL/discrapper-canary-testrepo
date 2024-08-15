n.d(t, {
	fW: function () {
		return c;
	},
	jc: function () {
		return d;
	}
}),
	n(47120),
	n(653041);
var r = n(470079),
	i = n(823379),
	a = n(568315),
	s = n(83126),
	o = n(617191),
	l = n(82554);
let u = {
	[l.zR.SAFETY_DM_SPAM_FILTER]: a.Z,
	[l.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: o.Z,
	[l.zR.SAFETY_LANGUAGE_FILTER]: s.Z
};
function c(e) {
	return r.useMemo(
		() =>
			null != e
				? (function (e) {
						let t = [];
						return (
							Object.entries(u).forEach((n) => {
								let [r, i] = n;
								(null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(r);
							}),
							0 === t.length ? null : t
						);
					})(e)
				: null,
		[e]
	);
}
function d(e, t) {
	return r.useMemo(
		() =>
			e
				.map((e) =>
					(function (e, t) {
						let n = u[e];
						return (function (e, t) {
							let { predicate: n, eligibleChannelTypes: r } = e,
								i = null == n || (null == n ? void 0 : n()) === !0,
								a = null == t || null == r || r.includes(t);
							return i && a;
						})(n, t)
							? n
							: null;
					})(e, t)
				)
				.filter(i.lm),
		[e, t]
	);
}
