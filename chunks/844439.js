"use strict";
n.d(t, {
  M: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(442837),
  _ = n(570140);
(i = a || (a = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let d = {},
  c = {},
  E = {};

function I(e) {
  let {
    location: t,
    channelId: n
  } = e;
  return "location:".concat(t, " channelId:").concat(n)
}
class T extends(l = u.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      location: t,
      channelId: n
    } = e;
    return E[I({
      location: t,
      channelId: n
    })]
  }
  getFetchState(e) {
    let {
      location: t,
      channelId: n
    } = e;
    return c[I({
      location: t,
      channelId: n
    })]
  }
  getRecommendations(e) {
    var t;
    let {
      location: n,
      channelId: i
    } = e;
    return null !== (t = d[I({
      location: n,
      channelId: i
    })]) && void 0 !== t ? t : []
  }
}
o = void 0, (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new T(_.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
    let {
      location: t,
      channelId: n
    } = e;
    c = {
      ...c,
      [I({
        location: t,
        channelId: n
      })]: 0
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
    let {
      recommendations: t,
      location: n,
      channelId: i
    } = e, r = I({
      location: n,
      channelId: i
    });
    d = {
      ...d,
      [r]: t
    }, c = {
      ...c,
      [r]: 1
    };
    let s = Date.now();
    E = {
      ...E,
      [r]: s
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
    let {
      location: t,
      channelId: n
    } = e;
    c = {
      ...c,
      [I({
        location: t,
        channelId: n
      })]: 2
    }
  }
})