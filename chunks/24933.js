var r, i = n(442837), a = n(570140);
function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function s() {
    return {
        usageByApplicationId: {},
        shelfOrder: []
    };
}
let l = s();
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = {
            ...s(),
            ...null != e ? e : {}
        };
    }
    getState() {
        return l;
    }
}
o(u, 'displayName', 'ActivityShelfStore'), o(u, 'persistKey', 'ActivityShelfStore'), t.Z = new u(a.Z, {
    LOGOUT: function () {
        l = s();
    }
});
