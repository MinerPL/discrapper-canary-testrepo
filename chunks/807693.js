var r, l, a, o, i = t(442837), s = t(570140);
let c = {};
class u extends (o = i.ZP.Store) {
    getEULA(e) {
        return c[e];
    }
}
a = 'EULAStore', (l = 'displayName') in (r = u) ? Object.defineProperty(r, l, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[l] = a, n.Z = new u(s.Z, {
    EULA_FETCH_SUCCESS: function (e) {
        let {eula: n} = e;
        c[n.id] = n;
    }
});
