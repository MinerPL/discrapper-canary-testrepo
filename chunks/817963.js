"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return _
  },
  getManageResourcePermissions: function() {
    return h
  }
}), n("222007");
var i = n("884691"),
  a = n("316693"),
  l = n("446674"),
  s = n("813006");
n("923959");
var r = n("957255"),
  o = n("697218");
n("991170");
var u = n("270161"),
  c = n("843455");
let d = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  f = (e, t, n, i) => {
    if (null == e) return !1;
    if (n) return !0;
    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
    if ("userId" in e) return i && null != t && e.userId === t.id;
    if ("user" in e) {
      var a;
      return i && null != t && (null === (a = e.user) || void 0 === a ? void 0 : a.id) === t.id
    }
    return !1
  },
  E = e => {
    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
    let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [a.combine(t, c.Permissions.CREATE_EVENTS), a.combine(t, c.Permissions.MANAGE_EVENTS)]
  },
  _ = e => {
    let [t, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e), [a, u, _, h] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), r.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), r.default.can(t, e), r.default.can(n, e)]), S = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()), m = i.useCallback(e => f(e, S, u, a), [a, u, S]), p = i.useCallback(e => f(e, S, h, _), [h, _, S]);
    return null == e ? d : {
      canCreateExpressions: a,
      canCreateGuildEvent: _,
      canManageAllExpressions: u,
      canManageAllEvents: h,
      canManageGuildExpression: m,
      canManageGuildEvent: p
    }
  },
  h = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
      [i, a] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e),
      l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      _ = t.can(i, e),
      h = t.can(a, e),
      S = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: l,
      canCreateGuildEvent: _,
      canManageAllExpressions: u,
      canManageAllEvents: h,
      canManageGuildExpression: e => f(e, S, u, l),
      canManageGuildEvent: e => f(e, S, h, _)
    }
  }