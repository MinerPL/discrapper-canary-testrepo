"use strict";
n.r(t), n.d(t, {
  AnimatedAvatar: function() {
    return v
  },
  Avatar: function() {
    return g
  },
  getStatusCoords: function() {
    return N
  }
}), n("411104"), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("920906"),
  l = n("1561"),
  u = n("438784"),
  d = n("696826"),
  _ = n("981729"),
  c = n("806519"),
  E = n("51144"),
  I = n("182294"),
  T = n("981631"),
  f = n("419061"),
  S = n("689938"),
  h = n("275562");
let A = {
  tension: 1200,
  friction: 70
};

function m(e) {
  let {
    size: t,
    isMobile: n,
    isTyping: r,
    ...a
  } = e, s = (0, I.getAvatarSpecs)(t), o = s.status * (n && !r ? I.MOBILE_HEIGHT_RATIO : 1), l = s.status * (r ? I.TYPING_WIDTH_RATIO : 1), u = r ? (s.status * I.TYPING_WIDTH_RATIO - s.status) / 2 : 0, d = s.size - s.status - u - s.offset, _ = s.size - o - s.offset;
  return (0, i.jsx)("rect", {
    x: d,
    y: _,
    width: l,
    height: o,
    fill: "transparent",
    "aria-hidden": !0,
    ...a
  })
}

function N(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = (0, d.getStatusSize)(e.status, t, n, i),
    a = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
  return {
    ...r,
    x: a,
    y: e.size - r.height - e.offset
  }
}

function p(e, t, n, r) {
  let a = N(n, r, t, !1),
    s = (0, d.getStatusBackdropOpacity)(r, e);
  if (!t) {
    let t = a.height / 2 + n.stroke,
      r = a.x + n.status / 2;
    return (0, i.jsx)("circle", {
      style: {
        opacity: s
      },
      fill: e,
      r: t,
      cx: r,
      cy: r
    })
  }
  let o = a.height + 2 * n.stroke,
    l = a.width + 2 * n.stroke,
    u = a.x - n.stroke,
    _ = a.y - n.stroke;
  return (0, i.jsx)("rect", {
    fill: e,
    height: o,
    width: l,
    style: {
      opacity: s
    },
    x: u,
    y: _,
    rx: n.stroke
  })
}

function O(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: i,
    size: r
  } = e, a = n && !i && t === T.StatusTypes.ONLINE, s = (0, I.getAvatarSpecs)(r);
  return {
    ... function(e, t, n) {
      let {
        size: i,
        status: r,
        stroke: a,
        offset: s
      } = e, o = n ? r * I.TYPING_WIDTH_RATIO : r, l = t ? r * I.MOBILE_HEIGHT_RATIO : r;
      return {
        avatarCutoutX: i - o + (o - r) / 2 - a - s,
        avatarCutoutY: i - l - a - s,
        avatarCutoutWidth: o + 2 * a,
        avatarCutoutHeight: l + 2 * a,
        avatarCutoutRadius: t ? (l + 2 * a) * I.CUTOUT_BORDER_RADIUS : (r + 2 * a) / 2
      }
    }(s, a, i),
    ...(0, d.getStatusValues)({
      status: t,
      size: s.status,
      isMobile: a,
      isTyping: i,
      topOffset: 2,
      leftOffset: 6
    })
  }
}

