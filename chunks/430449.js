n(47120);
var r, i, a, o, s, l, u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(570140);
(a = r || (r = {}))[a.NOT_FETCHED = 0] = 'NOT_FETCHED', a[a.FETCHING = 1] = 'FETCHING', a[a.FETCH_SUCCESS = 2] = 'FETCH_SUCCESS';
let E = {},
  f = {};

function h(e) {
  let {
assets: t
  } = e, n = {
...E
  };
  for (let e in t) {
var r;
let i = t[e];
n[e] = 2, f[e] = {
  assets: null !== (r = c().keyBy(i, 'name')) && void 0 !== r ? r : {},
  lastUpdated: Date.now()
};
  }
  E = n;
}
class p extends(i = d.ZP.Store) {
  getApplicationAssetFetchState(e) {
var t;
return null !== (t = E[e]) && void 0 !== t ? t : 0;
  }
  getFetchingIds() {
return [...Object.entries(E).filter(e => {
  let [, t] = e;
  return 1 === t;
}).map(e => {
  let [t] = e;
  return t;
})];
  }
  getApplicationAssets(e) {
return f[e];
  }
}
l = 'ApplicationAssetsStore', (s = 'displayName') in(o = p) ? Object.defineProperty(o, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = l, t.Z = new p(_.Z, {
  APPLICATION_ASSETS_FETCH: function(e) {
let {
  applicationId: t
} = e;
E = {
  ...E,
  [t]: 1
};
  },
  APPLICATION_ASSETS_FETCH_SUCCESS: function(e) {
let {
  applicationId: t
} = e;
E = {
  ...E,
  [t]: 2
};
  },
  APPLICATION_ASSETS_UPDATE: function(e) {
let {
  applicationId: t,
  assets: n
} = e;
if (null != n) {
  var r;
  f[t] = {
    assets: null !== (r = c().keyBy(n, 'name')) && void 0 !== r ? r : {},
    lastUpdated: Date.now()
  };
} else
  delete f[t];
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: h,
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: h
});