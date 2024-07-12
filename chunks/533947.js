let i, s, a;
n(653041), n(47120);
var r, l, o, c, d = n(392711),
  u = n.n(d),
  _ = n(442837),
  h = n(570140),
  E = n(308063),
  I = n(388610),
  m = n(430824),
  g = n(496675),
  p = n(855674),
  T = n(981631);
let S = [],
  C = null,
  f = !1,
  N = T.QZA.CLOSED,
  A = {},
  Z = !1,
  L = null;

function v() {
  if (i = null != (s = I.Z.getChannel()) ? m.Z.getGuild(s.guild_id) : null, S = null != s && null != i && g.Z.can(T.Plq.MANAGE_WEBHOOKS, s) ? p.Z.getWebhooksForChannel(i.id, s.id) : [], null != C) {
let e = R(C.id);
null != e && (C = e);
  }
  N = T.QZA.OPEN, A = {}, Z = !1;
}
let O = u().debounce(() => {
  Z && ((null == C || u().isEqual(C, R(C.id))) && (Z = !1), !Z && b.emitChange());
}, 500);

function R(e) {
  return S.find(t => {
let {
  id: n
} = t;
return n === e;
  });
}
class x extends(r = _.ZP.Store) {
  initialize() {
this.waitFor(I.Z, m.Z, p.Z, g.Z);
  }
  hasChanges() {
return Z;
  }
  get webhooks() {
return S;
  }
  get editedWebhook() {
return C;
  }
  get formState() {
return N;
  }
  getWebhook(e) {
return R(e);
  }
  showNotice() {
return this.hasChanges();
  }
  getProps() {
return {
  submitting: N === T.QZA.SUBMITTING,
  webhooks: S,
  editedWebhook: C,
  section: a,
  sectionId: L,
  hasChanges: this.hasChanges(),
  isFetching: f,
  errors: A
};
  }
}
c = 'ChannelSettingsIntegrationsStore', (o = 'displayName') in(l = x) ? Object.defineProperty(l, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = c;
let b = new x(h.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: v,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: v,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
let {
  section: t
} = e;
if (t !== T.CoT.INTEGRATIONS)
  return !1;
if (a = T.b4C.OVERVIEW, null == i) {
  let e = I.Z.getChannel(),
    t = null == e ? void 0 : e.getGuildId();
  null != e && null != t && (E.Z.fetchForChannel(t, e.id), f = !0), v();
}
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
let {
  section: t,
  sectionId: n
} = e;
a = t, L = n;
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
let {
  webhookId: t
} = e, n = R(t);
if (null == n)
  return !1;
C = n, A = {}, Z = !1;
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
C = null, A = {}, Z = !1;
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
let {
  settings: t
} = e;
if (null == C)
  return !1;
C = {
  ...C
}, null != t.name && C.name !== t.name && (C.name = t.name, Z = !0), void 0 !== t.avatar && C.avatar !== t.avatar && (C.avatar = t.avatar, Z = !0), null != t.channelId && C.channel_id !== t.channelId && (C.channel_id = t.channelId, Z = !0), Z && O();
  },
  CHANNEL_SETTINGS_CLOSE: function() {
s = null, i = null, S = [], C = null, N = T.QZA.CLOSED;
  },
  WEBHOOKS_UPDATE: function(e) {
let {
  guildId: t,
  channelId: n,
  webhooks: a
} = e;
if (null == i || t !== i.id || null == s || n !== s.id || null == a || N === T.QZA.SUBMITTING)
  return !1;
f = !1;
for (let e = S.length - 1; e >= 0; e--) {
  let t = S[e];
  if (null != n && (null == t ? void 0 : t.channel_id) !== n)
    continue;
  let i = a.find(e => {
    let {
      id: n
    } = e;
    if (n === t.id)
      return !0;
  });
  if (null != i) {
    let n = {
      ...t,
      ...i
    };
    S[e] = n, !Z && (null == C ? void 0 : C.id) === n.id && (C = n);
  } else
    (null == C ? void 0 : C.id) === t.id && (C = null), S.splice(e, 1);
}
for (let e of a)
  null == S.find(t => {
    let {
      id: n
    } = t;
    if (n === e.id)
      return !0;
  }) && S.push(e);
S = [...S], O();
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
N = T.QZA.SUBMITTING, A = {};
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
var t;
if (N !== T.QZA.SUBMITTING)
  return !1;
N = T.QZA.OPEN, A = null !== (t = e.errors) && void 0 !== t ? t : {};
  }
});
t.Z = b;