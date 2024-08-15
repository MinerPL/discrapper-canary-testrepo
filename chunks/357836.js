n.d(t, {
	Z: function () {
		return _;
	}
});
var r = n(735250),
	i = n(442837),
	a = n(481060),
	s = n(970321),
	o = n(621853),
	l = n(523034),
	u = n(475413),
	c = n(689938);
function d(e) {
	let { user: t, guildId: n, onClick: i, ...s } = e;
	return (
		(0, l.Z)({
			user: t,
			guildId: n
		}),
		(0, r.jsx)(u.tG, {
			action: 'PRESS_APP_STOREFRONT',
			icon: a.ShopIcon,
			text: c.Z.Messages.STOREFRONT,
			color: a.ButtonColors.BRAND,
			themeColor: 'none',
			onClick: i,
			...s
		})
	);
}
function _(e) {
	var t;
	let { user: l, guildId: u, ...c } = e,
		_ = (0, i.e7)([o.Z], () => {
			var e;
			return null === (e = o.Z.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application;
		}),
		E = (0, s.R)(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : '');
	return null != _ && E
		? (0, r.jsx)(d, {
				user: l,
				guildId: u,
				onClick: () => {
					(0, a.openModalLazy)(async () => {
						let { default: e } = await Promise.all([
							n.e('29549'),
							n.e('31605'),
							n.e('81272'),
							n.e('89131'),
							n.e('40907')
						]).then(n.bind(n, 7225));
						return (t) =>
							(0, r.jsx)(e, {
								appId: _.id,
								onlySubscribeServerSubForGuildId: u,
								...t
							});
					});
				},
				...c
			})
		: null;
}
