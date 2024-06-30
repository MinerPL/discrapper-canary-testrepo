n.r(t);
var o = n(735250), a = n(470079), c = n(442837), i = n(37234), r = n(230711), l = n(410575), s = n(503089), u = n(110924), d = n(100527), _ = n(367907), b = n(906732), S = n(254901), g = n(45493), f = n(332473), m = n(113434), T = n(663389), E = n(210887), I = n(128277), C = n(394644), N = n(295545), R = n(839469), k = n(981631), p = n(689938);
let Z = a.forwardRef(function () {
    g.Z.trackExposure({ location: 'cd25e4_1' }), S.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), S.Z.trackExposure({ location: 'user_setting_manual' });
    let e = (0, c.e7)([E.Z], () => E.Z.theme), t = (0, c.e7)([E.Z], () => E.Z.darkSidebar ? k.BRd.DARK : void 0), {
            section: n,
            subsection: Z,
            analyticsLocation: B,
            analyticsLocations: G
        } = (0, c.cj)([T.Z], () => {
            let e = T.Z.getSection(), t = T.Z.getSubsection(), {
                    analyticsLocation: n,
                    analyticsLocations: o
                } = T.Z.getProps();
            return {
                section: e,
                subsection: t,
                analyticsLocation: n,
                analyticsLocations: o
            };
        }), h = (0, u.Z)(n), A = (0, u.Z)(Z), P = (0, I.Z7)(), {analyticsLocations: M} = (0, b.ZP)(d.Z.USER_SETTINGS);
    a.useEffect(() => {
        if (!!(null != n && (n !== h || Z !== A)))
            !function (e) {
                let {
                    destinationPane: t,
                    originPane: n = null,
                    source: o = null,
                    subsection: a = null,
                    locationStack: c = null,
                    searchQuery: i = null
                } = e;
                _.ZP.trackWithMetadata(k.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: 'user',
                    origin_pane: n,
                    destination_pane: t,
                    location_stack: c,
                    source: o,
                    subsection: a,
                    search_query: i
                });
            }({
                destinationPane: n,
                originPane: null != h ? h : null,
                source: B,
                subsection: Z,
                locationStack: G,
                searchQuery: '' !== P ? P : null
            });
    }, [
        n,
        h,
        Z,
        A,
        B,
        G,
        P
    ]);
    let x = (0, N.eA)({ location: 'user_settings' }), {
            hasSearchResults: U,
            searchResults: O
        } = (0, R.E)(), D = a.useMemo(() => x && U, [
            x,
            U
        ]), W = (0, C.VO)(), v = (0, C.q8)(O), H = a.useMemo(() => D ? v : W, [
            D,
            v,
            W
        ]), w = (0, f.b)(), y = (0, m.iO)(), L = a.useCallback(e => {
            r.Z.setSection(e);
        }, []);
    return (0, o.jsx)(b.Gt, {
        value: M,
        children: (0, o.jsx)(l.Z, {
            root: !0,
            page: k.ZY5.USER_SETTINGS,
            children: (0, o.jsx)(s.ZP, {
                theme: e,
                title: p.Z.Messages.USER_SETTINGS,
                sidebarTheme: t,
                section: n,
                onSetSection: L,
                onClose: i.xf,
                sections: H,
                isEligibleForPomelo: w,
                questsForBadge: y,
                isUserSettingsSearchEnabled: x
            })
        })
    });
});
t.default = a.forwardRef(function () {
    let e = (0, c.e7)([T.Z], () => T.Z.getProps().analyticsLocations), {analyticsLocations: t} = (0, b.ZP)(e);
    return (0, o.jsx)(b.Gt, {
        value: t,
        children: (0, o.jsx)(Z, {})
    });
});
