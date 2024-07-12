n(47120);
var i, s, r, l, o = n(392711),
  a = n.n(o),
  u = n(913527),
  d = n.n(u),
  c = n(442837),
  _ = n(846519),
  E = n(570140),
  p = n(533307),
  h = n(590783),
  f = n(669079),
  S = n(981631);
let m = {},
  I = {},
  g = [],
  A = [],
  C = [],
  v = new Set(),
  R = {},
  O = {},
  N = new Set();

function T(e) {
  let t = h.Z.createFromServer(e),
n = t.code;
  if (null != I[n])
I[n] = I[n].merge(t);
  else if (I[n] = t, null != t.expiresAt) {
let e = new _.V7();
m[n] = e,
  function e(t) {
    let n = I[t];
    if (null == n || null == n.expiresAt)
      return;
    let i = n.expiresAt.valueOf() - d()().valueOf();
    if (i <= 0)
      delete I[t], delete m[t], F.emitChange();
    else {
      let n = m[t];
      if (null == n)
        return;
      n.start(Math.min(2147483647, i), () => e(t));
    }
  }(n);
  }
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !N.has(e.channel_id))
return !1;
  let n = (0, f.Fp)(e) ? (0, f.Q_)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.Q_)(e.content);
  return 0 !== n.length && (n.forEach(e => {
!g.includes(e) && !C.includes(e) && (b({
  code: e
}), E.Z.wait(() => p.Z.resolveGiftCode(e, !1, !0).catch(S.VqG)));
  }), !1);
}

function b(e) {
  let {
code: t
  } = e;
  !g.includes(t) && (g = [
...g,
t
  ]);
}

function D(e) {
  let {
message: t
  } = e;
  return y(t, !0);
}

function L(e) {
  let {
channelId: t,
messages: n
  } = e;
  N.add(t), n.forEach(e => y(e, !0));
}

function P(e) {
  let {
firstMessages: t
  } = e;
  if (null == t)
return !1;
  null == t || t.forEach(e => y(e));
}
class Z extends(i = c.ZP.Store) {
  get(e) {
let t = I[e];
return null == t || t.isExpired() ? null : t;
  }
  getError(e) {
return null != e ? O[e] : null;
  }
  getForGifterSKUAndPlan(e, t, n) {
return a().values(I).filter(i => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
  }
  getIsResolving(e) {
return g.includes(e);
  }
  getIsResolved(e) {
return C.includes(e);
  }
  getIsAccepting(e) {
return A.includes(e);
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
return v.has((0, f.Bg)(e, t));
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
return R[(0, f.Bg)(e, t)];
  }
  getResolvingCodes() {
return g;
  }
  getResolvedCodes() {
return C;
  }
  getAcceptingCodes() {
return A;
  }
}
l = 'GiftCodeStore', (r = 'displayName') in(s = Z) ? Object.defineProperty(s, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = l;
let F = new Z(E.Z, {
  CONNECTION_OPEN: function() {
return N.clear(), !1;
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
return null != t && N.add(t), !1;
  },
  GIFT_CODE_RESOLVE: b,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
let {
  giftCode: t
} = e;
return g = g.filter(e => e !== t.code), !C.includes(t.code) && (C = [
  ...C,
  t.code
]), T(t);
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
let {
  code: t
} = e;
g = g.filter(e => e !== t), !C.includes(t) && (C = [
  ...C,
  t
]);
  },
  GIFT_CODE_REDEEM: function(e) {
let {
  code: t
} = e;
!A.includes(t) && (A = [
  ...A,
  t
]);
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
let {
  code: t
} = e;
A = A.filter(e => e !== t);
let n = I[t];
null != n && (I[t] = n.merge({
  redeemed: !0,
  uses: n.uses + 1
}));
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
let {
  code: t,
  error: n
} = e;
A = A.filter(e => e !== t);
let i = I[t];
if (O[t] = n, null != i)
  switch (n.code) {
    case S.evJ.UNKNOWN_GIFT_CODE:
      I[t] = i.set('revoked', !0);
      break;
    case S.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
      I[t] = i.set('uses', i.maxUses);
  }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
let {
  code: t
} = e;
delete I[t];
let n = m[t];
null != n && (n.stop(), delete m[t]), !C.includes(t) && (C = [
  ...C,
  t
]);
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
let {
  giftCode: t
} = e;
T(t);
  },
  GIFT_CODES_FETCH: function(e) {
let {
  skuId: t,
  subscriptionPlanId: n
} = e;
v.add((0, f.Bg)(t, n));
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
let {
  giftCodes: t,
  skuId: n,
  subscriptionPlanId: i
} = e;
t.forEach(T);
let s = (0, f.Bg)(n, i);
R[s] = Date.now(), v.delete(s);
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
let {
  skuId: t,
  subscriptionPlanId: n
} = e;
v.delete((0, f.Bg)(t, n));
  },
  MESSAGE_CREATE: D,
  MESSAGE_UPDATE: D,
  LOCAL_MESSAGES_LOADED: L,
  LOAD_MESSAGES_SUCCESS: L,
  LOAD_MESSAGES_AROUND_SUCCESS: L,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
let {
  messages: t
} = e;
t.forEach(e => y(e));
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
let {
  messages: t
} = e;
t.forEach(e => y(e));
  },
  SEARCH_FINISH: function(e) {
e.messages.forEach(e => {
  e.forEach(e => y(e));
});
  },
  GIFT_CODE_UPDATE: function(e) {
let {
  uses: t,
  code: n
} = e, i = I[n];
null != i && (I[n] = i.set('uses', Math.max(i.uses, t)));
  },
  LOAD_THREADS_SUCCESS: P,
  LOAD_ARCHIVED_THREADS_SUCCESS: P,
  LOAD_FORUM_POSTS: function(e) {
let {
  threads: t
} = e;
Object.values(t).map(e => {
  let {
    first_message: t
  } = e;
  return null != t && y(t);
});
  }
});
t.Z = F;