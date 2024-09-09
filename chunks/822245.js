n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(911969),
    u = n(704907),
    c = n(317381),
    d = n(581883),
    _ = n(674563),
    E = n(526761);
function f(e, t, n) {
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
let h = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    p = { pendingUsages: [] },
    I = new u.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: _.yP
    });
function m(e) {
    p.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        I.track(e),
        I.compute();
}
function T() {
    var e, t;
    let n = null !== (t = null === (e = d.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
    I.overwriteHistory(
        a().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        p.pendingUsages
    );
}
class S extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = e), this.waitFor(c.ZP), this.syncWith([d.Z], T);
    }
    getState() {
        return p;
    }
    hasPendingUsage() {
        return p.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return I;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null !== (t = I.getScore(e)) && void 0 !== t ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return I.frequently;
    }
}
f(S, 'displayName', 'ApplicationFrecencyStore'),
    f(S, 'persistKey', 'ApplicationFrecency'),
    (t.Z = new S(o.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            var t;
            let { command: n } = e;
            if (!h.includes(n.type) || (null === (t = c.ZP.getLaunchState(n.applicationId)) || void 0 === t ? void 0 : t.isLaunching)) return !1;
            m(n.applicationId);
        },
        EMBEDDED_ACTIVITY_OPEN: function (e) {
            let { applicationId: t } = e;
            m(t);
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            if (t !== E.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            p.pendingUsages = [];
        }
    }));
