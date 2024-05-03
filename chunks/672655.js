"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
}), a("653041");
var l = a("701488"),
  s = a("689938");

function n(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = [{
      value: l.ActivityFeedbackReasons.FAILED_LOAD,
      label: e ? s.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : s.default.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
    }, {
      value: l.ActivityFeedbackReasons.LAGGING,
      label: e ? s.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : s.default.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
    }, {
      value: l.ActivityFeedbackReasons.CONFUSING,
      label: e ? s.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : s.default.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
    }, {
      value: l.ActivityFeedbackReasons.NOT_FUN,
      label: e ? s.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : s.default.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
    }, {
      value: l.ActivityFeedbackReasons.OTHER,
      label: s.default.Messages.CALL_FEEDBACK_OPTION_OTHER
    }];
  return t && a.push({
    value: l.ActivityFeedbackReasons.ADS,
    label: e ? s.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS : s.default.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS
  }), a
}