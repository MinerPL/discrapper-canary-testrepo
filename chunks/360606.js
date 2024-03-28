"use strict";
let n, a;
l.r(t), l("653041"), l("47120");
var s, i, r, o, d = l("392711"),
  u = l.n(d),
  c = l("442837"),
  f = l("570140"),
  m = l("308063"),
  I = l("496675"),
  T = l("855674"),
  N = l("999382"),
  E = l("981631");
let S = [],
  g = [],
  h = null,
  p = null,
  _ = null,
  O = !1,
  A = !1,
  C = E.FormStates.CLOSED,
  x = {},
  R = !1,
  M = null;

function v(e) {
  let {
    section: t
  } = e;
  if (t !== E.GuildSettingsSections.INTEGRATIONS) return !1;
  if (a = E.IntegrationSettingsSections.OVERVIEW, null == n) {
    let e = N.default.getGuildId();
    null != e && m.default.fetchForGuild(e), L(!1)
  }
}

function L(e) {
  if (null != (n = N.default.getProps().guild) && I.default.can(E.Permissions.MANAGE_GUILD, n)) {
    let e = N.default.getProps().integrations;
    null == e && (A = !0), S = null != e ? e : []
  } else S = [];
  if (g = null != n && I.default.can(E.Permissions.MANAGE_WEBHOOKS, n) ? T.default.getWebhooksForGuild(n.id) : [], !e && null != p) {
    let e = P(p.id);
    null != e && (p = e)
  }
  if (null != _) {
    let e = b(_.id);
    null != e && (_ = e)
  }
  h = null, C = E.FormStates.OPEN, x = {}, R = !1
}
let j = u().debounce(() => {
  R && (null != p ? u().isEqual(p, P(p.id)) && (R = !1) : null != _ && u().isEqual(_, b(_.id)) && (R = !1), !R && y.emitChange())
}, 500);

function P(e) {
  return S.find(t => {
    let {
      id: l
    } = t;
    return l === e
  })
}

function b(e) {
  return g.find(t => {
    let {
      id: l
    } = t;
    return l === e
  })
}
class D extends(s = c.default.Store) {
  initialize() {
    this.waitFor(N.default, T.default, I.default)
  }
  hasChanges() {
    return R
  }
  get guild() {
    return n
  }
  get integrations() {
    return S
  }
  get webhooks() {
    return g
  }
  get editedCommandId() {
    return h
  }
  get editedIntegration() {
    return p
  }
  get editedWebhook() {
    return _
  }
  get formState() {
    return C
  }
  getErrors() {
    return x
  }
  getSection() {
    return a
  }
  getSectionId() {
    return M
  }
  getIntegration(e) {
    return P(e)
  }
  getWebhook(e) {
    return b(e)
  }
  isFetching() {
    return A || O
  }
  showNotice() {
    return this.hasChanges()
  }
  getApplication(e) {
    var t;
    return null === (t = S.find(t => {
      var l;
      return (null === (l = t.application) || void 0 === l ? void 0 : l.id) === e
    })) || void 0 === t ? void 0 : t.application
  }
}
o = "GuildSettingsIntegrationsStore", (r = "displayName") in(i = D) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o;
let y = new D(f.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: function() {
    return L(!1)
  },
  INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
    return L(!0)
  },
  GUILD_SETTINGS_INIT: v,
  GUILD_SETTINGS_SET_SECTION: v,
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: l
    } = e;
    a = t, M = l
  },
  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
    let {
      commandId: t
    } = e;
    h = t, p = null, _ = null, x = {}, R = !0
  },
  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
    let {
      commandId: t
    } = e;
    if (null == h || h !== t) return !1;
    h = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
    let {
      integrationId: t
    } = e, l = P(t);
    if (null == l) return !1;
    p = l, h = null, _ = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
    p = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
    let {
      settings: t
    } = e;
    if (null == p) return !1;
    p = {
      ...p
    }, null != t.enableEmoticons && p.enable_emoticons !== t.enableEmoticons && (p.enable_emoticons = t.enableEmoticons, R = !0), null != t.expireBehavior && p.expire_behavior !== t.expireBehavior && (p.expire_behavior = t.expireBehavior, R = !0), null != t.expireGracePeriod && p.expire_grace_period !== t.expireGracePeriod && (p.expire_grace_period = t.expireGracePeriod, R = !0), R && j()
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == _) return !1;
    _ = {
      ..._
    }, null != t.name && _.name !== t.name && (_.name = t.name, R = !0), void 0 !== t.avatar && _.avatar !== t.avatar && (_.avatar = t.avatar, R = !0), null != t.channelId && _.channel_id !== t.channelId && (_.channel_id = t.channelId, R = !0), R && j()
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, l = b(t);
    if (null == l) return !1;
    _ = l, h = null, p = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    _ = null, x = {}, R = !1
  },
  GUILD_SETTINGS_CLOSE: function() {
    n = null, S = [], g = [], h = null, p = null, _ = null, C = E.FormStates.CLOSED, R = !1
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    let {
      guildId: t,
      integrations: l
    } = e;
    if (null == n || t !== n.id || C === E.FormStates.SUBMITTING) return !1;
    for (let e of (A = !1, l))
      if (null == S.find(t => {
          let {
            id: l
          } = t;
          if (l === e.id) return !0
        })) {
        var a, s;
        S.push(e), e.type === (null == p ? void 0 : p.type) && (null === (a = e.account) || void 0 === a ? void 0 : a.id) === (null === (s = p.account) || void 0 === s ? void 0 : s.id) && (p = e)
      } for (let e = S.length - 1; e >= 0; e--) {
      let t = S[e],
        n = l.find(e => {
          let {
            id: l
          } = e;
          if (l === t.id) return !0
        });
      if (null != n) {
        let l = {
          ...t,
          ...n
        };
        (null == p ? void 0 : p.id) === l.id && (!1 === l.enabled ? p = null : !R && (p = l)), S[e] = l
      } else(null == p ? void 0 : p.id) === t.id && (p = null), S.splice(e, 1)
    }
    S = [...S], j()
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: l,
      webhooks: a
    } = e;
    if (null == n || t !== n.id || null == a || C === E.FormStates.SUBMITTING) return !1;
    O = !1;
    for (let e = g.length - 1; e >= 0; e--) {
      let t = g[e];
      if (null != l && (null == t ? void 0 : t.channel_id) !== l) continue;
      let n = a.find(e => {
        let {
          id: l
        } = e;
        if (l === t.id) return !0
      });
      if (null != n) {
        let l = {
          ...t,
          ...n
        };
        g[e] = l, !R && (null == _ ? void 0 : _.id) === l.id && (_ = l)
      } else(null == _ ? void 0 : _.id) === t.id && (_ = null), g.splice(e, 1)
    }
    for (let e of a) null == g.find(t => {
      let {
        id: l
      } = t;
      if (l === e.id) return !0
    }) && g.push(e);
    g = [...g], j()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    C = E.FormStates.SUBMITTING, x = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (C !== E.FormStates.SUBMITTING) return !1;
    C = E.FormStates.OPEN, x = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.default = y