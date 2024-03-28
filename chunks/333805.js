"use strict";
u.r(t), u.d(t, {
  default: function() {
    return o
  }
});
var a = u("735250");
u("470079");
var n = u("481060"),
  l = u("726521"),
  s = u("427679"),
  d = u("795295"),
  i = u("689938");

function o(e) {
  let t = s.default.isLive(e.id);
  return e.isGuildStageVoice() && t ? (0, a.jsx)(n.MenuItem, {
    id: "report-stage",
    label: i.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
    action: () => (0, l.showReportModalForStageChannel)(e),
    icon: d.default,
    color: "danger"
  }) : null
}