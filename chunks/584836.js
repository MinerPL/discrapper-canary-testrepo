"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("735250");
n("470079");
var l = n("481060"),
  a = n("37234"),
  i = n("434404"),
  d = n("981631"),
  r = n("689938");

function s(e, t) {
  return t === d.AppContext.POPOUT ? null : (0, u.jsx)(l.MenuItem, {
    id: "nav-server-settings",
    label: r.default.Messages.SERVER_SETTINGS,
    action: () => {
      (0, a.popLayer)(), i.default.open(e, d.GuildSettingsSections.MODERATION)
    }
  })
}