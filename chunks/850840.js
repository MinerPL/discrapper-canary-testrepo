let i;
t(653041);
var r, o = t(442837), a = t(570140);
function s(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let l = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class c extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        i = null != e ? e : l;
    }
    getState() {
        return i;
    }
    get hasAcceptedStoreTerms() {
        return i.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return i.hasAcceptedEulaIds.includes(e);
    }
}
s(c, 'displayName', 'ApplicationStoreUserSettingsStore'), s(c, 'persistKey', 'ApplicationStoreUserSettingsStore'), s(c, 'migrations', [e => null == e.hasAcceptedEulaIds ? {
        ...e,
        hasAcceptedEulaIds: []
    } : e]), n.Z = new c(a.Z, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
        i.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
        let {eulaId: n} = e;
        if (i.hasAcceptedEulaIds.includes(n))
            return !1;
        i.hasAcceptedEulaIds.push(n);
    }
});
