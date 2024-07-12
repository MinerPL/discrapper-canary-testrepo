t.d(n, {
  N: function() {
return i;
  }
}), t(47120);
var i, a, o, r, l, s, c = t(442837),
  d = t(570140),
  u = t(55563),
  f = t(551428);
let p = new Map(),
  C = new Map();
(o = i || (i = {}))[o.NONE = 0] = 'NONE', o[o.FETCHING = 1] = 'FETCHING', o[o.FETCHED = 2] = 'FETCHED', o[o.FAILED = 3] = 'FAILED';
let _ = {
  subscriptions: [],
  otps: []
};
class b extends(a = c.ZP.Store) {
  initialize() {
this.waitFor(u.Z, f.Z);
  }
  hasStorefront(e) {
return p.has(e);
  }
  getStoreLayout(e) {
var n;
return null !== (n = p.get(e)) && void 0 !== n ? n : _;
  }
  getFetchStatus(e) {
var n;
return p.has(e) ? 2 : null !== (n = C.get(e)) && void 0 !== n ? n : 0;
  }
}
s = 'ApplicationStoreDirectoryStore', (l = 'displayName') in(r = b) ? Object.defineProperty(r, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[l] = s, n.Z = new b(d.Z, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
let {
  applicationId: n,
  listings: t
} = e;
p.set(n, t), C.delete(n);
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function(e) {
let {
  applicationId: n
} = e;
C.set(n, 3);
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function(e) {
let {
  applicationId: n
} = e;
C.set(n, 1);
  }
});