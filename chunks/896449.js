n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(239091),
	l = n(299206),
	r = n(810568),
	o = n(168524),
	c = n(725119),
	u = n(26033),
	d = n(689938),
	h = n(243113);
function m(e) {
	var t;
	let { user: n, guildId: m, channel: p, entry: _, onSelect: f } = e,
		E = (0, c.Z)({
			userId: n.id,
			guildId: m,
			channelId: p.id
		}),
		g = (0, l.Z)({
			id: n.id,
			label: d.Z.Messages.COPY_ID_USER
		}),
		C = (0, u.dX)(_),
		I = (0, o.Z)({
			location: 'ContentPopoutContextMenu',
			applicationId: C ? (null === (t = _.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
			source: r.m1.ActivityCardContextMenu,
			trackEntryPointImpression: !0,
			sourceUserId: _.author_id
		});
	return (0, i.jsx)(a.Popout, {
		align: 'top',
		position: 'right',
		disablePointerEvents: !1,
		renderPopout: (e) => {
			let { closePopout: t } = e;
			return (0, i.jsx)(a.Menu, {
				navId: 'content-inventory-context',
				onClose: () => {
					(0, s.Zy)(), t();
				},
				'aria-label': d.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: f,
				children: (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsxs)(a.MenuGroup, {
							children: [
								E,
								null != I &&
									(0, i.jsx)(a.MenuItem, {
										id: 'game-profile',
										label: d.Z.Messages.GAME_PROFILE,
										action: I
									})
							]
						}),
						(0, i.jsx)(a.MenuGroup, { children: g })
					]
				})
			});
		},
		children: (e) =>
			(0, i.jsx)(a.Clickable, {
				className: h.menuIcon,
				...e,
				children: (0, i.jsx)(a.MoreHorizontalIcon, {
					color: 'currentColor',
					size: 'custom',
					width: 16,
					height: 16
				})
			})
	});
}
