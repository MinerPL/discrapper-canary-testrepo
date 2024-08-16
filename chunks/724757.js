t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(470079),
    i = t(924826),
    o = t(442837),
    l = t(607070);
function u(e, n, t) {
    let u = (0, o.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        a = r.useCallback(
            (e) => {
                let t = document.querySelector(e),
                    r = n.current;
                null != t &&
                    null != r &&
                    (t.focus(),
                    r.scrollIntoViewNode({
                        node: t,
                        padding: 80
                    }));
            },
            [n]
        ),
        s = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = n.current;
                    if (null == t) return e();
                    t.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [n]
        ),
        c = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = n.current;
                    if (null == t) return e();
                    t.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [n]
        );
    return (0, i.ZP)({
        id: e,
        isEnabled: u,
        setFocus: a,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == t ? void 0 : t.orientation
    });
}
