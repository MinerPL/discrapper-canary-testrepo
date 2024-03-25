"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return p
  },
  EmptyStateText: function() {
    return j
  },
  default: function() {
    return l
  }
});
var a, l, s = n("37983"),
  r = n("884691"),
  i = n("414456"),
  o = n.n(i),
  u = n("819855"),
  d = n("77078"),
  c = n("145131"),
  m = n("49111"),
  f = n("177914"),
  h = n("890957");
let {
  Provider: x,
  Consumer: g
} = r.createContext(m.ThemeTypes.DARK);
class p extends r.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: a,
      offsetX: l,
      offsetY: r,
      style: i
    } = this.props;
    return (0, s.jsx)(g, {
      children: d => (0, s.jsx)(c.default.Child, {
        grow: 0,
        className: o(f.image, h.marginBottom40),
        style: {
          ...i,
          width: n,
          height: a,
          marginLeft: l,
          marginTop: r,
          backgroundImage: "url(".concat((0, u.isThemeDark)(d) ? t : e, ")")
        }
      })
    })
  }
}
let j = e => {
  let {
    children: t,
    className: n,
    noteClassName: a,
    note: l,
    style: r
  } = e;
  return (0, s.jsxs)(c.default.Child, {
    grow: 0,
    direction: c.default.Direction.VERTICAL,
    style: r,
    children: [null != t && (0, s.jsx)(d.H, {
      className: o(n, f.title),
      children: t
    }), null != l ? (0, s.jsx)("div", {
      className: o(a, f.text, h.marginTop8),
      children: l
    }) : null]
  })
};
(a = class extends r.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: a
    } = this.props;
    return (0, s.jsx)(x, {
      value: t,
      children: (0, s.jsx)(c.default, {
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        className: o(f.wrapper, n),
        style: a,
        children: e
      })
    })
  }
}).Text = j, a.Image = p, l = a