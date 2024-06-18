"use strict";
n(47120);
var i, r, s, o, a = n(658722),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(913527),
  c = n.n(d),
  E = n(442837),
  I = n(570140),
  T = n(812206),
  h = n(594190),
  S = n(592745),
  f = n(706454),
  N = n(757266),
  A = n(77498),
  m = n(283595),
  O = n(246946),
  R = n(230307),
  C = n(799777),
  p = n(417363),
  g = n(941128),
  L = n(70956),
  v = n(251625),
  D = n(823379),
  M = n(780570),
  P = n(358085),
  y = n(998502),
  U = n(804739),
  b = n(7956),
  G = n(981631);
let w = c()().subtract(1, "week"),
  k = [],
  B = "",
  x = !1;

function V(e, t) {
  return e.application.name.localeCompare(t.application.name, f.default.locale, {
    sensitivity: "base"
  })
}
let Z = {
    [G.iEv.NAME]: V,
    [G.iEv.PLATFORM]: (e, t, n) => {
      let i = e.libraryApplication.getDistributor(),
        r = t.libraryApplication.getDistributor();
      return i === r ? (n === G.sHY.DESCENDING ? -1 : 1) * V(e, t) : null == i ? 1 : null == r ? -1 : i.localeCompare(r)
    },
    [G.iEv.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
    [G.iEv.ACTIONS]: null
  },
  H = (0, v.oH)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
  F = (0, v.oH)(e => e.filter(e => null != e.libraryApplication && p.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
  Y = (0, v.oH)((e, t) => e.filter(e => l()(t.toLowerCase(), e.application.name.toLowerCase()))),
  j = (0, v.oH)((e, t, n, i) => {
    let r = Z[t];
    if (null == r) return e;
    let s = [...e].sort(r);
    return n === G.sHY.DESCENDING ? s.reverse() : s
  }),
  W = (0, v.oH)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

function K(e, t) {
  let n = R.Z.getCurrentUserStatisticsForApplication(e.id);
  if (null != n) return new Date(n.last_played_at).getTime();
  let i = t[e.id];
  return null != i ? i : 0
}

function z() {
  let e = new Set(h.ZP.getRunningVerifiedApplicationIds()),
    t = {},
    n = new Set,
    i = h.ZP.getGamesSeen(!1, !1).map(e => {
      let n = A.Z.getGameByGameData(e);
      return null != n ? (t[n.id] = e.lastFocused * L.Z.Millis.SECOND, n.id) : null
    }),
    r = Object.values(m.Z.getAllLibraryApplications()).map(i => (function(e, t, n, i, r) {
      var s, o;
      if (!r && t.has(e.id)) return null;
      let a = T.Z.getApplication(e.id);
      if (null == a) return null;
      let l = K(a, n);
      if (t.add(e.id), !(0, M.Je)(e) && !p.Z.isInstalled(e.id, e.branchId)) return null;
      return {
        key: "".concat(e.id, "-").concat(e.branchId),
        application: a,
        libraryApplication: e,
        lastPlayed: l,
        supportsCloudSync: null != e && p.Z.supportsCloudSync(e.id, e.branchId),
        isNew: (s = e, o = l, null != s && c()(s.createdAt).isAfter(w) && 0 === o),
        isLaunching: S.Z.launchingGames.has(e.id),
        isRunning: i.has(e.id),
        isLaunchable: (0, U.t)({
          LibraryApplicationStore: m.Z,
          LaunchableGameStore: S.Z,
          DispatchApplicationStore: p.Z,
          ConnectedAppsStore: N.Z,
          applicationId: e.id,
          branchId: e.branchId
        }),
        isUpdatingFlags: m.Z.isUpdatingFlags(e.id, e.branchId),
        shouldShowInLibrary: (0, M.d0)(a, e, O.Z),
        defaultAction: (0, b.i)(e, p.Z, g.Z)
      }
    })(i, n, t, e, !0)).filter(D.lm),
    s = [...i.map(i => (function(e, t, n, i) {
      let r = null != e ? T.Z.getApplication(e) : null;
      if (null == r || null == e || t.has(e)) return null;
      let s = K(r, n);
      return t.add(e), {
        key: e,
        application: r,
        lastPlayed: s,
        supportsCloudSync: !1,
        isNew: !1,
        isLaunching: S.Z.launchingGames.has(e),
        isRunning: i.has(e),
        isLaunchable: (0, U.t)({
          LibraryApplicationStore: m.Z,
          LaunchableGameStore: S.Z,
          DispatchApplicationStore: p.Z,
          ConnectedAppsStore: N.Z,
          applicationId: e,
          branchId: null
        }),
        isUpdatingFlags: !1,
        shouldShowInLibrary: !1,
        libraryApplication: null,
        defaultAction: null
      }
    })(i, n, t, e)).filter(D.lm), ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
  return x = null != A.Z.lastFetched && m.Z.fetched, !_().isEqual(s, k) && (k = s, P.isPlatformEmbedded && y.ZP.setSystemTrayApplications(F(k).map(e => e.application).slice(0, 5)), !0)
}
class q extends(i = E.ZP.Store) {
  initialize() {
    this.syncWith([T.Z, A.Z, S.Z, h.ZP, p.Z, g.Z, m.Z, R.Z, O.Z, N.Z], z, 200), this.syncWith([C.Z, f.default], () => !0)
  }
  get applicationFilterQuery() {
    return B
  }
  get applicationViewItems() {
    return k
  }
  get launchableApplicationViewItems() {
    return F(k)
  }
  get libraryApplicationViewItems() {
    return H(k)
  }
  get filteredLibraryApplicationViewItems() {
    return Y(this.libraryApplicationViewItems, B)
  }
  get sortedFilteredLibraryApplicationViewItems() {
    return j(this.filteredLibraryApplicationViewItems, C.Z.sortKey, C.Z.sortDirection, f.default.locale)
  }
  get hiddenLibraryApplicationViewItems() {
    return W(k)
  }
  get hasFetchedApplications() {
    return x
  }
}
o = "ApplicationViewStore", (s = "displayName") in(r = q) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new q(I.Z, {
  LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
    let {
      query: t
    } = e;
    B = t
  }
})