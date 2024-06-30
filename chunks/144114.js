t.d(n, {
    L: function () {
        return r;
    }
});
var o, r, a = t(990547), i = t(544891), s = t(570140), l = t(314897), c = t(573261), u = t(815660), d = t(981631);
(o = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required', o.USER_SETTINGS_UPDATE = 'user_settings_update', o.GUILD_PHONE_REQUIRED = 'guild_phone_required', o.MFA_PHONE_UPDATE = 'mfa_phone_update', o.CONTACT_SYNC = 'contact_sync', n.Z = {
    setCountryCode(e) {
        s.Z.dispatch({
            type: 'PHONE_SET_COUNTRY_CODE',
            countryCode: e
        });
    },
    removePhone: (e, n) => i.tn.del({
        url: d.ANM.PHONE,
        body: {
            password: e,
            change_phone_reason: n
        },
        oldFormErrors: !0
    }),
    resendCode(e) {
        let n = {}, t = l.default.getFingerprint();
        return null != t && '' !== t && (n['X-Fingerprint'] = t), i.tn.post({
            url: d.ANM.RESEND_PHONE,
            headers: n,
            body: { phone: e }
        });
    },
    beginAddPhone: (e, n) => i.tn.post({
        url: d.ANM.PHONE,
        body: {
            phone: e,
            change_phone_reason: n
        }
    }),
    addPhone: (e, n, t) => i.tn.post({
        url: d.ANM.PHONE,
        body: {
            phone_token: e,
            password: n,
            change_phone_reason: t
        },
        oldFormErrors: !0
    }),
    addPhoneWithoutPassword: e => i.tn.post({
        url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
        body: { code: e }
    }),
    beginReverifyPhone: (e, n) => i.tn.post({
        url: d.ANM.PHONE_REVERIFY,
        body: {
            phone: e,
            change_phone_reason: n
        }
    }),
    reverifyPhone: (e, n, t) => i.tn.post({
        url: d.ANM.PHONE_REVERIFY,
        body: {
            phone_token: e,
            password: n,
            change_phone_reason: t
        },
        oldFormErrors: !0
    }),
    validatePhoneForSupport: e => i.tn.post({
        url: d.ANM.VERIFY_PHONE_FOR_TICKET,
        body: { token: e },
        oldFormErrors: !0
    }),
    async verifyPhone(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = {}, i = l.default.getFingerprint();
        null != i && '' !== i && (r['X-Fingerprint'] = i), o && (r.authorization = '');
        let m = await c.Z.post({
            url: d.ANM.VERIFY_PHONE,
            headers: r,
            body: {
                phone: e,
                code: n
            },
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY_PHONE }
        });
        return t && s.Z.dispatch({
            type: 'MODAL_POP',
            key: u.M
        }), m.body;
    }
};
