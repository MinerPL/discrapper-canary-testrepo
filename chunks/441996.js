n(47120);
var i, s = n(735250), a = n(470079), r = n(392711), l = n.n(r), o = n(302221), c = n(513734);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class u extends (i = a.PureComponent) {
    onDataUpdate(e, t) {
        let {
                maxValue: n,
                data: i,
                animate: s
            } = this.props, a = null == e || e.data !== t.data && !l().isEqual(e.data, t.data);
        if (a && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...i)), a || null == e || !e.animate && s || e.color !== this.props.color) {
            let e = o.oo(this.props.color);
            this.fillColor = 'rgba('.concat(e.r, ', ').concat(e.g, ', ').concat(e.b, ', 0.5)'), window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation);
        }
    }
    componentDidMount() {
        this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props);
    }
    componentDidUpdate(e) {
        this.onDataUpdate(e, this.props);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0;
    }
    render() {
        let {
            className: e,
            pixelWidth: t,
            pixelHeight: n
        } = this.props;
        return (0, s.jsx)('div', {
            className: e,
            children: (0, s.jsx)('canvas', {
                ref: this.canvas,
                className: c.canvas,
                width: t,
                height: n
            })
        });
    }
    constructor(...e) {
        super(...e), d(this, 'dataChangedAt', void 0), d(this, 'fillColor', void 0), d(this, 'maxValue', void 0), d(this, 'canvas', a.createRef()), d(this, 'animationFrameRequestId', void 0), d(this, 'updateAnimation', e => {
            let t, n;
            let i = this.canvas.current;
            if (null == i)
                return;
            let {
                data: s,
                updateInterval: a,
                color: r,
                numUpdatesToShow: l,
                lineWidth: c,
                animate: d,
                gradientStopColor: u
            } = this.props;
            if (s.length < 2)
                return;
            let _ = Math.max(Math.min((e - this.dataChangedAt) / a, 1), 0), E = i.getContext('2d'), h = this.maxValue;
            E.strokeStyle = r, E.lineWidth = c;
            let I = i.height - E.lineWidth, m = E.createLinearGradient(0, 0, 0, I);
            if (null != u)
                m.addColorStop(0, u);
            else {
                let {
                    r: e,
                    g: t,
                    b: n
                } = o.oo(r);
                m.addColorStop(0, 'rgba('.concat(e, ', ').concat(t, ', ').concat(n, ', 0)'));
            }
            m.addColorStop(1, this.fillColor), E.fillStyle = m;
            let p = s.length >= l ? l : s.length;
            E.setTransform(1, 0, 0, -1, 0, i.height), E.clearRect(0, 0, i.width, i.height), E.translate(0, 0.5 * E.lineWidth);
            let g = Math.floor(i.width / (p - 3)), T = 0.5 * g;
            E.translate(g - g * _, 0), E.beginPath();
            let S = -g;
            s.forEach((e, i) => {
                t = {
                    x: S,
                    y: I * e / h
                }, 0 === i ? E.moveTo(t.x, t.y) : E.bezierCurveTo(n.x + T, n.y, t.x - T, t.y, t.x, t.y), n = t, S += g;
            }), E.stroke(), E.lineTo(S - g, 0), E.lineTo(0, 0), E.fill(), d && _ < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
        });
    }
}
d(u, 'defaultProps', { animate: !0 }), t.Z = u;
