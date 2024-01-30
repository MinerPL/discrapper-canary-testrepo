"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("77078"),
  i = n("29212"),
  r = n("695681"),
  o = n("290723"),
  u = n("817892"),
  d = n("908480"),
  c = n("786214"),
  f = n("782340");

function E(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: E,
    onClose: _
  } = e, T = (0, o.useIsEligibleForExplicitMediaSenderFalsePositive)("fp_action_sheet"), I = (0, l.default)([u.default], () => u.default.getFpMessageInfo(n)), m = I.attachments.map(e => e.id), N = I.attachments.map(e => e.filename), {
    reportFalsePositive: p,
    isReportFalsePositiveLoading: A
  } = (0, d.useExplicitMediaActions)({
    onSuccess: () => {
      (0, c.handleSuccess)(_), i.default.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(f.default.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
    },
    report: () => {
      (0, r.reportFailedSendFalsePositive)(t, n, m, N)
    }
  }), S = T && I.attachments.length > 0;
  return !S && _(), (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: A,
    onConfirmPress: p,
    transitionState: E,
    onClose: _
  })
}