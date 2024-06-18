"use strict";
var l, s, a, i = n(735250),
  r = n(470079),
  o = n(120356),
  u = n.n(o),
  c = n(285952),
  d = n(287651);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {})).WRAP = "wrap", l.STACK = "stack";
class E extends(a = r.PureComponent) {
  renderChildren() {
    let e;
    let {
      children: t,
      layout: n,
      columns: l
    } = this.props;
    switch (n) {
      case "stack":
        e = "100%";
        break;
      case "wrap":
        e = "".concat(1 / l * 100, "%")
    }
    return t.map((t, n) => (0, i.jsx)(c.Z.Child, {
      className: d.tile,
      basis: e,
      grow: 0,
      children: t
    }, n))
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsx)(c.Z, {
      className: u()(e, d.grid),
      wrap: c.Z.Wrap.WRAP,
      children: this.renderChildren()
    })
  }
}
m(E, "Layout", s), m(E, "defaultProps", {
  children: [],
  layout: "wrap",
  columns: 4
}), t.Z = E