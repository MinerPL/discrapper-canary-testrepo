n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(259580),
	r = n(528027),
	l = n(686807),
	o = n(113318),
	c = n(173825);
function u(e) {
	let { benefit: t, guildId: n, onClick: u } = e,
		d = (0, o.Z)(n, t.ref_id),
		_ = (0, i.jsx)(r.Z, {
			guildId: n,
			emojiId: t.emoji_id,
			emojiName: t.emoji_name
		});
	return (0, i.jsxs)(a.Clickable, {
		className: c.container,
		onClick: () => {
			null == d || d.navigateToChannel(), u();
		},
		'aria-label': null == d ? void 0 : d.ariaLabel,
		role: 'link',
		children: [
			(0, i.jsx)('div', {
				className: c.emojiContainer,
				children: _
			}),
			(0, i.jsxs)('div', {
				className: c.infoContainer,
				children: [
					(0, i.jsx)(a.Text, {
						variant: 'text-md/medium',
						color: 'header-primary',
						className: c.name,
						children: (0, l.Z)(t)
					}),
					(0, i.jsx)(a.Text, {
						color: 'interactive-normal',
						variant: 'text-sm/normal',
						children: t.description
					})
				]
			}),
			(0, i.jsx)(s.Z, {
				direction: s.Z.Directions.RIGHT,
				className: c.caret
			})
		]
	});
}
