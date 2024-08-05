n.d(t, {
  d: function() {
return r;
  }
}), n(47120);
var r, i, a, s = n(392711),
  o = n.n(s),
  l = n(442837),
  u = n(570140),
  c = n(823379),
  d = n(709054),
  _ = n(314897),
  E = n(592125),
  f = n(486472);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let p = n(981631).en1 + 500;
(a = r || (r = {}))[a.ChannelMessage = 0] = 'ChannelMessage', a[a.ThreadSettings = 1] = 'ThreadSettings', a[a.FirstThreadMessage = 2] = 'FirstThreadMessage', a[a.ApplicationLauncherCommand = 3] = 'ApplicationLauncherCommand', a[a.Poll = 4] = 'Poll', a[a.SlashCommand = 5] = 'SlashCommand';
let m = {};

function I(e) {
  let t = m[e];
  return null == t && (t = m[e] = {}), t;
}

function T(e) {
  let {
type: t,
channelId: n,
draft: r,
draftType: i
  } = e, a = E.Z.getChannel(n);
  r === (null == a ? void 0 : a.template) && (r = '');
  let s = _.default.getId();
  if (null != s && null != r && '' !== r) {
var o, l;
let e = I(s),
  t = e[n];
if (null == t && (t = e[n] = {}), (l = r).length > p && (l = l.substr(0, p)), (r = l) === (null === (o = t[i]) || void 0 === o ? void 0 : o.draft))
  return !1;
t[i] = {
  timestamp: Date.now(),
  draft: r
};
  } else
g(n, i);
  return 'DRAFT_SAVE' === t;
}

function g(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.default.getId();
  if (null == n)
return !1;
  let r = I(n),
i = r[e];
  if (null == i)
return !1;
  delete i[t], o().isEmpty(i) && delete r[e];
}

function S() {
  let e = _.default.getId();
  if (null == e || f.Z.totalUnavailableGuilds > 0)
return;
  let t = I(e);
  for (let e in t)
null == E.Z.getChannel(e) && delete t[e];
}

function A(e) {
  let {
channel: {
  id: t
}
  } = e, n = _.default.getId();
  if (null == n)
return !1;
  let r = I(n);
  return delete r[t], !1;
}
class N extends(i = l.ZP.PersistedStore) {
  initialize(e) {
m = null != e ? e : {}, ! function() {
  for (let [e, t] of d.default.entries(m))
    for (let [n, r] of d.default.entries(t)) {
      let t = r[0];
      null != t && ('' === t.draft || '' === t.draft.trim()) && g(n, 0, e);
    }
}(), this.waitFor(_.default, E.Z, f.Z);
  }
  getState() {
return m;
  }
  getThreadDraftWithParentMessageId(e) {
let t = _.default.getId();
if (null == t)
  return;
let n = I(t),
  r = d.default.keys(n).find(t => {
    let n = this.getThreadSettings(t);
    return (null == n ? void 0 : n.parentMessageId) === e;
  });
return null != r ? this.getThreadSettings(r) : void 0;
  }
  getRecentlyEditedDrafts(e) {
let t = _.default.getId();
if (null == t)
  return [];
let n = I(t);
return o()(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(c.lm).toPairs().map(e => {
  let [t, {
    timestamp: n,
    draft: r
  }] = e;
  return {
    channelId: t,
    timestamp: n,
    draft: r
  };
}).sortBy(e => {
  let {
    timestamp: t
  } = e;
  return -t;
}).value();
  }
  getDraft(e, t) {
let n = _.default.getId();
if (null == n)
  return '';
let r = I(n)[e];
if (null != r) {
  let e = r[t];
  if (null != e)
    return e.draft;
}
return '';
  }
  getThreadSettings(e) {
let t = _.default.getId();
if (null == t)
  return null;
let n = I(t)[e];
return null == n ? null : n[1];
  }
}
h(N, 'displayName', 'DraftStore'), h(N, 'persistKey', 'DraftStore'), h(N, 'migrations', [
  e => {
if (null == e)
  return {};
for (let t in e)
  'timestamp' in e[t] && (e[t] = {
    0: e[t]
  });
return e;
  },
  e => {
let t = _.default.getId();
if (null == e || null == t)
  return {};
let n = {},
  r = n[t] = {};
for (let t in e)
  r[t] = e[t];
return n;
  }
]), t.Z = new N(u.Z, {
  CONNECTION_OPEN: function() {
let e = _.default.getId();
return !(e in m) && (m[e] = {}), S(), !1;
  },
  LOGOUT: function(e) {
!e.isSwitchingAccount && (m = {});
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
e.userId in m && delete m[e.userId];
  },
  GUILD_DELETE: function() {
return S(), !1;
  },
  CHANNEL_DELETE: A,
  THREAD_DELETE: A,
  THREAD_CREATE: function(e) {
let {
  channel: t
} = e, n = _.default.getId();
if (null == n || t.ownerId === n)
  return !1;
let r = I(n),
  i = r[t.parent_id];
if (null == i)
  return !1;
let a = i[1];
if (null == a)
  return !1;
if (a.parentMessageId !== d.default.castChannelIdAsMessageId(t.id))
  return !1;
{
  var s, o;
  let e = r[t.parent_id];
  if (null == e)
    return !1;
  let n = null !== (o = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== o ? o : '';
  '' !== n && (r[t.id] = {
    0: {
      timestamp: Date.now(),
      draft: n
    }
  }), g(t.parent_id, 1), g(t.parent_id, 2);
}
  },
  DRAFT_SAVE: T,
  DRAFT_CHANGE: T,
  DRAFT_CLEAR: function(e) {
let {
  channelId: t,
  draftType: n
} = e;
return g(t, n);
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
let {
  channelId: t,
  draft: n
} = e, r = _.default.getId();
if (null == r)
  return;
let i = I(r),
  a = i[t];
null == a && (a = i[t] = {}), a[1] = {
  timestamp: Date.now(),
  ...a[1],
  ...n,
  parentChannelId: t
};
  }
});