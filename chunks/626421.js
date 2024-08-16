n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(399606),
    o = n(243778),
    c = n(914010),
    d = n(566840),
    u = n(921944),
    _ = n(85768);
let E = a.memo(function (e) {
    var t, n, s;
    let { state: l, markAsDismissed: o } = e,
        { name: c, guildId: d, boundingRect: u } = l,
        E = a.useMemo(
            () =>
                (function (e, t, n) {
                    return null;
                })(c, 0, 0),
            [c, d, o]
        );
    if (null == E) return null;
    return (0, i.jsx)('div', {
        className: r()(_.upsell, !(null != (t = u) && !(t.y < 0)) && _.hidden),
        style:
            ((n = c),
            null == (s = u)
                ? {}
                : {
                      top: s.top,
                      left: s.right - s.x
                  }),
        children: E
    });
});
function h() {
    let e = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        t = (0, d.Eg)(e),
        [n, a] = (0, o.US)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            u.R.SIDEBAR
        );
    if (null == n) return null;
    let s = t[n];
    return null == s
        ? null
        : (0, i.jsx)('div', {
              className: _.container,
              children: (0, i.jsx)(E, {
                  state: s,
                  markAsDismissed: a
              })
          });
}
