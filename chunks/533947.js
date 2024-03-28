"use strict";
let a, s, l;
n.r(t), n("653041"), n("47120");
var i, r, o, u, d = n("392711"),
  c = n.n(d),
  f = n("442837"),
  E = n("570140"),
  h = n("308063"),
  _ = n("388610"),
  C = n("430824"),
  m = n("496675"),
  S = n("855674"),
  I = n("981631");
let p = [],
  T = null,
  g = !1,
  A = I.FormStates.CLOSED,
  N = {},
  v = !1,
  O = null;

function R() {
  if (a = null != (s = _.default.getChannel()) ? C.default.getGuild(s.guild_id) : null, p = null != s && null != a && m.default.can(I.Permissions.MANAGE_WEBHOOKS, s) ? S.default.getWebhooksForChannel(a.id, s.id) : [], null != T) {
    let e = P(T.id);
    null != e && (T = e)
  }
  A = I.FormStates.OPEN, N = {}, v = !1
}
let L = c().debounce(() => {
  v && ((null == T || c().isEqual(T, P(T.id))) && (v = !1), !v && y.emitChange())
}, 500);

function P(e) {
  return p.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class M extends(i = f.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default, S.default, m.default)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return p
  }
  get editedWebhook() {
    return T
  }
  get formState() {
    return A
  }
  getWebhook(e) {
    return P(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: A === I.FormStates.SUBMITTING,
      webhooks: p,
      editedWebhook: T,
      section: l,
      sectionId: O,
      hasChanges: this.hasChanges(),
      isFetching: g,
      errors: N
    }
  }
}
u = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = M) ? Object.defineProperty(r, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = u;
let y = new M(E.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: R,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: R,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== I.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (l = I.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = _.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (h.default.fetchForChannel(t, e.id), g = !0), R()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, O = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = P(t);
    if (null == n) return !1;
    T = n, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    T = null, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == T) return !1;
    T = {
      ...T
    }, null != t.name && T.name !== t.name && (T.name = t.name, v = !0), void 0 !== t.avatar && T.avatar !== t.avatar && (T.avatar = t.avatar, v = !0), null != t.channelId && T.channel_id !== t.channelId && (T.channel_id = t.channelId, v = !0), v && L()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, p = [], T = null, A = I.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == l || A === I.FormStates.SUBMITTING) return !1;
    g = !1;
    for (let e = p.length - 1; e >= 0; e--) {
      let t = p[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let a = l.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) return !0
      });
      if (null != a) {
        let n = {
          ...t,
          ...a
        };
        p[e] = n, !v && (null == T ? void 0 : T.id) === n.id && (T = n)
      } else(null == T ? void 0 : T.id) === t.id && (T = null), p.splice(e, 1)
    }
    for (let e of l) null == p.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
    }) && p.push(e);
    p = [...p], L()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    A = I.FormStates.SUBMITTING, N = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (A !== I.FormStates.SUBMITTING) return !1;
    A = I.FormStates.OPEN, N = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.default = y