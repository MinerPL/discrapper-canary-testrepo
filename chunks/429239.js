"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("438784"),
  r = n("481060"),
  o = n("806519"),
  u = n("525049"),
  d = n("933379");
let c = {},
  f = 1 / 4;

function h(e) {
  let {
    height: t,
    fillColor: n
  } = e;
  return (0, a.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: n,
      height: t,
      width: t * u.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO
    },
    children: (0, a.jsx)(i.Dots, {
      className: d.dots,
      dotRadius: t * f
    })
  })
}

function m(e) {
  let {
    isTyping: t,
    statusHeightPx: n,
    statusCenterOffset: l,
    status: s
  } = e, i = (0, r.useStatusFillColor)(r.StatusTypes.ONLINE);
  if (t) {
    let e = n * u.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO;
    return (0, a.jsx)("div", {
      style: {
        position: "absolute",
        top: l - n / 2,
        left: l - e / 2
      },
      children: (0, a.jsx)(h, {
        height: n,
        fillColor: i
      })
    })
  }
  if (null != s) {
    let e = l - n / 2;
    return (0, a.jsx)(r.Status, {
      size: n,
      status: s,
      style: {
        position: "absolute",
        top: e,
        left: e
      }
    })
  }
  return null
}

function p(e) {
  let {
    src: t,
    size: n,
    isTyping: l,
    status: s
  } = e, i = (0, a.jsx)("img", {
    className: d.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  });
  return l ? (0, a.jsx)(o.default, {
    mask: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_CUTOUT,
    height: n,
    width: n,
    children: i
  }) : null != s ? (0, a.jsx)(o.default, {
    mask: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_CUTOUT,
    height: n,
    width: n,
    children: i
  }) : i
}
t.default = function(e) {
  var t;
  let {
    backSrc: n,
    frontSrc: l,
    size: i,
    status: r,
    isTyping: f,
    style: h,
    className: E,
    ...C
  } = e, {
    statusCenter: g,
    statusHeightPx: S,
    frontAvatarOffsetPx: _,
    frontAvatarSizePx: T,
    backAvatarSizePx: I
  } = null !== (t = c[i]) && void 0 !== t ? t : function(e) {
    let t = e / (u.DIAGONAL_FACEPILE_AVATAR_PROPORTION + u.DIAGONAL_FACEPILE_MASK_OFFSET),
      n = t * u.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
      a = t * u.DIAGONAL_FACEPILE_MASK_OFFSET,
      l = u.DIAGONAL_FACEPILE_STATUS_TO_AVATAR_RATIO * n,
      s = a + n / 2,
      i = {
        statusCenter: s + n * u.DIAGONAL_FACEPILE_MASK_STATUS_OFFSET,
        statusHeightPx: l,
        frontAvatarSizePx: n,
        backAvatarSizePx: t,
        frontAvatarOffsetPx: a,
        frontAvatarCenter: s
      };
    return c[e] = i, i
  }(i);
  return (0, a.jsxs)("div", {
    "aria-label": C["aria-label"],
    "aria-hidden": C["aria-hidden"],
    className: s()(d.container, E),
    style: {
      width: i,
      height: i,
      ...h
    },
    children: [(0, a.jsx)(o.default, {
      height: I,
      width: I,
      mask: o.MaskIDs.DIAGONAL_FACEPILE_BACK_AVATAR_CUTOUT,
      children: (0, a.jsx)("img", {
        className: d.circularImage,
        src: n,
        alt: "",
        width: I,
        height: I
      })
    }), (0, a.jsx)("div", {
      style: {
        position: "absolute",
        top: _,
        left: _
      },
      children: (0, a.jsx)(p, {
        src: l,
        size: T,
        isTyping: f,
        status: r
      })
    }), (0, a.jsx)(m, {
      status: r,
      isTyping: f,
      statusHeightPx: S,
      statusCenterOffset: g
    })]
  })
}