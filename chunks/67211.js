"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  o = s("748820"),
  r = s("862337"),
  d = s("77078"),
  h = s("49111"),
  u = s("782340"),
  m = s("908492"),
  c = s("125047"),
  f = s("890957");
class g extends n.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([s.el("280201").then(s.t.bind(s, "280201", 19)), s.el("865981").then(s.t.bind(s, "865981", 23))]);
    null != this._lottieRef && (this._animItem = t.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: e
    }))
  }
  componentWillUnmount() {
    this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
  }
  renderInputs() {
    let {
      emailError: e,
      passwordError: t,
      submitting: s
    } = this.props, {
      email: n,
      password: i
    } = this.state;
    return (0, a.jsxs)("div", {
      className: m.container,
      children: [(0, a.jsx)(d.FormItem, {
        title: u.default.Messages.FORM_LABEL_EMAIL,
        className: f.marginBottom20,
        children: (0, a.jsx)(d.TextInput, {
          value: n,
          error: e,
          onChange: this.handleEmailChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        })
      }), (0, a.jsx)(d.FormItem, {
        title: u.default.Messages.FORM_LABEL_PASSWORD,
        className: f.marginBottom40,
        children: (0, a.jsx)(d.TextInput, {
          type: "password",
          value: i,
          error: t,
          onChange: this.handlePasswordChange,
          onKeyPress: this.handleKeyPress
        })
      }), (0, a.jsx)(d.Button, {
        fullWidth: !0,
        size: d.Button.Sizes.LARGE,
        onClick: this.handleVerify,
        submitting: s,
        disabled: 0 === n.length || 0 === i.length,
        children: u.default.Messages.VERIFY_ACCOUNT
      })]
    })
  }
  renderActions() {
    let {
      canChange: e
    } = this.props;
    return (0, a.jsxs)("div", {
      className: m.container,
      children: [(0, a.jsx)(d.Button, {
        className: f.marginTop20,
        fullWidth: !0,
        size: d.Button.Sizes.LARGE,
        look: d.ButtonLooks.INVERTED,
        color: d.ButtonColors.PRIMARY,
        onClick: this.handleResendEmail,
        children: u.default.Messages.RESEND_EMAIL
      }), e && (0, a.jsx)(d.Button, {
        className: f.marginTop20,
        fullWidth: !0,
        size: d.Button.Sizes.MEDIUM,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: this.handleChangeEmailClick,
        children: u.default.Messages.CHANGE_EMAIL
      })]
    })
  }
  render() {
    let e;
    let {
      resent: t
    } = this.state, {
      email: s,
      canResend: n,
      transitionState: i
    } = this.props;
    return e = t && null != s ? u.default.Messages.VERIFY_EMAIL_BODY_RESENT.format({
      email: s
    }) : n ? u.default.Messages.VERIFY_EMAIL_BODY : u.default.Messages.ENTER_EMAIL_BODY, (0, a.jsxs)(d.ModalRoot, {
      transitionState: i,
      "aria-labelledby": this._headerId,
      className: l(m.emailVerificationModal, c.vertical, c.alignCenter, c.justifyCenter, f.marginTop60),
      children: [(0, a.jsx)("div", {
        className: m.animationContainer,
        ref: this.setLottieRef
      }), (0, a.jsx)("div", {
        id: this._headerId,
        className: l(m.title, f.marginBottom8),
        children: u.default.Messages.VERIFY_BY_EMAIL
      }), (0, a.jsx)("div", {
        className: l(m.body, f.marginBottom20),
        children: e
      }), n ? this.renderActions() : this.renderInputs()]
    })
  }
  constructor(...e) {
    super(...e), this._animItem = null, this._timeout = new r.Timeout, this._headerId = (0, o.v4)(), this.state = {
      resent: !1,
      shouldClose: !1,
      email: "",
      password: ""
    }, this.setLottieRef = e => {
      this._lottieRef = e
    }, this.handleVerify = () => {
      let {
        onVerify: e
      } = this.props;
      e(this.state.email, this.state.password)
    }, this.handleResendEmail = () => {
      let {
        onResend: e,
        onClose: t
      } = this.props;
      e(), !this.state.resent && (this.setState({
        resent: !0,
        shouldClose: !0
      }), this._timeout.start(3e3, () => {
        this.state.shouldClose && t()
      }))
    }, this.handleChangeEmailClick = () => {
      let {
        onChangeEmailClick: e
      } = this.props;
      this.setState({
        resent: !1,
        shouldClose: !1
      }), e()
    }, this.handleEmailChange = e => {
      this.setState({
        email: e
      })
    }, this.handlePasswordChange = e => {
      this.setState({
        password: e
      })
    }, this.handleKeyPress = e => {
      let {
        email: t,
        password: s
      } = this.state;
      13 === e.which && t.length > 0 && s.length > 0 && (e.preventDefault(), this.handleVerify())
    }
  }
}
g.defaultProps = {
  canResend: !1,
  canChange: !0,
  onChangeEmailClick: h.NOOP,
  onVerify: (e, t) => {},
  onResend: h.NOOP,
  onClose: h.NOOP
};
var E = g