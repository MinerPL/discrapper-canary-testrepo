var n, a = s(735250), i = s(470079), r = s(120356), o = s.n(r), l = s(285952), c = s(32767);
function d(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class _ extends (n = i.PureComponent) {
    render() {
        let {
            children: e,
            className: t,
            onMouseEnter: s,
            onMouseLeave: n
        } = this.props;
        return (0, a.jsx)('div', {
            className: o()(c.card, t),
            onMouseEnter: s,
            onMouseLeave: n,
            children: e
        });
    }
}
d(_, 'Header', e => {
    let {
        children: t,
        className: s,
        splashArtURL: n
    } = e;
    return (0, a.jsxs)(l.Z, {
        className: o()(c.header, s),
        align: l.Z.Align.CENTER,
        children: [
            (0, a.jsx)('div', {
                className: c.splashArt,
                style: null != n ? { backgroundImage: 'url('.concat(n, ')') } : void 0
            }),
            t
        ]
    });
}), d(_, 'Body', e => {
    let {
        children: t,
        className: s
    } = e;
    return (0, a.jsx)('div', {
        className: o()(c.body, s),
        children: t
    });
}), t.Z = _;
