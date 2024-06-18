"use strict";
n(47120);
var i, r, s = n(470079),
  o = n(112724);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e, t, n) {
  return Math.min(Math.max(Math.floor(e / t), 1), n)
}
t.Z = (0, o.Z)((r = class extends(i = s.Component) {
  static getDerivedStateFromProps(e, t) {
    let {
      width: n,
      desiredItemWidth: i,
      maxColumns: r
    } = e, s = l(n, i, r);
    return s !== t.columns ? {
      columns: s
    } : null
  }
  render() {
    let {
      width: e,
      height: t,
      children: n
    } = this.props, {
      columns: i
    } = this.state;
    return n(i, e, t)
  }
  constructor(...e) {
    super(...e), a(this, "state", {
      columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
    })
  }
}, a(r, "defaultProps", {
  desiredItemWidth: 200
}), r))