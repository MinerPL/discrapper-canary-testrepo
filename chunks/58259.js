n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var s = n(470079),
    a = n(479531),
    i = n(53365);
function r(e) {
    let [t, n] = s.useState(),
        [r, l] = s.useState(!1),
        [o, c] = s.useState(!1);
    return {
        error: t,
        loading: r,
        createEnableRequest: s.useCallback(async () => {
            if (null != e) {
                l(!0), n(void 0), c(!1);
                try {
                    await i.He(e), c(!0);
                } catch (e) {
                    n(new a.Z(e));
                } finally {
                    l(!1);
                }
            }
        }, [e]),
        submittedRequest: o
    };
}
