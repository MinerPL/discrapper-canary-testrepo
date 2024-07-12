n.d(t, {
  If: function() {
return ed;
  },
  JK: function() {
return J;
  },
  LD: function() {
return X;
  },
  PL: function() {
return $;
  },
  em: function() {
return Q;
  },
  un: function() {
return ec;
  },
  v1: function() {
return et;
  }
}), n(47120), n(653041), n(390547);
var r, i, a, o = n(470079),
  s = n(512722),
  l = n.n(s),
  u = n(259443),
  c = n(442837),
  d = n(570140),
  _ = n(749210),
  E = n(911969),
  f = n(822245),
  h = n(399860),
  p = n(706454),
  m = n(675478),
  I = n(592125),
  T = n(430824),
  g = n(594174),
  S = n(626135),
  A = n(254711),
  N = n(700089),
  v = n(654455),
  O = n(963456),
  R = n(367790),
  C = n(895924),
  y = n(581364),
  D = n(807169),
  L = n(104793),
  b = n(689079),
  M = n(981631),
  P = n(674563);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let w = new u.Y('ApplicationCommandIndexStore'),
  x = Symbol('currentUser'),
  G = Symbol('stale'),
  k = Symbol('current'),
  B = Object.freeze({
descriptors: [],
commands: [],
sectionedCommands: [],
loading: !0
  }),
  F = Object.freeze({
serverVersion: k,
fetchState: {
  fetching: !1
},
result: {
  sections: {},
  sectionIdsByBotId: {},
  version: k
}
  }),
  V = Object.freeze({
serverVersion: G,
fetchState: {
  fetching: !1
}
  }),
  H = {
sensitivity: 'accent',
numeric: !0
  };

function Z(e) {
  switch (e.type) {
case 'guild':
  return e.guildId;
case 'channel':
  return e.channelId;
case 'user':
  return x;
case 'application':
  return e.applicationId;
  }
}

function Y(e, t) {
  let n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = Z(e),
a = q.indices[i];
  return null != a ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(), n = {
...a,
...t
  }) : r && (n = {
serverVersion: G,
fetchState: {
  fetching: !1
},
...t
  }), void 0 !== n && (q.indices[i] = n, 'application' === e.type && (q.applicationIndices.set(i, n), q.applicationIndicesVersion = q.applicationIndicesVersion + 1)), a;
}

