n.d(t, {
  Vq: function() {
return A;
  },
  Xo: function() {
return D;
  },
  qE: function() {
return C;
  }
}), n(411104), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(1561),
  u = n(438784),
  c = n(696826),
  d = n(981729),
  _ = n(481060),
  E = n(806519),
  f = n(51144),
  h = n(182294),
  p = n(981631),
  m = n(419061),
  I = n(689938),
  T = n(498591);
let g = {
  tension: 1200,
  friction: 70
};

function S(e) {
  let {
size: t,
isMobile: n,
isTyping: i,
...a
  } = e, s = (0, h.UC)(t), o = s.status * (n && !i ? h.EW : 1), l = s.status * (i ? h.D6 : 1), u = i ? (s.status * h.D6 - s.status) / 2 : 0, c = s.size - s.status - u - s.offset, d = s.size - o - s.offset;
  return (0, r.jsx)('rect', {
x: c,
y: d,
width: l,
height: o,
fill: 'transparent',
'aria-hidden': !0,
...a
  });
}

function A(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
i = (0, c.W5)(e.status, t, n, r),
a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
  return {
...i,
x: a,
y: e.size - i.height - e.offset
  };
}

function N(e, t, n, i) {
  let a = A(n, i, t, !1),
s = (0, c.lm)(i, e);
  if (!t) {
let t = a.height / 2 + n.stroke,
  i = a.x + n.status / 2;
return (0, r.jsx)('circle', {
  style: {
    opacity: s
  },
  fill: e,
  r: t,
  cx: i,
  cy: i
});
  }
  let o = a.height + 2 * n.stroke,
l = a.width + 2 * n.stroke,
u = a.x - n.stroke,
d = a.y - n.stroke;
  return (0, r.jsx)('rect', {
fill: e,
height: o,
width: l,
style: {
  opacity: s
},
x: u,
y: d,
rx: n.stroke
  });
}

function v(e) {
  let {
status: t,
isMobile: n,
isTyping: r,
size: i
  } = e, a = n && !r && t === p.Skl.ONLINE, s = (0, h.UC)(i);
  return {
... function(e, t, n) {
  let {
    size: r,
    status: i,
    stroke: a,
    offset: s
  } = e, o = n ? i * h.D6 : i, l = t ? i * h.EW : i;
  return {
    avatarCutoutX: r - o + (o - i) / 2 - a - s,
    avatarCutoutY: r - l - a - s,
    avatarCutoutWidth: o + 2 * a,
    avatarCutoutHeight: l + 2 * a,
    avatarCutoutRadius: t ? (l + 2 * a) * h.ZC : (i + 2 * a) / 2
  };
}(s, a, r),
...(0, c.Dk)({
  status: t,
  size: s.status,
  isMobile: a,
  isTyping: r,
  topOffset: 2,
  leftOffset: 6
})
  };
}

