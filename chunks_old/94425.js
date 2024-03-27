"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("146606"),
  o = n("446674"),
  u = n("206230"),
  d = n("778588"),
  c = n("815496"),
  f = n("374023"),
  E = n("879364"),
  h = n("2973"),
  _ = n("588025"),
  C = n("227231"),
  S = n("534801"),
  I = n("70350"),
  m = n("919354"),
  p = n("705589"),
  T = n("166604"),
  g = n("49111"),
  A = n("335294"),
  N = function() {
    var e, t, n;
    let l = (0, f.useIsEligibleForQuests)({
        location: T.QuestsExperimentLocations.ACTIVITY_PANEL
      }),
      N = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
      R = (0, o.useStateFromStores)([h.default], () => (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)),
      O = s.useRef(-1),
      v = s.useRef(!1),
      [L, M] = s.useState(!1),
      [P, y] = s.useState(!1),
      [D, x] = s.useState(!0),
      [b, U] = s.useState(!0),
      [G, j] = s.useState(240),
      w = s.useRef(null),
      k = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()),
      F = (null == R ? void 0 : null === (e = R.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
      B = s.useRef(F),
      H = (null == R ? void 0 : null === (t = R.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
      V = (null == R ? void 0 : null === (n = R.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
      Y = (null == R ? void 0 : R.userStatus) != null && (0, C.isDismissed)(null == R ? void 0 : R.userStatus, _.QuestContent.QUEST_BAR),
      W = (0, E.useIsQuestExpired)(R),
      K = s.useCallback(() => {
        var e, t;
        j((null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), y(!0)
      }, []),
      z = s.useCallback(() => {
        M(!0)
      }, []),
      q = s.useCallback(() => {
        M(!1), !v.current && !H && y(!1)
      }, [H]),
      Q = s.useCallback(() => {
        M(!1), y(!1), v.current = !1
      }, []),
      Z = s.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            withDelay: t = !1
          } = e;
        t ? O.current = window.setTimeout(K, 75) : K()
      }, [K]),
      X = s.useCallback(() => {
        if (window.clearTimeout(O.current), !H && !L) !v.current && y(!1)
      }, [L, H]),
      J = s.useCallback(() => {
        null != R && (0, c.trackQuestEvent)({
          questId: R.id,
          event: g.AnalyticEvents.QUEST_HOVER
        }), v.current = !0, Z({
          withDelay: !0
        })
      }, [Z, R]),
      $ = s.useCallback(() => {
        v.current = !1, X()
      }, [X]);
    s.useLayoutEffect(() => {
      H && K()
    }, [H, K]), s.useLayoutEffect(() => {
      F && !B.current && v.current && K()
    }, [F, K]), s.useLayoutEffect(() => {
      !H && F && !B.current && !v.current && y(!1)
    }, [F, H]);
    let ee = l && !Y && !V && null != R && !W,
      et = s.useRef(ee);
    s.useLayoutEffect(() => {
      ee !== et.current && U(!1), et.current = ee
    }, [ee]), s.useEffect(() => {
      B.current = F
    }, [F]);
    let {
      expansionSpring: en
    } = (0, r.useSpring)({
      from: {
        expansionSpring: P ? 0 : 1
      },
      to: {
        expansionSpring: P ? 1 : 0
      },
      config: F ? {
        tension: 900,
        friction: 45,
        clamp: !0
      } : {
        tension: 360,
        friction: 30,
        clamp: !0
      },
      immediate: N,
      onRest: () => {
        x(!0)
      },
      onStart: () => {
        x(!1)
      }
    }), {
      visibilitySpring: ea
    } = (0, r.useSpring)({
      from: {
        visibilitySpring: 0
      },
      to: {
        visibilitySpring: ee ? 1 : 0
      },
      config: {
        tension: 250,
        friction: 10,
        clamp: !0
      },
      immediate: N,
      onRest: () => {
        U(!0)
      },
      onStart: () => {
        U(!1)
      }
    });
    return l && null != R && (ee || !b) ? (0, a.jsx)(S.QuestContentImpressionTracker, {
      questId: R.id,
      questContent: _.QuestContent.QUEST_BAR,
      overrideVisibility: !k,
      children: () => (0, a.jsxs)(r.animated.div, {
        className: i(A.wrapper, {
          [A.wrapperVisible]: ee && b
        }),
        style: {
          color: R.config.colors.secondary,
          height: ea.to({
            range: [0, 1],
            output: [0, H && P ? G : 40]
          })
        },
        children: [(0, a.jsxs)(r.animated.div, {
          onMouseLeave: $,
          onMouseEnter: J,
          onFocus: () => Z(),
          onBlur: X,
          className: i(A.contentWrapper, {
            [A.contentWrapperExpanded]: P,
            [A.contentWrapperAccepted]: F
          }),
          style: {
            backgroundImage: F ? "linear-gradient(90deg, ".concat(R.config.colors.primary, ", ").concat(R.config.colors.secondary, ")") : void 0,
            height: en.to({
              range: [0, 1],
              output: [40, F ? G : 240]
            }),
            transform: ea.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: [(0, a.jsx)(m.default, {
            className: A.content,
            expansionSpring: en,
            isExpanded: P,
            isExpansionAnimationComplete: D,
            quest: R
          }), (0, a.jsx)(p.default, {
            className: A.content,
            onCtxMenuOpen: z,
            onCtxMenuClose: q,
            onCtxMenuSelect: Q,
            expansionSpring: en,
            isExpanded: P,
            isExpansionAnimationComplete: D,
            quest: R,
            useReducedMotion: N,
            ref: w
          })]
        }), (0, a.jsx)(I.QuestsBarBackgroundAnimation, {
          quest: R,
          isExpanded: P,
          isExpansionAnimationComplete: D,
          useReducedMotion: N
        }), !F && (0, a.jsx)("div", {
          className: A.backgroundFallback
        })]
      })
    }) : null
  }