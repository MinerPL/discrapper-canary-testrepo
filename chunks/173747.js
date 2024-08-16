n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(846519),
    d = n(570140),
    _ = n(274616),
    E = n(57513),
    f = n(51025),
    h = n(812206),
    p = n(283595),
    m = n(417363),
    I = n(391690),
    T = n(70956),
    g = n(780570),
    S = n(804739);
let A = new Set(),
    N = {},
    v = new Set(),
    O = {},
    R = new Set(),
    C = {},
    y = 10 * T.Z.Millis.MINUTE,
    D = 6 * T.Z.Millis.HOUR,
    L = 10 * T.Z.Millis.MINUTE,
    b = new c.V7();
function M(e) {
    b.start(e + Math.random() * y, _.o);
}
function P() {
    if (!(0, S.Q)()) return !1;
    let e = p.Z.entitledBranchIds,
        t = [];
    for (let n of e) !C.hasOwnProperty(n) && ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    d.Z.wait(() => _.o(t));
}
function U(e, t) {
    if (null != N[t] && I.Z.shouldBeInstalled(e, t)) {
        let n = N[t],
            r = n.manifestIds,
            i = m.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !l().isEqual(i.manifestIds, r)) &&
            d.Z.wait(() => {
                let i = h.Z.getApplication(e);
                null != i ? (R.delete((0, g.Tu)(e, t)), (0, f.li)(i, t, n.id, r, !0)) : R.add((0, g.Tu)(e, t));
            });
    }
}
function w() {
    b.stop();
}
class x extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith([p.Z], P), this.waitFor(m.Z, p.Z, h.Z);
    }
    getTargetBuildId(e, t) {
        return null == N[t] ? null : N[t].id;
    }
    getTargetManifests(e, t) {
        return null == N[t] ? null : N[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return v.has(t);
    }
    isFetching(e, t) {
        return A.has(t);
    }
    needsToFetchBuildSize(e) {
        return !O.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return O[e];
    }
}
(s = 'ApplicationBuildStore'),
    (a = 'displayName') in (i = x)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new x(d.Z, {
        CONNECTION_OPEN: function () {
            return M(D), P();
        },
        GAMES_DATABASE_UPDATE: function () {
            if (!(0, S.Q)()) return !1;
            for (let e of R) {
                let { applicationId: t, branchId: n } = (0, g.CP)(e);
                null != h.Z.getApplication(t) && (R.delete(e), U(t, n));
            }
        },
        APPLICATION_BUILD_FETCH_START: function (e) {
            let { branchId: t } = e;
            A.add(t);
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branchId: n, locale: r, build: i } = e;
            A.delete(n);
            let a = i.manifests.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                s = i.id;
            v.delete(n),
                (N[n] = {
                    id: s,
                    applicationId: t,
                    branchId: n,
                    locale: r,
                    manifestIds: a
                }),
                U(t, n);
        },
        APPLICATION_BUILD_NOT_FOUND: function (e) {
            let { branchId: t } = e;
            A.delete(t), v.add(t);
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
            let { buildId: t } = e;
            !O.hasOwnProperty(t) && (O[t] = null);
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
            let { buildId: t, sizeKB: n } = e;
            O[t] = n;
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
            let { buildId: t } = e;
            null == O[t] && delete O[t];
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { branches: t } = e,
                n = {};
            for (let e in p.Z.libraryApplications) {
                let t = p.Z.libraryApplications[e];
                n[t.branchId] = t;
            }
            for (let e of t) {
                let { id: t, liveBuildId: r } = e;
                if (r !== C[t]) {
                    let e = n[t];
                    null != e && d.Z.wait(() => E.l(e.id, e.branchId, !0));
                }
                C[t] = r;
            }
            M(D);
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function () {
            M(L);
        },
        CONNECTION_CLOSED: w,
        LOGOUT: w,
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t } = e;
            if (!(0, S.Q)()) return !1;
            let n = new Set();
            for (let e of t) n.add(e.application_id);
            for (let e in p.Z.libraryApplications) {
                let t = p.Z.libraryApplications[e];
                n.has(t.id) && (0, g.Je)(t) && d.Z.wait(() => E.l(t.id, t.branchId));
            }
        }
    }));
