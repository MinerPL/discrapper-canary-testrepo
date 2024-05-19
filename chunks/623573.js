"use strict";
s.r(t), s.d(t, {
  AddPaymentModalOld: function() {
    return K
  },
  default: function() {
    return q
  }
}), s("411104"), s("47120");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("160612"),
  u = s("120356"),
  o = s.n(u),
  d = s("442837"),
  c = s("481060"),
  p = s("570140"),
  m = s("355467"),
  f = s("873115"),
  E = s("976255"),
  _ = s("598"),
  I = s("409813"),
  S = s("3409"),
  N = s("351402"),
  P = s("975060"),
  C = s("505649"),
  h = s("66579"),
  T = s("285952"),
  A = s("358085"),
  R = s("622999"),
  y = s("462566"),
  M = s("801937"),
  L = s("282164"),
  g = s("738342"),
  x = s("228666"),
  D = s("296214"),
  b = s("981631"),
  U = s("689938"),
  v = s("388278"),
  B = s("961047");

function O(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {})).PAYMENT_TYPE = "payment_type", n.CARD_INFO = "card_info", n.SOFORT_INFO = "sofort_info", n.ADDRESS = "billing_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.PAYPAL = "paypal", n.PRZELEWY24_INFO = "przelewy24_info";
let j = ["payment_type", "card_info", "billing_address"],
  G = ["payment_type", "sofort_info", "billing_address"],
  k = ["payment_type", "paypal", "billing_address"],
  w = ["payment_type", "payment_request_info"],
  F = ["payment_type", "billing_address"],
  Y = ["payment_type", "przelewy24_info", "billing_address"],
  H = ["payment_type", "billing_address"];

