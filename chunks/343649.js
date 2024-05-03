"use strict";
n.r(t), n.d(t, {
  GuildBoostPurchaseModal: function() {
    return ee
  },
  default: function() {
    return et
  }
}), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("512722"),
  u = n.n(i),
  r = n("207561"),
  o = n("153832"),
  c = n("442837"),
  d = n("780384"),
  S = n("481060"),
  p = n("355467"),
  E = n("179360"),
  m = n("723484"),
  P = n("330726"),
  _ = n("100527"),
  f = n("906732"),
  I = n("15640"),
  T = n("89057"),
  M = n("563132"),
  A = n("409813"),
  N = n("45572"),
  y = n("98278"),
  R = n("431369"),
  L = n("176919"),
  C = n("3409"),
  U = n("185139"),
  h = n("210887"),
  g = n("430824"),
  O = n("314884"),
  b = n("975060"),
  D = n("853872"),
  x = n("509545"),
  B = n("78839"),
  G = n("285952"),
  k = n("626135"),
  v = n("267642"),
  j = n("74538"),
  F = n("212895"),
  w = n("296848"),
  W = n("518062"),
  Y = n("4434"),
  H = n("333451"),
  V = n("981631"),
  K = n("474936"),
  z = n("231338"),
  q = n("689938"),
  J = n("908689");
(l || (l = {})).PREMIUM = "discord://app/settings/nitro";
let X = K.SubscriptionPlans.NONE_MONTH,
  Q = [A.Step.PLAN_SELECT, A.Step.REVIEW, A.Step.CONFIRM],
  Z = [A.Step.PLAN_SELECT, A.Step.ADD_PAYMENT_STEPS, A.Step.REVIEW, A.Step.CONFIRM];
async function $(e) {
  await (0, E.fetchGuildBoostSlots)();
  let t = (0, v.getAvailableGuildBoostSlots)(O.default.boostSlots);
  return (0, E.applyToGuild)(e, t.map(e => e.id))
}

