n.d(t, {
	Z: function () {
		return f;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(399606),
	l = n(524437),
	o = n(481060),
	c = n(494404),
	u = n(377171),
	d = n(317632),
	_ = n(602478),
	E = n(768943),
	I = n(121254),
	m = n(742989),
	T = n(818186),
	h = n(689938),
	N = n(182987);
function f(e) {
	let { tab: t, setTab: n, children: a, badgeState: f, closePopout: C } = e,
		{ showReminders: p } = m.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
		{ enabled: g } = I.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }),
		{ enabled: S } = _.Z.useExperiment({ location: 'RecentsHeader' }),
		A = (0, r.e7)([d.Z], () => d.Z.getUnseenInviteCount()),
		R = (0, r.e7)([E.Z], () => E.Z.getMessageReminders()).length;
	return (0, i.jsxs)(c.h4, {
		className: s()(N.header, N.expanded),
		children: [
			(0, i.jsxs)('div', {
				className: s()(N.expandedInboxHeader),
				children: [
					(0, i.jsx)(o.InboxIcon, {
						size: 'md',
						color: 'currentColor',
						className: N.inboxIcon
					}),
					(0, i.jsx)(o.Text, {
						className: N.inboxTitle,
						variant: 'text-lg/semibold',
						children: h.Z.Messages.INBOX
					}),
					(0, i.jsx)(T.Z, { closePopout: C })
				]
			}),
			(0, i.jsxs)('div', {
				className: s()(N.expandedTabSection),
				children: [
					(0, i.jsxs)(o.TabBar, {
						selectedItem: t,
						type: 'top-pill',
						onItemSelect: n,
						children: [
							(0, i.jsxs)(o.TabBar.Item, {
								id: l.X.FOR_YOU,
								'aria-label': h.Z.Messages.FOR_YOU,
								className: s()(N.tab, N.expanded, { [N.active]: t === l.X.FOR_YOU }),
								children: [
									h.Z.Messages.FOR_YOU,
									(null == f ? void 0 : f.badgeForYou)
										? (0, i.jsx)(o.CircleBadge, {
												color: u.Z.STATUS_DANGER,
												className: s()(N.iconBadge)
											})
										: null
								]
							}),
							(0, i.jsx)(o.TabBar.Item, {
								id: l.X.UNREADS,
								className: s()(N.tab, N.expanded, { [N.active]: t === l.X.UNREADS }),
								children: h.Z.Messages.UNREADS_TAB_LABEL
							}),
							(0, i.jsx)(o.TabBar.Item, {
								'aria-label': h.Z.Messages.MENTIONS,
								id: l.X.MENTIONS,
								className: s()(N.tab, N.expanded, { [N.active]: t === l.X.MENTIONS }),
								children: h.Z.Messages.MENTIONS
							}),
							S
								? (0, i.jsxs)(o.TabBar.Item, {
										'aria-label': 'game_invites',
										id: l.X.GAME_INVITES,
										className: s()(N.tab, N.expanded, { [N.active]: t === l.X.GAME_INVITES }),
										children: [
											h.Z.Messages.GAME_INVITES,
											A > 0
												? (0, i.jsx)(o.CircleBadge, {
														color: u.Z.STATUS_DANGER,
														className: s()(N.iconBadge)
													})
												: null
										]
									})
								: null,
							g
								? (0, i.jsx)(o.TabBar.Item, {
										'aria-label': 'bookmarks',
										id: l.X.BOOKMARKS,
										className: s()(N.tab, N.expanded, { [N.active]: t === l.X.BOOKMARKS }),
										children: h.Z.Messages.MESSAGE_BOOKMARKS_HEADER
									})
								: null,
							p
								? (0, i.jsxs)(o.TabBar.Item, {
										'aria-label': 'todos',
										id: l.X.TODOS,
										className: s()(N.tab, N.expanded, { [N.active]: t === l.X.TODOS }),
										children: [
											h.Z.Messages.MESSAGE_REMINDERS_HEADER,
											R > 0
												? (0, i.jsx)(o.CircleBadge, {
														color: u.Z.STATUS_DANGER,
														className: s()(N.iconBadge)
													})
												: null
										]
									})
								: null
						]
					}),
					(0, i.jsx)('div', {
						className: N.controls,
						children: a
					})
				]
			})
		]
	});
}
