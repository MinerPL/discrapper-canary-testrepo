n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(470079),
    s = n(924826);
function r(e) {
    let { listRef: t, padding: n, channel: r, isEnabled: l } = e,
        i = a.useCallback(
            (e) => {
                let a = t.current,
                    s = document.querySelector(e);
                null != s &&
                    (null == a ||
                        a.scrollIntoViewNode({
                            node: s,
                            padding: n,
                            callback: () => {
                                var t;
                                null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                            }
                        }));
            },
            [n]
        ),
        o = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            []
        ),
        c = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            []
        );
    return (0, s.ZP)({
        id: 'forum-channel-list-'.concat(r.id),
        isEnabled: l,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: i
    });
}
