n.d(t, {
	Af: function () {
		return V;
	},
	Ap: function () {
		return e_;
	},
	CY: function () {
		return H;
	},
	Gf: function () {
		return q;
	},
	I5: function () {
		return D.I5;
	},
	JE: function () {
		return eO;
	},
	JP: function () {
		return j;
	},
	L7: function () {
		return W;
	},
	M5: function () {
		return D.M5;
	},
	MY: function () {
		return eC;
	},
	PK: function () {
		return ep;
	},
	PV: function () {
		return ec;
	},
	Px: function () {
		return J;
	},
	Qo: function () {
		return eR;
	},
	Rd: function () {
		return z;
	},
	Rt: function () {
		return eN;
	},
	So: function () {
		return eG;
	},
	T4: function () {
		return Y;
	},
	U2: function () {
		return i;
	},
	Ue: function () {
		return ey;
	},
	V7: function () {
		return er;
	},
	W_: function () {
		return eg;
	},
	Wz: function () {
		return ek;
	},
	XK: function () {
		return eL;
	},
	Z8: function () {
		return eu;
	},
	Zx: function () {
		return eb;
	},
	_O: function () {
		return eB;
	},
	a5: function () {
		return eA;
	},
	aS: function () {
		return Z;
	},
	al: function () {
		return eD;
	},
	aq: function () {
		return X;
	},
	bt: function () {
		return ef;
	},
	dn: function () {
		return eS;
	},
	eP: function () {
		return K;
	},
	gB: function () {
		return eM;
	},
	gq: function () {
		return $;
	},
	gy: function () {
		return eh;
	},
	he: function () {
		return ex;
	},
	if: function () {
		return ev;
	},
	jP: function () {
		return Q;
	},
	k5: function () {
		return ew;
	},
	lY: function () {
		return ed;
	},
	qV: function () {
		return et;
	},
	uV: function () {
		return es;
	},
	uZ: function () {
		return el;
	},
	v6: function () {
		return eE;
	},
	v9: function () {
		return eP;
	},
	yd: function () {
		return D.yd;
	},
	zL: function () {
		return en;
	},
	zV: function () {
		return eI;
	}
}),
	n(411104),
	n(47120),
	n(733860),
	n(724458),
	n(653041);
var r,
	i,
	a,
	s,
	o = n(512722),
	l = n.n(o),
	u = n(913527),
	c = n.n(u),
	d = n(848246);
n(442837);
var _ = n(782568),
	E = n(710845),
	f = n(386542),
	h = n(114064),
	p = n(803905),
	m = n(439017),
	I = n(301766),
	T = n(594174),
	g = n(351402),
	S = n(853872),
	A = n(509545),
	N = n(78839),
	v = n(122289),
	O = n(55935),
	R = n(424218),
	C = n(358085),
	y = n(380684),
	D = n(111361),
	L = n(74538),
	b = n(937615),
	M = n(981631),
	P = n(334431),
	U = n(474936),
	w = n(231338),
	x = n(689938);
