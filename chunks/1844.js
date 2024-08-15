n(47120);
var r,
	i = n(442837),
	a = n(570140),
	s = n(581883);
function o(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function l() {
	return {
		hasFetchedConsumedInboundPromotionId: !1,
		consumedInboundPromotionId: null,
		lastSeenOutboundPromotionStartDate: null,
		bogoPromotion: null
	};
}
let u = l(),
	c = !1,
	d = null,
	_ = !1,
	E = null,
	f = [],
	h = null;
function p() {
	let e = null;
	for (let t of f) (null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
	return e;
}
function m() {
	var e, t, n;
	h = null !== (n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null;
}
class I extends (r = i.ZP.PersistedStore) {
	initialize(e) {
		null != e && (u = e), this.waitFor(s.Z), this.syncWith([s.Z], m);
	}
	get outboundPromotions() {
		return f;
	}
	get lastSeenOutboundPromotionStartDate() {
		return u.lastSeenOutboundPromotionStartDate;
	}
	get lastDismissedOutboundPromotionStartDate() {
		return h;
	}
	get lastFetchedActivePromotions() {
		return E;
	}
	get isFetchingActiveOutboundPromotions() {
		return _;
	}
	get hasFetchedConsumedInboundPromotionId() {
		return u.hasFetchedConsumedInboundPromotionId;
	}
	get consumedInboundPromotionId() {
		return u.consumedInboundPromotionId;
	}
	get bogoPromotion() {
		return u.bogoPromotion;
	}
	get isFetchingActiveBogoPromotion() {
		return c;
	}
	get lastFetchedActiveBogoPromotion() {
		return d;
	}
	getState() {
		return u;
	}
}
o(I, 'displayName', 'PromotionsStore'),
	o(I, 'persistKey', 'PromotionsPersistedStore'),
	(t.Z = new I(a.Z, {
		ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function (e) {
			let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
			(f = t), (E = Date.now()), (_ = !1), !u.hasFetchedConsumedInboundPromotionId && ((u.hasFetchedConsumedInboundPromotionId = !0), (u.consumedInboundPromotionId = n));
		},
		ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function () {
			_ = !0;
		},
		ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function () {
			(f = []), (_ = !1);
		},
		ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
			let { activePromotion: t } = e;
			(u.bogoPromotion = t), (d = Date.now()), (c = !1);
		},
		ACTIVE_BOGO_PROMOTION_FETCH: function () {
			c = !0;
		},
		ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
			(u.bogoPromotion = null), (c = !1);
		},
		OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
			if (0 === f.length) return !1;
			let e = p();
			null != e && (h = e);
		},
		OUTBOUND_PROMOTIONS_SEEN: function () {
			if (0 === f.length) return !1;
			let e = p();
			null != e && ((h = e), (u.lastSeenOutboundPromotionStartDate = e));
		},
		LOGOUT: function () {
			(u = l()), (_ = !1), (E = null), (c = !1), (d = null), (f = []);
		}
	}));