function j(e) {
  let t = Z(e),
n = q.indices[t];
  (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete q.indices[t];
}

function W() {
  for (let e of Object.values(q.indices))
e.fetchState.fetching && e.fetchState.abort.abort();
  q.indices = {};
}

function K() {
  Y({
type: 'user'
  }, {
serverVersion: G
  });
}
class z extends(r = c.ZP.Store) {
  initialize() {
this.waitFor(p.default), this.syncWith([p.default], () => {
  ! function() {
    let e = p.default.locale;
    e !== q.oldLocale && (W(), q.collator = new Intl.Collator(e, {
      sensitivity: 'accent',
      numeric: !0
    }), q.oldLocale = e);
  }();
});
  }
  getContextState(e) {
var t, n;
return null != e && ei(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : V : F;
  }
  hasContextStateApplication(e, t, n) {
var r, i;
let a = this.indices[null != n ? n : t];
return e in (null !== (i = null == a ? void 0 : null === (r = a.result) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : {});
  }
  getGuildState(e) {
var t;
return null == e ? F : null !== (t = this.indices[e]) && void 0 !== t ? t : V;
  }
  getUserState() {
var e;
return null !== (e = this.indices[x]) && void 0 !== e ? e : V;
  }
  hasUserStateApplication(e) {
var t, n;
let r = this.indices[x];
return e in (null !== (n = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
  }
  getApplicationState(e) {
var t;
return null == e ? F : null !== (t = this.indices[e]) && void 0 !== t ? t : V;
  }
  getApplicationStates() {
return this.applicationIndices;
  }
  hasApplicationState(e) {
return e in this.indices;
  }
  query(e, t, n) {
if (null == g.default.getCurrentUser())
  return B;
let r = this.getContextState(e),
  i = this.getUserState(),
  a = this.getApplicationState(n.applicationId),
  o = this.getApplicationStates(),
  s = (0, D.k)(e, t.commandType),
  l = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
  u = !1;
n.allowFetch && (l && ei(e) && (S.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
  miss: null == r.result,
  size: Object.keys(q.indices).length
}), ea(r) && (null != e.guild_id ? (0, O.j)({
  type: 'guild',
  guildId: e.guild_id
}) : (0, O.j)({
  type: 'channel',
  channelId: e.id
}), u = !0)), ea(i) && ((0, O.j)({
  type: 'user'
}), u = !0), ea(a) && null != n.applicationId && ((0, O.j)({
  type: 'application',
  applicationId: n.applicationId
}), u = !0));
let c = en({
  permissionContext: s,
  text: t.text,
  allowApplicationCommands: l,
  builtIns: t.builtIns,
  scoreMethod: n.scoreMethod,
  allowEmptySections: n.allowEmptySections,
  contextState: r,
  userState: i,
  applicationStates: n.allowApplicationState ? o : new Map(),
  sortOptions: n.sortOptions,
  singleApplicationId: n.applicationId
});
return c.loading = c.loading || u, c;
  }
  maybeQueryForInstallLessApps(e, t) {
let n = I.Z.getChannel(t),
  r = P.Yq.includes(e) ? e : void 0;
null != n && null != r && this.query(n, {
  commandType: E.yU.CHAT
}, {
  placeholderCount: 5,
  scoreMethod: R.p.COMMAND_ONLY,
  applicationId: r,
  allowFetch: !0
});
  }
  queryInstallOnDemandApp(e, t) {
let n = I.Z.getChannel(t);
null != n && this.query(n, {
  commandType: E.yU.CHAT
}, {
  placeholderCount: 5,
  scoreMethod: R.p.COMMAND_ONLY,
  applicationId: e,
  allowFetch: !0
});
  }
  constructor(...e) {
super(...e), U(this, 'indices', {}), U(this, 'applicationIndices', new Map()), U(this, 'applicationIndicesVersion', 0), U(this, 'oldLocale', p.default.locale), U(this, 'collator', new Intl.Collator(p.default.locale, H));
  }
}
U(z, 'displayName', 'ApplicationCommandIndexStore');
let q = new z(d.Z, {
  LOGOUT: W,
  CONNECTION_OPEN: function() {
for (let e of Object.values(q.indices))
  e.serverVersion = G;
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
var t;
let {
  target: n,
  start: r,
  canFetch: i
} = e;
if (ea(null !== (t = q.indices[Z(n)]) && void 0 !== t ? t : V)) {
  let e = new AbortController();
  Y(n, {
    fetchState: {
      fetching: !0,
      abort: e
    }
  }, !0), (null == i || i) && (0, O.a)(n, r, e);
}
  },
  APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
var t, n;
let {
  target: r,
  index: i
} = e, a = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
if (null == a)
  return !1;
let o = {},
  s = {},
  l = new Set();
for (let e of i.applications) {
  if (null == e.bot && null != e.bot_id) {
    s[e.bot_id] = e.id;
    let t = g.default.getUser(e.bot_id);
    null != t ? e.bot = t : l.add(e.bot_id);
  } else
    null != e.bot && (s[e.bot.id] = e.id);
  let t = {
    descriptor: {
      ...(0, y.X0)(function(e) {
        return {
          description: e.description,
          icon: e.icon,
          id: e.id,
          name: e.name,
          bot: e.bot
        };
      }(e)),
      permissions: null != e.permissions ? (0, h.tk)(el(e.permissions, a)) : void 0,
      botId: e.bot_id
    },
    commands: {}
  };
  o[e.id] = t;
}
for (let e of ('guild' === r.type && l.size > 0 && _.Z.requestMembersById(r.guildId, [...l]), (0, y.nG)(i.application_commands.map(e => function(e, t) {
    var n, r, i, a, o;
    let s = {
      ...e,
      description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
      dm_permission: e.dm_permission,
      name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
      options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)) && void 0 !== o ? o : [],
      permissions: null != e.permissions ? el(e.permissions, t) : void 0
    };
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
  }(e, a)), !0))) {
  let t = o[e.applicationId];
  if (null == t) {
    w.error('Command has no matching application');
    continue;
  }
  t.commands[e.id] = e;
}
let u = null !== (n = i.version) && void 0 !== n ? n : k;
Y(r, {
  serverVersion: u,
  result: {
    sections: o,
    sectionIdsByBotId: s,
    version: u
  },
  fetchState: {
    fetching: !1
  }
});
  },
  APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
let {
  target: t
} = e;
Y(t, {
  fetchState: {
    fetching: !1,
    retryAfter: Date.now() + 5000
  }
});
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
let {
  applicationId: t,
  channelId: n,
  guildId: r
} = e;
q.hasContextStateApplication(t, n, r) && Y(null != r ? {
  type: 'guild',
  guildId: r
} : {
  type: 'channel',
  channelId: n
}, {
  serverVersion: G
}), q.hasUserStateApplication(t) && Y({
  type: 'user'
}, {
  serverVersion: G
}), q.hasApplicationState(t) && Y({
  type: 'application',
  applicationId: t
}, {
  serverVersion: G
});
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
j({
  type: 'channel',
  channelId: t.id
});
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
j({
  type: 'guild',
  guildId: t.id
});
  },
  USER_APPLICATION_UPDATE: K,
  USER_APPLICATION_REMOVE: K,
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
var t;
let {
  guildId: n,
  version: r
} = e, i = Y({
  type: 'guild',
  guildId: n
}, {
  serverVersion: null != r ? r : G
}), a = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
if (null != a)
  for (let e in a) {
    let t = I.Z.getDMFromUserId(e);
    null != t && Y({
      type: 'channel',
      channelId: t
    }, {
      serverVersion: G
    });
  }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
let {
  chunks: t
} = e, n = !1;
for (let e of t)
  n = function(e, t) {
    var n;
    let r = Z({
        type: 'guild',
        guildId: e
      }),
      i = null === (n = q.indices[r]) || void 0 === n ? void 0 : n.result;
    if (null == i)
      return !1;
    let a = !1;
    return t.forEach(e => {
      let {
        user: t
      } = e;
      if (!t.bot)
        return;
      let n = i.sectionIdsByBotId[t.id];
      if (null == n)
        return;
      let r = i.sections[n];
      l()(null != r, 'Bot has no matching index section'), l()(null != r.descriptor.application, 'Bot\'s index section has no application info');
      let o = (0, y.X0)({
        ...r.descriptor.application,
        bot: t
      });
      r.descriptor = {
        ...r.descriptor,
        ...o
      }, a = !0;
    }), a;
  }(e.guildId, e.members) || n;
return n;
  }
});

