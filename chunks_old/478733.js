"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("587974"),
  i = n("311310"),
  r = n("357793");
let o = {};
var u = e => {
  var t;
  let {
    backSrc: n,
    frontSrc: u,
    size: d,
    status: c,
    style: f,
    ...h
  } = e, {
    statusOffsetPx: C,
    statusSizePx: p,
    frontAvatarOffsetPx: m,
    frontAvatarSizePx: E,
    backAvatarSizePx: g
  } = null !== (t = o[d]) && void 0 !== t ? t : function(e) {
    let t = e / (i.DIAGONAL_FACEPILE_AVATAR_PROPORTION + i.DIAGONAL_FACEPILE_MASK_OFFSET),
      n = t * i.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
      l = t * i.DIAGONAL_FACEPILE_MASK_OFFSET,
      a = i.DIAGONAL_FACEPILE_STATUS_TO_AVATAR_RATIO * n,
      s = l + n / 2,
      r = s + n * i.DIAGONAL_FACEPILE_MASK_STATUS_OFFSET,
      u = {
        statusOffsetPx: r - a / 2,
        statusSizePx: a,
        frontAvatarSizePx: n,
        backAvatarSizePx: t,
        frontAvatarOffsetPx: l,
        frontAvatarCenter: s
      };
    return o[e] = u, u
  }(d), I = (0, l.jsx)("img", {
    className: r.circularImage,
    src: u,
    alt: "",
    width: E,
    height: E
  }), S = null != c ? (0, l.jsx)(a.Status, {
    size: p,
    status: c,
    style: {
      position: "absolute",
      top: C,
      left: C
    }
  }) : null;
  return (0, l.jsxs)("div", {
    "aria-label": h["aria-label"],
    "aria-hidden": h["aria-hidden"],
    className: r.container,
    style: {
      width: d,
      height: d,
      ...f
    },
    children: [(0, l.jsx)(s.default, {
      height: g,
      width: g,
      mask: s.MaskIDs.DIAGONAL_FACEPILE_BACK_AVATAR_CUTOUT,
      children: (0, l.jsx)("img", {
        className: r.circularImage,
        src: n,
        alt: "",
        width: g,
        height: g
      })
    }), (0, l.jsx)("div", {
      style: {
        position: "absolute",
        top: m,
        left: m
      },
      children: null != c ? (0, l.jsx)(s.default, {
        mask: s.MaskIDs.DIAGONAL_FACEPILE_STATUS_CUTOUT,
        height: E,
        width: E,
        children: I
      }) : I
    }), S]
  })
}