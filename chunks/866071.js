"use strict";
s.r(t), s.d(t, {
  ADD_CARD_STEPS: function() {
    return G
  },
  ADD_GIROPAY_STEPS: function() {
    return w
  },
  ADD_PAYMENT_REQUEST_STEPS: function() {
    return Y
  },
  ADD_PAYMENT_STEPS: function() {
    return U
  },
  ADD_PAYPAL_STEPS: function() {
    return k
  },
  ADD_PAYSAFECARD_STEPS: function() {
    return H
  },
  ADD_VENMO_STEPS: function() {
    return V
  },
  REVIEW_PAYMENT_STEPS: function() {
    return j
  }
}), s("47120");
var n, r = s("735250"),
  a = s("470079"),
  l = s("452079"),
  i = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("873115"),
  p = s("976255"),
  h = s("246946"),
  S = s("351402"),
  f = s("618541"),
  E = s("975060"),
  P = s("853872"),
  A = s("285952"),
  _ = s("603421"),
  m = s("358085"),
  T = s("624138"),
  I = s("622999"),
  C = s("801937"),
  R = s("282164"),
  N = s("915271"),
  g = s("228666"),
  y = s("122192"),
  O = s("296214"),
  M = s("640789"),
  L = s("31820"),
  x = s("693313"),
  B = s("981631"),
  D = s("689938"),
  b = s("551249"),
  F = s("639378");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let j = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.REVIEW],
  U = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.REVIEW],
  G = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.ADDRESS, _.Steps.REVIEW],
  k = [_.Steps.PAYMENT_TYPE, _.Steps.PAYPAL, _.Steps.PAYPAL_ADDRESS, _.Steps.REVIEW],
  Y = [_.Steps.PAYMENT_TYPE, _.Steps.PAYMENT_REQUEST_INFO, _.Steps.REVIEW],
  w = [_.Steps.PAYMENT_TYPE, _.Steps.ADDRESS, _.Steps.REVIEW],
  H = [_.Steps.PAYMENT_TYPE, _.Steps.ADDRESS, _.Steps.REVIEW],
  V = [_.Steps.PAYMENT_TYPE, _.Steps.VENMO, _.Steps.VENMO_ADDRESS, _.Steps.REVIEW],
  W = (0, T.cssValueToNumber)(F.__invalid_innerPadding);
