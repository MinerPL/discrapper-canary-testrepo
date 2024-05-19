"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("920906"),
  l = n("442837"),
  u = n("846519"),
  d = n("481060"),
  _ = n("788307"),
  c = n("393903"),
  E = n("607070"),
  I = n("228168"),
  T = n("660762");
let f = "36px";

function S(e) {
  let {
    statusActivity: t,
    profileType: n,
    animate: a = !0
  } = e, S = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion), [h, A] = r.useState(1), [m, N] = r.useState(!0), [p] = r.useState(() => new u.Timeout), {
    emoji: O
  } = null != t ? t : {}, C = null != O, R = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, g = null != R && R.length > 0, L = C || g, v = r.useCallback(e => {
    var t;
    if (null == e) return;
    let n = e.getBoundingClientRect(),
      i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
      r = n.height;
    i > 0 && r > 0 && A(Math.floor(r / i))
  }, []), D = (0, c.useResizeObserver)(v);
  r.useLayoutEffect(() => {
    setTimeout(() => {
      v(D.current)
    }, 200)
  }, [D, v]);
  let [M, y] = (0, o.useSpring)(() => ({
    maxHeight: f,
    config: {
      clamp: !0,
      immediate: S,
      duration: 300
    }
  }));
  r.useEffect(() => () => p.stop(), [p]);
  let P = e => {
    e ? y({
      maxHeight: "144px",
      delay: 300
    }) : y({
      maxHeight: f,
      delay: 0
    }), p.start(300, () => {
      N(!e)
    })
  };
  if (!L) return null;
  let U = () => C ? (0, i.jsx)(_.ActivityEmoji, {
      className: g ? T.statusEmojiInline : T.statusEmojiOnly,
      emoji: O,
      animate: a,
      hideTooltip: !1,
      tooltipDelay: I.USER_PROFILE_TOOLTIP_DELAY
    }) : null,
    b = () => g ? (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: T.statusText,
      children: R
    }) : null,
    G = n === I.UserProfileTypes.BITE_SIZE ? T.biteSize : T.fullSize,
    w = s()(T.statusBubbleOuter, {
      [T.statusBubbleShape]: h <= 1 && !g && C || h > 1,
      [T.statusBubbleSingleLineWithTextShape]: 1 === h && g,
      [T.biteSize]: n === I.UserProfileTypes.BITE_SIZE,
      [T.fullSize]: n === I.UserProfileTypes.FULL_SIZE
    }),
    k = s()(T.statusBubble, {
      [T.statusBubbleShape]: h <= 1 && !g && C || h > 1,
      [T.statusBubbleSingleLineWithTextShape]: h <= 1 && g,
      [T.statusBubbleEmojiOnlyPadding]: C && !g,
      [T.statusBubbleWithTextPadding]: g,
      [T.statusBubbleWithTextMinWidth]: g,
      [T.statusBubbleCopyStatusCursor]: L
    });
  return (0, i.jsxs)("div", {
    children: [n === I.UserProfileTypes.BITE_SIZE ? (0, i.jsx)("div", {
      className: s()(T.invisibleContainer, G),
      children: (0, i.jsx)("div", {
        className: w,
        children: (0, i.jsx)("span", {
          className: k,
          children: (0, i.jsxs)("div", {
            className: s()(T.content, T.clamp),
            children: [U(), b()]
          })
        })
      })
    }) : null, (0, i.jsx)("div", {
      className: s()(T.visibleContainer, G),
      children: (0, i.jsx)("div", {
        tabIndex: 0,
        className: w,
        onFocus: () => P(!0),
        onBlur: () => P(!1),
        onMouseEnter: () => P(!0),
        onMouseLeave: () => P(!1),
        children: (0, i.jsx)("span", {
          className: k,
          children: (() => {
            let e = s()(T.content, {
              [T.clamp]: m,
              [T.unclamp]: !m
            });
            return (0, i.jsx)(o.animated.div, {
              style: M,
              className: s()(T.content, e),
              children: (0, i.jsxs)("div", {
                ref: D,
                children: [U(), b()]
              })
            })
          })()
        })
      })
    })]
  })
}