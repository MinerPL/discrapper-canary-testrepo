n.d(t, {
  N: function() {
return i;
  }
}), n(47120);
var i, a, s, r, l, o, c = n(442837),
  u = n(570140),
  d = n(55563),
  _ = n(551428);
let E = new Map(),
  I = new Map();
(s = i || (i = {}))[s.NONE = 0] = 'NONE', s[s.FETCHING = 1] = 'FETCHING', s[s.FETCHED = 2] = 'FETCHED', s[s.FAILED = 3] = 'FAILED';
let m = {
  subscriptions: [],
  otps: []
};
class T extends(a = c.ZP.Store) {
  initialize() {
this.waitFor(d.Z, _.Z);
  }
  hasStorefront(e) {
return E.has(e);
  }
  getStoreLayout(e) {
var t;
return null !== (t = E.get(e)) && void 0 !== t ? t : m;
  }
  getFetchStatus(e) {
var t;
return E.has(e) ? 2 : null !== (t = I.get(e)) && void 0 !== t ? t : 0;
  }
}
o = 'ApplicationStoreDirectoryStore', (l = 'displayName') in(r = T) ? Object.defineProperty(r, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[l] = o, t.Z = new T(u.Z, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
let {
  applicationId: t,
  listings: n
} = e;
E.set(t, n), I.delete(t);
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function(e) {
let {
  applicationId: t
} = e;
I.set(t, 3);
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function(e) {
let {
  applicationId: t
} = e;
I.set(t, 1);
  }
});