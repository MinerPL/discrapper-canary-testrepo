"use strict";
n.d(t, {
  OZ: function() {
    return h
  },
  ox: function() {
    return T
  },
  ub: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(780384),
  l = n(481060),
  u = n(285952),
  _ = n(981631),
  d = n(85391),
  c = n(611273);
let {
  Provider: E,
  Consumer: I
} = r.createContext(_.BRd.DARK);
class T extends r.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: r,
      offsetX: s,
      offsetY: l,
      style: _
    } = this.props;
    return (0, i.jsx)(I, {
      children: E => (0, i.jsx)(u.Z.Child, {
        grow: 0,
        className: o()(d.image, c.marginBottom40),
        style: {
          ..._,
          width: n,
          height: r,
          marginLeft: s,
          marginTop: l,
          backgroundImage: "url(".concat((0, a.wj)(E) ? t : e, ")")
        }
      })
    })
  }
}
let h = e => {
  let {
    children: t,
    className: n,
    noteClassName: r,
    note: s,
    style: a
  } = e;
  return (0, i.jsxs)(u.Z.Child, {
    grow: 0,
    direction: u.Z.Direction.VERTICAL,
    style: a,
    children: [null != t && (0, i.jsx)(l.H, {
      className: o()(n, d.title),
      children: t
    }), null != s ? (0, i.jsx)("div", {
      className: o()(r, d.text, c.marginTop8),
      children: s
    }) : null]
  })
};
class S extends r.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: r
    } = this.props;
    return (0, i.jsx)(E, {
      value: t,
      children: (0, i.jsx)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        align: u.Z.Align.CENTER,
        justify: u.Z.Justify.CENTER,
        className: o()(d.wrapper, n),
        style: r,
        children: e
      })
    })
  }
}