"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var r = n("917351"),
  i = n.n(r),
  s = n("49111"),
  o = n("782340");
let {
  CAPTCHA: a,
  EMAIL: l,
  PHONE: u,
  REVERIFY_EMAIL: d,
  REVERIFY_PHONE: c
} = s.VerificationTypes, f = {
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [l],
  [s.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [c],
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, u],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
  [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, c],
  [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, c],
  [s.UserRequiredActions.REQUIRE_CAPTCHA]: [a],
  [s.UserRequiredActions.AGREEMENTS]: []
};
var E = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case s.VerificationTypes.EMAIL:
        return o.default.Messages.VERIFY_BY_EMAIL;
      case s.VerificationTypes.PHONE:
        return o.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case s.VerificationTypes.REVERIFY_EMAIL:
        return o.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case s.VerificationTypes.REVERIFY_PHONE:
        return o.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return o.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => i.isEqual(e, t)
}