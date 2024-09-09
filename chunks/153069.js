s(757143);
var o,
    n = s(735250),
    r = s(470079),
    a = s(120356),
    i = s.n(a),
    l = s(442837),
    d = s(481060),
    c = s(893776),
    u = s(479495),
    h = s(388905),
    f = s(379760),
    _ = s(124860),
    p = s(144114),
    m = s(541692),
    C = s(952802),
    g = s(210887),
    T = s(314897),
    N = s(896797),
    A = s(585483),
    E = s(981631),
    I = s(689938),
    M = s(360083),
    R = s(224499);
function O(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class S extends (o = r.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e) {
        let { authenticated: t, transitionTo: s } = this.props;
        if ((t && !e.authenticated && s(E.Z5c.APP), e.errors !== this.props.errors)) {
            var o, n, r;
            this.hasError('password') ? null === (o = this.passwordRef) || void 0 === o || o.focus() : this.hasError('email') || this.hasError('login') ? null === (n = this.loginRef) || void 0 === n || n.focus() : this.hasError('code') && (null === (r = this.codeRef) || void 0 === r || r.focus());
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleTabOrEnter);
    }
    hasError(e) {
        return null != this.props.errors[e];
    }
    renderDefaultForm() {
        var e;
        let { country: t } = this.props,
            s = !this.hasError('email') && this.hasError('password'),
            o = (0, n.jsxs)(r.Fragment, {
                children: [
                    (0, n.jsx)(
                        h.Dx,
                        {
                            className: i()(R.marginBottom8, M.title),
                            children: I.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                        },
                        'title'
                    ),
                    (0, n.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: M.subtitle,
                        children: I.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                    })
                ]
            });
        return (0, n.jsxs)('div', {
            className: M.mainLoginContainer,
            children: [
                o,
                (0, n.jsxs)(h.gO, {
                    className: M.loginForm,
                    children: [
                        (0, n.jsx)(C.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: R.marginBottom20,
                            label: I.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                            error: null !== (e = this.renderError('login')) && void 0 !== e ? e : this.renderError('email'),
                            onChange: (e, t) =>
                                this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                            setRef: this.setLoginRef,
                            autoCapitalize: 'none',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            spellCheck: 'false',
                            value: this.state.login,
                            autoFocus: !s,
                            required: !0
                        }),
                        (0, n.jsx)(h.II, {
                            label: I.Z.Messages.FORM_LABEL_PASSWORD,
                            error: this.renderError('password'),
                            onChange: (e) => this.setState({ password: e }),
                            name: 'password',
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            autoFocus: s,
                            value: this.state.password,
                            required: !0
                        }),
                        (0, n.jsx)(h.zx, {
                            onClick: this.handleForgotPassword,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.LINK,
                            className: i()(R.marginTop4),
                            children: I.Z.Messages.FORGOT_PASSWORD
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: o } = this.props;
        return (0, n.jsxs)('div', {
            className: M.__invalid_pageContainer,
            children: [
                (0, n.jsx)(h.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: o,
                    children: this.renderDefaultForm()
                }),
                (0, n.jsx)(d.ThemeProvider, {
                    theme: o,
                    children: (e) =>
                        (0, n.jsxs)('div', {
                            'data-theme': o,
                            'data-disable-adaptive-theme': !0,
                            className: i()(e, M.navRow),
                            children: [
                                (0, n.jsx)(d.Button, {
                                    type: 'button',
                                    look: d.Button.Looks.LINK,
                                    'aria-label': 'back',
                                    onClick: s,
                                    size: d.Button.Sizes.SMALL,
                                    className: i()(e, M.backButton),
                                    children: I.Z.Messages.BACK
                                }),
                                (0, n.jsx)(d.Button, {
                                    'aria-label': 'continue',
                                    submitting: t === E.u34.LOGGING_IN,
                                    color: d.Button.Colors.BRAND,
                                    onClick: this.handleLogin,
                                    className: M.continueButton,
                                    children: I.Z.Messages.CONTINUE
                                })
                            ]
                        })
                })
            ]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, n.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, n.jsx)(_.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    this.handleReset();
                },
                width: 480
            })
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e, theme: t } = this.props,
            s = this.props.loginStatus === E.u34.ACCOUNT_DISABLED,
            o = s ? I.Z.Messages.ACCOUNT_DISABLED_TITLE : I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            r = s ? I.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
        return (0, n.jsxs)(h.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, n.jsx)(h.Dx, {
                    className: R.marginBottom8,
                    children: o
                }),
                (0, n.jsx)(h.DK, {
                    className: R.marginBottom20,
                    children: r
                }),
                (0, n.jsxs)(h.gO, {
                    children: [
                        (0, n.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: I.Z.Messages._RETURN_TO_LOGIN
                        }),
                        (0, n.jsx)('div', {
                            className: i()(R.marginTop8, M.needAccount),
                            children: I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({ onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, n.jsx)(u.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
                c.Z.switchAccountToken(e);
            },
            ...this.props
        });
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, n.jsx)(h.ZP, {
            tag: 'form',
            className: e,
            children: (0, n.jsx)('div', {
                className: R.marginTop20,
                children: (0, n.jsx)(f.Z, {
                    title: I.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                    subtitle: I.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({ onResendClick: this.handleResendCode }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: void 0
                })
            })
        });
    }
    render() {
        let { loginStatus: e } = this.props;
        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
        switch (e) {
            case E.u34.LOGGING_IN_MFA_SMS:
            case E.u34.MFA_SMS_STEP:
            case E.u34.LOGGING_IN_MFA:
            case E.u34.MFA_STEP:
                return this.renderMFA();
            case E.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case E.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case E.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case E.u34.LOGGING_IN:
            case E.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        super(e),
            O(this, 'loginRef', void 0),
            O(this, 'passwordRef', void 0),
            O(this, 'codeRef', void 0),
            O(this, 'handleAuthToken', async (e) => {
                await c.Z.loginToken(e, !1);
            }),
            O(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            O(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            O(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            O(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            O(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            O(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            O(this, 'handleForgotPassword', async (e) => {
                var t;
                null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                let s = this.getFullLogin();
                try {
                    A.S.dispatch(E.CkL.WAVE_EMPHASIZE),
                        await c.Z.forgotPassword(s),
                        (0, d.openModal)((e) =>
                            (0, n.jsx)(d.ConfirmModal, {
                                header: I.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: I.Z.Messages.OKAY,
                                confirmButtonColor: d.Button.Colors.BRAND,
                                ...e,
                                children: (0, n.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    children: I.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({ email: s })
                                })
                            })
                        );
                } catch {}
            }),
            O(this, 'handleLogin', (e) => {
                let { password: t, undelete: s } = this.state;
                null != e && e.preventDefault(),
                    c.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
            }),
            O(this, 'handlePasswordReset', async (e) => {
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: t } = await p.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            O(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: o } = e;
                return c.Z.loginMFAv2({
                    code: s,
                    ticket: o,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            O(this, 'handleResendCode', () => {
                p.Z.resendCode(this.getFullLogin());
            }),
            O(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    c.Z.loginReset(!0),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        resetPasswordPhoneToken: null
                    });
            }),
            O(this, 'handleCancelAccountDeletion', () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.state = {
                loginPrefix: '',
                login: '',
                password: '',
                code: '',
                smsCode: '',
                phoneVerifyError: null,
                resetPasswordPhoneToken: null,
                undelete: !1
            });
    }
}
O(S, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, l.cj)([N.Z, T.default, m.Z, g.Z], () => ({
        authenticated: T.default.isAuthenticated(),
        loginStatus: T.default.getLoginStatus(),
        mfaTicket: T.default.getMFATicket(),
        mfaSMS: T.default.getMFASMS(),
        maskedPhone: T.default.getMaskedPhone(),
        mfaMethods: T.default.getMFAMethods(),
        errors: T.default.getErrors(),
        defaultRoute: N.Z.defaultRoute,
        country: m.Z.getCountryCode(),
        theme: g.Z.theme
    }));
    return (0, n.jsx)(S, {
        ...e,
        ...t
    });
};
