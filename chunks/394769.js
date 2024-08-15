var r = n(735250);
n(470079);
var i = n(338545),
	a = n(481060),
	s = n(565138),
	o = n(678558),
	l = n(981631),
	u = n(830245);
t.Z = function (e) {
	let { closeLayer: t, guild: n, isVisible: c } = e,
		d = (0, a.useSpring)({
			transform: c ? 'translateY(-100%)' : 'translateY(0%)',
			opacity: c ? 1 : 0,
			config: {
				tension: 120,
				friction: 12
			}
		});
	return (0, r.jsx)(i.animated.div, {
		className: u.wrapper,
		style: d,
		children: (0, r.jsxs)('div', {
			className: u.innerWrapper,
			children: [
				(0, r.jsxs)('div', {
					className: u.guildInfo,
					children: [
						(0, r.jsx)(s.Z, {
							className: u.guildIcon,
							guild: n,
							size: s.Z.Sizes.LARGER
						}),
						(0, r.jsx)(a.Heading, {
							className: u.guildName,
							variant: 'text-lg/bold',
							children: n.name
						})
					]
				}),
				(0, r.jsx)(o.Z, {
					className: u.ctaButton,
					guild: n,
					analyticsLocation: {
						page: l.ZY5.PREMIUM_GUILD_USER_MODAL,
						section: l.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
						object: l.qAy.BUTTON_CTA,
						objectType: l.Qqv.BUY
					},
					closeLayer: t,
					pauseAnimation: !c,
					size: a.Button.Sizes.LARGE
				})
			]
		})
	});
};
