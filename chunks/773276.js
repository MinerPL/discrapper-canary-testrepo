"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("399606"),
  l = n("481060"),
  i = n("923500"),
  r = n("522664"),
  o = n("163268"),
  u = n("774863"),
  d = n("668058"),
  c = n("160877"),
  f = n("689938");

function E(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: E,
    onClose: _
  } = e, T = (0, a.useStateFromStores)([u.default], () => u.default.getFpMessageInfo(n)), m = T.attachments.map(e => e.id), I = T.attachments.map(e => e.filename), {
    reportFalsePositive: p,
    isReportFalsePositiveLoading: h
  } = (0, d.useExplicitMediaActions)({
    onSuccess: () => {
      (0, c.handleSuccess)(_), i.default.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, l.showToast)((0, l.createToast)(f.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
    },
    report: () => {
      (0, r.reportFailedSendFalsePositive)(t, n, m, I)
    }
  });
  return !(T.attachments.length > 0) && _(), (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: h,
    analyticsContext: o.TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: p,
    transitionState: E,
    onClose: _
  })
}