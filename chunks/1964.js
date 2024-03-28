"use strict";
n.r(t);
var r = n("392711"),
  o = n.n(r),
  s = n("981631"),
  a = n("689938");
let {
  CAPTCHA: i,
  EMAIL: l,
  PHONE: d,
  REVERIFY_EMAIL: u,
  REVERIFY_PHONE: E
} = s.VerificationTypes, c = {
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [l],
  [s.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [d],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [u],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [E],
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, d],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [d, u],
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, E],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, E],
  [s.UserRequiredActions.REQUIRE_CAPTCHA]: [i],
  [s.UserRequiredActions.AGREEMENTS]: []
};
t.default = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : c[e],
  getButtonTitle(e) {
    switch (e) {
      case s.VerificationTypes.EMAIL:
        return a.default.Messages.VERIFY_BY_EMAIL;
      case s.VerificationTypes.PHONE:
        return a.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case s.VerificationTypes.REVERIFY_EMAIL:
        return a.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case s.VerificationTypes.REVERIFY_PHONE:
        return a.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return a.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => o().isEqual(e, t)
}