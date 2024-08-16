var n = _(392711),
    I = _.n(n),
    R = _(981631),
    o = _(689938);
let { CAPTCHA: t, EMAIL: i, PHONE: r, REVERIFY_EMAIL: c, REVERIFY_PHONE: a } = R.PUi,
    s = {
        [R.c2C.REQUIRE_VERIFIED_EMAIL]: [i],
        [R.c2C.REQUIRE_VERIFIED_PHONE]: [r],
        [R.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [R.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
        [R.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [i, r],
        [R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, c],
        [R.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [i, a],
        [R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
        [R.c2C.REQUIRE_CAPTCHA]: [t],
        [R.c2C.AGREEMENTS]: []
    };
e.Z = {
    isPhoneReverification: (E, e) => void 0 !== E && E.isPhoneVerified() && (e === R.c2C.REQUIRE_REVERIFIED_PHONE || e === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === R.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: (E) => E === R.c2C.REQUIRE_REVERIFIED_EMAIL || E === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || E === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    getVerificationTypes: (E) => (null == E || 'symbol' == typeof E ? [] : s[E]),
    getButtonTitle(E) {
        switch (E) {
            case R.PUi.EMAIL:
                return o.Z.Messages.VERIFY_BY_EMAIL;
            case R.PUi.PHONE:
                return o.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case R.PUi.REVERIFY_EMAIL:
                return o.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case R.PUi.REVERIFY_PHONE:
                return o.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
                return o.Z.Messages.START_VERIFICATION_BUTTON;
        }
    },
    areVerificationTypesEqual: (E, e) => I().isEqual(E, e)
};
