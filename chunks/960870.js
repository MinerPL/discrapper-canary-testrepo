n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(906732),
    s = n(353647),
    o = n(785717),
    l = n(221292);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, analyticsLocations: _ } = e,
        { context: E, trackUserProfileAction: f } = (0, o.KZ)(),
        { analyticsLocations: h } = (0, a.ZP)(),
        p = null != _ ? _ : h,
        I = (0, i.e7)([s.Z], () => s.Z.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            f({
                action: t,
                analyticsLocations: p
            }),
                (0, l.z7)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: I,
                    analyticsLocations: p,
                    ...E
                });
        },
        [f, E, n, u, d, c, I, p]
    );
}
