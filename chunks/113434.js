n.d(t, {
  B6: function() {
return b;
  },
  DU: function() {
return V;
  },
  EH: function() {
return D;
  },
  Fr: function() {
return F;
  },
  GI: function() {
return Y;
  },
  J2: function() {
return R;
  },
  Jf: function() {
return w;
  },
  Rf: function() {
return U;
  },
  _s: function() {
return j;
  },
  bA: function() {
return y;
  },
  e5: function() {
return i;
  },
  iO: function() {
return k;
  },
  jU: function() {
return B;
  },
  kJ: function() {
return H;
  },
  pe: function() {
return M;
  },
  t5: function() {
return G;
  },
  tP: function() {
return L;
  },
  uA: function() {
return x;
  },
  z: function() {
return P;
  },
  z6: function() {
return Z;
  }
}), n(47120), n(653041);
var r, i, a, o, s = n(470079),
  l = n(846519),
  u = n(442837),
  c = n(583434),
  d = n(706454),
  _ = n(553795),
  E = n(70956),
  f = n(617136),
  h = n(272008),
  p = n(569984),
  m = n(497505),
  I = n(918701),
  T = n(796111),
  g = n(977156),
  S = n(31055),
  A = n(566078),
  N = n(46140),
  v = n(981631),
  O = n(689938);

function R() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
  fetchPolicy: 'cache-only'
},
[t, n] = s.useState(!1),
r = (0, u.Wu)([p.Z], () => [...p.Z.quests.values()]),
{
  isFetchingCurrentQuests: i,
  lastFetchedCurrentQuests: a
} = (0, u.cj)([p.Z], () => ({
  isFetchingCurrentQuests: p.Z.isFetchingCurrentQuests,
  lastFetchedCurrentQuests: p.Z.lastFetchedCurrentQuests
})),
o = (0, g.cB)({
  location: N.dr.USE_QUESTS
});
  return s.useEffect(() => {
if ('cache-only' !== e.fetchPolicy)
  ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && o && !t && !i && (n(!0), (0, h.xw)());
  }, [
e.fetchPolicy,
o,
t,
i,
a
  ]), {
quests: r,
isFetchingCurrentQuests: i
  };
}

function C(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(a = r || (r = {}))[a.DESC = 0] = 'DESC', a[a.ASC = 1] = 'ASC';

function y(e) {
  let {
quests: t,
isFetchingCurrentQuests: n
  } = R({
fetchPolicy: 'cache-and-network'
  }), r = new Map(t.map(e => [
e.id,
e
  ])), i = function(e) {
let t = s.useMemo(() => e.filter(e => {
    var t;
    return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
  }), [e]),
  n = s.useRef([]);
return s.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r, i, a, o, s;
    let l = !(0, I.zi)(e),
      u = !(0, I.zi)(t),
      c = (0, I.Mi)(e, m.jn.QUEST_BAR) || (0, I.Mi)(e, m.jn.QUEST_BAR_V2),
      d = (0, I.Mi)(t, m.jn.QUEST_BAR) || (0, I.Mi)(t, m.jn.QUEST_BAR_V2),
      _ = (0, I.Mi)(e, m.jn.GIFT_INVENTORY_FOR_YOU),
      E = (0, I.Mi)(t, m.jn.GIFT_INVENTORY_FOR_YOU),
      f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
      h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? C(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : C(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), a = function(e) {
let t = s.useMemo(() => e.filter(e => {
    var t, n;
    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
      i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
    return r && i;
  }), [e]),
  n = s.useRef([]);
return s.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r;
    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
    if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null))
      return i ? -1 : 1;
    let a = A.r.build(e.config).rewardsExpireAt;
    return C(a, A.r.build(t.config).rewardsExpireAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), o = [], l = [];
  for (let t of o = 'unclaimed' === e ? i : a) {
let e = r.get(t);
null != e && l.push(e);
  }
  return {
quests: l,
isFetchingCurrentQuests: n
  };
}

function D() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = R({
fetchPolicy: 'cache-only'
  }), [n, r] = s.useState(() => new Map(e.map(e => [
e.id,
(0, I.zi)(e)
  ])));
  return s.useEffect(() => {
if (t)
  return;
let n = [];
for (let t of e)
  if (null == t || (0, I.zi)(t))
    null != t && (0, I.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
  else {
    let e = new l.V7(),
      i = () => {
        let a = Date.parse(t.config.expiresAt) - Date.now();
        e.start(a, () => {
          (0, I.zi)(t) ? r(e => new Map(e).set(t.id, !0)): i();
        }), n.push(e);
      };
    i();
  }
return () => {
  for (let e of n)
    e.stop();
};
  }, [
e,
t
  ]), n;
}

function L(e) {
  let t = D();
  return s.useMemo(() => {
var n;
return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
  }, [
e,
t
  ]);
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  dateStyle: 'short'
},
n = (0, u.e7)([d.default], () => d.default.locale);
  return s.useMemo(() => null == e ? '' : new Date(e).toLocaleDateString(n, t), [
e,
t,
n
  ]);
}

function M(e) {
  return (0, u.e7)([p.Z], () => p.Z.isProgressingOnDesktop(e.id));
}

function P(e) {
  return M(e) || (0, I.Bz)(e);
}
(o = i || (i = {})).UNCLAIMED = 'unclaimed', o.CLAIMED = 'claimed';
let U = e => {
  let t = s.useCallback(() => (0, I.il)(e), [e]),
[n, r] = s.useState(t()),
i = s.useCallback(() => r(t()), [t]),
a = P(e);
  return s.useEffect(() => {
var t, n, r;
if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
  i();
  return;
}
let o = window.setInterval(() => {
  i();
}, 1 * E.Z.Millis.SECOND);
return () => {
  clearInterval(o), i();
};
  }, [
e,
a,
i
  ]), n;
};

