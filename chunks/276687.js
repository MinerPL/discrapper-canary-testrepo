"use strict";
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(852860),
  a = t(999382),
  r = t(524329),
  o = t(575258),
  c = t(689938);
s.Z = () => {
  let {
    guild: e
  } = (0, i.e7)([a.Z], () => a.Z.getProps()), {
    submitting: s,
    welcomeSettings: t
  } = (0, i.e7)([o.Z], () => o.Z.getSettingsProps());
  return null == e ? null : (0, n.jsx)(l.Z, {
    onSave: () => (0, r.Es)(e.id, t),
    onReset: r.Xb,
    submitting: s,
    onSaveText: c.Z.Messages.TRY_AGAIN,
    message: c.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_UPDATE_FAILURE
  })
}