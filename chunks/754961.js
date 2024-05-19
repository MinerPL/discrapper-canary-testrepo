"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return m
  },
  ClanSetupProgressButtons: function() {
    return S
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("729017"),
  f = n("603368"),
  E = n("284019"),
  h = n("689938"),
  _ = n("954834");

function C(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: E,
    animate: C,
    fillBackgroundColor: m,
    hasError: S
  } = e, p = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), g = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), I = s.useMemo(() => (0, f.getClanPrimaryButtonStyles)(m, g.hex()), [m, g]), T = null != I, A = (0, r.useSpring)({
    transform: E ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: p || !C
  }), N = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: h.default.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, a.jsx)(u.Tooltip, {
    color: S ? u.Tooltip.Colors.GREY : u.Tooltip.Colors.BRAND,
    text: S ? N : l,
    "aria-label": S ? h.default.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipStyle: I,
    tooltipClassName: i()(_.progressStepTooltip, {
      [_.progressStepTooltipCustomColors]: !S && null != I
    }),
    children: e => (0, a.jsxs)(u.Clickable, {
      ...e,
      "aria-label": h.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      tabIndex: null == n ? -1 : void 0,
      onClick: n,
      className: _.progressStepWrapper,
      children: [S && (0, a.jsx)(c.default, {
        className: _.errorIcon
      }), (0, a.jsx)("div", {
        className: _.progressStep,
        children: (0, a.jsx)(r.animated.div, {
          style: {
            ...A,
            ...I
          },
          className: i()(_.progressStepFill, {
            [_.customProgressStepFill]: T
          })
        })
      })]
    })
  })
}

function m(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: s,
    onStepClick: l,
    stepFillColor: o,
    animationStyle: u,
    className: d
  } = e;
  return (0, a.jsx)(r.animated.div, {
    style: u,
    className: i()(_.progressContainer, d),
    children: t.map(e => {
      let {
        index: t,
        name: i,
        hasError: r
      } = e;
      return (0, a.jsx)(C, {
        name: i,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: r,
        index: t,
        fillBackgroundColor: o,
        animate: n === t || n + 1 === t
      }, i)
    })
  })
}

function S(e) {
  let {
    className: t,
    isBackDisabled: n,
    isNextDisabled: s,
    onNextClick: l,
    onBackClick: o,
    nextButtonBackgroundColor: d,
    nextButtonClassName: c,
    nextButtonAnimationStyle: f
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(_.buttonsContainer, t),
    children: [(0, a.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: o,
      disabled: n,
      children: h.default.Messages.BACK
    }), (0, a.jsx)(r.animated.div, {
      style: f,
      children: (0, a.jsx)(E.default, {
        className: c,
        themeColor: d,
        color: u.Button.Colors.BRAND,
        look: u.Button.Looks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        onClick: l,
        disabled: s,
        children: h.default.Messages.NEXT
      })
    })]
  })
}