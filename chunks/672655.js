a.d(t, {
  Z: function() {
return s;
  }
}), a(653041);
var n = a(701488),
  l = a(689938);

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
a = [{
    value: n.K8.FAILED_LOAD,
    label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
  },
  {
    value: n.K8.LAGGING,
    label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
  },
  {
    value: n.K8.CONFUSING,
    label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
  },
  {
    value: n.K8.NOT_FUN,
    label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
  },
  {
    value: n.K8.OTHER,
    label: l.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
  }
];
  return t && a.push({
value: n.K8.ADS,
label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS
  }), a;
}