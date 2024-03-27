"use strict";
t.r(a), t.d(a, {
  default: function() {
    return f
  }
});
var s = t("37983"),
  n = t("884691"),
  l = t("414456"),
  i = t.n(l),
  r = t("65597"),
  d = t("877585"),
  o = t("77078"),
  c = t("251144"),
  E = t("20662"),
  u = t("277734"),
  N = t("764828"),
  R = t("217736"),
  T = t("782340"),
  _ = t("965252"),
  A = t("882746");

function S() {
  return (0, s.jsxs)("div", {
    className: i(A.toast, _.toast),
    children: [(0, s.jsx)(d.ShieldIcon, {
      color: o.tokens.colors.TEXT_BRAND
    }), (0, s.jsx)(o.Text, {
      className: A.content,
      color: "header-primary",
      variant: "text-md/normal",
      children: T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
    })]
  })
}

function f(e) {
  let {
    channelId: a,
    warningId: t,
    senderId: l
  } = e, d = (0, r.useStateFromStores)([N.default], () => N.default.getChannelSafetyWarning(a, t)), A = n.useMemo(() => (null == d ? void 0 : d.feedback_type) === N.SafetyWarningFeedbackTypes.UPVOTE, [d]), f = n.useMemo(() => (null == d ? void 0 : d.feedback_type) === N.SafetyWarningFeedbackTypes.DOWNVOTE, [d]), x = n.useCallback((e, n) => {
    (null == d ? void 0 : d.feedback_type) !== e && ((0, u.setChannelSafetyWarningFeedback)(a, t, e), (0, o.showToast)((0, o.createToast)(T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, o.ToastType.CUSTOM, {
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
    className: _.feedback,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: T.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
    }), (0, s.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, s.jsx)(o.Clickable, {
        className: i([_.buttonsBackground, A ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
          [_.disabled]: A
        }]),
        onClick: () => x(N.SafetyWarningFeedbackTypes.UPVOTE, R.CtaEventTypes.FEEDBACK_UPVOTE),
        "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
        children: (0, s.jsx)(E.default, {
          className: _.buttonIcon,
          color: "interactive-normal"
        })
      }), (0, s.jsx)(o.Clickable, {
        className: i([_.buttonsBackground, f ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, {
          [_.disabled]: f
        }]),
        onClick: () => x(N.SafetyWarningFeedbackTypes.DOWNVOTE, R.CtaEventTypes.FEEDBACK_DOWNVOTE),
        "aria-label": T.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
        children: (0, s.jsx)(c.default, {
          className: _.buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}