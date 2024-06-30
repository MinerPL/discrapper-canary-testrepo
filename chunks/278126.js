n.d(t, {
    _: function () {
        return d;
    }
});
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(798949);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let c = Object.freeze({
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 4
});
class d extends (r = a.Component) {
    renderCircle() {
        let {
                strokeSize: e,
                percent: t,
                colorOverride: n,
                background: r
            } = this.props, a = Math.min(Math.max(t, 0), 100), o = (20 - e) / 2, u = o * Math.PI * 2;
        return (0, i.jsxs)('svg', {
            viewBox: '0 0 '.concat(20, ' ').concat(20),
            className: l.circle,
            children: [
                (0, i.jsx)('circle', {
                    className: l.circleBackgroundAlt,
                    cx: 10,
                    cy: 10,
                    r: 10
                }),
                (0, i.jsx)('circle', {
                    className: s()(l.circleBackground, r),
                    cx: 10,
                    cy: 10,
                    r: (20 - 2 * e) / 2
                }),
                (0, i.jsx)('circle', {
                    className: l.circleProgress,
                    cx: 10,
                    cy: 10,
                    r: o,
                    strokeWidth: ''.concat(e, 'px'),
                    strokeLinecap: 'round',
                    transform: 'rotate(-90 '.concat(10, ' ').concat(10, ')'),
                    stroke: null != n ? n : 'currentColor',
                    style: {
                        strokeDasharray: u,
                        strokeDashoffset: (1 - a / 100) * u
                    }
                })
            ]
        });
    }
    render() {
        let {
            className: e,
            children: t
        } = this.props;
        return (0, i.jsxs)('div', {
            className: s()(l.progressCircle, e),
            children: [
                this.renderCircle(),
                null != t ? (0, i.jsx)('div', {
                    className: l.circleOverlay,
                    children: t
                }) : null
            ]
        });
    }
}
u(d, 'StrokeSizes', c), u(d, 'defaultProps', { strokeSize: c.MEDIUM });
