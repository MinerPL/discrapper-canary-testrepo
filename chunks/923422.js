t.r(n), t(47120), t(757143);
var o = t(735250), r = t(470079), a = t(481060), c = t(239091), i = t(230711), l = t(493544), s = t(108843), u = t(100527), d = t(906732), _ = t(386506), S = t(366953), E = t(394644), m = t(606669), T = t(53432), I = t(74869), g = t(828064), b = t(308512), M = t(594791), f = t(393431), C = t(981631), p = t(689938);
n.default = (0, s.Z)(function (e) {
    let {
            webBuildOverride: n,
            onSelect: t
        } = e, [s, u] = r.useState(!1), R = (0, g.Z)(), Z = (0, b.Z)(), N = (0, T.Z)(), h = (0, m.Z)(), A = (0, f.Z)(), B = (0, M.Z)(), x = (0, I.Z)(), {analyticsLocations: G} = (0, d.ZP)(), O = r.useMemo(() => (0, S.j)(), []);
    async function k() {
        try {
            u(!0), await (0, _.bF)(), window.location.reload(!0);
        } catch (e) {
            u(!1);
        }
    }
    let v = e => {
            switch (e) {
            case C.oAB.GAMES:
                return R;
            case C.oAB.STREAMER_MODE:
                return Z;
            case C.oAB.APPEARANCE:
                return N;
            case C.oAB.ACCESSIBILITY:
                return h;
            case C.oAB.VOICE:
                return A;
            case C.oAB.TEXT:
                return B;
            case C.oAB.EXPERIMENTS:
                return x;
            default:
                return null;
            }
        }, D = (0, E.VO)().filter(e => {
            let {section: n} = e;
            return n !== l.ID.HEADER && n !== l.ID.CUSTOM && n !== l.ID.DIVIDER && 'logout' !== n;
        }).filter(e => null == e.predicate || e.predicate());
    return (0, o.jsx)(d.Gt, {
        value: G,
        children: (0, o.jsxs)(a.Menu, {
            navId: 'user-settings-cog',
            onClose: c.Zy,
            'aria-label': p.Z.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
            onSelect: t,
            children: [
                D.map(e => {
                    let {
                            section: n,
                            label: t,
                            onClick: r
                        } = e, c = n.replace(/\W/gi, '_');
                    return (0, o.jsx)(a.MenuItem, {
                        id: c,
                        label: t,
                        action: () => null != r ? r() : function (e, n) {
                            let t = Object.values(C.oAB).filter(n => n === e)[0];
                            null != t && i.Z.open(t, void 0, { analyticsLocations: n });
                        }(n, G),
                        children: v(n)
                    }, c);
                }),
                e.user.isStaff() && O.length > 0 ? (0, o.jsx)(a.MenuItem, {
                    label: 'Build overrides',
                    id: 'build_overrides',
                    children: (0, o.jsx)(a.MenuGroup, {
                        children: O.map(e => (0, o.jsx)(a.MenuRadioItem, {
                            id: 'input-'.concat(e.payload),
                            group: 'build_overrides',
                            label: e.id,
                            checked: (null == n ? void 0 : n.id) === e.id,
                            action: async () => {
                                if ((null == n ? void 0 : n.id) !== e.id)
                                    200 === (await (0, _.f0)(e.payload)).status && window.location.reload(!0);
                            }
                        }, 'input-'.concat(e.payload)))
                    })
                }) : null,
                null != n ? (0, o.jsx)(a.MenuGroup, {
                    children: (0, o.jsx)(a.MenuItem, {
                        id: 'clear-build-override',
                        disabled: s,
                        label: p.Z.Messages.CLEAR_BUILD_OVERRIDE,
                        action: k,
                        color: 'danger'
                    })
                }) : null
            ]
        })
    });
}, [
    u.Z.CONTEXT_MENU,
    u.Z.USER_SETTINGS_MENU
]);
