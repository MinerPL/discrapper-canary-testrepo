n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), s = n(470079), o = n(392711), a = n(399606), l = n(351780), r = n(576125), c = n(465858), u = n(112843), d = n(524484);
function h(e) {
    let {
            reactionRef: t,
            count: n
        } = e, i = s.useRef(n), r = (0, a.e7)([l.Z], () => l.Z.getState()), d = (0, u.Z)(), h = (0, c.Z)(t);
    return s.useEffect(() => {
        if (n > i.current && null != h) {
            let e = (0, o.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
            d.fire(h.x, h.y, { count: e });
        }
        i.current = n;
    }, [
        n,
        h,
        d,
        r.confettiCount
    ]), null;
}
function m(e) {
    return (0, i.jsx)(r.Z, {
        confettiLocation: d.Hn.REACTION,
        children: (0, i.jsx)(h, { ...e })
    });
}