class z extends(n = a.PureComponent) {
  async componentDidMount() {
    c.createClient();
    let {
      onPaymentSourceChange: e,
      paymentSources: t,
      defaultPaymentSourceId: s,
      paymentSourceId: n
    } = this.props;
    null != e && e(null != n && n !== s && null != t[n] ? t[n] : null != s && null != t[s] ? t[s] : null);
    let r = await (0, I.getStripe)();
    this.setState({
      stripe: r
    })
  }
  componentDidUpdate(e) {
    let {
      onPaymentSourceChange: t,
      paymentSources: s,
      paymentSourceId: n
    } = this.props;
    e.paymentSourceId !== n && null != n && null != s[n] && (null == t || t(s[n]))
  }
  componentWillUnmount() {
    c.teardownClients(), p.clearCardInfo();
    let {
      onClearError: e
    } = this.props;
    null == e || e(), p.clearError()
  }
  preventDefault(e) {
    e.preventDefault()
  }
  get disabledTooltip() {
    let {
      needsToBeGift: e,
      isGift: t,
      isGiftable: s
    } = this.props;
    if (!this.state.hasAcceptedNeccessaryTerms) return D.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
    if (e && !t) return s ? D.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : D.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
    return null
  }
  renderHeader() {
    let {
      renderHeader: e,
      billingError: t,
      step: s,
      steps: n
    } = this.props;
    return e(s, n.map(e => ({
      id: e,
      label: (0, _.getCrumbLabels)(e)
    })), null == (0, _.errorToStep)(t) ? t : null)
  }
  render() {
    let {
      size: e,
      step: t,
      steps: s,
      className: n,
      transitionState: a
    } = this.props, i = this.stepRenderer[t], d = i.renderBody();
    return (0, r.jsx)(l.Elements, {
      options: B.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, r.jsx)(o.ModalRoot, {
        size: e,
        className: n,
        "aria-label": D.default.Messages.SKU_PAYMENT_STEPS_LABEL,
        transitionState: a,
        children: (0, r.jsx)(o.Scroller, {
          children: (0, r.jsxs)("form", {
            className: b.form,
            onSubmit: this.preventDefault,
            children: [this.renderHeader(), t !== _.Steps.CONFIRM ? (0, r.jsx)("div", {
              className: b.divider
            }) : null, null != d && (0, r.jsx)(o.ModalContent, {
              className: b.modalContent,
              children: (0, r.jsx)("div", {
                className: b.content,
                children: (0, r.jsx)(o.Sequencer, {
                  step: t,
                  steps: s,
                  sideMargin: W,
                  children: d
                })
              })
            }), i.renderFooter()]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      hasAcceptedNeccessaryTerms: !1,
      token: null,
      confirmingCard: !1,
      stripe: null
    }), v(this, "handleToggleIsGift", (e, t) => {
      let {
        onIsGiftUpdate: s
      } = this.props;
      null == s || s(t)
    }), v(this, "handlePurchaseTermsChange", e => {
      this.setState({
        hasAcceptedNeccessaryTerms: e
      })
    }), v(this, "handleReopenPaypal", () => {
      c.reopenPayPalWindow()
    }), v(this, "handleReopenVenmo", () => {
      c.reopenVenmoWindow()
    }), v(this, "handleCardInfoChange", (e, t) => {
      d.default.wait(() => p.updateCardInfo(e, t))
    }), v(this, "handleBillingAddressChange", (e, t) => {
      d.default.wait(() => p.updateAddressInfo(e, t))
    }), v(this, "handleCreditCardAdd", async () => {
      let {
        billingAddressInfo: e
      } = this.props, {
        stripe: t,
        token: s
      } = this.state;
      try {
        let n = await u.confirmCardPaymentSource(t, s, e);
        this.props.onPaymentSourceAdd(n.id)
      } catch (e) {}
    }), v(this, "handleStripePaymentRequestAdd", async e => {
      if (p.updateStripePaymentRequest(e), null == e) {
        this.props.onBack();
        return
      }
      try {
        let t = await u.createPaymentRequestPaymentSource(e);
        this.props.onPaymentSourceAdd(t.id)
      } catch (e) {}
    }), v(this, "handlePaypalAdd", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s
      } = this.props;
      if (0 !== e.length && null != t) try {
        let e = await u.createBraintreePaymentSource(t, s);
        this.props.onPaymentSourceAdd(e.id)
      } catch (e) {}
    }), v(this, "handleVenmoAdd", async () => {
      let {
        venmoUsername: e,
        braintreeNonce: t,
        billingAddressInfo: s
      } = this.props;
      if (0 !== e.length && null != t) try {
        let e = await u.createBraintreePaymentSource(t, s);
        this.props.onPaymentSourceAdd(e.id)
      } catch (e) {}
    }), v(this, "renderBackButton", () => {
      let {
        step: e,
        steps: t,
        paymentSources: s,
        onBack: n
      } = this.props, a = (0, _.getStepIndex)(e, t), l = (0, _.canGoBack)(a, s) ? D.default.Messages.BACK : D.default.Messages.CANCEL;
      return (0, r.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        className: b.backButton,
        color: b.backButtonColor,
        size: b.backButtonSize,
        onClick: n,
        children: l
      })
    }), v(this, "stepRenderer", {
      [_.Steps.PAYMENT_TYPE]: {
        renderBody: () => {
          let {
            hidePersonalInformation: e,
            onChoosePaymentType: t,
            isGiftable: s,
            needsToBeGift: n,
            isGift: l
          } = this.props;
          return e ? (0, r.jsx)(o.FormErrorBlock, {
            className: b.errorBlock,
            children: D.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
          }) : (0, r.jsxs)(a.Fragment, {
            children: [(0, r.jsx)(C.default, {
              className: b.choosePaymentSourceType,
              onChooseType: t,
              allowStripeRequestPayments: !m.isPlatformEmbedded,
              onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
            }), s && (0, r.jsx)(o.Checkbox, {
              disabled: n,
              className: b.giftToggle,
              type: o.Checkbox.Types.INVERTED,
              value: l,
              onChange: this.handleToggleIsGift,
              children: (0, r.jsx)("div", {
                className: b.checkboxLabel,
                children: D.default.Messages.BILLING_IS_GIFT_PURCHASE
              })
            })]
          })
        },
        renderFooter: () => (0, r.jsx)(o.ModalFooter, {
          direction: A.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [_.Steps.PAYMENT_REQUEST_INFO]: {
        renderBody: () => (0, r.jsx)(O.PaymentRequestStepBody, {
          className: b.__invalid_formItem,
          stripePaymentMethod: this.props.stripePaymentMethod,
          submitting: this.props.submitting
        }),
        renderFooter: () => (0, r.jsx)(o.ModalFooter, {
          direction: A.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [_.Steps.PAYPAL]: {
        renderBody: () => (0, r.jsx)(R.default, {
          className: b.__invalid_formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            paypalClient: a
          } = this.props;
          return (0, r.jsx)(M.PaypalStepFooter, {
            submitting: e || null == a,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            onReopenPaypal: this.handleReopenPaypal,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [_.Steps.VENMO]: {
        renderBody: () => (0, r.jsx)(N.default, {
          className: b.__invalid_formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
            venmoClient: a
          } = this.props;
          return (0, r.jsx)(x.VenmoStepFooter, {
            submitting: e || null == a,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
            onReopenVenmo: this.handleReopenVenmo,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [_.Steps.CREDIT_CARD_INFORMATION]: {
        renderBody: () => {
          let {
            billingError: e
          } = this.props;
          return (0, r.jsx)(y.CreditCardInformationBody, {
            billingError: e,
            onCardInfoChange: this.handleCardInfoChange
          })
        },
        renderFooter: () => {
          let {
            isCardInfoValid: e,
            onCreditCardContinue: t
          } = this.props, {
            stripe: s,
            confirmingCard: n
          } = this.state, a = async e => {
            this.setState({
              confirmingCard: !0
            });
            try {
              let n = await u.createCardToken(s, e);
              this.setState({
                token: n
              }), p.clearError(), t()
            } catch (e) {} finally {
              this.setState({
                confirmingCard: !1
              })
            }
          };
          return (0, r.jsx)(l.ElementsConsumer, {
            children: t => {
              let {
                elements: s
              } = t;
              return (0, r.jsx)(y.CreditCardInformationFooter, {
                isCardInfoValid: e,
                submitting: n,
                renderBackButton: this.renderBackButton,
                onCreditCardContinue: () => a(s)
              })
            }
          })
        }
      },
      [_.Steps.PAYPAL_ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t
          } = this.props;
          return (0, r.jsx)(g.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: B.PaymentSourceTypes.PAYPAL
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, r.jsx)(g.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handlePaypalAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [_.Steps.VENMO_ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t
          } = this.props;
          return (0, r.jsx)(g.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: B.PaymentSourceTypes.VENMO
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, r.jsx)(g.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handleVenmoAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [_.Steps.ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t,
            steps: s
          } = this.props;
          return (0, r.jsx)(g.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: s === w ? B.PaymentSourceTypes.GIROPAY : B.PaymentSourceTypes.CARD
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, r.jsx)(g.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handleCreditCardAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [_.Steps.REVIEW]: {
        renderBody: () => {
          let {
            legalNotice: e,
            paymentSources: t,
            price: s,
            hidePersonalInformation: n,
            paymentSourceId: a,
            onReviewPaymentSourceChange: l,
            onReviewPaymentSourceAdd: i,
            isGiftable: o,
            isGift: d,
            needsToBeGift: u
          } = this.props;
          return (0, r.jsx)(L.ReviewStepBody, {
            legalNotice: e,
            paymentSources: t,
            price: s,
            hidePersonalInformation: n,
            paymentSourceId: a,
            onPaymentSourceChange: l,
            onPaymentSourceAdd: i,
            onPurchaseTermsChange: this.handlePurchaseTermsChange,
            onToggleIsGift: this.handleToggleIsGift,
            isGiftable: o,
            isGift: d,
            needsToBeGift: u
          })
        },
        renderFooter: () => {
          let {
            canSubmit: e,
            submitButtonText: t,
            useShinySubmitButton: s,
            isPurchasing: n,
            paymentSourceId: a,
            onPurchase: l,
            needsToBeGift: i,
            isGift: o,
            paymentSources: d
          } = this.props;
          return (0, r.jsx)(L.ReviewStepFooter, {
            canSubmit: e,
            submitButtonText: t,
            useShinySubmitButton: s,
            isPurchasing: n,
            hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
            paymentSource: null != a ? d[a] : null,
            onPurchase: l,
            tooltipText: this.disabledTooltip,
            needsToBeGift: i,
            isGift: o
          })
        }
      },
      [_.Steps.CONFIRM]: {
        renderBody: B.NOOP_NULL,
        renderFooter: B.NOOP_NULL
      },
      [_.Steps.AWAITING_AUTHENTICATION]: {
        renderBody: () => (0, r.jsx)(o.FormTitle, {
          className: b.formTitle,
          children: D.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
        }),
        renderFooter: B.NOOP_NULL
      },
      ...this.props.extraRenderers
    })
  }
}
v(z, "defaultProps", {
  canSubmit: !0,
  useShinySubmitButton: !1,
  size: o.ModalSize.SMALL,
  billingError: null,
  extraRenderers: {},
  className: b.modal
}), t.default = i.default.connectStores([P.default, E.default, S.default, h.default, f.default], () => ({
  submitting: S.default.isBusy,
  paymentSources: P.default.paymentSources,
  defaultPaymentSourceId: P.default.defaultPaymentSourceId,
  stripePaymentMethod: E.default.stripePaymentMethod,
  creditCardInfo: E.default.getCreditCardInfo(),
  isCardInfoValid: E.default.isCardInfoValid,
  billingAddressInfo: E.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: E.default.isBillingAddressInfoValid,
  braintreeEmail: E.default.braintreeEmail,
  braintreeNonce: E.default.braintreeNonce,
  venmoUsername: E.default.venmoUsername,
  billingError: E.default.error,
  paypalClient: f.default.getPayPalClient(),
  venmoClient: f.default.getVenmoClient(),
  hidePersonalInformation: h.default.hidePersonalInformation
}))(z)