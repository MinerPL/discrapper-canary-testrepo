"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(335607),
  l = n(961047);
let u = {
    VERTICAL: l.vertical,
    HORIZONTAL: a.horizontal,
    HORIZONTAL_REVERSE: a.horizontalReverse
  },
  _ = {
    START: l.justifyStart,
    END: l.justifyEnd,
    CENTER: l.justifyCenter,
    BETWEEN: l.justifyBetween,
    AROUND: l.justifyAround
  },
  d = {
    START: l.alignStart,
    END: l.alignEnd,
    CENTER: l.alignCenter,
    STRETCH: l.alignStretch,
    BASELINE: l.alignBaseline
  },
  c = {
    NO_WRAP: l.noWrap,
    WRAP: l.wrap,
    WRAP_REVERSE: l.wrapReverse
  },
  E = e => {
    let {
      children: t,
      className: n,
      shrink: s,
      grow: l,
      basis: u,
      style: _,
      wrap: d = !1,
      ...c
    } = e, E = {
      className: n = null != n ? n : a.flexChild,
      style: {
        flexGrow: l,
        flexShrink: s,
        flexBasis: u,
        ..._
      },
      ...c
    };
    if (!d && "string" != typeof t && 1 === r.Children.count(t)) {
      let e = r.Children.only(t);
      return E.style = {
        ...E.style,
        ...e.props.style
      }, E.className = o()(e.props.className, n), r.cloneElement(e, E)
    }
    return (0, i.jsx)("div", {
      ...E,
      children: t
    })
  };
E.defaultProps = {
  shrink: 1,
  grow: 1,
  basis: "auto",
  wrap: !1
};
let I = e => {
  let {
    children: t,
    className: n,
    direction: r = u.HORIZONTAL,
    justify: s = _.START,
    align: l = d.STRETCH,
    wrap: E = c.NO_WRAP,
    shrink: I,
    grow: T,
    basis: h,
    style: S,
    ...f
  } = e;
  return (0, i.jsx)("div", {
    style: {
      flexShrink: I,
      flexGrow: T,
      flexBasis: h,
      ...S
    },
    className: o()(a.flex, r, s, l, E, n),
    ...f,
    children: t
  })
};
I.defaultProps = {
  shrink: 1,
  grow: 1,
  basis: "auto"
}, I.Child = E, I.Direction = u, I.Align = d, I.Justify = _, I.Wrap = c, t.Z = I