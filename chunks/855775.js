let r, i;
n.d(t, {
	c: function () {
		return s;
	}
}),
	n(47120);
var u,
	l,
	o,
	E,
	a = n(442837),
	_ = n(570140),
	S = n(981631);
let s = 'no_payment_source',
	A = null,
	c = null,
	T = null,
	I = null,
	d = null,
	R = {},
	C = null,
	N = !1,
	M = null,
	P = !1,
	U = !1,
	f = !1,
	L = !1,
	O = null,
	h = new Set();
function p(e) {
	null != r && null != C ? r(C) : null != i && i(e), (r = null), (i = null);
}
class m extends (u = a.ZP.Store) {
	getPricesForSku(e) {
		return R[e];
	}
	isOpen() {
		let e = __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP;
		return O === e && f;
	}
	get isPurchasingSKU() {
		return N;
	}
	get forceConfirmationStepOnMount() {
		return P;
	}
	get error() {
		return M;
	}
	get skuId() {
		return A;
	}
	get applicationId() {
		return T;
	}
	get analyticsLocation() {
		return I;
	}
	get promotionId() {
		return d;
	}
	get isIAP() {
		return U;
	}
	get giftCode() {
		return c;
	}
	get isGift() {
		return L;
	}
	isFetchingSKU(e) {
		return h.has(e);
	}
}
(E = 'SKUPaymentModalStore'),
	(o = 'displayName') in (l = m)
		? Object.defineProperty(l, o, {
				value: E,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[o] = E),
	(t.Z = new m(_.Z, {
		SKU_PURCHASE_MODAL_OPEN: function (e) {
			p(), (A = e.skuId), (T = e.applicationId), (U = e.isIAP), (I = e.analyticsLocation), (O = e.context), (L = e.isGift), (f = !0), (P = !1), (r = e.resolve), (i = e.reject), (M = null), (C = null), (d = e.promotionId);
		},
		SKU_PURCHASE_MODAL_CLOSE: function (e) {
			let { error: t } = e;
			(f = !1), (O = null), p(t);
		},
		SKU_PURCHASE_PREVIEW_FETCH: function (e) {
			let { skuId: t } = e;
			h.add(t);
		},
		SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (e) {
			let { skuId: t, paymentSourceId: n, price: r } = e;
			(R = {
				...R,
				[t]: {
					...R[t],
					[null != n ? n : s]: r
				}
			}),
				h.delete(t);
		},
		SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (e) {
			let { skuId: t } = e;
			h.delete(t);
		},
		SKU_PURCHASE_START: function () {
			N = !0;
		},
		SKU_PURCHASE_SUCCESS: function (e) {
			let { entitlements: t, giftCode: n } = e;
			(N = !1), (C = t), (c = n);
		},
		SKU_PURCHASE_FAIL: function (e) {
			let { error: t } = e;
			(N = !1), (M = t);
		},
		SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
			P = !0;
		},
		SKU_PURCHASE_CLEAR_ERROR: function () {
			M = null;
		},
		SKU_PURCHASE_UPDATE_IS_GIFT: function (e) {
			L = e.isGift;
		},
		OVERLAY_SET_INPUT_LOCKED: function (e) {
			let { locked: t } = e;
			if (!t || null == O) return !1;
			(f = !1), (O = null), p();
		},
		GIFT_CODE_CREATE: function (e) {
			let { giftCode: t } = e;
			if (0 !== t.uses || t.sku_id !== A) return !1;
			c = t.code;
		}
	}));
