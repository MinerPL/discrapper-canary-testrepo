"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return i
  },
  Shine: function() {
    return p
  },
  default: function() {
    return v
  }
});
var r, i, s = n("37983"),
  o = n("884691"),
  a = n("414456"),
  l = n.n(a),
  u = n("458960"),
  d = n("77078"),
  c = n("252744"),
  f = n("145131"),
  E = n("61435");
(r = i || (i = {})).DEFAULT = "default", r.SMALL = "small";
let h = {
    default: E.shineDefault,
    small: E.shineSmall
  },
  _ = {
    default: E.shineInnerDefault,
    small: E.shineInnerSmall
  };
class p extends o.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...r
    } = this.props;
    return (0, s.jsx)(u.default.div, {
      ...r,
      className: l(E.shineContainer, e, {
        [E.shinePaused]: n
      }),
      children: (0, s.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: h[t],
        children: (0, s.jsx)("div", {
          className: _[t]
        })
      })
    })
  }
}
p.defaultProps = {
  shineSize: "default"
};
let C = e => {
  let {
    children: t,
    className: n,
    disabled: r,
    submitting: i,
    pauseAnimation: a,
    shineSize: u = "default",
    shinePaused: f,
    buttonShineClassName: h,
    onlyShineOnHover: _,
    ...C
  } = e, v = o.createRef(), S = (0, c.default)(v), m = !r && !i && !0 !== a && (!_ || S);
  return (0, s.jsxs)(d.Button, {
    buttonRef: v,
    ...C,
    className: l(E.shinyButton, n),
    disabled: r,
    submitting: i,
    children: [t, m ? (0, s.jsx)(p, {
      shinePaused: f,
      className: l(E.buttonShine, _ ? E.onlyShineOnHover : void 0, h),
      shineSize: u
    }) : null]
  })
};
C.ShineSizes = i;
var v = C