function W(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class V extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      error: s
    } = e, {
      errorStep: a
    } = t;
    if (null == s) return null == a ? null : {
      errorStep: null
    };
    let n = W(s);
    return null != n && n !== t.errorStep ? {
      step: n,
      errorStep: n
    } : null
  }
  async componentDidMount() {
    f.createClient();
    let e = await (0, R.getStripe)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    p.default.wait(() => f.teardownClients()), (0, E.clearCardInfo)()
  }
  get stepData() {
    let {
      step: e
    } = this.state, t = this.STEPS_DATA[e];
    if (null == t) throw Error("Invalid step ".concat(e));
    return t
  }
  getSteps(e) {
    switch (null != e ? e : this.state.type) {
      case b.PaymentSourceTypes.PAYMENT_REQUEST:
        return w;
      case b.PaymentSourceTypes.PAYPAL:
        return k;
      case b.PaymentSourceTypes.SOFORT:
        return G;
      case b.PaymentSourceTypes.GIROPAY:
        return F;
      case b.PaymentSourceTypes.PRZELEWY24:
        return Y;
      case b.PaymentSourceTypes.PAYSAFE_CARD:
      case b.PaymentSourceTypes.GCASH:
      case b.PaymentSourceTypes.GRABPAY_MY:
      case b.PaymentSourceTypes.MOMO_WALLET:
      case b.PaymentSourceTypes.KAKAOPAY:
      case b.PaymentSourceTypes.GOPAY_WALLET:
        return H;
      default:
        return j
    }
  }
  getNextStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: t
      } = this.state,
      s = e.indexOf(t);
    return e[s + 1]
  }
  getPreviousStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: t
      } = this.state,
      s = e.indexOf(t);
    return e[s - 1]
  }
  preventDefault(e) {
    e.preventDefault()
  }
  handleReopenPaypal() {
    f.reopenPayPalWindow()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != W(e) ? null : (0, i.jsx)(c.FormErrorBlock, {
      className: v.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, i.jsx)(c.ModalFooter, {
      children: (0, i.jsxs)(T.default, {
        justify: T.default.Justify.BETWEEN,
        children: [(0, i.jsx)(c.Button, {
          onClick: this.handleBackClick,
          color: c.Button.Colors.PRIMARY,
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          children: U.default.Messages.BACK
        }), e.renderNextButton()]
      })
    })
  }
  render() {
    let {
      step: e,
      steps: t
    } = this.state, {
      transitionState: s
    } = this.props, a = t.map(e => ({
      id: e,
      label: function(e) {
        switch (e) {
          case "payment_type":
            return U.default.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return U.default.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return U.default.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return U.default.Messages.BILLING_ADDRESS;
          case "paypal":
            return U.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return U.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return U.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(r.Elements, {
      options: b.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, i.jsx)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.SMALL,
        className: v.modal,
        "aria-label": U.default.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: v.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(c.ModalHeader, {
            direction: T.default.Direction.VERTICAL,
            align: T.default.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(T.default, {
              className: v.modalTitle,
              justify: T.default.Justify.BETWEEN,
              align: T.default.Align.CENTER,
              children: [(0, i.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.H4,
                children: U.default.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(c.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(h.default, {
              breadcrumbs: a,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: v.divider
          }), (0, i.jsx)(c.Sequencer, {
            fillParent: !0,
            className: v.sequencer,
            step: e,
            steps: t,
            children: (0, i.jsx)(c.ModalContent, {
              className: v.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      type: b.PaymentSourceTypes.CARD,
      step: "payment_type",
      steps: j,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), O(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(g.P24DetailForm, {
            billingAddressInfo: t,
            onDetailsChange: this.handlePaymentDetailsChange,
            onP24BankChange: this.handleP24BankChange,
            p24BankValue: this.state.paymentDetails.p24Bank,
            error: e
          })
        },
        renderNextButton: () => {
          var e;
          let {
            billingAddressInfo: t
          } = this.props, s = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
          return (0, i.jsx)(c.Button, {
            type: "submit",
            disabled: "" === t.name || "" === t.email || "" === s,
            onClick: this.handleNextClick,
            children: U.default.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(g.default, {
            billingAddressInfo: t,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, i.jsx)(c.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: U.default.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(M.default, {
          allowStripeRequestPayments: !A.isPlatformEmbedded,
          onChooseType: this.handleChooseType,
          onStripePaymentMethodReceived: this.handleStripePaymentMethod
        })
      },
      payment_request_info: {
        renderBody: () => {
          let {
            stripePaymentMethod: e,
            submitting: t
          } = this.props;
          return (0, i.jsx)(D.PaymentRequestStepBody, {
            stripePaymentMethod: e,
            submitting: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, i.jsx)(c.Button, {
            submitting: e,
            look: c.Button.Looks.OUTLINED,
            disabled: !0
          })
        }
      },
      card_info: {
        renderBody: () => {
          let {
            error: e
          } = this.props, t = null != e && (null == e.code || "card_info" === W(e));
          return (0, i.jsxs)(i.Fragment, {
            children: [t ? (0, i.jsx)(c.FormErrorBlock, {
              className: v.errorBlock,
              children: U.default.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(y.default, {
              onCardInfoChange: this.handleCardInfoChange,
              error: t ? e : null
            })]
          })
        },
        renderNextButton: () => {
          let {
            isCreditCardInfoValid: e
          } = this.props, {
            tokenSubmitting: t
          } = this.state;
          return (0, i.jsx)(r.ElementsConsumer, {
            children: s => {
              let {
                elements: a
              } = s;
              return (0, i.jsx)(c.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(a)
                },
                type: "submit",
                submitting: t,
                children: U.default.Messages.NEXT
              })
            }
          })
        }
      },
      billing_address: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            error: t
          } = this.props, {
            type: s
          } = this.state;
          return (0, i.jsx)(x.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: s
          })
        },
        renderNextButton: () => {
          let {
            submitting: e,
            isBillingAddressInfoValid: t,
            isAuthenticating: s
          } = this.props;
          return (0, i.jsx)(c.Button, {
            type: "submit",
            submitting: e,
            disabled: !t || s,
            onClick: this.handleSave,
            children: U.default.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(L.default, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s
          } = this.props, a = null != s && null != t;
          return (0, i.jsx)(c.Button, {
            submitting: e,
            color: a ? c.Button.Colors.BRAND : c.Button.Colors.PRIMARY,
            onClick: a ? this.handleNextClick : this.handleReopenPaypal,
            children: a ? U.default.Messages.NEXT : U.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), O(this, "handleChooseType", e => {
      let t = this.getSteps(e),
        s = this.getNextStep(t);
      null != s && this.setState({
        type: e,
        steps: t,
        step: s
      })
    }), O(this, "handleCardInfoChange", (e, t) => {
      p.default.wait(() => (0, E.updateCardInfo)(e, t))
    }), O(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: t
      } = this.props;
      t.name = e.name, p.default.wait(() => (0, E.updateAddressInfo)({
        ...t,
        ...e
      }, !1))
    }), O(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), O(this, "handleBillingAddressChange", (e, t) => {
      let {
        billingAddressInfo: s
      } = this.props;
      p.default.wait(() => (0, E.updateAddressInfo)({
        ...s,
        ...e
      }, t))
    }), O(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, E.clearError)();
        this.setState({
          step: e
        })
      }
    }), O(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), O(this, "handleClose", () => {
      (0, E.clearError)(), this.props.onClose()
    }), O(this, "handleStripePaymentMethod", e => {
      if ((0, E.updateStripePaymentRequest)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), O(this, "handleStripePaymentRequestSave", async e => {
      try {
        let t = await m.createPaymentRequestPaymentSource(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: s
          } = this.props;
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), O(this, "createToken", async e => {
      let {
        stripe: t
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let s = await m.createCardToken(t, e);
        this.setState({
          stripeToken: s
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), O(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case b.PaymentSourceTypes.PAYPAL:
          return this.handlePaypalSave();
        case b.PaymentSourceTypes.CARD:
          return this.handleCardSave();
        case b.PaymentSourceTypes.SOFORT:
          return this.handleSofortSave();
        case b.PaymentSourceTypes.GIROPAY:
          return this.handleGiropaySave();
        case b.PaymentSourceTypes.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case b.PaymentSourceTypes.PAYSAFE_CARD:
        case b.PaymentSourceTypes.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          m.dispatchConfirmationError("user used a unsupported payment type: ".concat(e))
      }
    }), O(this, "handlePrzelewy24Save", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n,
        paymentDetails: i
      } = this.state;
      if (t) try {
        let t = await m.confirmPrzelewy24(n, i, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), O(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await m.confirmSofort(n, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), O(this, "handleCardSave", async () => {
      let {
        billingAddressInfo: e,
        isCreditCardInfoValid: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props, {
        stripe: i,
        stripeToken: l
      } = this.state;
      if (t && s) try {
        let t = await m.confirmCardPaymentSource(i, l, e, n);
        null == a || a(t), this.handleClose()
      } catch (e) {}
    }), O(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (null != e && null != t) try {
        let e = await m.createBraintreePaymentSource(t, s, n);
        null == a || a(e), this.handleClose()
      } catch (e) {}
    }), O(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (s) try {
        let s = await m.createAdyenPrepaidPaymentSource(t, e, n);
        null == a || a(s), this.handleClose()
      } catch (e) {}
    }), O(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await m.createStripePaymentSource(n, e, b.PaymentSourceTypes.GIROPAY, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let K = d.default.connectStores([P.default, N.default, C.default], () => ({
  braintreeEmail: P.default.braintreeEmail,
  braintreeNonce: P.default.braintreeNonce,
  stripePaymentMethod: P.default.stripePaymentMethod,
  creditCardInfo: P.default.getCreditCardInfo(),
  isCreditCardInfoValid: P.default.isCardInfoValid,
  billingAddressInfo: P.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: P.default.isBillingAddressInfoValid,
  error: P.default.error,
  popupCallbackCalled: P.default.popupCallbackCalled,
  submitting: N.default.isBusy,
  isAuthenticating: C.default.isAwaitingAuthentication
}))(V);

function z(e) {
  let {
    transitionState: t,
    analyticsLocation: s,
    onClose: a,
    onAddPaymentSource: n
  } = e, l = (0, S.useSharedPaymentModal)(), r = (0, S.AddPaymentFlow)({
    paymentModalArgs: l,
    initialStep: I.Step.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      a()
    },
    onComplete: (e, t) => {
      null == n || n(t), a()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: o()(v.modalTitle, B.flex, B.justifyBetween, B.alignCenter),
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: U.default.Messages.PAYMENT_SOURCES_ADD
      }), (0, i.jsx)(c.ModalCloseButton, {
        onClick: a
      })]
    }),
    analyticsLocation: s,
    hideBreadcrumbs: !0
  });
  return (0, i.jsx)(c.ModalRoot, {
    transitionState: t,
    size: c.ModalSize.SMALL,
    className: v.modal,
    "aria-label": U.default.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: v.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: r
    })
  })
}

function q(e) {
  return (0, i.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(z, {
      ...e
    })
  })
}