function w(e) {
  return s.useMemo(() => (0, I.b7)(e), [e]);
}
let x = e => {
  let {
quest: t,
location: n,
questContent: r
  } = e, i = j({
quest: t
  });
  return () => {
i ? (0, I.gI)({
  quest: t,
  showInline: (0, T.i)({
    location: n
  })
}, {
  content: r,
  ctaContent: f.jZ.CONNECT_CONSOLE_LINK
}) : (0, I.V$)({
  quest: t
}, {
  content: r,
  ctaContent: f.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
});
  };
};

function G(e, t, n) {
  let {
targetMinutes: r
  } = U(e), i = w(e), a = x({
quest: e,
location: t,
questContent: n
  });
  if ((0, I.zK)(e, N.S7.IN_HOUSE_CONSOLE_QUEST))
return O.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a
});
  if ((0, I.zK)(e, N.S7.MOBILE_CONSOLE_QUEST))
return O.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a,
  gameTitle: A.r.build(e.config).application.name
});
  if (null != i)
return i.title;
  let o = O.Z.Messages.QUESTS_STREAM_TASK;
  return (0, I.Nj)({
quest: e
  }) && (o = O.Z.Messages.QUESTS_PLAY_TASK), o.format({
minutes: r,
gameTitle: e.config.messages.gameTitle
  });
}

function k() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = R({
fetchPolicy: 'cache-or-network'
  }), n = D();
  return s.useMemo(() => {
let r = [];
if (t || 0 === e.length)
  return r;
for (let t of e) {
  var i;
  if (!(0, I.vR)(t, m.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
    continue;
  if ((null == t ? void 0 : t.userStatus) == null) {
    r.push(t);
    continue;
  }
  let e = null != t.userStatus.claimedAt,
    a = (0, I.zE)(t.userStatus, m.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  if (!e && !a) {
    r.push(t);
    continue;
  }
}
return r;
  }, [
e,
n,
t
  ]);
}

function B() {
  let e = k();
  s.useEffect(() => {
for (let t of e)
  (0, h.gl)(t.id, m.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  }, [e]);
}

function F(e) {
  let t = (0, S.z)({
  location: N.dr.MEMBERS_LIST
}),
n = (0, u.e7)([p.Z], () => t ? p.Z.quests : null),
r = s.useMemo(() => (0, I.Jg)(n, e), [
  e,
  n
]);
  return L(r) ? null : r;
}

function V(e) {
  var t;
  let n = (0, I.Xv)(e),
{
  product: r,
  isFetching: i
} = (0, c.T)(A.r.build(e).defaultReward.skuId);
  return {
hasQuestCollectibles: n,
avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
isFetching: i
  };
}

function H(e) {
  return {
handleComplete: () => (0, h.Wf)(e),
handleResetStatusClick: () => (0, h.eT)(e),
handleResetDismissibilityClick: () => (0, h.T0)(e),
handleOverrideDeliveryClick: () => (0, h.EW)(e)
  };
}

function Z() {
  let {
fetching: e,
accounts: t
  } = (0, u.cj)([_.Z], () => ({
fetching: _.Z.isFetching(),
accounts: _.Z.getAccounts()
  })), {
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  } = s.useMemo(() => {
let e = t.filter(e => !1 === e.revoked),
  n = e.filter(e => e.type === v.ABu.XBOX),
  r = e.filter(e => e.type === v.ABu.PLAYSTATION),
  i = n.concat(r);
return {
  xboxAccounts: n,
  playstationAccounts: r,
  xboxAndPlaystationAccounts: i
};
  }, [t]);
  return {
fetching: e,
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  };
}
let Y = e => {
let {
  questId: t,
  preview: n,
  beforeRequest: r,
  afterRequest: i
} = e, [a, o] = s.useState([]), [l, u] = s.useState(!1);
return {
  startConsoleQuest: s.useCallback(async () => {
    if (!l) {
      null == r || r(), u(!0);
      try {
        let e = await (0, h.CS)(t, n);
        o(e.errorHints);
      } finally {
        u(!1), null == i || i();
      }
    }
  }, [
    l,
    r,
    i,
    n,
    t
  ]),
  startingConsoleQuest: l,
  errorHints: a
};
  },
  j = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = Z(), r = P(t), i = 0 === n.length;
return (0, I.$J)(t) && i && !r;
  };