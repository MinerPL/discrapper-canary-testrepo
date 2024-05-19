"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  T = s("481060"),
  n = s("230711"),
  o = s("63063"),
  r = s("378298"),
  S = s("584656"),
  _ = s("993750"),
  i = s("981631"),
  E = s("526761"),
  u = s("689938"),
  d = s("955876");
t.default = function(e) {
  let {
    onClose: t,
    channelId: s
  } = e, [O, c] = l.useState(!1), A = l.useCallback(() => {
    n.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY, null, {
      scrollPosition: E.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
    }), t()
  }, [t]), C = l.useCallback(() => {
    !O && (c(!0), (0, r.reportFalsePositive)(s).then(() => {
      t(), (0, S.showSafetyToast)({
        text: u.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      c(!1), (0, T.showToast)((0, T.createToast)(u.default.Messages.ERROR_GENERIC_TITLE, T.ToastType.FAILURE))
    }))
  }, [s, t, O]);
  return (0, a.jsxs)(_.default, {
    style: d.wrapperStyle,
    children: [(0, a.jsx)(T.Text, {
      variant: "text-md/medium",
      children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
        learnMoreLink: o.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
      })
    }), (0, a.jsx)(T.Button, {
      className: d.settingsButton,
      onClick: A,
      fullWidth: !0,
      children: u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(T.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: d.reportFalsePositiveText,
        children: u.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
          reportFalsePositiveHook: (e, t) => (0, a.jsx)(T.Button, {
            className: d.reportFalsePositiveButton,
            size: T.Button.Sizes.NONE,
            color: T.Button.Colors.LINK,
            look: T.Button.Looks.LINK,
            disabled: O,
            onClick: C,
            children: e
          }, t)
        })
      })
    })]
  })
}