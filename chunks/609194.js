"use strict";
l.r(r);
var t, n, s, a, i, o = l("735250"),
  c = l("470079"),
  d = l("120356"),
  u = l.n(d),
  p = l("285952"),
  m = l("35338");

function f(e, r, l) {
  return r in e ? Object.defineProperty(e, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = l, e
}(t = s || (s = {})).PRIMARY = "primary", t.SECONDARY = "secondary", t.WARNING = "warning", t.ERROR = "error", (n = a || (a = {})).SMALL = "small", n.LARGE = "large", n.NONE = "none";
let E = {
    primary: m.colorPrimary,
    secondary: m.colorSecondary,
    warning: m.colorWarning,
    error: m.colorError
  },
  N = {
    small: m.small,
    large: m.large,
    none: null
  };
class S extends(i = c.PureComponent) {
  render() {
    let {
      icon: e,
      color: r,
      children: l,
      iconSize: t,
      className: n,
      iconClassName: s
    } = this.props;
    return (0, o.jsxs)(p.default, {
      className: u()(m.note, E[r], n),
      align: p.default.Align.CENTER,
      children: [(0, o.jsx)(e, {
        className: u()(m.icon, N[t], s)
      }), (0, o.jsx)("div", {
        children: l
      })]
    })
  }
}
f(S, "Colors", s), f(S, "Sizes", a), r.default = S