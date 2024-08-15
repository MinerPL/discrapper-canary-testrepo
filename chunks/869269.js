n.d(t, {
	Z: function () {
		return C;
	}
});
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(442837),
	o = n(481060),
	c = n(289393),
	d = n(723047),
	u = n(727843),
	_ = n(587431),
	I = n(86126),
	E = n(880193),
	T = n(516448),
	m = n(975331),
	N = n(231610),
	S = n(689938),
	h = n(325850),
	g = n(921671);
function C(e) {
	var t, n;
	let { allSubscriptionListings: i, priceTiers: C, loading: x, error: p, handlePublishTier: R, onDeleteEditState: f } = e,
		{ editStateId: L } = (0, u.N)(),
		O = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListing(L)),
		A = (0, d.mY)(),
		M = a.useMemo(() => {
			let e = i
				.filter((e) => e.id !== L)
				.map((e) => {
					var t;
					return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
				});
			return null == C ? void 0 : C.filter((t) => !e.includes(t));
		}, [i, L, C]),
		D = null == O,
		v = null !== (t = null == O ? void 0 : O.published) && void 0 !== t && t,
		j = null !== (n = null == O ? void 0 : O.archived) && void 0 !== n && n;
	return (0, s.jsxs)('div', {
		className: g.body,
		children: [
			null != p && (0, s.jsx)(_.Z, { children: p.getAnyErrorMessage() }),
			!v &&
				!A &&
				!j &&
				(0, s.jsxs)('div', {
					className: g.publishListing,
					children: [
						(0, s.jsxs)('div', {
							children: [
								(0, s.jsx)(o.Heading, {
									variant: 'heading-md/semibold',
									className: g.publishListingInfoHeader,
									children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_TITLE
								}),
								(0, s.jsx)(o.FormText, {
									type: o.FormText.Types.DESCRIPTION,
									children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_DESCRIPTION
								})
							]
						}),
						(0, s.jsx)(o.Tooltip, {
							shouldShow: D,
							tooltipClassName: h.autoWidth,
							text: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SAVE_BEFORE_PUBLISH_TOOLTIP,
							children: (e) =>
								(0, s.jsx)(o.Button, {
									...e,
									disabled: D,
									color: o.Button.Colors.CUSTOM,
									wrapperClassName: h.autoWidth,
									className: r()(g.publishButton, h.autoWidth),
									onClick: R,
									submitting: x,
									children: S.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_EDIT_PUBLISH_DRAFT_CTA
								})
						})
					]
				}),
			(0, s.jsx)(E.Z, { priceTiers: M }),
			(0, s.jsx)(T.Z, { allSubscriptionListings: i }),
			(0, s.jsx)(m.Z, {}),
			(0, s.jsx)(N.Z, {}),
			(0, s.jsx)(I.Z, { onDeleteEditState: f })
		]
	});
}
