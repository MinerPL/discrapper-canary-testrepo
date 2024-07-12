var o = n(392711),
  r = n.n(o),
  s = n(981631),
  a = n(689938);
let {
  CAPTCHA: i,
  EMAIL: l,
  PHONE: d,
  REVERIFY_EMAIL: c,
  REVERIFY_PHONE: E
} = s.PUi, u = {
  [s.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
  [s.c2C.REQUIRE_VERIFIED_PHONE]: [d],
  [s.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
  [s.c2C.REQUIRE_REVERIFIED_PHONE]: [E],
  [s.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
l,
d
  ],
  [s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
d,
c
  ],
  [s.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [
l,
E
  ],
  [s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [
c,
E
  ],
  [s.c2C.REQUIRE_CAPTCHA]: [i],
  [s.c2C.AGREEMENTS]: []
};
t.Z = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === s.c2C.REQUIRE_REVERIFIED_PHONE || t === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === s.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === s.c2C.REQUIRE_REVERIFIED_EMAIL || e === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || 'symbol' == typeof e ? [] : u[e],
  getButtonTitle(e) {
switch (e) {
  case s.PUi.EMAIL:
    return a.Z.Messages.VERIFY_BY_EMAIL;
  case s.PUi.PHONE:
    return a.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
  case s.PUi.REVERIFY_EMAIL:
    return a.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
  case s.PUi.REVERIFY_PHONE:
    return a.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
  default:
    return a.Z.Messages.START_VERIFICATION_BUTTON;
}
  },
  areVerificationTypesEqual: (e, t) => r().isEqual(e, t)
};