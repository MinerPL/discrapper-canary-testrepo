"use strict";
s.r(t), s("47120");
var n, r = s("735250"),
  a = s("470079"),
  l = s("442837"),
  i = s("355467"),
  o = s("976255"),
  d = s("975060"),
  u = s("505649"),
  c = s("853872"),
  p = s("603421"),
  h = s("866071"),
  S = s("981631");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let E = [p.Steps.REVIEW, p.Steps.CONFIRM];
class P extends(n = a.Component) {
  get stepsToRender() {
    let {
      prependSteps: e
    } = this.props, {
      steps: t
    } = this.state;
    return null != e ? [...e, ...t] : t
  }
  get closable() {
    let {
      step: e
    } = this.state;
    return 0 === (0, p.getStepIndex)(e, this.stepsToRender) || !this._hasChangedSteps
  }
  componentDidMount() {
    !c.default.hasFetchedPaymentSources && i.fetchPaymentSources()
  }
  componentDidUpdate(e, t) {
    let {
      onStepChange: s
    } = this.props, {
      step: n
    } = this.state;
    n !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, n))
  }
  static getDerivedStateFromProps(e, t) {
    let {
      billingError: s,
      isAwaitingAuthentication: n
    } = e, {
      errorStep: r
    } = t, a = {};
    if (null == s) null != r && (a.errorStep = null);
    else {
      let e = (0, p.errorToStep)(s);
      null != e && e !== t.errorStep && (a.step = e, a.errorStep = e)
    }
    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (a.paymentSourceId = e.defaultPaymentSourceId), n ? a.step = p.Steps.AWAITING_AUTHENTICATION : t.step === p.Steps.AWAITING_AUTHENTICATION && (null != s ? a.step = p.Steps.REVIEW : a.step = p.Steps.CONFIRM), a
  }
  render() {
    let {
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: a,
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: d,
      size: u,
      renderConfirmationBody: c,
      renderConfirmationFooter: S,
      className: f,
      isGift: E,
      isGiftable: P,
      needsToBeGift: A,
      onIsGiftUpdate: _,
      transitionState: m
    } = this.props, T = {
      [p.Steps.CONFIRM]: {
        renderBody: c,
        renderFooter: S
      },
      [p.Steps.SELECT_PLAN]: {
        renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
        renderFooter: () => this.props.renderSelectPlanFooter()
      }
    }, {
      step: I,
      paymentSourceId: C
    } = this.state, R = this.stepsToRender;
    return (0, r.jsx)(h.default, {
      transitionState: m,
      className: f,
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: a,
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: d,
      size: u,
      extraRenderers: T,
      step: I,
      steps: R,
      paymentSourceId: C,
      isGiftable: P,
      isGift: E,
      needsToBeGift: A,
      onIsGiftUpdate: _,
      onBack: this.handleBack,
      onChoosePaymentType: this.handleChoosePaymentType,
      onCreditCardContinue: this.handleCreditCardContinue,
      onPaymentSourceAdd: this.handlePaymentSourceAdd,
      onPurchase: this.handlePurchase,
      onPaypalContinue: this.handlePaypalContinue,
      onVenmoContinue: this.handleVenmoContinue,
      onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
      onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
    })
  }
  constructor(e) {
    super(e), f(this, "_hasChangedSteps", !1), f(this, "handlePaypalContinue", () => {
      this.setState({
        step: p.Steps.PAYPAL_ADDRESS
      })
    }), f(this, "handleVenmoContinue", () => {
      this.setState({
        step: p.Steps.VENMO_ADDRESS
      })
    }), f(this, "handleCreditCardContinue", () => {
      this.setState({
        step: p.Steps.ADDRESS
      })
    }), f(this, "handleReviewPaymentSourceChange", e => {
      this.setState({
        paymentSourceId: null != e ? e.id : null
      })
    }), f(this, "handleReviewPaymentSourceAdd", () => {
      this.setState({
        step: p.Steps.PAYMENT_TYPE,
        steps: h.ADD_PAYMENT_STEPS,
        paymentSourceId: null
      });
      let {
        onClearError: e
      } = this.props;
      e && e()
    }), f(this, "handleBack", () => {
      let {
        paymentSources: e,
        onClose: t
      } = this.props, {
        step: s,
        steps: n
      } = this.state, r = this.stepsToRender, a = (0, p.getStepIndex)(s, r);
      if (a > 0) {
        let e = r[a - 1],
          t = e === p.Steps.PAYMENT_TYPE;
        t && o.clearError(), this.setState({
          step: e,
          steps: t ? h.ADD_PAYMENT_STEPS : n
        })
      } else if ((0, p.canGoBack)(a, e)) {
        let {
          defaultPaymentSourceId: e
        } = this.props;
        this.setState({
          step: p.Steps.REVIEW,
          steps: h.REVIEW_PAYMENT_STEPS,
          paymentSourceId: e
        })
      } else t()
    }), f(this, "handleChoosePaymentType", e => {
      switch (e) {
        case S.PaymentSourceTypes.PAYPAL:
          this.setState({
            step: p.Steps.PAYPAL,
            steps: h.ADD_PAYPAL_STEPS
          });
          break;
        case S.PaymentSourceTypes.CARD:
          this.setState({
            step: p.Steps.CREDIT_CARD_INFORMATION,
            steps: h.ADD_CARD_STEPS
          });
          break;
        case S.PaymentSourceTypes.PAYMENT_REQUEST:
          this.setState({
            step: p.Steps.PAYMENT_REQUEST_INFO,
            steps: h.ADD_PAYMENT_REQUEST_STEPS
          });
          break;
        case S.PaymentSourceTypes.GIROPAY:
          this.setState({
            step: p.Steps.ADDRESS,
            steps: h.ADD_GIROPAY_STEPS
          });
          break;
        case S.PaymentSourceTypes.PAYSAFE_CARD:
          this.setState({
            step: p.Steps.ADDRESS,
            steps: h.ADD_PAYSAFECARD_STEPS
          });
          break;
        case S.PaymentSourceTypes.VENMO:
          this.setState({
            step: p.Steps.VENMO,
            steps: h.ADD_VENMO_STEPS
          })
      }
    }), f(this, "handlePaymentSourceAdd", e => {
      this.setState({
        step: p.Steps.REVIEW,
        paymentSourceId: e
      })
    }), f(this, "handlePurchase", async () => {
      let {
        paymentSources: e,
        onPurchase: t,
        isGift: s
      } = this.props, {
        paymentSourceId: n
      } = this.state;
      if (null != n) try {
        await t(e[n], s), this.setState({
          steps: E,
          step: p.Steps.CONFIRM
        })
      } catch (e) {}
    }), f(this, "handleSelectPlan", () => {
      let {
        paymentSources: e
      } = this.props, t = Object.values(e).length > 0;
      this.setState({
        step: t ? p.Steps.REVIEW : p.Steps.PAYMENT_TYPE
      })
    });
    let {
      defaultPaymentSourceId: t,
      paymentSources: s,
      initialStep: n
    } = e, r = Object.values(s).length > 0, a = n;
    null == a && (a = r ? p.Steps.REVIEW : p.Steps.PAYMENT_TYPE), this.state = {
      paymentSourceId: t,
      steps: r ? h.REVIEW_PAYMENT_STEPS : h.ADD_PAYMENT_STEPS,
      step: a,
      errorStep: null
    }
  }
}
f(P, "defaultProps", {
  useShinySubmitButton: !1,
  needsToBeGift: !1,
  isGiftable: !1,
  isGift: !1,
  renderConfirmationBody: S.NOOP_NULL,
  renderConfirmationFooter: S.NOOP_NULL,
  renderSelectPlanBody: S.NOOP_NULL,
  renderSelectPlanFooter: S.NOOP_NULL
}), t.default = a.forwardRef((e, t) => {
  let [s, n] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.paymentSources, c.default.defaultPaymentSourceId]), a = (0, l.useStateFromStores)([d.default], () => d.default.error), [i, o] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
  return (0, r.jsx)(P, {
    ...e,
    ref: t,
    billingError: null != i ? i : a,
    paymentSources: s,
    defaultPaymentSourceId: n,
    isAwaitingAuthentication: o
  })
})