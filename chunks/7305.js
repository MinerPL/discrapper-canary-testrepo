n.r(s),
	n.d(s, {
		PremiumPaymentModal: function () {
			return P;
		},
		STEPS: function () {
			return y;
		},
		default: function () {
			return b;
		}
	}),
	n(411104),
	n(47120);
var t = n(735250),
	r = n(470079),
	i = n(442837),
	l = n(570140),
	a = n(821849),
	o = n(100527),
	C = n(906732),
	d = n(509545),
	u = n(78839),
	c = n(669079),
	_ = n(987209),
	p = n(598),
	x = n(409813),
	L = n(791785),
	h = n(276442),
	f = n(793541),
	I = n(380898),
	E = n(710094),
	M = n(293858),
	N = n(614223),
	j = n(174827),
	T = n(846464),
	g = n(184160),
	m = n(48175),
	A = n(981631),
	O = n(474936),
	S = n(689938);
let R = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function P(e) {
	let {
			analyticsLocation: s,
			analyticsObject: n,
			analyticsSourceLocation: i,
			onComplete: o,
			transitionState: u,
			initialPlanId: h,
			subscriptionTier: f,
			onClose: I,
			trialId: E,
			trialFooterMessageOverride: M,
			reviewWarningMessage: N,
			openInvoiceId: j,
			onSubscriptionConfirmation: T,
			renderPurchaseConfirmation: g,
			postSuccessGuild: m,
			followupSKUInfo: S,
			renderHeader: R,
			applicationId: P,
			guildId: Z,
			referralTrialOfferId: v,
			skuId: y,
			returnRef: b,
			skipConfirm: U = !1,
			continueSession: B = !1
		} = e,
		{ analyticsLocations: H } = (0, C.ZP)();
	r.useEffect(() => {
		!d.Z.isLoadedForPremiumSKUs() && l.Z.wait(() => (0, a.Y2)());
	}, []);
	let { step: k } = (0, p.usePaymentContext)(),
		{ isGift: G, giftMessage: F, giftRecipient: w } = (0, _.wD)(),
		D = G && (0, c.pO)(w) && k === x.h8.PLAN_SELECT;
	return (0, t.jsx)(L.PaymentModal, {
		analyticsLocations: H,
		analyticsLocation: s,
		analyticsObject: n,
		analyticsSourceLocation: i,
		analyticsSubscriptionType: A.NYc.PREMIUM,
		onComplete: o,
		transitionState: u,
		initialPlanId: h,
		giftMessage: F,
		subscriptionTier: f,
		onClose: I,
		trialId: E,
		isGift: G,
		trialFooterMessageOverride: M,
		reviewWarningMessage: N,
		planGroup: O.Y1,
		openInvoiceId: j,
		onSubscriptionConfirmation: T,
		renderPurchaseConfirmation: g,
		postSuccessGuild: m,
		followupSKUInfo: S,
		renderHeader: R,
		applicationId: P,
		guildId: Z,
		referralTrialOfferId: v,
		skuId: y,
		shakeWhilePurchasing: !0,
		isLargeModal: D,
		returnRef: b,
		skipConfirm: U,
		continueSession: B
	});
}
function Z(e) {
	let { startedPaymentFlowWithPaymentSourcesRef: s, selectedSkuId: n } = (0, p.usePaymentContext)(),
		{ isGift: t } = (0, _.wD)();
	return (0, N.Kp)({
		isTrial: null != e && e,
		isGift: t,
		selectedSkuId: n,
		startedPaymentFlowWithPaymentSources: s.current
	});
}
function v(e) {
	let { initialPlanId: s, handleStepChange: n, referralTrialOfferId: r } = e,
		{ paymentSources: i, selectedSkuId: l } = (0, p.usePaymentContext)(),
		{ isGift: a } = (0, _.wD)(),
		o = Z(
			(0, m.Z)({
				isGift: a,
				skuId: l,
				referralTrialOfferId: r
			})
		);
	return (0, t.jsx)(t.Fragment, {
		children: (0, t.jsx)(h.J, {
			...e,
			breadcrumbSteps: R,
			onReturn: () => {
				let e = Object.values(i).length < 1 && null == s ? x.h8.PLAN_SELECT : x.h8.REVIEW;
				o && (e = x.h8.REVIEW), n(e, { trackedFromStep: x.h8.PAYMENT_TYPE });
			}
		})
	});
}
let y = [
	{
		key: null,
		renderStep: (e) => (0, t.jsx)(L.PaymentPredicateStep, { ...e })
	},
	{
		key: x.h8.SKU_SELECT,
		renderStep: (e) => (0, t.jsx)(T.q, { ...e }),
		options: {
			renderHeader: !1,
			hideSlider: !0
		}
	},
	{
		key: x.h8.WHAT_YOU_LOSE,
		renderStep: (e) => (0, t.jsx)(g.x, { ...e }),
		options: {
			renderHeader: !1,
			hideSlider: !0
		}
	},
	{
		key: x.h8.PLAN_SELECT,
		renderStep: (e) => (0, t.jsx)(j.x, { ...e }),
		options: {
			renderHeader: !0,
			useBreadcrumbLabel: (e) => (Z(e) ? null : S.Z.Messages.BILLING_STEP_SELECT_PLAN)
		}
	},
	{
		key: x.h8.ADD_PAYMENT_STEPS,
		renderStep: (e) => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(v, { ...e }) }),
		options: {
			renderHeader: !0,
			useBreadcrumbLabel: (e) => (Z(e) ? null : S.Z.Messages.BILLING_STEP_PAYMENT)
		}
	},
	{
		key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
		renderStep: () => (0, t.jsx)(I.Z, {})
	},
	{
		key: x.h8.AWAITING_AUTHENTICATION,
		renderStep: () => (0, t.jsx)(f.Z, {})
	},
	{
		key: x.h8.REVIEW,
		renderStep: (e) => (0, t.jsx)(E.l, { ...e }),
		options: {
			renderHeader: !0,
			useBreadcrumbLabel: (e) => (Z(e) ? S.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : S.Z.Messages.BILLING_STEP_REVIEW)
		}
	},
	{
		key: x.h8.CONFIRM,
		renderStep: (e) => (0, t.jsx)(M.b, { ...e })
	}
];
function b(e) {
	let s = (0, i.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
		{ analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
		{
			subscriptionTier: r,
			isGift: l,
			giftRecipient: a,
			giftMessage: d,
			giftStyle: c,
			loadId: x,
			defaultPlanId: L,
			referralCode: h,
			repeatPurchase: f
		} = e;
	if (null != r && !Object.values(O.Si).includes(r)) throw Error('subscriptionTier must be a premium subscription');
	return (0, t.jsx)(C.Gt, {
		value: n,
		children: (0, t.jsx)(p.PaymentContextProvider, {
			loadId: x,
			activeSubscription: null != e.subscription ? e.subscription : s,
			stepConfigs: y,
			skuIDs: [...O.YQ],
			isGift: l,
			defaultPlanId: L,
			referralCode: h,
			repeatPurchase: f,
			children: (0, t.jsx)(_.KB, {
				isGift: l,
				giftRecipient: null == a ? void 0 : a,
				giftMessage: d,
				giftStyle: c,
				children: (0, t.jsx)(P, { ...e })
			})
		})
	});
}
