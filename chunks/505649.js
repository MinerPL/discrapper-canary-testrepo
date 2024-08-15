n(411104);
var r,
	i,
	u,
	l,
	o = n(442837),
	E = n(570140),
	a = n(366939),
	_ = n(16084),
	S = n(128069),
	s = n(122289),
	A = n(622999),
	c = n(981631),
	T = n(689938);
let I = !1,
	d = null,
	R = null;
function C() {
	(I = !1), (R = null);
}
function N(e) {
	let { error: t } = e,
		{ code: n, paymentId: r } = t;
	if (n !== S.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (I = !1), !1;
	!I && ((I = !0), (d = r), M(r));
}
async function M(e) {
	if (null == e) return;
	let { error: t } = await (0, A.oe)(e);
	if (null != t) {
		E.Z.dispatch({
			type: 'PAYMENT_AUTHENTICATION_ERROR',
			error: new S.ZP(T.Z.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
		});
		let e = Error(t);
		(0, s.q2)(e, { extra: { authenticationError: t } });
	}
}
function P(e) {
	let { payment: t } = e;
	if (!I || t.id !== d || ![c.PyE.COMPLETED, c.PyE.CANCELED].includes(t.status)) return !1;
	(I = !1), (R = null), (d = null), E.Z.wait(a.fw), E.Z.wait(_.pB);
}
class U extends (r = o.ZP.Store) {
	get isAwaitingAuthentication() {
		return I;
	}
	get error() {
		return R;
	}
	get awaitingPaymentId() {
		return d;
	}
}
(l = 'PaymentAuthenticationStore'),
	(u = 'displayName') in (i = U)
		? Object.defineProperty(i, u, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[u] = l),
	(t.Z = new U(E.Z, {
		BILLING_SUBSCRIPTION_UPDATE_START: C,
		PAYMENT_AUTHENTICATION_CLEAR_ERROR: C,
		PREMIUM_PAYMENT_ERROR_CLEAR: C,
		PREMIUM_PAYMENT_MODAL_CLOSE: C,
		PREMIUM_PAYMENT_MODAL_OPEN: C,
		PREMIUM_PAYMENT_SUBSCRIBE_START: C,
		PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: C,
		PREMIUM_PAYMENT_UPDATE_SUCCESS: C,
		SKU_PURCHASE_MODAL_CLOSE: C,
		SKU_PURCHASE_MODAL_OPEN: C,
		SKU_PURCHASE_START: C,
		SKU_PURCHASE_SUCCESS: C,
		BILLING_SUBSCRIPTION_UPDATE_FAIL: N,
		PREMIUM_PAYMENT_SUBSCRIBE_FAIL: N,
		PREMIUM_PAYMENT_UPDATE_FAIL: N,
		SKU_PURCHASE_FAIL: N,
		GIFT_CODE_REDEEM_FAILURE: N,
		PAYMENT_AUTHENTICATION_ERROR: function (e) {
			let { error: t } = e;
			(R = t), (I = !1);
		},
		PAYMENT_UPDATE: P,
		BILLING_PAYMENT_FETCH_SUCCESS: P
	}));
