var l, o, t, s, a, c = n(735250), i = n(470079), d = n(120356), u = n.n(d), p = n(285952), _ = n(927422);
function m(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e;
}
(l = t || (t = {})).PRIMARY = 'primary', l.SECONDARY = 'secondary', l.WARNING = 'warning', l.ERROR = 'error', (o = s || (s = {})).SMALL = 'small', o.LARGE = 'large', o.NONE = 'none';
let f = {
        primary: _.colorPrimary,
        secondary: _.colorSecondary,
        warning: _.colorWarning,
        error: _.colorError
    }, N = {
        small: _.small,
        large: _.large,
        none: null
    };
class h extends (a = i.PureComponent) {
    render() {
        let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: o,
            iconClassName: t
        } = this.props;
        return (0, c.jsxs)(p.Z, {
            className: u()(_.note, f[r], o),
            align: p.Z.Align.CENTER,
            children: [
                (0, c.jsx)(e, {
                    className: u()(_.icon, N[l], t),
                    color: 'currentColor'
                }),
                (0, c.jsx)('div', { children: n })
            ]
        });
    }
}
m(h, 'Colors', t), m(h, 'Sizes', s), r.Z = h;
