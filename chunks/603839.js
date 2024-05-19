"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n("920906"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("207796"),
  E = n("729017"),
  h = n("889711"),
  _ = n("931240"),
  C = n("970606"),
  m = n("963202"),
  S = n("650461"),
  p = n("432632"),
  g = n("35313"),
  I = n("284019"),
  T = n("672775"),
  A = n("601463"),
  N = n("192565"),
  v = n("641037"),
  R = n("689938"),
  O = n("590190");
let L = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function M(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, S.useDefaultClanProgress)(), {
    progress: y,
    errors: P,
    submitting: x
  } = (0, u.useStateFromStoresObject)([S.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = S.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : M,
      errors: null === (n = S.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = S.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), D = (0, p.useDefaultGameIdForClan)(t, "ClanSetupModal"), b = s.useMemo(() => (0, v.getClanSetupProgressSteps)(P), [P]), [U, j] = s.useState(!1), [G, k] = s.useState(window.innerWidth), [w, B] = s.useState(1), [F, H] = s.useState(!0), V = (0, g.useFullScreenModalAnimationStyle)(), Y = (0, o.useSpring)({
    opacity: w,
    config: L,
    onStart: () => H(!0),
    onRest: () => H(1 === w),
    immediate: l
  }), W = (0, o.useSpring)({
    transform: "translateX(".concat(1 === w ? 0 : -1 * G / 2 + 190, "px)"),
    config: L,
    immediate: l
  }), K = (0, o.useTransition)(0 === w, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: L,
    immediate: l
  }), z = (0, o.useTransition)(0 === w, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: L,
    immediate: l
  }), q = s.useCallback(e => {
    if (e === b.length) B(0), (0, C.trackConvertStepViewed)(t, "signature");
    else if (0 === w) B(1);
    else {
      var n;
      _.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = y.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [w, t, y.furthestStep, b.length]);
  s.useEffect(() => {
    (0, C.trackConvertStepViewed)(t, (0, C.getProgressStepAnalyticsName)(y.currentStep))
  }, [t, y.currentStep]), s.useEffect(() => {
    let e = (0, h.getResizeObserver)((0, r.debounce)(() => k(window.innerWidth), 250));
    return (0, h.watch)(e, document.body), () => (0, h.unwatch)(e, document.body)
  }, [w, F]), s.useEffect(() => {
    null != D && (0, _.updateClanSetup)(t, {
      requiredGameId: D
    })
  }, [D, t]);
  let Q = s.useMemo(() => null != P && Object.values(P).some(e => null != e), [P]),
    Z = s.useMemo(() => null != P && Object.values(P).length > 0 ? (0, v.getClanSetupProgressSteps)(P).find(e => e.hasError) : null, [P]),
    X = s.useCallback(() => {
      B(1), _.updateClanSetup(t, {
        currentStep: null == Z ? void 0 : Z.index
      })
    }, [null == Z ? void 0 : Z.index, t]),
    {
      guilds: J
    } = (0, m.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !1
    }),
    {
      enableApplication: $
    } = (0, m.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer"),
    ee = s.useCallback(() => {
      0 === J.filter(e => e.id !== t).length && $ ? (0, f.setClanDiscoveryMode)(f.ClanDiscoveryMode.GET_STARTED) : (0, f.setClanDiscoveryMode)(f.ClanDiscoveryMode.ADMIN_UPSELL)
    }, [J, t, $]),
    et = s.useCallback(() => {
      (0, v.submitClanSetup)({
        guildId: t,
        onSuccess: () => {
          ee(), n()
        },
        progress: y
      })
    }, [t, y, ee, n]),
    en = s.useRef(null),
    ea = null != Z ? (0, a.jsxs)("div", {
      className: O.tooltipContents,
      children: [(0, a.jsx)(E.default, {
        className: O.errorIcon
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: R.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: R.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, a.jsx)(d.Anchor, {
              className: O.errorLink,
              onClick: X,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, a.jsx)(o.animated.div, {
    ref: en,
    style: V,
    className: O.modal,
    children: (0, a.jsxs)(d.FocusRingScope, {
      containerRef: en,
      children: [(0, a.jsx)(d.Button, {
        className: O.close,
        look: d.Button.Looks.OUTLINED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.PRIMARY,
        onClick: n,
        children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, a.jsxs)("div", {
        className: O.content,
        children: [(0, a.jsxs)("div", {
          className: O.panel,
          children: [(0, a.jsx)(o.animated.div, {
            style: Y,
            className: i()(O.stepsContainer, {
              [O.hidden]: !F
            }),
            children: (0, a.jsx)(N.default, {
              guildId: t
            })
          }), (0, a.jsx)("div", {
            className: i()(O.navigationContainer, {
              [O.elevatedNavigationContainer]: !F
            }),
            children: (0, a.jsx)(T.default, {
              steps: b,
              progress: y,
              updateCurrentStep: q,
              animationStyle: Y,
              animationClassName: i()({
                [O.hidden]: !F
              })
            })
          })]
        }), (0, a.jsx)(o.animated.div, {
          style: Y,
          className: i()(O.divider, {
            [O.hidden]: !F,
            [O.dividerResponsive]: F
          })
        }), (0, a.jsx)(o.animated.div, {
          style: W,
          className: i()(O.sidebar, {
            [O.sidebarResponsive]: F
          }),
          children: (0, a.jsx)(A.default, {
            guildId: t,
            signed: U,
            setSigned: F ? void 0 : j,
            sidebarWidth: 380,
            windowWidth: G,
            transition: K,
            brandPrimaryColor: y.brandPrimaryColor
          })
        })]
      }), z((e, t) => t && (0, a.jsx)(o.animated.div, {
        style: e,
        className: O.submit,
        children: (0, a.jsx)(d.Tooltip, {
          color: d.Tooltip.Colors.GREY,
          tooltipClassName: O.tooltip,
          text: ea,
          "aria-label": null != Z ? R.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != Z,
          forceOpen: null != Z,
          children: e => (0, a.jsx)(I.default, {
            ...e,
            themeColor: y.brandPrimaryColor,
            disabled: !U || Q,
            submitting: x,
            look: d.Button.Looks.FILLED,
            size: d.Button.Sizes.MEDIUM,
            color: d.Button.Colors.BRAND,
            onClick: et,
            children: R.default.Messages.FINISH
          })
        })
      }))]
    })
  })
}