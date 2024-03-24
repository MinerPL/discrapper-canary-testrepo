"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("77078"),
  r = s("79112"),
  o = s("701909"),
  i = s("277734"),
  T = s("153327"),
  u = s("514914"),
  S = s("49111"),
  _ = s("782340"),
  d = s("821054"),
  E = function(e) {
    let {
      onClose: t,
      channelId: s
    } = e, [E, c] = a.useState(!1), O = a.useCallback(() => {
      r.default.open(S.UserSettingsSections.PRIVACY_AND_SAFETY), t()
    }, [t]), A = a.useCallback(() => {
      !E && (c(!0), (0, i.reportFalsePositive)(s).then(() => {
        t(), (0, T.showSafetyToast)({
          text: _.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
          id: "safety-tools-report-false-positive"
        })
      }).catch(() => {
        c(!1), (0, l.showToast)((0, l.createToast)(_.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
      }))
    }, [s, t, E]);
    return (0, n.jsxs)(u.default, {
      style: d.wrapperStyle,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
          learnMoreLink: o.default.getArticleURL(S.HelpdeskArticles.SAFETY_ALERTS)
        })
      }), (0, n.jsx)(l.Button, {
        className: d.settingsButton,
        onClick: O,
        children: _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
      }), (0, n.jsx)("div", {
        className: d.reportFalsePositive,
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: d.reportFalsePositiveText,
          children: _.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
            reportFalsePositiveHook: (e, t) => (0, n.jsx)(l.Button, {
              className: d.reportFalsePositiveButton,
              size: l.Button.Sizes.NONE,
              color: l.Button.Colors.LINK,
              look: l.Button.Looks.LINK,
              disabled: E,
              onClick: A,
              children: e
            }, t)
          })
        })
      })]
    })
  }