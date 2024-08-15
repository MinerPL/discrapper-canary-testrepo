n.r(t),
	n.d(t, {
		STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
			return f;
		},
		default: function () {
			return h;
		}
	}),
	n(47120);
var r = n(735250);
n(470079);
var a = n(100527),
	i = n(906732),
	o = n(987209),
	s = n(598),
	l = n(791785),
	c = n(961830),
	d = n(231338);
function u(e) {
	let { onClose: t, onComplete: n, transitionState: a, applicationId: o, analyticsLocationObject: c, skuId: d } = e,
		{} = (0, s.usePaymentContext)(),
		{ analyticsLocations: u } = (0, i.ZP)();
	return (0, r.jsx)(l.PaymentModal, {
		onClose: t,
		onComplete: n,
		applicationId: o,
		skuId: d,
		initialPlanId: null,
		analyticsObject: c,
		analyticsLocations: u,
		transitionState: a
	});
}
let f = [c.WA, c.s2, ...c.yp, c.wo, c.F7];
function h(e) {
	let { loadId: t, applicationId: n, skuId: l, analyticsLocations: c } = e,
		{ analyticsLocations: h } = (0, i.ZP)(c, a.Z.PREMIUM_PAYMENT_MODAL);
	return (0, r.jsx)(i.Gt, {
		value: h,
		children: (0, r.jsx)(s.PaymentContextProvider, {
			loadId: t,
			stepConfigs: f,
			applicationId: n,
			skuIDs: [l],
			activeSubscription: null,
			purchaseType: d.GZ.ONE_TIME,
			children: (0, r.jsx)(o.KB, { children: (0, r.jsx)(u, { ...e }) })
		})
	});
}
