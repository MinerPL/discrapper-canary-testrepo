var r = n(735250),
	i = n(470079),
	a = n(302454),
	s = n.n(a),
	o = n(481060),
	l = n(100527),
	u = n(906732),
	c = n(49012);
t.Z = i.memo(function (e) {
	let { onClick: t, trusted: n, title: a, href: d, children: _, messageId: E, channelId: f, ...h } = e,
		{ analyticsLocations: p } = (0, u.ZP)(l.Z.MASKED_LINK),
		m = i.useCallback((t) => (0, c.q)(e, t, p), [p, e]),
		I = i.useCallback(
			(e) => {
				1 === e.button && m(e);
			},
			[m]
		),
		T = s().sanitizeUrl(d);
	return (0, r.jsx)(o.Anchor, {
		...h,
		title: a,
		target: '_blank',
		rel: 'noreferrer noopener',
		href: T,
		onClick: m,
		onAuxClick: I,
		children: null != _ ? _ : a
	});
});
