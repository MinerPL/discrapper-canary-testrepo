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
  i = n("191471"),
  d = n("981631"),
  r = n("689938");

function s(e, t) {
  return t === d.AppContext.POPOUT ? null : (0, u.jsx)(l.MenuItem, {
    id: "report-raid",
    label: r.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
    action: () => {
      (0, a.popLayer)(), (0, i.openReportRaidModal)(e)
    }
  })
}