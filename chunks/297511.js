n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    });
var a = n(200651),
    r = n(192379),
    i = n(593473),
    c = n(442837),
    s = n(893776),
    o = n(830064),
    d = n(388905),
    l = n(625128),
    u = n(362762),
    m = n(353926),
    g = n(571457),
    p = n(703656),
    E = n(314897),
    _ = n(626135),
    f = n(963202),
    b = n(569234),
    h = n(981631),
    x = n(186901),
    A = n(388032),
    L = n(940956);
function D(e) {
    let { match: t, location: n } = e,
        D = (0, c.e7)([u.Z], () => u.Z.getState('discovery')),
        I = (0, c.e7)([E.default], () => E.default.isAuthenticated()),
        N = (0, f.iN)('game_discovery_entry_point'),
        C = t.params.gameId,
        S = (0, f.io)('landing page'),
        O = (0, c.e7)([m.Z], () => m.Z.hasLoadedExperiments);
    if (
        (r.useEffect(() => {
            let { utm_source: e } = i.parse(n.search);
            (0, _.setUTMContext)({ utmSource: e }), (n.search = ''), (0, p.dL)(n);
        }, []),
        r.useEffect(() => {
            O && S && (0, g.HV)({ gameId: C });
        }, [C, O, S]),
        r.useEffect(() => {
            !O && s.Z.getExperiments();
        }, [O]),
        r.useEffect(() => {
            if (O) {
                if (!S) {
                    (0, p.dL)({ pathname: h.Z5c.GLOBAL_DISCOVERY });
                    return;
                }
                if (null == D)
                    (0, g.zY)({ gameId: C }),
                        l.Z.openNativeAppModal('discovery', h.Etm.DEEP_LINK, {
                            type: x.jE.DISCOVERY_GAME_RESULTS,
                            params: { gameId: C }
                        });
                else if (D === h.kEZ.OPEN_FAIL) {
                    if (!I) return;
                    if (!N) {
                        (0, p.dL)({ pathname: h.Z5c.GLOBAL_DISCOVERY_SERVERS });
                        return;
                    }
                    (0, p.dL)({
                        pathname: h.Z5c.GLOBAL_DISCOVERY_SERVERS,
                        search: '?game='.concat(C)
                    });
                }
            }
        }, [C, O, I, N, D, S]),
        D === h.kEZ.OPEN_FAIL && !I)
    )
        return (0, a.jsx)(b.Z, { gameId: C });
    let y = null == D || D === h.kEZ.OPENING;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: L.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: L.container,
                children: (0, a.jsx)(d.ZP, {
                    children: y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(d.Dx, { children: A.intl.string(A.t['Z+hCVV']) }), (0, a.jsx)(d.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(d.Dx, { children: A.intl.string(A.t.csrAMD) }), (0, a.jsx)(d.DK, { children: A.intl.string(A.t.ghBJz8) })]
                          })
                })
            })
        ]
    });
}
c.ZP.initialize();