function C(e) {
  let {
    children: t,
    size: n,
    onClick: r,
    onMouseDown: a,
    onKeyDown: o,
    onContextMenu: u,
    onMouseEnter: d,
    onMouseLeave: _,
    className: T,
    tabIndex: A,
    ariaLabel: m,
    ariaHidden: N,
    status: p,
    isMobile: O = !1,
    isTyping: C = !1,
    avatarDecoration: R,
    typingOffset: g,
    specs: L
  } = e, v = {
    width: (0, I.getAvatarSize)(n),
    height: (0, I.getAvatarSize)(n)
  }, D = null == m || N ? void 0 : function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? S.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
      label: e,
      status: (0, E.humanizeStatus)(t, n)
    }) : e
  }(m, p, O), M = L.size * f.DECORATION_TO_AVATAR_RATIO, y = function(e, t, n, i) {
    if (null == e) return null;
    if (i) switch (t) {
      case I.AvatarSizes.SIZE_16:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
      case I.AvatarSizes.SIZE_20:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
      case I.AvatarSizes.SIZE_24:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
      case I.AvatarSizes.SIZE_32:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
      case I.AvatarSizes.SIZE_40:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
      case I.AvatarSizes.SIZE_56:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
      case I.AvatarSizes.SIZE_80:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
      case I.AvatarSizes.SIZE_120:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
    }
    if (n) switch (t) {
      case I.AvatarSizes.SIZE_16:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
      case I.AvatarSizes.SIZE_20:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
      case I.AvatarSizes.SIZE_24:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
      case I.AvatarSizes.SIZE_32:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
      case I.AvatarSizes.SIZE_40:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
      case I.AvatarSizes.SIZE_56:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
      case I.AvatarSizes.SIZE_80:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
      case I.AvatarSizes.SIZE_120:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
    }
    switch (t) {
      case I.AvatarSizes.SIZE_16:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
      case I.AvatarSizes.SIZE_20:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
      case I.AvatarSizes.SIZE_24:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
      case I.AvatarSizes.SIZE_32:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
      case I.AvatarSizes.SIZE_40:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
      case I.AvatarSizes.SIZE_56:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
      case I.AvatarSizes.SIZE_80:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
      case I.AvatarSizes.SIZE_120:
        return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
    }
    return null
  }(p, n, O, C), P = null != R && (0, i.jsx)("svg", {
    width: M + g,
    height: M,
    viewBox: "0 0 ".concat(M + g, " ").concat(M),
    className: h.avatarDecoration,
    "aria-hidden": !0,
    children: (0, i.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: M,
      height: M,
      mask: null != y ? "url(#".concat(y, ")") : void 0,
      children: (0, i.jsx)("div", {
        className: h.avatarStack,
        children: (0, i.jsx)("img", {
          className: h.avatar,
          src: R,
          alt: " ",
          "aria-hidden": !0
        })
      })
    })
  });
  return null != r || null != a ? (0, i.jsxs)(l.Clickable, {
    className: s()(h.wrapper, h.pointer, T),
    style: v,
    onClick: r,
    tabIndex: A,
    onContextMenu: u,
    onMouseDown: a,
    onKeyDown: o,
    onMouseEnter: null != d ? d : void 0,
    onMouseLeave: null != _ ? _ : void 0,
    "aria-label": D,
    "aria-hidden": N,
    children: [t, P]
  }) : (0, i.jsxs)("div", {
    className: s()(h.wrapper, T),
    style: v,
    onContextMenu: null != u ? u : void 0,
    onMouseEnter: null != d ? d : void 0,
    onMouseLeave: null != _ ? _ : void 0,
    role: "img",
    "aria-label": D,
    "aria-hidden": N,
    children: [t, P]
  })
}

function R(e) {
  let {
    src: t,
    isSpeaking: n,
    className: r
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(h.avatarStack, r),
    children: [(0, i.jsx)("img", {
      src: null != t ? t : void 0,
      alt: " ",
      className: h.avatar,
      "aria-hidden": !0
    }), n && (0, i.jsx)("div", {
      className: h.avatarSpeaking
    })]
  }, t)
}

