"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return v
  },
  getManageResourcePermissions: function() {
    return m
  }
}), n("222007");
var i = n("884691"),
  r = n("316693"),
  l = n("446674"),
  s = n("813006");
n("923959");
var o = n("957255"),
  u = n("697218");
n("991170");
var a = n("270161"),
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
      var r;
      return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
    }
    return !1
  },
  h = e => {
    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
    let t = a.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = a.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = a.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.combine(t, c.Permissions.CREATE_EVENTS), r.combine(t, c.Permissions.MANAGE_EVENTS)]
  },
  v = e => {
    let [t, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e), [r, a, v, m] = (0, l.useStateFromStoresArray)([o.default], () => [o.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), C = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), E = i.useCallback(e => f(e, C, a, r), [r, a, C]), g = i.useCallback(e => f(e, C, m, v), [m, v, C]);
    return null == e ? d : {
      canCreateExpressions: r,
      canCreateGuildEvent: v,
      canManageAllExpressions: a,
      canManageAllEvents: m,
      canManageGuildExpression: E,
      canManageGuildEvent: g
    }
  },
  m = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
      [i, r] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e),
      l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      a = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      v = t.can(i, e),
      m = t.can(r, e),
      C = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: l,
      canCreateGuildEvent: v,
      canManageAllExpressions: a,
      canManageAllEvents: m,
      canManageGuildExpression: e => f(e, C, a, l),
      canManageGuildEvent: e => f(e, C, m, v)
    }
  }