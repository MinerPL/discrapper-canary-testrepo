"use strict";
s.r(t), s("411104"), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("803997"),
  i = s.n(r),
  n = s("512722"),
  u = s.n(n),
  c = s("442837"),
  o = s("481060"),
  d = s("850840"),
  E = s("63063"),
  _ = s("74538"),
  I = s("981631"),
  T = s("474936"),
  L = s("689938"),
  A = s("617439");

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class M extends l.Component {
  componentDidMount() {
    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
  }
  componentDidUpdate(e, t) {
    let s = this.hasAcceptedNeccessaryTerms(e, t),
      a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
    a !== s && this.props.onChange(a)
  }
  hasAcceptedNeccessaryTerms(e, t) {
    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
  }
  formatInterval(e) {
    if (e === T.SubscriptionIntervalTypes.YEAR) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    if (e === T.SubscriptionIntervalTypes.MONTH) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    throw Error("Invalid interval type: ".concat(e))
  }
  render() {
    let {
      eulaId: e,
      applicationName: t,
      hasPreviouslyAcceptedEULA: l,
      forceShow: r,
      disabled: n,
      className: c,
      checkboxClassname: d,
      checkboxLabelClassname: T,
      finePrint: p,
      showPricingLink: M,
      showWithdrawalWaiver: N,
      isTrial: S,
      isDiscount: f,
      subscriptionPlan: R,
      finePrintClassname: h
    } = this.props, {
      hasAcceptedEULA: P,
      hasAcceptedWithdrawalWaiver: C
    } = this.state;
    return (u()(!S || null != R, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), r || null != e && !l || N) ? (0, a.jsxs)("div", {
      className: c,
      children: [N && (0, a.jsx)(o.FormTitle, {
        className: A.formTitle,
        children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
      }), null != e && (r || !l) ? (0, a.jsx)(o.Checkbox, {
        type: o.Checkbox.Types.INVERTED,
        value: P,
        onChange: this.handleToggleEULAAcceptance,
        disabled: n,
        className: A.checkbox,
        children: (0, a.jsx)("div", {
          className: A.checkboxLabel,
          children: L.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
            applicationName: t,
            onClick: t => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([s.e("49237"), s.e("99387"), s.e("51868")]).then(s.bind(s, "796504"));
                return s => (0, a.jsx)(t, {
                  eulaId: e,
                  ...s
                })
              }), t.preventDefault()
            }
          })
        })
      }) : null, null == p ? null : (0, a.jsx)("div", {
        className: i()(A.finePrint, h),
        children: p
      }), N ? (0, a.jsxs)("div", {
        className: c,
        children: [(0, a.jsx)(o.Checkbox, {
          type: o.Checkbox.Types.INVERTED,
          value: C,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: n,
          className: i()(A.checkbox, d),
          children: (0, a.jsx)("div", {
            className: i()(A.checkboxLabel, T),
            children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }), (0, a.jsx)("div", {
          className: A.finePrint,
          children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })]
      }) : null, M && (0, a.jsxs)("div", {
        className: A.finePrint,
        children: ["*", L.default.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: E.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
        })]
      }), S && null != R && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: L.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, R),
          interval: this.formatInterval(null == R ? void 0 : R.interval),
          cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
        })
      }), f && null != R && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: L.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, R),
          interval: this.formatInterval(null == R ? void 0 : R.interval),
          cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: !1
    }), p(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }), p(this, "handleToggleEULAAcceptance", (e, t) => {
      this.setState({
        hasAcceptedEULA: t
      })
    })
  }
}
t.default = c.default.connectStores([d.default], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t)
  }
})(M)