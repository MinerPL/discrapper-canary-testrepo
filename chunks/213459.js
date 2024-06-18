"use strict";
n.d(t, {
  JK: function() {
    return $
  },
  LD: function() {
    return Q
  },
  PL: function() {
    return J
  },
  em: function() {
    return X
  },
  v1: function() {
    return et
  }
}), n(47120), n(653041), n(390547);
var i, r, s, o = n(470079),
  a = n(512722),
  l = n.n(a),
  u = n(259443),
  _ = n(442837),
  d = n(570140),
  c = n(749210),
  E = n(911969),
  I = n(822245),
  T = n(399860),
  h = n(706454),
  S = n(675478),
  f = n(592125),
  N = n(430824),
  A = n(594174),
  m = n(626135),
  O = n(254711),
  R = n(700089),
  C = n(654455),
  p = n(963456),
  g = n(367790),
  L = n(895924),
  v = n(581364),
  D = n(807169),
  M = n(104793),
  P = n(689079),
  y = n(981631),
  U = n(674563);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let G = new u.Y("ApplicationCommandIndexStore"),
  w = Symbol("currentUser"),
  k = Symbol("stale"),
  B = Symbol("current"),
  x = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: !0
  }),
  V = Object.freeze({
    serverVersion: B,
    fetchState: {
      fetching: !1
    },
    result: {
      sections: {},
      sectionIdsByBotId: {},
      version: B
    }
  }),
  Z = Object.freeze({
    serverVersion: k,
    fetchState: {
      fetching: !1
    }
  }),
  H = {
    sensitivity: "accent",
    numeric: !0
  };

function F(e) {
  switch (e.type) {
    case "guild":
      return e.guildId;
    case "channel":
      return e.channelId;
    case "user":
      return w;
    case "application":
      return e.applicationId
  }
}

function Y(e, t) {
  let n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = F(e),
    s = q.indices[r];
  return null != s ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), n = {
    ...s,
    ...t
  }) : i && (n = {
    serverVersion: k,
    fetchState: {
      fetching: !1
    },
    ...t
  }), void 0 !== n && (q.indices[r] = n, "application" === e.type && (q.applicationIndices.set(r, n), q.applicationIndicesVersion = q.applicationIndicesVersion + 1)), s
}

