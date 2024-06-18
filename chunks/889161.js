"use strict";
n.d(t, {
  Gw: function() {
    return T
  },
  XJ: function() {
    return I
  }
}), n(47120);
var i = n(470079),
  r = n(149765),
  s = n(442837),
  o = n(601964);
n(984933);
var a = n(496675),
  l = n(594174);
n(700785);
var u = n(85243),
  _ = n(231338);
let d = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  c = (e, t, n, i) => {
    if (null == e) return !1;
    if (n) return !0;
    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
    if ("userId" in e) return i && null != t && e.userId === t.id;
    if ("user" in e) {
      var r;
      return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
    }
    return !1
  },
  E = e => {
    if (null == e) return [_.Pl.CREATE_EVENTS, _.Pl.MANAGE_EVENTS];
    let t = u.TT;
    return e.isGuildStageVoice() ? t = u.LK : e.isGuildVoice() && (t = u.AN), [r.$e(t, _.Pl.CREATE_EVENTS), r.$e(t, _.Pl.MANAGE_EVENTS)]
  },
  I = e => {
    let [t, n] = e instanceof o.ZP ? [_.Pl.CREATE_EVENTS, _.Pl.MANAGE_EVENTS] : E(e), [r, u, I, T] = (0, s.Wu)([a.Z], () => [a.Z.can(_.Pl.CREATE_GUILD_EXPRESSIONS, e), a.Z.can(_.Pl.MANAGE_GUILD_EXPRESSIONS, e), a.Z.can(t, e), a.Z.can(n, e)]), h = (0, s.e7)([l.default], () => l.default.getCurrentUser()), S = i.useCallback(e => c(e, h, u, r), [r, u, h]), f = i.useCallback(e => c(e, h, T, I), [T, I, h]);
    return null == e ? d : {
      canCreateExpressions: r,
      canCreateGuildEvent: I,
      canManageAllExpressions: u,
      canManageAllEvents: T,
      canManageGuildExpression: S,
      canManageGuildEvent: f
    }
  },
  T = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
      [i, r] = e instanceof o.ZP ? [_.Pl.CREATE_EVENTS, _.Pl.MANAGE_EVENTS] : E(e),
      s = t.can(_.Pl.CREATE_GUILD_EXPRESSIONS, e),
      u = t.can(_.Pl.MANAGE_GUILD_EXPRESSIONS, e),
      I = t.can(i, e),
      T = t.can(r, e),
      h = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: s,
      canCreateGuildEvent: I,
      canManageAllExpressions: u,
      canManageAllEvents: T,
      canManageGuildExpression: e => c(e, h, u, s),
      canManageGuildEvent: e => c(e, h, T, I)
    }
  }