function g(e) {
  let {
    src: t,
    status: n,
    size: r,
    statusColor: a,
    isMobile: o = !1,
    isTyping: l = !1,
    typingIndicatorRef: f,
    isSpeaking: S = !1,
    statusTooltip: A = !1,
    statusTooltipDelay: m,
    statusBackdropColor: O,
    "aria-hidden": g = !1,
    "aria-label": L,
    imageClassName: v
  } = e, D = n !== T.StatusTypes.UNKNOWN ? n : null, M = (0, I.getAvatarSpecs)(r), y = null != D ? Math.ceil((M.status * I.TYPING_WIDTH_RATIO - M.status) / 2) : 0, P = M.size + y, U = (0, d.useStatusFillColor)(D, a);
  return (0, i.jsx)(C, {
    ...e,
    ariaLabel: L,
    ariaHidden: g,
    status: D,
    specs: M,
    typingOffset: y,
    children: (0, i.jsxs)("svg", {
      width: P,
      height: P,
      viewBox: "0 0 ".concat(P, " ").concat(P),
      className: s()(h.mask, h.svg),
      "aria-hidden": !0,
      children: [(0, i.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: M.size,
        height: M.size,
        mask: "url(#".concat(function(e, t, n, i) {
          if (null == e) return c.MaskIDs.AVATAR_DEFAULT;
          if (i) switch (t) {
            case I.AvatarSizes.SIZE_16:
              return c.MaskIDs.AVATAR_STATUS_TYPING_16;
            case I.AvatarSizes.SIZE_20:
              return c.MaskIDs.AVATAR_STATUS_TYPING_20;
            case I.AvatarSizes.SIZE_24:
              return c.MaskIDs.AVATAR_STATUS_TYPING_24;
            case I.AvatarSizes.SIZE_32:
              return c.MaskIDs.AVATAR_STATUS_TYPING_32;
            case I.AvatarSizes.SIZE_40:
              return c.MaskIDs.AVATAR_STATUS_TYPING_40;
            case I.AvatarSizes.SIZE_48:
              return c.MaskIDs.AVATAR_STATUS_TYPING_48;
            case I.AvatarSizes.SIZE_56:
              return c.MaskIDs.AVATAR_STATUS_TYPING_56;
            case I.AvatarSizes.SIZE_80:
              return c.MaskIDs.AVATAR_STATUS_TYPING_80;
            case I.AvatarSizes.SIZE_120:
              return c.MaskIDs.AVATAR_STATUS_TYPING_120
          }
          if (e === T.StatusTypes.ONLINE && n) switch (t) {
            case I.AvatarSizes.SIZE_16:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_16;
            case I.AvatarSizes.SIZE_20:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_20;
            case I.AvatarSizes.SIZE_24:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_24;
            case I.AvatarSizes.SIZE_32:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_32;
            case I.AvatarSizes.SIZE_40:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_40;
            case I.AvatarSizes.SIZE_48:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_48;
            case I.AvatarSizes.SIZE_56:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_56;
            case I.AvatarSizes.SIZE_80:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_80;
            case I.AvatarSizes.SIZE_120:
              return c.MaskIDs.AVATAR_STATUS_MOBILE_120
          }
          switch (t) {
            case I.AvatarSizes.SIZE_16:
              return c.MaskIDs.AVATAR_STATUS_ROUND_16;
            case I.AvatarSizes.SIZE_20:
              return c.MaskIDs.AVATAR_STATUS_ROUND_20;
            case I.AvatarSizes.SIZE_24:
              return c.MaskIDs.AVATAR_STATUS_ROUND_24;
            case I.AvatarSizes.SIZE_32:
              return c.MaskIDs.AVATAR_STATUS_ROUND_32;
            case I.AvatarSizes.SIZE_40:
              return c.MaskIDs.AVATAR_STATUS_ROUND_40;
            case I.AvatarSizes.SIZE_48:
              return c.MaskIDs.AVATAR_STATUS_ROUND_48;
            case I.AvatarSizes.SIZE_56:
              return c.MaskIDs.AVATAR_STATUS_ROUND_56;
            case I.AvatarSizes.SIZE_80:
              return c.MaskIDs.AVATAR_STATUS_ROUND_80;
            case I.AvatarSizes.SIZE_120:
              return c.MaskIDs.AVATAR_STATUS_ROUND_120
          }
          throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
        }(D, r, o, l), ")"),
        children: (0, i.jsx)(R, {
          src: t,
          isSpeaking: S,
          className: v
        })
      }), null != D ? (0, i.jsx)(_.Tooltip, {
        text: A ? (0, E.humanizeStatus)(D) : null,
        "aria-label": !1,
        position: "top",
        spacing: 5 + 1.5 * M.stroke,
        delay: m,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != O && p(O, o, M, D), (0, i.jsx)("rect", {
            ...e,
            ...N(M, D, o, l),
            fill: U,
            mask: "url(#".concat((0, d.getStatusMask)(D, o, l), ")"),
            className: h.pointerEvents
          }), l ? (0, i.jsx)(u.Dots, {
            ref: f,
            dotRadius: M.status / 4,
            x: M.size - 1.375 * M.status - M.offset,
            y: M.size - M.status / 1.333 - M.offset
          }) : null]
        })
      }) : null]
    })
  })
}

