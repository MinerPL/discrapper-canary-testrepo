n.d(t, {
	Z: function () {
		return _;
	}
});
var s = n(735250);
n(470079);
var a = n(481060),
	i = n(293810),
	r = n(689938),
	l = n(277427),
	o = n(961618),
	c = n(217684),
	d = n(174618);
function u(e) {
	let { imageSrc: t, description: n } = e;
	return (0, s.jsxs)('div', {
		className: l.howItWorksCard,
		children: [
			(0, s.jsx)('div', {
				className: l.howItWorksImageContainer,
				children: (0, s.jsx)('img', {
					className: l.howItWorksImage,
					src: t,
					alt: ''
				})
			}),
			(0, s.jsx)('div', {
				className: l.howItWorksDescription,
				children: (0, s.jsx)(a.Text, {
					variant: 'text-sm/normal',
					color: 'header-primary',
					children: n
				})
			})
		]
	});
}
function _() {
	let e = [
		{
			imageSrc: d,
			description: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_1
		},
		{
			imageSrc: o,
			description: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_2
		},
		{
			imageSrc: c,
			description: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_3
		}
	];
	return (0, s.jsxs)('div', {
		children: [
			(0, s.jsx)(a.Heading, {
				variant: 'heading-lg/semibold',
				color: 'header-primary',
				children: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_TITLE
			}),
			(0, s.jsx)(a.Spacer, { size: 24 }),
			(0, s.jsx)('div', {
				className: l.howItWorksContainer,
				children: e.map((e) =>
					(0, s.jsx)(
						u,
						{
							imageSrc: e.imageSrc,
							description: e.description
						},
						e.imageSrc
					)
				)
			}),
			(0, s.jsx)(a.Spacer, { size: 24 }),
			(0, s.jsx)(a.Text, {
				variant: 'text-sm/normal',
				color: 'header-secondary',
				children: r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_FOOTER.format({ creatorPortalUrl: i.C5 })
			})
		]
	});
}
