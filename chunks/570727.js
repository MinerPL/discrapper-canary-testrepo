"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return Y
  },
  PremiumSwitchPlanSelectFooter: function() {
    return W
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  u = n("77078"),
  c = n("405932"),
  o = n("798609"),
  d = n("837148"),
  m = n("903494"),
  f = n("635357"),
  p = n("642906"),
  _ = n("85336"),
  I = n("883558"),
  S = n("10514"),
  E = n("521012"),
  P = n("659632"),
  T = n("701909"),
  N = n("773336"),
  A = n("719923"),
  C = n("153160"),
  h = n("916187"),
  v = n("968532"),
  g = n("15733"),
  x = n("154889"),
  y = n("917247"),
  O = n("279171"),
  M = n("883662"),
  R = n("824734"),
  L = n("705820"),
  b = n("889554"),
  j = n("177998"),
  G = n("661128"),
  D = n("26785"),
  U = n("617223"),
  F = n("646718"),
  B = n("49111"),
  w = n("843455"),
  k = n("782340"),
  H = n("291646");

function Y(e) {
  var t, n, a, _, I, E;
  let {
    premiumSubscription: N,
    skuId: v,
    selectedPlanId: j,
    setSelectedPlanId: G,
    priceOptions: Y,
    planOptions: W,
    eligibleForMultiMonthPlans: Z,
    referralTrialOfferId: K,
    subscriptionPeriodEnd: V,
    showTotal: z = !0,
    discountInvoiceItems: J,
    handleClose: X
  } = e, {
    activeSubscription: q,
    setSelectedPlanId: Q,
    selectedSkuId: $,
    selectedPlan: ee,
    priceOptions: et
  } = (0, p.usePaymentContext)(), {
    isGift: en,
    giftRecipient: es,
    selectedGiftStyle: er,
    customGiftMessage: ea,
    setCustomGiftMessage: ei
  } = (0, f.useGiftContext)(), el = (0, P.getGiftExperience)(es), eu = en && (0, P.shouldShowCustomGiftExperience)(es), {
    confirmUpsellEnabled: ec
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  v = null != v ? v : $, i(void 0 !== (N = null != N ? N : q), "should not be undefined");
  let [eo, ed] = (0, l.useStateFromStoresArray)([S.default], () => [null != N ? S.default.get(N.planId) : null, null != j ? S.default.get(j) : null]), em = (0, y.usePremiumTrialOffer)(K), ef = null == em ? void 0 : em.subscription_trial, ep = (0, x.usePremiumDiscountOffer)(), e_ = null == ep ? void 0 : null === (t = ep.discount) || void 0 === t ? void 0 : t.plan_ids, eI = null != ed ? ed : ee, eS = r.useCallback(e => {
    null != G ? G(e) : Q(e)
  }, [G, Q]), eE = null != Y ? Y : et;
  i(null != eE, "Price option has to be set");
  let eP = null != em && (0, F.SubscriptionTrials)[em.trial_id].skus.includes(v),
    eT = null != ep && W.some(e => null == e_ ? void 0 : e_.includes(e)) && null != ep.discount,
    eN = (0, A.getPrice)(F.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eE);
  r.useEffect(() => {
    Z && h.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [Z]);
  let eA = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
  r.useEffect(() => {
    if (!eA) {
      if (null == eo || en) eS(W[0]);
      else if (null != eo) {
        let e = W.find(e => e !== eo.id);
        null != e && eS(e)
      }
    }
  }, [eA, en, W, eo, eS]);
  let eC = !eu && (en || !eP && !eT) && eA && z,
    eh = (0, u.useRadioGroup)(),
    ev = (null == eI ? void 0 : eI.id) != null ? (0, A.getPrice)(eI.id, !1, en, eE) : void 0,
    {
      ipCountryCode: eg
    } = (0, g.default)(),
    ex = "HR" === eg && null != ev && ev.currency === w.CurrencyCodes.EUR,
    ey = (0, A.isPrepaidPaymentSource)(eE.paymentSourceId),
    eO = (null == ef ? void 0 : ef.interval) === F.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eM = !en && (eT || null != ef && eP && null != V),
    eR = null == J ? void 0 : null === (_ = J.find(e => e.subscriptionPlanId === F.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === _ ? void 0 : null === (a = _.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: eu ? H.stepBodyCustomGift : H.stepBody,
      children: [(0, s.jsxs)("div", {
        className: eu ? H.bodyColumnMiddle : void 0,
        children: [(0, s.jsx)(O.default, {
          fromBoostCancelModal: !1,
          className: H.legacyPricingNotice
        }), eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {})]
      }), (0, s.jsxs)("div", {
        className: eu ? H.bodyColumnRight : void 0,
        children: [(0, s.jsx)(U.SendGiftToUser, {
          giftRecipient: es
        }), (() => {
          if (el === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ei) return (0, s.jsx)(L.default, {
            sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => ei(e),
            pendingText: ea,
            currentText: ea
          })
        })(), null != eo && !en && (0, s.jsx)("div", {
          className: H.bodyText,
          children: function(e, t) {
            let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              s = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              r = (() => {
                switch (e.interval) {
                  case F.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case F.SubscriptionIntervalTypes.MONTH:
                  default:
                    return s
                }
              })(),
              a = e.skuId;
            switch (t) {
              case F.PremiumSubscriptionSKUs.TIER_0:
                switch (a) {
                  case F.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case F.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return r
                }
              case F.PremiumSubscriptionSKUs.TIER_1:
                switch (a) {
                  case F.PremiumSubscriptionSKUs.TIER_0:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case F.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return r
                }
              case F.PremiumSubscriptionSKUs.TIER_2:
                switch (a) {
                  case F.PremiumSubscriptionSKUs.TIER_0:
                  case F.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case F.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === F.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: F.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : r;
                  default:
                    return r
                }
              default:
                return r
            }
          }(eo, v)
        }), (I = eP, E = eT, eu ? (0, s.jsx)(u.FormTitle, {
          children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
        }) : eM ? I ? (0, s.jsxs)("div", {
          children: [(0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
              trialEnd: V,
              trialPeriod: eO
            })
          }), (0, s.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : E && null != eR && null != eN ? (0, s.jsxs)("div", {
          children: [(0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
              numMonths: null == ep ? void 0 : ep.discount.user_usage_limit,
              discountedPrice: (0, C.formatPrice)(eN.amount - eR, eN.currency),
              regularPrice: (0, C.formatPrice)(eN.amount, eN.currency)
            })
          }), (0, s.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : void 0 : (0, s.jsx)("div", {
          className: H.selectPlanChooseTitle,
          children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
        })), (0, s.jsx)("div", {
          ...eh,
          children: W.map(e => (0, s.jsx)(D.default, {
            planId: e,
            premiumSubscription: en ? null : null != N ? N : null,
            selectPlan: eS,
            selected: (null == eI ? void 0 : eI.id) === e,
            priceOptions: eE,
            shouldShowUpdatedPaymentModal: eM,
            isEligibleForDiscount: eT,
            discountAmountOff: eR
          }, e))
        }), (0, s.jsx)("div", {
          children: eC && null != eI && null != ev ? (0, s.jsxs)("div", {
            children: [(0, s.jsx)("div", {
              className: H.selectPlanDivider
            }), (0, s.jsx)(M.PremiumInvoiceTableTotalRow, {
              label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, s.jsx)(R.default, {
                price: ev.amount,
                currency: ev.currency,
                intervalType: en ? null : eI.interval,
                intervalCount: eI.intervalCount,
                isPrepaidPaymentSource: ey
              }),
              className: H.selectPlanTotalRow
            })]
          }) : null
        }), ex && (0, s.jsx)(c.default, {
          message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, C.formatPrice)(7.5345 * ev.amount, w.CurrencyCodes.HRK)
          })
        }), !en && !eM && z && (0, s.jsx)(c.default, {
          message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(B.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), ec && en && (0, s.jsx)(m.default, {
          onClose: X
        })]
      })]
    })
  })
}

function W(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: r,
    onBackClick: a,
    showBackButton: i,
    planOptions: l,
    shouldRenderUpdatedPaymentModal: c = !1,
    isTrial: o
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: _
  } = (0, f.useGiftContext)();
  return r = null != r ? r : d, n = null != n ? n : null == m ? void 0 : m.id, (0, s.jsxs)(s.Fragment, {
    children: [null != n && l.includes(n) ? (0, s.jsx)(Z, {
      paymentSources: r,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      shouldRenderUpdatedPaymentModal: c,
      isTrial: o
    }) : (0, s.jsx)(u.Button, {
      disabled: !0,
      children: k.default.Messages.SELECT
    }), i ? (0, s.jsx)(j.default, {
      onClick: a
    }) : null]
  })
}

function Z(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: r,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: i,
    isTrial: c
  } = e, o = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, G.useSubscriptionEntitlements)(n, r), m = null != o && null != o.paymentSourceId || Object.keys(a).length > 0 || d && !c;
  var f = i ? k.default.Messages.NEXT : k.default.Messages.SELECT,
    p = _.Step.ADD_PAYMENT_STEPS;
  return m ? p = _.Step.REVIEW : (0, N.isDesktop)() && function() {
    let {
      experiment: e
    } = v.default.getCurrentConfig({
      location: "5f89bb_2"
    });
    if (e === v.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
      let {
        enabled: e
      } = I.default.getCurrentConfig({
        location: "5f89bb_3"
      }, {
        autoTrackExposure: !0
      });
      return e
    }
    return !1
  }() && (p = _.Step.AWAITING_BROWSER_CHECKOUT, f = k.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}