t.d(n, {
	Oc: function () {
		return j;
	},
	t: function () {
		return h;
	},
	xe: function () {
		return v;
	}
});
var r = t(735250);
t(470079);
var i = t(481060),
	l = t(131388),
	a = t(409813),
	s = t(586585),
	o = t(614277),
	c = t(225715),
	u = t(750143),
	d = t(689938),
	m = t(108204),
	f = t(365627),
	x = t(753260);
let h = (e) => {
		let { step: n, onClose: t } = e,
			s = (0, l.Z)(u.X);
		return n === a.h8.CONFIRM || n === a.h8.BENEFITS
			? (0, r.jsx)('div', {})
			: (0, r.jsxs)('div', {
					className: m.headerContainer,
					children: [
						!s &&
							(0, r.jsx)('div', {
								className: m.headerImageContainer,
								'aria-hidden': 'true',
								children: (0, r.jsx)('img', {
									src: x,
									alt: '',
									className: m.headerImage
								})
							}),
						(0, r.jsx)(i.Clickable, {
							className: m.closeContainer,
							onClick: () => t(),
							'aria-label': d.Z.Messages.CLOSE,
							children: (0, r.jsx)(i.XSmallIcon, {
								size: 'md',
								color: 'currentColor',
								className: m.closeIcon
							})
						})
					]
				});
	},
	j = (e) => {
		let { icon: n, storeListingBenefits: t, skuBenefits: i, application: l, title: a, subtitle: s, description: o } = e;
		return null == l
			? null
			: (0, r.jsx)('div', {
					className: m.confirmationContainer,
					children: (0, r.jsxs)(c.q$, {
						children: [
							(0, r.jsx)(c.CW, {
								application: l,
								asset: n
							}),
							(0, r.jsx)(c.r0, { children: a }),
							(0, r.jsx)(c.s$, {}),
							(0, r.jsx)(c.K9, {
								title: s,
								description: o
							}),
							(0, r.jsx)(c.G9, {
								applicationId: l.id,
								storeListingBenefits: t,
								skuBenefits: i
							})
						]
					})
				});
	};
function v(e) {
	let { tierName: n, onConfirm: t, subscription: l } = e;
	return (0, r.jsxs)('div', {
		className: m.purchaseConfirmation,
		children: [
			(0, r.jsx)('img', {
				src: f,
				alt: '',
				width: 300,
				height: 126
			}),
			(0, r.jsx)(i.Heading, {
				className: m.confirmationTitle,
				variant: 'heading-xl/extrabold',
				color: 'header-primary',
				children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: n })
			}),
			(0, r.jsx)(i.Text, {
				className: m.confirmationSubtitle,
				variant: 'text-md/medium',
				color: 'header-secondary',
				children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
					timestamp: null == l ? void 0 : l.currentPeriodEnd
				})
			}),
			(0, r.jsx)(o.O3, {
				children: (0, r.jsx)(s.Z, {
					onPrimary: t,
					primaryCTA: s.g.CONTINUE,
					primaryText: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
				})
			})
		]
	});
}
