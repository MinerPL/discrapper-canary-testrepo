var i, a, s, l, r = n(442837), o = n(570140);
let c = 'UPDATE_NOT_AVAILABLE';
function d(e) {
    c = e.type;
}
class u extends (l = r.ZP.Store) {
    getState() {
        return c;
    }
}
s = 'AutoUpdateStore', (a = 'displayName') in (i = u) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new u(o.Z, {
    CHECKING_FOR_UPDATES: d,
    UPDATE_NOT_AVAILABLE: d,
    UPDATE_AVAILABLE: d,
    UPDATE_MANUALLY: d,
    UPDATE_ERROR: d,
    UPDATE_DOWNLOADED: d
});
