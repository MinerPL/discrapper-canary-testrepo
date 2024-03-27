"use strict";
E.r(t), E.d(t, {
  default: function() {
    return V
  }
}), E("424973"), E("222007"), E("843762");
var _ = E("917351"),
  s = E.n(_),
  T = E("316693"),
  a = E("446674"),
  n = E("913144"),
  A = E("242020"),
  u = E("233069"),
  I = E("26989"),
  i = E("305961"),
  l = E("49111");
let L = [l.Permissions.KICK_MEMBERS, l.Permissions.BAN_MEMBERS, l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_CHANNELS, l.Permissions.MANAGE_GUILD, l.Permissions.MANAGE_MESSAGES, l.Permissions.MANAGE_NICKNAMES, l.Permissions.MANAGE_ROLES, l.Permissions.MANAGE_WEBHOOKS, l.Permissions.MANAGE_GUILD_EXPRESSIONS, l.Permissions.MOVE_MEMBERS, l.Permissions.MUTE_MEMBERS, l.Permissions.DEAFEN_MEMBERS],
  o = null,
  r = [],
  d = [],
  N = [],
  S = [],
  g = [],
  D = [],
  G = [],
  O = [],
  c = !0,
  U = !1,
  C = !1,
  M = !0,
  R = !1,
  f = null,
  h = l.AuditLogActions.ALL,
  p = null,
  P = {},
  y = 0;

function H(e) {
  let t = [],
    E = 0;
  return e.reverse().forEach(e => {
    var _, T, a;
    let n = [],
      I = null,
      i = null,
      L = null;
    if (null != e.reason && n.push(new A.AuditLogChange(l.AuditLogChangeKeys.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new A.AuditLogChange(t.key, t.old_value, t.new_value);
        n.push(e), e.key === l.AuditLogChangeKeys.NAME ? I = e : e.key === l.AuditLogChangeKeys.TYPE ? L = e : e.key === l.AuditLogChangeKeys.TITLE && (i = e)
      }
    if (e.action_type === l.AuditLogActions.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        E = new A.AuditLogChange(l.AuditLogChangeKeys.PRUNE_DELETE_DAYS, null, t);
      n.push(E)
    }
    e.action_type === l.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE && (null === (T = e.options) || void 0 === T ? void 0 : T.auto_moderation_rule_name) != null && n.push(new A.AuditLogChange(l.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === l.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE && (null === (_ = e.options) || void 0 === _ ? void 0 : _.status) != null && n.push(new A.AuditLogChange(l.AuditLogChangeKeys.STATUS, null, e.options.status));
    let o = new A.default({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: n,
        options: e.options
      }),
      r = t[0];
    if (function(e, t, E) {
        let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          T = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && s.isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < _ && E < T && t.targetType !== l.AuditLogTargetTypes.INVITE && t.action !== l.AuditLogActions.MESSAGE_DELETE && t.action !== l.AuditLogActions.MESSAGE_BULK_DELETE && t.action !== l.AuditLogActions.MESSAGE_PIN && t.action !== l.AuditLogActions.MESSAGE_UNPIN && t.action !== l.AuditLogActions.MEMBER_MOVE && t.action !== l.AuditLogActions.MEMBER_DISCONNECT && t.action !== l.AuditLogActions.BOT_ADD && t.action !== l.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== l.AuditLogActions.MEMBER_PRUNE
      }(r, o, E)) {
      t[0] = r.merge({
        changes: [...r.changes, ...o.changes],
        timestampEnd: o.timestampStart
      }), E++;
      return
    }
    if (o.actionType === l.AuditLogActionTypes.DELETE && (null != I || null != i)) {
      let e = null !== (a = null == I ? void 0 : I.oldValue) && void 0 !== a ? a : null == i ? void 0 : i.oldValue;
      (o.targetType === l.AuditLogTargetTypes.CHANNEL || o.targetType === l.AuditLogTargetTypes.CHANNEL_OVERWRITE) && null !== L && (0, u.isGuildSelectableChannelType)(L.oldValue) && (e = "#".concat(e)), null == P[o.targetType] ? P[o.targetType] = {
        [o.targetId]: e
      } : P[o.targetType][o.targetId] = e
    }
    E = 0, t.unshift(o)
  }), t
}

function m(e) {
  let {
    section: t
  } = e;
  if (t !== l.GuildSettingsSections.AUDIT_LOG) return !1;
  let E = I.default.getMembers(o),
    _ = i.default.getGuild(o),
    a = null != o ? i.default.getRoles(o) : void 0;
  N = s(E).filter(e => e.roles.some(t => {
    if (null != _) {
      if (e.userId === _.ownerId) return !0;
      let E = null == a ? void 0 : a[t];
      return null != E && L.some(e => T.has(E.permissions, e))
    }
  })).map(e => e.userId).value()
}
class v extends a.default.Store {
  get logs() {
    return r
  }
  get integrations() {
    return d
  }
  get webhooks() {
    return S
  }
  get guildScheduledEvents() {
    return g
  }
  get automodRules() {
    return D
  }
  get threads() {
    return G
  }
  get applicationCommands() {
    return O
  }
  get isInitialLoading() {
    return c
  }
  get isLoading() {
    return U
  }
  get isLoadingNextPage() {
    return C
  }
  get hasOlderLogs() {
    return M
  }
  get hasError() {
    return R
  }
  get userIds() {
    return N
  }
  get userIdFilter() {
    return f
  }
  get targetIdFilter() {
    return p
  }
  get actionFilter() {
    return h
  }
  get deletedTargets() {
    return P
  }
  get groupedFetchCount() {
    return y
  }
}
v.displayName = "GuildSettingsAuditLogStore";
var V = new v(n.default, {
  AUDIT_LOG_FETCH_START: function() {
    U = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    y = 0, c = !1, U = !1, M = !0, R = !1, r = H(e.logs), d = e.integrations, S = e.webhooks, g = e.guildScheduledEvents, D = null !== (t = e.automodRules) && void 0 !== t ? t : [], G = e.threads, O = e.applicationCommands, e.logs.length < l.AUDIT_LOG_PAGE_LIMIT && (M = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    U = !1, R = !0, r = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    C = !0, t && y++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: E,
      webhooks: _,
      guildScheduledEvents: s,
      automodRules: T,
      threads: a,
      applicationCommands: n
    } = e;
    if (C = !1, d = E, S = _, g = s, D = T, G = a, O = n, (0 === t.length || t.length < l.AUDIT_LOG_PAGE_LIMIT) && (M = !1), t.length > 0) {
      let e = H(t);
      r = [...r, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    C = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    h = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    f = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    p = t
  },
  GUILD_SETTINGS_SET_SECTION: m,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: E
    } = e;
    return o = t, p = null, m({
      section: E
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    r = [], N = [], h = l.AuditLogActions.ALL, f = null, p = null, P = {}, y = 0, c = !0, d = [], S = [], g = [], D = [], G = []
  }
})