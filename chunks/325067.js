var n, a, i, r, o = s(392711), l = s.n(o), c = s(213919), d = s(442837), _ = s(570140);
let E = !1, u = [], T = '', I = '', S = !1, N = {
        viewNonce: '',
        regenerateNonce: ''
    };
class C extends (r = d.ZP.Store) {
    getVerificationKey() {
        return T;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return E;
    }
    getNonces() {
        return N;
    }
    get emailToken() {
        return I;
    }
    get hasSeenBackupPrompt() {
        return S;
    }
}
i = 'MFAStore', (a = 'displayName') in (n = C) ? Object.defineProperty(n, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : n[a] = i, t.Z = new C(_.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let {
            token: t,
            codes: s
        } = e;
        void 0 !== t && c.setToken(t), u = s;
    },
    MFA_ENABLE_EMAIL_TOKEN: function (e) {
        let {token: t} = e;
        I = t;
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let {token: t} = e;
        c.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        E = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        E = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        u = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let {
            codes: t,
            key: s
        } = e;
        u = l().sortBy(t, 'code'), T = s;
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let {nonces: t} = e;
        N = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        S = !0;
    }
});
