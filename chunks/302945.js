n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    l = n(422034),
    u = n(182294),
    c = n(689938),
    d = n(603640);
function _(e) {
    let { affinities: t, className: n } = e,
        a = (e) => (null != e.globalName ? e.globalName : e.username),
        _ = i.useMemo(
            () =>
                t.length > 1
                    ? c.Z.Messages.NITRO_AFFINITY_UPSELL.format({
                          username: a(t[0]),
                          numFriends: t.length - 1
                      })
                    : '',
            [t]
        );
    if (t.length <= 1) return null;
    let E = t.map((e, n) =>
        (0, r.jsx)(
            l.O,
            {
                affinity: e,
                applyMask: n !== t.length - 1,
                size: u.EF.SIZE_20
            },
            e.id
        )
    );
    return (0, r.jsxs)('div', {
        className: s()(d.container, n),
        children: [
            (0, r.jsx)('div', {
                className: d.iconContainer,
                children: E
            }),
            (0, r.jsx)('div', {
                className: d.textContainer,
                children: (0, r.jsx)(o.x, {
                    variant: 'text-sm/medium',
                    children: _
                })
            })
        ]
    });
}