function Q(e, t, n) {
  let [r, i] = o.useState(!0), a = (0, c.cj)([q], () => q.getContextState(e));
  return o.useEffect(() => {
r && null != e && (n && t && ei(e) && (S.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
  miss: null == a.result,
  size: Object.keys(q.indices).length
}), ea(a) && (null != e.guild_id ? (0, O.j)({
  type: 'guild',
  guildId: e.guild_id
}) : (0, O.j)({
  type: 'channel',
  channelId: e.id
}))), i(!1));
  }, [
a,
n,
e,
t,
r
  ]), a;
}

function X(e, t) {
  let [n, r] = o.useState(!0), i = (0, c.cj)([q], () => {
var t;
return null !== (t = q.indices[e]) && void 0 !== t ? t : V;
  });
  return o.useEffect(() => {
n && null != e && (t && (S.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
  miss: null == i.result,
  size: Object.keys(q.indices).length
}), ea(i) && (0, O.j)({
  type: 'guild',
  guildId: e
})), r(!1));
  }, [
i,
t,
e,
n
  ]), i;
}

function $(e, t) {
  let [n, r] = o.useState(!0), i = (0, c.cj)([q], () => q.getUserState());
  return o.useEffect(() => {
n && (t && ea(i) && e && (0, O.j)({
  type: 'user'
}), r(!1));
  }, [
i,
t,
e,
n
  ]), i;
}
t.ZP = q;

