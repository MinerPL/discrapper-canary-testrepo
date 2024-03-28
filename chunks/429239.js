"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("806519"),
  i = n("525049"),
  r = n("486101");
let o = {};
t.default = e => {
  var t;
  let {
    backSrc: n,
    frontSrc: u,
    size: d,
    status: c,
    style: f,
    ...h
  } = e, {
    statusCenter: C,
    statusSizePx: p,
    frontAvatarOffsetPx: m,
    frontAvatarSizePx: g,
    backAvatarSizePx: E
  } = null !== (t = o[d]) && void 0 !== t ? t : function(e) {
    let t = e / (i.DIAGONAL_FACEPILE_AVATAR_PROPORTION + i.DIAGONAL_FACEPILE_MASK_OFFSET),
      n = t * i.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
      l = t * i.DIAGONAL_FACEPILE_MASK_OFFSET,
      a = i.DIAGONAL_FACEPILE_STATUS_TO_AVATAR_RATIO * n,
      s = l + n / 2,
      r = {
        statusCenter: s + n * i.DIAGONAL_FACEPILE_MASK_STATUS_OFFSET,
        statusSizePx: a,
        frontAvatarSizePx: n,
        backAvatarSizePx: t,
        frontAvatarOffsetPx: l,
        frontAvatarCenter: s
      };
    return o[e] = r, r
  }(d), S = (0, l.jsx)("img", {
    className: r.circularImage,
    src: u,
    alt: "",
    width: g,
    height: g
  }), _ = C - p / 2, I = null != c ? (0, l.jsx)(a.Status, {
    size: p,
    status: c,
    style: {
      position: "absolute",
      top: _,
      left: _
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
      height: E,
      width: E,
      mask: s.MaskIDs.DIAGONAL_FACEPILE_BACK_AVATAR_CUTOUT,
      children: (0, l.jsx)("img", {
        className: r.circularImage,
        src: n,
        alt: "",
        width: E,
        height: E
      })
    }), (0, l.jsx)("div", {
      style: {
        position: "absolute",
        top: m,
        left: m
      },
      children: null != c ? (0, l.jsx)(s.default, {
        mask: s.MaskIDs.DIAGONAL_FACEPILE_STATUS_CUTOUT,
        height: g,
        width: g,
        children: S
      }) : S
    }), I]
  })
}