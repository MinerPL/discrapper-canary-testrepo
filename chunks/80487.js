var a = n(735250);
n(470079);
var t = n(481060),
	r = n(984370),
	l = n(669405),
	i = n(246364),
	o = n(689938),
	c = n(859955);
s.Z = function (e) {
	let { pendingGuildJoinRequestsTotal: s, currentTab: n, onTabItemSelect: d, showSetupTab: u } = e;
	return (0, a.jsxs)(r.Z, {
		className: c.__invalid_container,
		hideSearch: !0,
		toolbar: (0, a.jsx)('div', {}),
		children: [
			(0, a.jsx)(r.Z.Icon, {
				icon: (0, t.makeIconCompat)(l.Z),
				disabled: !0,
				'aria-label': o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
			}),
			(0, a.jsx)(r.Z.Title, {
				className: c.title,
				children: o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
			}),
			(0, a.jsx)(r.Z.Divider, { className: c.divider }),
			(0, a.jsxs)(t.TabBar, {
				'aria-label': o.Z.Messages.FRIENDS,
				selectedItem: n,
				type: 'top-pill',
				onItemSelect: d,
				className: c.__invalid_tabBar,
				children: [
					u
						? (0, a.jsx)(t.TabBar.Item, {
								id: 'REVIEW_APPLICATION',
								children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE
							})
						: null,
					(0, a.jsx)(t.TabBar.Item, {
						id: i.wB.SUBMITTED,
						children: 0 === s ? o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({ count: s })
					}),
					(0, a.jsx)(t.TabBar.Item, {
						id: i.wB.APPROVED,
						children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
					}),
					(0, a.jsx)(t.TabBar.Item, {
						id: i.wB.REJECTED,
						children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
					})
				]
			})
		]
	});
};