let G = {
		PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
		BILLING_HISTORY: 'https://support.apple.com/HT201266',
		SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
	},
	k = {
		SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
		PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
		BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
	},
	B = new E.Z('PremiumUtils.tsx'),
	F = {
		[U.Xh.NONE_MONTH]: [U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
		[U.Xh.NONE_YEAR]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
		[U.Xh.PREMIUM_MONTH_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0],
		[U.Xh.PREMIUM_YEAR_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
		[U.Xh.PREMIUM_MONTH_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1],
		[U.Xh.PREMIUM_YEAR_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2],
		[U.Xh.PREMIUM_MONTH_TIER_2]: [U.Xh.PREMIUM_YEAR_TIER_2],
		[U.Xh.PREMIUM_YEAR_TIER_2]: [],
		ALL: [U.Xh.NONE_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0]
	};
function V(e) {
	return e.items.find((e) => U.dJ.has(e.planId));
}
function H(e) {
	var t;
	let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		i = null !== (t = S.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
		a = N.ZP.getPremiumTypeSubscription();
	return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), Z(e, n, r, { paymentSourceId: i });
}
function Z(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
		{ paymentSourceId: i, currency: a } = r;
	if (null != A.Z.get(e)) {
		let r = M.tuJ.DEFAULT;
		n ? (r = M.tuJ.GIFT) : t && (r = M.tuJ.PREMIUM_TIER_1);
		let s = (function (e) {
			let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.tuJ.DEFAULT },
				i = Y(e, {
					paymentSourceId: t,
					purchaseType: n
				});
			return (0 === i.length && B.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
		})(e, {
			paymentSourceId: i,
			purchaseType: r,
			currency: a
		});
		if (null == s) {
			let t = Error("Couldn't find price");
			throw (
				((0, v.q2)(t, {
					extra: { paymentSourceId: i },
					tags: {
						purchaseType: r.toString(),
						planId: e,
						currency: null != a ? a : 'unknown'
					}
				}),
				t)
			);
		}
		return s;
	}
	let s = Error('Plan not found');
	throw (
		((0, v.q2)(s, {
			tags: {
				planId: e,
				currency: null != a ? a : 'unknown'
			},
			extra: {
				...r,
				isGift: n
			}
		}),
		s)
	);
}
((a = r || (r = {})).BUNDLE = 'bundle'), (a.TIER_0 = 'tier_0'), (a.TIER_1 = 'tier_1'), (a.TIER_2 = 'tier_2'), (a.PREMIUM_GUILD = 'premium_guild'), ((s = i || (i = {})).MID = 'mid'), (s.HIGH = 'high');
function Y(e) {
	let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.tuJ.DEFAULT },
		r = (function (e, t) {
			let n = A.Z.get(e);
			if (null == n) {
				let n = Error('Plan not found');
				throw (
					((0, v.q2)(n, {
						tags: {
							planId: e,
							purchaseType: t.toString()
						}
					}),
					n)
				);
			}
			if (null == n.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
			let r = n.prices[t];
			if (null == r) throw (B.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
			return r;
		})(e, n);
	if (null != t) {
		let i = r.paymentSourcePrices[t];
		if (null == i) {
			B.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), B.info('prices: '.concat(i));
			let a = Error('Missing prices for payment source on subscription plan');
			(0, v.q2)(a, {
				extra: { paymentSourceId: t },
				tags: {
					purchaseType: n.toString(),
					planId: e
				}
			});
		} else if (0 !== i.length) return i;
	}
	if (null == r.countryPrices.prices) {
		B.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
		let t = Error('Missing prices for country');
		throw (
			((0, v.q2)(t, {
				tags: {
					countryCode: r.countryPrices.countryCode,
					planId: e
				}
			}),
			t)
		);
	}
	return r.countryPrices.prices;
}
function j(e) {
	switch (e) {
		case U.EA.MONTH:
			return x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
		case U.EA.YEAR:
			return x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
		case U.EA.DAY:
		case U.EA.WEEK:
		default:
			throw Error('Unexpected interval');
	}
}
function W(e, t, n) {
	let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
		i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
		a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.p9.TIER_2;
	if (t || n)
		switch (e) {
			case U.rV.MONTH:
				let s = (a === U.p9.TIER_0 ? x.Z.Messages.BASIC_GIFT_DURATION : x.Z.Messages.GIFT_DURATION).format({ timeInterval: x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH });
				return i ? s : x.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
			case U.rV.YEAR:
				let o = (a === U.p9.TIER_0 ? x.Z.Messages.BASIC_GIFT_DURATION : x.Z.Messages.GIFT_DURATION).format({ timeInterval: x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR });
				return i ? o : x.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
			default:
				throw Error('Unexpected interval');
		}
	switch (e) {
		case U.rV.MONTH:
			if (1 !== r) return x.Z.Messages.MULTI_MONTHS.format({ intervalCount: r });
			return x.Z.Messages.MONTHLY;
		case U.rV.YEAR:
			return x.Z.Messages.YEARLY;
		default:
			throw Error('Unexpected interval');
	}
}
function K(e) {
	switch (e) {
		case U.rV.MONTH:
			return x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
		case U.rV.YEAR:
			return x.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
		default:
			throw Error('Unexpected interval');
	}
}
function z(e) {
	let t = U.GP[e];
	if (null != t) return t.premiumType;
	let n = Error('Unsupported plan');
	throw ((0, v.q2)(n, { tags: { planId: e } }), n);
}
function q(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 ? arguments[3] : void 0;
	switch (e) {
		case U.Xh.PREMIUM_MONTH_TIER_0:
			return t ? x.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? x.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : x.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
		case U.Xh.PREMIUM_YEAR_TIER_0:
			return t ? x.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? x.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : x.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
		case U.Xh.PREMIUM_MONTH_TIER_1:
			return n ? x.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : x.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
		case U.Xh.PREMIUM_YEAR_TIER_1:
			return n ? x.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : x.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
		case U.Xh.PREMIUM_MONTH_TIER_2:
			return t ? x.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? x.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : x.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
		case U.Xh.PREMIUM_YEAR_TIER_2:
			return t ? x.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? x.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : x.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
		case U.Xh.PREMIUM_3_MONTH_TIER_2:
			return x.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
		case U.Xh.PREMIUM_6_MONTH_TIER_2:
			return x.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
		case U.Xh.PREMIUM_MONTH_GUILD:
			return n ? x.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : x.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
		case U.Xh.PREMIUM_YEAR_GUILD:
			return n ? x.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : x.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
		case U.Xh.PREMIUM_3_MONTH_GUILD:
			return x.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
		case U.Xh.PREMIUM_6_MONTH_GUILD:
			return x.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
		case U.Xh.PREMIUM_MONTH_LEGACY:
			return x.Z.Messages.PREMIUM_PLAN_MONTH;
		case U.Xh.PREMIUM_YEAR_LEGACY:
			return x.Z.Messages.PREMIUM_PLAN_YEAR;
	}
	let i = Error('Unsupported plan');
	throw ((0, v.q2)(i, { tags: { planId: e } }), i);
}
function Q(e) {
	switch (e) {
		case U.Si.TIER_0:
			return x.Z.Messages.PREMIUM_TIER_0;
		case U.Si.TIER_1:
			return x.Z.Messages.PREMIUM_TIER_1;
		case U.Si.TIER_2:
			return x.Z.Messages.PREMIUM_TIER_2;
	}
	let t = Error('Unsupported sku');
	throw ((0, v.q2)(t, { tags: { skuId: e } }), t);
}
function X(e) {
	switch (e) {
		case U.Xh.PREMIUM_MONTH_TIER_0:
		case U.Xh.PREMIUM_YEAR_TIER_0:
			return x.Z.Messages.PREMIUM_TIER_0;
		case U.Xh.PREMIUM_MONTH_TIER_1:
		case U.Xh.PREMIUM_YEAR_TIER_1:
			return x.Z.Messages.PREMIUM_TIER_1;
		case U.Xh.PREMIUM_MONTH_TIER_2:
		case U.Xh.PREMIUM_3_MONTH_TIER_2:
		case U.Xh.PREMIUM_6_MONTH_TIER_2:
		case U.Xh.PREMIUM_YEAR_TIER_2:
			return x.Z.Messages.PREMIUM_TIER_2;
	}
	let t = Error('Unsupported plan');
	throw ((0, v.q2)(t, { tags: { planId: e } }), t);
}
function $(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	switch (e) {
		case U.Xh.PREMIUM_MONTH_TIER_0:
		case U.Xh.PREMIUM_YEAR_TIER_0:
			return t ? 'Basic' : 'Nitro Basic';
		case U.Xh.PREMIUM_MONTH_TIER_1:
		case U.Xh.PREMIUM_YEAR_TIER_1:
			return t ? 'Classic' : 'Nitro Classic';
		case U.Xh.PREMIUM_MONTH_TIER_2:
		case U.Xh.PREMIUM_YEAR_TIER_2:
		case U.Xh.PREMIUM_3_MONTH_TIER_2:
		case U.Xh.PREMIUM_6_MONTH_TIER_2:
			return 'Nitro';
	}
	let n = Error('Unsupported plan');
	throw ((0, v.q2)(n, { tags: { planId: e } }), n);
}
function J(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	switch (e) {
		case U.p9.TIER_0:
			return t ? 'Basic' : x.Z.Messages.PREMIUM_TIER_0;
		case U.p9.TIER_1:
			return t ? 'Classic' : x.Z.Messages.PREMIUM_TIER_1;
		case U.p9.TIER_2:
			return x.Z.Messages.PREMIUM_TIER_2;
	}
}
function ee(e) {
	var t, n, r, i, a, s, o, l, u, d;
	let { subscription: E, planId: f, price: h, includePremiumGuilds: p, hasDiscountApplied: m, activeDiscountInfo: I, renewalInvoicePreview: g } = e,
		S = U.GP[f],
		A = L.ZP.formatPriceString(L.ZP.getDefaultPrice(S.id), S.interval),
		N = em(E) || (null == E.paymentSourceId && !E.isPurchasedExternally && !(null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
		v = null != h,
		R = E.status === M.O0b.UNPAID && null !== E.latestInvoice && (null === (n = E.latestInvoice) || void 0 === n ? void 0 : n.status) === M.hUK.OPEN,
		C = N ? M.O0b.CANCELED : R ? M.O0b.UNPAID : E.status,
		y = null === (a = null !== (i = null == g ? void 0 : g.taxInclusive) && void 0 !== i ? i : null === (r = E.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
		D = U.cb + (p ? es(E.additionalPlans) : 0);
	switch (f) {
		case U.Xh.PREMIUM_MONTH_TIER_0:
		case U.Xh.PREMIUM_YEAR_TIER_0:
			switch (C) {
				case M.O0b.CANCELED:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
				case M.O0b.ACCOUNT_HOLD:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
				case M.O0b.UNPAID:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
				case M.O0b.PAUSE_PENDING:
					let b = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
					return null != b
						? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
								pauseDate: E.currentPeriodEnd,
								pauseDuration: b
							})
						: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
				case M.O0b.PAUSED:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
				case M.O0b.PAST_DUE:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
						endDate: (0, O.vc)(ed(E).expiresDate, 'LL'),
						onClick: () => {
							(0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
						}
					});
				default:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE;
			}
		case U.Xh.PREMIUM_MONTH_TIER_1:
		case U.Xh.PREMIUM_YEAR_TIER_1:
			switch (C) {
				case M.O0b.CANCELED:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
				case M.O0b.ACCOUNT_HOLD:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
				case M.O0b.UNPAID:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
				case M.O0b.PAUSE_PENDING:
					let P = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
					return null != P
						? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
								pauseDate: E.currentPeriodEnd,
								pauseDuration: P
							})
						: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
				case M.O0b.PAUSED:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
				case M.O0b.PAST_DUE:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
						endDate: (0, O.vc)(ed(E).expiresDate, 'LL'),
						onClick: () => {
							(0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
						}
					});
				default:
					return v ? (y ? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({ price: h }) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({ price: h })) : x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE;
			}
		case U.Xh.PREMIUM_MONTH_TIER_2:
		case U.Xh.PREMIUM_YEAR_TIER_2:
		case U.Xh.PREMIUM_3_MONTH_TIER_2:
		case U.Xh.PREMIUM_6_MONTH_TIER_2:
			switch (C) {
				case M.O0b.CANCELED:
					return v
						? y
							? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
									price: h,
									num: D
								})
							: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
									price: h,
									num: D
								})
						: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({ num: D });
				case M.O0b.ACCOUNT_HOLD:
					return v
						? y
							? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
									price: h,
									num: D
								})
							: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
									price: h,
									num: D
								})
						: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({ num: D });
				case M.O0b.UNPAID:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({ num: D });
				case M.O0b.PAUSE_PENDING:
					let w = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
					return null != w
						? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
								pauseDate: E.currentPeriodEnd,
								pauseDuration: w
							})
						: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
				case M.O0b.PAUSED:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
				case M.O0b.BILLING_RETRY:
					return x.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({ endDate: c()(E.currentPeriodStart).add(U.A5, 'days') });
				case M.O0b.PAST_DUE:
					return x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
						endDate: (0, O.vc)(ed(E).expiresDate, 'LL'),
						onClick: () => {
							(0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
						}
					});
				default:
					return m
						? f === U.Xh.PREMIUM_YEAR_TIER_2
							? x.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
									percent: null !== (s = null == I ? void 0 : I.percentage) && void 0 !== s ? s : U.Bo,
									regularPrice: A
								})
							: y
								? x.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
										percent: null !== (o = null == I ? void 0 : I.percentage) && void 0 !== o ? o : U.M_,
										regularPrice: A,
										numMonths: null !== (l = null == I ? void 0 : I.duration) && void 0 !== l ? l : U.rt
									})
								: x.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
										percent: null !== (u = null == I ? void 0 : I.percentage) && void 0 !== u ? u : U.M_,
										regularPrice: A,
										numMonths: null !== (d = null == I ? void 0 : I.duration) && void 0 !== d ? d : U.rt
									})
						: v
							? y
								? x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
										price: h,
										num: D
									})
								: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
										price: h,
										num: D
									})
							: x.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({ num: D });
			}
		default:
			throw Error('Invalid planId '.concat(f));
	}
}
function et(e) {
	let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s } = e,
		o = A.Z.get(r);
	return (
		l()(null != o, 'Missing plan'),
		ee({
			subscription: n,
			planId: o.id,
			price: (function (e, t, n) {
				let r = e.invoiceItems.find((e) => {
						let { subscriptionPlanId: t } = e;
						return t === n.id;
					}),
					i =
						null == r
							? Z(n.id, !1, !1, {
									paymentSourceId: t.paymentSourceId,
									currency: t.currency
								}).amount
							: r.amount;
				return (0, b.og)((0, b.T4)(i, e.currency), n.interval, n.intervalCount);
			})(t, n, o),
			includePremiumGuilds: i,
			hasDiscountApplied: a,
			activeDiscountInfo: s,
			renewalInvoicePreview: t
		})
	);
}
function en(e) {
	let { planId: t, additionalPlans: n } = e,
		r = (0, I.Q0)(t) ? null : q(t),
		i =
			null == n
				? void 0
				: n.find((e) => {
						let { planId: t } = e;
						return U.Z1.has(t);
					}),
		a = (null == i ? void 0 : i.planId) === U.Xh.PREMIUM_MONTH_GUILD ? x.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == i ? void 0 : i.planId) === U.Xh.PREMIUM_YEAR_GUILD ? x.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null,
		s = null == a ? void 0 : a.format({ num: null == i ? void 0 : i.quantity });
	if (null != r && null != s)
		return x.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
			premiumDescription: r,
			premiumGuildDescription: s
		});
	if (null != r) return r;
	if (null != s) return s;
	else throw Error('Subscription without premium or premium guild subscription');
}
function er(e) {
	let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
	if (null == t || !n) return [];
	let u = void 0 !== o && t === U.GP[o].skuId ? o : void 0;
	void 0 === u && l && !a && (u = U.IW[t]), s && !a && (void 0 === o || (l && U.No.has(o))) && m.k.trackExposure({ location: 'de805e_1' });
	let c = [];
	switch (t) {
		case U.Si.TIER_0:
			c = [U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0];
			break;
		case U.Si.TIER_1:
			c = [U.Xh.PREMIUM_MONTH_TIER_1];
			break;
		case U.Si.TIER_2:
			let d = r;
			if (null != i) {
				let e = i.items[0].planId;
				if (U.o4.has(e)) {
					let t = U.GP[e];
					d = [...U.o4].filter((e) => {
						let n = U.GP[e];
						return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === U.Si.TIER_2;
					});
				} else d = [];
			}
			c = [U.Xh.PREMIUM_YEAR_TIER_2, ...d, U.Xh.PREMIUM_MONTH_TIER_2];
			break;
		default:
			throw Error('Unexpected SKU: '.concat(t));
	}
	if (void 0 !== u) {
		let e = c.indexOf(u);
		c.splice(e, 1), c.unshift(u);
	}
	return c;
}
function ei(e) {
	let t = U.GP[e];
	if (null == t) {
		let t = Error('Unsupported plan');
		throw ((0, v.q2)(t, { tags: { planId: e } }), t);
	}
	return t.skuId;
}
function ea(e) {
	var t;
	return null == e ? F.ALL : null !== (t = F[e]) && void 0 !== t ? t : [];
}
function es(e) {
	let t = A.Z.getPlanIdsForSkus([ek(U.Si.GUILD)]);
	l()(null != t, 'Missing guildSubscriptionPlanIds');
	let n = e.find((e) => {
		let { planId: n } = e;
		return t.includes(n);
	});
	return null != n ? n.quantity : 0;
}
let eo = new Set([U.Xh.NONE_MONTH, U.Xh.NONE_3_MONTH, U.Xh.NONE_6_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_MONTH_TIER_0, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_3_MONTH_TIER_2, U.Xh.PREMIUM_6_MONTH_TIER_2]);
function el(e) {
	return eo.has(e);
}
function eu(e) {
	return U.Z1.has(e);
}
function ec(e) {
	return el(e) || eu(e);
}
function ed(e) {
	var t, n, r, i, a;
	if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
		let t = c()(e.metadata.apple_grace_period_expires_date);
		return {
			days: c().duration(t.diff(e.currentPeriodStart)).days(),
			expiresDate: t
		};
	}
	if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
		let t = c()(e.metadata.google_grace_period_expires_date),
			n = c()(e.metadata.google_original_expires_date);
		return {
			days: c().duration(t.diff(n)).days(),
			expiresDate: t
		};
	}
	if (e.isPurchasedExternally) {
		let t = e.isPurchasedViaApple ? U.$7 : U.Ue;
		return {
			days: t,
			expiresDate: c()(e.currentPeriodStart).add(t, 'days')
		};
	}
	if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date) != null)
		return {
			days: c()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
			expiresDate: c()(e.metadata.grace_period_expires_date)
		};
	{
		let t = null == e.paymentSourceId ? U.UA : U.zp;
		return {
			days: t,
			expiresDate: c()(e.currentPeriodStart).add(t, 'days')
		};
	}
}
function e_(e) {
	if (null == e) return !1;
	let t = S.Z.getPaymentSource(e);
	return null != t && w.Uk.has(t.type);
}
function eE(e) {
	return e.isPurchasedExternally
		? e.status === M.O0b.CANCELED
		: (function (e) {
				let { renewalMutations: t, additionalPlans: n, status: r } = e,
					i = es(n);
				return 0 === (null != t ? es(t.additionalPlans) : null) && 0 !== i ? M.O0b.CANCELED : r;
			})(e) === M.O0b.CANCELED;
}
function ef(e) {
	var t, n, r;
	let { subscription: i, user: a, price: s, renewalInvoicePreview: o } = e,
		{ planId: u, additionalPlans: c } = i,
		d = A.Z.get(u);
	l()(null != d, 'Missing plan');
	let _ = es(c),
		E = eT(i.planId, i.paymentSourceId, i.currency, a).amount * _;
	if (null != o) {
		let e = o.invoiceItems.find((e) => U.Z1.has(e.subscriptionPlanId));
		null != e && (E = e.amount);
	}
	s = null != s ? s : (0, b.T4)(E, i.currency);
	let f = null === (r = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
	if (eE(i))
		return i.isPurchasedViaGoogle
			? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({ quantity: _ })
			: f
				? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
						quantity: _,
						rate: (0, b.og)(s, d.interval, d.intervalCount)
					})
				: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
						quantity: _,
						rate: (0, b.og)(s, d.interval, d.intervalCount)
					});
	switch (i.status) {
		case M.O0b.ACCOUNT_HOLD:
			return i.isPurchasedViaGoogle
				? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
						quantity: _,
						boostQuantity: _
					})
				: f
					? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
							quantity: _,
							boostQuantity: _,
							rate: (0, b.og)(s, d.interval, d.intervalCount)
						})
					: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
							quantity: _,
							boostQuantity: _,
							rate: (0, b.og)(s, d.interval, d.intervalCount)
						});
		case M.O0b.PAUSE_PENDING:
		case M.O0b.PAUSED:
			return x.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
		default:
			return i.isPurchasedViaGoogle
				? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({ quantity: _ })
				: f
					? x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
							quantity: _,
							rate: (0, b.og)(s, d.interval, d.intervalCount)
						})
					: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
							quantity: _,
							rate: (0, b.og)(s, d.interval, d.intervalCount)
						});
	}
}
function eh(e, t, n) {
	let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		i = null != t ? Z(e.id, !1, r, t) : H(e.id, !1, r),
		a = (0, b.T4)(i.amount, i.currency);
	return e.currency !== w.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function ep(e, t, n) {
	let r = eh(e, t, n);
	return (0, b.og)(r, e.interval, e.intervalCount);
}
function em(e) {
	let { status: t, renewalMutations: n } = e;
	return t === M.O0b.CANCELED || (null != n && (0, I.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eI(e) {
	return e === M.O0b.PAST_DUE || e === M.O0b.ACCOUNT_HOLD || e === M.O0b.BILLING_RETRY;
}
function eT(e, t, n, r) {
	let i =
			null != t
				? {
						paymentSourceId: t,
						currency: n
					}
				: {
						country: g.Z.ipCountryCodeWithFallback,
						currency: n
					},
		a = A.Z.get(e);
	if (null == a) {
		let t = Error('Unsupported plan');
		throw ((0, v.q2)(t, { tags: { planId: e } }), t);
	}
	let s = A.Z.getForSkuAndInterval(ek(U.Si.GUILD), a.interval, a.intervalCount);
	if (null == s) {
		let t = Error('Unsupported plan');
		throw ((0, v.q2)(t, { tags: { planId: e } }), t);
	}
	return Z(s.id, (0, D.I5)(r), !1, i);
}
function eg(e, t, n) {
	let r = t.id;
	if (null != e)
		switch (r) {
			case U.Xh.PREMIUM_MONTH_TIER_0:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
			case U.Xh.PREMIUM_YEAR_TIER_0:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
			case U.Xh.PREMIUM_MONTH_TIER_1:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
			case U.Xh.PREMIUM_YEAR_TIER_1:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
			case U.Xh.PREMIUM_MONTH_TIER_2:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
			case U.Xh.PREMIUM_YEAR_TIER_2:
				return x.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2;
		}
	switch (r) {
		case U.Xh.PREMIUM_MONTH_TIER_0:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
		case U.Xh.PREMIUM_YEAR_TIER_0:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
		case U.Xh.PREMIUM_MONTH_TIER_1:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
		case U.Xh.PREMIUM_YEAR_TIER_1:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
		case U.Xh.PREMIUM_MONTH_TIER_2:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
		case U.Xh.PREMIUM_YEAR_TIER_2:
			return n ? x.Z.Messages.BILLING_SELECT_PLAN : x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
		case U.Xh.PREMIUM_3_MONTH_TIER_2:
		case U.Xh.PREMIUM_6_MONTH_TIER_2:
			return x.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({ intervalCount: t.intervalCount });
		case U.Xh.NONE_MONTH:
		case U.Xh.NONE_YEAR:
		case U.Xh.NONE_3_MONTH:
		case U.Xh.NONE_6_MONTH:
		case U.Xh.PREMIUM_MONTH_GUILD:
		case U.Xh.PREMIUM_YEAR_GUILD:
		case U.Xh.PREMIUM_3_MONTH_GUILD:
		case U.Xh.PREMIUM_6_MONTH_GUILD:
			return x.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT;
	}
	let i = Error('User is purchasing an unsupported plan');
	throw ((0, v.q2)(i, { tags: { planId: r } }), i);
}
function eS(e) {
	let t = e.invoiceItems[0].subscriptionPlanId,
		n = A.Z.get(t);
	return (
		l()(null != n, 'Missing subscriptionPlan'),
		{
			intervalType: n.interval,
			intervalCount: n.intervalCount
		}
	);
}
function eA(e) {
	let { intervalType: t = U.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
	switch (t) {
		case U.rV.DAY:
			if (n >= 7 && n % 7 == 0) return r ? x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({ weeks: n / 7 }) : x.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({ weeks: n / 7 });
			return r ? x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({ days: n }) : x.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({ days: n });
		case U.rV.MONTH:
			return r ? x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({ months: n }) : x.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({ months: n });
		case U.rV.YEAR:
			return r ? x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({ years: n }) : x.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({ years: n });
		default:
			throw Error('Unsupported interval duration.');
	}
}
function eN(e) {
	let { intervalType: t = U.rV.MONTH, intervalCount: n = 1 } = e;
	switch (t) {
		case U.rV.DAY:
			if (n >= 7 && n % 7 == 0) return x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({ weeks: n / 7 });
			return x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({ days: n });
		case U.rV.MONTH:
			return x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({ months: n });
		case U.rV.YEAR:
			return x.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({ years: n });
		default:
			throw Error('Unsupported interval duration.');
	}
}
function ev(e) {
	let { intervalType: t = U.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
	switch (t) {
		case U.rV.DAY:
			if (n >= 7 && n % 7 == 0) return r ? x.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: n / 7 }) : x.Z.Messages.DURATION_WEEKS.format({ weeks: n / 7 });
			return r ? x.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: n }) : x.Z.Messages.DURATION_DAYS.format({ days: n });
		case U.rV.MONTH:
			return r ? x.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: n }) : x.Z.Messages.DURATION_MONTHS.format({ months: n });
		case U.rV.YEAR:
			return r ? x.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: n }) : x.Z.Messages.DURATION_YEARS.format({ years: n });
		default:
			throw Error('Unsupported interval duration.');
	}
}
function eO(e, t) {
	switch (e) {
		case M.gg$.APPLE_PARTNER:
		case M.gg$.APPLE:
			return G[t];
		case M.gg$.GOOGLE:
			return k[t];
	}
	throw Error('Invalid external payment gateway '.concat(e));
}
function eR(e, t) {
	return (0, D.I5)(e) || eI(null == t ? void 0 : t.status);
}
function eC(e, t) {
	var n, r;
	let i = [],
		a = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => U.dJ.has(e.planId));
	return (
		null != a && i.push(a),
		i.push(...t),
		i.map((t) => {
			for (let n of e.items)
				if (t.planId === n.planId)
					return {
						...n,
						...t
					};
			return t;
		})
	);
}
function ey(e) {
	return e.filter((e) => !U.dJ.has(e.planId));
}
function eD(e, t, n, r) {
	var i, a;
	l()(r.has(t), 'Expected planId in group');
	let s = !1,
		o = (null !== (a = null === (i = e.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : e.items).map((e) =>
			r.has(e.planId)
				? ((s = !0),
					{
						...e,
						quantity: n,
						planId: t
					})
				: e
		);
	if (!s) {
		let r = {
				planId: t,
				quantity: n
			},
			i = e.items.find((e) => e.planId === t);
		null != i && (r.id = i.id), o.push(r);
	}
	return o.filter((e) => 0 !== e.quantity);
}
function eL(e, t) {
	return eD(e, t, 1, U.dJ);
}
function eb(e, t, n) {
	return eD(e, n, t, U.Z1);
}
function eM(e) {
	var t;
	let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => U.dJ.has(e.planId));
	if (null != n) {
		let t = A.Z.get(n.planId);
		l()(null != t, 'Missing plan'),
			(e = e.map((e) => {
				if (e === n) return e;
				let r = A.Z.get(e.planId);
				l()(null != r, 'Missing plan');
				let i = A.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
				return (
					l()(null != i, 'Missing planForInterval'),
					{
						...e,
						planId: i.id
					}
				);
			}));
	}
	return e;
}
function eP(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1]
			? arguments[1]
			: {
					useSpace: !0,
					useWithoutExperiment: !1
				};
	return (0, R.BU)(((0, y.Xv)() && e === U.p9.TIER_2 && !t.useWithoutExperiment ? U.m0[e].fileSize : U.a1[e].fileSize) / 1024, {
		useKibibytes: !0,
		useSpace: t.useSpace
	});
}
function eU(e) {
	return null == e ? null : e.items.find((e) => U.Z1.has(e.planId));
}
function ew(e) {
	let t = null != e ? V(e) : null;
	return null != t ? ei(t.planId) : null;
}
function ex(e) {
	if (null != e) {
		let t = V(e);
		if (null != t) return z(t.planId);
	}
}
function eG(e) {
	let { activated: t } = (0, f.k)(e);
	return t;
}
function ek(e) {
	return e;
}
function eB(e) {
	return 'isNitroLocked' in e;
}
t.ZP = Object.freeze({
	isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < 2592000000,
	isPremiumAtLeast: D.yd,
	isPremium: D.I5,
	isPremiumExactly: D.M5,
	getPrice: Z,
	getDefaultPrice: H,
	getInterval: function (e) {
		let t = U.GP[e];
		if (null != t)
			return {
				intervalType: t.interval,
				intervalCount: t.intervalCount
			};
		let n = Error('Unsupported plan');
		throw ((0, v.q2)(n, { tags: { planId: e } }), n);
	},
	getIntervalString: W,
	getIntervalStringAsNoun: K,
	getPremiumType: z,
	getDisplayName: q,
	getDisplayPremiumType: $,
	getPremiumPlanOptions: er,
	getUpgradeEligibilities: ea,
	getPlanDescription: ee,
	isPremiumSku: function (e) {
		return e === U.Si.TIER_0 || e === U.Si.TIER_1 || e === U.Si.TIER_2;
	},
	getClosestUpgrade: function (e) {
		let t = U.GP[e];
		if (null == t) throw Error('Unrecognized plan.');
		let { interval: n } = t,
			r = ea(e);
		for (let e of Object.keys(U.GP)) {
			let { interval: t } = U.GP[e];
			if (n === t && r.includes(e)) return e;
		}
		return null;
	},
	getIntervalMonths: function (e, t) {
		if (e === U.rV.MONTH) return t;
		if (e === U.rV.YEAR) return 12 * t;
		throw Error(''.concat(e, ' interval subscription period not implemented'));
	},
	getUserMaxFileSize: y.h6,
	getSkuIdForPlan: ei,
	getSkuIdForPremiumType: function (e) {
		switch (e) {
			case U.p9.TIER_0:
				return U.Si.TIER_0;
			case U.p9.TIER_1:
				return U.Si.TIER_1;
			case U.p9.TIER_2:
				return U.Si.TIER_2;
		}
	},
	getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
		if (z(e) === U.p9.TIER_2) return U.cb;
		return 0;
	},
	getBillingInformationString: function (e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			r = n
				? (0, b.T4)(
						t.invoiceItems
							.filter((e) => U.UD.has(e.subscriptionPlanId))
							.map((e) => e.amount)
							.reduce((e, t) => t + e, 0),
						t.currency
					)
				: (0, b.T4)(t.total, t.currency);
		if (e.status === M.O0b.CANCELED) return x.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({ endDate: t.subscriptionPeriodStart });
		if (e.status === M.O0b.PAUSE_PENDING)
			return x.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
				pauseDate: e.currentPeriodEnd,
				resumeDate: e.pauseEndsAt
			});
		if (e.status === M.O0b.PAUSED)
			return null == e.pauseEndsAt
				? n
					? x.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
							planName: x.Z.Messages.PREMIUM,
							price: r
						})
					: x.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO
				: n
					? x.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
							planName: x.Z.Messages.PREMIUM,
							resumeDate: e.pauseEndsAt,
							price: r
						})
					: x.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({ resumeDate: e.pauseEndsAt });
		else if (e.status === M.O0b.PAST_DUE) {
			var i, a;
			let t = ed(e).expiresDate;
			return (e.isPurchasedViaGoogle && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_grace_period_expires_date) != null && (t = c()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (a = e.metadata) || void 0 === a ? void 0 : a.apple_grace_period_expires_date) != null && (t = c()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
				? x.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
						endDate: t,
						paymentGatewayName: w.Vz[e.paymentGateway],
						paymentSourceLink: eO(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
					})
				: x.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
						endDate: t,
						price: r
					});
		} else if (e.status === M.O0b.BILLING_RETRY)
			return x.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
				endDate: c()(e.currentPeriodStart).add(U.A5, 'days'),
				price: r
			});
		else if (e.status === M.O0b.ACCOUNT_HOLD)
			return e.isPurchasedViaGoogle && !(0, C.isAndroid)()
				? x.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
						endDate: c()(e.currentPeriodStart).add(U.gh, 'days'),
						paymentGatewayName: w.Vz[e.paymentGateway],
						paymentSourceLink: eO(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
					})
				: x.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
						endDate: c()(e.currentPeriodStart).add(U.gh, 'days'),
						price: r
					});
		else
			return (function (e) {
				return null != e.paymentSourceId && e_(e.paymentSourceId);
			})(e)
				? x.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({ prepaidEndDate: e.currentPeriodEnd })
				: e.status === M.O0b.UNPAID
					? x.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({ maxProcessingTimeInDays: U.Rg })
					: e.isPurchasedExternally
						? x.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
								renewalDate: t.subscriptionPeriodStart,
								paymentGatewayName: w.Vz[e.paymentGateway],
								subscriptionManagementLink: eO(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
							})
						: n
							? x.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
									planName: x.Z.Messages.PREMIUM,
									renewalDate: t.subscriptionPeriodStart,
									price: r
								})
							: x.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
									renewalDate: t.subscriptionPeriodStart,
									price: r
								});
	},
	isNoneSubscription: I.Q0,
	getPlanIdFromInvoice: function (e, t) {
		let { planId: n } = e;
		if (e.status === M.O0b.CANCELED || e.status === M.O0b.PAUSE_PENDING) return n;
		l()(null != t, 'Expected invoicePreview');
		let r = t.invoiceItems.find((e) => {
			let { subscriptionPlanId: t } = e;
			return el(t);
		});
		return (n = null == r || (0, I.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
	},
	getStatusFromInvoice: function (e, t) {
		let { status: n } = e;
		if (e.status === M.O0b.CANCELED || e.status === M.O0b.PAUSE_PENDING) return n;
		l()(null != t, 'Expected invoicePreview');
		let r = t.invoiceItems.find((e) => {
			let { subscriptionPlanId: t } = e;
			return el(t);
		});
		return (null == r || (0, I.Q0)(r.subscriptionPlanId)) && (n = M.O0b.CANCELED), n;
	},
	isBaseSubscriptionCanceled: em,
	getPremiumGuildIntervalPrice: eT,
	hasAccountCredit: function (e) {
		return (
			null != e &&
			0 !== e.size &&
			Array.from(e).some((e) => {
				let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
				return null != t && null != n && !r;
			})
		);
	},
	getBillingReviewSubheader: eg,
	getIntervalForInvoice: eS,
	getPremiumPlanItem: V,
	getGuildBoostPlanItem: eU,
	isBoostOnlySubscription: function (e) {
		return null != e && null == V(e) && null != eU(e);
	},
	getPremiumSkuIdForSubscription: ew,
	getPremiumTypeFromSubscription: ex,
	getPremiumTypeFromSubscriptionRenewalMutations: function (e) {
		if (null != e && null != e.renewalMutations) {
			let t = V(e.renewalMutations);
			if (null != t) return z(t.planId);
		}
	},
	getPremiumGradientColor: function (e) {
		switch (e) {
			case U.p9.TIER_0:
				return P.Rj.PREMIUM_TIER_0;
			case U.p9.TIER_1:
				return P.Rj.PREMIUM_TIER_1;
			case U.p9.TIER_2:
				return P.Rj.PREMIUM_TIER_2;
		}
	},
	castPremiumSubscriptionAsSkuId: ek,
	canUseAnimatedEmojis: function (e) {
		return (0, p.ks)(p.g_, e);
	},
	canUseEmojisEverywhere: function (e) {
		return (0, p.ks)(p.m_, e);
	},
	canUseSoundboardEverywhere: function (e) {
		return (0, p.ks)(p._y, e);
	},
	canUseCustomCallSounds: function (e) {
		return (0, p.ks)(p.tj, e);
	},
	canUploadLargeFiles: function (e) {
		return (0, p.ks)(p.EQ, e);
	},
	canUseBadges: function (e) {
		return (0, p.ks)(p.Pl, e);
	},
	canUseHighVideoUploadQuality: function (e) {
		return (0, p.ks)(p.wN, e);
	},
	canEditDiscriminator: function (e) {
		return (0, p.ks)(p._G, e);
	},
	hasBoostDiscount: function (e) {
		return (0, p.ks)(p.j4, e);
	},
	canUseAnimatedAvatar: function (e) {
		return (0, p.ks)(p.lX, e);
	},
	canUseFancyVoiceChannelReactions: function (e) {
		return (0, p.ks)(p.Uw, e);
	},
	canInstallPremiumApplications: function (e) {
		return (0, p.ks)(p.zm, e);
	},
	canUseIncreasedMessageLength: function (e) {
		return (0, p.ks)(p.zZ, e);
	},
	canUseIncreasedGuildCap: function (e) {
		return (0, p.ks)(p.do, e);
	},
	canRedeemPremiumPerks: function (e) {
		return (0, p.ks)(p.ZE, e);
	},
	canUsePremiumProfileCustomization: function (e) {
		return (0, p.ks)(p.Ej, e);
	},
	canUsePremiumAppIcons: function (e) {
		return (0, p.ks)(p.Ct, e);
	},
	canUsePremiumGuildMemberProfile: function (e) {
		return (0, p.ks)(p.O1, e);
	},
	canUseClientThemes: function (e) {
		return (0, p.ks)(p.uw, e);
	},
	canStreamQuality: function (e, t) {
		var n;
		return (n = d.q.STREAM_HIGH_QUALITY), !!h.Z.hasActiveDemo(n) || ('high' === e ? (0, p.ks)(p.O8, t) : 'mid' === e && (0, p.ks)(p.g7, t));
	},
	hasFreeBoosts: function (e) {
		return (0, p.ks)(p.$0, e);
	},
	canUseCustomStickersEverywhere: function (e) {
		return (0, p.ks)(p.ME, e);
	},
	canUseCustomBackgrounds: function (e) {
		return (0, p.ks)(p.AN, e);
	},
	canUseCollectibles: function (e) {
		return (0, p.ks)(p._O, e);
	},
	canUseCustomNotificationSounds: function (e) {
		return (0, p.ks)(p.qH, e);
	},
	formatPriceString: function (e, t) {
		let n = (0, b.T4)(e.amount, e.currency),
			r = K(t);
		return ''.concat(n, '/').concat(r);
	},
	StreamQuality: i
});