function O(e) {
  let {
children: t,
size: n,
onClick: i,
onMouseDown: a,
onKeyDown: o,
onContextMenu: u,
onMouseEnter: c,
onMouseLeave: d,
className: _,
tabIndex: p,
ariaLabel: g,
ariaHidden: S,
status: A,
isMobile: N = !1,
isTyping: v = !1,
avatarDecoration: O,
typingOffset: R,
specs: C
  } = e, y = {
width: (0, h.px)(n),
height: (0, h.px)(n)
  }, D = null == g || S ? void 0 : function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
return null != t ? I.Z.Messages.LABEL_WITH_ONLINE_STATUS.format({
  label: e,
  status: (0, f.u5)(t, n)
}) : e;
  }(g, A, N), L = C.size * m.hs, b = function(e, t, n, r) {
if (null == e)
  return null;
if (r)
  switch (t) {
    case h.EF.SIZE_16:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_16;
    case h.EF.SIZE_20:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_20;
    case h.EF.SIZE_24:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_24;
    case h.EF.SIZE_32:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_32;
    case h.EF.SIZE_40:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_40;
    case h.EF.SIZE_56:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_56;
    case h.EF.SIZE_80:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_80;
    case h.EF.SIZE_120:
      return E.QS.AVATAR_DECORATION_STATUS_TYPING_120;
  }
if (n)
  switch (t) {
    case h.EF.SIZE_16:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
    case h.EF.SIZE_20:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
    case h.EF.SIZE_24:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
    case h.EF.SIZE_32:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
    case h.EF.SIZE_40:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
    case h.EF.SIZE_56:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
    case h.EF.SIZE_80:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
    case h.EF.SIZE_120:
      return E.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
  }
switch (t) {
  case h.EF.SIZE_16:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_16;
  case h.EF.SIZE_20:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_20;
  case h.EF.SIZE_24:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_24;
  case h.EF.SIZE_32:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_32;
  case h.EF.SIZE_40:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_40;
  case h.EF.SIZE_56:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_56;
  case h.EF.SIZE_80:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_80;
  case h.EF.SIZE_120:
    return E.QS.AVATAR_DECORATION_STATUS_ROUND_120;
}
return null;
  }(A, n, N, v), M = null != O && (0, r.jsx)('svg', {
width: L + R,
height: L,
viewBox: '0 0 '.concat(L + R, ' ').concat(L),
className: T.avatarDecoration,
'aria-hidden': !0,
children: (0, r.jsx)('foreignObject', {
  x: 0,
  y: 0,
  width: L,
  height: L,
  mask: null != b ? 'url(#'.concat(b, ')') : void 0,
  children: (0, r.jsx)('div', {
    className: T.avatarStack,
    children: (0, r.jsx)('img', {
      className: T.avatar,
      src: O,
      alt: ' ',
      'aria-hidden': !0
    })
  })
})
  });
  return null != i || null != a ? (0, r.jsxs)(l.P, {
className: s()(T.wrapper, T.pointer, _),
style: y,
onClick: i,
tabIndex: p,
onContextMenu: u,
onMouseDown: a,
onKeyDown: o,
onMouseEnter: null != c ? c : void 0,
onMouseLeave: null != d ? d : void 0,
'aria-label': D,
'aria-hidden': S,
children: [
  t,
  M
]
  }) : (0, r.jsxs)('div', {
className: s()(T.wrapper, _),
style: y,
onContextMenu: null != u ? u : void 0,
onMouseEnter: null != c ? c : void 0,
onMouseLeave: null != d ? d : void 0,
role: 'img',
'aria-label': D,
'aria-hidden': S,
children: [
  t,
  M
]
  });
}

function R(e) {
  let {
src: t,
isSpeaking: n,
className: i
  } = e;
  return (0, r.jsxs)('div', {
className: s()(T.avatarStack, i),
children: [
  (0, r.jsx)('img', {
    src: null != t ? t : void 0,
    alt: ' ',
    className: T.avatar,
    'aria-hidden': !0
  }),
  n && (0, r.jsx)('div', {
    className: T.avatarSpeaking
  })
]
  }, t);
}

