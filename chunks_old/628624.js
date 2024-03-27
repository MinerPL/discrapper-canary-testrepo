"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("45299"),
  i = s("900938"),
  r = s("223170"),
  o = s("478964"),
  d = s("782340"),
  u = () => {
    let {
      guild: e
    } = (0, l.useStateFromStores)([i.default], () => i.default.getProps()), {
      submitting: t,
      welcomeSettings: s
    } = (0, l.useStateFromStores)([o.default], () => o.default.getSettingsProps());
    return null == e ? null : (0, a.jsx)(n.default, {
      onSave: () => (0, r.saveWelcomeScreen)(e.id, s),
      onReset: r.resetWelcomeScreen,
      submitting: t,
      onSaveText: d.default.Messages.TRY_AGAIN,
      message: d.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_UPDATE_FAILURE
    })
  }