function J(e, t, n, r) {
  let {
descriptors: i,
commands: a,
sectionedCommands: s,
loading: l
  } = et(e, n, r), u = (0, N.R)({
channel: e,
guild: t
  });
  return o.useMemo(() => {
if (!r.includeFrecency || 0 === u.length)
  return {
    descriptors: i,
    commands: a,
    sectionedCommands: s,
    loading: l
  };
let n = {
    channel: e,
    guild: t
  },
  o = a.filter(e => u.includes(e.id)).sort((e, t) => {
    let r = v.ZP.getScoreWithoutLoadingLatest(n, e);
    return v.ZP.getScoreWithoutLoadingLatest(n, t) - r;
  }).splice(0, b.hz);
return 0 === o.length ? {
  descriptors: i,
  commands: a,
  sectionedCommands: s,
  loading: l
} : {
  descriptors: [
    A.Tm[b.bi.FRECENCY],
    ...i
  ],
  commands: o.concat(a),
  sectionedCommands: [{
      section: A.Tm[b.bi.FRECENCY],
      data: o
    },
    ...s
  ],
  loading: l
};
  }, [
l,
r.includeFrecency,
u,
e,
t,
a,
i,
s
  ]);
}
let ee = Object.freeze({
  applications: {
useFrecency: !1,
useScore: !1
  },
  commands: {
useFrecency: !0,
useScore: !0
  }
});

function et(e, t, n) {
  let r = (0, D.Hs)(e, t.commandType),
i = !1 !== t.applicationCommands,
a = Q(e, i, n.allowFetch),
s = $(i, n.allowFetch),
l = (0, c.e7)([q], () => q.getApplicationStates()),
u = (0, c.e7)([q], () => q.applicationIndicesVersion);
  return ! function(e, t) {
let [n, r] = o.useState(!0), i = (0, c.e7)([q], () => q.getApplicationState(e));
o.useEffect(() => {
  n && (t && ea(i) && null != e && (0, O.j)({
    type: 'application',
    applicationId: e
  }), r(!1));
}, [
  t,
  e,
  i,
  n
]);
  }(n.applicationId, n.allowFetch), o.useMemo(() => en({
permissionContext: r,
text: t.text,
allowApplicationCommands: i,
builtIns: t.builtIns,
scoreMethod: n.scoreMethod,
allowEmptySections: n.allowEmptySections,
contextState: a,
userState: s,
applicationStates: n.allowApplicationState ? l : new Map(),
sortOptions: n.sortOptions,
singleApplicationId: n.applicationId
  }), [
r,
t.text,
t.builtIns,
i,
n.scoreMethod,
n.allowEmptySections,
n.sortOptions,
n.allowApplicationState,
n.applicationId,
a,
s,
l,
u
  ]);
}

