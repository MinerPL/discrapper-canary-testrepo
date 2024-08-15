n.r(r),
	n.d(r, {
		default: function () {
			return T;
		}
	});
var l = n(735250),
	o = n(470079),
	s = n(481060),
	t = n(100527),
	a = n(906732),
	c = n(598),
	i = n(409813),
	d = n(185139),
	u = n(263954),
	p = n(267642),
	_ = n(678558),
	m = n(981631),
	f = n(689938),
	N = n(961251),
	h = n(224499);
let E = 'premium-guild-subscription-upsell-modal-header';
function x(e) {
	let { title: r, subtitle: n, image: o } = e;
	return (0, l.jsxs)('div', {
		className: N.header,
		children: [
			(0, l.jsx)(s.Heading, {
				variant: 'heading-xl/semibold',
				id: E,
				color: 'header-primary',
				className: h.marginBottom8,
				children: r
			}),
			(0, l.jsx)(s.Text, {
				variant: 'text-md/normal',
				className: N.subtitleText,
				children: n
			}),
			o
		]
	});
}
let I = (e) => {
		let {
			onClose: r,
			perks: n,
			perkIntro: o = f.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
			headerProps: t
		} = e;
		return (0, l.jsxs)('div', {
			className: N.wrapper,
			children: [
				(0, l.jsx)(s.ModalCloseButton, {
					className: N.closeButton,
					onClick: () => {
						r();
					}
				}),
				(0, l.jsx)(S, {
					headerProps: t,
					perkIntro: o
				}),
				(0, l.jsx)('div', {
					className: N.perks,
					children: n.map((e, r) => {
						let { icon: n, iconClassName: o, description: s, color: t } = e;
						return (0, l.jsx)(
							u.Z,
							{
								icon: n,
								iconClassName: o,
								description: s,
								color: t
							},
							r
						);
					})
				})
			]
		});
	},
	S = (e) => {
		let { headerProps: r, perkIntro: t } = e;
		return (0, l.jsxs)(o.Fragment, {
			children: [
				null != r
					? (0, l.jsx)(x, { ...r })
					: (0, l.jsx)('img', {
							className: N.heroImage,
							src: n(438471),
							alt: f.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
						}),
				(0, l.jsx)(s.Text, {
					variant: 'text-md/normal',
					className: N.heading,
					children: t
				})
			]
		});
	},
	C = (e) => {
		let { guild: r, targetBoostedGuildTier: n, onClose: o, analyticsSourceLocation: t } = e,
			a = {
				section: m.jXE.PREMIUM_GUILD_UPSELL_MODAL,
				object: m.qAy.BUTTON_CTA,
				objectType: null != n ? (0, p.ge)(n) : null
			};
		return (0, l.jsxs)(s.ModalFooter, {
			className: N.footer,
			children: [
				(0, l.jsx)(s.Button, {
					size: s.Button.Sizes.SMALL,
					color: s.Button.Colors.PRIMARY,
					look: s.Button.Looks.LINK,
					onClick: () => {
						o();
					},
					children: f.Z.Messages.CLOSE
				}),
				(0, l.jsx)(_.Z, {
					analyticsLocation: a,
					analyticsSourceLocation: t,
					guild: r,
					targetBoostedGuildTier: n,
					onClose: () => {
						o();
					}
				})
			]
		});
	};
function T(e) {
	let {
			analyticsSourceLocation: r,
			guild: n,
			targetBoostedGuildTier: o,
			perks: u,
			perkIntro: p,
			headerProps: _,
			onClose: m,
			...f
		} = e,
		{ analyticsLocations: N } = (0, a.ZP)(t.Z.ACTIVITY_DIRECTORY);
	return (0, l.jsx)(a.Gt, {
		value: N,
		children: (0, l.jsx)(c.PaymentContextProvider, {
			activeSubscription: null,
			stepConfigs: [],
			skuIDs: [],
			children: (0, l.jsx)(s.ModalRoot, {
				...f,
				'aria-labelledby': E,
				children: (0, l.jsx)(d.Z, {
					hideBreadcrumbs: !0,
					body: (0, l.jsx)(I, {
						onClose: m,
						perks: u,
						perkIntro: p,
						headerProps: _
					}),
					footer: (0, l.jsx)(C, {
						guild: n,
						targetBoostedGuildTier: o,
						onClose: m,
						analyticsSourceLocation: r
					}),
					steps: [i.h8.PREMIUM_GUILD_UPSELL],
					currentStep: i.h8.PREMIUM_GUILD_UPSELL
				})
			})
		})
	});
}
