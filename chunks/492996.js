"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("77078"),
  i = n("290226"),
  r = n("695681"),
  o = n("447435"),
  u = n("817892"),
  d = n("908480"),
  c = n("786214"),
  E = n("782340");

function f(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: f,
    onClose: _
  } = e, T = (0, l.useStateFromStores)([u.default], () => u.default.getFpMessageInfo(n)), I = T.attachments.map(e => e.id), m = T.attachments.map(e => e.filename), {
    reportFalsePositive: N,
    isReportFalsePositiveLoading: p
  } = (0, d.useExplicitMediaActions)({
    onSuccess: () => {
      (0, c.handleSuccess)(_), i.default.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, r.reportFailedSendFalsePositive)(t, n, I, m)
    }
  }), S = T.attachments.length > 0;
  return !S && _(), (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: p,
    analyticsContext: o.TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: N,
    transitionState: f,
    onClose: _
  })
}