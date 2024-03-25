"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var a = l("37983");
l("884691");
var s = l("398654"),
  n = l("311161"),
  o = l("961868");

function i(e) {
  let {
    guild: t
  } = e, {
    shouldShowIncidentActions: l,
    incidentData: i,
    isUnderLockdown: r
  } = (0, s.useGuildIncidentsState)(t.id), d = !1;
  return (null != i && (d = (0, n.hasDetectedActivity)(i) && l), d || r) ? (0, a.jsx)(o.default, {
    guild: t,
    incidentData: i,
    isUnderLockdown: r,
    isRaidDetected: d
  }) : null
}