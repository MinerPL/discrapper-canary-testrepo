s.d(t, {
    Z: function () {
        return r;
    }
});
var n = s(735250);
s(470079);
var l = s(481060), a = s(285952), i = s(785102);
function r(e) {
    let {
        description: t,
        icon: s,
        id: r,
        label: o,
        onChange: d,
        value: c
    } = e;
    return (0, n.jsxs)('div', {
        className: i.cardContent,
        children: [
            (0, n.jsxs)(a.Z, {
                justify: a.Z.Justify.BETWEEN,
                align: a.Z.Align.CENTER,
                children: [
                    s,
                    (0, n.jsx)(a.Z.Child, {
                        grow: 1,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: o
                        })
                    }),
                    null != d && null != c ? (0, n.jsx)(l.Switch, {
                        id: r,
                        checked: c,
                        onChange: d
                    }) : null
                ]
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: i.cardDescription,
                children: t
            })
        ]
    });
}
