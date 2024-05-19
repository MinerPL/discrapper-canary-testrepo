"use strict";
l.r(t);
var a, n, s, i = l("735250"),
  r = l("470079"),
  u = l("120356"),
  o = l.n(u),
  d = l("285952"),
  c = l("287651");

function f(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}(a = n || (n = {})).WRAP = "wrap", a.STACK = "stack";
class m extends(s = r.PureComponent) {
  renderChildren() {
    let e;
    let {
      children: t,
      layout: l,
      columns: a
    } = this.props;
    switch (l) {
      case "stack":
        e = "100%";
        break;
      case "wrap":
        e = "".concat(1 / a * 100, "%")
    }
    return t.map((t, l) => (0, i.jsx)(d.default.Child, {
      className: c.tile,
      basis: e,
      grow: 0,
      children: t
    }, l))
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)(d.default, {
      className: o()(e, c.grid),
      wrap: d.default.Wrap.WRAP,
      children: this.renderChildren()
    })
  }
}
f(m, "Layout", n), f(m, "defaultProps", {
  children: [],
  layout: "wrap",
  columns: 4
}), t.default = m