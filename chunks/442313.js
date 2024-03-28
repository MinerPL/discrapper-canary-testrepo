"use strict";
l.r(t);
var n, a, s = l("735250"),
  i = l("470079"),
  r = l("803997"),
  o = l.n(r),
  d = l("481060"),
  u = l("285952"),
  c = l("74669");

function f(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class m extends(n = i.PureComponent) {
  render() {
    let {
      scrollable: e,
      ...t
    } = this.props;
    return e ? (0, s.jsx)("aside", {
      className: c.sidebarScrollable,
      children: (0, s.jsx)(d.Scroller, {
        fade: !0,
        className: c.scroller,
        children: (0, s.jsx)(u.default.Child, {
          ...t,
          wrap: !0
        })
      })
    }) : (0, s.jsx)(u.default.Child, {
      ...t,
      wrap: !0
    })
  }
}
f(m, "defaultProps", {
  basis: 232,
  grow: 0,
  shrink: 0,
  className: c.sidebar
});
class I extends i.PureComponent {
  render() {
    let {
      className: e,
      ...t
    } = this.props;
    return (0, s.jsx)(u.default.Child, {
      className: o()(c.content, e),
      wrap: !0,
      ...t
    })
  }
}
class T extends(a = i.PureComponent) {
  render() {
    return (0, s.jsx)(u.default, {
      ...this.props
    })
  }
}
f(T, "defaultProps", {
  className: c.layout,
  direction: u.default.Direction.HORIZONTAL,
  justify: u.default.Justify.START,
  align: u.default.Align.START,
  wrap: u.default.Wrap.NO_WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto"
}), f(T, "Direction", u.default.Direction), f(T, "Justify", u.default.Justify), f(T, "Align", u.default.Align), f(T, "Wrap", u.default.Wrap), f(T, "Sidebar", m), f(T, "Content", I), t.default = T