function j(e) {
  let t = F(e),
    n = q.indices[t];
  (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete q.indices[t]
}

function W() {
  for (let e of Object.values(q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
  q.indices = {}
}

function K() {
  Y({
    type: "user"
  }, {
    serverVersion: k
  })
}
class z extends(i = _.ZP.Store) {
  initialize() {
    this.waitFor(h.default), this.syncWith([h.default], () => {
      ! function() {
        let e = h.default.locale;
        e !== q.oldLocale && (W(), q.collator = new Intl.Collator(e, {
          sensitivity: "accent",
          numeric: !0
        }), q.oldLocale = e)
      }()
    })
  }
  getContextState(e) {
    var t, n;
    return null != e && er(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : Z : V
  }
  hasContextStateApplication(e, t, n) {
    var i, r;
    let s = this.indices[null != n ? n : t];
    return e in (null !== (r = null == s ? void 0 : null === (i = s.result) || void 0 === i ? void 0 : i.sections) && void 0 !== r ? r : {})
  }
  getUserState() {
    var e;
    return null !== (e = this.indices[w]) && void 0 !== e ? e : Z
  }
  hasUserStateApplication(e) {
    var t, n;
    let i = this.indices[w];
    return e in (null !== (n = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {})
  }
  getApplicationState(e) {
    var t;
    return null == e ? V : null !== (t = this.indices[e]) && void 0 !== t ? t : Z
  }
  getApplicationStates() {
    return this.applicationIndices
  }
  hasApplicationState(e) {
    return e in this.indices
  }
  query(e, t, n) {
    if (null == A.default.getCurrentUser()) return x;
    let i = this.getContextState(e),
      r = this.getUserState(),
      s = this.getApplicationState(n.applicationId),
      o = this.getApplicationStates(),
      a = (0, D.k)(e, t.commandType),
      l = !1 !== t.applicationCommands && a.hasBaseAccessPermissions,
      u = !1;
    n.allowFetch && (l && er(e) && (m.default.track(y.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == i.result,
      size: Object.keys(q.indices).length
    }), es(i) && (null != e.guild_id ? (0, p.j)({
      type: "guild",
      guildId: e.guild_id
    }) : (0, p.j)({
      type: "channel",
      channelId: e.id
    }), u = !0)), es(r) && ((0, p.j)({
      type: "user"
    }), u = !0), es(s) && null != n.applicationId && ((0, p.j)({
      type: "application",
      applicationId: n.applicationId
    }), u = !0));
    let _ = en({
      permissionContext: a,
      text: t.text,
      allowApplicationCommands: l,
      builtIns: t.builtIns,
      scoreMethod: n.scoreMethod,
      allowEmptySections: n.allowEmptySections,
      contextState: i,
      userState: r,
      applicationStates: o,
      singleApplicationId: n.applicationId
    });
    return _.loading = _.loading || u, _
  }
  maybeQueryForInstallLessApps(e, t) {
    let n = f.Z.getChannel(t),
      i = U.Yq.includes(e) ? e : void 0;
    null != n && null != i && this.query(n, {
      commandType: E.yU.CHAT
    }, {
      placeholderCount: 5,
      scoreMethod: g.p.COMMAND_ONLY,
      applicationId: i,
      allowFetch: !0
    })
  }
  queryInstallOnDemandApp(e, t) {
    let n = f.Z.getChannel(t);
    null != n && this.query(n, {
      commandType: E.yU.CHAT
    }, {
      placeholderCount: 5,
      scoreMethod: g.p.COMMAND_ONLY,
      applicationId: e,
      allowFetch: !0
    })
  }
  constructor(...e) {
    super(...e), b(this, "indices", {}), b(this, "applicationIndices", new Map), b(this, "applicationIndicesVersion", 0), b(this, "oldLocale", h.default.locale), b(this, "collator", new Intl.Collator(h.default.locale, H))
  }
}
b(z, "displayName", "ApplicationCommandIndexStore");
let q = new z(d.Z, {
  LOGOUT: W,
  CONNECTION_OPEN: function() {
    for (let e of Object.values(q.indices)) e.serverVersion = k
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
    var t;
    let {
      target: n,
      start: i,
      canFetch: r
    } = e;
    if (es(null !== (t = q.indices[F(n)]) && void 0 !== t ? t : Z)) {
      let e = new AbortController;
      Y(n, {
        fetchState: {
          fetching: !0,
          abort: e
        }
      }, !0), (null == r || r) && (0, p.a)(n, i, e)
    }
  },
  APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
    var t, n;
    let {
      target: i,
      index: r
    } = e, s = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == s) return !1;
    let o = {},
      a = {},
      l = new Set;
    for (let e of r.applications) {
      if (null == e.bot && null != e.bot_id) {
        a[e.bot_id] = e.id;
        let t = A.default.getUser(e.bot_id);
        null != t ? e.bot = t : l.add(e.bot_id)
      } else null != e.bot && (a[e.bot.id] = e.id);
      let t = {
        descriptor: {
          ...(0, v.X0)(function(e) {
            return {
              description: e.description,
              icon: e.icon,
              id: e.id,
              name: e.name,
              bot: e.bot
            }
          }(e)),
          permissions: null != e.permissions ? (0, T.tk)(el(e.permissions, s)) : void 0,
          botId: e.bot_id
        },
        commands: {}
      };
      o[e.id] = t
    }
    for (let e of ("guild" === i.type && l.size > 0 && c.Z.requestMembersById(i.guildId, [...l]), (0, v.nG)(r.application_commands.map(e => (function(e, t) {
        var n, i, r, s, o;
        let a = {
          ...e,
          description: null !== (r = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== r ? r : "",
          dm_permission: e.dm_permission,
          name: null !== (s = e.name_default) && void 0 !== s ? s : e.name,
          options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)) && void 0 !== o ? o : [],
          permissions: null != e.permissions ? el(e.permissions, t) : void 0
        };
        return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
      })(e, s)), !0))) {
      let t = o[e.applicationId];
      if (null == t) {
        G.error("Command has no matching application");
        continue
      }
      t.commands[e.id] = e
    }
    let u = null !== (n = r.version) && void 0 !== n ? n : B;
    Y(i, {
      serverVersion: u,
      result: {
        sections: o,
        sectionIdsByBotId: a,
        version: u
      },
      fetchState: {
        fetching: !1
      }
    })
  },
  APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
    let {
      target: t
    } = e;
    Y(t, {
      fetchState: {
        fetching: !1,
        retryAfter: Date.now() + 5e3
      }
    })
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
    let {
      applicationId: t,
      channelId: n,
      guildId: i
    } = e;
    q.hasContextStateApplication(t, n, i) && Y(null != i ? {
      type: "guild",
      guildId: i
    } : {
      type: "channel",
      channelId: n
    }, {
      serverVersion: k
    }), q.hasUserStateApplication(t) && Y({
      type: "user"
    }, {
      serverVersion: k
    }), q.hasApplicationState(t) && Y({
      type: "application",
      applicationId: t
    }, {
      serverVersion: k
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    j({
      type: "channel",
      channelId: t.id
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    j({
      type: "guild",
      guildId: t.id
    })
  },
  USER_APPLICATION_UPDATE: K,
  USER_APPLICATION_REMOVE: K,
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      version: i
    } = e, r = Y({
      type: "guild",
      guildId: n
    }, {
      serverVersion: null != i ? i : k
    }), s = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != s)
      for (let e in s) {
        let t = f.Z.getDMFromUserId(e);
        null != t && Y({
          type: "channel",
          channelId: t
        }, {
          serverVersion: k
        })
      }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e, n = !1;
    for (let e of t) n = function(e, t) {
      var n;
      let i = F({
          type: "guild",
          guildId: e
        }),
        r = null === (n = q.indices[i]) || void 0 === n ? void 0 : n.result;
      if (null == r) return !1;
      let s = !1;
      return t.forEach(e => {
        let {
          user: t
        } = e;
        if (!t.bot) return;
        let n = r.sectionIdsByBotId[t.id];
        if (null == n) return;
        let i = r.sections[n];
        l()(null != i, "Bot has no matching index section"), l()(null != i.descriptor.application, "Bot's index section has no application info");
        let o = (0, v.X0)({
          ...i.descriptor.application,
          bot: t
        });
        i.descriptor = {
          ...i.descriptor,
          ...o
        }, s = !0
      }), s
    }(e.guildId, e.members) || n;
    return n
  }
});

function X(e, t, n) {
  let [i, r] = o.useState(!0), s = (0, _.cj)([q], () => q.getContextState(e));
  return o.useEffect(() => {
    i && null != e && (n && t && er(e) && (m.default.track(y.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == s.result,
      size: Object.keys(q.indices).length
    }), es(s) && (null != e.guild_id ? (0, p.j)({
      type: "guild",
      guildId: e.guild_id
    }) : (0, p.j)({
      type: "channel",
      channelId: e.id
    }))), r(!1))
  }, [s, n, e, t, i]), s
}

