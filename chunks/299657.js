n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    _ = n(179360),
    u = n(821849),
    E = n(232567),
    T = n(497321),
    I = n(100527),
    R = n(906732),
    g = n(211242),
    C = n(15640),
    N = n(89057),
    m = n(433811),
    p = n(214852),
    A = n(621853),
    f = n(246946),
    S = n(594174),
    h = n(78839),
    M = n(626135),
    x = n(111361),
    O = n(357355),
    b = n(937579),
    P = n(471309),
    v = n(827686),
    L = n(91802),
    Z = n(104494),
    D = n(639119),
    U = n(2359),
    B = n(132547),
    j = n(474936),
    G = n(981631),
    y = n(874296);
t.Z = function (e) {
    let { entrypoint: t = j.EZ.UserSettings } = e;
    (0, p.z)(m.X);
    let n = (0, g.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: w } = (0, R.ZP)(I.Z.PREMIUM_MARKETING),
        H = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
        k = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
        F = (0, D.N)(),
        V = (0, Z.Ng)(),
        W = (0, C.V)(),
        [K, Y] = a.useState(!0),
        z = a.useRef(0),
        Q = (0, x.M5)(k, j.p9.TIER_2),
        q = (0, L.n)(),
        J = null == q ? void 0 : q.countryCode,
        { enabled: X } = (0, P.Z)(),
        { enabled: $ } = (0, v.Z)(),
        ee = X && $,
        et = (0, l.e7)([A.Z], () => (null != k ? A.Z.getUserProfile(k.id) : null)),
        en = (0, l.e7)([O.Z], () => O.Z.hasFetched);
    if (
        (a.useEffect(() => {
            !en && d.MH();
        }, [en]),
        a.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, u.Y2)(J, null, G.JjL.DISCOVERY), null != k && ee && Q && (0, E.In)(k.id)]), (z.current = Date.now() - e), Y(!1);
            });
        }, [J, k, ee, Q]),
        a.useEffect(() => {
            n && (null != F || null != V) && (0, b.a)(F, V);
        }, [n, F, V]),
        a.useEffect(() => {
            !K &&
                M.default.track(G.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: z.current
                });
        }, [r, K]),
        (0, l.e7)([f.Z], () => f.Z.enabled))
    )
        return (0, s.jsx)(T.Z, {});
    if (n) return (0, s.jsx)(N.c8, {});
    if (t === j.EZ.ApplicationStoreHome && Q)
        return ee && null == et
            ? (0, s.jsx)('div', {
                  className: i()(y.container, y.loading),
                  children: (0, s.jsx)(o.Spinner, {})
              })
            : (0, s.jsx)(R.Gt, {
                  value: w,
                  children: (0, s.jsx)(B.Z, {})
              });
    return H && W && !K
        ? (0, s.jsx)(R.Gt, {
              value: w,
              children: (0, s.jsx)(U.Z, { entrypoint: t })
          })
        : (0, s.jsx)('div', {
              className: i()(y.container, y.loading),
              children: (0, s.jsx)(o.Spinner, {})
          });
};
