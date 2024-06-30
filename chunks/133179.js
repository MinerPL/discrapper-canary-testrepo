t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(735250);
t(470079);
var s = t(120356), a = t.n(s), i = t(481060), r = t(285952), o = t(946152);
function u(e) {
    let {
            source: n,
            selectedSource: t
        } = e, {
            id: s,
            name: u,
            url: c
        } = n, d = (null == t ? void 0 : t.id) === s;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(r.Z, {
            direction: r.Z.Direction.VERTICAL,
            justify: r.Z.Justify.CENTER,
            align: r.Z.Align.CENTER,
            children: [
                (0, l.jsx)(r.Z, {
                    justify: r.Z.Justify.CENTER,
                    align: r.Z.Align.CENTER,
                    children: (0, l.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(c, ')') },
                        className: a()(o.sourceThumbnail, { [o.selected]: d })
                    })
                }),
                (0, l.jsx)(i.Text, {
                    className: a()(o.sourceName, { [o.selected]: d }),
                    variant: 'text-sm/normal',
                    children: u
                })
            ]
        })
    });
}
