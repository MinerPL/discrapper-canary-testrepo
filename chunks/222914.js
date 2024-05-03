"use strict";
t.r(a), t.d(a, {
  default: function() {
    return f
  }
});
var s = t("735250"),
  n = t("470079"),
  l = t("120356"),
  i = t.n(l),
  r = t("399606"),
  d = t("914576"),
  o = t("481060"),
  c = t("446183"),
  E = t("677281"),
  u = t("378298"),
  N = t("359119"),
  R = t("473092"),
  _ = t("689938"),
  T = t("43522"),
  A = t("420311");

function S() {
  return (0, s.jsxs)("div", {
    className: i()(A.toast, T.toast),
    children: [(0, s.jsx)(d.ShieldIcon, {
      color: o.tokens.colors.TEXT_BRAND
    }), (0, s.jsx)(o.Text, {
      className: A.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: _.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
    })]
  })
}

function f(e) {
  let {
    channelId: a,
    warningId: t,
    senderId: l
  } = e, d = (0, r.useStateFromStores)([N.default], () => N.default.getChannelSafetyWarning(a, t)), A = n.useMemo(() => (null == d ? void 0 : d.feedback_type) === N.SafetyWarningFeedbackTypes.UPVOTE, [d]), f = n.useMemo(() => (null == d ? void 0 : d.feedback_type) === N.SafetyWarningFeedbackTypes.DOWNVOTE, [d]), x = n.useCallback((e, n) => {
    (null == d ? void 0 : d.feedback_type) !== e && ((0, u.setChannelSafetyWarningFeedback)(a, t, e), (0, o.showToast)((0, o.createToast)(_.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, o.ToastType.CUSTOM, {
      component: (0, s.jsx)(S, {})
    })), (0, R.trackCtaEvent)({
      channelId: a,
      warningId: t,
      senderId: l,
      warningType: N.SafetyWarningTypes.STRANGER_DANGER,
      cta: n
    }))
  }, [d, a, t, l]);
  return (0, s.jsxs)("div", {
    className: T.feedback,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: _.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
    }), (0, s.jsxs)("div", {
      className: T.buttonsContainer,
      children: [(0, s.jsx)(o.Clickable, {
        className: i()([T.buttonsBackground, A ? T.buttonsBackgroundActive : T.buttonsBackgroundInactive, {
          [T.disabled]: A
        }]),
        onClick: () => x(N.SafetyWarningFeedbackTypes.UPVOTE, R.CtaEventTypes.FEEDBACK_UPVOTE),
        "aria-label": _.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
        children: (0, s.jsx)(E.default, {
          className: T.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, s.jsx)(o.Clickable, {
        className: i()([T.buttonsBackground, f ? T.buttonsBackgroundActive : T.buttonsBackgroundInactive, {
          [T.disabled]: f
        }]),
        onClick: () => x(N.SafetyWarningFeedbackTypes.DOWNVOTE, R.CtaEventTypes.FEEDBACK_DOWNVOTE),
        "aria-label": _.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
        children: (0, s.jsx)(c.default, {
          className: T.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}