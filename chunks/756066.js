"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var l = s("587431"),
  n = s("539290"),
  i = s("689938");

function r(e) {
  let t, {
    resubmittingEnableRequest: s,
    resubmissionError: r,
    createEnableRequest: o,
    requestRejectedNoticeText: d,
    reapplyNoticeText: u,
    isApplicationPending: c
  } = e;
  if (null != r) return (0, a.jsx)(l.default, {
    children: r.getAnyErrorMessage()
  });
  let E = null;
  return c ? E = i.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RECEIVED_AND_PENDING : null != d ? E = d : null != u && (E = u, t = i.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA), null != E ? (0, a.jsx)(n.default, {
    notice: E,
    ctaLabel: t,
    ctaLoading: s,
    onClick: o
  }) : null
}