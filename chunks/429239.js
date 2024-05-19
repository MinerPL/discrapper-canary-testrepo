"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("974674"),
  o = n("438784"),
  u = n("481060"),
  d = n("806519"),
  c = n("525049"),
  f = n("135775");
let h = {},
  m = 1 / 4;

function p(e) {
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
      width: t * c.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO
    },
    children: (0, a.jsx)(o.Dots, {
      className: f.dots,
      dotRadius: t * m
    })
  })
}

function E(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: l
  } = e, s = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
  return t ? (0, a.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, a.jsx)(p, {
      height: n.height,
      fillColor: s
    })
  }) : null != l ? (0, a.jsx)(u.Status, {
    size: n.height,
    status: l,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function C(e) {
  let {
    src: t,
    size: n
  } = e;
  return (0, a.jsx)("img", {
    className: f.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  })
}
let g = {
  [u.AvatarSizes.SIZE_16]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_16,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_16,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_16
  },
  [u.AvatarSizes.SIZE_20]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_20,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_20,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_20
  },
  [u.AvatarSizes.SIZE_24]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_24,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_24,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_24
  },
  [u.AvatarSizes.SIZE_32]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_32,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_32,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_40]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_32,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_32,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_48]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_40,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_40,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_40
  },
  [u.AvatarSizes.SIZE_56]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_56,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_56,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_56
  },
  [u.AvatarSizes.SIZE_80]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_80,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_80,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_80
  },
  [u.AvatarSizes.SIZE_120]: {
    default: d.MaskIDs.DIAGONAL_FACEPILE_120,
    typing: d.MaskIDs.DIAGONAL_FACEPILE_TYPING_120,
    status: d.MaskIDs.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.default = function(e) {
  var t, n, s;
  let {
    backSrc: o,
    frontSrc: m,
    size: p,
    isTyping: S,
    status: _,
    style: T,
    className: I,
    ...A
  } = e, {
    size: N
  } = u.AvatarSizeSpecs[p], {
    statusCoords: v,
    frontAvatarOffsetPx: x,
    frontAvatarSizePx: M,
    backAvatarSizePx: R
  } = l.useMemo(() => {
    var e;
    let t = "".concat(N, "-").concat(S);
    return null !== (e = h[t]) && void 0 !== e ? e : function(e, t, n) {
      let a = u.AvatarSizeSpecs[e],
        l = a.size / (c.DIAGONAL_FACEPILE_AVATAR_PROPORTION + c.DIAGONAL_FACEPILE_MASK_OFFSET),
        s = l * c.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
        i = l * c.DIAGONAL_FACEPILE_MASK_OFFSET,
        o = {
          statusCoords: (0, r.getStatusCoords)(a, u.StatusTypes.ONLINE, !1, t),
          frontAvatarSizePx: s,
          backAvatarSizePx: l,
          frontAvatarOffsetPx: i,
          frontAvatarCenter: i + s / 2
        };
      return h[n] = o, o
    }(p, S, t)
  }, [N, S, p]);
  let y = (t = null != _, n = S, s = p, n ? g[s].typing : t ? g[s].status : g[s].default);
  return (0, a.jsxs)("div", {
    style: {
      width: N,
      height: N,
      ...T
    },
    "aria-label": A["aria-label"],
    "aria-hidden": A["aria-hidden"],
    className: i()(f.container, I),
    children: [(0, a.jsxs)(d.default, {
      mask: y,
      height: N,
      width: N,
      children: [(0, a.jsx)("img", {
        src: o,
        alt: "",
        width: R,
        height: R
      }), (0, a.jsx)("div", {
        style: {
          position: "absolute",
          top: x,
          left: x
        },
        children: (0, a.jsx)(C, {
          src: m,
          size: M,
          isTyping: S,
          status: _
        })
      })]
    }), (0, a.jsx)(E, {
      statusCoords: v,
      status: _,
      isTyping: S
    })]
  })
}