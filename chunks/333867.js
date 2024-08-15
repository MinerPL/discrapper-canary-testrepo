t.d(n, {
	Z: function () {
		return h;
	}
});
var a = t(735250);
t(470079);
var s = t(772848),
	i = t(481060),
	l = t(976255),
	r = t(667),
	o = t(335131),
	d = t(626135),
	u = t(409813),
	c = t(608579),
	E = t(981631);
let f = 'payment-modal';
function h(e) {
	let n;
	let {
			skuId: t,
			isGift: h = !1,
			giftMessage: m,
			onClose: v,
			onComplete: C,
			analyticsLocations: p,
			analyticsObject: x
		} = e,
		I = !1,
		T = (0, s.Z)(),
		g = (e) => {
			n = e;
		};
	(0, i.openModalLazy)(
		async () => (e) => {
			let { onClose: n, returnRef: s, ...i } = e;
			return (0, a.jsx)(c.Z, {
				...i,
				loadId: T,
				skuId: t,
				isGift: h,
				giftMessage: m,
				analyticsLocations: p,
				onClose: (e) => {
					n(), null == v || v(e);
				},
				onComplete: () => {
					(I = !0), null == C || C();
				},
				returnRef: s,
				onStepChange: g
			});
		},
		{
			modalKey: f,
			onCloseCallback: () => {
				!I &&
					d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
						load_id: T,
						payment_type: E.Zuq[E.GZQ.ONE_TIME],
						location: x,
						is_gift: h,
						location_stack: p
					}),
					(0, l.fw)(),
					(0, r.p)(),
					null == v || v(I),
					I && (0, o.qg)();
			},
			onCloseRequest: () => {
				n === u.h8.REVIEW && (0, i.closeModal)(f);
			}
		}
	);
}
