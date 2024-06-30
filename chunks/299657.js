n(47120);
var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(442837), o = n(481060), c = n(570140), d = n(355467), _ = n(179360), u = n(821849), E = n(497321), T = n(100527), I = n(906732), R = n(211242), C = n(15640), p = n(89057), g = n(246946), A = n(594174), m = n(78839), N = n(626135), f = n(111361), S = n(357355), h = n(937579), M = n(91802), x = n(104494), O = n(639119), b = n(2359), P = n(132547), L = n(474936), v = n(981631), Z = n(904422);
t.Z = function (e) {
    let {
            entrypoint: t = L.EZ.UserSettings
        } = e, n = (0, R.Q)(), {
            sourceAnalyticsLocations: r,
            analyticsLocations: D
        } = (0, I.ZP)(T.Z.PREMIUM_MARKETING), B = (0, l.e7)([m.ZP], () => m.ZP.hasFetchedSubscriptions()), j = (0, l.e7)([A.default], () => A.default.getCurrentUser()), U = (0, O.N)(), G = (0, x.Ng)(), y = (0, C.V)(), [H, k] = a.useState(!0), w = a.useRef(0), F = (0, f.M5)(j, L.p9.TIER_2), V = (0, M.n)(), W = null == V ? void 0 : V.countryCode, K = (0, l.e7)([S.Z], () => S.Z.hasFetched);
    return (a.useEffect(() => {
        !K && d.MH();
    }, [K]), a.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([
                d.jg(),
                (0, _.X8)(),
                d.tZ(),
                (0, u.Y2)(W, null, v.JjL.DISCOVERY)
            ]), w.current = Date.now() - e, k(!1);
        });
    }, [W]), a.useEffect(() => {
        n && (null != U || null != G) && (0, h.ab)(U, G);
    }, [
        n,
        U,
        G
    ]), a.useEffect(() => {
        !H && N.default.track(v.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: r,
            load_duration_ms: w.current
        });
    }, [
        r,
        H
    ]), (0, l.e7)([g.Z], () => g.Z.enabled)) ? (0, s.jsx)(E.Z, {}) : n ? (0, s.jsx)(p.c8, {}) : t === L.EZ.ApplicationStoreHome && F ? (0, s.jsx)(I.Gt, {
        value: D,
        children: (0, s.jsx)(P.Z, {})
    }) : B && y && !H ? (0, s.jsx)(I.Gt, {
        value: D,
        children: (0, s.jsx)(b.Z, { entrypoint: t })
    }) : (0, s.jsx)('div', {
        className: i()(Z.container, Z.loading),
        children: (0, s.jsx)(o.Spinner, {})
    });
};
