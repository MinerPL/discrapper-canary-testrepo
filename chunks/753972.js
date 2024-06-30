t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250), l = t(470079), a = t(120356), r = t.n(a), s = t(768581), o = t(689938), c = t(943119);
function u(e) {
    let {
            application: n,
            src: t,
            className: a,
            size: u,
            botIconFirst: d,
            fallbackAvatar: m
        } = e, p = l.useMemo(() => null != n ? s.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot,
            size: u,
            botIconFirst: d,
            fallbackAvatar: m
        }) : t, [
            n,
            t,
            u,
            d,
            m
        ]);
    return null == p ? null : (0, i.jsx)('img', {
        className: r()(c.icon, a),
        alt: o.Z.Messages.IMAGE,
        src: p,
        'aria-hidden': !0
    });
}
