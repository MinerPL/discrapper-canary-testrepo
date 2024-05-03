"use strict";
a.r(t), a.d(t, {
  AddPaymentFlow: function() {
    return eA
  },
  AddPaymentStep: function() {
    return em
  },
  useSharedPaymentModal: function() {
    return eT
  }
}), a("47120"), a("411104");
var n = a("735250"),
  r = a("470079"),
  s = a("452079"),
  l = a("512722"),
  o = a.n(l),
  i = a("442837"),
  u = a("481060"),
  c = a("570140"),
  d = a("355467"),
  p = a("873115"),
  S = a("976255"),
  E = a("801937"),
  m = a("282164"),
  A = a("738342"),
  T = a("915271"),
  y = a("228666"),
  P = a("723484"),
  f = a("122192"),
  N = a("296214"),
  _ = a("870630"),
  C = a("710845"),
  h = a("563132"),
  b = a("409813"),
  O = a("51499"),
  M = a("586585"),
  R = a("614277"),
  I = a("812169"),
  g = a("698708"),
  v = a("351402"),
  x = a("975060"),
  D = a("505649"),
  Y = a("853872"),
  k = a("882712"),
  F = a("358085"),
  L = a("622999"),
  j = a("176919"),
  B = a("185139"),
  w = a("559725"),
  U = a("850228"),
  V = a("231338"),
  H = a("689938"),
  W = a("113315"),
  G = a("82090");
let K = new C.default("AddPaymentStep.tsx"),
  z = [b.Step.PAYMENT_TYPE],
  Z = [b.Step.PAYMENT_TYPE, b.Step.CREDIT_CARD_INFORMATION, b.Step.ADDRESS],
  q = [b.Step.PAYMENT_TYPE, b.Step.PAYPAL_INFORMATION, b.Step.ADDRESS],
  X = [b.Step.PAYMENT_TYPE, b.Step.VENMO_INFORMATION, b.Step.ADDRESS],
  Q = [b.Step.PAYMENT_TYPE, b.Step.SOFORT_INFORMATION, b.Step.ADDRESS];
b.Step.PAYMENT_TYPE, b.Step.PAYMENT_REQUEST_INFORMATION, b.Step.ADDRESS;
let J = [b.Step.PAYMENT_TYPE, b.Step.PRZELEWY24_INFORMATION, b.Step.ADDRESS],
  $ = [b.Step.PAYMENT_TYPE, b.Step.EPS_INFORMATION, b.Step.ADDRESS],
  ee = [b.Step.PAYMENT_TYPE, b.Step.IDEAL_INFORMATION, b.Step.ADDRESS],
  et = [b.Step.PAYMENT_TYPE, b.Step.CASH_APP_INFORMATION, b.Step.ADDRESS],
  ea = [b.Step.PAYMENT_TYPE, b.Step.ADDRESS],
  en = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  er = {
    email: "",
    name: "",
    country: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: ""
  };

function es(e) {
  let {
    onChooseType: t,
    onPaymentRequestSourceReceived: a,
    onPaymentRequestSourceFailed: r,
    analyticsLocation: s,
    isEligibleForTrial: l
  } = e;
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(E.default, {
      onChooseType: t,
      allowStripeRequestPayments: !F.isPlatformEmbedded,
      onStripePaymentMethodReceived: async e => {
        if ((0, S.updateStripePaymentRequest)(e), null == e) {
          r();
          return
        }
        try {
          let t = await (0, d.createPaymentRequestPaymentSource)(e, void 0, s),
            {
              billingAddressInfo: n
            } = (0, L.parseStripePaymentMethod)(e);
          a(t, n)
        } catch (e) {}
      },
      isEligibleForTrial: l
    })
  })
}

function el(e) {
  let {
    onCardInfoChange: t
  } = e, a = (0, i.useStateFromStores)([x.default], () => x.default.error);
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(f.CreditCardInformationBody, {
      billingError: a,
      onCardInfoChange: t
    })
  })
}

