n.d(t, {
    Z: function () {
        return r;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(920906), s = n(481060);
function r(e) {
    let {
            children: t,
            className: n,
            flashKey: r
        } = e, o = (0, s.useToken)(s.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({ opacity: 1 }), c = (0, s.useToken)(s.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({ opacity: 0 }), [u, d] = (0, l.useSpring)(() => ({
            immediate: !0,
            from: { backgroundColor: o }
        }));
    return a.useEffect(() => {
        d({
            reset: !0,
            immediate: !0,
            to: { backgroundColor: o }
        }), d({
            delay: 1000,
            immediate: !1,
            to: { backgroundColor: c }
        });
    }, [
        r,
        d
    ]), (0, i.jsx)(l.animated.div, {
        style: u,
        className: n,
        children: t
    });
}
