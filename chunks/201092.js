"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  l = s("120356"),
  o = s.n(l),
  r = s("153832"),
  d = s("846519"),
  h = s("481060"),
  u = s("981631"),
  m = s("689938"),
  c = s("287649"),
  f = s("26673"),
  g = s("949086");

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class p extends(a = i.PureComponent) {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([s.e("27526").then(s.t.bind(s, "555589", 19)), Promise.resolve().then(s.t.bind(s, "500923", 23))]);
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
      email: a,
      password: i
    } = this.state;
    return (0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsx)(h.FormItem, {
        title: m.default.Messages.FORM_LABEL_EMAIL,
        className: g.marginBottom20,
        children: (0, n.jsx)(h.TextInput, {
          value: a,
          error: e,
          onChange: this.handleEmailChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        })
      }), (0, n.jsx)(h.FormItem, {
        title: m.default.Messages.FORM_LABEL_PASSWORD,
        className: g.marginBottom40,
        children: (0, n.jsx)(h.TextInput, {
          type: "password",
          value: i,
          error: t,
          onChange: this.handlePasswordChange,
          onKeyPress: this.handleKeyPress
        })
      }), (0, n.jsx)(h.Button, {
        fullWidth: !0,
        size: h.Button.Sizes.LARGE,
        onClick: this.handleVerify,
        submitting: s,
        disabled: 0 === a.length || 0 === i.length,
        children: m.default.Messages.VERIFY_ACCOUNT
      })]
    })
  }
  renderActions() {
    let {
      canChange: e
    } = this.props;
    return (0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsx)(h.Button, {
        className: g.marginTop20,
        fullWidth: !0,
        size: h.Button.Sizes.LARGE,
        look: h.ButtonLooks.INVERTED,
        color: h.ButtonColors.PRIMARY,
        onClick: this.handleResendEmail,
        children: m.default.Messages.RESEND_EMAIL
      }), e && (0, n.jsx)(h.Button, {
        className: g.marginTop20,
        fullWidth: !0,
        size: h.Button.Sizes.MEDIUM,
        look: h.ButtonLooks.LINK,
        color: h.ButtonColors.PRIMARY,
        onClick: this.handleChangeEmailClick,
        children: m.default.Messages.CHANGE_EMAIL
      })]
    })
  }
  render() {
    let e;
    let {
      resent: t
    } = this.state, {
      email: s,
      canResend: a,
      transitionState: i
    } = this.props;
    return e = t && null != s ? m.default.Messages.VERIFY_EMAIL_BODY_RESENT.format({
      email: s
    }) : a ? m.default.Messages.VERIFY_EMAIL_BODY : m.default.Messages.ENTER_EMAIL_BODY, (0, n.jsxs)(h.ModalRoot, {
      transitionState: i,
      "aria-labelledby": this._headerId,
      className: o()(c.emailVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, g.marginTop60),
      children: [(0, n.jsx)("div", {
        className: c.animationContainer,
        ref: this.setLottieRef
      }), (0, n.jsx)("div", {
        id: this._headerId,
        className: o()(c.title, g.marginBottom8),
        children: m.default.Messages.VERIFY_BY_EMAIL
      }), (0, n.jsx)("div", {
        className: o()(c.body, g.marginBottom20),
        children: e
      }), a ? this.renderActions() : this.renderInputs()]
    })
  }
  constructor(...e) {
    super(...e), E(this, "_lottieRef", void 0), E(this, "_animItem", null), E(this, "_timeout", new d.Timeout), E(this, "_headerId", (0, r.v4)()), E(this, "state", {
      resent: !1,
      shouldClose: !1,
      email: "",
      password: ""
    }), E(this, "setLottieRef", e => {
      this._lottieRef = e
    }), E(this, "handleVerify", () => {
      let {
        onVerify: e
      } = this.props;
      e(this.state.email, this.state.password)
    }), E(this, "handleResendEmail", () => {
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
    }), E(this, "handleChangeEmailClick", () => {
      let {
        onChangeEmailClick: e
      } = this.props;
      this.setState({
        resent: !1,
        shouldClose: !1
      }), e()
    }), E(this, "handleEmailChange", e => {
      this.setState({
        email: e
      })
    }), E(this, "handlePasswordChange", e => {
      this.setState({
        password: e
      })
    }), E(this, "handleKeyPress", e => {
      let {
        email: t,
        password: s
      } = this.state;
      13 === e.which && t.length > 0 && s.length > 0 && (e.preventDefault(), this.handleVerify())
    })
  }
}
E(p, "defaultProps", {
  canResend: !1,
  canChange: !0,
  onChangeEmailClick: u.NOOP,
  onVerify: (e, t) => {},
  onResend: u.NOOP,
  onClose: u.NOOP
}), t.default = p