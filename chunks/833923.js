"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("284679"),
  o = n("435491");
class u extends s.PureComponent {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: a,
      animate: s
    } = this.props, l = null == e || e.data !== t.data && !i.isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...a)), l || null == e || !e.animate && s || e.color !== this.props.color) {
      let e = r.hexToRgb(this.props.color);
      this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)"), window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)
    }
  }
  componentDidMount() {
    this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props)
  }
  componentDidUpdate(e) {
    this.onDataUpdate(e, this.props)
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0
  }
  render() {
    let {
      className: e,
      pixelWidth: t,
      pixelHeight: n
    } = this.props;
    return (0, a.jsx)("div", {
      className: e,
      children: (0, a.jsx)("canvas", {
        ref: this.canvas,
        className: o.canvas,
        width: t,
        height: n
      })
    })
  }
  constructor(...e) {
    super(...e), this.canvas = s.createRef(), this.updateAnimation = e => {
      let t, n;
      let a = this.canvas.current;
      if (null == a) return;
      let {
        data: s,
        updateInterval: l,
        color: i,
        numUpdatesToShow: o,
        lineWidth: u,
        animate: d,
        gradientStopColor: c
      } = this.props;
      if (s.length < 2) return;
      let f = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
        E = a.getContext("2d"),
        h = this.maxValue;
      E.strokeStyle = i, E.lineWidth = u;
      let _ = a.height - E.lineWidth,
        C = E.createLinearGradient(0, 0, 0, _);
      if (null != c) C.addColorStop(0, c);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = r.hexToRgb(i);
        C.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      C.addColorStop(1, this.fillColor), E.fillStyle = C;
      let S = s.length >= o ? o : s.length;
      E.setTransform(1, 0, 0, -1, 0, a.height), E.clearRect(0, 0, a.width, a.height), E.translate(0, .5 * E.lineWidth);
      let I = Math.floor(a.width / (S - 3)),
        m = .5 * I;
      E.translate(I - I * f, 0), E.beginPath();
      let p = -I;
      s.forEach((e, a) => {
        t = {
          x: p,
          y: _ * e / h
        }, 0 === a ? E.moveTo(t.x, t.y) : E.bezierCurveTo(n.x + m, n.y, t.x - m, t.y, t.x, t.y), n = t, p += I
      }), E.stroke(), E.lineTo(p - I, 0), E.lineTo(0, 0), E.fill(), d && f < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    }
  }
}
u.defaultProps = {
  animate: !0
};
var d = u