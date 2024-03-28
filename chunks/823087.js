"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("399606"),
  l = s("481060"),
  i = s("284056"),
  r = s("131951"),
  o = s("63063"),
  d = s("981631"),
  u = s("65154"),
  c = s("689938"),
  S = s("496326");

function E() {
  return (0, n.useStateFromStores)([r.default], () => r.default.supports(u.Features.LOOPBACK)) ? (0, a.jsx)("div", {
    className: S.micTest,
    children: (0, a.jsx)(i.default, {
      title: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      description: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_DESCRIPTION,
      notchBackground: i.NotchBackground.GRAY,
      captionVoice: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_CAPTION,
      captionNoVoice: (0, a.jsxs)(a.Fragment, {
        children: [c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_NO_INPUT_NOTICE, (0, a.jsx)(l.Anchor, {
          className: S.micTestHelpLink,
          href: o.default.getArticleURL(d.HelpdeskArticles.NO_INPUT_DETECTED),
          children: c.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
        })]
      }),
      buttonTest: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_INACTIVE,
      buttonStop: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_ACTIVE,
      buttonClassName: S.micTestButton,
      buttonColor: l.Button.Colors.BRAND,
      location: {
        page: d.AnalyticsPages.USER_SETTINGS,
        section: d.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }
    })
  }) : null
}