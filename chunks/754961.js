"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return C
  },
  ClanSetupProgressButtons: function() {
    return S
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("729017"),
  f = n("676327"),
  E = n("689938"),
  h = n("156610");

function _(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: _,
    animate: C,
    fillBackgroundColor: S,
    hasError: m
  } = e, p = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), I = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), T = s.useMemo(() => (0, f.getClanBackgroundStyles)(S, I.hex()), [S, I]), g = null != T, A = (0, r.useSpring)({
    transform: _ ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: p || !C
  }), N = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: E.default.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: E.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, a.jsx)(u.Tooltip, {
    color: m ? u.Tooltip.Colors.GREY : u.Tooltip.Colors.BRAND,
    text: m ? N : l,
    "aria-label": m ? E.default.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipClassName: h.progressStepTooltip,
    children: e => (0, a.jsxs)(u.Clickable, {
      ...e,
      "aria-label": E.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      onClick: n,
      className: h.progressStepWrapper,
      children: [m && (0, a.jsx)(c.default, {
        className: h.errorIcon
      }), (0, a.jsx)("div", {
        className: h.progressStep,
        children: (0, a.jsx)(r.animated.div, {
          style: {
            ...A,
            ...T
          },
          className: i()(h.progressStepFill, {
            [h.customProgressStepFill]: g
          })
        })
      })]
    })
  })
}

function C(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: s,
    onStepClick: l,
    stepFillColor: i
  } = e;
  return (0, a.jsx)("div", {
    className: h.progressContainer,
    children: t.map(e => {
      let {
        index: t,
        name: r,
        hasError: o
      } = e;
      return (0, a.jsx)(_, {
        name: r,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: o,
        index: t,
        fillBackgroundColor: i,
        animate: n === t || n + 1 === t
      }, r)
    })
  })
}

function S(e) {
  let {
    children: t,
    className: n,
    isBackDisabled: l,
    isNextDisabled: r,
    onNextClick: o,
    onBackClick: d,
    nextButtonBackgroundColor: c
  } = e, _ = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), C = s.useMemo(() => (0, f.getClanPrimaryButtonStyles)(c, _.hex()), [c, _]), S = null != C;
  return (0, a.jsxs)("div", {
    className: i()(h.buttonsContainer, n),
    children: [(0, a.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: d,
      disabled: l,
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, a.jsx)(u.Button, {
      style: C,
      className: S ? h.customButton : void 0,
      look: u.Button.Looks.FILLED,
      size: u.Button.Sizes.MEDIUM,
      color: S ? u.Button.Colors.CUSTOM : u.Button.Colors.BRAND,
      onClick: o,
      disabled: r,
      children: E.default.Messages.PAGINATION_NEXT
    })]
  })
}