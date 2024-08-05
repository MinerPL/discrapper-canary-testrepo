n.d(t, {
  B6: function() {
return G;
  },
  Bd: function() {
return et;
  },
  DU: function() {
return K;
  },
  EH: function() {
return w;
  },
  Fr: function() {
return W;
  },
  GI: function() {
return Q;
  },
  I: function() {
return ee;
  },
  J2: function() {
return M;
  },
  Jf: function() {
return V;
  },
  KX: function() {
return $;
  },
  OH: function() {
return a;
  },
  Rf: function() {
return F;
  },
  _Q: function() {
return J;
  },
  _s: function() {
return X;
  },
  bA: function() {
return U;
  },
  e5: function() {
return i;
  },
  iO: function() {
return Y;
  },
  jU: function() {
return j;
  },
  kJ: function() {
return z;
  },
  pe: function() {
return k;
  },
  t5: function() {
return Z;
  },
  tP: function() {
return x;
  },
  uA: function() {
return H;
  },
  z: function() {
return B;
  },
  z6: function() {
return q;
  }
}), n(47120), n(653041);
var r, i, a, s, o, l, u = n(470079),
  c = n(959078),
  d = n(846519),
  _ = n(442837),
  E = n(583434),
  f = n(706454),
  h = n(553795),
  p = n(70956),
  m = n(63063),
  I = n(930153),
  T = n(617136),
  g = n(272008),
  S = n(569984),
  A = n(497505),
  N = n(918701),
  v = n(796111),
  O = n(977156),
  R = n(31055),
  C = n(585500),
  y = n(566078),
  D = n(46140),
  L = n(981631),
  b = n(689938);

function M() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
  fetchPolicy: 'cache-only'
},
[t, n] = u.useState(!1),
r = (0, _.Wu)([S.Z], () => [...S.Z.quests.values()]),
{
  isFetchingCurrentQuests: i,
  lastFetchedCurrentQuests: a
} = (0, _.cj)([S.Z], () => ({
  isFetchingCurrentQuests: S.Z.isFetchingCurrentQuests,
  lastFetchedCurrentQuests: S.Z.lastFetchedCurrentQuests
})),
s = (0, O.cB)({
  location: D.dr.USE_QUESTS
});
  return u.useEffect(() => {
if ('cache-only' !== e.fetchPolicy)
  ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && s && !t && !i && (n(!0), (0, g.xw)());
  }, [
e.fetchPolicy,
s,
t,
i,
a
  ]), {
quests: r,
isFetchingCurrentQuests: i
  };
}

function P(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(s = r || (r = {}))[s.DESC = 0] = 'DESC', s[s.ASC = 1] = 'ASC';

function U(e) {
  let {
quests: t,
isFetchingCurrentQuests: n
  } = M({
fetchPolicy: 'cache-and-network'
  }), r = new Map(t.map(e => [
e.id,
e
  ])), i = function(e) {
let t = u.useMemo(() => e.filter(e => {
    var t;
    return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
  }), [e]),
  n = u.useRef([]);
return u.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0 && n.current.length === t.length)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r, i, a, s, o;
    let l = !(0, N.zi)(e),
      u = !(0, N.zi)(t),
      c = (0, N.Mi)(e, A.jn.QUEST_BAR) || (0, N.Mi)(e, A.jn.QUEST_BAR_V2),
      d = (0, N.Mi)(t, A.jn.QUEST_BAR) || (0, N.Mi)(t, A.jn.QUEST_BAR_V2),
      _ = (0, N.Mi)(e, A.jn.GIFT_INVENTORY_FOR_YOU),
      E = (0, N.Mi)(t, A.jn.GIFT_INVENTORY_FOR_YOU),
      f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
      h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? P(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : P(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), a = function(e) {
let t = u.useMemo(() => e.filter(e => {
    var t, n;
    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
      i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
    return r && i;
  }), [e]),
  n = u.useRef([]);
return u.useMemo(() => {
  if (0 === t.length)
    return [];
  if (n.current.length > 0 && n.current.length === t.length)
    return n.current;
  let e = t.sort((e, t) => {
    var n, r;
    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
    if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null))
      return i ? -1 : 1;
    let a = y.r.build(e.config).rewardsExpireAt;
    return P(a, y.r.build(t.config).rewardsExpireAt, 0);
  }).map(e => e.id);
  return n.current = e, e;
}, [t]);
  }(t), s = [], o = [];
  for (let t of s = 'unclaimed' === e ? i : a) {
let e = r.get(t);
null != e && o.push(e);
  }
  return {
quests: o,
isFetchingCurrentQuests: n
  };
}

