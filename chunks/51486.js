n(47120);
var i = n(735250),
	a = n(470079),
	s = n(399606),
	l = n(704215),
	r = n(952265),
	o = n(481060),
	c = n(243778),
	u = n(38618),
	d = n(914010),
	h = n(921944);
function m(e) {
	return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
t.Z = a.memo(function () {
	return (
		!(function () {
			let e = (0, s.e7)([u.Z], () => u.Z.isConnected()) ? [] : [],
				[t, p] = (0, c.US)(e, h.R.GUILD_TAKEOVER_MODAL),
				_ = (0, r.f9)(),
				f = a.useRef(null);
			a.useEffect(() => {
				if (null == t) {
					f.current = null;
					return;
				}
				if (!_ && f.current !== t)
					!(function (e) {
						let { dismissibleContent: t, markAsDismissed: a } = e,
							s = {
								onCloseCallback: (e) => a(null != e ? e : h.L.UNKNOWN),
								modalKey: m(t)
							},
							r = d.Z.getGuildId();
						if (t === l.z.SERVER_SHOP_UPSELL)
							null != r &&
								(0, o.openModalLazy)(async () => {
									let { default: e } = await n.e('7302').then(n.bind(n, 756779));
									return (t) =>
										(0, i.jsx)(e, {
											...t,
											guildId: r,
											markAsDismissed: a
										});
								}, s);
					})({
						dismissibleContent: t,
						markAsDismissed: p
					}),
						(f.current = t);
			}, [t, _, p]),
				a.useEffect(
					() => () => {
						null != t && (0, r.Mr)(m(t));
					},
					[t]
				);
		})(),
		null
	);
});
