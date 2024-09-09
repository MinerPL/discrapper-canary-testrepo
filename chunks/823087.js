t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(399606),
    i = t(481060),
    r = t(284056),
    o = t(131951),
    l = t(63063),
    c = t(981631),
    d = t(65154),
    _ = t(689938),
    E = t(488535);
function u() {
    return (0, a.e7)([o.Z], () => o.Z.supports(d.AN.LOOPBACK))
        ? (0, n.jsx)('div', {
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
          })
        : null;
}
