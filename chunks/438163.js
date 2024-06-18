"use strict";
n.d(t, {
  J: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(846519),
  _ = n(481060),
  d = n(788307),
  c = n(607070),
  E = n(228168),
  I = n(660762);

function T(e) {
  let {
    statusActivity: t,
    profileType: n,
    hasEntered: s = !0,
    animate: T = !0
  } = e, h = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [S, f] = r.useState(!0), [N] = r.useState(() => new u.V7), A = r.useRef(null), m = r.useRef(null), O = r.useRef(null), R = r.useRef(null), C = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, p = null != C && C.length > 0, {
    emoji: g
  } = null != t ? t : {}, L = null != g, v = L && !p, D = L || p, [M, P] = r.useState(v);
  r.useLayoutEffect(() => {
    if (null == A.current || v) return;
    let e = Math.floor(A.current.getBoundingClientRect().height);
    if (P(v || e <= 18), s) {
      var t, n, i, r;
      m.current = null !== (i = null === (t = A.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, R.current = null !== (r = null === (n = O.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [s, v]);
  let [y, U] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: h,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => N.stop(), [N]), !D) return null;
  let b = e => {
      var t, n;
      if (!M) {
        e ? U({
          maxHeight: "".concat(Math.min(null !== (t = m.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : U({
          maxHeight: "".concat(Math.min(null !== (n = R.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        N.start(e ? 300 : 150, () => {
          f(!e)
        })
      }
    },
    G = () => L ? (0, i.jsx)(d.I, {
      className: p ? I.statusEmojiInline : I.statusEmojiOnly,
      emoji: g,
      animate: T,
      hideTooltip: !1,
      tooltipDelay: E.vB
    }) : null,
    w = () => p ? (0, i.jsx)(_.Text, {
      variant: "text-sm/medium",
      className: I.statusText,
      children: C
    }) : null,
    k = {
      [I.biteSize]: n === E.y0.BITE_SIZE,
      [I.fullSize]: n === E.y0.FULL_SIZE,
      [I.panel]: n === E.y0.PANEL
    },
    B = o()(I.statusBubbleOuter, k, {
      [I.statusBubbleShape]: !p && L || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && p
    }),
    x = o()(I.statusBubble, {
      [I.statusBubbleShape]: !p && L || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && p,
      [I.statusBubbleEmojiOnlyPadding]: v,
      [I.statusBubbleWithTextPadding]: p,
      [I.statusBubbleWithTextMinWidth]: p,
      [I.statusBubbleCopyStatusCursor]: D
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(I.invisibleContainer, k),
      children: (0, i.jsx)("div", {
        className: B,
        children: (0, i.jsxs)("span", {
          className: x,
          children: [(0, i.jsxs)("div", {
            className: o()(I.content, I.clamp, I.placeholderWidth, {
              [I.panel]: n === E.y0.PANEL
            }),
            ref: O,
            children: [G(), w()]
          }), (0, i.jsxs)("div", {
            className: o()(I.content, I.unclamp, I.placeholderWidth, I.incorporeal, {
              [I.panel]: n === E.y0.PANEL
            }),
            ref: A,
            children: [G(), w()]
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: o()(I.visibleContainer, k),
      children: (0, i.jsx)("div", {
        tabIndex: 0,
        className: B,
        onFocus: () => b(!0),
        onBlur: () => b(!1),
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, i.jsx)("span", {
          className: x,
          children: (() => {
            let e = o()(I.content, {
              [I.clamp]: S,
              [I.unclamp]: !S,
              [I.singleLineAlign]: M
            });
            return (0, i.jsxs)(a.animated.div, {
              style: y,
              className: e,
              children: [G(), w()]
            })
          })()
        })
      })
    })]
  })
}