let r, i;
n.r(t), n(47120), n(177593), n(653041), n(411104);
var a,
    s,
    o,
    l,
    u = n(512722),
    c = n.n(u),
    d = n(213919),
    _ = n(756647),
    E = n(442837),
    f = n(544891),
    h = n(433517),
    p = n(570140),
    m = n(911969),
    I = n(109728),
    T = n(670890),
    g = n(569611),
    S = n(710845),
    A = n(703656),
    N = n(786213),
    v = n(626135),
    O = n(449934),
    R = n(960048),
    C = n(117240),
    y = n(412788),
    D = n(981631),
    L = n(723359);
let b = new S.Z('AuthenticationStore'),
    M = 'fingerprint',
    P = 'email_cache',
    U = 'user_id_cache',
    w = null,
    x = null,
    G = null,
    k = null,
    B = null,
    F = null,
    V = null,
    H = null,
    Z = D.u34.NONE,
    Y = D.$ib.NONE,
    j = !1,
    W = [],
    K = '',
    z = !1,
    q = null,
    Q = !1,
    X = !1,
    $ = '',
    J = !1,
    ee = !1,
    et = {},
    en = {},
    er = null,
    ei = null,
    ea = null,
    es = null,
    eo = !1,
    el = !1;
function eu(e) {
    let t = {};
    if (((t.error_code = e.code), null != e.errors)) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t;
    }
    return (t.message = e.message), null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}
