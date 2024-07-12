t(411104);
var i, l, o, E, r = t(442837),
  u = t(570140);
let a = null;
class s extends(i = r.ZP.Store) {
  getCurrentPath() {
return null != a ? a.pathname : null;
  }
  getCurrentRoute() {
return function(e) {
  let n = null != e && null != e.search ? e.search : '';
  return null != e ? ''.concat(e.pathname).concat(n) : null;
}(a);
  }
  reset() {
throw Error('Should not reset the store this way outside of a test environment');
  }
}
E = 'ApplicationStoreLocationStore', (o = 'displayName') in(l = s) ? Object.defineProperty(l, o, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = E, n.Z = new s(u.Z, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
let {
  location: n
} = e;
a = {
  ...n
};
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
a = null;
  }
});