function eo() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(m.default, {})
  })
}

function ei() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(T.default, {})
  })
}

function eu() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(U.default, {})
  })
}

function ec() {
  let e = (0, i.useStateFromStores)([v.default], () => v.default.isBusy),
    t = (0, i.useStateFromStores)([x.default], () => x.default.stripePaymentMethod);
  return (0, n.jsx)(N.PaymentRequestStepBody, {
    className: W.body,
    stripePaymentMethod: t,
    submitting: e
  })
}

function ed(e) {
  let {
    billingAddressInfo: t,
    onBillingAddressChange: a,
    paymentSourceType: r
  } = e, s = (0, i.useStateFromStores)([x.default], () => x.default.error);
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(y.AddressStepBody, {
      billingAddressInfo: t,
      billingError: s,
      onBillingAddressChange: a,
      paymentSourceType: r
    })
  })
}

function ep() {
  return (0, n.jsx)(P.AwaitingAuthenticationStepBody, {
    className: W.body
  })
}

function eS(e) {
  return () => (null != x.default.error && (0, S.clearError)(), e())
}

function eE(e) {
  let {
    onPrimary: t,
    onBack: a,
    ...r
  } = e, s = t;
  null != t && (s = eS(t));
  let l = a;
  return null != a && (l = eS(a)), (0, n.jsx)(M.default, {
    ...r,
    onPrimary: s,
    onBack: l
  })
}

function em(e) {
  let {
    breadcrumbSteps: t
  } = e, {
    step: a,
    setStep: n,
    paymentSources: r,
    paymentSourceId: s,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  } = (0, h.usePaymentContext)(), p = {
    ...eT(),
    paymentSources: r,
    paymentSourceId: s,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  };
  return o()(a, "Step should be set here"), eA({
    paymentModalArgs: p,
    initialStep: b.Step.PAYMENT_TYPE,
    prependSteps: [b.Step.PROMOTION_INFO],
    appendSteps: [b.Step.REVIEW, b.Step.CONFIRM],
    breadcrumpSteps: t,
    currentBreadcrumpStep: a,
    onReturn: () => n(b.Step.REVIEW),
    onComplete: () => n(b.Step.REVIEW),
    onStepChange: () => {}
  })
}

