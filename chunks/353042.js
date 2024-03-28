"use strict";
n.r(t), n("653041"), n("47120");
var l, a = n("470079"),
  s = n("846519");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class r extends(l = a.Component) {
  componentDidMount() {
    this.update(), this._interval.start(this.props.updateInterval, this.update)
  }
  componentWillUnmount() {
    this._interval.stop()
  }
  calculateInitialDeltaBytes(e) {
    let {
      numUpdatesToShow: t,
      updateInterval: n,
      pointsToSmooth: l
    } = this.props, a = Date.now(), s = 0, i = 0, r = [], o = null != e[0] ? e[0].bytes : 0;
    for (; s < t + l; s++) {
      let t;
      let l = a - (s + 1) * n;
      for (; i < e.length;)
        if ((t = e[i]).timestamp > l) i++;
        else break;
      if (i === e.length) break;
      null != t && (r.push(o - t.bytes), o = t.bytes)
    }
    for (; s < t + l; s++) r.push(0);
    return r.reverse(), r
  }
  smoothDeltaBytes(e) {
    let {
      pointsToSmooth: t
    } = this.props, n = [];
    for (let l = 0; l < e.length - t; l++) {
      let a = 0;
      for (let n = 0; n < t; n++) a += e[l + n];
      n.push(a / t)
    }
    return n
  }
  render() {
    let {
      numUpdatesToShow: e,
      updateInterval: t,
      children: n
    } = this.props;
    return n(this.state.smoothedDeltaBytes, t, e)
  }
  constructor(e) {
    super(e), i(this, "_interval", new s.Interval), i(this, "update", () => {
      let {
        onUpdate: e,
        numUpdatesToShow: t,
        pointsToSmooth: n,
        updateInterval: l
      } = this.props, a = this.props.getHistoricalTotalBytes(), s = null != a[0] ? a[0].bytes : 0, i = [...this.state.deltaBytes.slice(1, t + n), s - this.state.lastTotalBytes];
      this.setState({
        deltaBytes: i,
        smoothedDeltaBytes: this.smoothDeltaBytes(i),
        lastTotalBytes: s
      }, () => null != e && e(l))
    });
    let t = this.props.getHistoricalTotalBytes(),
      n = this.calculateInitialDeltaBytes(t);
    this.state = {
      deltaBytes: n,
      smoothedDeltaBytes: this.smoothDeltaBytes(n),
      lastTotalBytes: null != t[0] ? t[0].bytes : 0
    }
  }
}
i(r, "defaultProps", {
  numUpdatesToShow: 30,
  updateInterval: 500,
  pointsToSmooth: 10
}), t.default = r