"use strict";
s.r(t), s("757143");
var a, r = s("735250"),
  n = s("470079"),
  o = s("803997"),
  l = s.n(o),
  i = s("442837"),
  d = s("481060"),
  u = s("893776"),
  h = s("479495"),
  c = s("379760"),
  f = s("124860"),
  p = s("144114"),
  g = s("541692"),
  m = s("952802"),
  S = s("210887"),
  T = s("314897"),
  C = s("896797"),
  A = s("819570"),
  E = s("585483"),
  _ = s("792125"),
  N = s("981631"),
  M = s("689938"),
  R = s("545534"),
  O = s("794711");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class L extends(a = n.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter)
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      transitionTo: s
    } = this.props;
    if (t && !e.authenticated && s(N.Routes.APP), e.errors !== this.props.errors) {
      var a, r, n;
      this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (r = this.loginRef) || void 0 === r || r.focus() : this.hasError("code") && (null === (n = this.codeRef) || void 0 === n || n.focus())
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleTabOrEnter)
  }
  hasError(e) {
    return null != this.props.errors[e]
  }
  renderDefaultForm() {
    var e;
    let {
      country: t
    } = this.props, s = !this.hasError("email") && this.hasError("password"), a = (0, r.jsxs)(n.Fragment, {
      children: [(0, r.jsx)(A.Title, {
        className: l()(O.marginBottom8, R.title),
        children: M.default.Messages.MULTI_ACCOUNT_LOGIN_TITLE
      }, "title"), (0, r.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: R.subtitle,
        children: M.default.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
      })]
    });
    return (0, r.jsxs)("div", {
      className: R.mainLoginContainer,
      children: [a, (0, r.jsxs)(A.Block, {
        className: R.loginForm,
        children: [(0, r.jsx)(m.default, {
          alpha2: t.alpha2,
          countryCode: t.code.split(" ")[0],
          className: O.marginBottom20,
          label: M.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
          error: null !== (e = this.renderError("login")) && void 0 !== e ? e : this.renderError("email"),
          onChange: (e, t) => this.setState({
            login: e,
            loginPrefix: t
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !s,
          required: !0
        }), (0, r.jsx)(A.Input, {
          label: M.default.Messages.FORM_LABEL_PASSWORD,
          error: this.renderError("password"),
          onChange: e => this.setState({
            password: e
          }),
          name: "password",
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          autoFocus: s,
          value: this.state.password,
          required: !0
        }), (0, r.jsx)(A.Button, {
          onClick: this.handleForgotPassword,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.LINK,
          className: l()(O.marginTop4),
          children: M.default.Messages.FORGOT_PASSWORD
        })]
      })]
    })
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      loginStatus: t,
      closeLogin: s,
      theme: a
    } = this.props;
    return (0, r.jsxs)("div", {
      className: R.__invalid_pageContainer,
      children: [(0, r.jsx)(A.default, {
        tag: "form",
        className: e,
        expanded: !0,
        theme: a,
        children: this.renderDefaultForm()
      }), (0, r.jsxs)("div", {
        "data-theme": a,
        className: l()((0, _.getThemeClass)(a), R.navRow),
        children: [(0, r.jsx)(d.Button, {
          type: "button",
          look: d.Button.Looks.LINK,
          "aria-label": "back",
          onClick: s,
          size: d.Button.Sizes.SMALL,
          className: l()((0, _.getThemeClass)(a), R.backButton),
          children: M.default.Messages.BACK
        }), (0, r.jsx)(d.Button, {
          "aria-label": "continue",
          submitting: t === N.LoginStates.LOGGING_IN,
          color: d.Button.Colors.BRAND,
          onClick: this.handleLogin,
          className: R.continueButton,
          children: M.default.Messages.CONTINUE
        })]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, r.jsx)(A.default, {
      style: {
        padding: 0
      },
      theme: this.props.theme,
      children: (0, r.jsx)(f.MFASlides, {
        mfaFinish: this.handleTokenSubmitMFA,
        request: e,
        onEarlyClose: () => {
          this.handleReset()
        },
        width: 480
      })
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e,
      theme: t
    } = this.props, s = this.props.loginStatus === N.LoginStates.ACCOUNT_DISABLED, a = s ? M.default.Messages.ACCOUNT_DISABLED_TITLE : M.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, n = s ? M.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : M.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
    return (0, r.jsxs)(A.default, {
      tag: "form",
      onSubmit: this.handleReset,
      className: e,
      theme: t,
      children: [(0, r.jsx)(A.Title, {
        className: O.marginBottom8,
        children: a
      }), (0, r.jsx)(A.SubTitle, {
        className: O.marginBottom20,
        children: n
      }), (0, r.jsxs)(A.Block, {
        children: [(0, r.jsx)(d.Button, {
          color: d.Button.Colors.BRAND,
          type: "submit",
          fullWidth: !0,
          children: M.default.Messages._RETURN_TO_LOGIN
        }), (0, r.jsx)("div", {
          className: l()(O.marginTop8, R.needAccount),
          children: M.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
            onClick: this.handleCancelAccountDeletion
          })
        })]
      })]
    })
  }
  renderResetPhonePassword() {
    let {
      resetPasswordPhoneToken: e
    } = this.state;
    return (0, r.jsx)(h.default, {
      resetToken: e,
      onLoginSuccess: e => {
        u.default.switchAccountToken(e)
      },
      ...this.props
    })
  }
  renderPhonePasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, r.jsx)(A.default, {
      tag: "form",
      className: e,
      children: (0, r.jsx)("div", {
        className: O.marginTop20,
        children: (0, r.jsx)(c.default, {
          title: M.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
          subtitle: M.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
            onResendClick: this.handleResendCode
          }),
          error: t,
          onSubmit: this.handlePasswordReset,
          onCancel: void 0
        })
      })
    })
  }
  render() {
    let {
      loginStatus: e
    } = this.props;
    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
    switch (e) {
      case N.LoginStates.LOGGING_IN_MFA_SMS:
      case N.LoginStates.MFA_SMS_STEP:
      case N.LoginStates.LOGGING_IN_MFA:
      case N.LoginStates.MFA_STEP:
        return this.renderMFA();
      case N.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
      case N.LoginStates.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case N.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPhonePasswordRecovery();
      case N.LoginStates.LOGGING_IN:
      case N.LoginStates.NONE:
      default:
        return this.renderDefault()
    }
  }
  constructor(e) {
    super(e), I(this, "loginRef", void 0), I(this, "passwordRef", void 0), I(this, "codeRef", void 0), I(this, "handleAuthToken", async e => {
      await u.default.loginToken(e, !1)
    }), I(this, "handleTabOrEnter", e => {
      if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
        var t;
        null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault()
      }
      "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
    }), I(this, "setLoginRef", e => {
      this.loginRef = e
    }), I(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), I(this, "setCodeRef", e => {
      this.codeRef = e
    }), I(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), I(this, "renderError", e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let s = t[e];
        return Array.isArray(s) ? s[0] : s
      }
      return null
    }), I(this, "handleForgotPassword", async e => {
      var t;
      null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
      let s = this.getFullLogin();
      try {
        E.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE), await u.default.forgotPassword(s), (0, d.openModal)(e => (0, r.jsx)(d.ConfirmModal, {
          header: M.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
          confirmText: M.default.Messages.OKAY,
          confirmButtonColor: d.Button.Colors.BRAND,
          ...e,
          children: (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: M.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
              email: s
            })
          })
        }))
      } catch {}
    }), I(this, "handleLogin", e => {
      let {
        password: t,
        undelete: s
      } = this.state;
      null != e && e.preventDefault(), u.default.login({
        login: this.getFullLogin(),
        password: t,
        undelete: s,
        isMultiAccount: !0
      })
    }), I(this, "handlePasswordReset", async e => {
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: t
        } = await p.default.verifyPhone(this.getFullLogin(), e, !1, !0);
        this.setState({
          resetPasswordPhoneToken: t
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), I(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: s,
        ticket: a
      } = e;
      return u.default.loginMFAv2({
        code: s,
        ticket: a,
        mfaType: t,
        isMultiAccount: !0
      })
    }), I(this, "handleResendCode", () => {
      p.default.resendCode(this.getFullLogin())
    }), I(this, "handleReset", e => {
      null != e && e.preventDefault(), u.default.loginReset(!0), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: !1,
        resetPasswordPhoneToken: null
      })
    }), I(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: !0
      }, this.handleLogin)
    }), this.state = {
      loginPrefix: "",
      login: "",
      password: "",
      code: "",
      smsCode: "",
      phoneVerifyError: null,
      resetPasswordPhoneToken: null,
      undelete: !1
    }
  }
}
I(L, "defaultProps", {
  transitionTo: e => s.g.location.assign(e),
  replaceWith: e => s.g.location.replace(e)
});
t.default = function(e) {
  let t = (0, i.useStateFromStoresObject)([C.default, T.default, g.default, S.default], () => ({
    authenticated: T.default.isAuthenticated(),
    loginStatus: T.default.getLoginStatus(),
    mfaTicket: T.default.getMFATicket(),
    mfaSMS: T.default.getMFASMS(),
    maskedPhone: T.default.getMaskedPhone(),
    mfaMethods: T.default.getMFAMethods(),
    errors: T.default.getErrors(),
    defaultRoute: C.default.defaultRoute,
    country: g.default.getCountryCode(),
    theme: S.default.theme
  }));
  return (0, r.jsx)(L, {
    ...e,
    ...t
  })
}