function Q(e, t) {
  let [n, i] = o.useState(!0), r = (0, _.cj)([q], () => {
    var t;
    return null !== (t = q.indices[e]) && void 0 !== t ? t : Z
  });
  return o.useEffect(() => {
    n && null != e && (t && (m.default.track(y.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == r.result,
      size: Object.keys(q.indices).length
    }), es(r) && (0, p.j)({
      type: "guild",
      guildId: e
    })), i(!1))
  }, [r, t, e, n]), r
}

function J(e, t) {
  let [n, i] = o.useState(!0), r = (0, _.cj)([q], () => q.getUserState());
  return o.useEffect(() => {
    n && (t && es(r) && e && (0, p.j)({
      type: "user"
    }), i(!1))
  }, [r, t, e, n]), r
}
t.ZP = q;

function $(e, t, n, i) {
  let {
    descriptors: r,
    commands: s,
    sectionedCommands: a,
    loading: l
  } = et(e, n, i), u = (0, R.R)({
    channel: e,
    guild: t
  });
  return o.useMemo(() => {
    if (!i.includeFrecency || 0 === u.length) return {
      descriptors: r,
      commands: s,
      sectionedCommands: a,
      loading: l
    };
    let n = {
        channel: e,
        guild: t
      },
      o = s.filter(e => u.includes(e.id)).sort((e, t) => {
        let i = C.ZP.getScoreWithoutLoadingLatest(n, e);
        return C.ZP.getScoreWithoutLoadingLatest(n, t) - i
      }).splice(0, P.hz);
    return 0 === o.length ? {
      descriptors: r,
      commands: s,
      sectionedCommands: a,
      loading: l
    } : {
      descriptors: [O.Tm[P.bi.FRECENCY], ...r],
      commands: o.concat(s),
      sectionedCommands: [{
        section: O.Tm[P.bi.FRECENCY],
        data: o
      }, ...a],
      loading: l
    }
  }, [l, i.includeFrecency, u, e, t, s, r, a])
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
  let i = (0, D.Hs)(e, t.commandType),
    r = !1 !== t.applicationCommands,
    s = X(e, r, n.allowFetch),
    a = J(r, n.allowFetch),
    l = (0, _.e7)([q], () => q.getApplicationStates()),
    u = (0, _.e7)([q], () => q.applicationIndicesVersion);
  return o.useMemo(() => en({
    permissionContext: i,
    text: t.text,
    allowApplicationCommands: r,
    builtIns: t.builtIns,
    scoreMethod: n.scoreMethod,
    allowEmptySections: n.allowEmptySections,
    contextState: s,
    userState: a,
    applicationStates: n.allowApplicationState ? l : new Map,
    sortOptions: n.sortOptions,
    singleApplicationId: n.applicationId
  }), [i, t.text, t.builtIns, r, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, s, a, l, u])
}

