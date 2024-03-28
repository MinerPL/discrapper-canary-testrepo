"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var a = l("735250");
l("470079");
var s = l("528011"),
  n = l("533244"),
  o = l("596482");

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