n(47120);
var i,
	r,
	s,
	l,
	a = n(913527),
	o = n.n(a),
	u = n(442837),
	d = n(846519),
	c = n(570140),
	_ = n(533307),
	E = n(590783),
	h = n(669079),
	p = n(981631);
let f = {},
	S = new Map(),
	m = [],
	I = [],
	b = [],
	g = new Set(),
	C = {},
	O = {},
	A = new Set();
function v(e) {
	let t = E.Z.createFromServer(e),
		n = t.code;
	if (S.has(n)) S.set(n, S.get(n).merge(t));
	else if ((S.set(n, t), null != t.expiresAt)) {
		let e = new d.V7();
		(f[n] = e),
			(function e(t) {
				let n = S.get(t);
				if (null == n || null == n.expiresAt) return;
				let i = n.expiresAt.valueOf() - o()().valueOf();
				if (i <= 0) S.delete(t), delete f[t], F.emitChange();
				else {
					let n = f[t];
					if (null == n) return;
					n.start(Math.min(2147483647, i), () => e(t));
				}
			})(n);
	}
}
function R(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	if (t && !A.has(e.channel_id)) return !1;
	let n = (0, h.Fp)(e) ? (0, h.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, h.Q_)(e.content);
	return (
		0 !== n.length &&
		(n.forEach((e) => {
			!m.includes(e) && !b.includes(e) && (N({ code: e }), c.Z.wait(() => _.Z.resolveGiftCode(e, !1, !0).catch(p.VqG)));
		}),
		!1)
	);
}
function N(e) {
	let { code: t } = e;
	!m.includes(t) && (m = [...m, t]);
}
function T(e) {
	let { message: t } = e;
	return R(t, !0);
}
function y(e) {
	let { channelId: t, messages: n } = e;
	A.add(t), n.forEach((e) => R(e, !0));
}
function L(e) {
	let { firstMessages: t } = e;
	if (null == t) return !1;
	null == t || t.forEach((e) => R(e));
}
class D extends (i = u.ZP.Store) {
	get(e) {
		let t = S.get(e);
		return null == t || t.isExpired() ? null : t;
	}
	getError(e) {
		return null != e ? O[e] : null;
	}
	getForGifterSKUAndPlan(e, t, n) {
		return Array.from(S.values()).filter((i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
	}
	getIsResolving(e) {
		return m.includes(e);
	}
	getIsResolved(e) {
		return b.includes(e);
	}
	getIsAccepting(e) {
		return I.includes(e);
	}
	getUserGiftCodesFetchingForSKUAndPlan(e, t) {
		return g.has((0, h.Bg)(e, t));
	}
	getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
		return C[(0, h.Bg)(e, t)];
	}
	getResolvingCodes() {
		return m;
	}
	getResolvedCodes() {
		return b;
	}
	getAcceptingCodes() {
		return I;
	}
}
(l = 'GiftCodeStore'),
	(s = 'displayName') in (r = D)
		? Object.defineProperty(r, s, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[s] = l);
let F = new D(c.Z, {
	CONNECTION_OPEN: function () {
		return A.clear(), !1;
	},
	CHANNEL_SELECT: function (e) {
		let { channelId: t } = e;
		return null != t && A.add(t), !1;
	},
	GIFT_CODE_RESOLVE: N,
	GIFT_CODE_RESOLVE_SUCCESS: function (e) {
		let { giftCode: t } = e;
		return (m = m.filter((e) => e !== t.code)), !b.includes(t.code) && (b = [...b, t.code]), v(t);
	},
	GIFT_CODE_RESOLVE_FAILURE: function (e) {
		let { code: t } = e;
		(m = m.filter((e) => e !== t)), !b.includes(t) && (b = [...b, t]);
	},
	GIFT_CODE_REDEEM: function (e) {
		let { code: t } = e;
		!I.includes(t) && (I = [...I, t]);
	},
	GIFT_CODE_REDEEM_SUCCESS: function (e) {
		let { code: t } = e;
		I = I.filter((e) => e !== t);
		let n = S.get(t);
		null != n &&
			S.set(
				t,
				n.merge({
					redeemed: !0,
					uses: n.uses + 1
				})
			);
	},
	GIFT_CODE_REDEEM_FAILURE: function (e) {
		let { code: t, error: n } = e;
		I = I.filter((e) => e !== t);
		let i = S.get(t);
		if (((O[t] = n), null != i))
			switch (n.code) {
				case p.evJ.UNKNOWN_GIFT_CODE:
					S.set(t, i.set('revoked', !0));
					break;
				case p.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
					S.set(t, i.set('uses', i.maxUses));
			}
	},
	GIFT_CODE_REVOKE_SUCCESS: function (e) {
		let { code: t } = e;
		S.delete(t);
		let n = f[t];
		null != n && (n.stop(), delete f[t]), !b.includes(t) && (b = [...b, t]);
	},
	GIFT_CODE_CREATE_SUCCESS: function (e) {
		let { giftCode: t } = e;
		v(t);
	},
	GIFT_CODES_FETCH: function (e) {
		let { skuId: t, subscriptionPlanId: n } = e;
		g.add((0, h.Bg)(t, n));
	},
	GIFT_CODES_FETCH_SUCCESS: function (e) {
		let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
		t.forEach(v);
		let r = (0, h.Bg)(n, i);
		(C[r] = Date.now()), g.delete(r);
	},
	GIFT_CODES_FETCH_FAILURE: function (e) {
		let { skuId: t, subscriptionPlanId: n } = e;
		g.delete((0, h.Bg)(t, n));
	},
	MESSAGE_CREATE: T,
	MESSAGE_UPDATE: T,
	LOCAL_MESSAGES_LOADED: y,
	LOAD_MESSAGES_SUCCESS: y,
	LOAD_MESSAGES_AROUND_SUCCESS: y,
	LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
		let { messages: t } = e;
		t.forEach((e) => R(e));
	},
	LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
		let { messages: t } = e;
		t.forEach((e) => R(e));
	},
	SEARCH_FINISH: function (e) {
		e.messages.forEach((e) => {
			e.forEach((e) => R(e));
		});
	},
	GIFT_CODE_UPDATE: function (e) {
		let { uses: t, code: n } = e,
			i = S.get(n);
		null != i && S.set(n, i.set('uses', Math.max(i.uses, t)));
	},
	LOAD_THREADS_SUCCESS: L,
	LOAD_ARCHIVED_THREADS_SUCCESS: L,
	LOAD_FORUM_POSTS: function (e) {
		let { threads: t } = e;
		Object.values(t).map((e) => {
			let { first_message: t } = e;
			return null != t && R(t);
		});
	}
});
t.Z = F;
