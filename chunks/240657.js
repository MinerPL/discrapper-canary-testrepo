t.d(A, {
    Z: function () {
        return c;
    }
});
var a = t(735250),
    n = t(470079),
    r = t(120356),
    s = t.n(r),
    o = t(481060),
    l = t(741914),
    i = t(40509),
    d = t(910212);
function c(e) {
    let { color: A, className: t, variant: r, text: c, lineClamp: u } = e,
        C = (0, o.usePrivateHeadingLevel)(),
        g = n.useMemo(
            () =>
                null == c
                    ? null
                    : (0, l.Z)(c, !0, {
                          allowHeading: null == u,
                          allowList: null == u,
                          initialHeaderLevel: C
                      }),
            [c, u, C]
        );
    return (0, a.jsx)(o.Text, {
        className: s()(t, d.markup, {
            [i.lineClamp2Plus]: null != u && u > 1,
            [i.lineClamp1]: 1 === u
        }),
        color: A,
        variant: r,
        lineClamp: u,
        children: g
    });
}
