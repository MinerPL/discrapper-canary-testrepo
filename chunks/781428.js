"use strict";
n.d(t, {
  q: function() {
    return Q
  }
});
var s, r = n(735250),
  i = n(470079),
  a = n(615231),
  l = n(120356),
  o = n.n(l),
  u = n(593473),
  c = n(873546),
  d = n(442837),
  h = n(481060),
  E = n(570140),
  _ = n(893776),
  m = n(899742),
  g = n(579806),
  f = n(743142),
  p = n(379760),
  I = n(100159),
  N = n(473855),
  A = n(124860),
  T = n(86779),
  R = n(726745),
  S = n(913583),
  C = n(144114),
  x = n(541692),
  O = n(952802),
  Z = n(108427),
  L = n(365007),
  M = n(843512),
  v = n(314897),
  D = n(117240),
  b = n(896797),
  y = n(285952),
  j = n(819570),
  P = n(292937),
  U = n(626135),
  w = n(585483),
  G = n(358085),
  F = n(481153),
  k = n(588705),
  B = n(494526),
  H = n(163671),
  V = n(981631),
  z = n(58346),
  K = n(689938),
  Y = n(72137),
  W = n(611273);

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Q() {
  return (0, r.jsx)(j.ZP, {
    children: (0, r.jsx)(h.Spinner, {})
  })
}
class J extends(s = i.PureComponent) {
  static getDerivedStateFromProps(e) {
    let {
      handoffAvailable: t,
      authenticated: n
    } = e;
    return t || n ? null : {
      checkingHandoff: !1
    }
  }
  componentDidMount() {
    let {
      handoffAvailable: e,
      authenticated: t,
      giftCodeSKU: n,
      invite: s,
      location: r
    } = this.props;
    e && !t ? (0, m.is)() : t && this.loginOrSSO(t, r, !0), U.default.track(V.rMx.LOGIN_VIEWED, {
      location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
      login_source: this.loginSource,
      authenticated: t,
      ...null != n ? (0, I.Z)(n, !1, !1) : {}
    }, {
      flush: !0
    }), null == g.Z && this.props.hasPasswordlessExperiment && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable && PublicKeyCredential.isConditionalMediationAvailable().then(e => {
      e && (0, L.us)().then(e => {
        let {
          challenge: t,
          ticket: n
        } = e, s = (0, a.wz)(JSON.parse(t));
        return s.signal = this.state.conditionalMediationAbortController.signal, (0, a.U2)(s).then(e => (E.Z.dispatch({
          type: "PASSWORDLESS_START"
        }), _.Z.loginWebAuthn({
          ticket: n,
          credential: JSON.stringify(e),
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }))).catch(e => {
          if ("AbortError" !== e.name) throw e
        })
      }).catch(() => {})
    }), _.Z.getLocationMetadata(), (0, Z.e)("login")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      location: n
    } = this.props, {
      checkingHandoff: s
    } = this.state;
    if (t && !e.authenticated && !s && (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(t, n)), e.errors !== this.props.errors) {
      var r, i, a;
      this.hasError("password") ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError("email") || this.hasError("login") ? null === (i = this.loginRef) || void 0 === i || i.focus() : this.hasError("code") && (null === (a = this.codeRef) || void 0 === a || a.focus())
    }
  }
  get loginSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n,
      loginSource: s,
      redirectTo: r
    } = this.props;
    if (null != s) return s;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    else if (null != n) {
      if (null != n.guild) return "guild_invite";
      if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null != r ? (0, f.L)(r) : null
  }
  get giftCodeSKUId() {
    let {
      giftCode: e
    } = this.props;
    return null != e ? e.skuId : null
  }
  get canShowChooseAccount() {
    return this.props.hasLoggedInAccounts
  }
  loginOrSSO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!!e && null != t) this.setState({
      redirecting: !0
    }), n ? _.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t)
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: s
    } = this.props, r = null != e ? (0, u.parse)(e.search) : {};
    if (delete r.redirect_to, null != n) null != s ? s(n) : t(n);
    else if (null == r.service) t(V.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + V.ANM.SSO,
        t = {
          ...r,
          token: v.default.getToken()
        };
      window.location = "".concat(e, "?").concat((0, u.stringify)(t))
    }
  }
  hasError(e) {
    return null != this.props.errors[e]
  }
  renderHandOffAvailable() {
    let {
      authBoxClassName: e
    } = this.props;
    return (0, r.jsxs)(j.ZP, {
      className: e,
      children: [(0, r.jsx)(j.Hh, {}), (0, r.jsx)(j.Dx, {
        className: W.marginBottom8,
        children: K.Z.Messages.BROWSER_HANDOFF_DETECTING_TITLE
      }), (0, r.jsx)(j.DK, {
        children: K.Z.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
      })]
    })
  }
  renderHandOffContinue() {
    let {
      user: e,
      transitionTo: t,
      authBoxClassName: n
    } = this.props;
    return null == e ? null : (0, r.jsxs)(j.ZP, {
      className: n,
      children: [(0, r.jsx)(j.qE, {
        src: e.getAvatarURL(void 0, 100),
        size: h.AvatarSizes.DEPRECATED_SIZE_100,
        className: W.marginBottom20
      }), (0, r.jsx)(j.Dx, {
        className: W.marginBottom8,
        children: K.Z.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
          name: e.toString()
        })
      }), (0, r.jsx)(j.DK, {
        className: W.marginBottom40,
        children: K.Z.Messages._BROWSER_HANDOFF_SUCCESS_BODY
      }), (0, r.jsxs)(j.gO, {
        children: [(0, r.jsx)(j.zx, {
          onClick: () => t(V.Z5c.APP),
          className: W.marginBottom8,
          children: K.Z.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
            name: e.toString()
          })
        }), (0, r.jsx)(j.zx, {
          look: j.zx.Looks.LINK,
          color: j.zx.Colors.LINK,
          onClick: this.handleReset,
          children: K.Z.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
        })]
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === V.u34.ACCOUNT_DISABLED, n = t ? K.Z.Messages.ACCOUNT_DISABLED_TITLE : K.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, s = t ? K.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : K.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
    return (0, r.jsx)(j.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: e,
      children: (0, r.jsxs)(h.HeadingLevel, {
        component: (0, r.jsx)(j.Dx, {
          className: W.marginBottom8,
          children: n
        }),
        children: [(0, r.jsx)(j.DK, {
          className: W.marginBottom20,
          children: s
        }), (0, r.jsxs)(j.gO, {
          children: [(0, r.jsx)(j.zx, {
            color: j.zx.Colors.BRAND,
            type: "submit",
            children: K.Z.Messages._RETURN_TO_LOGIN
          }), (0, r.jsx)("div", {
            className: o()(W.marginTop8, Y.needAccount),
            children: K.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
              onClick: this.handleCancelAccountDeletion
            })
          })]
        })]
      })
    })
  }
  renderResolving() {
    let {
      authBoxClassName: e,
      country: t
    } = this.props;
    return (0, r.jsxs)(j.ZP, {
      className: e,
      children: [(0, r.jsx)(k.R, {}), (0, r.jsxs)(j.gO, {
        className: W.marginTop20,
        children: [(0, r.jsx)(O.Z, {
          className: W.marginBottom20,
          alpha2: t.alpha2,
          countryCode: t.code.split(" ")[0],
          label: K.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
          autoFocus: !0,
          required: !0
        }), (0, r.jsx)(j.II, {
          className: W.marginBottom20,
          label: K.Z.Messages.FORM_LABEL_PASSWORD,
          onChange: e => this.setState({
            password: e
          }),
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          value: this.state.password,
          required: !0
        }), (0, r.jsx)(j.zx, {
          className: W.marginBottom8,
          type: "submit",
          disabled: !0,
          children: K.Z.Messages._LOGIN
        }), (0, r.jsx)(j.zx, {
          disabled: !0,
          look: j.zx.Looks.LINK,
          color: j.zx.Colors.LINK,
          children: K.Z.Messages.FORGOT_PASSWORD
        }), (0, r.jsx)(j.zx, {
          disabled: !0,
          className: W.marginTop4,
          look: j.zx.Looks.LINK,
          color: j.zx.Colors.LINK,
          children: K.Z.Messages.NEED_ACCOUNT
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n;
    let {
      invite: s,
      giftCode: i,
      loginStatus: a,
      country: l,
      showMobileWebHandoff: u,
      disableAutofocusOnDefaultForm: c
    } = this.props, d = !this.hasError("email") && this.hasError("password"), E = (null == s ? void 0 : s.stage_instance) != null;
    return n = null == s || E ? null != i ? (0, r.jsx)(F.Z, {
      giftCode: i
    }) : (0, r.jsxs)("div", {
      className: Y.header,
      children: [(0, r.jsx)(j.Dx, {
        className: W.marginBottom8,
        children: K.Z.Messages.LOGIN_TITLE
      }, "title"), !1 === (0, G.isAndroidWeb)() ? (0, r.jsx)(j.DK, {
        children: K.Z.Messages.AUTH_LOGIN_BODY
      }, "subtitle") : null]
    }) : (0, r.jsx)(k.Z, {
      invite: s
    }), (0, r.jsxs)(y.Z, {
      direction: y.Z.Direction.HORIZONTAL,
      align: y.Z.Align.CENTER,
      children: [(0, r.jsxs)("div", {
        className: Y.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, r.jsx)(j.zx, {
          onClick: () => {
            this.setState(e => ({
              ...e,
              dismissedChooseAccount: !1
            }))
          },
          look: j.zx.Looks.LINK,
          color: j.zx.Colors.PRIMARY,
          className: Y.goBackButton,
          children: (0, r.jsxs)("div", {
            className: Y.content,
            children: [(0, r.jsx)(P.Z, {
              width: 16,
              height: 16,
              className: Y.caret
            }), (0, r.jsx)(h.Text, {
              variant: "text-md/normal",
              children: K.Z.Messages.AGE_GATE_GO_BACK
            })]
          })
        }), n, (0, r.jsx)(h.HeadingLevel, {
          children: (0, r.jsxs)(j.gO, {
            className: W.marginTop20,
            children: [(0, r.jsx)(O.Z, {
              alpha2: l.alpha2,
              countryCode: l.code.split(" ")[0],
              className: W.marginBottom20,
              label: K.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
              error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
              onChange: (e, t) => this.setState({
                login: e,
                loginPrefix: t
              }),
              setRef: this.setLoginRef,
              autoCapitalize: "none",
              autoComplete: this.props.hasPasswordlessExperiment ? "webauthn" : "off",
              autoCorrect: "off",
              spellCheck: "false",
              value: this.state.login,
              autoFocus: !d && !u && !c,
              required: !0
            }), (0, r.jsx)(j.II, {
              label: K.Z.Messages.FORM_LABEL_PASSWORD,
              error: this.renderError("password"),
              onChange: e => this.setState({
                password: e
              }),
              name: "password",
              type: "password",
              setRef: this.setPasswordRef,
              autoComplete: "off",
              spellCheck: "false",
              autoFocus: d && !u && !c,
              value: this.state.password,
              required: !0
            }), (0, r.jsx)(j.zx, {
              onClick: this.handleForgotPassword,
              look: j.zx.Looks.LINK,
              color: j.zx.Colors.LINK,
              className: o()(W.marginBottom20, W.marginTop4),
              children: K.Z.Messages.FORGOT_PASSWORD
            }), (0, r.jsx)(j.zx, {
              type: "submit",
              submitting: a === V.u34.LOGGING_IN,
              color: E ? j.zx.Colors.GREEN : j.zx.Colors.BRAND,
              className: W.marginBottom8,
              children: E ? K.Z.Messages._LOGIN_STAGE : K.Z.Messages._LOGIN
            }), (0, r.jsxs)("div", {
              className: W.marginTop4,
              children: [(0, r.jsx)("span", {
                className: Y.needAccount,
                children: K.Z.Messages.NEED_ACCOUNT
              }), (0, r.jsx)(j.zx, {
                onClick: this.handleGotoRegister,
                look: j.zx.Looks.LINK,
                color: j.zx.Colors.LINK,
                className: Y.smallRegisterLink,
                children: K.Z.Messages.REGISTER
              })]
            })]
          })
        })]
      }), (0, r.jsx)(h.HeadingLevel, {
        children: e ? (0, r.jsx)(B.Z, {
          authTokenCallback: this.handleAuthToken,
          hasPasswordlessExperiment: this.props.hasPasswordlessExperiment,
          conditionalMediationAbortController: this.state.conditionalMediationAbortController
        }) : null
      })]
    }, "form-wrapper")
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      showMobileWebHandoff: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: Y.__invalid_pageContainer,
      children: [(0, r.jsx)(j.ZP, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: e,
        expanded: !0,
        children: this.renderDefaultForm(!0)
      }), t && (0, r.jsx)(T.Z, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, r.jsx)(H.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: o()(this.props.authBoxClassName, Y.horizontalAuthBox),
      children: () => [(0, r.jsx)(N.Z, {
        guildTemplate: e
      }, "template"), this.renderDefaultForm(!1)]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, r.jsx)(j.ZP, {
      style: {
        padding: 0
      },
      children: (0, r.jsx)(A.Cd, {
        mfaFinish: this.handleTokenSubmitMFA,
        request: e,
        onEarlyClose: () => {
          E.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderIPAuthorization() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, r.jsx)(j.ZP, {
      tag: "form",
      className: e,
      children: (0, r.jsx)(p.Z, {
        title: K.Z.Messages.PHONE_IP_AUTHORIZATION_TITLE,
        subtitle: K.Z.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handleIPAuthorize,
        onCancel: _.Z.loginReset
      })
    })
  }
  renderPasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, r.jsx)(j.ZP, {
      tag: "form",
      className: e,
      children: (0, r.jsx)(p.Z, {
        title: K.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
        subtitle: K.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handlePasswordReset,
        onCancel: _.Z.loginReset
      })
    })
  }
  renderChooseAccount() {
    return (0, r.jsx)(S.Z, {
      onDismiss: () => {
        this.setState(e => ({
          ...e,
          dismissedChooseAccount: !0
        }))
      }
    })
  }
  render() {
    let {
      authenticated: e,
      invite: t,
      guildTemplate: n,
      loginStatus: s,
      handoffAvailable: i
    } = this.props, {
      checkingHandoff: a,
      redirecting: l
    } = this.state;
    if (l || a) return (0, r.jsx)(Q, {});
    if (i) return this.renderHandOffAvailable();
    if (e && a) return this.renderHandOffContinue();
    switch (s) {
      case V.u34.LOGGING_IN_MFA_SMS:
      case V.u34.MFA_SMS_STEP:
      case V.u34.LOGGING_IN_MFA:
      case V.u34.MFA_STEP:
        return this.renderMFA();
      case V.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case V.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case V.u34.PHONE_IP_AUTHORIZATION:
        return this.renderIPAuthorization();
      case V.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPasswordRecovery();
      case V.u34.LOGGING_IN:
      case V.u34.NONE:
      default:
        if (null != t && t.state === V.r2o.RESOLVING) return this.renderResolving();
        if (null != n) {
          if (n.state === z.Rj.RESOLVING) return this.renderResolving();
          return this.renderGuildTemplate(n)
        }
        if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
        return this.renderDefault()
    }
  }
  constructor(e) {
    var t, n;
    super(e), q(this, "loginRef", void 0), q(this, "passwordRef", void 0), q(this, "codeRef", void 0), q(this, "handleAuthToken", async e => {
      await _.Z.loginToken(e, !1), U.default.track(V.rMx.LOGIN_SUCCESSFUL, {
        source: V.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: !1
      })
    }), q(this, "setLoginRef", e => {
      this.loginRef = e
    }), q(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), q(this, "setCodeRef", e => {
      this.codeRef = e
    }), q(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), q(this, "renderError", e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), q(this, "handleLogin", e => {
      let {
        password: t,
        undelete: n
      } = this.state;
      null != e && e.preventDefault(), _.Z.login({
        login: this.getFullLogin(),
        password: t,
        undelete: n,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId,
        invite: this.props.invite
      }), w.S.dispatch(V.CkL.WAVE_EMPHASIZE)
    }), q(this, "handleIPAuthorize", async e => {
      let {
        password: t,
        undelete: n
      } = this.state, s = this.getFullLogin();
      try {
        let {
          token: r
        } = await C.Z.verifyPhone(s, e, !1);
        await _.Z.authorizeIPAddress(r), _.Z.login({
          login: s,
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }), w.S.dispatch(V.CkL.WAVE_EMPHASIZE)
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), q(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await C.Z.verifyPhone(this.getFullLogin(), e, !1);
        t(V.Z5c.RESET, {
          search: (0, u.stringify)({
            token: n,
            from_login: "true"
          })
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), q(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: s
      } = e;
      return w.S.dispatch(V.CkL.WAVE_EMPHASIZE), _.Z.loginMFAv2({
        code: n,
        ticket: s,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), q(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      try {
        w.S.dispatch(V.CkL.WAVE_EMPHASIZE), await _.Z.forgotPassword(t), (0, h.openModal)(e => (0, r.jsx)(h.ConfirmModal, {
          header: K.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
          confirmText: K.Z.Messages.OKAY,
          confirmButtonColor: j.zx.Colors.BRAND,
          className: c.tq ? Y.mobile : "",
          ...e,
          children: (0, r.jsx)(h.Text, {
            variant: "text-md/normal",
            children: K.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
              email: t
            })
          })
        }))
      } catch {}
    }), q(this, "handleResendCode", () => {
      C.Z.resendCode(this.getFullLogin())
    }), q(this, "handleReset", e => {
      null != e && e.preventDefault(), _.Z.loginReset(), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: !1,
        checkingHandoff: !1,
        redirecting: !1
      })
    }), q(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: !0
      }, this.handleLogin)
    }), q(this, "handleGotoRegister", () => {
      let e;
      let {
        login: t
      } = this.state, {
        invite: n,
        giftCode: s,
        guildTemplate: r,
        location: i,
        transitionTo: a,
        redirectTo: l
      } = this.props, o = null != i ? (0, u.parse)(i.search) : {};
      "" !== t && (o.email = t), null != n ? (o.mode = "register", e = V.Z5c.INVITE(n.code)) : null != s ? (o.mode = "register", e = V.Z5c.GIFT_CODE(s.code)) : null != r ? e = V.Z5c.GUILD_TEMPLATE(r.code) : null != l ? (e = V.Z5c.REGISTER, o.redirect_to = l) : e = V.Z5c.REGISTER, _.Z.loginReset(), a(e, {
        search: (0, u.stringify)(o)
      }), w.S.dispatch(V.CkL.WAVE_EMPHASIZE)
    });
    let s = null != e.location ? (0, u.parse)(e.location.search) : {};
    this.state = {
      redirecting: e.authenticated,
      checkingHandoff: e.handoffAvailable,
      loginPrefix: "",
      login: null !== (n = null !== (t = s.email) && void 0 !== t ? t : s.login) && void 0 !== n ? n : "",
      password: "",
      code: "",
      smsCode: "",
      undelete: !1,
      phoneVerifyError: null,
      dismissedChooseAccount: !1,
      conditionalMediationAbortController: new AbortController
    }
  }
}
q(J, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
t.Z = function(e) {
  let t = (0, d.cj)([D.Z, b.Z, v.default, R.Z, x.Z], () => ({
      authenticated: v.default.isAuthenticated(),
      handoffAvailable: D.Z.isHandoffAvailable(),
      user: D.Z.user,
      loginStatus: v.default.getLoginStatus(),
      mfaTicket: v.default.getMFATicket(),
      mfaSMS: v.default.getMFASMS(),
      mfaMethods: v.default.getMFAMethods(),
      maskedPhone: v.default.getMaskedPhone(),
      errors: v.default.getErrors(),
      defaultRoute: b.Z.defaultRoute,
      country: x.Z.getCountryCode(),
      hasLoggedInAccounts: R.Z.getHasLoggedInAccounts()
    })),
    n = M.Z.useExperiment({
      location: "login"
    }).enabled;
  return (0, r.jsx)(J, {
    ...e,
    ...t,
    hasPasswordlessExperiment: n
  })
}