function C(e) {
  let {
src: t,
status: n,
size: i,
statusColor: a,
isMobile: o = !1,
isTyping: l = !1,
typingIndicatorRef: _,
isSpeaking: m = !1,
statusTooltip: I = !1,
statusTooltipDelay: g,
statusBackdropColor: S,
'aria-hidden': v = !1,
'aria-label': C,
imageClassName: y
  } = e, D = n !== p.Skl.UNKNOWN ? n : null, L = (0, h.UC)(i), b = null != D ? Math.ceil((L.status * h.D6 - L.status) / 2) : 0, M = L.size + b, P = (0, c.vj)(D, a);
  return (0, r.jsx)(O, {
...e,
ariaLabel: C,
ariaHidden: v,
status: D,
specs: L,
typingOffset: b,
children: (0, r.jsxs)('svg', {
  width: M,
  height: M,
  viewBox: '0 0 '.concat(M, ' ').concat(M),
  className: s()(T.mask, T.svg),
  'aria-hidden': !0,
  children: [
    (0, r.jsx)('foreignObject', {
      x: 0,
      y: 0,
      width: L.size,
      height: L.size,
      mask: 'url(#'.concat(function(e, t, n, r) {
        if (null == e)
          return E.QS.AVATAR_DEFAULT;
        if (r)
          switch (t) {
            case h.EF.SIZE_16:
              return E.QS.AVATAR_STATUS_TYPING_16;
            case h.EF.SIZE_20:
              return E.QS.AVATAR_STATUS_TYPING_20;
            case h.EF.SIZE_24:
              return E.QS.AVATAR_STATUS_TYPING_24;
            case h.EF.SIZE_32:
              return E.QS.AVATAR_STATUS_TYPING_32;
            case h.EF.SIZE_40:
              return E.QS.AVATAR_STATUS_TYPING_40;
            case h.EF.SIZE_48:
              return E.QS.AVATAR_STATUS_TYPING_48;
            case h.EF.SIZE_56:
              return E.QS.AVATAR_STATUS_TYPING_56;
            case h.EF.SIZE_80:
              return E.QS.AVATAR_STATUS_TYPING_80;
            case h.EF.SIZE_120:
              return E.QS.AVATAR_STATUS_TYPING_120;
          }
        if (e === p.Skl.ONLINE && n)
          switch (t) {
            case h.EF.SIZE_16:
              return E.QS.AVATAR_STATUS_MOBILE_16;
            case h.EF.SIZE_20:
              return E.QS.AVATAR_STATUS_MOBILE_20;
            case h.EF.SIZE_24:
              return E.QS.AVATAR_STATUS_MOBILE_24;
            case h.EF.SIZE_32:
              return E.QS.AVATAR_STATUS_MOBILE_32;
            case h.EF.SIZE_40:
              return E.QS.AVATAR_STATUS_MOBILE_40;
            case h.EF.SIZE_48:
              return E.QS.AVATAR_STATUS_MOBILE_48;
            case h.EF.SIZE_56:
              return E.QS.AVATAR_STATUS_MOBILE_56;
            case h.EF.SIZE_80:
              return E.QS.AVATAR_STATUS_MOBILE_80;
            case h.EF.SIZE_120:
              return E.QS.AVATAR_STATUS_MOBILE_120;
          }
        switch (t) {
          case h.EF.SIZE_16:
            return E.QS.AVATAR_STATUS_ROUND_16;
          case h.EF.SIZE_20:
            return E.QS.AVATAR_STATUS_ROUND_20;
          case h.EF.SIZE_24:
            return E.QS.AVATAR_STATUS_ROUND_24;
          case h.EF.SIZE_32:
            return E.QS.AVATAR_STATUS_ROUND_32;
          case h.EF.SIZE_40:
            return E.QS.AVATAR_STATUS_ROUND_40;
          case h.EF.SIZE_48:
            return E.QS.AVATAR_STATUS_ROUND_48;
          case h.EF.SIZE_56:
            return E.QS.AVATAR_STATUS_ROUND_56;
          case h.EF.SIZE_80:
            return E.QS.AVATAR_STATUS_ROUND_80;
          case h.EF.SIZE_120:
            return E.QS.AVATAR_STATUS_ROUND_120;
        }
        throw Error('getMaskId(): Unsupported type, size: '.concat(t, ', status: ').concat(e, ', isMobile: ').concat(n ? 'true' : 'false'));
      }(D, i, o, l), ')'),
      children: (0, r.jsx)(R, {
        src: t,
        isSpeaking: m,
        className: y
      })
    }),
    null != D && null != S ? N(S, o, L, D) : null,
    null != D ? (0, r.jsx)(d.u, {
      text: I ? (0, f.u5)(D) : null,
      'aria-label': !1,
      position: 'top',
      spacing: 5 + 1.5 * L.stroke,
      delay: g,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('rect', {
            ...e,
            ...A(L, D, o, l),
            fill: P,
            mask: 'url(#'.concat((0, c.rs)(D, o, l), ')'),
            className: T.pointerEvents
          }),
          l ? (0, r.jsx)(u.b, {
            ref: _,
            dotRadius: L.status / 4,
            x: L.size - 1.375 * L.status - L.offset,
            y: L.size - L.status / 1.333 - L.offset
          }) : null
        ]
      })
    }) : null
  ]
})
  });
}

