var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(481060), o = n(285952), c = n(548380), u = n(331651);
class d extends a.PureComponent {
    render() {
        let {
            title: e,
            description: t,
            agreement: n,
            disagreement: a,
            onAgree: l,
            onDisagree: d,
            imageClassName: h
        } = this.props;
        return (0, i.jsxs)(o.Z, {
            className: c.gatedContent,
            justify: o.Z.Justify.CENTER,
            align: o.Z.Align.CENTER,
            direction: o.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)('div', { className: s()(c.image, h) }),
                (0, i.jsx)('div', {
                    className: s()(c.title, u.marginBottom8),
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: s()(c.description, u.marginBottom20),
                    children: t
                }),
                (0, i.jsxs)(o.Z, {
                    justify: o.Z.Justify.CENTER,
                    align: o.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != a ? (0, i.jsx)(r.Button, {
                            className: c.action,
                            size: r.ButtonSizes.LARGE,
                            color: r.ButtonColors.PRIMARY,
                            onClick: d,
                            children: a
                        }) : null,
                        null != n ? (0, i.jsx)(r.Button, {
                            className: c.action,
                            color: r.Button.Colors.RED,
                            size: r.ButtonSizes.LARGE,
                            onClick: l,
                            children: n
                        }) : null
                    ]
                })
            ]
        });
    }
}
t.Z = d;