function ee(e) {
  let t, {
      transitionState: n,
      onClose: l,
      closeGuildPerksModal: i,
      analyticsLocations: E,
      analyticsLocation: ee,
      analyticsSourceLocation: et,
      guildId: en,
      onSubscribeComplete: el,
      totalNumberOfSlotsToAssign: ea = 1,
      disablePremiumUpsell: es = !1,
      onSubscriptionConfirmation: ei,
      applicationId: eu
    } = e,
    {
      activeSubscription: er,
      blockedPayments: eo
    } = (0, M.usePaymentContext)(),
    ec = (0, c.useStateFromStores)([B.default], () => B.default.hasFetchedSubscriptions()),
    ed = null != er ? er.paymentSourceId : null,
    eS = (0, c.useStateFromStores)([x.default], () => null != er ? (0, w.getOrFetchSubscriptionPlan)(er.planId) : null),
    ep = (0, c.useStateFromStores)([x.default], () => null == er || null != x.default.get(er.planId)),
    eE = (0, c.useStateFromStores)([x.default], () => null == eS ? x.default.get(X) : eS),
    em = (0, c.useStateFromStores)([h.default], () => h.default.theme),
    eP = s.useRef((0, v.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
    e_ = (0, c.useStateFromStores)([D.default], () => D.default.defaultPaymentSourceId),
    ef = (0, C.useSharedPaymentModal)(null != ed ? ed : ec ? e_ : null),
    {
      paymentSources: eI,
      setPurchaseError: eT,
      paymentSourceId: eM,
      setIsSubmittingCurrentStep: eA,
      paymentAuthenticationState: eN,
      setPaymentSourceId: ey,
      isSubmittingCurrentStep: eR,
      paymentError: eL,
      purchaseError: eC,
      purchaseErrorBlockRef: eU
    } = ef,
    eh = Object.keys(eI).length > 0,
    [eg, eO] = s.useState(ea - eP.length),
    [eb, eD] = s.useState(!1),
    ex = (0, c.useStateFromStores)([b.default], () => b.default.popupCallbackCalled),
    eB = (0, I.useSubscriptionPlansLoaded)(),
    eG = s.useMemo(() => null != er && ep && eB ? (0, R.calculateAdditionalPlansWithPremiumGuildAdjustment)(er, eg) : [{
      planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
      quantity: eg
    }], [er, ep, eg, eB]),
    [ek, ev] = (0, r.useLazyValue)(() => [(0, o.v4)(), Date.now()]),
    {
      analyticsLocations: ej
    } = (0, f.default)(E, _.default.GUILD_BOOST_PURCHASE_MODAL),
    eF = s.useMemo(() => {
      var e, t;
      return {
        load_id: ek,
        payment_type: z.PurchaseTypeToAnalyticsPaymentType[z.PurchaseTypes.SUBSCRIPTION],
        sku_id: K.PremiumSubscriptionSKUs.GUILD,
        subscription_type: V.SubscriptionTypes.PREMIUM,
        subscription_plan_id: null !== (t = null === (e = eG.find(e => {
          let {
            planId: t
          } = e;
          return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
        quantity: eg,
        location: ee,
        source: et,
        location_stack: ej
      }
    }, [ek, ee, ej, et, eG, eg]);
  s.useEffect(() => {
    (0, F.fetchSubscriptionPlansOnNewPaymentSource)(eM)
  }, [eM]), s.useEffect(() => {
    (async () => {
      if (!0 === ex) try {
        if (null == b.default.redirectedPaymentId) return;
        await (0, p.redirectedPaymentSucceeded)(b.default.redirectedPaymentId), eX(A.Step.CONFIRM), eK(N.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
      } catch (e) {
        eK(N.PurchaseState.FAIL), eT(e), k.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...eF,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: V.PaymentGateways.STRIPE,
          payment_source_id: eM,
          duration_ms: Date.now() - ev
        })
      } finally {
        eA(!1), (0, p.resetPaymentIntentId)()
      }
    })()
  }, [ex]), s.useEffect(() => {
    !B.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(), k.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eF,
      guild_id: en,
      application_id: eu
    }), null != er && null != er.renewalMutations && k.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
      location: ee,
      guild_id: en
    })
  }, []);
  let [ew, eW] = s.useState(Q), [eY, eH] = s.useState(A.Step.PLAN_SELECT), [eV, eK] = s.useState(N.PurchaseState.WAITING), [ez, eq] = s.useState(!0), eJ = (0, r.useStableMemo)(() => Date.now(), [eY]), eX = s.useCallback((e, t) => {
    eH(e), eT(null);
    let n = Date.now();
    k.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...eF,
      from_step: null != t ? t : eY,
      to_step: e === A.Step.ADD_PAYMENT_STEPS ? A.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eJ,
      flow_duration_ms: n - ev,
      guild_id: en,
      application_id: eu
    })
  }, [eT, eF, eY, eJ, ev, en, eu]), eQ = () => {
    l(eV === N.PurchaseState.COMPLETED)
  }, eZ = null != er && er.isPurchasedExternally;
  s.useEffect(() => {
    eN !== L.PaymentAuthenticationState.PENDING && eY !== A.Step.CONFIRM && null != ed && (ew !== Q && eW(Q), !Q.includes(eY) && eY !== A.Step.PREMIUM_UPSELL && eX(A.Step.REVIEW)), eY === A.Step.ADD_PAYMENT_STEPS && ew !== Z && eW(Z), eZ && eY !== A.Step.PLAN_SELECT && eH(A.Step.PLAN_SELECT)
  }, [eY, eX, eZ, eN, er, ed, ew]), (0, L.usePaymentStepForAuthentication)(eY, eN, eX), (0, A.usePurchaseStateForStep)(eY, eV, eK);
  let e$ = s.useRef(null),
    [e0, e3] = (0, P.default)(!1, 500),
    [e1, e4] = s.useState(null),
    [e5, e2] = s.useState([]),
    [e8, e7] = s.useState(!1);
  s.useEffect(() => {
    let e;
    if (!!eB) null != x.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e2(e = (0, F.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, eM, !1)), null == eM && null != er && null != er.paymentSourceId ? e4(er.currency) : null != e && e4(e[0])
  }, [eM, er, eB, JSON.stringify(e5)]);
  let e9 = (0, C.AddPaymentFlow)({
    paymentModalArgs: ef,
    initialStep: A.Step.PAYMENT_TYPE,
    prependSteps: [A.Step.PLAN_SELECT],
    appendSteps: [A.Step.REVIEW, A.Step.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eY,
    onReturn: () => {
      eX(Object.values(eI).length < 1 ? A.Step.PLAN_SELECT : A.Step.REVIEW, A.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eX(A.Step.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, l = Date.now();
      k.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eF,
        from_step: t,
        to_step: n,
        step_duration_ms: l - eJ,
        flow_duration_ms: l - ev,
        guild_id: en
      })
    }
  });
  if (eo) t = (0, a.jsx)(T.BlockedPaymentsContentModal, {
    onClose: eQ
  });
  else if (ec && ep && eB && null != e1 && "" !== e1) {
    if (null == er ? void 0 : er.isPausedOrPausePending) t = (0, a.jsx)(S.ModalContent, {
      children: (0, a.jsx)("p", {
        className: J.copy,
        children: q.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != er && null != er.renewalMutations) t = (0, a.jsx)(S.ModalContent, {
      children: (0, a.jsx)("p", {
        className: J.copy,
        children: q.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eY === A.Step.PREMIUM_UPSELL) {
      u()(null != eE, "Missing nextPremiumSubscriptionPlan"), u()(e1, "Currency not defined");
      let e = null != eM ? {
        paymentSourceId: eM,
        currency: e1
      } : {
        currency: e1
      };
      t = (0, a.jsx)(H.default, {
        premiumSubscriptionPlan: eE,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eQ,
        onBack: () => eX(A.Step.PLAN_SELECT),
        onSkip: () => eX(null != ed || eh ? A.Step.REVIEW : A.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: ei,
        priceOptions: e
      })
    } else {
      let e, n, l, s;
      u()(e1, "Currency not defined");
      let r = null != eM ? {
        paymentSourceId: eM,
        currency: e1
      } : {
        currency: e1
      };
      switch (eY) {
        case A.Step.PLAN_SELECT:
          u()(null != en, "Missing guildId"), u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(Y.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: eE,
            numGuildBoosts: eg,
            setNumGuildBoosts: eO,
            setForceDisableSubmitButton: eq,
            premiumSubscription: er,
            existingAvailableSlots: eP,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eQ(), null != i && i(), (0, y.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: r
          }), eZ && null != er && null != er.paymentGateway && (e = (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(S.FormErrorBlock, {
              className: J.externalErrorBlock,
              children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: z.PaymentGatewayToFriendlyName[er.paymentGateway]
              })
            }), e]
          })), l = (0, a.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(em) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eQ,
            children: q.default.Messages.NEVERMIND
          }), s = (0, a.jsx)(S.Button, {
            type: "submit",
            disabled: ez || 0 === eg || eZ,
            onClick: () => {
              if (!es && (null == eS || eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                eX(A.Step.PREMIUM_UPSELL);
                return
              }
              eX(null != ed || eh ? A.Step.REVIEW : A.Step.ADD_PAYMENT_STEPS)
            },
            children: q.default.Messages.CONTINUE
          });
          break;
        case A.Step.ADD_PAYMENT_STEPS:
          break;
        case A.Step.AWAITING_AUTHENTICATION:
          e = (0, a.jsx)(m.AwaitingAuthenticationStepBody, {
            className: J.__invalid_body
          });
          break;
        case A.Step.REVIEW:
          u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(Y.GuildBoostingReview, {
            paymentSources: eI,
            priceOptions: r,
            currentPremiumSubscription: er,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: eE,
            newAdditionalPlans: eG,
            onPaymentSourceChange: e => ey(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eX(A.Step.ADD_PAYMENT_STEPS), ey(null)
            },
            onPurchaseTermsChange: eD,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = A.Step.PLAN_SELECT, s = eb ? (0, a.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: eR,
            onClick: async () => {
              u()(null != eG, "Missing newAdditionalPlans");
              let e = null != eM ? eI[eM] : null;
              eT(null);
              try {
                if (eK(N.PurchaseState.PURCHASING), eA(!0), u()(null != eM, "Missing paymentSourceId"), k.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...eF,
                    duration_ms: Date.now() - ev,
                    guild_id: en,
                    application_id: eu
                  }), e8) return;
                if (null == er || null == eS) {
                  u()(null != e, "Missing paymentSource");
                  let t = await (0, p.createSubscription)({
                    items: eG,
                    paymentSource: e,
                    currency: r.currency
                  });
                  if (t.redirectConfirmation) {
                    e7(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, j.getItemsFromNewAdditionalPlans)(er, eG)
                  };
                  t.currency = er.currency, null == t.currency && (t.currency = r.currency), t.paymentSource = null != ed ? eI[ed] : void 0, null == t.paymentSource && (u()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = r.currency);
                  let n = await (0, p.updateSubscription)(er, t, ej);
                  if (n.redirectConfirmation) {
                    e7(null != n.redirectURL);
                    return
                  }
                }
                eX(A.Step.CONFIRM), eK(N.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
              } catch (t) {
                eK(N.PurchaseState.FAIL), eT(t), k.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...eF,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                  payment_source_id: eM,
                  duration_ms: Date.now() - ev
                })
              } finally {
                !e8 && eA(!1)
              }
            },
            children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, a.jsx)(S.Tooltip, {
            text: q.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, a.jsx)(S.Button, {
              ...e,
              color: S.Button.Colors.GREEN,
              onClick: () => {
                null != e$.current && (e$.current.scrollIntoView({
                  behavior: "smooth"
                }), e3(!0))
              },
              type: "submit",
              children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case A.Step.CONFIRM:
          var e6;
          let o = g.default.getGuild(en);
          e = (0, a.jsx)(Y.GuildBoostingConfirmation, {
            guild: o,
            guildBoostQuantity: eg + eP.length,
            onClose: eQ,
            withAnimation: !1,
            paymentSourceType: null === (e6 = eI[null != eM ? eM : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != eL && null == (0, A.errorToStep)(eL) ? eL : eC;
      t = eY === A.Step.ADD_PAYMENT_STEPS ? e9 : (0, a.jsx)(U.default, {
        hideBreadcrumbs: eY === A.Step.CONFIRM,
        steps: ew,
        currentStep: eY,
        paymentError: c,
        purchaseErrorBlockRef: eU,
        hasCurrencies: e5.length > 1,
        body: e,
        footer: eY !== A.Step.CONFIRM ? (0, a.jsxs)(S.ModalFooter, {
          direction: G.default.Direction.HORIZONTAL,
          align: G.default.Align.CENTER,
          justify: G.default.Justify.END,
          children: [null != n ? (0, a.jsx)("div", {
            className: J.backStep,
            children: (0, a.jsx)(S.Button, {
              color: (0, d.isThemeLight)(em) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eX(n)
              },
              children: q.default.Messages.BACK
            })
          }) : null, (0, a.jsxs)("div", {
            className: J.footerRight,
            children: [l, s]
          })]
        }) : null
      })
    }
  } else t = (0, a.jsx)("div", {
    className: J.loadingWrapper,
    children: (0, a.jsx)(S.Spinner, {})
  });
  let te = null;
  return !eo && eY !== A.Step.PREMIUM_UPSELL && (te = (0, a.jsx)(W.default, {
    onClose: eQ,
    currentStep: eY,
    purchaseState: eV
  })), (0, a.jsxs)(S.ModalRoot, {
    transitionState: n,
    children: [te, t]
  })
}

function et(e) {
  let t = (0, c.useStateFromStores)([B.default], () => B.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, f.default)(_.default.GUILD_BOOST_PURCHASE_MODAL);
  return (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: n,
    children: (0, a.jsx)(M.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, a.jsx)(ee, {
        ...e
      })
    })
  })
}