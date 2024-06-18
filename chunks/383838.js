"use strict";
n.d(t, {
  Dd: function() {
    return d
  },
  Sw: function() {
    return c
  },
  To: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(49800),
  a = n(285952),
  l = n(534542),
  u = n(512983),
  _ = n(723945);
let d = o.Z.Types,
  c = {
    LEFT: "left",
    RIGHT: "right"
  };

function E(e) {
  let t, n, {
      type: r = o.Z.Types.DANGER,
      imageData: d,
      button: E,
      className: I,
      iconClassName: T,
      title: h,
      body: S,
      style: f,
      align: N = a.Z.Align.START
    } = e,
    A = a.Z.Direction.HORIZONTAL;
  if (null != d) {
    let {
      position: e,
      ...n
    } = d;
    t = (0, i.jsx)(a.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, i.jsx)("img", {
        alt: "",
        className: s()(_.icon, T),
        ...n
      })
    }), e === c.RIGHT && (A = a.Z.Direction.HORIZONTAL_REVERSE)
  } else null != E && (n = E);
  let m = !0;
  return r === o.Z.Types.PRIMARY && (m = !1), (0, i.jsx)(o.Z, {
    className: s()(_.formNotice, I),
    type: r,
    style: f,
    children: (0, i.jsxs)(a.Z, {
      direction: A,
      align: N,
      children: [t, (0, i.jsxs)(a.Z.Child, {
        children: [null != h && "" !== h ? (0, i.jsx)(u.v, {
          tag: u.R.H5,
          className: s()(_.formNoticeTitle, {
            [_.whiteText]: m
          }),
          faded: !0,
          children: h
        }) : null, (0, i.jsx)(l.R, {
          className: s()(_.formNoticeBody, {
            [_.whiteText]: m
          }),
          children: S
        }), n]
      })]
    })
  })
}
E.Types = o.Z.Types