t.d(s, {
  Z: function() {
return C;
  }
}), t(47120), t(411104);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(533307),
  l = t(600164),
  c = t(930114),
  d = t(246946),
  _ = t(626135),
  E = t(669079),
  u = t(981631),
  I = t(689938),
  T = t(381670);

function S(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class N extends a.Component {
  get analyticsLocation() {
let {
  analyticsContext: {
    location: e
  }
} = this.props;
return {
  ...e,
  object: u.qAy.BUTTON_CTA
};
  }
  render() {
let {
  obscureInput: e
} = this.props, {
  codeInput: s,
  submitting: t,
  hasError: a,
  isPromoCode: i
} = this.state;
return (0, n.jsxs)(r.FormSection, {
  tag: r.FormTitleTags.H1,
  title: I.Z.Messages.GIFT_INVENTORY_REDEEM_CODES,
  children: [
    (0, n.jsx)(r.FormTitle, {
      children: I.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMPT
    }),
    (0, n.jsx)('form', {
      onSubmit: this.handleSubmit,
      children: (0, n.jsxs)(l.Z, {
        children: [
          (0, n.jsx)(r.TextInput, {
            type: e ? 'password' : 'text',
            value: s,
            onChange: this.handleChange,
            placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
            error: !i && a ? I.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_INVALID : null,
            className: T.codeRedemptionInput
          }),
          (0, n.jsx)(r.Button, {
            type: 'submit',
            submitting: t,
            children: I.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_REDEEM
          })
        ]
      })
    }),
    i ? (0, n.jsx)(r.Text, {
      className: T.errorMessage,
      variant: 'text-sm/normal',
      children: I.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMOTION.format({
        promoLink: () => {
          window.open('https://discord.com/billing/promotions/'.concat(s));
        }
      })
    }) : null
  ]
});
  }
  constructor(...e) {
super(...e), S(this, 'state', {
  codeInput: '',
  submitting: !1,
  hasError: !1,
  isPromoCode: !1
}), S(this, 'handleChange', e => {
  this.setState({
    codeInput: e,
    hasError: !1
  });
}), S(this, 'handleSubmit', async e => {
  e.preventDefault();
  let {
    codeInput: s
  } = this.state;
  if ('' === s)
    return;
  let t = (0, E.JT)(s);
  if (null == t) {
    this.setState({
      hasError: !0
    });
    return;
  }
  this.setState({
    submitting: !0
  });
  try {
    let e = await o.Z.resolveGiftCode(t);
    if (null != e && null != e.giftCode.promotion)
      throw this.setState({
        isPromoCode: !0
      }), Error('Cannnot redeem promotion code as gift');
    _.default.track(u.rMx.OPEN_MODAL, {
      type: 'gift_accept',
      location: {
        ...this.analyticsLocation,
        object: u.qAy.BUTTON_CTA
      }
    }), (0, c.V)({
      processedCode: t
    }), this.setState({
      codeInput: ''
    });
  } catch (e) {
    this.setState({
      hasError: !0
    });
  } finally {
    this.setState({
      submitting: !1
    });
  }
});
  }
}

function C() {
  let e = a.useContext(_.AnalyticsContext),
s = (0, i.e7)([d.Z], () => d.Z.enabled);
  return (0, n.jsx)(N, {
analyticsContext: e,
obscureInput: s
  });
}