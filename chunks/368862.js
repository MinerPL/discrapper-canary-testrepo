"use strict";
n.d(t, {
  M: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140);
(i = a || (a = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let E = {},
  I = {},
  T = {};

function h(e) {
  let {
    includesInactive: t
  } = e;
  return "includes_inactive:".concat(t)
}
class S extends(l = d.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      includesInactive: t
    } = e;
    return T[h({
      includesInactive: t
    })]
  }
  getFetchState(e) {
    let {
      includesInactive: t
    } = e;
    return I[h({
      includesInactive: t
    })]
  }
  getCollections(e) {
    let {
      includesInactive: t
    } = e;
    return E[h({
      includesInactive: t
    })]
  }
}
o = void 0, (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new S(c.Z, {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(e) {
    let {
      includesInactive: t
    } = e;
    I = {
      ...I,
      [h({
        includesInactive: t
      })]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(e) {
    var t;
    let {
      collections: n,
      includesInactive: i
    } = e, r = h({
      includesInactive: i
    });
    let s = (t = n.map(e => {
      var t;
      return e.application_directory_collection_items = (t = e.application_directory_collection_items, _().sortBy(t, ["position", "id"])), e
    }), _().sortBy(t, ["position", "id"]));
    E = {
      ...E,
      [r]: s
    }, I = {
      ...I,
      [r]: 1
    };
    let o = Date.now();
    T = {
      ...T,
      [r]: o
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(e) {
    let {
      includesInactive: t
    } = e;
    I = {
      ...I,
      [h({
        includesInactive: t
      })]: 2
    }
  }
})