function L(e) {
  let {
    fromIsMobile: t = !0,
    fromStatus: n,
    fromColor: a,
    isMobile: l = !1,
    isTyping: c = !1,
    typingIndicatorRef: T,
    isSpeaking: f = !1,
    size: S,
    src: N,
    status: g,
    statusColor: L,
    statusTooltip: v = !1,
    statusTooltipDelay: D,
    statusBackdropColor: M,
    "aria-hidden": y = !1,
    "aria-label": P,
    imageClassName: U
  } = e, b = (0, d.useStatusFillColor)(g, L), G = r.useId(), w = r.useId(), [k] = r.useState(() => ({
    fill: a,
    ...O({
      size: S,
      status: n,
      isMobile: t,
      isTyping: !1
    })
  })), B = r.useMemo(() => ({
    fill: b,
    ...O({
      size: S,
      status: g,
      isMobile: l,
      isTyping: c
    })
  }), [b, S, g, l, c]), {
    avatarCutoutX: V,
    avatarCutoutY: x,
    avatarCutoutWidth: F,
    avatarCutoutHeight: H,
    avatarCutoutRadius: Y,
    fill: j,
    ...W
  } = (0, o.useSpring)({
    immediate: !document.hasFocus(),
    config: A,
    from: k,
    to: B
  }), K = (0, I.getAvatarSize)(S), z = (0, I.getAvatarSpecs)(S), Z = z.status * I.TYPING_WIDTH_RATIO, X = z.status * I.MOBILE_HEIGHT_RATIO, Q = null != g ? (z.status * I.TYPING_WIDTH_RATIO - z.status) / 2 : 0, q = z.size - z.status - Q - z.offset, J = z.size - X - z.offset, $ = z.size + Math.ceil(Q);
  return (0, i.jsx)(C, {
    ...e,
    ariaLabel: P,
    ariaHidden: y,
    typingOffset: Q,
    specs: z,
    children: (0, i.jsxs)("svg", {
      width: $,
      height: $,
      viewBox: "0 0 ".concat($, " ").concat($),
      className: s()(h.mask, h.svg),
      "aria-hidden": !0,
      children: [(0, i.jsxs)("mask", {
        id: G,
        width: K,
        height: K,
        children: [(0, i.jsx)("circle", {
          cx: K / 2,
          cy: K / 2,
          r: K / 2,
          fill: "white"
        }), (0, i.jsx)(o.animated.rect, {
          color: "black",
          x: V,
          y: x,
          width: F,
          height: H,
          rx: Y,
          ry: Y
        })]
      }), (0, i.jsx)("foreignObject", {
        className: h.__invalid_foreignObject,
        x: 0,
        y: 0,
        width: K,
        height: K,
        mask: "url(#".concat(G, ")"),
        children: (0, i.jsx)(R, {
          src: N,
          isSpeaking: f,
          className: U
        })
      }), (0, i.jsx)(_.Tooltip, {
        text: v ? (0, E.humanizeStatus)(g) : null,
        "aria-label": !1,
        position: "top",
        spacing: function(e, t, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
        }(z.status, z.stroke, l, c),
        delay: D,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != M && p(M, l, z, g), (0, i.jsxs)("svg", {
            x: q,
            y: J,
            width: Z,
            height: X,
            viewBox: "0 0 ".concat(Z, " ").concat(X),
            className: v ? h.cursorDefault : void 0,
            children: [(0, d.renderStatusMask)(W, z.status, w), (0, i.jsx)(o.animated.rect, {
              fill: j,
              width: Z,
              height: X,
              mask: "url(#".concat(w, ")")
            }), (0, i.jsx)(u.Dots, {
              ref: T,
              dotRadius: z.status / 4,
              x: .15 * Z,
              y: .5 * X,
              hide: !c
            })]
          }), (0, i.jsx)(m, {
            size: S,
            isMobile: l,
            isTyping: c,
            className: h.pointerEvents,
            ...e
          })]
        })
      })]
    })
  })
}
let v = r.memo(function(e) {
  var t, n, a, s, o;
  let {
    statusColor: l,
    status: u,
    ..._
  } = e, {
    isMobile: c = !1,
    isTyping: E = !1
  } = _, I = r.useRef(u), f = r.useRef(c), S = (0, d.useStatusFillColor)(u, l), h = r.useRef(S), A = r.useRef(!1);
  let m = A.current || (t = E, n = u, a = I.current, s = c, o = f.current, null != a && null != n && (!!t || n !== a || n === T.StatusTypes.ONLINE && s !== o || !1));
  return r.useLayoutEffect(() => {
    A.current = m, I.current = u, f.current = c, h.current = S
  }, [u, c, S, m]), null != u && null != I.current && m ? (0, i.jsx)(L, {
    ..._,
    status: u,
    statusColor: S,
    fromStatus: I.current,
    fromIsMobile: f.current,
    fromColor: h.current
  }) : (0, i.jsx)(g, {
    ..._,
    status: u,
    statusColor: S
  })
})