function eA(e) {
  let t, a, l, c, {
      paymentModalArgs: E,
      initialStep: m,
      prependSteps: T,
      appendSteps: y,
      onReturn: P,
      onComplete: f,
      onStepChange: N,
      breadcrumpSteps: C,
      currentBreadcrumpStep: v,
      header: D,
      analyticsLocation: k,
      hideBreadcrumbs: F = !1,
      usePaymentModalStep: L = !1,
      isEligibleForTrial: j = !1
    } = e,
    U = {
      steps: [...T, ...Z, ...y],
      methodType: V.PaymentSourceTypes.CARD
    },
    en = {
      steps: [...T, ...z, ...y],
      methodType: V.PaymentSourceTypes.PAYMENT_REQUEST
    },
    er = {
      steps: [...T, ...q, ...y],
      methodType: V.PaymentSourceTypes.PAYPAL
    },
    eS = {
      steps: [...T, ...X, ...y],
      methodType: V.PaymentSourceTypes.VENMO
    },
    em = {
      steps: [...T, ...z, ...y]
    },
    eA = {
      steps: [...T, ...Q, ...y],
      methodType: V.PaymentSourceTypes.SOFORT
    },
    eT = {
      steps: [...T, ...J, ...y],
      methodType: V.PaymentSourceTypes.PRZELEWY24
    },
    ey = {
      steps: [...T, ...$, ...y],
      methodType: V.PaymentSourceTypes.EPS
    },
    eP = {
      steps: [...T, ...ee, ...y],
      methodType: V.PaymentSourceTypes.IDEAL
    },
    ef = {
      steps: [...T, ...et, ...y],
      methodType: V.PaymentSourceTypes.CASH_APP
    },
    [eN, e_] = r.useState(m),
    [eC, eh] = r.useState(null == C ? U : {
      steps: [b.Step.ADD_PAYMENT_STEPS]
    }),
    {
      stripe: eb
    } = (0, h.usePaymentContext)(),
    eO = (0, i.useStateFromStores)([x.default], () => x.default.redirectedPaymentSourceId);

  function eM(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    e_(e), t && N({
      currentStep: eN,
      toStep: e
    })
  }
  r.useEffect(() => {
    (() => {
      if (null == eO) return;
      let e = Y.default.getPaymentSource(eO);
      null != e && (eX(e), eF(!1))
    })()
  }, [eO]);
  let {
    setPaymentSourceId: eR,
    creditCardState: eI,
    setCreditCardState: eg,
    tokenState: ev,
    setTokenState: ex,
    isSubmittingCurrentStep: eD,
    billingAddressState: eY,
    setBillingAddressState: ek,
    setIsSubmittingCurrentStep: eF,
    hasRedirectURL: eL,
    setHasRedirectURL: ej,
    braintreeEmail: eB,
    braintreeNonce: ew,
    venmoUsername: eU,
    adyenPaymentData: eV,
    isAuthenticating: eH,
    epsBankState: eW,
    setEpsBankState: eG,
    idealBankState: eK,
    setIdealBankState: ez,
    p24BankState: eZ,
    setP24BankState: eq
  } = E;

  function eX(e) {
    eR(e.id), f(eN, e), eM(m, !1)
  }
  switch (eN) {
    case b.Step.PAYMENT_TYPE:
      t = (0, n.jsx)(es, {
        onChooseType: e => {
          switch (e) {
            case V.PaymentSourceTypes.CARD:
              eh(U), eM(b.Step.CREDIT_CARD_INFORMATION);
              break;
            case V.PaymentSourceTypes.PAYPAL:
              eh(er), eM(b.Step.PAYPAL_INFORMATION);
              break;
            case V.PaymentSourceTypes.VENMO:
              eh(eS), eM(b.Step.VENMO_INFORMATION);
              break;
            case V.PaymentSourceTypes.PAYMENT_REQUEST:
              eh(en), eM(b.Step.PAYMENT_REQUEST_INFORMATION);
              break;
            case V.PaymentSourceTypes.SOFORT:
              eh(eA), eM(b.Step.SOFORT_INFORMATION);
              break;
            case V.PaymentSourceTypes.PRZELEWY24:
              eh(eT), eM(b.Step.PRZELEWY24_INFORMATION);
              break;
            case V.PaymentSourceTypes.EPS:
              eh(ey), eM(b.Step.EPS_INFORMATION);
              break;
            case V.PaymentSourceTypes.IDEAL:
              eh(eP), eM(b.Step.IDEAL_INFORMATION);
              break;
            case V.PaymentSourceTypes.CASH_APP:
              eh(ef), eM(b.Step.CASH_APP_INFORMATION);
              break;
            case V.PaymentSourceTypes.GIROPAY:
            case V.PaymentSourceTypes.PAYSAFE_CARD:
            case V.PaymentSourceTypes.GCASH:
            case V.PaymentSourceTypes.GRABPAY_MY:
            case V.PaymentSourceTypes.MOMO_WALLET:
            case V.PaymentSourceTypes.KAKAOPAY:
            case V.PaymentSourceTypes.GOPAY_WALLET:
            case V.PaymentSourceTypes.BANCONTACT:
              eh({
                steps: [...T, ...ea, ...y],
                methodType: e
              }), eM(b.Step.ADDRESS)
          }
          null != x.default.error && (0, S.clearError)()
        },
        onPaymentRequestSourceReceived: (e, t) => {
          ek(e => ({
            ...e,
            info: t
          })), eh(en), eX(e)
        },
        onPaymentRequestSourceFailed: () => {
          eh(em), eM(b.Step.PAYMENT_TYPE)
        },
        analyticsLocation: k,
        isEligibleForTrial: j
      }), a = (0, n.jsx)(eE, {
        onBack: P
      });
      break;
    case b.Step.CREDIT_CARD_INFORMATION:
      let eQ = 2 === (0, I.reducedPaymentInfoExperiment)().bucket,
        eJ = async e => {
          eF(!0);
          try {
            let t = await (0, d.createCardToken)(eb, e);
            if (ex({
                token: t
              }), eQ) try {
              let e = await (0, d.confirmCardPaymentSource)(eb, t, eY.info, k);
              eX(e)
            } catch {} else eM(b.Step.ADDRESS)
          } catch (e) {
            var t;
            K.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e))
          } finally {
            eF(!1)
          }
        };
      t = (0, n.jsx)(el, {
        onCardInfoChange: (e, t) => {
          eg({
            info: e,
            isValid: t
          }), ek(t => {
            let a = {
              ...t,
              info: {
                ...t.info,
                name: e.name
              }
            };
            if (eQ) {
              var n, r;
              a.info.country = null !== (n = e.country) && void 0 !== n ? n : "", a.info.postalCode = null !== (r = e.postalCode) && void 0 !== r ? r : ""
            }
            return a
          })
        }
      }), a = (0, n.jsx)(s.ElementsConsumer, {
        children: e => {
          let {
            elements: t
          } = e;
          return (0, n.jsx)(eE, {
            onBack: () => eM(b.Step.PAYMENT_TYPE),
            primaryCTA: M.default.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: H.default.Messages.NEXT,
            primarySubmitting: eD,
            primaryDisabled: eQ ? !eI.isValid || eH : !eI.isValid,
            onPrimary: () => eJ(t)
          })
        }
      });
      break;
    case b.Step.SOFORT_INFORMATION:
      let e$ = eY.info;
      t = (0, n.jsx)("div", {
        className: W.body,
        children: (0, n.jsx)(A.default, {
          billingAddressInfo: e$,
          onChange: e => {
            ek({
              info: {
                ...e$,
                ...e
              },
              isValid: !1
            })
          },
          error: x.default.error
        })
      }), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: H.default.Messages.NEXT,
        primaryDisabled: "" === e$.name || "" === e$.email || void 0 === e$.email,
        onPrimary: () => eM(b.Step.ADDRESS)
      });
      break;
    case b.Step.EPS_INFORMATION:
      t = (0, n.jsx)(_.default, {
        type: V.PaymentSourceTypes.EPS,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eY.info,
            name: e
          },
          isValid: eY.isValid
        }),
        onEPSBankChange: e => eG(e),
        epsBankValue: eW,
        billingAddressInfo: eY.info
      }), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: H.default.Messages.NEXT,
        primaryDisabled: void 0 === eW || "" === eW || "" === eY.info.name,
        onPrimary: () => eM(b.Step.ADDRESS)
      });
      break;
    case b.Step.IDEAL_INFORMATION:
      t = (0, n.jsx)(_.default, {
        type: V.PaymentSourceTypes.IDEAL,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eY.info,
            name: e
          },
          isValid: eY.isValid
        }),
        onIdealBankChange: e => ez(e),
        idealBankValue: eK,
        billingAddressInfo: eY.info
      }), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: H.default.Messages.NEXT,
        primaryDisabled: void 0 === eK || "" === eK || "" === eY.info.name,
        onPrimary: () => eM(b.Step.ADDRESS)
      });
      break;
    case b.Step.PRZELEWY24_INFORMATION:
      t = (0, n.jsx)(_.default, {
        type: V.PaymentSourceTypes.PRZELEWY24,
        onNameChange: e => ek({
          info: {
            ...eY.info,
            name: e
          },
          isValid: eY.isValid
        }),
        onEmailChange: e => ek({
          info: {
            ...eY.info,
            email: e
          },
          isValid: eY.isValid
        }),
        onP24BankChange: e => {
          eq(e)
        },
        p24BankValue: eZ,
        billingAddressInfo: eY.info
      }), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: H.default.Messages.NEXT,
        primaryDisabled: void 0 === eY.info.name || "" === eY.info.name || void 0 === eY.info.email || "" === eY.info.email || void 0 === eZ || "" === eZ,
        onPrimary: () => eM(b.Step.ADDRESS)
      });
      break;
    case b.Step.PAYPAL_INFORMATION:
      let e0 = 0 !== eB.length && null != ew;
      t = (0, n.jsx)(eo, {}), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: e0 ? H.default.Messages.NEXT : H.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
        onPrimary: () => e0 ? eM(b.Step.ADDRESS) : (0, p.reopenPayPalWindow)()
      });
      break;
    case b.Step.VENMO_INFORMATION:
      let e1 = 0 !== eU.length && null != ew;
      t = (0, n.jsx)(ei, {}), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: e1 ? H.default.Messages.NEXT : H.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
        onPrimary: () => e1 ? eM(b.Step.ADDRESS) : (0, p.reopenVenmoWindow)()
      });
      break;
    case b.Step.PAYMENT_REQUEST_INFORMATION:
      t = (0, n.jsx)(ec, {}), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE)
      });
      break;
    case b.Step.CASH_APP_INFORMATION:
      let e4 = null != eV;
      t = (0, n.jsx)(eu, {}), a = (0, n.jsx)(eE, {
        onBack: () => eM(b.Step.PAYMENT_TYPE),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: e4 ? H.default.Messages.NEXT : H.default.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
        onPrimary: () => e4 ? eM(b.Step.ADDRESS) : (0, w.reopenCashAppPayWindow)()
      });
      break;
    case b.Step.ADDRESS:
      let e2 = async () => {
        eF(!0);
        let e = eC.methodType;
        switch (e) {
          case V.PaymentSourceTypes.CARD:
            try {
              let e = await (0, d.confirmCardPaymentSource)(eb, ev.token, eY.info, k);
              eX(e)
            } catch {}
            break;
          case V.PaymentSourceTypes.VENMO:
          case V.PaymentSourceTypes.PAYPAL:
            try {
              o()(null != ew, "Missing braintreeNonce");
              let e = await (0, d.createBraintreePaymentSource)(ew, eY.info, k);
              eX(e)
            } catch {}
            break;
          case V.PaymentSourceTypes.SOFORT:
            try {
              let e = await (0, d.confirmSofort)(eb, eY.info, k);
              eX(e)
            } catch {}
            break;
          case V.PaymentSourceTypes.EPS:
            try {
              let e = await (0, d.confirmEPS)(eb, eW, eY.info, k);
              eX(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case V.PaymentSourceTypes.IDEAL:
            try {
              let e = await (0, d.confirmIdeal)(eb, eK, eY.info, k);
              eX(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case V.PaymentSourceTypes.PRZELEWY24:
            try {
              if (void 0 === eZ) throw (0, d.dispatchConfirmationError)("Bank required for Przelewy24");
              let e = await (0, d.confirmPrzelewy24)(eb, {
                p24Bank: eZ
              }, eY.info, k);
              eX(e)
            } catch {}
            break;
          case V.PaymentSourceTypes.PAYSAFE_CARD:
          case V.PaymentSourceTypes.GRABPAY_MY:
            try {
              let t = await (0, d.createAdyenPrepaidPaymentSource)(eY.info, e, k);
              eX(t)
            } catch {}
            break;
          case V.PaymentSourceTypes.GCASH:
          case V.PaymentSourceTypes.MOMO_WALLET:
          case V.PaymentSourceTypes.KAKAOPAY:
          case V.PaymentSourceTypes.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: t
              } = await (0, d.createAdyenVaultablePaymentSource)(eY.info, e, k);
              ej(t)
            } catch {}
            break;
          case V.PaymentSourceTypes.GIROPAY:
          case V.PaymentSourceTypes.BANCONTACT:
            try {
              let t = await (0, d.createStripePaymentSource)(eb, eY.info, e, k);
              eX(t)
            } catch {}
            break;
          case V.PaymentSourceTypes.CASH_APP:
            try {
              o()(null != eV, "Missing adyenPaymentData");
              let {
                paymentSource: t
              } = await (0, d.createAdyenVaultablePaymentSource)(eY.info, e, k, eV);
              o()(null != t, "Cash App Pay Payment Source missing"), eX(t)
            } catch {}
            break;
          default:
            throw Error("unknown step not handled")
        }!eL && eF(!1)
      };
      switch (eC.methodType) {
        case V.PaymentSourceTypes.CARD:
          c = b.Step.CREDIT_CARD_INFORMATION, l = V.PaymentSourceTypes.CARD;
          break;
        case V.PaymentSourceTypes.PAYPAL:
          c = b.Step.PAYPAL_INFORMATION, l = V.PaymentSourceTypes.PAYPAL;
          break;
        case V.PaymentSourceTypes.VENMO:
          c = b.Step.VENMO_INFORMATION, l = V.PaymentSourceTypes.VENMO;
          break;
        case V.PaymentSourceTypes.GIROPAY:
          c = b.Step.PAYMENT_TYPE, l = V.PaymentSourceTypes.GIROPAY;
          break;
        case V.PaymentSourceTypes.SOFORT:
          c = b.Step.SOFORT_INFORMATION, l = V.PaymentSourceTypes.SOFORT;
          break;
        case V.PaymentSourceTypes.PAYSAFE_CARD:
        case V.PaymentSourceTypes.GCASH:
        case V.PaymentSourceTypes.GRABPAY_MY:
        case V.PaymentSourceTypes.MOMO_WALLET:
        case V.PaymentSourceTypes.KAKAOPAY:
        case V.PaymentSourceTypes.GOPAY_WALLET:
        case V.PaymentSourceTypes.BANCONTACT:
          c = b.Step.PAYMENT_TYPE, l = eC.methodType;
          break;
        case V.PaymentSourceTypes.EPS:
          c = b.Step.EPS_INFORMATION, l = V.PaymentSourceTypes.EPS;
          break;
        case V.PaymentSourceTypes.IDEAL:
          c = b.Step.IDEAL_INFORMATION, l = V.PaymentSourceTypes.IDEAL;
          break;
        case V.PaymentSourceTypes.PRZELEWY24:
          c = b.Step.PRZELEWY24_INFORMATION, l = V.PaymentSourceTypes.PRZELEWY24;
          break;
        case V.PaymentSourceTypes.CASH_APP:
          c = b.Step.CASH_APP_INFORMATION, l = V.PaymentSourceTypes.CASH_APP;
          break;
        default:
          c = b.Step.PAYMENT_TYPE, l = V.PaymentSourceTypes.CARD
      }
      t = (0, n.jsx)(ed, {
        billingAddressInfo: eY.info,
        onBillingAddressChange: (e, t) => {
          ek({
            info: {
              ...eY.info,
              ...e
            },
            isValid: t
          })
        },
        paymentSourceType: l
      }), a = (0, n.jsx)(eE, {
        onBack: () => eM(c),
        primaryCTA: M.default.CTAType.CONTINUE,
        primaryText: H.default.Messages.NEXT,
        primarySubmitting: eD,
        primaryDisabled: !eY.isValid || eH,
        onPrimary: e2
      });
      break;
    case b.Step.AWAITING_AUTHENTICATION:
      t = (0, n.jsx)(ep, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eN))
  }
  let e8 = (0, n.jsx)(u.Sequencer, {
      className: G.sequencer,
      staticClassName: G.sequencerStatic,
      animatedNodeClassName: G.sequencerAnimatedNode,
      fillParent: !0,
      step: eN,
      steps: eC.steps,
      sideMargin: 20,
      children: t
    }),
    e5 = eN === b.Step.PAYMENT_TYPE && 0 === T.length ? null : a;
  return L ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(g.default, {
      className: W.paymentModalError
    }), j && (0, n.jsx)(O.default, {
      className: W.paymentModalBreadcrumbs,
      isEligibleForTrial: j
    }), (0, n.jsx)(R.PaymentPortalBody, {
      children: e8
    }), (0, n.jsx)(R.PaymentPortalFooter, {
      children: e5
    })]
  }) : (0, n.jsx)(B.default, {
    steps: null != C ? C : eC.steps,
    currentStep: null != v ? v : eN,
    paymentError: E.paymentError,
    header: D,
    hideBreadcrumbs: F,
    body: e8,
    footer: e5
  })
}

