t.d(n, {
	P: function () {
		return N;
	},
	l: function () {
		return E;
	}
}),
	t(47120);
var i = t(735250);
t(470079);
var a = t(392711),
	l = t.n(a),
	r = t(442837),
	u = t(481060),
	s = t(984933),
	o = t(853856),
	d = t(117984),
	c = t(593214),
	_ = t(362658),
	M = t(981631),
	I = t(689938);
function f(e, n) {
	return e.type === M.d4z.GROUP_DM
		? n
			? I.Z.Messages.UNFAVORITE_GDM
			: I.Z.Messages.FAVORITE_GDM
		: e.type === M.d4z.DM
			? n
				? I.Z.Messages.UNFAVORITE_DM
				: I.Z.Messages.FAVORITE_DM
			: n
				? I.Z.Messages.UNFAVORITE_CHANNEL
				: I.Z.Messages.FAVORITE_CHANNEL;
}
function E(e) {
	let n = (0, r.e7)([s.ZP], () => s.ZP.getChannels(M.I_8))[M.d4z.GUILD_CATEGORY],
		{ isFavoritesPerk: t } = (0, _.z)('58e21a_1'),
		{ notifyFavoriteAdded: a } = (0, c.up)();
	if (!(0, c.li)(e)) return null;
	let [[o], I] = l().partition(n, (e) => 'null' === e.channel.id);
	function E(n) {
		a(), (0, d.kj)(e.id, n);
	}
	return 0 === I.length
		? (0, i.jsx)(u.MenuItem, {
				id: 'favorite-channel',
				label: f(e, !1),
				action: () => E(null)
			})
		: (0, i.jsxs)(u.MenuItem, {
				id: 'favorite-channel',
				label: f(e, !1),
				action: () => E(null),
				children: [
					t &&
						(0, i.jsx)(u.MenuGroup, {
							children: (0, i.jsx)(
								u.MenuItem,
								{
									id: 'favorite-'.concat(o.channel.id),
									label: o.channel.name,
									action: () => E('null' === o.channel.id ? null : o.channel.id)
								},
								o.channel.id
							)
						}),
					(0, i.jsx)(u.MenuGroup, {
						children: I.map((e) =>
							(0, i.jsx)(
								u.MenuItem,
								{
									id: 'favorite-'.concat(e.channel.id),
									label: e.channel.name,
									action: () => E(e.channel.id)
								},
								e.channel.id
							)
						)
					})
				]
			});
}
function N(e) {
	let n = (0, r.e7)([o.Z], () => o.Z.isFavorite(e.id));
	return __OVERLAY__ || !n
		? null
		: (0, i.jsx)(u.MenuItem, {
				id: 'favorite-channel',
				label: f(e, !0),
				color: 'danger',
				action: () =>
					e.type === M.d4z.GUILD_CATEGORY
						? (0, u.openModalLazy)(async () => {
								let { default: n } = await t.e('37720').then(t.bind(t, 357632));
								return (t) =>
									(0, i.jsx)(n, {
										...t,
										onConfirm: () => {
											t.onClose(), (0, d.oC)(e.id);
										},
										channel: e
									});
							})
						: (0, d.oC)(e.id)
			});
}
