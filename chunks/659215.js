n.r(t),
	n.d(t, {
		default: function () {
			return p;
		},
		openBurstReactionsUpsellModal: function () {
			return g;
		}
	});
var i = n(735250);
n(470079);
var s = n(481060),
	o = n(230711),
	a = n(104494),
	l = n(639119),
	r = n(790527),
	c = n(474936),
	u = n(981631),
	d = n(689938),
	h = n(752116),
	m = n(784370);
function p(e) {
	var t, n;
	let { onClose: s, analyticsSource: p, ...g } = e,
		f = d.Z.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
			onClick: () => {
				o.Z.open(u.oAB.PREMIUM), s();
			}
		}),
		T = (0, l.N)(),
		_ = (0, a.Ng)(),
		v = null != T || null != _;
	return (0, i.jsx)(r.Z, {
		artURL: m,
		artContainerClassName: h.artContainer,
		modalClassName: h.modalContainer,
		bodyClassName: h.bodyContainer,
		type: c.cd.BURST_REACTION_UPSELL,
		title: d.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
		body: f,
		glowUp: f,
		analyticsSource: p,
		analyticsLocation: {
			page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
			object: u.qAy.BUTTON_CTA
		},
		onClose: s,
		subscribeButtonText: v ? void 0 : d.Z.Messages.PREMIUM_SETTINGS_GET,
		subscriptionTier: null !== (n = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.Si.TIER_2,
		backButtonText: d.Z.Messages.NO_THANKS,
		...g
	});
}
function g(e) {
	let { analytics: t } = e;
	(0, s.openModalLazy)(async () => {
		let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
		return (n) =>
			(0, i.jsx)(e, {
				analyticsSource: t,
				...n
			});
	});
}