function w() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = M({
fetchPolicy: 'cache-only'
  }), [n, r] = u.useState(() => new Map(e.map(e => [
e.id,
(0, N.zi)(e)
  ])));
  return u.useEffect(() => {
if (t)
  return;
let n = [];
for (let t of e)
  if (null == t || (0, N.zi)(t))
    null != t && (0, N.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
  else {
    let e = new d.V7(),
      i = () => {
        let a = Date.parse(t.config.expiresAt) - Date.now();
        e.start(a, () => {
          (0, N.zi)(t) ? r(e => new Map(e).set(t.id, !0)): i();
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

function x(e) {
  let t = w();
  return u.useMemo(() => {
var n;
return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
  }, [
e,
t
  ]);
}

function G(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  dateStyle: 'short'
},
n = (0, _.e7)([f.default], () => f.default.locale);
  return u.useMemo(() => null == e ? '' : new Date(e).toLocaleDateString(n, t), [
e,
t,
n
  ]);
}

function k(e) {
  return (0, _.e7)([S.Z], () => S.Z.isProgressingOnDesktop(e.id));
}

function B(e) {
  return k(e) || (0, N.Bz)(e);
}
(o = i || (i = {})).UNCLAIMED = 'unclaimed', o.CLAIMED = 'claimed';
let F = e => {
  let t = u.useCallback(() => (0, N.il)(e), [e]),
[n, r] = u.useState(t()),
i = u.useCallback(() => r(t()), [t]),
a = B(e);
  return u.useEffect(() => {
var t, n, r;
if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
  i();
  return;
}
let s = window.setInterval(() => {
  i();
}, 1 * p.Z.Millis.SECOND);
return () => {
  clearInterval(s), i();
};
  }, [
e,
a,
i
  ]), n;
};

function V(e) {
  return u.useMemo(() => (0, N.b7)(e), [e]);
}
let H = e => {
  let {
quest: t,
location: n,
questContent: r
  } = e, i = X({
quest: t
  });
  return () => {
i ? (0, N.gI)({
  quest: t,
  showInline: (0, v.i)({
    location: n
  })
}, {
  content: r,
  ctaContent: T.jZ.CONNECT_CONSOLE_LINK
}) : (0, N.V$)({
  quest: t
}, {
  content: r,
  ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
});
  };
};

function Z(e, t, n) {
  let {
targetMinutes: r
  } = F(e), i = V(e), a = H({
quest: e,
location: t,
questContent: n
  });
  if ((0, N.zK)(e, D.S7.IN_HOUSE_CONSOLE_QUEST))
return b.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a
});
  if ((0, N.$J)(e))
return b.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
  minutes: r,
  onClick: a,
  gameTitle: y.r.build(e.config).application.name
});
  if (null != i)
return i.title;
  let s = b.Z.Messages.QUESTS_STREAM_TASK;
  return (0, N.Nj)({
quest: e
  }) && (s = b.Z.Messages.QUESTS_PLAY_TASK), s.format({
minutes: r,
gameTitle: e.config.messages.gameTitle
  });
}

function Y() {
  let {
quests: e,
isFetchingCurrentQuests: t
  } = M({
fetchPolicy: 'cache-or-network'
  }), n = w();
  return u.useMemo(() => {
let r = [];
if (t || 0 === e.length)
  return r;
for (let t of e) {
  var i;
  if (!(0, N.vR)(t, A.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
    continue;
  if ((null == t ? void 0 : t.userStatus) == null) {
    r.push(t);
    continue;
  }
  let e = null != t.userStatus.claimedAt,
    a = (0, N.zE)(t.userStatus, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
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

function j() {
  let e = Y();
  u.useEffect(() => {
for (let t of e)
  (0, g.gl)(t.id, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
  }, [e]);
}

function W(e) {
  let t = (0, R.z)({
  location: D.dr.MEMBERS_LIST
}),
n = (0, _.e7)([S.Z], () => t ? S.Z.quests : null),
r = u.useMemo(() => (0, N.Jg)(n, e), [
  e,
  n
]);
  return x(r) ? null : r;
}

function K(e) {
  var t;
  let n = (0, N.Xv)(e),
{
  product: r,
  isFetching: i
} = (0, E.T)(y.r.build(e).defaultReward.skuId);
  return {
hasQuestCollectibles: n,
avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
isFetching: i
  };
}

function z(e) {
  return {
handleComplete: () => (0, g.Wf)(e),
handleResetStatusClick: () => (0, g.eT)(e),
handleResetDismissibilityClick: () => (0, g.T0)(e),
handleOverrideDeliveryClick: () => (0, g.EW)(e)
  };
}

function q() {
  let {
fetching: e,
accounts: t
  } = (0, _.cj)([h.Z], () => ({
fetching: h.Z.isFetching(),
accounts: h.Z.getAccounts()
  })), {
xboxAccounts: n,
playstationAccounts: r,
xboxAndPlaystationAccounts: i
  } = u.useMemo(() => {
let e = t.filter(e => !1 === e.revoked),
  n = e.filter(e => e.type === L.ABu.XBOX),
  r = e.filter(e => e.type === L.ABu.PLAYSTATION),
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
let Q = e => {
let {
  questId: t,
  preview: n,
  beforeRequest: r,
  afterRequest: i
} = e, [a, s] = u.useState([]), [o, l] = u.useState(!1), d = (0, _.e7)([h.Z], () => h.Z.getAccounts());
return u.useEffect(() => {
  s(e => e.filter(e => e.type !== c.K.EXPIRED_CREDENTIAL));
}, [d]), {
  startConsoleQuest: u.useCallback(async () => {
    if (o)
      return;
    null == r || r(), l(!0);
    let e = null;
    try {
      e = await (0, g.CS)(t, n), s(e.errorHints);
    } finally {
      var a;
      l(!1), null == i || i(null !== (a = null == e ? void 0 : e.errorHints) && void 0 !== a ? a : []);
    }
  }, [
    o,
    r,
    i,
    n,
    t
  ]),
  startingConsoleQuest: o,
  errorHints: a
};
  },
  X = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = q(), r = B(t), i = 0 === n.length;
return (0, N.$J)(t) && i && !r;
  },
  $ = () => {
let {
  xboxAccounts: e,
  playstationAccounts: t
} = q(), n = e.length > 0, r = t.length > 0, i = m.Z.getArticleURL(L.BhN.QUEST_HOW_TO_PLAYSTATION), a = m.Z.getArticleURL(L.BhN.QUEST_HOW_TO_XBOX), s = b.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
  psHelpdeskArticle: i,
  xboxHelpdeskArticle: a
}), o = b.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({
  helpdeskArticle: r ? i : a
});
return {
  message: n && !r || !n && r ? o : s,
  xboxURL: a,
  playstationURL: i
};
  };

function J(e) {
  var t, n, r;
  let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
o = F(e).percentComplete > 0;
  if (s)
return 4;
  if (a)
return 3;
  if (o)
return 2;
  else if (i)
return 1;
  else
return 0;
}

function ee(e) {
  let t = (0, _.e7)([f.default], () => f.default.locale),
{
  percentComplete: n
} = F(e),
r = V(e),
i = null != r ? r.completedRatio : n,
a = 100 * i,
s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, I.T3)(t, i, {
  roundingMode: 'floor'
});
  return {
completedRatio: i,
percentComplete: a,
completedRatioDisplay: s
  };
}

function et(e) {
  var t, n;
  let r = F(e),
i = (0, N.b7)(e),
a = (0, C.D)({
  quest: e,
  taskDetails: r,
  location: D.dr.QUEST_HOME_DESKTOP,
  questContent: A.jn.QUEST_HOME_DESKTOP,
  useV2Variants: !0
}),
s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
o = G(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
  if (s)
return b.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
  claimDate: o
});
  if (null != i)
return i.description;
  if (null != a)
return a;
  return null;
}
(l = a || (a = {}))[l.UNACCEPTED = 0] = 'UNACCEPTED', l[l.ACCEPTED = 1] = 'ACCEPTED', l[l.IN_PROGRESS = 2] = 'IN_PROGRESS', l[l.COMPLETED = 3] = 'COMPLETED', l[l.CLAIMED = 4] = 'CLAIMED';