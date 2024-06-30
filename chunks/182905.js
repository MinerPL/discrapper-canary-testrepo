var n = s(735250);
s(470079);
var l = s(120356), a = s.n(l), i = s(692547), r = s(481060), o = s(285952), d = s(294333);
t.Z = e => {
    let {
        className: t,
        icon: s,
        noticeText: l,
        buttonText: c,
        onClick: u,
        canSync: h
    } = e;
    return (0, n.jsx)(r.Card, {
        className: a()(t, d.card),
        children: (0, n.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, n.jsx)(s, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: i.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, n.jsx)('div', {
                    className: d.label,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: l
                    })
                }),
                h && (0, n.jsx)(r.Button, {
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    onClick: u,
                    children: c
                })
            ]
        })
    });
};
