s.d(t, {
  Z: function() {
return u;
  }
});
var n = s(735250);
s(470079);
var a = s(399606),
  i = s(481060),
  r = s(284056),
  o = s(131951),
  l = s(63063),
  c = s(981631),
  d = s(65154),
  _ = s(689938),
  E = s(900865);

function u() {
  return (0, a.e7)([o.Z], () => o.Z.supports(d.AN.LOOPBACK)) ? (0, n.jsx)('div', {
className: E.micTest,
children: (0, n.jsx)(r.Z, {
  title: _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
  description: _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_DESCRIPTION,
  notchBackground: r._.GRAY,
  captionVoice: _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_CAPTION,
  captionNoVoice: (0, n.jsxs)(n.Fragment, {
    children: [
      _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_NO_INPUT_NOTICE,
      (0, n.jsx)(i.Anchor, {
        className: E.micTestHelpLink,
        href: l.Z.getArticleURL(c.BhN.NO_INPUT_DETECTED),
        children: _.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
      })
    ]
  }),
  buttonTest: _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_INACTIVE,
  buttonStop: _.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_ACTIVE,
  buttonClassName: E.micTestButton,
  buttonColor: i.Button.Colors.BRAND,
  location: {
    page: c.ZY5.USER_SETTINGS,
    section: c.jXE.SETTINGS_VOICE_AND_VIDEO
  }
})
  }) : null;
}