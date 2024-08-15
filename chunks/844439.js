n.d(t, {
  M: function() {
return c;
  }
});
var i, a, o, l, c, d, m = n(442837),
  r = n(570140);
(i = c || (c = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let u = {},
  s = {},
  p = {};

function _(e) {
  let {
location: t,
channelId: n,
withCommands: i
  } = e;
  return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let E = Object.freeze([]);
class g extends(d = m.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return p[_({
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
return s[_({
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
  withCommands: a
} = e;
return null !== (t = u[_({
  location: n,
  channelId: i,
  withCommands: a
})]) && void 0 !== t ? t : E;
  }
}
l = void 0, (o = 'displayName') in(a = g) ? Object.defineProperty(a, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[o] = l, t.ZP = new g(r.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
s = {
  ...s,
  [_({
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
  withCommands: a
} = e, o = _({
  location: n,
  channelId: i,
  withCommands: a
});
u = {
  ...u,
  [o]: t
}, s = {
  ...s,
  [o]: 1
};
let l = Date.now();
p = {
  ...p,
  [o]: l
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
s = {
  ...s,
  [_({
    location: t,
    channelId: n,
    withCommands: i
  })]: 2
};
  }
});