"use strict";
t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(587431),
  l = t(539290),
  a = t(689938);

function r(e) {
  let s, {
    resubmittingEnableRequest: t,
    resubmissionError: r,
    createEnableRequest: o,
    requestRejectedNoticeText: c,
    reapplyNoticeText: d,
    isApplicationPending: u
  } = e;
  if (null != r) return (0, n.jsx)(i.Z, {
    children: r.getAnyErrorMessage()
  });
  let E = null;
  return u ? E = a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RECEIVED_AND_PENDING : null != c ? E = c : null != d && (E = d, s = a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA), null != E ? (0, n.jsx)(l.Z, {
    notice: E,
    ctaLabel: s,
    ctaLoading: t,
    onClick: o
  }) : null
}