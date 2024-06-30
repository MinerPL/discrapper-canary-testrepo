var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(285952), u = n(61631);
class c extends i.PureComponent {
    render() {
        let {
            note: e,
            title: t,
            action: n,
            className: i
        } = this.props;
        return (0, r.jsx)('div', {
            className: o()(u.wrapper, i),
            children: (0, r.jsxs)(l.Z, {
                className: u.flexWrapper,
                direction: l.Z.Direction.VERTICAL,
                align: l.Z.Align.CENTER,
                justify: l.Z.Justify.CENTER,
                children: [
                    (0, r.jsx)(l.Z.Child, {
                        grow: 0,
                        className: u.image
                    }),
                    (0, r.jsxs)(l.Z.Child, {
                        grow: 0,
                        className: u.text,
                        children: [
                            (0, r.jsx)(s.H, {
                                className: u.title,
                                children: t
                            }),
                            null != e ? (0, r.jsx)('div', {
                                className: u.note,
                                children: e
                            }) : null
                        ]
                    }),
                    n
                ]
            })
        });
    }
}
t.Z = c;
