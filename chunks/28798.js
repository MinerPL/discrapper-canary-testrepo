var l = t(735250);
t(470079);
var s = t(442837),
	a = t(780384),
	r = t(481060),
	i = t(210887),
	o = t(918701),
	c = t(231338),
	u = t(689938),
	d = t(814605);
n.Z = function (e) {
	let { quest: n } = e,
		t = (0, s.e7)([i.Z], () => i.Z.getState().theme),
		m = (0, a.wj)(t) ? c.BR.DARK : c.BR.LIGHT;
	return (0, l.jsx)('div', {
		className: d.wrapper,
		children: (0, l.jsxs)('div', {
			className: d.content,
			children: [
				(0, l.jsx)('img', {
					src: (0, o.uo)(n, m),
					alt: '',
					className: d.gameTile
				}),
				(0, l.jsxs)('div', {
					className: d.copy,
					children: [
						(0, l.jsx)(r.Heading, {
							color: 'always-white',
							variant: 'text-sm/medium',
							children: u.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({
								gameTitle: n.config.messages.gameTitle
							})
						}),
						(0, l.jsx)(r.Text, {
							className: d.subheading,
							color: 'always-white',
							variant: 'text-xs/medium',
							children: u.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
						})
					]
				})
			]
		})
	});
};
