s(411104), s(47120);
var t = s(735250),
  r = s(470079),
  l = s(120356),
  a = s.n(l),
  i = s(512722),
  c = s.n(i),
  o = s(442837),
  u = s(481060),
  I = s(850840),
  _ = s(63063),
  E = s(74538),
  T = s(981631),
  d = s(474936),
  N = s(689938),
  M = s(178218);

function A(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = s, e;
}
class P extends r.Component {
  componentDidMount() {
this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
  }
  componentDidUpdate(e, n) {
let s = this.hasAcceptedNeccessaryTerms(e, n),
  t = this.hasAcceptedNeccessaryTerms(this.props, this.state);
t !== s && this.props.onChange(t);
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
  disabled: i,
  className: o,
  checkboxClassname: I,
  checkboxLabelClassname: d,
  finePrint: A,
  showPricingLink: P,
  showWithdrawalWaiver: L,
  isTrial: R,
  isDiscount: S,
  subscriptionPlan: m,
  finePrintClassname: U
} = this.props, {
  hasAcceptedEULA: p,
  hasAcceptedWithdrawalWaiver: O
} = this.state;
return (c()(!R || null != m, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), l || null != e && !r || L) ? (0, t.jsxs)('div', {
  className: o,
  children: [
    L && (0, t.jsx)(u.FormTitle, {
      className: M.formTitle,
      children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER
    }),
    null != e && (l || !r) ? (0, t.jsx)(u.Checkbox, {
      type: u.Checkbox.Types.INVERTED,
      value: p,
      onChange: this.handleToggleEULAAcceptance,
      disabled: i,
      className: M.checkbox,
      children: (0, t.jsx)('div', {
        className: M.checkboxLabel,
        children: N.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
          applicationName: n,
          onClick: n => {
            (0, u.openModalLazy)(async () => {
              let {
                default: n
              } = await s.e('51868').then(s.bind(s, 796504));
              return s => (0, t.jsx)(n, {
                eulaId: e,
                ...s
              });
            }), n.preventDefault();
          }
        })
      })
    }) : null,
    null == A ? null : (0, t.jsx)('div', {
      className: a()(M.finePrint, U),
      children: A
    }),
    L ? (0, t.jsxs)('div', {
      className: o,
      children: [
        (0, t.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          value: O,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: i,
          className: a()(M.checkbox, I),
          children: (0, t.jsx)('div', {
            className: a()(M.checkboxLabel, d),
            children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }),
        (0, t.jsx)('div', {
          className: M.finePrint,
          children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })
      ]
    }) : null,
    P && (0, t.jsxs)('div', {
      className: M.finePrint,
      children: [
        '*',
        N.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: _.Z.getArticleURL(T.BhN.LOCALIZED_PRICING)
        })
      ]
    }),
    R && null != m && (0, t.jsx)(u.Text, {
      variant: 'text-xs/medium',
      color: 'interactive-normal',
      children: N.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
        buttonText: (0, E.W_)(null, m),
        interval: this.formatInterval(null == m ? void 0 : m.interval),
        cancelSubscriptionArticle: _.Z.getArticleURL(T.BhN.PREMIUM_DETAILS_CANCEL_SUB),
        paidServiceTermsArticle: _.Z.getArticleURL(T.BhN.PAID_TERMS)
      })
    }),
    S && null != m && (0, t.jsx)(u.Text, {
      variant: 'text-xs/medium',
      color: 'interactive-normal',
      children: N.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
        buttonText: (0, E.W_)(null, m),
        interval: this.formatInterval(null == m ? void 0 : m.interval),
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
})(P);