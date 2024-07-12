let i;
n(47120);
var r, o = n(442837),
  a = n(570140),
  l = n(699516),
  d = n(496232);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = !1,
  f = Object.freeze({
userAffinities: [],
lastFetched: 0
  }),
  s = {
...f
  };

function _() {
  i = new Map(s.userAffinities.filter(e => !l.Z.isBlocked(e.otherUserId)).map(e => [
e.otherUserId,
e
  ]));
}
class h extends(r = o.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(l.Z), null != e && (s.userAffinities = e.userAffinities, s.lastFetched = e.lastFetched, _()), this.syncWith([l.Z], _);
  }
  shouldFetch() {
if (!c)
  return Date.now() - s.lastFetched > d.K;
  }
  isFetching() {
return c;
  }
  getUserAffinities() {
return s.userAffinities;
  }
  getUserAffinity(e) {
return i.get(e);
  }
  getState() {
return s;
  }
}
u(h, 'displayName', 'UserAffinitiesStoreV2'), u(h, 'persistKey', 'UserAffinitiesStoreV2'), t.Z = new h(a.Z, {
  LOAD_USER_AFFINITIES_V2: function() {
c = !0;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function(e) {
let {
  affineUsers: t
} = e;
s.lastFetched = Date.now(), c = !1, s.userAffinities = t, _();
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function() {
c = !1;
  },
  LOGOUT: function() {
s = {
  ...f
}, i = new Map(), c = !1;
  }
});