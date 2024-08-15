var i = n(735250),
	s = n(470079),
	a = n(442837),
	o = n(831218),
	r = n(840780),
	l = n(51596),
	c = n(905423),
	d = n(237997),
	u = n(145597),
	h = n(981631),
	p = n(689938),
	f = n(319442);
let _ = () => (0, l.$Z)('DM_SEARCH');
t.Z = s.memo(function () {
	let e = (0, a.e7)([d.Z], () => (d.Z.isUILocked((0, u.QF)()) ? 'true' : 'false')),
		t = (0, c.Z)((e) => {
			let { channelId: t } = e;
			return t;
		});
	return (0, i.jsxs)('div', {
		className: f.privateChannels,
		children: [
			(0, i.jsx)('div', {
				className: f.searchBar,
				children: (0, i.jsx)('button', {
					type: 'button',
					className: f.searchBarComponent,
					onClick: _,
					children: p.Z.Messages.DM_SEARCH_PLACEHOLDER
				})
			}),
			(0, i.jsx)(o.Z, {
				padding: 8,
				theme: h.BRd.DARK,
				version: e,
				selectedChannelId: t
			}),
			(0, i.jsx)('section', {
				className: f.panels,
				'aria-label': p.Z.Messages.ACCOUNT_A11Y_LABEL,
				children: (0, i.jsx)(r.Z, { guildId: null })
			})
		]
	});
});
