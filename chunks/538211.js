"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var s = a("70722"),
  l = a("689938");

function n(e, t) {
  return [{
    value: s.StreamIssueReportReasons.BLACK_SCREEN,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_BLACK : l.default.Messages.STREAM_REPORT_BLACK
  }, {
    value: s.StreamIssueReportReasons.BLURRY,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_BLURRY : l.default.Messages.STREAM_REPORT_BLURRY
  }, {
    value: s.StreamIssueReportReasons.LAGGING,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_LAGGING : l.default.Messages.STREAM_REPORT_LAGGING
  }, {
    value: s.StreamIssueReportReasons.OUT_OF_SYNC,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC : l.default.Messages.STREAM_REPORT_OUT_OF_SYNC
  }, {
    value: s.StreamIssueReportReasons.AUDIO_MISSING,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING : l.default.Messages.STREAM_REPORT_AUDIO_MISSING
  }, {
    value: s.StreamIssueReportReasons.AUDIO_POOR,
    label: t ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_POOR : l.default.Messages.STREAM_REPORT_AUDIO_POOR
  }, {
    value: s.StreamIssueReportReasons.STREAM_STOPPED,
    label: l.default.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY
  }, {
    value: s.StreamIssueReportReasons.OTHER,
    label: l.default.Messages.CALL_FEEDBACK_OPTION_OTHER
  }]
}