"use strict";
n.d(t, {
  B6: function() {
    return P
  },
  DU: function() {
    return k
  },
  EH: function() {
    return D
  },
  Fr: function() {
    return w
  },
  J2: function() {
    return g
  },
  Rf: function() {
    return y
  },
  W6: function() {
    return r
  },
  bA: function() {
    return v
  },
  iO: function() {
    return b
  },
  jU: function() {
    return G
  },
  kJ: function() {
    return B
  },
  t5: function() {
    return U
  },
  tP: function() {
    return M
  },
  z6: function() {
    return x
  }
}), n(47120), n(653041);
var i, r, s, o, a = n(470079),
  l = n(846519),
  u = n(442837),
  _ = n(230711),
  d = n(583434),
  c = n(706454),
  E = n(553795),
  I = n(272008),
  T = n(569984),
  h = n(497505),
  S = n(918701),
  f = n(242755),
  N = n(977156),
  A = n(31055),
  m = n(566078),
  O = n(46140),
  R = n(981631),
  C = n(689938);
let p = 12633 == n.j ? -1 : null;

function g() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = a.useState(!1),
    i = (0, u.Wu)([T.Z], () => [...T.Z.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: s
    } = (0, u.cj)([T.Z], () => ({
      isFetchingCurrentQuests: T.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: T.Z.lastFetchedCurrentQuests
    })),
    o = (0, N.cB)({
      location: O.dr.USE_QUESTS
    });
  return a.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === s) && o && !t && !r && (n(!0), (0, I.xw)())
  }, [e.fetchPolicy, o, t, r, s]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function L(e, t, n) {
  return e.localeCompare(t) * (0 === n ? p : 1)
}(s = i || (i = {}))[s.DESC = 0] = "DESC", s[s.ASC = 1] = "ASC";

function v(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = g({
    fetchPolicy: "cache-and-network"
  }), i = new Map(t.map(e => [e.id, e])), r = function(e) {
    let t = a.useMemo(() => e.filter(e => {
        var t;
        return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null)
      }), [e]),
      n = a.useRef([]);
    return a.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i, r, s, o, a;
        let l = !(0, S.zi)(e),
          u = !(0, S.zi)(t),
          _ = (0, S.Mi)(e, h.jn.QUEST_BAR) || (0, S.Mi)(e, h.jn.QUEST_BAR_V2),
          d = (0, S.Mi)(t, h.jn.QUEST_BAR) || (0, S.Mi)(t, h.jn.QUEST_BAR_V2),
          c = (0, S.Mi)(e, h.jn.GIFT_INVENTORY_FOR_YOU),
          E = (0, S.Mi)(t, h.jn.GIFT_INVENTORY_FOR_YOU),
          I = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
          T = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? l ? p : 1 : _ !== d && l && u ? _ ? p : 1 : c !== E ? c ? p : 1 : I !== T ? I ? p : 1 : l && u ? L(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 1) : L(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), s = function(e) {
    let t = a.useMemo(() => e.filter(e => {
        var t, n;
        let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
          r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
        return i && r
      }), [e]),
      n = a.useRef([]);
    return a.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i;
        let r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
        if (r !== ((null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return r ? p : 1;
        let s = m.r.build(e.config).rewardsExpireAt;
        return L(s, m.r.build(t.config).rewardsExpireAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), o = [], l = [];
  for (let t of o = "unclaimed" === e ? r : s) {
    let e = i.get(t);
    null != e && l.push(e)
  }
  return {
    quests: l,
    isFetchingCurrentQuests: n
  }
}

function D() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = g({
    fetchPolicy: "cache-only"
  }), [n, i] = a.useState(() => new Map(e.map(e => [e.id, (0, S.zi)(e)])));
  return a.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, S.zi)(t)) null != t && (0, S.zi)(t) && i(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.V7,
          r = () => {
            let s = Date.parse(t.config.expiresAt) - Date.now();
            e.start(s, () => {
              (0, S.zi)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function M(e) {
  let t = D();
  return a.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.e7)([c.default], () => c.default.locale);
  return a.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}(o = r || (r = {})).UNCLAIMED = "unclaimed", o.CLAIMED = "claimed";
let y = e => {
  let {
    quest: t,
    location: n
  } = e;
  return a.useMemo(() => (0, S.il)({
    quest: t,
    location: n
  }), [t, n])
};

function U(e, t) {
  let n = (0, f.A)({
      location: t
    }),
    {
      targetMinutes: i
    } = y({
      quest: e,
      location: t
    });
  if ((0, S.zK)(e, O.S7.IN_HOUSE_CONSOLE_QUEST)) return C.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
    minutes: i,
    onClick: () => {
      _.Z.open(R.oAB.CONNECTIONS)
    }
  });
  let r = C.Z.Messages.QUESTS_STREAM_TASK;
  return n && (0, S.Nj)({
    quest: e
  }) && (r = C.Z.Messages.QUESTS_PLAY_TASK), r.format({
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function b() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = g({
    fetchPolicy: "cache-or-network"
  }), n = D();
  return a.useMemo(() => {
    let i = [];
    if (t || 0 === e.length) return i;
    for (let t of e) {
      var r;
      if (!(0, S.vR)(t, h.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        i.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        s = (0, S.zE)(t.userStatus, h.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !s) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function G() {
  let e = b();
  a.useEffect(() => {
    for (let t of e)(0, I.gl)(t.id, h.jn.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function w(e) {
  let t = (0, A.z)({
      location: O.dr.MEMBERS_LIST
    }),
    n = (0, u.e7)([T.Z], () => t ? T.Z.quests : null),
    i = a.useMemo(() => (0, S.Jg)(n, e), [e, n]);
  return M(i) ? null : i
}

function k(e) {
  var t;
  let n = (0, S.Xv)(e),
    {
      product: i,
      isFetching: r
    } = (0, d.T)(m.r.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}

function B(e) {
  return {
    handleComplete: () => (0, I.Wf)(e),
    handleResetStatusClick: () => (0, I.eT)(e),
    handleResetDismissibilityClick: () => (0, I.T0)(e),
    handleOverrideDeliveryClick: () => (0, I.EW)(e)
  }
}

function x() {
  let {
    fetching: e,
    accounts: t
  } = (0, u.cj)([E.Z], () => ({
    fetching: E.Z.isFetching(),
    accounts: E.Z.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  } = a.useMemo(() => {
    let e = t.filter(e => !1 === e.revoked),
      n = e.filter(e => e.type === R.ABu.XBOX),
      i = e.filter(e => e.type === R.ABu.PLAYSTATION),
      r = n.concat(i);
    return {
      xboxAccounts: n,
      playstationAccounts: i,
      xboxAndPlaystationAccounts: r
    }
  }, [t]);
  return {
    fetching: e,
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  }
}