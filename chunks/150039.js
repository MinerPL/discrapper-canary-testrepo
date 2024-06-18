"use strict";
n.d(t, {
  $U: function() {
    return E
  },
  Jw: function() {
    return S
  },
  Kg: function() {
    return I
  },
  PO: function() {
    return f
  },
  Wx: function() {
    return A
  },
  bd: function() {
    return T
  },
  f$: function() {
    return O
  },
  gc: function() {
    return c
  },
  gd: function() {
    return m
  },
  s6: function() {
    return N
  },
  xQ: function() {
    return h
  }
}), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(809206),
  o = n(18438),
  a = n(778825),
  l = n(350327),
  u = n(621853),
  _ = n(271383),
  d = n(25990);

function c(e) {
  return i.useMemo(() => {
    let t = _.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let r in t) {
      var i;
      let s = null === (i = t[r][e]) || void 0 === i ? void 0 : i.avatar;
      if (null != s) null == n[s] && (n[s] = []), n[s].push(r)
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function E(e, t) {
  let n = (0, r.e7)([_.ZP], () => void 0 === t ? null : _.ZP.getMember(t.id, e.id)),
    {
      pendingUserAvatarDecoration: i,
      userErrors: s
    } = (0, r.cj)([d.Z], () => ({
      pendingUserAvatarDecoration: d.Z.getPendingAvatarDecoration(),
      userErrors: d.Z.getErrors().avatarDecoration
    })),
    {
      pendingGuildAvatarDecoration: o,
      guildErrors: l
    } = (0, r.cj)([a.Z], () => ({
      pendingGuildAvatarDecoration: a.Z.getPendingAvatarDecoration(),
      guildErrors: a.Z.getErrors().avatarDecoration
    }));
  return {
    userAvatarDecoration: e.avatarDecoration,
    guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
    pendingAvatarDecoration: null != t ? o : i,
    pendingErrors: null != t ? l : s
  }
}

function I(e, t) {
  return (0, r.e7)([u.Z], () => {
    var n, i;
    return null == t ? null === (n = u.Z.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (i = u.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === i ? void 0 : i.profileEffectId
  }, [e, t])
}

function T(e) {
  return (0, r.cj)([d.Z, a.Z], () => null == e ? {
    pendingProfileEffectId: d.Z.getPendingProfileEffectId(),
    errors: d.Z.getErrors().profileEffect
  } : {
    pendingProfileEffectId: a.Z.getPendingProfileEffectId(),
    errors: a.Z.getErrors().profileEffect
  }, [e])
}

function h(e, t) {
  (0, l.Cf)(e === t ? void 0 : e)
}

function S(e, t) {
  (0, s.I5)(e === t ? void 0 : e)
}

function f(e, t) {
  (null != e ? o.cV : s.cV)(t)
}

function N(e, t, n) {
  if (e === t) {
    null == n ? (0, s.xn)(void 0) : (0, o.xn)(void 0);
    return
  }
  null == n ? (0, s.xn)(e) : (0, o.xn)(e)
}

function A(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: i ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: i
  };
  return null != t && "" !== t ? {
    value: t,
    isUsingGuildValue: !0
  } : {
    value: n,
    isUsingGuildValue: !1
  }
}

function m(e, t) {
  return void 0 === e ? null != t : null != e
}

function O(e, t) {
  return void 0 === e ? null != t : null != e
}