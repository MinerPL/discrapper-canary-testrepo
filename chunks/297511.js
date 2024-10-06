n.r(t),
    n.d(t, {
        default: function () {
            return I;
        }
    });
var a = n(735250),
    r = n(470079),
    s = n(442837),
    i = n(893776),
    o = n(830064),
    c = n(388905),
    l = n(625128),
    d = n(362762),
    u = n(353926),
    m = n(571457),
    p = n(703656),
    _ = n(314897),
    x = n(963202),
    g = n(569234),
    b = n(981631),
    E = n(186901),
    f = n(689938),
    h = n(940956);
function I(e) {
    let { match: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getState('discovery')),
        I = (0, s.e7)([_.default], () => _.default.isAuthenticated()),
        N = (0, x.iN)('game_discovery_entry_point'),
        A = t.params.gameId,
        L = (0, x.io)('landing page'),
        v = (0, s.e7)([u.Z], () => u.Z.hasLoadedExperiments);
    if (
        (r.useEffect(() => {
            v && L && (0, m.HV)({ gameId: A });
        }, [A, v, L]),
        r.useEffect(() => {
            !v && i.Z.getExperiments();
        }, [v]),
        r.useEffect(() => {
            if (v) {
                if (!L) {
                    (0, p.dL)({ pathname: b.Z5c.GLOBAL_DISCOVERY });
                    return;
                }
                if (null == n)
                    (0, m.zY)({ gameId: A }),
                        l.Z.openNativeAppModal('discovery', b.Etm.DEEP_LINK, {
                            type: E.jE.DISCOVERY_GAME_RESULTS,
                            params: { gameId: A }
                        });
                else if (n === b.kEZ.OPEN_FAIL) {
                    if (!I) return;
                    if (!N) {
                        (0, p.dL)({ pathname: b.Z5c.GLOBAL_DISCOVERY_SERVERS });
                        return;
                    }
                    (0, p.dL)({
                        pathname: b.Z5c.GLOBAL_DISCOVERY_SERVERS,
                        search: '?game='.concat(A)
                    });
                }
            }
        }, [A, v, I, N, n, L]),
        n === b.kEZ.OPEN_FAIL && !I)
    )
        return (0, a.jsx)(g.Z, { gameId: A });
    let j = null == n || n === b.kEZ.OPENING;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: h.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: h.container,
                children: (0, a.jsx)(c.ZP, {
                    children: j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: f.Z.Messages.APP_OPENING }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: f.Z.Messages.APP_OPENED_TITLE }), (0, a.jsx)(c.DK, { children: f.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })]
                          })
                })
            })
        ]
    });
}
s.ZP.initialize();
