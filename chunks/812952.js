"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var r, l, s, a, i = n("37983"),
  o = n("884691"),
  u = n("414456"),
  c = n.n(u),
  d = n("145131"),
  E = n("138592");
(r = s || (s = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
let _ = {
    primary: E.colorPrimary,
    secondary: E.colorSecondary,
    warning: E.colorWarning,
    error: E.colorError
  },
  f = {
    small: E.small,
    large: E.large,
    none: null
  };
class T extends o.PureComponent {
  render() {
    let {
      icon: e,
      color: t,
      children: n,
      iconSize: r,
      className: l,
      iconClassName: s
    } = this.props;
    return (0, i.jsxs)(d.default, {
      className: c(E.note, _[t], l),
      align: d.default.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: c(E.icon, f[r], s)
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  }
}
T.Colors = s, T.Sizes = a;
var I = T