var i, a, s, l, r = n(442837), o = n(570140);
let c = { matureAgree: !1 };
class d extends (l = r.ZP.Store) {
    get didMatureAgree() {
        return c.matureAgree;
    }
}
s = 'ApplicationStoreSettingsStore', (a = 'displayName') in (i = d) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new d(o.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        c.matureAgree = !0;
    }
});
