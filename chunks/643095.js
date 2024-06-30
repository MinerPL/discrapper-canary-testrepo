var l, s, a, i = t(735250), r = t(470079), o = t(120356), u = t.n(o), c = t(285952), d = t(840698);
function m(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
(l = s || (s = {})).WRAP = 'wrap', l.STACK = 'stack';
class E extends (a = r.PureComponent) {
    renderChildren() {
        let e;
        let {
            children: n,
            layout: t,
            columns: l
        } = this.props;
        switch (t) {
        case 'stack':
            e = '100%';
            break;
        case 'wrap':
            e = ''.concat(1 / l * 100, '%');
        }
        return n.map((n, t) => (0, i.jsx)(c.Z.Child, {
            className: d.tile,
            basis: e,
            grow: 0,
            children: n
        }, t));
    }
    render() {
        let {className: e} = this.props;
        return (0, i.jsx)(c.Z, {
            className: u()(e, d.grid),
            wrap: c.Z.Wrap.WRAP,
            children: this.renderChildren()
        });
    }
}
m(E, 'Layout', s), m(E, 'defaultProps', {
    children: [],
    layout: 'wrap',
    columns: 4
}), n.Z = E;
