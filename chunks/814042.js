n.d(t, {
	C: function () {
		return N;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(100527),
	u = n(906732),
	c = n(104494),
	d = n(639119),
	_ = n(165583),
	E = n(626135),
	f = n(74538),
	h = n(191177),
	p = n(27733),
	I = n(981631),
	m = n(474936),
	T = n(689938),
	g = n(244719),
	S = n(867250);
let A = () => (0, h.f)(!1),
	N = (e) => {
		var t, n, a;
		let { onLearnMore: h } = e,
			{ analyticsLocations: N } = (0, u.ZP)(l.Z.PREMIUM_UPSELL);
		i.useEffect(() => {
			E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
				location_section: I.jXE.STICKER_PICKER_UPSELL,
				type: m.cd.STICKER_PICKER_UPSELL,
				location_stack: N
			});
		}, [N]);
		let v = (0, d.N)(),
			O = (0, c.Ng)(),
			R =
				(null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_0,
			C = null != v || null != O;
		return (0, r.jsxs)('div', {
			className: s()(g.upsellWrapper, { [g.unifyTrialUpsell]: C }),
			children: [
				C
					? (0, r.jsx)(_.ZP, {
							trialOffer: v,
							discountOffer: O,
							onClose: A,
							type: m.cd.STICKER_PICKER_UPSELL,
							subscriptionTier:
								null !==
									(a = null == v ? void 0 : null === (n = v.subscription_trial) || void 0 === n ? void 0 : n.sku_id) &&
								void 0 !== a
									? a
									: m.Si.TIER_2,
							children: R
								? T.Z.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
										planName: (0, f.aq)(m.Xh.PREMIUM_MONTH_TIER_0),
										onClick: h
									})
								: T.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({ onClick: h })
						})
					: (0, r.jsxs)(r.Fragment, {
							children: [
								(0, r.jsx)('img', {
									className: g.upsellImage,
									src: S,
									alt: T.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
								}),
								(0, r.jsx)(o.Text, {
									className: g.upsellTitle,
									color: 'header-primary',
									variant: 'text-lg/semibold',
									children: T.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
								}),
								(0, r.jsx)(o.Text, {
									className: g.upsellDescription,
									variant: 'text-md/normal',
									children: T.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({ onClick: h })
								})
							]
						}),
				!C &&
					(0, r.jsx)(p.Z, {
						analyticsSection: I.jXE.EXPRESSION_PICKER,
						buttonText: C
							? R
								? T.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT
								: T.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
							: void 0
					}),
				(0, r.jsx)(o.Clickable, {
					className: g.upsellClose,
					onClick: A,
					children: (0, r.jsx)(o.XSmallIcon, {
						size: 'md',
						color: 'currentColor'
					})
				})
			]
		});
	};