function y(e) {
  let {
fromIsMobile: t = !0,
fromStatus: n,
fromColor: a,
isMobile: l = !1,
isTyping: E = !1,
typingIndicatorRef: p,
isSpeaking: m = !1,
size: I,
src: A,
status: C,
statusColor: y,
statusTooltip: D = !1,
statusTooltipDelay: L,
statusBackdropColor: b,
'aria-hidden': M = !1,
'aria-label': P,
imageClassName: U
  } = e, w = (0, c.vj)(C, y), x = i.useId(), G = i.useId(), [k] = i.useState(() => ({
fill: a,
...v({
  size: I,
  status: n,
  isMobile: t,
  isTyping: !1
})
  })), B = i.useMemo(() => ({
fill: w,
...v({
  size: I,
  status: C,
  isMobile: l,
  isTyping: E
})
  }), [
w,
I,
C,
l,
E
  ]), {
avatarCutoutX: F,
avatarCutoutY: V,
avatarCutoutWidth: H,
avatarCutoutHeight: Z,
avatarCutoutRadius: Y,
fill: j,
...W
  } = (0, _.useSpring)({
config: g,
from: k,
to: B
  }, document.hasFocus() ? 'animate-always' : 'animate-never'), K = (0, h.px)(I), z = (0, h.UC)(I), q = z.status * h.D6, Q = z.status * h.EW, X = null != C ? (z.status * h.D6 - z.status) / 2 : 0, $ = z.size - z.status - X - z.offset, J = z.size - Q - z.offset, ee = z.size + Math.ceil(X);
  return (0, r.jsx)(O, {
...e,
ariaLabel: P,
ariaHidden: M,
typingOffset: X,
specs: z,
children: (0, r.jsxs)('svg', {
  width: ee,
  height: ee,
  viewBox: '0 0 '.concat(ee, ' ').concat(ee),
  className: s()(T.mask, T.svg),
  'aria-hidden': !0,
  children: [
    (0, r.jsxs)('mask', {
      id: x,
      width: K,
      height: K,
      children: [
        (0, r.jsx)('circle', {
          cx: K / 2,
          cy: K / 2,
          r: K / 2,
          fill: 'white'
        }),
        (0, r.jsx)(o.animated.rect, {
          color: 'black',
          x: F,
          y: V,
          width: H,
          height: Z,
          rx: Y,
          ry: Y
        })
      ]
    }),
    (0, r.jsx)('foreignObject', {
      className: T.__invalid_foreignObject,
      x: 0,
      y: 0,
      width: K,
      height: K,
      mask: 'url(#'.concat(x, ')'),
      children: (0, r.jsx)(R, {
        src: A,
        isSpeaking: m,
        className: U
      })
    }),
    null != b && N(b, l, z, C),
    (0, r.jsx)(d.u, {
      text: D ? (0, f.u5)(C) : null,
      'aria-label': !1,
      position: 'top',
      spacing: function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
      }(z.status, z.stroke, l, E),
      delay: L,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)('svg', {
            x: $,
            y: J,
            width: q,
            height: Q,
            viewBox: '0 0 '.concat(q, ' ').concat(Q),
            className: D ? T.cursorDefault : void 0,
            children: [
              (0, c.vP)(W, z.status, G),
              (0, r.jsx)(o.animated.rect, {
                fill: j,
                width: q,
                height: Q,
                mask: 'url(#'.concat(G, ')')
              }),
              (0, r.jsx)(u.b, {
                ref: p,
                dotRadius: z.status / 4,
                x: 0.15 * q,
                y: 0.5 * Q,
                hide: !E
              })
            ]
          }),
          (0, r.jsx)(S, {
            size: I,
            isMobile: l,
            isTyping: E,
            className: T.pointerEvents,
            ...e
          })
        ]
      })
    })
  ]
})
  });
}
let D = i.memo(function(e) {
  var t, n, a, s, o;
  let {
statusColor: l,
status: u,
...d
  } = e, {
isMobile: _ = !1,
isTyping: E = !1
  } = d, f = i.useRef(u), h = i.useRef(_), m = (0, c.vj)(u, l), I = i.useRef(m), T = i.useRef(!1);
  let g = T.current || (t = E, n = u, a = f.current, s = _, o = h.current, null != a && null != n && (!!t || n !== a || n === p.Skl.ONLINE && s !== o || !1));
  return i.useLayoutEffect(() => {
T.current = g, f.current = u, h.current = _, I.current = m;
  }, [
u,
_,
m,
g
  ]), null != u && null != f.current && g ? (0, r.jsx)(y, {
...d,
status: u,
statusColor: m,
fromStatus: f.current,
fromIsMobile: h.current,
fromColor: I.current
  }) : (0, r.jsx)(C, {
...d,
status: u,
statusColor: m
  });
});