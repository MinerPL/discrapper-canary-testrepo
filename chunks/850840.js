let r;
n(653041);
var a,
    i = n(442837),
    l = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class u extends (a = i.ZP.PersistedStore) {
    initialize(e) {
        r = null != e ? e : o;
    }
    getState() {
        return r;
    }
    get hasAcceptedStoreTerms() {
        return r.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return r.hasAcceptedEulaIds.includes(e);
    }
}
s(u, 'displayName', 'ApplicationStoreUserSettingsStore'),
    s(u, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    s(u, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new u(l.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            r.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (r.hasAcceptedEulaIds.includes(t)) return !1;
            r.hasAcceptedEulaIds.push(t);
        }
    }));
