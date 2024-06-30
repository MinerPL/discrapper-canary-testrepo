var r, i, a, o, s = n(442837), l = n(570140), u = n(981631);
let c = 0;
class d extends (o = s.ZP.Store) {
    getId() {
        return c;
    }
}
a = 'InstanceIdStore', (i = 'displayName') in (r = d) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
    RPC_SERVER_READY: function (e) {
        let {port: t} = e;
        c = u.V6Z - t;
    }
});
