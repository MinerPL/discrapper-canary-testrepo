n.d(t, {
    Z: function () {
        return u;
    }
}), n(47120), n(411104);
var a = n(735250), r = n(470079), i = n(442837), l = n(481060), s = n(607070), d = n(409302), o = n(474936);
function u(e) {
    let {
            giftStyle: t,
            className: n,
            shouldAnimate: u = !0,
            defaultAnimationState: c,
            idleAnimationState: f
        } = e, h = (0, i.e7)([s.Z], () => s.Z.useReducedMotion), [m, _] = r.useState(c), b = r.useRef((0, d._)(t, m)), [g, p] = r.useState(null == f), [k, x] = r.useState(!1), [C, E] = r.useState(-1), S = () => {
            b.current = (0, d._)(t, m), E(e => e + 1);
        }, O = () => {
            p(!1), x(!0), E(-1), _(c);
        };
    r.useEffect(() => {
        null == f && _(c);
    }, [
        f,
        c
    ]), r.useEffect(() => {
        if (null != f && C >= 0) {
            O();
            return;
        }
        S();
    }, [
        t,
        f
    ]), r.useEffect(() => {
        (!k || null == f) && S();
    }, [m]), r.useEffect(() => {
        k && (p(null == f), x(!1), S());
    }, [k]);
    if (!o.Cj.hasOwnProperty(t))
        throw Error('Unexpected giftStyle '.concat(t));
    return (0, a.jsx)(l.LottieAnimation, {
        importData: b.current,
        shouldAnimate: !h && u,
        className: n,
        versionKey: C,
        onComplete: null != f ? () => {
            null != f && (_(f), p(!0));
        } : void 0,
        loop: g
    });
}
