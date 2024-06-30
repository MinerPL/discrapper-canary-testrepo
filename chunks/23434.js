var i, a, s, l, r = n(442837), o = n(570140);
let c = null;
class d extends (l = r.ZP.Store) {
    hasAction() {
        return null != c;
    }
    getAction() {
        return c;
    }
}
function u(e) {
    c = e.requiredAction;
}
s = 'UserRequiredActionStore', (a = 'displayName') in (i = d) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new d(o.Z, {
    CONNECTION_OPEN: u,
    USER_REQUIRED_ACTION_UPDATE: u
});
