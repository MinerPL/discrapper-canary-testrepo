var i, s, a, r, l = n(442837),
  o = n(570140);
let c = {
  matureAgree: !1
};
class u extends(r = l.ZP.Store) {
  get didMatureAgree() {
return c.matureAgree;
  }
}
a = 'ApplicationStoreSettingsStore', (s = 'displayName') in(i = u) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new u(o.Z, {
  APPLICATION_STORE_MATURE_AGREE: function() {
c.matureAgree = !0;
  }
});