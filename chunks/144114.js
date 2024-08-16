n.d(t, {
    L: function () {
        return r;
    }
});
var o,
    r,
    s = n(990547),
    a = n(544891),
    i = n(570140),
    l = n(314897),
    d = n(573261),
    c = n(815660),
    E = n(981631);
((o = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (o.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (o.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (o.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (o.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            i.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            a.tn.del({
                url: E.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0
            }),
        resendCode(e) {
            let t = {},
                n = l.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                a.tn.post({
                    url: E.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e }
                })
            );
        },
        beginAddPhone: (e, t) =>
            a.tn.post({
                url: E.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        addPhone: (e, t, n) =>
            a.tn.post({
                url: E.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        addPhoneWithoutPassword: (e) =>
            a.tn.post({
                url: E.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e }
            }),
        beginReverifyPhone: (e, t) =>
            a.tn.post({
                url: E.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        reverifyPhone: (e, t, n) =>
            a.tn.post({
                url: E.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        validatePhoneForSupport: (e) =>
            a.tn.post({
                url: E.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                a = l.default.getFingerprint();
            null != a && '' !== a && (r['X-Fingerprint'] = a), o && (r.authorization = '');
            let u = await d.Z.post({
                url: E.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.USER_VERIFY_PHONE }
            });
            return (
                n &&
                    i.Z.dispatch({
                        type: 'MODAL_POP',
                        key: c.M
                    }),
                u.body
            );
        }
    });
