"use strict";
s.r(t), s("653041"), s("47120"), s("733860");
var E, _, a, n, T = s("392711"),
  i = s.n(T),
  u = s("149765"),
  A = s("442837"),
  l = s("570140"),
  I = s("387667"),
  r = s("131704"),
  o = s("271383"),
  L = s("430824"),
  d = s("981631");
let N = [d.Permissions.KICK_MEMBERS, d.Permissions.BAN_MEMBERS, d.Permissions.ADMINISTRATOR, d.Permissions.MANAGE_CHANNELS, d.Permissions.MANAGE_GUILD, d.Permissions.MANAGE_MESSAGES, d.Permissions.MANAGE_NICKNAMES, d.Permissions.MANAGE_ROLES, d.Permissions.MANAGE_WEBHOOKS, d.Permissions.MANAGE_GUILD_EXPRESSIONS, d.Permissions.MOVE_MEMBERS, d.Permissions.MUTE_MEMBERS, d.Permissions.DEAFEN_MEMBERS],
  S = null,
  g = [],
  D = [],
  c = [],
  G = [],
  O = [],
  C = [],
  U = [],
  M = [],
  R = !0,
  f = !1,
  h = !1,
  p = !0,
  y = !1,
  P = null,
  m = d.AuditLogActions.ALL,
  v = null,
  H = {},
  V = 0;

function B(e) {
  let t = [],
    s = 0;
  return e.reverse().forEach(e => {
    var E, _, a;
    let n = [],
      T = null,
      u = null,
      A = null;
    if (null != e.reason && n.push(new I.AuditLogChange(d.AuditLogChangeKeys.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new I.AuditLogChange(t.key, t.old_value, t.new_value);
        n.push(e), e.key === d.AuditLogChangeKeys.NAME ? T = e : e.key === d.AuditLogChangeKeys.TYPE ? A = e : e.key === d.AuditLogChangeKeys.TITLE && (u = e)
      }
    if (e.action_type === d.AuditLogActions.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        s = new I.AuditLogChange(d.AuditLogChangeKeys.PRUNE_DELETE_DAYS, null, t);
      n.push(s)
    }
    e.action_type === d.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE && (null === (_ = e.options) || void 0 === _ ? void 0 : _.auto_moderation_rule_name) != null && n.push(new I.AuditLogChange(d.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === d.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE && (null === (E = e.options) || void 0 === E ? void 0 : E.status) != null && n.push(new I.AuditLogChange(d.AuditLogChangeKeys.STATUS, null, e.options.status));
    let l = new I.default({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: n,
        options: e.options
      }),
      o = t[0];
    if (function(e, t, s) {
        let E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && i().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < E && s < _ && t.targetType !== d.AuditLogTargetTypes.INVITE && t.action !== d.AuditLogActions.MESSAGE_DELETE && t.action !== d.AuditLogActions.MESSAGE_BULK_DELETE && t.action !== d.AuditLogActions.MESSAGE_PIN && t.action !== d.AuditLogActions.MESSAGE_UNPIN && t.action !== d.AuditLogActions.MEMBER_MOVE && t.action !== d.AuditLogActions.MEMBER_DISCONNECT && t.action !== d.AuditLogActions.BOT_ADD && t.action !== d.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== d.AuditLogActions.MEMBER_PRUNE
      }(o, l, s)) {
      t[0] = o.merge({
        changes: [...o.changes, ...l.changes],
        timestampEnd: l.timestampStart
      }), s++;
      return
    }
    if (l.actionType === d.AuditLogActionTypes.DELETE && (null != T || null != u)) {
      let e = null !== (a = null == T ? void 0 : T.oldValue) && void 0 !== a ? a : null == u ? void 0 : u.oldValue;
      (l.targetType === d.AuditLogTargetTypes.CHANNEL || l.targetType === d.AuditLogTargetTypes.CHANNEL_OVERWRITE) && null !== A && (0, r.isGuildSelectableChannelType)(A.oldValue) && (e = "#".concat(e)), null == H[l.targetType] ? H[l.targetType] = {
        [l.targetId]: e
      } : H[l.targetType][l.targetId] = e
    }
    s = 0, t.unshift(l)
  }), t
}

function K(e) {
  let {
    section: t
  } = e;
  if (t !== d.GuildSettingsSections.AUDIT_LOG) return !1;
  let s = o.default.getMembers(S),
    E = L.default.getGuild(S),
    _ = null != S ? L.default.getRoles(S) : void 0;
  c = i()(s).filter(e => e.roles.some(t => {
    if (null != E) {
      if (e.userId === E.ownerId) return !0;
      let s = null == _ ? void 0 : _[t];
      return null != s && N.some(e => u.has(s.permissions, e))
    }
  })).map(e => e.userId).value()
}
class F extends(E = A.default.Store) {
  get logs() {
    return g
  }
  get integrations() {
    return D
  }
  get webhooks() {
    return G
  }
  get guildScheduledEvents() {
    return O
  }
  get automodRules() {
    return C
  }
  get threads() {
    return U
  }
  get applicationCommands() {
    return M
  }
  get isInitialLoading() {
    return R
  }
  get isLoading() {
    return f
  }
  get isLoadingNextPage() {
    return h
  }
  get hasOlderLogs() {
    return p
  }
  get hasError() {
    return y
  }
  get userIds() {
    return c
  }
  get userIdFilter() {
    return P
  }
  get targetIdFilter() {
    return v
  }
  get actionFilter() {
    return m
  }
  get deletedTargets() {
    return H
  }
  get groupedFetchCount() {
    return V
  }
}
n = "GuildSettingsAuditLogStore", (a = "displayName") in(_ = F) ? Object.defineProperty(_, a, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[a] = n, t.default = new F(l.default, {
  AUDIT_LOG_FETCH_START: function() {
    f = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    V = 0, R = !1, f = !1, p = !0, y = !1, g = B(e.logs), D = e.integrations, G = e.webhooks, O = e.guildScheduledEvents, C = null !== (t = e.automodRules) && void 0 !== t ? t : [], U = e.threads, M = e.applicationCommands, e.logs.length < d.AUDIT_LOG_PAGE_LIMIT && (p = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    f = !1, y = !0, g = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    h = !0, t && V++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: s,
      webhooks: E,
      guildScheduledEvents: _,
      automodRules: a,
      threads: n,
      applicationCommands: T
    } = e;
    if (h = !1, D = s, G = E, O = _, C = a, U = n, M = T, (0 === t.length || t.length < d.AUDIT_LOG_PAGE_LIMIT) && (p = !1), t.length > 0) {
      let e = B(t);
      g = [...g, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    h = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    m = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    P = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    v = t
  },
  GUILD_SETTINGS_SET_SECTION: K,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: s
    } = e;
    return S = t, v = null, K({
      section: s
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    g = [], c = [], m = d.AuditLogActions.ALL, P = null, v = null, H = {}, V = 0, R = !0, D = [], G = [], O = [], C = [], U = []
  }
})