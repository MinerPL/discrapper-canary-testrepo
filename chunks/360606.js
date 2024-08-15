let i, a;
t(653041), t(47120);
var s, l, r, o, d = t(392711),
  c = t.n(d),
  u = t(442837),
  I = t(570140),
  m = t(308063),
  _ = t(496675),
  N = t(855674),
  E = t(999382),
  T = t(981631);
let h = [],
  g = [],
  p = null,
  f = null,
  C = null,
  O = !1,
  x = !1,
  S = T.QZA.CLOSED,
  A = {},
  R = !1,
  b = null;

function Z(e) {
  let {
section: n
  } = e;
  if (n !== T.pNK.INTEGRATIONS)
return !1;
  if (a = T.b4C.OVERVIEW, null == i) {
let e = E.Z.getGuildId();
null != e && m.Z.fetchForGuild(e), v(!1);
  }
}

function v(e) {
  if (null != (i = E.Z.getProps().guild) && _.Z.can(T.Plq.MANAGE_GUILD, i)) {
let e = E.Z.getProps().integrations;
null == e && (x = !0), h = null != e ? e : [];
  } else
h = [];
  if (g = null != i && _.Z.can(T.Plq.MANAGE_WEBHOOKS, i) ? N.Z.getWebhooksForGuild(i.id) : [], !e && null != f) {
let e = L(f.id);
null != e && (f = e);
  }
  if (null != C) {
let e = j(C.id);
null != e && (C = e);
  }
  p = null, S = T.QZA.OPEN, A = {}, R = !1;
}
let M = c().debounce(() => {
  R && (null != f ? c().isEqual(f, L(f.id)) && (R = !1) : null != C && c().isEqual(C, j(C.id)) && (R = !1), !R && P.emitChange());
}, 500);

function L(e) {
  return h.find(n => {
let {
  id: t
} = n;
return t === e;
  });
}

function j(e) {
  return g.find(n => {
let {
  id: t
} = n;
return t === e;
  });
}
class D extends(s = u.ZP.Store) {
  initialize() {
this.waitFor(E.Z, N.Z, _.Z);
  }
  hasChanges() {
return R;
  }
  get guild() {
return i;
  }
  get integrations() {
return h;
  }
  get webhooks() {
return g;
  }
  get editedCommandId() {
return p;
  }
  get editedIntegration() {
return f;
  }
  get editedWebhook() {
return C;
  }
  get formState() {
return S;
  }
  getErrors() {
return A;
  }
  getSection() {
return a;
  }
  getSectionId() {
return b;
  }
  getIntegration(e) {
return L(e);
  }
  getWebhook(e) {
return j(e);
  }
  isFetching() {
return x || O;
  }
  showNotice() {
return this.hasChanges();
  }
  getApplication(e) {
var n;
return null === (n = h.find(n => {
  var t;
  return (null === (t = n.application) || void 0 === t ? void 0 : t.id) === e;
})) || void 0 === n ? void 0 : n.application;
  }
}
o = 'GuildSettingsIntegrationsStore', (r = 'displayName') in(l = D) ? Object.defineProperty(l, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = o;
let P = new D(I.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: function() {
return v(!1);
  },
  INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
return v(!0);
  },
  GUILD_SETTINGS_INIT: Z,
  GUILD_SETTINGS_SET_SECTION: Z,
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
let {
  section: n,
  sectionId: t
} = e;
a = n, b = t;
  },
  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
let {
  commandId: n
} = e;
p = n, f = null, C = null, A = {}, R = !0;
  },
  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
let {
  commandId: n
} = e;
if (null == p || p !== n)
  return !1;
p = null, A = {}, R = !1;
  },
  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
let {
  integrationId: n
} = e, t = L(n);
if (null == t)
  return !1;
f = t, p = null, C = null, A = {}, R = !1;
  },
  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
f = null, A = {}, R = !1;
  },
  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
let {
  settings: n
} = e;
if (null == f)
  return !1;
f = {
  ...f
}, null != n.enableEmoticons && f.enable_emoticons !== n.enableEmoticons && (f.enable_emoticons = n.enableEmoticons, R = !0), null != n.expireBehavior && f.expire_behavior !== n.expireBehavior && (f.expire_behavior = n.expireBehavior, R = !0), null != n.expireGracePeriod && f.expire_grace_period !== n.expireGracePeriod && (f.expire_grace_period = n.expireGracePeriod, R = !0), R && M();
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
let {
  settings: n
} = e;
if (null == C)
  return !1;
C = {
  ...C
}, null != n.name && C.name !== n.name && (C.name = n.name, R = !0), void 0 !== n.avatar && C.avatar !== n.avatar && (C.avatar = n.avatar, R = !0), null != n.channelId && C.channel_id !== n.channelId && (C.channel_id = n.channelId, R = !0), R && M();
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
let {
  webhookId: n
} = e, t = j(n);
if (null == t)
  return !1;
C = t, p = null, f = null, A = {}, R = !1;
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
C = null, A = {}, R = !1;
  },
  GUILD_SETTINGS_CLOSE: function() {
i = null, h = [], g = [], p = null, f = null, C = null, S = T.QZA.CLOSED, R = !1;
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
let {
  guildId: n,
  integrations: t
} = e;
if (null == i || n !== i.id || S === T.QZA.SUBMITTING)
  return !1;
for (let e of (x = !1, t))
  if (null == h.find(n => {
      let {
        id: t
      } = n;
      if (t === e.id)
        return !0;
    })) {
    var a, s;
    h.push(e), e.type === (null == f ? void 0 : f.type) && (null === (a = e.account) || void 0 === a ? void 0 : a.id) === (null === (s = f.account) || void 0 === s ? void 0 : s.id) && (f = e);
  }
for (let e = h.length - 1; e >= 0; e--) {
  let n = h[e],
    i = t.find(e => {
      let {
        id: t
      } = e;
      if (t === n.id)
        return !0;
    });
  if (null != i) {
    let t = {
      ...n,
      ...i
    };
    (null == f ? void 0 : f.id) === t.id && (!1 === t.enabled ? f = null : !R && (f = t)), h[e] = t;
  } else
    (null == f ? void 0 : f.id) === n.id && (f = null), h.splice(e, 1);
}
h = [...h], M();
  },
  WEBHOOKS_UPDATE: function(e) {
let {
  guildId: n,
  channelId: t,
  webhooks: a
} = e;
if (null == i || n !== i.id || null == a || S === T.QZA.SUBMITTING)
  return !1;
O = !1;
for (let e = g.length - 1; e >= 0; e--) {
  let n = g[e];
  if (null != t && (null == n ? void 0 : n.channel_id) !== t)
    continue;
  let i = a.find(e => {
    let {
      id: t
    } = e;
    if (t === n.id)
      return !0;
  });
  if (null != i) {
    let t = {
      ...n,
      ...i
    };
    g[e] = t, !R && (null == C ? void 0 : C.id) === t.id && (C = t);
  } else
    (null == C ? void 0 : C.id) === n.id && (C = null), g.splice(e, 1);
}
for (let e of a)
  null == g.find(n => {
    let {
      id: t
    } = n;
    if (t === e.id)
      return !0;
  }) && g.push(e);
g = [...g], M();
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
S = T.QZA.SUBMITTING, A = {};
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
var n;
if (S !== T.QZA.SUBMITTING)
  return !1;
S = T.QZA.OPEN, A = null !== (n = e.errors) && void 0 !== n ? n : {};
  }
});
n.Z = P;