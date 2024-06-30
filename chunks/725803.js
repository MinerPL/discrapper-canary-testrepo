n.d(t, {
    Z: function () {
        return o;
    }
}), n(47120);
var s = n(470079), a = n(442837), i = n(881052), r = n(728345), l = n(812206);
function o(e, t) {
    let n = (0, a.e7)([l.Z], () => l.Z.getGuildApplication(e, t)), [o, c] = s.useState(null == n), [d, u] = s.useState(), [_, E] = s.useState(!1), I = s.useCallback(async () => {
            if (null == n && null != e) {
                E(!0), c(!0);
                try {
                    await r.Z.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    u(new i.Hx(e));
                } finally {
                    c(!1);
                }
            }
        }, [
            n,
            t,
            e
        ]);
    return s.useEffect(() => {
        !_ && I();
    }, [
        _,
        I
    ]), {
        application: n,
        error: d,
        loading: o
    };
}
