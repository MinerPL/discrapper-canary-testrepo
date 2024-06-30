s(757143);
var o, n = s(735250), r = s(470079), a = s(120356), i = s.n(a), l = s(442837), d = s(481060), c = s(893776), u = s(479495), h = s(388905), f = s(379760), _ = s(124860), p = s(144114), m = s(541692), C = s(952802), g = s(210887), T = s(314897), N = s(896797), A = s(585483), E = s(792125), I = s(981631), R = s(689938), O = s(342664), S = s(331651);
function M(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class x extends (o = r.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e) {
        let {
            authenticated: t,
            transitionTo: s
        } = this.props;
        if (t && !e.authenticated && s(I.Z5c.APP), e.errors !== this.props.errors) {
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
        let {country: t} = this.props, s = !this.hasError('email') && this.hasError('password'), o = (0, n.jsxs)(r.Fragment, {
                children: [
                    (0, n.jsx)(h.Dx, {
                        className: i()(S.marginBottom8, O.title),
                        children: R.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                    }, 'title'),
                    (0, n.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: O.subtitle,
                        children: R.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                    })
                ]
            });
        return (0, n.jsxs)('div', {
            className: O.mainLoginContainer,
            children: [
                o,
                (0, n.jsxs)(h.gO, {
                    className: O.loginForm,
                    children: [
                        (0, n.jsx)(C.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: S.marginBottom20,
                            label: R.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                            error: null !== (e = this.renderError('login')) && void 0 !== e ? e : this.renderError('email'),
                            onChange: (e, t) => this.setState({
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
                            label: R.Z.Messages.FORM_LABEL_PASSWORD,
                            error: this.renderError('password'),
                            onChange: e => this.setState({ password: e }),
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
                            className: i()(S.marginTop4),
                            children: R.Z.Messages.FORGOT_PASSWORD
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let {
            authBoxClassName: e,
            loginStatus: t,
            closeLogin: s,
            theme: o
        } = this.props;
        return (0, n.jsxs)('div', {
            className: O.__invalid_pageContainer,
            children: [
                (0, n.jsx)(h.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: o,
                    children: this.renderDefaultForm()
                }),
                (0, n.jsxs)('div', {
                    'data-theme': o,
                    'data-disable-adaptive-theme': !0,
                    className: i()((0, E.Q)(o), O.navRow),
                    children: [
                        (0, n.jsx)(d.Button, {
                            type: 'button',
                            look: d.Button.Looks.LINK,
                            'aria-label': 'back',
                            onClick: s,
                            size: d.Button.Sizes.SMALL,
                            className: i()((0, E.Q)(o), O.backButton),
                            children: R.Z.Messages.BACK
                        }),
                        (0, n.jsx)(d.Button, {
                            'aria-label': 'continue',
                            submitting: t === I.u34.LOGGING_IN,
                            color: d.Button.Colors.BRAND,
                            onClick: this.handleLogin,
                            className: O.continueButton,
                            children: R.Z.Messages.CONTINUE
                        })
                    ]
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
                request: e,
                onEarlyClose: () => {
                    this.handleReset();
                },
                width: 480
            })
        });
    }
    renderDisabledAccount() {
        let {
                authBoxClassName: e,
                theme: t
            } = this.props, s = this.props.loginStatus === I.u34.ACCOUNT_DISABLED, o = s ? R.Z.Messages.ACCOUNT_DISABLED_TITLE : R.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, r = s ? R.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : R.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
        return (0, n.jsxs)(h.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, n.jsx)(h.Dx, {
                    className: S.marginBottom8,
                    children: o
                }),
                (0, n.jsx)(h.DK, {
                    className: S.marginBottom20,
                    children: r
                }),
                (0, n.jsxs)(h.gO, {
                    children: [
                        (0, n.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: R.Z.Messages._RETURN_TO_LOGIN
                        }),
                        (0, n.jsx)('div', {
                            className: i()(S.marginTop8, O.needAccount),
                            children: R.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({ onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let {resetPasswordPhoneToken: e} = this.state;
        return (0, n.jsx)(u.Z, {
            resetToken: e,
            onLoginSuccess: e => {
                c.Z.switchAccountToken(e);
            },
            ...this.props
        });
    }
    renderPhonePasswordRecovery() {
        let {authBoxClassName: e} = this.props, {phoneVerifyError: t} = this.state;
        return (0, n.jsx)(h.ZP, {
            tag: 'form',
            className: e,
            children: (0, n.jsx)('div', {
                className: S.marginTop20,
                children: (0, n.jsx)(f.Z, {
                    title: R.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                    subtitle: R.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({ onResendClick: this.handleResendCode }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: void 0
                })
            })
        });
    }
    render() {
        let {loginStatus: e} = this.props;
        if (null != this.state.resetPasswordPhoneToken)
            return this.renderResetPhonePassword();
        switch (e) {
        case I.u34.LOGGING_IN_MFA_SMS:
        case I.u34.MFA_SMS_STEP:
        case I.u34.LOGGING_IN_MFA:
        case I.u34.MFA_STEP:
            return this.renderMFA();
        case I.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
        case I.u34.ACCOUNT_DISABLED:
            return this.renderDisabledAccount();
        case I.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return this.renderPhonePasswordRecovery();
        case I.u34.LOGGING_IN:
        case I.u34.NONE:
        default:
            return this.renderDefault();
        }
    }
    constructor(e) {
        super(e), M(this, 'loginRef', void 0), M(this, 'passwordRef', void 0), M(this, 'codeRef', void 0), M(this, 'handleAuthToken', async e => {
            await c.Z.loginToken(e, !1);
        }), M(this, 'handleTabOrEnter', e => {
            if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                var t;
                null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault();
            }
            'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
        }), M(this, 'setLoginRef', e => {
            this.loginRef = e;
        }), M(this, 'setPasswordRef', e => {
            this.passwordRef = e;
        }), M(this, 'setCodeRef', e => {
            this.codeRef = e;
        }), M(this, 'getFullLogin', () => {
            let {
                loginPrefix: e,
                login: t
            } = this.state;
            return e + t;
        }), M(this, 'renderError', e => {
            let {errors: t} = this.props;
            if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
            }
            return null;
        }), M(this, 'handleForgotPassword', async e => {
            var t;
            null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
            let s = this.getFullLogin();
            try {
                A.S.dispatch(I.CkL.WAVE_EMPHASIZE), await c.Z.forgotPassword(s), (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
                    header: R.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                    confirmText: R.Z.Messages.OKAY,
                    confirmButtonColor: d.Button.Colors.BRAND,
                    ...e,
                    children: (0, n.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: R.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({ email: s })
                    })
                }));
            } catch {
            }
        }), M(this, 'handleLogin', e => {
            let {
                password: t,
                undelete: s
            } = this.state;
            null != e && e.preventDefault(), c.Z.login({
                login: this.getFullLogin(),
                password: t,
                undelete: s,
                isMultiAccount: !0
            });
        }), M(this, 'handlePasswordReset', async e => {
            this.setState({ phoneVerifyError: null });
            try {
                let {token: t} = await p.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                this.setState({ resetPasswordPhoneToken: t });
            } catch (e) {
                null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
            }
        }), M(this, 'handleTokenSubmitMFA', e => {
            let {
                mfaType: t,
                data: s,
                ticket: o
            } = e;
            return c.Z.loginMFAv2({
                code: s,
                ticket: o,
                mfaType: t,
                isMultiAccount: !0
            });
        }), M(this, 'handleResendCode', () => {
            p.Z.resendCode(this.getFullLogin());
        }), M(this, 'handleReset', e => {
            null != e && e.preventDefault(), c.Z.loginReset(!0), this.setState({
                password: '',
                loginPrefix: '',
                login: '',
                code: '',
                smsCode: '',
                undelete: !1,
                resetPasswordPhoneToken: null
            });
        }), M(this, 'handleCancelAccountDeletion', () => {
            this.setState({ undelete: !0 }, this.handleLogin);
        }), this.state = {
            loginPrefix: '',
            login: '',
            password: '',
            code: '',
            smsCode: '',
            phoneVerifyError: null,
            resetPasswordPhoneToken: null,
            undelete: !1
        };
    }
}
M(x, 'defaultProps', {
    transitionTo: e => s.g.location.assign(e),
    replaceWith: e => s.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, l.cj)([
        N.Z,
        T.default,
        m.Z,
        g.Z
    ], () => ({
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
    return (0, n.jsx)(x, {
        ...e,
        ...t
    });
};
