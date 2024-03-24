"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return h
  },
  getManageResourcePermissions: function() {
    return _
  }
}), n("222007");
var r = n("884691"),
  i = n("316693"),
  s = n("446674"),
  o = n("813006");
n("923959");
var a = n("957255"),
  l = n("697218");
n("991170");
var u = n("270161"),
  d = n("843455");
let c = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  f = (e, t, n, r) => {
    if (null == e) return !1;
    if (n) return !0;
    if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
    if ("userId" in e) return r && null != t && e.userId === t.id;
    if ("user" in e) {
      var i;
      return r && null != t && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id
    }
    return !1
  },
  E = e => {
    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
    let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [i.combine(t, d.Permissions.CREATE_EVENTS), i.combine(t, d.Permissions.MANAGE_EVENTS)]
  },
  h = e => {
    let [t, n] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e), [i, u, h, _] = (0, s.useStateFromStoresArray)([a.default], () => [a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), p = (0, s.useStateFromStores)([l.default], () => l.default.getCurrentUser()), C = r.useCallback(e => f(e, p, u, i), [i, u, p]), v = r.useCallback(e => f(e, p, _, h), [_, h, p]);
    return null == e ? c : {
      canCreateExpressions: i,
      canCreateGuildEvent: h,
      canManageAllExpressions: u,
      canManageAllEvents: _,
      canManageGuildExpression: C,
      canManageGuildEvent: v
    }
  },
  _ = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
      [r, i] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e),
      s = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      u = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      h = t.can(r, e),
      _ = t.can(i, e),
      p = n.getCurrentUser();
    return null == e ? c : {
      canCreateExpressions: s,
      canCreateGuildEvent: h,
      canManageAllExpressions: u,
      canManageAllEvents: _,
      canManageGuildExpression: e => f(e, p, u, s),
      canManageGuildEvent: e => f(e, p, _, h)
    }
  }