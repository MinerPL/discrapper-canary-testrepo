s(47120);
var n = s(735250),
  i = s(470079),
  o = s(120356),
  l = s.n(o),
  a = s(772848),
  r = s(990547),
  h = s(481060),
  d = s(7557),
  u = s(285952),
  c = s(200357),
  p = s(689938),
  m = s(858790),
  C = s(483085),
  f = s(549856);

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class y extends i.PureComponent {
  async componentDidMount() {
let [e, {
  default: t
}] = await Promise.all([
  s.e('93198').then(s.t.bind(s, 140523, 19)),
  s.e('23755').then(s.t.bind(s, 500923, 23))
]);
null != this._lottieRef && (this._animItem = t.loadAnimation({
  container: this._lottieRef,
  renderer: 'svg',
  loop: !0,
  autoplay: !1,
  animationData: e
}));
  }
  componentWillUnmount() {
null != this._animItem && (this._animItem.destroy(), this._animItem = void 0);
  }
  render() {
let e, t, s;
let {
  error: i,
  working: o,
  transitionState: a,
  validPhone: g
} = this.props;
return e = null != i && '' !== i ? (0, n.jsx)('div', {
  className: l()(m.description, m.error, f.marginBottom20),
  children: i
}) : g ? (0, n.jsx)('div', {
  className: l()(m.description, f.marginBottom20),
  children: p.Z.Messages.VERIFICATION_PHONE_DESCRIPTION
}) : (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)('div', {
      className: l()(m.description, f.marginBottom20),
      children: p.Z.Messages.ENTER_PHONE_DESCRIPTION
    }),
    (0, n.jsx)('div', {
      className: l()(m.description, f.marginBottom20),
      children: p.Z.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
    })
  ]
}), t = g ? (0, n.jsxs)(u.Z, {
  className: m.field,
  direction: u.Z.Direction.VERTICAL,
  align: u.Z.Align.CENTER,
  children: [
    (0, n.jsx)(d.Z, {
      onSubmit: this.handleVerifyPhone
    }),
    (0, n.jsx)(h.Button, {
      className: f.marginTop8,
      size: h.ButtonSizes.SMALL,
      look: h.ButtonLooks.LINK,
      color: h.ButtonColors.PRIMARY,
      onClick: this.handleResendCode,
      children: p.Z.Messages.RESEND_CODE
    })
  ]
}) : (0, n.jsx)(c.Z, {
  className: m.field,
  onSubmit: this.handleAddPhone,
  submitting: o
}), s = g ? p.Z.Messages.VERIFICATION_PHONE_TITLE : p.Z.Messages.ENTER_PHONE_TITLE, (0, n.jsxs)(h.ModalRoot, {
  impression: {
    impressionName: r.ImpressionNames.USER_VERIFY_PHONE
  },
  transitionState: a,
  className: l()(m.phoneVerificationModal, C.vertical, C.alignCenter, C.justifyCenter, f.marginTop60),
  'aria-labelledby': this.headerId,
  children: [
    (0, n.jsx)('div', {
      className: m.animationContainer,
      ref: this.setLottieRef
    }),
    (0, n.jsx)('div', {
      className: l()(m.title, f.marginBottom8),
      id: this.headerId,
      children: s
    }),
    e,
    t
  ]
});
  }
  constructor(e) {
super(e), g(this, '_animItem', null), g(this, '_lottieRef', void 0), g(this, 'headerId', (0, a.Z)()), g(this, 'setLottieRef', e => {
  this._lottieRef = e;
}), g(this, 'handleAddPhone', e => {
  this.state.animated || null == this._animItem ? this.setState({
    phone: e
  }) : (this._animItem.play(), this.setState({
    animated: !0,
    phone: e
  }));
  let {
    onAddPhone: t
  } = this.props;
  null == t || t(e);
}), g(this, 'handleVerifyPhone', e => {
  let {
    onVerifyPhone: t
  } = this.props;
  null == t || t(e);
}), g(this, 'handleResendCode', () => {
  let {
    onAddPhone: e
  } = this.props;
  null == e || e(this.state.phone);
}), this.state = {
  animated: !1,
  phone: ''
};
  }
}
t.Z = y;