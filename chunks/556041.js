var i = n(735250);
n(470079);
var a = n(481060),
	s = n(600164),
	r = n(245315),
	l = n(689938),
	o = n(770330);
t.Z = () =>
	(0, i.jsxs)(s.Z, {
		align: s.Z.Align.CENTER,
		justify: s.Z.Justify.CENTER,
		direction: s.Z.Direction.VERTICAL,
		className: o.popout,
		children: [
			(0, i.jsx)('img', {
				alt: '',
				src: (0, r.QA)(),
				className: o.avatar
			}),
			(0, i.jsxs)(s.Z, {
				align: s.Z.Align.CENTER,
				justify: s.Z.Justify.CENTER,
				className: o.nameWrapper,
				children: [
					(0, i.jsx)(a.Tooltip, {
						text: l.Z.Messages.STAFF_BADGE_TOOLTIP,
						children: (e) =>
							(0, i.jsx)('div', {
								...e,
								className: o.staffBadge
							})
					}),
					(0, i.jsx)(a.Heading, {
						className: o.header,
						variant: 'heading-md/semibold',
						children: l.Z.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
					})
				]
			}),
			(0, i.jsx)(a.Text, {
				className: o.description,
				color: 'header-secondary',
				variant: 'text-sm/normal',
				children: l.Z.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
			}),
			(0, i.jsx)(a.Text, {
				className: o.description,
				color: 'header-secondary',
				variant: 'text-sm/normal',
				children: l.Z.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
			})
		]
	});
