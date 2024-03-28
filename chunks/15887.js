"use strict";
s.r(t);
var a, n = s("735250"),
  l = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("285952"),
  d = s("762323");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class c extends(a = l.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: s,
      onMouseLeave: a
    } = this.props;
    return (0, n.jsx)("div", {
      className: r()(d.card, t),
      onMouseEnter: s,
      onMouseLeave: a,
      children: e
    })
  }
}
u(c, "Header", e => {
  let {
    children: t,
    className: s,
    splashArtURL: a
  } = e;
  return (0, n.jsxs)(o.default, {
    className: r()(d.header, s),
    align: o.default.Align.CENTER,
    children: [(0, n.jsx)("div", {
      className: d.splashArt,
      style: null != a ? {
        backgroundImage: "url(".concat(a, ")")
      } : void 0
    }), t]
  })
}), u(c, "Body", e => {
  let {
    children: t,
    className: s
  } = e;
  return (0, n.jsx)("div", {
    className: r()(d.body, s),
    children: t
  })
}), t.default = c