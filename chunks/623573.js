"use strict";
s.r(t), s.d(t, {
  AddPaymentModalOld: function() {
    return V
  },
  default: function() {
    return K
  }
}), s("411104"), s("47120");
var a, n, r = s("735250"),
  l = s("470079"),
  i = s("452079"),
  o = s("803997"),
  d = s.n(o),
  u = s("442837"),
  h = s("481060"),
  p = s("570140"),
  c = s("355467"),
  y = s("873115"),
  f = s("976255"),
  m = s("598"),
  S = s("409813"),
  P = s("3409"),
  C = s("351402"),
  _ = s("975060"),
  g = s("505649"),
  A = s("66579"),
  E = s("285952"),
  T = s("358085"),
  N = s("622999"),
  B = s("462566"),
  M = s("801937"),
  x = s("282164"),
  R = s("738342"),
  b = s("228666"),
  k = s("296214"),
  I = s("981631"),
  O = s("689938"),
  D = s("255235"),
  j = s("605094");

function Y(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {})).PAYMENT_TYPE = "payment_type", n.CARD_INFO = "card_info", n.SOFORT_INFO = "sofort_info", n.ADDRESS = "billing_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.PAYPAL = "paypal", n.PRZELEWY24_INFO = "przelewy24_info";
let v = ["payment_type", "card_info", "billing_address"],
  w = ["payment_type", "sofort_info", "billing_address"],
  L = ["payment_type", "paypal", "billing_address"],
  F = ["payment_type", "payment_request_info"],
  G = ["payment_type", "billing_address"],
  U = ["payment_type", "przelewy24_info", "billing_address"],
  z = ["payment_type", "billing_address"];

