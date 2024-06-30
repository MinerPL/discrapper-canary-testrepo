n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250), a = n(470079), l = n(576125), s = n(465858), r = n(112843), o = n(524484);
function c(e) {
    let {
            callTileRef: t,
            isFiring: n
        } = e, i = (0, r.Z)(), l = (0, s.Z)(t);
    return a.useEffect(() => {
        n && null != l && null != t && i.fire(l.x + t.clientWidth / 2, l.y + t.clientHeight / 2, { countMultiplier: 4 });
    }, [
        t,
        i,
        n,
        l
    ]), null;
}
function u(e) {
    return (0, i.jsx)(l.Z, {
        confettiLocation: o.Hn.CALL_TILE,
        children: (0, i.jsx)(c, { ...e })
    });
}
