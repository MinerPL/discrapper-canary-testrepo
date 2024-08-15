n(47120);
var r, i = n(442837),
  a = n(570140),
  s = n(699516);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = !1,
  u = Object.freeze({
userAffinities: [],
affinityUserIds: new Set(),
lastFetched: 0
  }),
  c = Object.freeze({
userAffinitiesMap: new Map(),
affinityUserIds: new Set()
  }),
  d = {
...u
  },
  _ = {
...c
  };

function E() {
  let e = new Map(d.userAffinities.filter(e => {
  let {
    user_id: t
  } = e;
  return !s.Z.isBlocked(t);
}).map(e => [
  e.user_id,
  e
])),
t = new Set(e.keys());
  _ = {
userAffinitiesMap: e,
affinityUserIds: t
  };
}
class f extends(r = i.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(s.Z), null != e && (d.userAffinities = e.userAffinities, d.lastFetched = e.lastFetched, E()), this.syncWith([s.Z], E);
  }
  needsRefresh() {
return !l && Date.now() - d.lastFetched > 86400000;
  }
  getFetching() {
return l;
  }
  getState() {
return d;
  }
  getUserAffinities() {
return d.userAffinities;
  }
  getUserAffinitiesMap() {
return _.userAffinitiesMap;
  }
  getUserAffinity(e) {
return _.userAffinitiesMap.get(e);
  }
  getUserAffinitiesUserIds() {
return _.affinityUserIds;
  }
}
o(f, 'displayName', 'UserAffinitiesStore'), o(f, 'persistKey', 'UserAffinitiesStore'), o(f, 'migrations', [e => null]), t.Z = new f(a.Z, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
var t;
let {
  affinities: n
} = e;
d.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], d.lastFetched = Date.now(), E(), l = !1;
  },
  LOAD_USER_AFFINITIES: function() {
l = !0;
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
l = !1;
  },
  LOGOUT: function() {
d = {
  ...u
}, _ = {
  ...c
};
  }
});