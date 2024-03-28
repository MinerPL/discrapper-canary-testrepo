"use strict";
l.r(r);
var t, s, n, a, i, o = l("735250"),
  c = l("470079"),
  d = l("803997"),
  u = l.n(d),
  p = l("285952"),
  m = l("531378");

function E(e, r, l) {
  return r in e ? Object.defineProperty(e, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = l, e
}(t = n || (n = {})).PRIMARY = "primary", t.SECONDARY = "secondary", t.WARNING = "warning", t.ERROR = "error", (s = a || (a = {})).SMALL = "small", s.LARGE = "large", s.NONE = "none";
let N = {
    primary: m.colorPrimary,
    secondary: m.colorSecondary,
    warning: m.colorWarning,
    error: m.colorError
  },
  f = {
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
      className: s,
      iconClassName: n
    } = this.props;
    return (0, o.jsxs)(p.default, {
      className: u()(m.note, N[r], s),
      align: p.default.Align.CENTER,
      children: [(0, o.jsx)(e, {
        className: u()(m.icon, f[t], n)
      }), (0, o.jsx)("div", {
        children: l
      })]
    })
  }
}
E(S, "Colors", n), E(S, "Sizes", a), r.default = S