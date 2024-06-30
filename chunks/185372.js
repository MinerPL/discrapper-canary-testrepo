n.d(t, {
    OZ: function () {
        return p;
    },
    ox: function () {
        return h;
    },
    ub: function () {
        return m;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(780384), l = n(481060), u = n(285952), c = n(981631), d = n(954711), _ = n(331651);
let {
    Provider: E,
    Consumer: f
} = i.createContext(c.BRd.DARK);
class h extends i.PureComponent {
    render() {
        let {
            lightSrc: e,
            darkSrc: t,
            width: n,
            height: i,
            offsetX: a,
            offsetY: l,
            style: c
        } = this.props;
        return (0, r.jsx)(f, {
            children: E => (0, r.jsx)(u.Z.Child, {
                grow: 0,
                className: o()(d.image, _.marginBottom40),
                style: {
                    ...c,
                    width: n,
                    height: i,
                    marginLeft: a,
                    marginTop: l,
                    backgroundImage: 'url('.concat((0, s.wj)(E) ? t : e, ')')
                }
            })
        });
    }
}
let p = e => {
    let {
        children: t,
        className: n,
        noteClassName: i,
        note: a,
        style: s
    } = e;
    return (0, r.jsxs)(u.Z.Child, {
        grow: 0,
        direction: u.Z.Direction.VERTICAL,
        style: s,
        children: [
            null != t && (0, r.jsx)(l.H, {
                className: o()(n, d.title),
                children: t
            }),
            null != a ? (0, r.jsx)('div', {
                className: o()(i, d.text, _.marginTop8),
                children: a
            }) : null
        ]
    });
};
class m extends i.PureComponent {
    render() {
        let {
            children: e,
            theme: t,
            className: n,
            style: i
        } = this.props;
        return (0, r.jsx)(E, {
            value: t,
            children: (0, r.jsx)(u.Z, {
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                justify: u.Z.Justify.CENTER,
                className: o()(d.wrapper, n),
                style: i,
                children: e
            })
        });
    }
}
