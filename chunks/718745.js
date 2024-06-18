"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(981631);
let _ = {},
  d = {
    integration: "",
    query: ""
  };
class c extends(o = a.ZP.Store) {
  getResults(e, t) {
    if (null == e || null == t) return null;
    let n = _[e];
    return null != n && null != n[t] ? n[t] : null
  }
  getQuery() {
    return d
  }
}
s = "IntegrationQueryStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  INTEGRATION_QUERY: function(e) {
    var t;
    let {
      integration: n,
      query: i
    } = e;
    _[n] = null !== (t = _[n]) && void 0 !== t ? t : {}, _[n][i] = {
      loading: !0,
      results: []
    }
  },
  INTEGRATION_QUERY_SUCCESS: function(e) {
    let {
      integration: t,
      query: n,
      results: i
    } = e;
    _[t][n] = {
      loading: !1,
      results: i.map(e => ({
        type: u.nkL[t].type,
        meta: e
      }))
    }, d = {
      query: n,
      integration: t
    }
  },
  INTEGRATION_QUERY_FAILURE: function(e) {
    let {
      integration: t,
      query: n
    } = e;
    delete _[t][n]
  }
})