function eT(e) {
  let {
    defaultPaymentSourceId: t,
    paymentSources: a,
    hasFetchedPaymentSources: n
  } = (0, i.useStateFromStoresObject)([Y.default], () => ({
    defaultPaymentSourceId: void 0 !== e ? e : Y.default.defaultPaymentSourceId,
    paymentSources: Y.default.paymentSources,
    hasFetchedPaymentSources: Y.default.hasFetchedPaymentSources
  }));
  r.useEffect(() => {
    (0, p.createClient)(), (0, w.createClient)(), !n && (0, d.fetchPaymentSources)()
  }, []);
  let [s, l] = r.useState(t);
  null != t && null == s && l(t);
  let [o, u] = r.useState(() => ({
    info: en,
    isValid: !1
  })), [E, m] = r.useState(() => ({
    info: er,
    isValid: !1
  })), [A, T] = r.useState(""), [y, P] = r.useState(""), [f, N] = r.useState(""), [_, C] = r.useState(() => ({
    token: null
  })), [h, b, O, M, R] = (0, i.useStateFromStoresArray)([x.default], () => [x.default.braintreeEmail, x.default.braintreeNonce, x.default.error, x.default.venmoUsername, x.default.adyenPaymentData]), [I, g] = (0, i.useStateFromStoresArray)([D.default], () => [D.default.error, D.default.isAwaitingAuthentication]);
  r.useEffect(() => {
    let e = e => {
      let {
        billingAddress: t
      } = e;
      m({
        info: t,
        isValid: t.country.length > 0
      })
    };
    return c.default.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      c.default.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, S.clearError)()
    }
  }, []);
  let [v, F] = r.useState(!1), [L, B] = r.useState(!1), [U, V] = r.useState(null), H = r.useRef(null), W = (0, i.useStateFromStores)([D.default], () => D.default.isAwaitingAuthentication), [G, K] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.purchaseTokenAuthState, k.default.purchaseTokenHash]);
  return r.useEffect(() => {
    null != U && null != H.current && H.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [U]), {
    paymentSources: a,
    paymentSourceId: s,
    hasFetchedPaymentSources: n,
    setPaymentSourceId: l,
    creditCardState: o,
    setCreditCardState: u,
    tokenState: _,
    setTokenState: C,
    billingAddressState: E,
    setBillingAddressState: m,
    isSubmittingCurrentStep: v,
    setIsSubmittingCurrentStep: F,
    hasRedirectURL: L,
    setHasRedirectURL: B,
    braintreeEmail: h,
    braintreeNonce: b,
    venmoUsername: M,
    adyenPaymentData: R,
    paymentError: null != I ? I : O,
    paymentAuthenticationState: g ? j.PaymentAuthenticationState.PENDING : null != I ? j.PaymentAuthenticationState.ERROR : j.PaymentAuthenticationState.NONE,
    purchaseError: U,
    setPurchaseError: V,
    purchaseErrorBlockRef: H,
    isAuthenticating: W,
    purchaseTokenAuthState: G,
    purchaseTokenHash: K,
    epsBankState: y,
    setEpsBankState: P,
    idealBankState: f,
    setIdealBankState: N,
    p24BankState: A,
    setP24BankState: T
  }
}