function en(e) {
  var t, n, r, i, a, o;
  let {
permissionContext: s,
contextState: u,
userState: c,
applicationStates: d,
text: _,
builtIns: E = R.D.ALLOW,
allowApplicationCommands: h = !0,
singleApplicationId: p,
allowEmptySections: I = !1,
scoreMethod: g = R.p.NONE,
sortOptions: S = ee
  } = e, {
commandType: N
  } = s, O = null == _ ? void 0 : _.toLowerCase(), C = null == O ? void 0 : O.split(' '), y = E === R.D.ONLY_TEXT, D = E !== R.D.DENY ? (0, A.Kh)(N, !0, y) : [], L = [], M = {
permissionContext: s,
query: O,
splitQuery: C,
allowEmptySections: I,
scoreMethod: g
  }, P = null !== (i = null === (t = u.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {}, U = null !== (a = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {}, w = new Set();
  if (h) {
if (s.hasBaseAccessPermissions)
  for (let e in P) {
    let t = P[e];
    (null == p || t.descriptor.id === p) && w.add(e);
  }
for (let e in U) {
  let t = U[e];
  (null == p || t.descriptor.id === p) && w.add(e);
}
  }
  let x = new Map();
  for (let [e, t] of d)
if (null == p || e === p) {
  let e = null === (o = t.result) || void 0 === o ? void 0 : o.sections;
  if (null != e)
    for (let t of Object.keys(e))
      w.add(t), x.set(t, e[t]);
}
  for (let e of Array.from(w)) {
let t, n;
let r = P[e],
  i = U[e],
  a = x.get(e),
  o = null != r,
  s = null != i;
if (null != r && null != i) {
  for (let e in (t = i.descriptor, n = [], i.commands)) {
    let t = i.commands[e];
    n.push(t);
  }
  for (let e in r.commands)
    if (!(e in i.commands)) {
      let t = r.commands[e];
      n.push(t);
    }
} else
  null != r ? (t = r.descriptor, n = Object.values(r.commands)) : null != i ? (t = i.descriptor, n = Object.values(i.commands)) : null != a && (t = a.descriptor, n = Object.values(a.commands));
l()(null != t, 'Failed to select application descriptor'), l()(null != n, 'Failed to select list of application commands');
let u = er(t, n, o, s, M);
null != u && L.push(u);
  }
  if (S.applications.useFrecency && m.DZ.loadIfNecessary(), L.sort((e, t) => {
  if (S.applications.useScore && g === R.p.APPLICATION_ONLY) {
    var n, r, i, a;
    let o = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
      s = null !== (a = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE;
    if (o !== s)
      return o - s;
  }
  if (S.applications.useFrecency) {
    let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
      r = f.Z.getScoreWithoutLoadingLatest(t.section.id);
    if (n !== r)
      return r - n;
  }
  return eu(e.section.name, t.section.name);
}), D.length > 0 || !0 === I) {
let e = er(A.Tm[b.bi.BUILT_IN], D, !0, !0, M);
null != e && L.push(e);
  }
  let G = L.flatMap(e => e.data.map(t => ({
...t,
section: e.section
  })));
  if (g === R.p.COMMAND_ONLY || g === R.p.COMMAND_OR_APPLICATION) {
let e = s.context,
  t = T.Z.getGuild(s.context.guild_id);
S.commands.useFrecency && m.DZ.loadIfNecessary(), G.sort((n, r) => {
  if (S.commands.useScore) {
    var i, a;
    let e = null !== (i = n.score) && void 0 !== i ? i : 0,
      t = null !== (a = r.score) && void 0 !== a ? a : 0;
    if (e !== t)
      return e - t;
  }
  if (S.commands.useFrecency) {
    let i = v.ZP.getScoreWithoutLoadingLatest({
        channel: e,
        guild: t
      }, n),
      a = v.ZP.getScoreWithoutLoadingLatest({
        channel: e,
        guild: t
      }, r);
    if (i !== a)
      return a - i;
  }
  return eu(n.displayName, r.displayName);
});
  }
  return {
commands: G,
descriptors: L.map(e => e.section),
sectionedCommands: L,
loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == c ? void 0 : c.fetchState.fetching) === !0 || null != p && (null === (r = d.get(p)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0
  };
}

function er(e, t, n, r, i) {
  let a, {
  query: o,
  splitQuery: s,
  allowEmptySections: l,
  scoreMethod: u,
  permissionContext: c
} = i,
{
  context: d,
  userId: _,
  roleIds: E,
  isImpersonating: f
} = c,
h = null != d.guild_id ? L.ML(e.permissions, d.guild_id, _, E, f) : null,
p = null != d.guild_id ? L.ZJ(e.permissions, d, d.guild_id) : null,
m = [];
  for (let i of t)
L.Ft(i, c, {
  applicationAllowedForUser: h,
  applicationAllowedForChannel: p,
  commandBotId: e.botId,
  isGuildInstalled: n,
  isUserInstalled: r
}) === L.mF.ALLOWED && m.push(i);
  return 0 !== (a = u !== R.p.NONE && null != o && null != s ? function(e, t, n, r, i) {
let a;
let o = [];
if (i === R.p.APPLICATION_ONLY || i === R.p.COMMAND_OR_APPLICATION) {
  let t = r.name.toLocaleLowerCase();
  if (t.startsWith(e))
    a = 5;
  else if (t.includes(e))
    a = 6;
  else {
    var s, l;
    let t = null === (l = r.application) || void 0 === l ? void 0 : null === (s = l.description) || void 0 === s ? void 0 : s.toLocaleLowerCase();
    (null == t ? void 0 : t.includes(e)) && (a = 8);
  }
}
let u = t[0],
  c = t.slice(1).join(' ');
for (let t of n) {
  let n;
  (i === R.p.COMMAND_ONLY || i === R.p.COMMAND_OR_APPLICATION) && (n = function(e, t, n, r) {
    var i;
    let a = e.name,
      o = e.displayName;
    if (a.startsWith(t) || o.startsWith(t))
      return 0;
    if (a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r) || o.startsWith(n) && o.split(' ').slice(1).join(' ').startsWith(r))
      return 1;
    if (a.includes(t) || (null == o ? void 0 : o.includes(t)))
      return 2;
    let s = !1;
    for (let {
        name: n,
        serverLocalizedName: r
      }
      of null !== (i = e.options) && void 0 !== i ? i : []) {
      if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || null != o && ''.concat(o, ' ').concat(n).startsWith(t) || null != r && (r.startsWith(t) || ''.concat(a, ' ').concat(r).startsWith(t) || null != o && ''.concat(o, ' ').concat(r).startsWith(t)))
        return 3;
      (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (s = !0);
    }
    return s ? 4 : e.description.toLocaleLowerCase().includes(t) ? 7 : void 0;
  }(t, e, u, c)), (void 0 === n || void 0 !== a && a < n) && (n = a), void 0 !== n && o.push({
    ...t,
    score: n
  });
}
return o;
  }(o, s, m, e, u) : m).length || l ? ((u === R.p.NONE || u === R.p.APPLICATION_ONLY) && a.sort((e, t) => eu(e.displayName, t.displayName)), {
section: e,
data: a
  }) : null;
}

function ei(e) {
  var t;
  return null != e.guild_id || e.type === M.d4z.DM && (null === (t = g.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0;
}

function ea(e) {
  return !! function(e) {
var t;
return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
  }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}

function eo(e) {
  var t, n, r, i;
  let a = {
...e,
choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(es),
description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)
  };
  return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a;
}

function es(e) {
  var t;
  let n = {
...e,
name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
  };
  return e.name !== e.name_default && (n.name_localized = e.name), n;
}

function el(e, t) {
  let n = [];
  if (null != e.user && n.push({
  type: C.Kw.USER,
  id: t,
  permission: e.user
}), null != e.channels)
for (let [t, r] of Object.entries(e.channels))
  n.push({
    type: C.Kw.CHANNEL,
    id: t,
    permission: r
  });
  if (null != e.roles)
for (let [t, r] of Object.entries(e.roles))
  n.push({
    type: C.Kw.ROLE,
    id: t,
    permission: r
  });
  return n;
}
(a = i || (i = {}))[a.COMMAND_NAME_STARTS_WITH = 0] = 'COMMAND_NAME_STARTS_WITH', a[a.STARTS_WITH_COMMAND_NAME = 1] = 'STARTS_WITH_COMMAND_NAME', a[a.COMMAND_NAME_CONTAINS = 2] = 'COMMAND_NAME_CONTAINS', a[a.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME', a[a.OPTION_NAME_CONTAINS = 4] = 'OPTION_NAME_CONTAINS', a[a.SECTION_NAME_STARTS_WITH = 5] = 'SECTION_NAME_STARTS_WITH', a[a.SECTION_NAME_CONTAINS = 6] = 'SECTION_NAME_CONTAINS', a[a.COMMAND_DESCRIPTION_CONTAINS = 7] = 'COMMAND_DESCRIPTION_CONTAINS', a[a.SECTION_DESCRIPTION_CONTAINS = 8] = 'SECTION_DESCRIPTION_CONTAINS';

function eu(e, t) {
  return q.collator.compare(e, t);
}

function ec(e, t) {
  return eu(e, t);
}

function ed(e, t) {
  var n, r, i, a;
  let o, s;
  if (t === b.bi.BUILT_IN)
return {
  descriptor: A.Tm[b.bi.BUILT_IN],
  sectionCommands: (0, A.Kh)(E.yU.CHAT, !0, !1),
  isGuildInstalled: !0,
  isUserInstalled: !0
};
  let l = q.getContextState(e),
u = q.getUserState(),
c = null !== (i = null === (n = l.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {},
d = null !== (a = null === (r = u.result) || void 0 === r ? void 0 : r.sections) && void 0 !== a ? a : {},
_ = c[t],
f = d[t];
  if (null != _ && null != f) {
for (let e in (o = f.descriptor, s = [], f.commands)) {
  let t = f.commands[e];
  s.push(t);
}
for (let e in _.commands)
  if (!(e in f.commands)) {
    let t = _.commands[e];
    s.push(t);
  }
  } else
null != _ ? (o = _.descriptor, s = Object.values(_.commands)) : null != f && (o = f.descriptor, s = Object.values(f.commands));
  return {
descriptor: o,
sectionCommands: s,
isGuildInstalled: null != _,
isUserInstalled: null != f
  };
}