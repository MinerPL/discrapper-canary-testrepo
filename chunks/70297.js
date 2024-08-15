t.d(n, {
	Z: function () {
		return x;
	},
	q: function () {
		return p;
	}
});
var l = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(704215),
	s = t(481060),
	o = t(605236),
	c = t(434404),
	d = t(707076),
	u = t(398758),
	h = t(981631),
	m = t(921944),
	_ = t(689938),
	f = t(831427),
	C = t(697611);
function p(e) {
	return (0, u.te)(e) ? 250 : 152;
}
function x(e) {
	let { guild: n } = e,
		t = (0, u.te)(n.id),
		a = (0, o.wE)(r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
		p = t && !a ? r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : r.z.CHANNEL_BROWSER_NUX;
	(0, o.kk)(p);
	let x = t
		? (0, l.jsxs)(l.Fragment, {
				children: [
					(0, l.jsxs)('div', {
						children: [
							(0, l.jsx)(s.Heading, {
								className: f.heading,
								color: 'always-white',
								variant: 'heading-lg/semibold',
								children: _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE
							}),
							(0, l.jsx)(s.Text, {
								variant: 'text-md/normal',
								color: 'always-white',
								children: _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION
							}),
							(0, l.jsx)(s.Button, {
								className: f.checkItOut,
								onClick: () => {
									c.Z.open(n.id, h.pNK.ONBOARDING), (0, o.EW)(p, { dismissAction: m.L.PRIMARY });
								},
								color: s.Button.Colors.BRAND_INVERTED,
								children: (0, l.jsx)(s.Text, {
									variant: 'text-md/medium',
									color: 'none',
									children: _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA
								})
							})
						]
					}),
					(0, l.jsx)(d.j, { isTooltip: !0 })
				]
			})
		: (0, l.jsxs)('div', {
				className: f.nuxContent,
				children: [
					(0, l.jsx)('img', {
						width: 180,
						className: f.image,
						src: C,
						alt: '',
						'aria-hidden': !0
					}),
					(0, l.jsxs)('div', {
						children: [
							(0, l.jsx)(s.Heading, {
								className: f.heading,
								variant: 'heading-lg/semibold',
								color: 'header-primary',
								children: _.Z.Messages.CHANNEL_BROWSER_NUX_TITLE
							}),
							(0, l.jsx)(s.Text, {
								variant: 'text-md/normal',
								color: 'header-secondary',
								children: _.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION
							}),
							(0, l.jsx)(s.Text, {
								className: f.tip,
								variant: 'text-md/normal',
								color: 'header-secondary',
								children: _.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format()
							})
						]
					})
				]
			});
	return (0, l.jsxs)('div', {
		className: i()(f.container, { [f.adminUpsell]: t }),
		children: [
			(0, l.jsx)(s.Clickable, {
				className: f.closeButton,
				onClick: () => {
					(0, o.EW)(p, { dismissAction: m.L.DISMISS });
				},
				children: (0, l.jsx)(s.XSmallIcon, {
					size: 'md',
					color: 'currentColor'
				})
			}),
			x
		]
	});
}