function ec(e) {
    let t = null != d.getToken(),
        n = null != h.K.get(D.B1h);
    b.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function ed() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((F = h.K.get(M)), null != ei)) return ei;
    let t = null != F ? F : d.getToken();
    if (!(!(0, A.m1)() || (!e && null != t) || C.Z.isHandoffAvailable())) e_({ withGuildExperiments: !0 });
}
function e_(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = v.default.getSuperPropertiesBase64();
    null != r && (n['X-Super-Properties'] = r),
        null != F && (n['X-Fingerprint'] = F),
        (ei = f.tn
            .get({
                url: D.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, A.Wf)() },
                retries: 3,
                oldFormErrors: !0
            })
            .then(
                (e) => {
                    let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                    t &&
                        p.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: t
                        }),
                        p.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: t,
                            experiments: n,
                            guildExperiments: r
                        }),
                        (ei = null),
                        (0, I.$L)();
                },
                () => {
                    (ei = null), p.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function eE() {
    (V = F), (F = null), h.K.remove(M);
}
function ef(e, t) {
    ec('setAuthToken called.'), d.setToken(e, t);
}
function eh() {
    return ec('removeAuthToken called.'), d.removeToken();
}
function ep() {
    (j = !0),
        em(),
        p.Z.wait(() => {
            (0, A.uL)(D.Z5c.REGISTER);
        });
}
function em(e) {
    var t;
    ec('handleLogout called.');
    let n = eh();
    !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && eE(), ed()),
        E.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        y.Z.clearAll();
    g.ZH(), R.Z.clearUser(), h.K.remove(U), (w = null), (Z = (null == e ? void 0 : e.isSwitchingAccount) ? D.u34.LOGGING_IN : D.u34.NONE), (Y = D.$ib.NONE), (K = ''), ($ = ''), (q = null), (z = !1), (J = !1), (ee = !1), (et = {}), (en = {}), (eo = !1), (el = !1);
}
class eI extends (a = E.ZP.Store) {
    initialize() {
        (w = h.K.get(U)), (x = h.K.get(P)), (ea = h.K.get('login_cache')), null == d.getToken() && ed(), this.addChangeListener(() => (0, T.u)(w));
    }
    getEmail() {
        return x;
    }
    getLogin() {
        return ea;
    }
    didVerifyFail() {
        return J;
    }
    getVerifyErrors() {
        return et;
    }
    didVerifySucceed() {
        return ee;
    }
    getLoginStatus() {
        return Z;
    }
    getRegisterStatus() {
        return Y;
    }
    getId() {
        return w;
    }
    getSessionId() {
        return G;
    }
    getAuthSessionIdHash() {
        return k;
    }
    getStaticAuthSessionId() {
        return B;
    }
    getToken() {
        return (0, O.LP)();
    }
    isAuthenticated() {
        return (0, O.$8)();
    }
    getFingerprint() {
        return F;
    }
    getAnalyticsToken() {
        return H;
    }
    getErrors() {
        return en;
    }
    getMFATicket() {
        return K;
    }
    getMFASMS() {
        return z;
    }
    getMFATotp() {
        return Q;
    }
    getMFABackup() {
        return X;
    }
    getMFAWebAuthn() {
        return q;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != q &&
                e.push({
                    type: 'webauthn',
                    challenge: q
                }),
            Q &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: X
                }),
            X && e.push({ type: 'backup' }),
            z && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return W.includes(m.Pi.TOTP);
    }
    hasSMSEnabled() {
        return W.includes(m.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return W.includes(m.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return $;
    }
    getCredentials() {
        if (null == r) throw Error('no credentials');
        return r;
    }
    getVerifyingUserId() {
        return er;
    }
    getCurrentRegistrationOptions() {
        return i;
    }
    allowLogoutRedirect() {
        return !j;
    }
    getWebAuthnChallenge() {
        return q;
    }
    getSuspendedUserToken() {
        return es;
    }
    getIsPasswordlessActive() {
        return eo;
    }
    attemptedPasswordLogin() {
        return el;
    }
}
(l = 'AuthenticationStore'),
    (o = 'displayName') in (s = eI)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.default = new eI(
        p.Z,
        {
            CONNECTION_OPEN: function (e) {
                var t;
                let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: s, staticAuthSessionId: o } = e;
                ec('handleConnectionOpen called'), R.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), (G = r), (k = i), (B = o), (H = a), (w = n.id), (x = n.email), void 0 !== s && (W = s.authenticator_types), h.K.set(P, n.email), h.K.set(U, n.id);
            },
            OVERLAY_INITIALIZE: function (e) {
                var t;
                let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
                R.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), (G = r), (H = i), ef(a), eE(), (w = n.id), h.K.set(U, n.id);
            },
            CONNECTION_CLOSED: function (e) {
                let { code: t } = e;
                ec('handleConnectionClosed called with code '.concat(t, '.'));
                let r = n(952265).nf;
                if (4004 === t) {
                    if (j || r(L.$$) || r(L.dG)) {
                        ep();
                        return;
                    }
                    v.default.track(D.rMx.APP_USER_DEAUTHENTICATED, { user_id: h.K.get(U) }), em(), setImmediate(() => (0, A.uL)(D.Z5c.DEFAULT_LOGGED_OUT));
                }
            },
            AUTH_SESSION_CHANGE: function (e) {
                let { authSessionIdHash: t } = e;
                null != t && (k = t);
            },
            LOGIN: function (e) {
                (en = {}), (Z = D.u34.LOGGING_IN), ($ = ''), (i = null), null != e.login && (ea = e.login), el || (el = e.loginMethod === D.nnr.PASSWORD);
            },
            LOGIN_SUCCESS: function (e) {
                let { token: t } = e;
                (Z = D.u34.NONE), ef(t), eE(), (K = ''), (z = !1), (q = null), (eo = !1), ($ = '');
            },
            LOGIN_FAILURE: function (e) {
                let { error: t } = e;
                (K = ''),
                    (z = !1),
                    (q = null),
                    (Z =
                        null !=
                        (en = (function (e) {
                            if (Object.keys(e.fields).length > 0) return e.fields;
                            let t = { message: e.message };
                            return null != e.retryAfter && (t.retry_after = e.retryAfter), t;
                        })(t)).date_of_birth
                            ? D.u34.LOGIN_AGE_GATE
                            : D.u34.NONE);
            },
            LOGIN_MFA_STEP: function (e) {
                let { ticket: t, sms: n, webauthn: r, backup: i, totp: a } = e;
                null != t && ((K = t), (z = n), ($ = ''), (q = null != r ? r : null), (X = i), (Q = a)), (en = {}), (Z = D.u34.MFA_STEP);
            },
            LOGIN_MFA: function () {
                Z = D.u34.LOGGING_IN_MFA;
            },
            LOGIN_MFA_FAILURE: function (e) {
                let { message: t } = e;
                (Z = D.u34.MFA_STEP), (en = { code: t });
            },
            LOGIN_MFA_SMS: function () {
                Z = D.u34.LOGGING_IN_MFA_SMS;
            },
            LOGIN_MFA_SMS_REQUEST_SUCCESS: function (e) {
                let { phone: t } = e;
                (Z = D.u34.MFA_SMS_STEP), ($ = t);
            },
            LOGIN_MFA_SMS_FAILURE: function (e) {
                let { message: t } = e;
                (Z = D.u34.MFA_SMS_STEP), (en = { code: t });
            },
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
                (Z = D.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
            },
            LOGIN_ACCOUNT_DISABLED: function (e) {
                (Z = D.u34.ACCOUNT_DISABLED), (r = e.credentials);
            },
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function () {
                Z = D.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
            },
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function () {
                Z = D.u34.PHONE_IP_AUTHORIZATION;
            },
            LOGIN_RESET: function (e) {
                let { isMultiAccount: t } = e;
                if (((en = {}), (Z = D.u34.NONE), (K = ''), (z = !1), (q = null), (i = null), (r = null), !t)) eh(), ed(!1);
            },
            LOGIN_STATUS_RESET: function () {
                Z = D.u34.NONE;
            },
            LOGIN_SUSPENDED_USER: function (e) {
                let { suspendedUserToken: t } = e;
                (eo = !1), (es = t), setImmediate(() => (0, A.uL)(D.Z5c.ACCOUNT_STANDING));
            },
            SET_LOGIN_CREDENTIALS: function (e) {
                let { login: t, password: n } = e;
                r = {
                    login: t,
                    password: n
                };
            },
            LOGOUT: em,
            FINGERPRINT: function (e) {
                let t = e.fingerprint;
                null == F
                    ? null != t
                        ? (v.default.track(D.rMx.USER_FINGERPRINT_CHANGED, {
                              old_fingerprint: null != V ? (0, _.s)(V) : null,
                              new_fingerprint: (0, _.s)(t)
                          }),
                          (F = t),
                          (V = t),
                          h.K.set(M, F))
                        : ed()
                    : null != t &&
                      F !== t &&
                      v.default.track(D.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
                          fingerprint: (0, _.s)(F),
                          dropped_fingerprint: (0, _.s)(t)
                      });
            },
            REGISTER_SAVE_FORM: function (e) {
                let { form: t } = e;
                (i = t), (Y = D.$ib.REGISTER_AGE_GATE);
            },
            REGISTER: function (e) {
                let { birthday: t } = e;
                (en = {}),
                    null != t &&
                        (c()(null != i, 'Got birthday in multistep registration without existing form'),
                        (i = {
                            ...i,
                            birthday: t
                        })),
                    (Y = D.$ib.REGISTERING);
            },
            REGISTER_SUCCESS: function (e) {
                let { token: t } = e;
                (Y = D.$ib.NONE), (i = null), ef(t), eE();
            },
            REGISTER_FAILURE: function (e) {
                let { error: t } = e;
                (en = eu(t)), (Y = null != t.getFieldErrors('date_of_birth') ? D.$ib.REGISTER_AGE_GATE : D.$ib.REGISTER_WITH_ERROR);
            },
            VERIFY_FAILURE: function (e) {
                let { errors: t } = e;
                (J = !0), (ee = !1), (et = null != t ? t : {});
            },
            VERIFY_SUCCESS: function (e) {
                (ee = !0), (J = !1), (et = {}), (er = e.verifyingUserId);
            },
            START_SESSION: function () {
                if (0 === Object.keys(en).length) return !1;
                en = {};
            },
            FORGOT_PASSWORD_REQUEST: function () {
                (Z = D.u34.FORGOT_PASSWORD), (en = {});
            },
            FORGOT_PASSWORD_SENT: function () {
                (Z = D.u34.NONE), (en = {});
            },
            UPDATE_TOKEN: function (e) {
                let { token: t, userId: n } = e;
                ec('handleUpdateToken called'), ef(t, n), eE();
            },
            EXPERIMENTS_FETCH: e_,
            CURRENT_USER_UPDATE: function (e) {
                let { user: t } = e;
                (w = t.id), (x = t.email), void 0 !== t.authenticator_types && (W = t.authenticator_types), h.K.set(P, t.email), h.K.set(U, t.id);
            },
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ep,
            CLEAR_AUTHENTICATION_ERRORS: function () {
                en = {};
            },
            CLOSE_SUSPENDED_USER: function () {
                (es = null), (Z = D.u34.NONE), em(), setImmediate(() => (0, A.uL)(D.Z5c.DEFAULT_LOGGED_OUT));
            },
            PASSWORDLESS_FAILURE: function (e) {
                let { error: t } = e;
                (K = ''), (z = !1), (q = null), (eo = !1), (Z = null != (en = eu(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE);
            },
            PASSWORDLESS_START: function () {
                (en = {}), (eo = !0);
            }
        },
        p.c.Early
    ));
