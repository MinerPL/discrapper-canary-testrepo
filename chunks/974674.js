"use strict";
n.d(t, {
  Vq: function() {
    return m
  },
  Xo: function() {
    return v
  },
  qE: function() {
    return g
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(1561),
  u = n(438784),
  _ = n(696826),
  d = n(981729),
  c = n(806519),
  E = n(51144),
  I = n(182294),
  T = n(981631),
  h = n(419061),
  S = n(689938),
  f = n(275562);
let N = {
  tension: 1200,
  friction: 70
};

function A(e) {
  let {
    size: t,
    isMobile: n,
    isTyping: r,
    ...s
  } = e, o = (0, I.UC)(t), a = o.status * (n && !r ? I.EW : 1), l = o.status * (r ? I.D6 : 1), u = r ? (o.status * I.D6 - o.status) / 2 : 0, _ = o.size - o.status - u - o.offset, d = o.size - a - o.offset;
  return (0, i.jsx)("rect", {
    x: _,
    y: d,
    width: l,
    height: a,
    fill: "transparent",
    "aria-hidden": !0,
    ...s
  })
}

function m(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = (0, _.W5)(e.status, t, n, i),
    s = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
  return {
    ...r,
    x: s,
    y: e.size - r.height - e.offset
  }
}

function O(e, t, n, r) {
  let s = m(n, r, t, !1),
    o = (0, _.lm)(r, e);
  if (!t) {
    let t = s.height / 2 + n.stroke,
      r = s.x + n.status / 2;
    return (0, i.jsx)("circle", {
      style: {
        opacity: o
      },
      fill: e,
      r: t,
      cx: r,
      cy: r
    })
  }
  let a = s.height + 2 * n.stroke,
    l = s.width + 2 * n.stroke,
    u = s.x - n.stroke,
    d = s.y - n.stroke;
  return (0, i.jsx)("rect", {
    fill: e,
    height: a,
    width: l,
    style: {
      opacity: o
    },
    x: u,
    y: d,
    rx: n.stroke
  })
}

function R(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: i,
    size: r
  } = e, s = n && !i && t === T.Skl.ONLINE, o = (0, I.UC)(r);
  return {
    ... function(e, t, n) {
      let {
        size: i,
        status: r,
        stroke: s,
        offset: o
      } = e, a = n ? r * I.D6 : r, l = t ? r * I.EW : r;
      return {
        avatarCutoutX: i - a + (a - r) / 2 - s - o,
        avatarCutoutY: i - l - s - o,
        avatarCutoutWidth: a + 2 * s,
        avatarCutoutHeight: l + 2 * s,
        avatarCutoutRadius: t ? (l + 2 * s) * I.ZC : (r + 2 * s) / 2
      }
    }(o, s, i),
    ...(0, _.Dk)({
      status: t,
      size: o.status,
      isMobile: s,
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
    onMouseDown: s,
    onKeyDown: a,
    onContextMenu: u,
    onMouseEnter: _,
    onMouseLeave: d,
    className: T,
    tabIndex: N,
    ariaLabel: A,
    ariaHidden: m,
    status: O,
    isMobile: R = !1,
    isTyping: C = !1,
    avatarDecoration: p,
    typingOffset: g,
    specs: L
  } = e, v = {
    width: (0, I.px)(n),
    height: (0, I.px)(n)
  }, D = null == A || m ? void 0 : function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? S.Z.Messages.LABEL_WITH_ONLINE_STATUS.format({
      label: e,
      status: (0, E.u5)(t, n)
    }) : e
  }(A, O, R), M = L.size * h.hs, P = function(e, t, n, i) {
    if (null == e) return null;
    if (i) switch (t) {
      case I.EF.SIZE_16:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_16;
      case I.EF.SIZE_20:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_20;
      case I.EF.SIZE_24:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_24;
      case I.EF.SIZE_32:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_32;
      case I.EF.SIZE_40:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_40;
      case I.EF.SIZE_56:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_56;
      case I.EF.SIZE_80:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_80;
      case I.EF.SIZE_120:
        return c.QS.AVATAR_DECORATION_STATUS_TYPING_120
    }
    if (n) switch (t) {
      case I.EF.SIZE_16:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
      case I.EF.SIZE_20:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
      case I.EF.SIZE_24:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
      case I.EF.SIZE_32:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
      case I.EF.SIZE_40:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
      case I.EF.SIZE_56:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
      case I.EF.SIZE_80:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
      case I.EF.SIZE_120:
        return c.QS.AVATAR_DECORATION_STATUS_MOBILE_120
    }
    switch (t) {
      case I.EF.SIZE_16:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_16;
      case I.EF.SIZE_20:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_20;
      case I.EF.SIZE_24:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_24;
      case I.EF.SIZE_32:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_32;
      case I.EF.SIZE_40:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_40;
      case I.EF.SIZE_56:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_56;
      case I.EF.SIZE_80:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_80;
      case I.EF.SIZE_120:
        return c.QS.AVATAR_DECORATION_STATUS_ROUND_120
    }
    return null
  }(O, n, R, C), y = null != p && (0, i.jsx)("svg", {
    width: M + g,
    height: M,
    viewBox: "0 0 ".concat(M + g, " ").concat(M),
    className: f.avatarDecoration,
    "aria-hidden": !0,
    children: (0, i.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: M,
      height: M,
      mask: null != P ? "url(#".concat(P, ")") : void 0,
      children: (0, i.jsx)("div", {
        className: f.avatarStack,
        children: (0, i.jsx)("img", {
          className: f.avatar,
          src: p,
          alt: " ",
          "aria-hidden": !0
        })
      })
    })
  });
  return null != r || null != s ? (0, i.jsxs)(l.P, {
    className: o()(f.wrapper, f.pointer, T),
    style: v,
    onClick: r,
    tabIndex: N,
    onContextMenu: u,
    onMouseDown: s,
    onKeyDown: a,
    onMouseEnter: null != _ ? _ : void 0,
    onMouseLeave: null != d ? d : void 0,
    "aria-label": D,
    "aria-hidden": m,
    children: [t, y]
  }) : (0, i.jsxs)("div", {
    className: o()(f.wrapper, T),
    style: v,
    onContextMenu: null != u ? u : void 0,
    onMouseEnter: null != _ ? _ : void 0,
    onMouseLeave: null != d ? d : void 0,
    role: "img",
    "aria-label": D,
    "aria-hidden": m,
    children: [t, y]
  })
}

function p(e) {
  let {
    src: t,
    isSpeaking: n,
    className: r
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(f.avatarStack, r),
    children: [(0, i.jsx)("img", {
      src: null != t ? t : void 0,
      alt: " ",
      className: f.avatar,
      "aria-hidden": !0
    }), n && (0, i.jsx)("div", {
      className: f.avatarSpeaking
    })]
  }, t)
}

function g(e) {
  let {
    src: t,
    status: n,
    size: r,
    statusColor: s,
    isMobile: a = !1,
    isTyping: l = !1,
    typingIndicatorRef: h,
    isSpeaking: S = !1,
    statusTooltip: N = !1,
    statusTooltipDelay: A,
    statusBackdropColor: R,
    "aria-hidden": g = !1,
    "aria-label": L,
    imageClassName: v
  } = e, D = n !== T.Skl.UNKNOWN ? n : null, M = (0, I.UC)(r), P = null != D ? Math.ceil((M.status * I.D6 - M.status) / 2) : 0, y = M.size + P, U = (0, _.vj)(D, s);
  return (0, i.jsx)(C, {
    ...e,
    ariaLabel: L,
    ariaHidden: g,
    status: D,
    specs: M,
    typingOffset: P,
    children: (0, i.jsxs)("svg", {
      width: y,
      height: y,
      viewBox: "0 0 ".concat(y, " ").concat(y),
      className: o()(f.mask, f.svg),
      "aria-hidden": !0,
      children: [(0, i.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: M.size,
        height: M.size,
        mask: "url(#".concat(function(e, t, n, i) {
          if (null == e) return c.QS.AVATAR_DEFAULT;
          if (i) switch (t) {
            case I.EF.SIZE_16:
              return c.QS.AVATAR_STATUS_TYPING_16;
            case I.EF.SIZE_20:
              return c.QS.AVATAR_STATUS_TYPING_20;
            case I.EF.SIZE_24:
              return c.QS.AVATAR_STATUS_TYPING_24;
            case I.EF.SIZE_32:
              return c.QS.AVATAR_STATUS_TYPING_32;
            case I.EF.SIZE_40:
              return c.QS.AVATAR_STATUS_TYPING_40;
            case I.EF.SIZE_48:
              return c.QS.AVATAR_STATUS_TYPING_48;
            case I.EF.SIZE_56:
              return c.QS.AVATAR_STATUS_TYPING_56;
            case I.EF.SIZE_80:
              return c.QS.AVATAR_STATUS_TYPING_80;
            case I.EF.SIZE_120:
              return c.QS.AVATAR_STATUS_TYPING_120
          }
          if (e === T.Skl.ONLINE && n) switch (t) {
            case I.EF.SIZE_16:
              return c.QS.AVATAR_STATUS_MOBILE_16;
            case I.EF.SIZE_20:
              return c.QS.AVATAR_STATUS_MOBILE_20;
            case I.EF.SIZE_24:
              return c.QS.AVATAR_STATUS_MOBILE_24;
            case I.EF.SIZE_32:
              return c.QS.AVATAR_STATUS_MOBILE_32;
            case I.EF.SIZE_40:
              return c.QS.AVATAR_STATUS_MOBILE_40;
            case I.EF.SIZE_48:
              return c.QS.AVATAR_STATUS_MOBILE_48;
            case I.EF.SIZE_56:
              return c.QS.AVATAR_STATUS_MOBILE_56;
            case I.EF.SIZE_80:
              return c.QS.AVATAR_STATUS_MOBILE_80;
            case I.EF.SIZE_120:
              return c.QS.AVATAR_STATUS_MOBILE_120
          }
          switch (t) {
            case I.EF.SIZE_16:
              return c.QS.AVATAR_STATUS_ROUND_16;
            case I.EF.SIZE_20:
              return c.QS.AVATAR_STATUS_ROUND_20;
            case I.EF.SIZE_24:
              return c.QS.AVATAR_STATUS_ROUND_24;
            case I.EF.SIZE_32:
              return c.QS.AVATAR_STATUS_ROUND_32;
            case I.EF.SIZE_40:
              return c.QS.AVATAR_STATUS_ROUND_40;
            case I.EF.SIZE_48:
              return c.QS.AVATAR_STATUS_ROUND_48;
            case I.EF.SIZE_56:
              return c.QS.AVATAR_STATUS_ROUND_56;
            case I.EF.SIZE_80:
              return c.QS.AVATAR_STATUS_ROUND_80;
            case I.EF.SIZE_120:
              return c.QS.AVATAR_STATUS_ROUND_120
          }
          throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
        }(D, r, a, l), ")"),
        children: (0, i.jsx)(p, {
          src: t,
          isSpeaking: S,
          className: v
        })
      }), null != D && null != R ? O(R, a, M, D) : null, null != D ? (0, i.jsx)(d.u, {
        text: N ? (0, E.u5)(D) : null,
        "aria-label": !1,
        position: "top",
        spacing: 5 + 1.5 * M.stroke,
        delay: A,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("rect", {
            ...e,
            ...m(M, D, a, l),
            fill: U,
            mask: "url(#".concat((0, _.rs)(D, a, l), ")"),
            className: f.pointerEvents
          }), l ? (0, i.jsx)(u.b, {
            ref: h,
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
    fromColor: s,
    isMobile: l = !1,
    isTyping: c = !1,
    typingIndicatorRef: T,
    isSpeaking: h = !1,
    size: S,
    src: m,
    status: g,
    statusColor: L,
    statusTooltip: v = !1,
    statusTooltipDelay: D,
    statusBackdropColor: M,
    "aria-hidden": P = !1,
    "aria-label": y,
    imageClassName: U
  } = e, b = (0, _.vj)(g, L), G = r.useId(), w = r.useId(), [k] = r.useState(() => ({
    fill: s,
    ...R({
      size: S,
      status: n,
      isMobile: t,
      isTyping: !1
    })
  })), B = r.useMemo(() => ({
    fill: b,
    ...R({
      size: S,
      status: g,
      isMobile: l,
      isTyping: c
    })
  }), [b, S, g, l, c]), {
    avatarCutoutX: x,
    avatarCutoutY: V,
    avatarCutoutWidth: Z,
    avatarCutoutHeight: H,
    avatarCutoutRadius: F,
    fill: Y,
    ...j
  } = (0, a.useSpring)({
    immediate: !document.hasFocus(),
    config: N,
    from: k,
    to: B
  }), W = (0, I.px)(S), K = (0, I.UC)(S), z = K.status * I.D6, q = K.status * I.EW, X = null != g ? (K.status * I.D6 - K.status) / 2 : 0, Q = K.size - K.status - X - K.offset, J = K.size - q - K.offset, $ = K.size + Math.ceil(X);
  return (0, i.jsx)(C, {
    ...e,
    ariaLabel: y,
    ariaHidden: P,
    typingOffset: X,
    specs: K,
    children: (0, i.jsxs)("svg", {
      width: $,
      height: $,
      viewBox: "0 0 ".concat($, " ").concat($),
      className: o()(f.mask, f.svg),
      "aria-hidden": !0,
      children: [(0, i.jsxs)("mask", {
        id: G,
        width: W,
        height: W,
        children: [(0, i.jsx)("circle", {
          cx: W / 2,
          cy: W / 2,
          r: W / 2,
          fill: "white"
        }), (0, i.jsx)(a.animated.rect, {
          color: "black",
          x: x,
          y: V,
          width: Z,
          height: H,
          rx: F,
          ry: F
        })]
      }), (0, i.jsx)("foreignObject", {
        className: f.__invalid_foreignObject,
        x: 0,
        y: 0,
        width: W,
        height: W,
        mask: "url(#".concat(G, ")"),
        children: (0, i.jsx)(p, {
          src: m,
          isSpeaking: h,
          className: U
        })
      }), null != M && O(M, l, K, g), (0, i.jsx)(d.u, {
        text: v ? (0, E.u5)(g) : null,
        "aria-label": !1,
        position: "top",
        spacing: function(e, t, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
        }(K.status, K.stroke, l, c),
        delay: D,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("svg", {
            x: Q,
            y: J,
            width: z,
            height: q,
            viewBox: "0 0 ".concat(z, " ").concat(q),
            className: v ? f.cursorDefault : void 0,
            children: [(0, _.vP)(j, K.status, w), (0, i.jsx)(a.animated.rect, {
              fill: Y,
              width: z,
              height: q,
              mask: "url(#".concat(w, ")")
            }), (0, i.jsx)(u.b, {
              ref: T,
              dotRadius: K.status / 4,
              x: .15 * z,
              y: .5 * q,
              hide: !c
            })]
          }), (0, i.jsx)(A, {
            size: S,
            isMobile: l,
            isTyping: c,
            className: f.pointerEvents,
            ...e
          })]
        })
      })]
    })
  })
}
let v = r.memo(function(e) {
  var t, n, s, o, a;
  let {
    statusColor: l,
    status: u,
    ...d
  } = e, {
    isMobile: c = !1,
    isTyping: E = !1
  } = d, I = r.useRef(u), h = r.useRef(c), S = (0, _.vj)(u, l), f = r.useRef(S), N = r.useRef(!1);
  let A = N.current || (t = E, n = u, s = I.current, o = c, a = h.current, null != s && null != n && (!!t || n !== s || n === T.Skl.ONLINE && o !== a || !1));
  return r.useLayoutEffect(() => {
    N.current = A, I.current = u, h.current = c, f.current = S
  }, [u, c, S, A]), null != u && null != I.current && A ? (0, i.jsx)(L, {
    ...d,
    status: u,
    statusColor: S,
    fromStatus: I.current,
    fromIsMobile: h.current,
    fromColor: f.current
  }) : (0, i.jsx)(g, {
    ...d,
    status: u,
    statusColor: S
  })
})