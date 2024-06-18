"use strict";
n.d(t, {
  ZX: function() {
    return A
  },
  gt: function() {
    return m
  },
  rH: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(735250),
  _ = n(470079),
  d = n(120356),
  c = n.n(d),
  E = n(748780),
  I = n(481060),
  T = n(727637),
  h = n(285952),
  S = n(385742);
(i = a || (a = {})).DEFAULT = "default", i.SMALL = "small";
let f = {
    default: S.shineDefault,
    small: S.shineSmall
  },
  N = {
    default: S.shineInnerDefault,
    small: S.shineInnerSmall
  };
class A extends(l = _.PureComponent) {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, u.jsx)(E.Z.div, {
      ...i,
      className: c()(S.shineContainer, e, {
        [S.shinePaused]: n
      }),
      children: (0, u.jsx)(h.Z, {
        align: h.Z.Align.CENTER,
        justify: h.Z.Justify.CENTER,
        className: f[t],
        children: (0, u.jsx)("div", {
          className: N[t]
        })
      })
    })
  }
}
o = {
  shineSize: "default"
}, (s = "defaultProps") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let m = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: r,
    pauseAnimation: s,
    shineSize: o = "default",
    shinePaused: a,
    buttonShineClassName: l,
    onlyShineOnHover: d,
    ...E
  } = e, h = _.createRef(), f = (0, T.Z)(h), N = !i && !r && !0 !== s && (!d || f);
  return (0, u.jsxs)(I.Button, {
    buttonRef: h,
    ...E,
    className: c()(S.shinyButton, n),
    disabled: i,
    submitting: r,
    children: [t, N ? (0, u.jsx)(A, {
      shinePaused: a,
      className: c()(S.buttonShine, d ? S.onlyShineOnHover : void 0, l),
      shineSize: o
    }) : null]
  })
};
m.ShineSizes = a