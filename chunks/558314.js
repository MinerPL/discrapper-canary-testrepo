var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140);
let c = { matureAgree: !1 };
class u extends (r = l.ZP.Store) {
    get didMatureAgree() {
        return c.matureAgree;
    }
}
(s = 'ApplicationStoreSettingsStore'),
    (a = 'displayName') in (i = u)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new u(o.Z, {
        APPLICATION_STORE_MATURE_AGREE: function () {
            c.matureAgree = !0;
        }
    }));
