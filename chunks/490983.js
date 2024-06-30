n(47120);
var r, i, a, o, s = n(658722), l = n.n(s), u = n(392711), c = n.n(u), d = n(913527), _ = n.n(d), E = n(442837), f = n(570140), h = n(812206), p = n(594190), m = n(592745), I = n(706454), T = n(757266), g = n(77498), S = n(283595), A = n(246946), N = n(230307), v = n(799777), O = n(417363), R = n(941128), C = n(70956), y = n(251625), D = n(823379), L = n(780570), b = n(358085), M = n(998502), P = n(804739), U = n(7956), w = n(981631);
let x = _()().subtract(1, 'week'), G = [], k = '', B = !1;
function F(e, t) {
    return e.application.name.localeCompare(t.application.name, I.default.locale, { sensitivity: 'base' });
}
let V = {
        [w.iEv.NAME]: F,
        [w.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(), i = t.libraryApplication.getDistributor();
            return r === i ? (n === w.sHY.DESCENDING ? -1 : 1) * F(e, t) : null == r ? 1 : null == i ? -1 : r.localeCompare(i);
        },
        [w.iEv.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
        [w.iEv.ACTIONS]: null
    }, H = (0, y.oH)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)), Z = (0, y.oH)(e => e.filter(e => null != e.libraryApplication && O.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))), Y = (0, y.oH)((e, t) => e.filter(e => l()(t.toLowerCase(), e.application.name.toLowerCase()))), j = (0, y.oH)((e, t, n, r) => {
        let i = V[t];
        if (null == i)
            return e;
        let a = [...e].sort(i);
        return n === w.sHY.DESCENDING ? a.reverse() : a;
    }), W = (0, y.oH)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));
function K(e, t) {
    let n = N.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != n)
        return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function z() {
    let e = new Set(p.ZP.getRunningVerifiedApplicationIds()), t = {}, n = new Set(), r = p.ZP.getGamesSeen(!1, !1).map(e => {
            let n = g.Z.getGameByGameData(e);
            return null != n ? (t[n.id] = e.lastFocused * C.Z.Millis.SECOND, n.id) : null;
        }), i = Object.values(S.Z.getAllLibraryApplications()).map(r => function (e, t, n, r, i) {
            var a, o;
            if (!i && t.has(e.id))
                return null;
            let s = h.Z.getApplication(e.id);
            if (null == s)
                return null;
            let l = K(s, n);
            if (t.add(e.id), !(0, L.Je)(e) && !O.Z.isInstalled(e.id, e.branchId))
                return null;
            return {
                key: ''.concat(e.id, '-').concat(e.branchId),
                application: s,
                libraryApplication: e,
                lastPlayed: l,
                supportsCloudSync: null != e && O.Z.supportsCloudSync(e.id, e.branchId),
                isNew: (a = e, o = l, null != a && _()(a.createdAt).isAfter(x) && 0 === o),
                isLaunching: m.Z.launchingGames.has(e.id),
                isRunning: r.has(e.id),
                isLaunchable: (0, P.t)({
                    LibraryApplicationStore: S.Z,
                    LaunchableGameStore: m.Z,
                    DispatchApplicationStore: O.Z,
                    ConnectedAppsStore: T.Z,
                    applicationId: e.id,
                    branchId: e.branchId
                }),
                isUpdatingFlags: S.Z.isUpdatingFlags(e.id, e.branchId),
                shouldShowInLibrary: (0, L.d0)(s, e, A.Z),
                defaultAction: (0, U.i)(e, O.Z, R.Z)
            };
        }(r, n, t, e, !0)).filter(D.lm), a = [
            ...r.map(r => function (e, t, n, r) {
                let i = null != e ? h.Z.getApplication(e) : null;
                if (null == i || null == e || t.has(e))
                    return null;
                let a = K(i, n);
                return t.add(e), {
                    key: e,
                    application: i,
                    lastPlayed: a,
                    supportsCloudSync: !1,
                    isNew: !1,
                    isLaunching: m.Z.launchingGames.has(e),
                    isRunning: r.has(e),
                    isLaunchable: (0, P.t)({
                        LibraryApplicationStore: S.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: O.Z,
                        ConnectedAppsStore: T.Z,
                        applicationId: e,
                        branchId: null
                    }),
                    isUpdatingFlags: !1,
                    shouldShowInLibrary: !1,
                    libraryApplication: null,
                    defaultAction: null
                };
            }(r, n, t, e)).filter(D.lm),
            ...i
        ].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
    return B = null != g.Z.lastFetched && S.Z.fetched, !c().isEqual(a, G) && (G = a, b.isPlatformEmbedded && M.ZP.setSystemTrayApplications(Z(G).map(e => e.application).slice(0, 5)), !0);
}
class q extends (r = E.ZP.Store) {
    initialize() {
        this.syncWith([
            h.Z,
            g.Z,
            m.Z,
            p.ZP,
            O.Z,
            R.Z,
            S.Z,
            N.Z,
            A.Z,
            T.Z
        ], z, 200), this.syncWith([
            v.Z,
            I.default
        ], () => !0);
    }
    get applicationFilterQuery() {
        return k;
    }
    get applicationViewItems() {
        return G;
    }
    get launchableApplicationViewItems() {
        return Z(G);
    }
    get libraryApplicationViewItems() {
        return H(G);
    }
    get filteredLibraryApplicationViewItems() {
        return Y(this.libraryApplicationViewItems, k);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return j(this.filteredLibraryApplicationViewItems, v.Z.sortKey, v.Z.sortDirection, I.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return W(G);
    }
    get hasFetchedApplications() {
        return B;
    }
}
o = 'ApplicationViewStore', (a = 'displayName') in (i = q) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new q(f.Z, {
    LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
        let {query: t} = e;
        k = t;
    }
});
