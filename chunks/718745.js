var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(981631);
let c = {},
  d = {
integration: '',
query: ''
  };
class _ extends(s = o.ZP.Store) {
  getResults(e, t) {
if (null == e || null == t)
  return null;
let n = c[e];
return null != n && null != n[t] ? n[t] : null;
  }
  getQuery() {
return d;
  }
}
a = 'IntegrationQueryStore', (i = 'displayName') in(r = _) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new _(l.Z, {
  INTEGRATION_QUERY: function(e) {
var t;
let {
  integration: n,
  query: r
} = e;
c[n] = null !== (t = c[n]) && void 0 !== t ? t : {}, c[n][r] = {
  loading: !0,
  results: []
};
  },
  INTEGRATION_QUERY_SUCCESS: function(e) {
let {
  integration: t,
  query: n,
  results: r
} = e;
c[t][n] = {
  loading: !1,
  results: r.map(e => ({
    type: u.nkL[t].type,
    meta: e
  }))
}, d = {
  query: n,
  integration: t
};
  },
  INTEGRATION_QUERY_FAILURE: function(e) {
let {
  integration: t,
  query: n
} = e;
delete c[t][n];
  }
});