function q(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class W extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      error: s
    } = e, {
      errorStep: a
    } = t;
    if (null == s) return null == a ? null : {
      errorStep: null
    };
    let n = q(s);
    return null != n && n !== t.errorStep ? {
      step: n,
      errorStep: n
    } : null
  }
  async componentDidMount() {
    y.createClient();
    let e = await (0, N.getStripe)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    p.default.wait(() => y.teardownClients()), (0, f.clearCardInfo)()
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
      case I.PaymentSourceTypes.PAYMENT_REQUEST:
        return F;
      case I.PaymentSourceTypes.PAYPAL:
        return L;
      case I.PaymentSourceTypes.SOFORT:
        return w;
      case I.PaymentSourceTypes.GIROPAY:
        return G;
      case I.PaymentSourceTypes.PRZELEWY24:
        return U;
      case I.PaymentSourceTypes.PAYSAFE_CARD:
      case I.PaymentSourceTypes.GCASH:
      case I.PaymentSourceTypes.GRABPAY_MY:
      case I.PaymentSourceTypes.MOMO_WALLET:
      case I.PaymentSourceTypes.KAKAOPAY:
      case I.PaymentSourceTypes.GOPAY_WALLET:
        return z;
      default:
        return v
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
    y.reopenPayPalWindow()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != q(e) ? null : (0, r.jsx)(h.FormErrorBlock, {
      className: D.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, r.jsx)(h.ModalFooter, {
      children: (0, r.jsxs)(E.default, {
        justify: E.default.Justify.BETWEEN,
        children: [(0, r.jsx)(h.Button, {
          onClick: this.handleBackClick,
          color: h.Button.Colors.PRIMARY,
          look: h.Button.Looks.LINK,
          size: h.Button.Sizes.MIN,
          children: O.default.Messages.BACK
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
            return O.default.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return O.default.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return O.default.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return O.default.Messages.BILLING_ADDRESS;
          case "paypal":
            return O.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return O.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return O.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, r.jsx)(i.Elements, {
      options: I.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, r.jsx)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.SMALL,
        className: D.modal,
        "aria-label": O.default.Messages.PAYMENT_SOURCES_ADD,
        children: (0, r.jsxs)("form", {
          className: D.form,
          onSubmit: this.preventDefault,
          children: [(0, r.jsxs)(h.ModalHeader, {
            direction: E.default.Direction.VERTICAL,
            align: E.default.Align.STRETCH,
            separator: !1,
            children: [(0, r.jsxs)(E.default, {
              className: D.modalTitle,
              justify: E.default.Justify.BETWEEN,
              align: E.default.Align.CENTER,
              children: [(0, r.jsx)(h.FormTitle, {
                tag: h.FormTitleTags.H4,
                children: O.default.Messages.PAYMENT_SOURCES_ADD
              }), (0, r.jsx)(h.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, r.jsx)(A.default, {
              breadcrumbs: a,
              activeId: e
            })]
          }), (0, r.jsx)("div", {
            className: D.divider
          }), (0, r.jsx)(h.Sequencer, {
            fillParent: !0,
            className: D.sequencer,
            step: e,
            steps: t,
            children: (0, r.jsx)(h.ModalContent, {
              className: D.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), Y(this, "state", {
      type: I.PaymentSourceTypes.CARD,
      step: "payment_type",
      steps: v,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), Y(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, r.jsx)(R.P24DetailForm, {
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
          return (0, r.jsx)(h.Button, {
            type: "submit",
            disabled: "" === t.name || "" === t.email || "" === s,
            onClick: this.handleNextClick,
            children: O.default.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, r.jsx)(R.default, {
            billingAddressInfo: t,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, r.jsx)(h.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: O.default.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, r.jsx)(M.default, {
          allowStripeRequestPayments: !T.isPlatformEmbedded,
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
          return (0, r.jsx)(k.PaymentRequestStepBody, {
            stripePaymentMethod: e,
            submitting: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, r.jsx)(h.Button, {
            submitting: e,
            look: h.Button.Looks.OUTLINED,
            disabled: !0
          })
        }
      },
      card_info: {
        renderBody: () => {
          let {
            error: e
          } = this.props, t = null != e && (null == e.code || "card_info" === q(e));
          return (0, r.jsxs)(r.Fragment, {
            children: [t ? (0, r.jsx)(h.FormErrorBlock, {
              className: D.errorBlock,
              children: O.default.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, r.jsx)(B.default, {
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
          return (0, r.jsx)(i.ElementsConsumer, {
            children: s => {
              let {
                elements: a
              } = s;
              return (0, r.jsx)(h.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(a)
                },
                type: "submit",
                submitting: t,
                children: O.default.Messages.NEXT
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
          return (0, r.jsx)(b.AddressStepBody, {
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
          return (0, r.jsx)(h.Button, {
            type: "submit",
            submitting: e,
            disabled: !t || s,
            onClick: this.handleSave,
            children: O.default.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, r.jsx)(x.default, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s
          } = this.props, a = null != s && null != t;
          return (0, r.jsx)(h.Button, {
            submitting: e,
            color: a ? h.Button.Colors.BRAND : h.Button.Colors.PRIMARY,
            onClick: a ? this.handleNextClick : this.handleReopenPaypal,
            children: a ? O.default.Messages.NEXT : O.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), Y(this, "handleChooseType", e => {
      let t = this.getSteps(e),
        s = this.getNextStep(t);
      null != s && this.setState({
        type: e,
        steps: t,
        step: s
      })
    }), Y(this, "handleCardInfoChange", (e, t) => {
      p.default.wait(() => (0, f.updateCardInfo)(e, t))
    }), Y(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: t
      } = this.props;
      t.name = e.name, p.default.wait(() => (0, f.updateAddressInfo)({
        ...t,
        ...e
      }, !1))
    }), Y(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), Y(this, "handleBillingAddressChange", (e, t) => {
      let {
        billingAddressInfo: s
      } = this.props;
      p.default.wait(() => (0, f.updateAddressInfo)({
        ...s,
        ...e
      }, t))
    }), Y(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, f.clearError)();
        this.setState({
          step: e
        })
      }
    }), Y(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), Y(this, "handleClose", () => {
      (0, f.clearError)(), this.props.onClose()
    }), Y(this, "handleStripePaymentMethod", e => {
      if ((0, f.updateStripePaymentRequest)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), Y(this, "handleStripePaymentRequestSave", async e => {
      try {
        let t = await c.createPaymentRequestPaymentSource(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: s
          } = this.props;
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), Y(this, "createToken", async e => {
      let {
        stripe: t
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let s = await c.createCardToken(t, e);
        this.setState({
          stripeToken: s
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), Y(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case I.PaymentSourceTypes.PAYPAL:
          return this.handlePaypalSave();
        case I.PaymentSourceTypes.CARD:
          return this.handleCardSave();
        case I.PaymentSourceTypes.SOFORT:
          return this.handleSofortSave();
        case I.PaymentSourceTypes.GIROPAY:
          return this.handleGiropaySave();
        case I.PaymentSourceTypes.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case I.PaymentSourceTypes.PAYSAFE_CARD:
        case I.PaymentSourceTypes.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          c.dispatchConfirmationError("user used a unsupported payment type: ".concat(e))
      }
    }), Y(this, "handlePrzelewy24Save", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n,
        paymentDetails: r
      } = this.state;
      if (t) try {
        let t = await c.confirmPrzelewy24(n, r, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), Y(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await c.confirmSofort(n, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), Y(this, "handleCardSave", async () => {
      let {
        billingAddressInfo: e,
        isCreditCardInfoValid: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props, {
        stripe: r,
        stripeToken: l
      } = this.state;
      if (t && s) try {
        let t = await c.confirmCardPaymentSource(r, l, e, n);
        null == a || a(t), this.handleClose()
      } catch (e) {}
    }), Y(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (null != e && null != t) try {
        let e = await c.createBraintreePaymentSource(t, s, n);
        null == a || a(e), this.handleClose()
      } catch (e) {}
    }), Y(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (s) try {
        let s = await c.createAdyenPrepaidPaymentSource(t, e, n);
        null == a || a(s), this.handleClose()
      } catch (e) {}
    }), Y(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await c.createStripePaymentSource(n, e, I.PaymentSourceTypes.GIROPAY, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let V = u.default.connectStores([_.default, C.default, g.default], () => ({
  braintreeEmail: _.default.braintreeEmail,
  braintreeNonce: _.default.braintreeNonce,
  stripePaymentMethod: _.default.stripePaymentMethod,
  creditCardInfo: _.default.getCreditCardInfo(),
  isCreditCardInfoValid: _.default.isCardInfoValid,
  billingAddressInfo: _.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: _.default.isBillingAddressInfoValid,
  error: _.default.error,
  popupCallbackCalled: _.default.popupCallbackCalled,
  submitting: C.default.isBusy,
  isAuthenticating: g.default.isAwaitingAuthentication
}))(W);

function H(e) {
  let {
    transitionState: t,
    analyticsLocation: s,
    onClose: a,
    onAddPaymentSource: n
  } = e, l = (0, P.useSharedPaymentModal)(), i = (0, P.AddPaymentFlow)({
    paymentModalArgs: l,
    initialStep: S.Step.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      a()
    },
    onComplete: (e, t) => {
      null == n || n(t), a()
    },
    onStepChange: () => {},
    header: (0, r.jsxs)("div", {
      className: d()(D.modalTitle, j.flex, j.justifyBetween, j.alignCenter),
      children: [(0, r.jsx)(h.FormTitle, {
        tag: h.FormTitleTags.H4,
        children: O.default.Messages.PAYMENT_SOURCES_ADD
      }), (0, r.jsx)(h.ModalCloseButton, {
        onClick: a
      })]
    }),
    analyticsLocation: s,
    hideBreadcrumbs: !0
  });
  return (0, r.jsx)(h.ModalRoot, {
    transitionState: t,
    size: h.ModalSize.SMALL,
    className: D.modal,
    "aria-label": O.default.Messages.PAYMENT_SOURCES_ADD,
    children: (0, r.jsx)("form", {
      className: D.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: i
    })
  })
}

function K(e) {
  return (0, r.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(H, {
      ...e
    })
  })
}