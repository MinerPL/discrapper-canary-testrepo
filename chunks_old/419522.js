"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  o = s.n(l),
  i = s("748820"),
  r = s("759843"),
  d = s("77078"),
  u = s("794538"),
  h = s("145131"),
  c = s("794851"),
  p = s("782340"),
  f = s("51237"),
  m = s("125047"),
  C = s("890957");
class g extends a.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([s.el("432201").then(s.t.bind(s, "432201", 19)), s.el("865981").then(s.t.bind(s, "865981", 23))]);
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
      transitionState: i,
      validPhone: g
    } = this.props;
    return e = null != a && "" !== a ? (0, n.jsx)("div", {
      className: o(f.description, f.error, C.marginBottom20),
      children: a
    }) : g ? (0, n.jsx)("div", {
      className: o(f.description, C.marginBottom20),
      children: p.default.Messages.VERIFICATION_PHONE_DESCRIPTION
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: o(f.description, C.marginBottom20),
        children: p.default.Messages.ENTER_PHONE_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: o(f.description, C.marginBottom20),
        children: p.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
      })]
    }), t = g ? (0, n.jsxs)(h.default, {
      className: f.field,
      direction: h.default.Direction.VERTICAL,
      align: h.default.Align.CENTER,
      children: [(0, n.jsx)(u.default, {
        onSubmit: this.handleVerifyPhone
      }), (0, n.jsx)(d.Button, {
        className: C.marginTop8,
        size: d.ButtonSizes.SMALL,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: this.handleResendCode,
        children: p.default.Messages.RESEND_CODE
      })]
    }) : (0, n.jsx)(c.default, {
      className: f.field,
      onSubmit: this.handleAddPhone,
      submitting: l
    }), s = g ? p.default.Messages.VERIFICATION_PHONE_TITLE : p.default.Messages.ENTER_PHONE_TITLE, (0, n.jsxs)(d.ModalRoot, {
      impression: {
        impressionName: r.ImpressionNames.USER_VERIFY_PHONE
      },
      transitionState: i,
      className: o(f.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, C.marginTop60),
      "aria-labelledby": this.headerId,
      children: [(0, n.jsx)("div", {
        className: f.animationContainer,
        ref: this.setLottieRef
      }), (0, n.jsx)("div", {
        className: o(f.title, C.marginBottom8),
        id: this.headerId,
        children: s
      }), e, t]
    })
  }
  constructor(e) {
    super(e), this._animItem = null, this.headerId = (0, i.v4)(), this.setLottieRef = e => {
      this._lottieRef = e
    }, this.handleAddPhone = e => {
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
    }, this.handleVerifyPhone = e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }, this.handleResendCode = () => {
      let {
        onAddPhone: e
      } = this.props;
      null == e || e(this.state.phone)
    }, this.state = {
      animated: !1,
      phone: ""
    }
  }
}
var y = g