s.d(t, {
  Z: function() {
return C;
  }
}), s(47120), s(411104);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(533307),
  l = s(930114),
  c = s(246946),
  d = s(285952),
  _ = s(626135),
  E = s(669079),
  u = s(981631),
  T = s(689938),
  I = s(983096);

function S(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
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
  codeInput: t,
  submitting: s,
  hasError: a,
  isPromoCode: i
} = this.state;
return (0, n.jsxs)(r.FormSection, {
  tag: r.FormTitleTags.H1,
  title: T.Z.Messages.GIFT_INVENTORY_REDEEM_CODES,
  children: [
    (0, n.jsx)(r.FormTitle, {
      children: T.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMPT
    }),
    (0, n.jsx)('form', {
      onSubmit: this.handleSubmit,
      children: (0, n.jsxs)(d.Z, {
        children: [
          (0, n.jsx)(r.TextInput, {
            type: e ? 'password' : 'text',
            value: t,
            onChange: this.handleChange,
            placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
            error: !i && a ? T.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_INVALID : null,
            className: I.codeRedemptionInput
          }),
          (0, n.jsx)(r.Button, {
            type: 'submit',
            submitting: s,
            children: T.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_REDEEM
          })
        ]
      })
    }),
    i ? (0, n.jsx)(r.Text, {
      className: I.errorMessage,
      variant: 'text-sm/normal',
      children: T.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMOTION.format({
        promoLink: () => {
          window.open('https://discord.com/billing/promotions/'.concat(t));
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
    codeInput: t
  } = this.state;
  if ('' === t)
    return;
  let s = (0, E.JT)(t);
  if (null == s) {
    this.setState({
      hasError: !0
    });
    return;
  }
  this.setState({
    submitting: !0
  });
  try {
    let e = await o.Z.resolveGiftCode(s);
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
    }), (0, l.V)({
      processedCode: s
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
t = (0, i.e7)([c.Z], () => c.Z.enabled);
  return (0, n.jsx)(N, {
analyticsContext: e,
obscureInput: t
  });
}