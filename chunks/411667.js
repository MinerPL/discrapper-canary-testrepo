"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("346163"),
  n = s("587431"),
  i = s("539290"),
  r = s("981631"),
  o = s("689938"),
  d = s("865310");

function u(e) {
  let t, {
      guild: s
    } = e,
    {
      resubmittingEnableRequest: u,
      resubmissionError: c,
      createEnableRequest: E,
      resubmittedRequest: _,
      requestRejectedNoticeText: I,
      reapplyNoticeText: T
    } = (0, l.default)(s),
    S = s.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
    f = s.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != c) return (0, a.jsx)(n.default, {
    className: d.noticeContainer,
    children: c.getAnyErrorMessage()
  });
  let m = null;
  return null != I ? m = I : _ ? m = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_PENDING : null != T ? (m = T, t = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA) : f ? m = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_READ_ONLY_FOR_PENDING_NEW_OWNER_PENDING_NOTICE : S && (m = o.default.Messages.CREATOR_MONETIZATION_SETTINGS_RESTRICTED_NOTICE), null != m ? (0, a.jsx)(i.default, {
    className: d.noticeContainer,
    notice: m,
    ctaLabel: t,
    ctaLoading: u,
    onClick: E
  }) : null
}