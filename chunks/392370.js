t.d(n, {
  Q2: function() {
return S;
  },
  pe: function() {
return P;
  }
}), t(47120), t(653041), t(536091);
var i = t(470079),
  a = t(392711),
  l = t.n(a),
  o = t(373793),
  r = t(288385),
  s = t(442837),
  c = t(911969),
  u = t(127255),
  d = t(654455),
  m = t(213459),
  p = t(807169),
  _ = t(104793),
  C = t(674588),
  f = t(809547),
  h = t(822245),
  A = t(631827),
  E = t(783097),
  N = t(689079),
  v = t(665692);

function x(e, n) {
  let t = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(n.id) - t;
}

function I(e, n) {
  let t = (0, E.$d)(e),
i = (0, E.$d)(n);
  return (0, m.un)(t, i);
}

function g(e, n) {
  return (0, m.un)(e.displayName, n.displayName);
}

function P(e) {
  let {
channel: n,
query: t,
commandLimit: a,
applicationLimit: o,
searchesCommands: r = !0,
searchesBots: s = !0,
searchesActivities: C = !0
  } = e;
  t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
  let {
commands: f,
commandSectionMap: h,
loading: P
  } = function(e) {
var n, t;
let {
  channel: a,
  includeBuiltIn: l = !0,
  allowFetch: o = !0
} = e, r = (0, m.em)(a, !0, o), s = (0, m.PL)(!0, o);
return i.useMemo(() => {
  var e, n, t, i, o;
  let c = null !== (t = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {},
    u = null !== (i = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {},
    d = [
      ...Object.keys(c),
      ...Object.keys(u).filter(e => !(e in c))
    ];
  l && d.push(N.bi.BUILT_IN);
  let p = [],
    _ = {};
  for (let e of d) {
    let n = (0, m.If)(a, e),
      t = null !== (o = n.sectionCommands) && void 0 !== o ? o : [];
    p.push(...t), t.forEach(e => {
      null != n.descriptor && (_[e.id] = n.descriptor);
    });
  }
  return {
    commands: p,
    commandSectionMap: _,
    loading: !0 === r.fetchState.fetching || !0 === s.fetchState.fetching
  };
}, [
  a,
  l,
  r.fetchState.fetching,
  null === (n = r.result) || void 0 === n ? void 0 : n.sections,
  s.fetchState.fetching,
  null === (t = s.result) || void 0 === t ? void 0 : t.sections
]);
  }({
channel: n,
includeBuiltIn: !0
  }), {
apps: S
  } = function(e) {
let {
  channel: n,
  onlyWithCommands: t,
  includeBuiltIn: i,
  allowFetch: a = !0
} = e, l = (0, p.Hs)(n, c.yU.CHAT).hasBaseAccessPermissions, o = (0, m.em)(n, l, a), r = (0, m.PL)(l, a), s = [], u = new Set();
if (null != o.result)
  for (let e of Object.values(o.result.sections)) {
    let n = e.descriptor.application;
    null != n && (Object.keys(e.commands).length > 0 || !t) && (s.push(n), u.add(n.id));
  }
if (null != r.result)
  for (let e of Object.values(r.result.sections)) {
    let n = e.descriptor.application;
    null != n && !u.has(n.id) && (Object.keys(e.commands).length > 0 || !t) && s.push(n);
  }
return i && s.push(E.Wx), {
  apps: s,
  loading: (null == o ? void 0 : o.fetchState.fetching) === !0 || (null == r ? void 0 : r.fetchState.fetching) === !0
};
  }({
channel: n,
onlyWithCommands: !0,
includeBuiltIn: !0
  }), L = (0, u.Z)({
guildId: n.getGuildId()
  }), R = i.useMemo(() => {
var e;
if (!r)
  return [];
return (0, A.N)(f, {
  limit: a,
  filterPredicates: [function(e) {
    let n = (0, p.k)(e, c.yU.CHAT),
      t = {};
    return i => {
      let {
        context: a,
        userId: l,
        roleIds: o,
        isImpersonating: r
      } = n;
      if (!(i.applicationId in t)) {
        let {
          descriptor: n,
          isGuildInstalled: s,
          isUserInstalled: c
        } = (0, m.If)(e, i.applicationId), u = null != a.guild_id ? _.ML(null == n ? void 0 : n.permissions, a.guild_id, l, o, r) : null, d = null != a.guild_id ? _.ZJ(null == n ? void 0 : n.permissions, a, a.guild_id) : null;
        t[i.applicationId] = {
          descriptor: n,
          applicationAllowedForUser: u,
          applicationAllowedForChannel: d,
          isGuildInstalled: s,
          isUserInstalled: c
        };
      }
      let {
        descriptor: s,
        applicationAllowedForChannel: c,
        applicationAllowedForUser: u,
        isGuildInstalled: d,
        isUserInstalled: p
      } = t[i.applicationId];
      return _.Ft(i, n, {
        applicationAllowedForUser: u,
        applicationAllowedForChannel: c,
        commandBotId: null == s ? void 0 : s.botId,
        isGuildInstalled: d,
        isUserInstalled: p
      }) === _.mF.ALLOWED;
    };
  }(n)],
  bucketPredicates: [
    function(e) {
      return n => {
        let t = n.name,
          i = n.displayName;
        return t.startsWith(e) || i.startsWith(e);
      };
    }(e = t),
    function(e) {
      let n = null == e ? void 0 : e.split(' '),
        t = n[0],
        i = n.slice(1).join(' ');
      return e => {
        let n = e.name,
          a = e.displayName;
        return !!(n.startsWith(t) && n.split(' ').slice(1).join(' ').startsWith(i) || a.startsWith(t) && a.split(' ').slice(1).join(' ').startsWith(i)) || !1;
      };
    }(e),
    function(e) {
      return n => {
        let t = n.name,
          i = n.displayName;
        return t.includes(e) || i.includes(e);
      };
    }(e),
    function(e) {
      return n => {
        var t;
        for (let {
            name: i,
            serverLocalizedName: a
          }
          of null !== (t = n.options) && void 0 !== t ? t : [])
          if (i.startsWith(e) || ''.concat(n.name, ' ').concat(i).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(i).startsWith(e) || null != a && (a.startsWith(e) || ''.concat(n.name, ' ').concat(a).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(a).startsWith(e)))
            return !0;
        return !1;
      };
    }(e),
    function(e) {
      return n => {
        var t;
        for (let {
            name: i,
            serverLocalizedName: a
          }
          of null !== (t = n.options) && void 0 !== t ? t : [])
          if (i.includes(e) || (null == a ? void 0 : a.includes(e)))
            return !0;
        return !1;
      };
    }(e)
  ],
  sortComparers: [
    function(e) {
      return (n, t) => {
        let i = d.ZP.getScoreWithoutLoadingLatest(e, n);
        return d.ZP.getScoreWithoutLoadingLatest(e, t) - i;
      };
    }({
      channel: n
    }),
    g
  ]
});
  }, [
r,
f,
a,
n,
t
  ]), T = i.useMemo(() => {
if (0 === R.length)
  return [];
let e = new Map(S.map(e => [
  e.id,
  e
]));
return l().compact(R.map(n => {
  var t;
  let i = e.get(n.applicationId);
  if (null == i)
    return null;
  let a = null !== (t = h[n.id]) && void 0 !== t ? t : null;
  return {
    command: n,
    application: i,
    section: a
  };
}));
  }, [
S,
R,
h
  ]), b = i.useMemo(() => {
var e;
if (!s && !C)
  return [];
let i = [];
if (s && C) {
  let e = new Set(S.map(e => {
    let {
      id: n
    } = e;
    return n;
  }));
  i.push(...S), i.push(...L.filter(n => {
    let {
      application: {
        id: t
      }
    } = n;
    return !e.has(t);
  }).map(e => {
    let {
      application: n
    } = e;
    return n;
  }));
} else
  i = s ? S : L.map(e => {
    let {
      application: n
    } = e;
    return n;
  });
return (0, A.N)(i, {
  limit: o,
  filterPredicates: [function(e) {
    let n = [
      (0, p.k)(e, c.yU.CHAT),
      (0, p.k)(e, c.yU.PRIMARY_ENTRY_POINT)
    ];
    return t => n.some(n => {
      let {
        context: i,
        userId: a,
        roleIds: l,
        isImpersonating: o
      } = n, {
        descriptor: r,
        sectionCommands: s,
        isGuildInstalled: c,
        isUserInstalled: u
      } = (0, m.If)(e, t.id), d = null != i.guild_id ? _.ML(null == r ? void 0 : r.permissions, i.guild_id, a, l, o) : null, p = null != i.guild_id ? _.ZJ(null == r ? void 0 : r.permissions, i, i.guild_id) : null;
      return null == s || !(s.length > 0) || s.some(e => _.Ft(e, n, {
        applicationAllowedForUser: d,
        applicationAllowedForChannel: p,
        commandBotId: null == r ? void 0 : r.botId,
        isGuildInstalled: c,
        isUserInstalled: u
      }) === _.mF.ALLOWED);
    });
  }(n)],
  bucketPredicates: [
    function(e) {
      return n => (0, E.$d)(n).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
    }(e = t),
    function(e) {
      return n => (0, E.$d)(n).toLocaleLowerCase().includes(e.toLocaleLowerCase());
    }(e),
    function(e) {
      return n => {
        var t, i;
        let a = null === (t = (0, E.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (i = null == a ? void 0 : a.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i;
      };
    }(e),
    function(e) {
      return n => {
        var t, i;
        let a = null === (t = (0, E.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (i = null == a ? void 0 : a.includes(e.toLocaleLowerCase())) && void 0 !== i && i;
      };
    }(e)
  ],
  sortComparers: [
    x,
    I
  ]
});
  }, [
s,
C,
o,
n,
t,
S,
L
  ]), M = T.length > 0, y = b.length > 0;
  return {
commandResults: T,
hasCommandResults: M,
applicationResults: b,
hasApplicationResults: y,
isEmptyState: !M && !y,
loading: P && r
  };
}

function S(e) {
  let {
channel: n,
query: t,
fetches: a = !0,
pageLimit: l = 1 / 0
  } = e;
  t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
  let [c, u] = i.useState(1), d = i.useRef(c);
  d.current = c;
  let {
fetchState: m,
totalPages: p
  } = (0, s.cj)([f.Z], () => {
var e, i;
return {
  fetchState: f.Z.getFetchState({
    query: t,
    guildId: n.guild_id,
    page: c,
    integrationType: o.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: r.F.APP_LAUNCHER
  }),
  totalPages: null !== (i = null === (e = f.Z.getSearchResults({
    query: t,
    guildId: n.guild_id,
    page: c,
    integrationType: o.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: r.F.APP_LAUNCHER
  })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== i ? i : 0
};
  }, [
n.guild_id,
c,
t
  ]), _ = i.useMemo(() => Array.from({
length: m === f.M.FETCHED || m === f.M.ERROR ? c : c - 1
  }, (e, i) => {
var a, l;
return null !== (l = null === (a = f.Z.getSearchResults({
  query: t,
  guildId: n.guild_id,
  page: i + 1,
  integrationType: o.Y.USER_INSTALL,
  minUserInstallCommandCount: 1,
  excludeAppsWithCustomInstallUrl: !0,
  source: r.F.APP_LAUNCHER
})) || void 0 === a ? void 0 : a.results) && void 0 !== l ? l : [];
  }), [
m,
n.guild_id,
t,
c
  ]), h = i.useCallback(() => {
let e = _.length;
m === f.M.FETCHED && e === d.current && e > 0 && e < p && e < l && _[e - 1].length > 0 && (d.current++, u(e => e + 1));
  }, [
m,
l,
_,
p
  ]), A = i.useCallback(e => {
let {
  query: n,
  page: t,
  guildId: i
} = e;
C.yC({
  query: n,
  guildId: i,
  options: {
    page: t,
    integrationType: o.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: r.F.APP_LAUNCHER
  }
});
  }, []);
  return i.useEffect(() => {
if (!!a)
  A({
    query: t,
    page: c,
    guildId: n.guild_id
  });
  }, [
t,
n.guild_id,
A,
c,
a
  ]), i.useEffect(() => {
u(1);
  }, [
n.guild_id,
t
  ]), {
fetchState: m,
applicationResults: _.flat(),
fetchNextPage: h
  };
}