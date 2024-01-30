"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("37983");
a("884691");
var i = a("77078"),
  n = a("695681"),
  d = a("457971"),
  l = a("908480"),
  o = a("39393"),
  r = a("786214"),
  c = a("782340");

function u(e) {
  let {
    channelId: t,
    messageId: a,
    attachmentId: u,
    embedId: E,
    transitionState: _,
    onClose: M
  } = e, R = (0, d.useIsEligibleForExplicitMediaRedaction)(), T = (0, o.useExplicitMediaAttachmentsForMessage)(t, a, u), f = (0, o.useExplicitMediaEmbedsForMessage)(t, a, E), {
    reportFalsePositive: A,
    isReportFalsePositiveLoading: C
  } = (0, l.useExplicitMediaActions)({
    onSuccess: () => (0, r.handleSuccess)(M),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(c.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE))
    },
    report: () => {
      (0, n.reportFalsePositive)(t, a, T.map(e => e.id), f.map(e => e.id))
    }
  }), I = R && (T.length > 0 || f.length > 0);
  return !I && M(), (0, s.jsx)(r.ExplicitMediaFalsePositiveModal, {
    messageId: a,
    channelId: t,
    isReportFalsePositiveLoading: C,
    onConfirmPress: A,
    attachmentPreview: 1 === T.length && 0 === f.length ? T[0] : void 0,
    embedPreview: 1 === f.length && 0 === T.length ? f[0] : void 0,
    transitionState: _,
    onClose: M
  })
}