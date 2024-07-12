n.d(t, {
  q: function() {
return Y;
  }
});
var s, r = n(735250),
  i = n(470079),
  a = n(615231),
  l = n(120356),
  o = n.n(l),
  c = n(593473),
  u = n(873546),
  d = n(442837),
  h = n(481060),
  _ = n(570140),
  E = n(893776),
  g = n(899742),
  p = n(579806),
  f = n(743142),
  I = n(388905),
  m = n(379760),
  N = n(100159),
  T = n(473855),
  x = n(124860),
  A = n(86779),
  C = n(726745),
  S = n(913583),
  O = n(144114),
  v = n(541692),
  Z = n(952802),
  R = n(108427),
  b = n(365007),
  D = n(314897),
  L = n(117240),
  M = n(896797),
  P = n(285952),
  j = n(626135),
  y = n(585483),
  G = n(358085),
  B = n(481153),
  U = n(588705),
  k = n(494526),
  F = n(163671),
  w = n(981631),
  H = n(58346),
  V = n(689938),
  z = n(513810),
  K = n(549856);

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function Y() {
  return (0, r.jsx)(I.ZP, {
children: (0, r.jsx)(h.Spinner, {})
  });
}
class q extends(s = i.PureComponent) {
  static getDerivedStateFromProps(e) {
let {
  handoffAvailable: t,
  authenticated: n
} = e;
return t || n ? null : {
  checkingHandoff: !1
};
  }
  componentDidMount() {
let {
  handoffAvailable: e,
  authenticated: t,
  giftCodeSKU: n,
  invite: s,
  location: r
} = this.props;
e && !t ? (0, g.is)() : t && this.loginOrSSO(t, r, !0), j.default.track(w.rMx.LOGIN_VIEWED, {
  location: null != s ? 'Invite Login Page' : 'Non-Invite Login Page',
  login_source: this.loginSource,
  authenticated: t,
  ...null != n ? (0, N.Z)(n, !1, !1) : {}
}, {
  flush: !0
}), null == p.Z && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable && PublicKeyCredential.isConditionalMediationAvailable().then(e => {
  e && (0, b.us)().then(e => {
    let {
      challenge: t,
      ticket: n
    } = e, s = (0, a.wz)(JSON.parse(t));
    return s.signal = this.state.conditionalMediationAbortController.signal, (0, a.U2)(s).then(e => (_.Z.dispatch({
      type: 'PASSWORDLESS_START'
    }), E.Z.loginWebAuthn({
      ticket: n,
      credential: JSON.stringify(e),
      source: this.loginSource,
      giftCodeSKUId: this.giftCodeSKUId
    }))).catch(e => {
      if ('AbortError' !== e.name)
        throw e;
    });
  }).catch(() => {});
}), E.Z.getLocationMetadata(), (0, R.e)('login');
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
  this.hasError('password') ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError('email') || this.hasError('login') ? null === (i = this.loginRef) || void 0 === i || i.focus() : this.hasError('code') && (null === (a = this.codeRef) || void 0 === a || a.focus());
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
if (null != s)
  return s;
if (null != e)
  return 'gift';
if (null != t)
  return 'guild_template';
else if (null != n) {
  if (null != n.guild)
    return 'guild_invite';
  if (null != n.channel)
    return 'dm_invite';
  else if (null != n.inviter)
    return 'friend_invite';
}
return null != r ? (0, f.L)(r) : null;
  }
  get giftCodeSKUId() {
let {
  giftCode: e
} = this.props;
return null != e ? e.skuId : null;
  }
  get canShowChooseAccount() {
return this.props.hasLoggedInAccounts;
  }
  loginOrSSO(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (!!e && null != t)
  this.setState({
    redirecting: !0
  }), n ? E.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t);
  }
  transitionSSO(e) {
let {
  transitionTo: t,
  redirectTo: n,
  replaceWith: s
} = this.props, r = null != e ? (0, c.parse)(e.search) : {};
if (delete r.redirect_to, null != n)
  null != s ? s(n) : t(n);
else if (null == r.service)
  t(w.Z5c.APP);
else {
  let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + w.ANM.SSO,
    t = {
      ...r,
      token: D.default.getToken()
    };
  window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
}
  }
  hasError(e) {
return null != this.props.errors[e];
  }
  renderHandOffAvailable() {
let {
  authBoxClassName: e
} = this.props;
return (0, r.jsxs)(I.ZP, {
  className: e,
  children: [
    (0, r.jsx)(I.Hh, {}),
    (0, r.jsx)(I.Dx, {
      className: K.marginBottom8,
      children: V.Z.Messages.BROWSER_HANDOFF_DETECTING_TITLE
    }),
    (0, r.jsx)(I.DK, {
      children: V.Z.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
    })
  ]
});
  }
  renderHandOffContinue() {
let {
  user: e,
  transitionTo: t,
  authBoxClassName: n
} = this.props;
return null == e ? null : (0, r.jsxs)(I.ZP, {
  className: n,
  children: [
    (0, r.jsx)(I.qE, {
      src: e.getAvatarURL(void 0, 100),
      size: h.AvatarSizes.DEPRECATED_SIZE_100,
      className: K.marginBottom20
    }),
    (0, r.jsx)(I.Dx, {
      className: K.marginBottom8,
      children: V.Z.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
        name: e.toString()
      })
    }),
    (0, r.jsx)(I.DK, {
      className: K.marginBottom40,
      children: V.Z.Messages._BROWSER_HANDOFF_SUCCESS_BODY
    }),
    (0, r.jsxs)(I.gO, {
      children: [
        (0, r.jsx)(I.zx, {
          onClick: () => t(w.Z5c.APP),
          className: K.marginBottom8,
          children: V.Z.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
            name: e.toString()
          })
        }),
        (0, r.jsx)(I.zx, {
          look: I.zx.Looks.LINK,
          color: I.zx.Colors.LINK,
          onClick: this.handleReset,
          children: V.Z.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
        })
      ]
    })
  ]
});
  }
  renderDisabledAccount() {
let {
  authBoxClassName: e
} = this.props, t = this.props.loginStatus === w.u34.ACCOUNT_DISABLED, n = t ? V.Z.Messages.ACCOUNT_DISABLED_TITLE : V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, s = t ? V.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
return (0, r.jsx)(I.ZP, {
  tag: 'form',
  onSubmit: this.handleReset,
  className: e,
  children: (0, r.jsxs)(h.HeadingLevel, {
    component: (0, r.jsx)(I.Dx, {
      className: K.marginBottom8,
      children: n
    }),
    children: [
      (0, r.jsx)(I.DK, {
        className: K.marginBottom20,
        children: s
      }),
      (0, r.jsxs)(I.gO, {
        children: [
          (0, r.jsx)(I.zx, {
            color: I.zx.Colors.BRAND,
            type: 'submit',
            children: V.Z.Messages._RETURN_TO_LOGIN
          }),
          (0, r.jsx)('div', {
            className: o()(K.marginTop8, z.needAccount),
            children: V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
              onClick: this.handleCancelAccountDeletion
            })
          })
        ]
      })
    ]
  })
});
  }
  renderResolving() {
let {
  authBoxClassName: e,
  country: t
} = this.props;
return (0, r.jsxs)(I.ZP, {
  className: e,
  children: [
    (0, r.jsx)(U.R, {}),
    (0, r.jsxs)(I.gO, {
      className: K.marginTop20,
      children: [
        (0, r.jsx)(Z.Z, {
          className: K.marginBottom20,
          alpha2: t.alpha2,
          countryCode: t.code.split(' ')[0],
          label: V.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
          autoFocus: !0,
          required: !0
        }),
        (0, r.jsx)(I.II, {
          className: K.marginBottom20,
          label: V.Z.Messages.FORM_LABEL_PASSWORD,
          onChange: e => this.setState({
            password: e
          }),
          type: 'password',
          setRef: this.setPasswordRef,
          autoComplete: 'off',
          spellCheck: 'false',
          value: this.state.password,
          required: !0
        }),
        (0, r.jsx)(I.zx, {
          className: K.marginBottom8,
          type: 'submit',
          disabled: !0,
          children: V.Z.Messages._LOGIN
        }),
        (0, r.jsx)(I.zx, {
          disabled: !0,
          look: I.zx.Looks.LINK,
          color: I.zx.Colors.LINK,
          children: V.Z.Messages.FORGOT_PASSWORD
        }),
        (0, r.jsx)(I.zx, {
          disabled: !0,
          className: K.marginTop4,
          look: I.zx.Looks.LINK,
          color: I.zx.Colors.LINK,
          children: V.Z.Messages.NEED_ACCOUNT
        })
      ]
    })
  ]
});
  }
  renderDefaultForm(e) {
var t;
let n;
let {
  invite: s,
  giftCode: i,
  loginStatus: a,
  country: l,
  showMobileWebHandoff: c,
  disableAutofocusOnDefaultForm: u
} = this.props, d = !this.hasError('email') && this.hasError('password'), _ = (null == s ? void 0 : s.stage_instance) != null;
return n = null == s || _ ? null != i ? (0, r.jsx)(B.Z, {
  giftCode: i
}) : (0, r.jsxs)('div', {
  className: z.header,
  children: [
    (0, r.jsx)(I.Dx, {
      className: K.marginBottom8,
      children: V.Z.Messages.LOGIN_TITLE
    }, 'title'),
    !1 === (0, G.isAndroidWeb)() ? (0, r.jsx)(I.DK, {
      children: V.Z.Messages.AUTH_LOGIN_BODY
    }, 'subtitle') : null
  ]
}) : (0, r.jsx)(U.Z, {
  invite: s
}), (0, r.jsxs)(P.Z, {
  direction: P.Z.Direction.HORIZONTAL,
  align: P.Z.Align.CENTER,
  children: [
    (0, r.jsxs)('div', {
      className: z.mainLoginContainer,
      children: [
        this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, r.jsx)(I.zx, {
          onClick: () => {
            this.setState(e => ({
              ...e,
              dismissedChooseAccount: !1
            }));
          },
          look: I.zx.Looks.LINK,
          color: I.zx.Colors.PRIMARY,
          className: z.goBackButton,
          children: (0, r.jsxs)('div', {
            className: z.content,
            children: [
              (0, r.jsx)(h.ChevronSmallLeftIcon, {
                size: 'xs',
                color: 'currentColor',
                className: z.caret
              }),
              (0, r.jsx)(h.Text, {
                variant: 'text-md/normal',
                children: V.Z.Messages.AGE_GATE_GO_BACK
              })
            ]
          })
        }),
        n,
        (0, r.jsx)(h.HeadingLevel, {
          children: (0, r.jsxs)(I.gO, {
            className: K.marginTop20,
            children: [
              (0, r.jsx)(Z.Z, {
                alpha2: l.alpha2,
                countryCode: l.code.split(' ')[0],
                className: K.marginBottom20,
                label: V.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                error: null !== (t = this.renderError('login')) && void 0 !== t ? t : this.renderError('email'),
                onChange: (e, t) => this.setState({
                  login: e,
                  loginPrefix: t
                }),
                setRef: this.setLoginRef,
                autoCapitalize: 'none',
                autoComplete: 'webauthn',
                autoCorrect: 'off',
                spellCheck: 'false',
                value: this.state.login,
                autoFocus: !d && !c && !u,
                required: !0
              }),
              (0, r.jsx)(I.II, {
                label: V.Z.Messages.FORM_LABEL_PASSWORD,
                error: this.renderError('password'),
                onChange: e => this.setState({
                  password: e
                }),
                name: 'password',
                type: 'password',
                setRef: this.setPasswordRef,
                autoComplete: 'off',
                spellCheck: 'false',
                autoFocus: d && !c && !u,
                value: this.state.password,
                required: !0
              }),
              (0, r.jsx)(I.zx, {
                onClick: this.handleForgotPassword,
                look: I.zx.Looks.LINK,
                color: I.zx.Colors.LINK,
                className: o()(K.marginBottom20, K.marginTop4),
                children: V.Z.Messages.FORGOT_PASSWORD
              }),
              (0, r.jsx)(I.zx, {
                type: 'submit',
                submitting: a === w.u34.LOGGING_IN,
                color: _ ? I.zx.Colors.GREEN : I.zx.Colors.BRAND,
                className: K.marginBottom8,
                children: _ ? V.Z.Messages._LOGIN_STAGE : V.Z.Messages._LOGIN
              }),
              (0, r.jsxs)('div', {
                className: K.marginTop4,
                children: [
                  (0, r.jsx)('span', {
                    className: z.needAccount,
                    children: V.Z.Messages.NEED_ACCOUNT
                  }),
                  (0, r.jsx)(I.zx, {
                    onClick: this.handleGotoRegister,
                    look: I.zx.Looks.LINK,
                    color: I.zx.Colors.LINK,
                    className: z.smallRegisterLink,
                    children: V.Z.Messages.REGISTER
                  })
                ]
              })
            ]
          })
        })
      ]
    }),
    (0, r.jsx)(h.HeadingLevel, {
      children: e ? (0, r.jsx)(k.Z, {
        authTokenCallback: this.handleAuthToken,
        conditionalMediationAbortController: this.state.conditionalMediationAbortController
      }) : null
    })
  ]
}, 'form-wrapper');
  }
  renderDefault() {
let {
  authBoxClassName: e,
  showMobileWebHandoff: t
} = this.props;
return (0, r.jsxs)('div', {
  className: z.__invalid_pageContainer,
  children: [
    (0, r.jsx)(I.ZP, {
      onSubmit: this.handleLogin,
      tag: 'form',
      className: e,
      expanded: !0,
      children: this.renderDefaultForm(!0)
    }),
    t && (0, r.jsx)(A.Z, {})
  ]
});
  }
  renderGuildTemplate(e) {
return (0, r.jsx)(F.Z, {
  onSubmit: this.handleLogin,
  tag: 'form',
  className: o()(this.props.authBoxClassName, z.horizontalAuthBox),
  children: () => [
    (0, r.jsx)(T.Z, {
      guildTemplate: e
    }, 'template'),
    this.renderDefaultForm(!1)
  ]
});
  }
  renderMFA() {
let e = {
  ticket: this.props.mfaTicket,
  methods: this.props.mfaMethods
};
return (0, r.jsx)(I.ZP, {
  style: {
    padding: 0
  },
  children: (0, r.jsx)(x.Cd, {
    mfaFinish: this.handleTokenSubmitMFA,
    request: e,
    onEarlyClose: () => {
      _.Z.dispatch({
        type: 'LOGIN_RESET'
      });
    },
    width: 480
  })
});
  }
  renderIPAuthorization() {
let {
  authBoxClassName: e
} = this.props, {
  phoneVerifyError: t
} = this.state;
return (0, r.jsx)(I.ZP, {
  tag: 'form',
  className: e,
  children: (0, r.jsx)(m.Z, {
    title: V.Z.Messages.PHONE_IP_AUTHORIZATION_TITLE,
    subtitle: V.Z.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
      onResendClick: this.handleResendCode
    }),
    error: t,
    onSubmit: this.handleIPAuthorize,
    onCancel: E.Z.loginReset
  })
});
  }
  renderPasswordRecovery() {
let {
  authBoxClassName: e
} = this.props, {
  phoneVerifyError: t
} = this.state;
return (0, r.jsx)(I.ZP, {
  tag: 'form',
  className: e,
  children: (0, r.jsx)(m.Z, {
    title: V.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
    subtitle: V.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
      onResendClick: this.handleResendCode
    }),
    error: t,
    onSubmit: this.handlePasswordReset,
    onCancel: E.Z.loginReset
  })
});
  }
  renderChooseAccount() {
return (0, r.jsx)(S.Z, {
  onDismiss: () => {
    this.setState(e => ({
      ...e,
      dismissedChooseAccount: !0
    }));
  }
});
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
if (l || a)
  return (0, r.jsx)(Y, {});
if (i)
  return this.renderHandOffAvailable();
if (e && a)
  return this.renderHandOffContinue();
switch (s) {
  case w.u34.LOGGING_IN_MFA_SMS:
  case w.u34.MFA_SMS_STEP:
  case w.u34.LOGGING_IN_MFA:
  case w.u34.MFA_STEP:
    return this.renderMFA();
  case w.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
  case w.u34.ACCOUNT_DISABLED:
    return this.renderDisabledAccount();
  case w.u34.PHONE_IP_AUTHORIZATION:
    return this.renderIPAuthorization();
  case w.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
    return this.renderPasswordRecovery();
  case w.u34.LOGGING_IN:
  case w.u34.NONE:
  default:
    if (null != t && t.state === w.r2o.RESOLVING)
      return this.renderResolving();
    if (null != n) {
      if (n.state === H.Rj.RESOLVING)
        return this.renderResolving();
      return this.renderGuildTemplate(n);
    }
    if (this.canShowChooseAccount && !this.state.dismissedChooseAccount)
      return this.renderChooseAccount();
    return this.renderDefault();
}
  }
  constructor(e) {
var t, n;
super(e), W(this, 'loginRef', void 0), W(this, 'passwordRef', void 0), W(this, 'codeRef', void 0), W(this, 'handleAuthToken', async e => {
  await E.Z.loginToken(e, !1), j.default.track(w.rMx.LOGIN_SUCCESSFUL, {
    source: w.uRl.QR_CODE,
    login_source: this.loginSource,
    gift_code_sku_id: this.giftCodeSKUId,
    is_new_user: !1
  });
}), W(this, 'setLoginRef', e => {
  this.loginRef = e;
}), W(this, 'setPasswordRef', e => {
  this.passwordRef = e;
}), W(this, 'setCodeRef', e => {
  this.codeRef = e;
}), W(this, 'getFullLogin', () => {
  let {
    loginPrefix: e,
    login: t
  } = this.state;
  return e + t;
}), W(this, 'renderError', e => {
  let {
    errors: t
  } = this.props;
  if (this.hasError(e)) {
    let n = t[e];
    return Array.isArray(n) ? n[0] : n;
  }
  return null;
}), W(this, 'handleLogin', e => {
  let {
    password: t,
    undelete: n
  } = this.state;
  null != e && e.preventDefault(), E.Z.login({
    login: this.getFullLogin(),
    password: t,
    undelete: n,
    source: this.loginSource,
    giftCodeSKUId: this.giftCodeSKUId,
    invite: this.props.invite
  }), y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
}), W(this, 'handleIPAuthorize', async e => {
  let {
    password: t,
    undelete: n
  } = this.state, s = this.getFullLogin();
  try {
    let {
      token: r
    } = await O.Z.verifyPhone(s, e, !1);
    await E.Z.authorizeIPAddress(r), E.Z.login({
      login: s,
      password: t,
      undelete: n,
      source: this.loginSource,
      giftCodeSKUId: this.giftCodeSKUId
    }), y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
  } catch (e) {
    null != e.body && null != e.body.message && this.setState({
      phoneVerifyError: e.body.message
    });
  }
}), W(this, 'handlePasswordReset', async e => {
  let {
    transitionTo: t
  } = this.props;
  this.setState({
    phoneVerifyError: null
  });
  try {
    let {
      token: n
    } = await O.Z.verifyPhone(this.getFullLogin(), e, !1);
    t(w.Z5c.RESET, {
      search: (0, c.stringify)({
        token: n,
        from_login: 'true'
      })
    });
  } catch (e) {
    null != e.body && null != e.body.message && this.setState({
      phoneVerifyError: e.body.message
    });
  }
}), W(this, 'handleTokenSubmitMFA', e => {
  let {
    mfaType: t,
    data: n,
    ticket: s
  } = e;
  return y.S.dispatch(w.CkL.WAVE_EMPHASIZE), E.Z.loginMFAv2({
    code: n,
    ticket: s,
    mfaType: t,
    source: this.loginSource,
    giftCodeSKUId: this.giftCodeSKUId
  });
}), W(this, 'handleForgotPassword', async e => {
  null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
  let t = this.getFullLogin();
  try {
    y.S.dispatch(w.CkL.WAVE_EMPHASIZE), await E.Z.forgotPassword(t), (0, h.openModal)(e => (0, r.jsx)(h.ConfirmModal, {
      header: V.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
      confirmText: V.Z.Messages.OKAY,
      confirmButtonColor: I.zx.Colors.BRAND,
      className: u.tq ? z.mobile : '',
      ...e,
      children: (0, r.jsx)(h.Text, {
        variant: 'text-md/normal',
        children: V.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
          email: t
        })
      })
    }));
  } catch {}
}), W(this, 'handleResendCode', () => {
  O.Z.resendCode(this.getFullLogin());
}), W(this, 'handleReset', e => {
  null != e && e.preventDefault(), E.Z.loginReset(), this.setState({
    password: '',
    loginPrefix: '',
    login: '',
    code: '',
    smsCode: '',
    undelete: !1,
    checkingHandoff: !1,
    redirecting: !1
  });
}), W(this, 'handleCancelAccountDeletion', () => {
  this.setState({
    undelete: !0
  }, this.handleLogin);
}), W(this, 'handleGotoRegister', () => {
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
  } = this.props, o = null != i ? (0, c.parse)(i.search) : {};
  '' !== t && (o.email = t), null != n ? (o.mode = 'register', e = w.Z5c.INVITE(n.code)) : null != s ? (o.mode = 'register', e = w.Z5c.GIFT_CODE(s.code)) : null != r ? e = w.Z5c.GUILD_TEMPLATE(r.code) : null != l ? (e = w.Z5c.REGISTER, o.redirect_to = l) : e = w.Z5c.REGISTER, E.Z.loginReset(), a(e, {
    search: (0, c.stringify)(o)
  }), y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
});
let s = null != e.location ? (0, c.parse)(e.location.search) : {};
this.state = {
  redirecting: e.authenticated,
  checkingHandoff: e.handoffAvailable,
  loginPrefix: '',
  login: null !== (n = null !== (t = s.email) && void 0 !== t ? t : s.login) && void 0 !== n ? n : '',
  password: '',
  code: '',
  smsCode: '',
  undelete: !1,
  phoneVerifyError: null,
  dismissedChooseAccount: !1,
  conditionalMediationAbortController: new AbortController()
};
  }
}
W(q, 'defaultProps', {
  transitionTo: e => n.g.location.assign(e)
});
t.Z = function(e) {
  let t = (0, d.cj)([
L.Z,
M.Z,
D.default,
C.Z,
v.Z
  ], () => ({
authenticated: D.default.isAuthenticated(),
handoffAvailable: L.Z.isHandoffAvailable(),
user: L.Z.user,
loginStatus: D.default.getLoginStatus(),
mfaTicket: D.default.getMFATicket(),
mfaSMS: D.default.getMFASMS(),
mfaMethods: D.default.getMFAMethods(),
maskedPhone: D.default.getMaskedPhone(),
errors: D.default.getErrors(),
defaultRoute: M.Z.defaultRoute,
country: v.Z.getCountryCode(),
hasLoggedInAccounts: C.Z.getHasLoggedInAccounts()
  }));
  return (0, r.jsx)(q, {
...e,
...t
  });
};