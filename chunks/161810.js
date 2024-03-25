"use strict";
let a, s, l;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("424973"), n("222007");
var i = n("917351"),
  r = n.n(i),
  o = n("446674"),
  u = n("913144"),
  d = n("611183"),
  c = n("492114"),
  f = n("305961"),
  E = n("957255"),
  h = n("45894"),
  _ = n("49111");
let C = [],
  S = null,
  I = !1,
  m = _.FormStates.CLOSED,
  p = {},
  T = !1,
  g = null;

function A() {
  if (a = null != (s = c.default.getChannel()) ? f.default.getGuild(s.guild_id) : null, C = null != s && null != a && E.default.can(_.Permissions.MANAGE_WEBHOOKS, s) ? h.default.getWebhooksForChannel(a.id, s.id) : [], null != S) {
    let e = R(S.id);
    null != e && (S = e)
  }
  m = _.FormStates.OPEN, p = {}, T = !1
}
let N = r.debounce(() => {
  T && ((null == S || r.isEqual(S, R(S.id))) && (T = !1), !T && v.emitChange())
}, 500);

function R(e) {
  return C.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class O extends o.default.Store {
  initialize() {
    this.waitFor(c.default, f.default, h.default, E.default)
  }
  hasChanges() {
    return T
  }
  get webhooks() {
    return C
  }
  get editedWebhook() {
    return S
  }
  get formState() {
    return m
  }
  getWebhook(e) {
    return R(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: m === _.FormStates.SUBMITTING,
      webhooks: C,
      editedWebhook: S,
      section: l,
      sectionId: g,
      hasChanges: this.hasChanges(),
      isFetching: I,
      errors: p
    }
  }
}
O.displayName = "ChannelSettingsIntegrationsStore";
let v = new O(u.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: A,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: A,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== _.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (l = _.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = c.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (d.default.fetchForChannel(t, e.id), I = !0), A()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, g = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = R(t);
    if (null == n) return !1;
    S = n, p = {}, T = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    S = null, p = {}, T = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == S) return !1;
    S = {
      ...S
    }, null != t.name && S.name !== t.name && (S.name = t.name, T = !0), void 0 !== t.avatar && S.avatar !== t.avatar && (S.avatar = t.avatar, T = !0), null != t.channelId && S.channel_id !== t.channelId && (S.channel_id = t.channelId, T = !0), T && N()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, C = [], S = null, m = _.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == l || m === _.FormStates.SUBMITTING) return !1;
    I = !1;
    for (let e = C.length - 1; e >= 0; e--) {
      let t = C[e];
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
        C[e] = n, !T && (null == S ? void 0 : S.id) === n.id && (S = n)
      } else(null == S ? void 0 : S.id) === t.id && (S = null), C.splice(e, 1)
    }
    for (let e of l) {
      let t = C.find(t => {
        let {
          id: n
        } = t;
        if (n === e.id) return !0
      });
      null == t && C.push(e)
    }
    C = [...C], N()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    m = _.FormStates.SUBMITTING, p = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (m !== _.FormStates.SUBMITTING) return !1;
    m = _.FormStates.OPEN, p = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
var L = v