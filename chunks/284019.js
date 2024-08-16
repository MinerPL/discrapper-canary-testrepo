n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(603368),
    u = n(557017);
function c(e) {
    let { themeColor: t, color: n, className: a, ...c } = e,
        d = (0, o.useToken)(o.tokens.colors.BG_SURFACE_OVERLAY),
        _ = i.useMemo(() => (0, l.j1)(t, d.hex()), [t]);
    return (0, r.jsx)(o.Button, {
        ...c,
        style: _,
        className: s()(a, { [u.customButton]: null != _ }),
        color: null != _ ? o.Button.Colors.CUSTOM : n
    });
}
