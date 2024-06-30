s.d(o, {
    c2: function () {
        return m;
    },
    cK: function () {
        return t;
    }
});
var r, t, n, a, i = s(735250), c = s(470079), l = s(253483), d = s(655481);
function C(e, o, s) {
    return o in e ? Object.defineProperty(e, o, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = s, e;
}
(r = t || (t = {})).SIZE_40 = 'SIZE_40', r.SIZE_60 = 'SIZE_60';
let _ = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }), u = s(515695);
class f extends (n = c.PureComponent) {
    render() {
        let {
            className: e,
            text: o,
            ...s
        } = this.props;
        return (0, i.jsx)('div', {
            style: {
                padding: 8,
                borderRadius: 4,
                width: s.size,
                height: s.size,
                backgroundColor: s.bgColor
            },
            className: e,
            children: (0, i.jsx)(l.default, {
                value: o,
                level: 'M',
                ...s
            })
        });
    }
}
C(f, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class m extends (a = c.PureComponent) {
    render() {
        let {overlaySize: e} = this.props, o = _[null != e ? e : 'SIZE_40'];
        return (0, i.jsxs)('div', {
            className: d.qrCodeContainer,
            children: [
                (0, i.jsx)(f, { ...this.props }),
                (0, i.jsx)('div', {
                    className: d.qrCodeOverlay,
                    children: (0, i.jsx)('img', {
                        className: d[o],
                        src: u,
                        alt: ''
                    })
                })
            ]
        });
    }
}
C(m, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
}), o.ZP = f;
