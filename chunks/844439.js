n.d(t, {
  M: function() {
return r;
  }
});
var i, o, a, l, r, s, u = n(442837),
  d = n(570140);
(i = r || (r = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let c = {},
  m = {},
  p = {};

function h(e) {
  let {
location: t,
channelId: n,
withCommands: i
  } = e;
  return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let _ = Object.freeze([]);
class E extends(s = u.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return p[h({
  location: t,
  channelId: n,
  withCommands: i
})];
  }
  getFetchState(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return m[h({
  location: t,
  channelId: n,
  withCommands: i
})];
  }
  getRecommendations(e) {
var t;
let {
  location: n,
  channelId: i,
  withCommands: o
} = e;
return null !== (t = c[h({
  location: n,
  channelId: i,
  withCommands: o
})]) && void 0 !== t ? t : _;
  }
}
l = void 0, (a = 'displayName') in(o = E) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new E(d.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
m = {
  ...m,
  [h({
    location: t,
    channelId: n,
    withCommands: i
  })]: 0
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
let {
  recommendations: t,
  location: n,
  channelId: i,
  withCommands: o
} = e, a = h({
  location: n,
  channelId: i,
  withCommands: o
});
c = {
  ...c,
  [a]: t
}, m = {
  ...m,
  [a]: 1
};
let l = Date.now();
p = {
  ...p,
  [a]: l
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
m = {
  ...m,
  [h({
    location: t,
    channelId: n,
    withCommands: i
  })]: 2
};
  }
});