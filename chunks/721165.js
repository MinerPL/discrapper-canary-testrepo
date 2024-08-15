n.d(t, {
	Z: function () {
		return S;
	}
}),
	n(789020);
var r = n(735250),
	a = n(470079),
	i = n(442837),
	l = n(131388),
	s = n(171246),
	o = n(689011),
	u = n(931905),
	c = n(430824),
	d = n(598),
	I = n(409813),
	_ = n(586585),
	f = n(614277),
	h = n(750143),
	E = n(689938);
function S(e) {
	let { handleStepChange: t, handleClose: n } = e,
		{
			subscriptionMetadataRequest: S,
			selectedSku: m,
			selectedStoreListing: p,
			application: T
		} = (0, d.usePaymentContext)(),
		C = (0, l.Z)(h.i),
		N = (0, i.e7)([c.Z], () => c.Z.getGuild(null == S ? void 0 : S.guild_id)),
		A = a.useCallback(() => t(I.h8.REVIEW), [t]);
	if (null == m) return null;
	let O = (0, s.KW)(m.flags);
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(f.C3, {
				children: C
					? (0, r.jsx)(u.h, {
							confirmCta: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
							onConfirm: A,
							onCancel: n,
							title: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
								tier: m.name
							}),
							subtitle: O
								? E.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
								: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
										guildName: null == N ? void 0 : N.name
									}),
							showOpenDiscord: !1
						})
					: (0, r.jsx)(o.Oc, {
							icon: null == p ? void 0 : p.thumbnail,
							storeListingBenefits: null == p ? void 0 : p.benefits,
							application: null != T ? T : void 0,
							title: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({ tier: m.name }),
							subtitle: O
								? E.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
								: E.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
							description: O
								? E.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
										applicationName: null == T ? void 0 : T.name
									})
								: E.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
						})
			}),
			!C &&
				(0, r.jsx)(f.O3, {
					children: (0, r.jsx)(_.Z, {
						onBack: n,
						backText: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
						onPrimary: A,
						primaryCTA: _.g.CONTINUE,
						primaryText: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
					})
				})
		]
	});
}
