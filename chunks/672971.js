t(411104), t(47120);
var s = t(735250),
  r = t(470079),
  l = t(120356),
  i = t.n(l),
  a = t(512722),
  c = t.n(a),
  o = t(442837),
  u = t(481060),
  I = t(850840),
  _ = t(63063),
  E = t(74538),
  T = t(981631),
  d = t(474936),
  N = t(689938),
  M = t(726994);

function A(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
class L extends r.Component {
  componentDidMount() {
this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
  }
  componentDidUpdate(e, n) {
let t = this.hasAcceptedNeccessaryTerms(e, n),
  s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
s !== t && this.props.onChange(s);
  }
  hasAcceptedNeccessaryTerms(e, n) {
return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
  }
  formatInterval(e) {
if (e === d.rV.YEAR)
  return N.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
if (e === d.rV.MONTH)
  return N.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
throw Error('Invalid interval type: '.concat(e));
  }
  render() {
let {
  eulaId: e,
  applicationName: n,
  hasPreviouslyAcceptedEULA: r,
  forceShow: l,
  disabled: a,
  className: o,
  checkboxClassname: I,
  checkboxLabelClassname: d,
  finePrint: A,
  showPricingLink: L,
  showWithdrawalWaiver: P,
  isTrial: R,
  inReverseTrial: S,
  isDiscount: m,
  subscriptionPlan: U,
  finePrintClassname: p
} = this.props, {
  hasAcceptedEULA: v,
  hasAcceptedWithdrawalWaiver: C
} = this.state;
return (c()(!R || null != U, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), l || null != e && !r || P) ? (0, s.jsxs)('div', {
  className: o,
  children: [
    P && (0, s.jsx)(u.FormTitle, {
      className: M.formTitle,
      children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER
    }),
    null != e && (l || !r) ? (0, s.jsx)(u.Checkbox, {
      type: u.Checkbox.Types.INVERTED,
      value: v,
      onChange: this.handleToggleEULAAcceptance,
      disabled: a,
      className: M.checkbox,
      children: (0, s.jsx)('div', {
        className: M.checkboxLabel,
        children: N.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
          applicationName: n,
          onClick: n => {
            (0, u.openModalLazy)(async () => {
              let {
                default: n
              } = await t.e('51868').then(t.bind(t, 796504));
              return t => (0, s.jsx)(n, {
                eulaId: e,
                ...t
              });
            }), n.preventDefault();
          }
        })
      })
    }) : null,
    null == A ? null : (0, s.jsx)('div', {
      className: i()(M.finePrint, p),
      children: A
    }),
    P ? (0, s.jsxs)('div', {
      className: o,
      children: [
        (0, s.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          value: C,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: a,
          className: i()(M.checkbox, I),
          children: (0, s.jsx)('div', {
            className: i()(M.checkboxLabel, d),
            children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }),
        (0, s.jsx)('div', {
          className: M.finePrint,
          children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })
      ]
    }) : null,
    L && (0, s.jsxs)('div', {
      className: M.finePrint,
      children: [
        '*',
        N.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: _.Z.getArticleURL(T.BhN.LOCALIZED_PRICING)
        })
      ]
    }),
    R && null != U && (0, s.jsx)(u.Text, {
      variant: 'text-xs/medium',
      color: 'interactive-normal',
      children: N.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
        buttonText: (0, E.W_)(null, U),
        interval: this.formatInterval(null == U ? void 0 : U.interval),
        cancelSubscriptionArticle: _.Z.getArticleURL(T.BhN.PREMIUM_DETAILS_CANCEL_SUB),
        paidServiceTermsArticle: _.Z.getArticleURL(T.BhN.PAID_TERMS)
      })
    }),
    S && null != U && (0, s.jsx)(u.Text, {
      variant: 'text-xs/medium',
      color: 'interactive-normal',
      children: N.Z.Messages.BILLING_REVERSE_TRIAL_LEGAL_COPY.format({
        buttonText: (0, E.W_)(null, U),
        interval: this.formatInterval(null == U ? void 0 : U.interval),
        cancelSubscriptionArticle: _.Z.getArticleURL(T.BhN.PREMIUM_DETAILS_CANCEL_SUB),
        paidServiceTermsArticle: _.Z.getArticleURL(T.BhN.PAID_TERMS)
      })
    }),
    m && null != U && (0, s.jsx)(u.Text, {
      variant: 'text-xs/medium',
      color: 'interactive-normal',
      children: N.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
        buttonText: (0, E.W_)(null, U),
        interval: this.formatInterval(null == U ? void 0 : U.interval),
        cancelSubscriptionArticle: _.Z.getArticleURL(T.BhN.PREMIUM_DETAILS_CANCEL_SUB),
        paidServiceTermsArticle: _.Z.getArticleURL(T.BhN.PAID_TERMS)
      })
    })
  ]
}) : null;
  }
  constructor(...e) {
super(...e), A(this, 'state', {
  hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
  hasAcceptedWithdrawalWaiver: !1
}), A(this, 'handleToggleEUWithdralWaiverAcceptance', (e, n) => {
  this.setState({
    hasAcceptedWithdrawalWaiver: n
  });
}), A(this, 'handleToggleEULAAcceptance', (e, n) => {
  this.setState({
    hasAcceptedEULA: n
  });
});
  }
}
n.Z = o.ZP.connectStores([I.Z], e => {
  let {
eulaId: n
  } = e;
  return {
hasPreviouslyAcceptedEULA: null != n && I.Z.hasAcceptedEULA(n)
  };
})(L);