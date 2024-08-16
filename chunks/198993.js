o.d(s, {
    c2: function () {
        return m;
    },
    cK: function () {
        return t;
    }
});
var r,
    t,
    n,
    i,
    a = o(735250),
    c = o(470079),
    l = o(223972),
    d = o(363373);
function C(e, s, o) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = o),
        e
    );
}
((r = t || (t = {})).SIZE_40 = 'SIZE_40'), (r.SIZE_60 = 'SIZE_60');
let _ = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    u = o(515695);
class f extends (n = c.PureComponent) {
    render() {
        let { className: e, text: s, ...o } = this.props;
        return (0, a.jsx)('div', {
            style: {
                padding: 8,
                borderRadius: 4,
                width: o.size,
                height: o.size,
                backgroundColor: o.bgColor
            },
            className: e,
            children: (0, a.jsx)(l.default, {
                value: s,
                level: 'M',
                ...o
            })
        });
    }
}
C(f, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class m extends (i = c.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            s = _[null != e ? e : 'SIZE_40'];
        return (0, a.jsxs)('div', {
            className: d.qrCodeContainer,
            children: [
                (0, a.jsx)(f, { ...this.props }),
                (0, a.jsx)('div', {
                    className: d.qrCodeOverlay,
                    children: (0, a.jsx)('img', {
                        className: d[s],
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
}),
    (s.ZP = f);
