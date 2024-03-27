"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return a
  },
  Shine: function() {
    return S
  },
  default: function() {
    return p
  }
});
var i, a, l = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("458960"),
  c = n("77078"),
  d = n("252744"),
  f = n("145131"),
  E = n("61435");
(i = a || (a = {})).DEFAULT = "default", i.SMALL = "small";
let _ = {
    default: E.shineDefault,
    small: E.shineSmall
  },
  h = {
    default: E.shineInnerDefault,
    small: E.shineInnerSmall
  };
class S extends s.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, l.jsx)(u.default.div, {
      ...i,
      className: o(E.shineContainer, e, {
        [E.shinePaused]: n
      }),
      children: (0, l.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: _[t],
        children: (0, l.jsx)("div", {
          className: h[t]
        })
      })
    })
  }
}
S.defaultProps = {
  shineSize: "default"
};
let m = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: a,
    pauseAnimation: r,
    shineSize: u = "default",
    shinePaused: f,
    buttonShineClassName: _,
    onlyShineOnHover: h,
    ...m
  } = e, p = s.createRef(), v = (0, d.default)(p), A = !i && !a && !0 !== r && (!h || v);
  return (0, l.jsxs)(c.Button, {
    buttonRef: p,
    ...m,
    className: o(E.shinyButton, n),
    disabled: i,
    submitting: a,
    children: [t, A ? (0, l.jsx)(S, {
      shinePaused: f,
      className: o(E.buttonShine, h ? E.onlyShineOnHover : void 0, _),
      shineSize: u
    }) : null]
  })
};
m.ShineSizes = a;
var p = m