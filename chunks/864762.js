t.d(a, {
    k: function () {
        return c;
    }
}), t(47120);
var n = t(470079), r = t(110924), s = t(626135), o = t(798930), l = t(981631);
function c(e, a) {
    let [t, c] = n.useState(o.O.LANDING), i = (0, r.Z)(t), [d, u] = n.useState(null), [x, N] = n.useState(null), h = n.useCallback(() => {
            switch (t) {
            case o.O.LANDING:
                c(o.O.PRE_CONNECT);
                break;
            case o.O.DISCORD_CONSENT:
                c(o.O.SUCCESS);
                break;
            case o.O.ERROR:
                c(o.O.PRE_CONNECT);
            }
        }, [t]), m = n.useCallback(() => {
            u(null), c(o.O.ERROR);
        }, []), C = n.useCallback(e => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
        }, []), j = n.useCallback(e => {
            u(null), N(e), c(o.O.DISCORD_CONSENT);
        }, []);
    return n.useEffect(() => {
        if (t !== i)
            s.default.track(l.rMx.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: i,
                current_step: t,
                platform_type: a
            });
    }, [
        t,
        i,
        e,
        a
    ]), {
        slide: t,
        gotoNext: h,
        gotoError: m,
        handleWaitingForConnection: C,
        handleAuthToken: j,
        expectedCallbackState: d,
        callbackData: x
    };
}
