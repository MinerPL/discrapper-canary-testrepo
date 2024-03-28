"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("803997"),
  i = s.n(l),
  o = s("153832"),
  r = s("990547"),
  u = s("481060"),
  d = s("985513"),
  h = s("285952"),
  c = s("968405"),
  p = s("689938"),
  f = s("496961"),
  m = s("605094"),
  C = s("794711");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class y extends a.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([s.e("93198").then(s.t.bind(s, "140523", 19)), s.e("23755").then(s.t.bind(s, "500923", 23))]);
    null != this._lottieRef && (this._animItem = t.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: !0,
      autoplay: !1,
      animationData: e
    }))
  }
  componentWillUnmount() {
    null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
  }
  render() {
    let e, t, s;
    let {
      error: a,
      working: l,
      transitionState: o,
      validPhone: g
    } = this.props;
    return e = null != a && "" !== a ? (0, n.jsx)("div", {
      className: i()(f.description, f.error, C.marginBottom20),
      children: a
    }) : g ? (0, n.jsx)("div", {
      className: i()(f.description, C.marginBottom20),
      children: p.default.Messages.VERIFICATION_PHONE_DESCRIPTION
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: i()(f.description, C.marginBottom20),
        children: p.default.Messages.ENTER_PHONE_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: i()(f.description, C.marginBottom20),
        children: p.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
      })]
    }), t = g ? (0, n.jsxs)(h.default, {
      className: f.field,
      direction: h.default.Direction.VERTICAL,
      align: h.default.Align.CENTER,
      children: [(0, n.jsx)(d.default, {
        onSubmit: this.handleVerifyPhone
      }), (0, n.jsx)(u.Button, {
        className: C.marginTop8,
        size: u.ButtonSizes.SMALL,
        look: u.ButtonLooks.LINK,
        color: u.ButtonColors.PRIMARY,
        onClick: this.handleResendCode,
        children: p.default.Messages.RESEND_CODE
      })]
    }) : (0, n.jsx)(c.default, {
      className: f.field,
      onSubmit: this.handleAddPhone,
      submitting: l
    }), s = g ? p.default.Messages.VERIFICATION_PHONE_TITLE : p.default.Messages.ENTER_PHONE_TITLE, (0, n.jsxs)(u.ModalRoot, {
      impression: {
        impressionName: r.ImpressionNames.USER_VERIFY_PHONE
      },
      transitionState: o,
      className: i()(f.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, C.marginTop60),
      "aria-labelledby": this.headerId,
      children: [(0, n.jsx)("div", {
        className: f.animationContainer,
        ref: this.setLottieRef
      }), (0, n.jsx)("div", {
        className: i()(f.title, C.marginBottom8),
        id: this.headerId,
        children: s
      }), e, t]
    })
  }
  constructor(e) {
    super(e), g(this, "_animItem", null), g(this, "_lottieRef", void 0), g(this, "headerId", (0, o.v4)()), g(this, "setLottieRef", e => {
      this._lottieRef = e
    }), g(this, "handleAddPhone", e => {
      this.state.animated || null == this._animItem ? this.setState({
        phone: e
      }) : (this._animItem.play(), this.setState({
        animated: !0,
        phone: e
      }));
      let {
        onAddPhone: t
      } = this.props;
      null == t || t(e)
    }), g(this, "handleVerifyPhone", e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }), g(this, "handleResendCode", () => {
      let {
        onAddPhone: e
      } = this.props;
      null == e || e(this.state.phone)
    }), this.state = {
      animated: !1,
      phone: ""
    }
  }
}
t.default = y