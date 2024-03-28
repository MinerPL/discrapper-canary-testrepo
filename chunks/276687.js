"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("852860"),
  i = s("999382"),
  r = s("524329"),
  o = s("575258"),
  d = s("689938");
t.default = () => {
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