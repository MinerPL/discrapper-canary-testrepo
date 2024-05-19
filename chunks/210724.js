"use strict";
n.r(t), n.d(t, {
  QuestBar: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("442837"),
  u = n("607070"),
  d = n("819640"),
  c = n("617136"),
  f = n("113434"),
  E = n("569984"),
  h = n("497505"),
  _ = n("918701"),
  C = n("977156"),
  m = n("5881"),
  S = n("874137"),
  p = n("78826"),
  g = n("448018"),
  I = n("46140"),
  T = n("981631"),
  A = n("837955");

function N(e) {
  var t, n, l;
  let {
    quest: E
  } = e, N = (0, m.getQuestLogger)({
    quest: E,
    location: I.QuestsExperimentLocations.QUESTS_BAR
  }), v = (0, C.useIsEligibleForQuests)({
    location: I.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), O = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), L = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, M = s.useRef(L), y = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, P = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, x = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), D = (0, f.useIsQuestExpired)(E), {
    hasError: b,
    isLoading: U
  } = (0, p.useQuestsAssetsLoadState)(), j = v && !x && !P && !D && !U, G = s.useRef(j), {
    primaryVariant: k,
    progressVariant: w
  } = C.QuestBarExperiment.useExperiment({
    location: I.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: j && !b
  }), B = s.useMemo(() => (0, g.getQuestBarVariantConfig)(E, k, w), [E, k, w]), F = s.useRef(-1), H = s.useRef(!1), [V, Y] = s.useState(!1), [W, K] = s.useState(!1), [z, q] = s.useState(!1), [Q, Z] = s.useState(!0), [X, J] = s.useState(B.preEnrollmentExpandedHeight), $ = s.useRef(null), ee = s.useCallback(() => {
    var e, t;
    J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), K(!0)
  }, []), et = s.useCallback(() => {
    Y(!0)
  }, []), en = s.useCallback(() => {
    Y(!1), !H.current && !y && K(!1)
  }, [y]), ea = s.useCallback(() => {
    Y(!1), !y && K(!1), H.current = !1
  }, [y]), es = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? F.current = window.setTimeout(ee, 75) : ee()
  }, [ee]), el = s.useCallback(() => {
    if (window.clearTimeout(F.current), !!B.canCollapseOnBlur && !V) !H.current && K(!1)
  }, [V, B]), ei = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: T.AnalyticEvents.QUEST_HOVER
    }), H.current = !0, es({
      withDelay: !0
    })
  }, [es, E]), er = s.useCallback(() => {
    H.current = !1, el()
  }, [el]);
  s.useLayoutEffect(() => {
    y && B.shouldExpandOnQuestComplete && ee()
  }, [ee, y, B]), s.useLayoutEffect(() => {
    L && !M.current && H.current && ee()
  }, [L, ee]), s.useLayoutEffect(() => {
    !y && L && !M.current && !H.current && K(!1)
  }, [L, y]), s.useLayoutEffect(() => {
    j !== G.current && Z(!1), G.current = j
  }, [j]), s.useEffect(() => {
    M.current = L
  }, [L]);
  let {
    expansionSpring: eo
  } = (0, r.useSpring)({
    to: {
      expansionSpring: W ? 1 : 0
    },
    config: L ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: R,
    onRest: () => {
      q(!0)
    },
    onStart: () => {
      q(!1)
    }
  }), {
    visibilitySpring: eu
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: j ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: R,
    onRest: () => {
      Z(!0)
    },
    onStart: () => {
      Z(!1)
    }
  });
  return v && (j || !Q || U) && !b ? (0, a.jsx)(S.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: B.trackingCtx.content,
    overrideVisibility: !O && j,
    children: () => {
      let e = B.component;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !j,
        className: i()(A.wrapper, {
          [A.wrapperInvisible]: !j,
          [A.wrapperVisible]: j && Q
        }),
        style: {
          color: E.config.colors.secondary,
          height: eu.to({
            range: [0, 1],
            output: [0, y && W ? X : B.collapsedHeight]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: er,
          onMouseEnter: ei,
          onFocus: () => es(),
          onBlur: el,
          className: i()(A.contentWrapper, {
            [A.contentWrapperExpanded]: W,
            [A.contentWrapperAccepted]: L
          }),
          style: {
            backgroundColor: B.preEnrollmentBackgroundColor,
            backgroundImage: L ? B.postEnrollmentBackgroundImage : void 0,
            height: eo.to({
              range: [0, 1],
              output: [B.collapsedHeight, L ? X : B.preEnrollmentExpandedHeight]
            }),
            transform: eu.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: $,
            expansionSpring: eo,
            isExpanded: W,
            isExpansionAnimationComplete: z,
            onCtxMenuClosed: en,
            onCtxMenuOpened: et,
            onCtxMenuSelection: ea,
            quest: E,
            useReducedMotion: R
          })
        })
      })
    }
  }) : (b ? N.log("Not rendered due to asset error") : !v && N.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = null != t ? t : E.default.questDeliveryOverride) && void 0 !== e ? e : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR)
  });
  return null == n ? null : (0, a.jsx)(p.QuestsAssetContextProvider, {
    sentrySource: I.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(N, {
      quest: n
    })
  }, n.id)
}