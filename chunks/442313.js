var i, a, s = t(735250), l = t(470079), o = t(120356), r = t.n(o), c = t(481060), d = t(285952), u = t(876700);
function I(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
class m extends (i = l.PureComponent) {
    render() {
        let {
            scrollable: e,
            ...n
        } = this.props;
        return e ? (0, s.jsx)('aside', {
            className: u.sidebarScrollable,
            children: (0, s.jsx)(c.Scroller, {
                fade: !0,
                className: u.scroller,
                children: (0, s.jsx)(d.Z.Child, {
                    ...n,
                    wrap: !0
                })
            })
        }) : (0, s.jsx)(d.Z.Child, {
            ...n,
            wrap: !0
        });
    }
}
I(m, 'defaultProps', {
    basis: 232,
    grow: 0,
    shrink: 0,
    className: u.sidebar
});
class _ extends l.PureComponent {
    render() {
        let {
            className: e,
            ...n
        } = this.props;
        return (0, s.jsx)(d.Z.Child, {
            className: r()(u.content, e),
            wrap: !0,
            ...n
        });
    }
}
class N extends (a = l.PureComponent) {
    render() {
        return (0, s.jsx)(d.Z, { ...this.props });
    }
}
I(N, 'defaultProps', {
    className: u.layout,
    direction: d.Z.Direction.HORIZONTAL,
    justify: d.Z.Justify.START,
    align: d.Z.Align.START,
    wrap: d.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}), I(N, 'Direction', d.Z.Direction), I(N, 'Justify', d.Z.Justify), I(N, 'Align', d.Z.Align), I(N, 'Wrap', d.Z.Wrap), I(N, 'Sidebar', m), I(N, 'Content', _), n.ZP = N;
