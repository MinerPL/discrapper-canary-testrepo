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
  E = s("689938"),
  u = s("128830");
t.default = function(e) {
  let {
    onClose: t,
    channelId: s
  } = e, [d, O] = l.useState(!1), c = l.useCallback(() => {
    n.default.open(i.UserSettingsSections.PRIVACY_AND_SAFETY), t()
  }, [t]), A = l.useCallback(() => {
    !d && (O(!0), (0, r.reportFalsePositive)(s).then(() => {
      t(), (0, S.showSafetyToast)({
        text: E.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      O(!1), (0, T.showToast)((0, T.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, T.ToastType.FAILURE))
    }))
  }, [s, t, d]);
  return (0, a.jsxs)(_.default, {
    style: u.wrapperStyle,
    children: [(0, a.jsx)(T.Text, {
      variant: "text-md/medium",
      children: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
        learnMoreLink: o.default.getArticleURL(i.HelpdeskArticles.SAFETY_ALERTS)
      })
    }), (0, a.jsx)(T.Button, {
      className: u.settingsButton,
      onClick: c,
      children: E.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
    }), (0, a.jsx)("div", {
      className: u.__invalid_reportFalsePositive,
      children: (0, a.jsx)(T.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: u.reportFalsePositiveText,
        children: E.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
          reportFalsePositiveHook: (e, t) => (0, a.jsx)(T.Button, {
            className: u.reportFalsePositiveButton,
            size: T.Button.Sizes.NONE,
            color: T.Button.Colors.LINK,
            look: T.Button.Looks.LINK,
            disabled: d,
            onClick: A,
            children: e
          }, t)
        })
      })
    })]
  })
}