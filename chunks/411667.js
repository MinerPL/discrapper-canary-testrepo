"use strict";
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(346163),
  l = t(587431),
  a = t(539290),
  r = t(981631),
  o = t(689938),
  c = t(83970);

function d(e) {
  let s, {
      guild: t
    } = e,
    {
      resubmittingEnableRequest: d,
      resubmissionError: u,
      createEnableRequest: E,
      resubmittedRequest: _,
      requestRejectedNoticeText: I,
      reapplyNoticeText: T
    } = (0, i.Z)(t),
    N = t.hasFeature(r.oNc.CREATOR_MONETIZABLE_RESTRICTED),
    m = t.hasFeature(r.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != u) return (0, n.jsx)(l.Z, {
    className: c.noticeContainer,
    children: u.getAnyErrorMessage()
  });
  let S = null;
  return null != I ? S = I : _ ? S = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_PENDING : null != T ? (S = T, s = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA) : m ? S = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_READ_ONLY_FOR_PENDING_NEW_OWNER_PENDING_NOTICE : N && (S = o.Z.Messages.CREATOR_MONETIZATION_SETTINGS_RESTRICTED_NOTICE), null != S ? (0, n.jsx)(a.Z, {
    className: c.noticeContainer,
    notice: S,
    ctaLabel: s,
    ctaLoading: d,
    onClick: E
  }) : null
}