function en(e) {
  var t, n, i, r, s, o;
  let {
    permissionContext: a,
    contextState: u,
    userState: _,
    applicationStates: d,
    text: c,
    builtIns: E = g.D.ALLOW,
    allowApplicationCommands: T = !0,
    singleApplicationId: h,
    allowEmptySections: f = !1,
    scoreMethod: A = g.p.NONE,
    sortOptions: m = ee
  } = e, {
    commandType: R
  } = a, p = null == c ? void 0 : c.toLowerCase(), L = null == p ? void 0 : p.split(" "), v = E === g.D.ONLY_TEXT, D = E !== g.D.DENY ? (0, O.Kh)(R, !0, v) : [], M = [], y = {
    permissionContext: a,
    query: p,
    splitQuery: L,
    allowEmptySections: f,
    scoreMethod: A
  }, U = null !== (r = null === (t = u.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {}, b = null !== (s = null === (n = _.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {}, G = new Set;
  if (T) {
    if (a.hasBaseAccessPermissions)
      for (let e in U) {
        let t = U[e];
        (null == h || t.descriptor.id === h) && G.add(e)
      }
    for (let e in b) {
      let t = b[e];
      (null == h || t.descriptor.id === h) && G.add(e)
    }
  }
  let w = new Map;
  for (let [e, t] of d)
    if (null == h || e === h) {
      let e = null === (o = t.result) || void 0 === o ? void 0 : o.sections;
      if (null != e)
        for (let t of Object.keys(e)) G.add(t), w.set(t, e[t])
    } for (let e of Array.from(G)) {
    let t, n;
    let i = U[e],
      r = b[e],
      s = w.get(e),
      o = null != i,
      a = null != r;
    if (null != i && null != r) {
      for (let e in t = r.descriptor, n = [], r.commands) {
        let t = r.commands[e];
        n.push(t)
      }
      for (let e in i.commands)
        if (!(e in r.commands)) {
          let t = i.commands[e];
          n.push(t)
        }
    } else null != i ? (t = i.descriptor, n = Object.values(i.commands)) : null != r ? (t = r.descriptor, n = Object.values(r.commands)) : null != s && (t = s.descriptor, n = Object.values(s.commands));
    l()(null != t, "Failed to select application descriptor"), l()(null != n, "Failed to select list of application commands");
    let u = ei(t, n, o, a, y);
    null != u && M.push(u)
  }
  if (m.applications.useFrecency && S.DZ.loadIfNecessary(), M.sort((e, t) => {
      if (m.applications.useScore && A === g.p.APPLICATION_ONLY) {
        var n, i, r, s;
        let o = null !== (r = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== r ? r : Number.MAX_VALUE,
          a = null !== (s = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : Number.MAX_VALUE;
        if (o !== a) return o - a
      }
      if (m.applications.useFrecency) {
        let n = I.Z.getScoreWithoutLoadingLatest(e.section.id),
          i = I.Z.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== i) return i - n
      }
      return eu(e.section.name, t.section.name)
    }), D.length > 0 || !0 === f) {
    let e = ei(O.Tm[P.bi.BUILT_IN], D, !0, !0, y);
    null != e && M.push(e)
  }
  let k = M.flatMap(e => e.data.map(t => ({
    ...t,
    section: e.section
  })));
  if (A === g.p.COMMAND_ONLY || A === g.p.COMMAND_OR_APPLICATION) {
    let e = a.context,
      t = N.Z.getGuild(a.context.guild_id);
    m.commands.useFrecency && S.DZ.loadIfNecessary(), k.sort((n, i) => {
      if (m.commands.useScore) {
        var r, s;
        let e = null !== (r = n.score) && void 0 !== r ? r : 0,
          t = null !== (s = i.score) && void 0 !== s ? s : 0;
        if (e !== t) return e - t
      }
      if (m.commands.useFrecency) {
        let r = C.ZP.getScoreWithoutLoadingLatest({
            channel: e,
            guild: t
          }, n),
          s = C.ZP.getScoreWithoutLoadingLatest({
            channel: e,
            guild: t
          }, i);
        if (r !== s) return s - r
      }
      return eu(n.displayName, i.displayName)
    })
  }
  return {
    commands: k,
    descriptors: M.map(e => e.section),
    sectionedCommands: M,
    loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == _ ? void 0 : _.fetchState.fetching) === !0 || null != h && (null === (i = d.get(h)) || void 0 === i ? void 0 : i.fetchState.fetching) === !0
  }
}

function ei(e, t, n, i, r) {
  let s, {
      query: o,
      splitQuery: a,
      allowEmptySections: l,
      scoreMethod: u,
      permissionContext: _
    } = r,
    {
      context: d,
      userId: c,
      roleIds: E,
      isImpersonating: I
    } = _,
    T = null != d.guild_id ? M.ML(e.permissions, d.guild_id, c, E, I) : null,
    h = null != d.guild_id ? M.ZJ(e.permissions, d, d.guild_id) : null,
    S = [];
  for (let r of t) M.Ft(r, _, {
    applicationAllowedForUser: T,
    applicationAllowedForChannel: h,
    commandBotId: e.botId,
    isGuildInstalled: n,
    isUserInstalled: i
  }) === M.mF.ALLOWED && S.push(r);
  return 0 !== (s = u !== g.p.NONE && null != o && null != a ? function(e, t, n, i, r) {
    let s;
    let o = [];
    if (r === g.p.APPLICATION_ONLY || r === g.p.COMMAND_OR_APPLICATION) {
      let t = i.name.toLocaleLowerCase();
      if (t.startsWith(e)) s = 5;
      else if (t.includes(e)) s = 6;
      else {
        var a, l;
        let t = null === (l = i.application) || void 0 === l ? void 0 : null === (a = l.description) || void 0 === a ? void 0 : a.toLocaleLowerCase();
        (null == t ? void 0 : t.includes(e)) && (s = 8)
      }
    }
    let u = t[0],
      _ = t.slice(1).join(" ");
    for (let t of n) {
      let n;
      (r === g.p.COMMAND_ONLY || r === g.p.COMMAND_OR_APPLICATION) && (n = function(e, t, n, i) {
        var r;
        let s = e.name,
          o = e.displayName;
        if (s.startsWith(t) || o.startsWith(t)) return 0;
        if (s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(i) || o.startsWith(n) && o.split(" ").slice(1).join(" ").startsWith(i)) return 1;
        if (s.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
        let a = !1;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null !== (r = e.options) && void 0 !== r ? r : []) {
          if (n.startsWith(t) || "".concat(s, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(s, " ").concat(i).startsWith(t) || null != o && "".concat(o, " ").concat(i).startsWith(t))) return 3;
          (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (a = !0)
        }
        return a ? 4 : e.description.toLocaleLowerCase().includes(t) ? 7 : void 0
      }(t, e, u, _)), (void 0 === n || void 0 !== s && s < n) && (n = s), void 0 !== n && o.push({
        ...t,
        score: n
      })
    }
    return o
  }(o, a, S, e, u) : S).length || l ? ((u === g.p.NONE || u === g.p.APPLICATION_ONLY) && s.sort((e, t) => eu(e.displayName, t.displayName)), {
    section: e,
    data: s
  }) : null
}

function er(e) {
  var t;
  return null != e.guild_id || e.type === y.d4z.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
}

function es(e) {
  return !! function(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
  }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
}

function eo(e) {
  var t, n, i, r;
  let s = {
    ...e,
    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ea),
    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
    name: null !== (r = e.name_default) && void 0 !== r ? r : e.name,
    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)
  };
  return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
}

function ea(e) {
  var t;
  let n = {
    ...e,
    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
  };
  return e.name !== e.name_default && (n.name_localized = e.name), n
}

function el(e, t) {
  let n = [];
  if (null != e.user && n.push({
      type: L.Kw.USER,
      id: t,
      permission: e.user
    }), null != e.channels)
    for (let [t, i] of Object.entries(e.channels)) n.push({
      type: L.Kw.CHANNEL,
      id: t,
      permission: i
    });
  if (null != e.roles)
    for (let [t, i] of Object.entries(e.roles)) n.push({
      type: L.Kw.ROLE,
      id: t,
      permission: i
    });
  return n
}(s = r || (r = {}))[s.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", s[s.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", s[s.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", s[s.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", s[s.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", s[s.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", s[s.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS", s[s.COMMAND_DESCRIPTION_CONTAINS = 7] = "COMMAND_DESCRIPTION_CONTAINS", s[s.SECTION_DESCRIPTION_CONTAINS = 8] = "SECTION_DESCRIPTION_CONTAINS";

function eu(e, t) {
  return q.collator.compare(e, t)
}