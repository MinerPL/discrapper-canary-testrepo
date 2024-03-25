"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("781738");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  o = s.n(n),
  l = s("730290"),
  i = s("394846"),
  d = s("446674"),
  u = s("913144"),
  h = s("437822"),
  c = s("457108"),
  f = s("724038"),
  p = s("24287"),
  g = s("970366"),
  m = s("271938"),
  S = s("124969"),
  T = s("659500"),
  C = s("49111"),
  A = s("782340"),
  E = s("890957");
d.default.initialize();
class N extends r.PureComponent {
  componentDidMount() {
    (0, g.trackAppUIViewed)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: r
    } = this.state, n = this.isSubmitting(), o = null != t ? t : this.renderError("password");
    return (0, a.jsxs)(S.default, {
      onSubmit: this.handleSubmit,
      tag: "form",
      children: [(0, a.jsx)("img", {
        alt: "",
        src: null == o ? s("245288") : s("314837"),
        className: E.marginBottom20
      }), (0, a.jsx)(S.Title, {
        children: A.default.Messages.RESET_PASSWORD_TITLE
      }), (0, a.jsxs)(S.Block, {
        className: E.marginTop20,
        children: [(0, a.jsx)(S.Input, {
          label: A.default.Messages.FORM_LABEL_NEW_PASSWORD,
          className: E.marginBottom20,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: o,
          type: "password"
        }), (0, a.jsx)(S.Button, {
          type: "submit",
          submitting: n,
          children: A.default.Messages.CHANGE_PASSWORD
        }), r ? (0, a.jsx)(S.Button, {
          className: E.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: n,
          color: S.Button.Colors.PRIMARY,
          children: A.default.Messages.CANCEL
        }) : null]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, a.jsx)(S.default, {
      style: {
        padding: 0
      },
      children: (0, a.jsx)(p.MFASlides, {
        mfaFinish: e => {
          let {
            mfaType: t,
            data: s
          } = e;
          return this.handleTokenSubmitMFAv2(t, s)
        },
        request: e,
        onEarlyClose: () => {
          u.default.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderSucceeded() {
    return (0, a.jsxs)(S.default, {
      children: [(0, a.jsx)("img", {
        alt: "",
        src: s("245288"),
        className: o(E.marginBottom20, i.isMobile ? E.marginTop20 : "")
      }), (0, a.jsx)(S.Title, {
        className: E.marginBottom40,
        children: A.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
      }), (0, a.jsx)(S.Button, {
        onClick: this.handleOpenApp,
        children: A.default.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), this.handleSubmit = async e => {
      let {
        location: t,
        onLoginSuccess: s,
        source: a,
        resetToken: r
      } = this.props, {
        password: n,
        error: o
      } = this.state;
      if (null != e && e.preventDefault(), 0 === n.length) {
        this.setState({
          error: A.default.Messages.PASSWORD_REQUIRED
        }), T.ComponentDispatch.dispatch(C.ComponentActions.WAVE_EMPHASIZE);
        return
      }
      null != o && this.setState({
        error: null
      });
      let l = r;
      if (null != t && (l = (0, c.default)(t)), null != l) {
        this.setState({
          working: !0
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: r,
            ticket: o,
            token: i,
            totp: d,
            backup: c
          } = await h.default.resetPassword(l, n, a);
          e === h.PasswordResetResult.MFA ? u.default.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: o,
            sms: t,
            webauthn: r,
            totp: d,
            backup: c
          }) : null != s ? s(i) : (u.default.dispatch({
            type: "LOGIN_SUCCESS",
            token: i
          }), this.handlePasswordChangeSuccess())
        } catch (e) {}
        this.setState({
          working: !1
        })
      }
    }, this.handleTokenSubmitMFAv2 = (e, t) => {
      let {
        location: s,
        mfaTicket: a,
        onLoginSuccess: r,
        resetToken: n,
        source: o
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return u.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let i = n;
      return (null != s && (i = (0, c.default)(s)), null == i) ? (u.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject()) : h.default.resetPasswordMFAv2({
        method: e,
        code: t,
        ticket: a,
        password: l,
        token: i,
        source: o
      }).then(e => {
        null != r ? r(e) : (u.default.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), this.handlePasswordChangeSuccess())
      })
    }, this.handlePasswordChangeSuccess = () => {
      let {
        replaceWith: e
      } = this.props;
      if (i.isTablet || i.isMobile) {
        this.setState({
          success: !0
        });
        return
      }
      e(C.Routes.APP)
    }, this.handleGoToLogin = () => {
      let {
        transitionTo: e
      } = this.props;
      h.default.loginReset(), e(C.Routes.LOGIN)
    }, this.isSubmitting = () => {
      let {
        loginStatus: e
      } = this.props, {
        working: t
      } = this.state;
      return t || e === C.LoginStates.LOGGING_IN_MFA
    }, this.handleOpenApp = () => {
      (0, f.default)("password_reset")
    }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let s = t[e];
        return Array.isArray(s) ? s[0] : s
      }
      return null
    };
    let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, l.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      error: null,
      hasCancel: null != s && null != s.from_login,
      working: !1,
      success: !1
    }
  }
}
N.defaultProps = {
  transitionTo: e => s.g.location.assign(e),
  replaceWith: e => s.g.location.replace(e)
};
var _ = function(e) {
  let t = (0, d.useStateFromStoresObject)([m.default], () => ({
    loginStatus: m.default.getLoginStatus(),
    mfaTicket: m.default.getMFATicket(),
    errors: m.default.getErrors(),
    mfaMethods: m.default.getMFAMethods()
  }));
  return (0, a.jsx)(N, {
    ...e,
    ...t
  })
}