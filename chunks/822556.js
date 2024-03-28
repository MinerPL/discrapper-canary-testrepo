"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("230711"),
  i = n("937482"),
  r = n("981631"),
  o = n("689938");

function u() {
  return (0, a.jsx)(l.MenuItem, {
    id: "voice-settings",
    label: o.default.Messages.VOICE_SETTINGS,
    action: () => s.default.open(r.UserSettingsSections.VOICE),
    icon: i.default
  })
}