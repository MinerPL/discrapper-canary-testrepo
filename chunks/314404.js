"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return W
  },
  PremiumSwitchPlanSelectFooter: function() {
    return Y
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("442837"),
  u = n("481060"),
  o = n("490504"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  f = n("987209"),
  p = n("598"),
  S = n("409813"),
  _ = n("737143"),
  I = n("509545"),
  E = n("78839"),
  P = n("669079"),
  T = n("63063"),
  N = n("358085"),
  h = n("74538"),
  x = n("937615"),
  v = n("711459"),
  A = n("18376"),
  C = n("847903"),
  g = n("104494"),
  y = n("639119"),
  M = n("55610"),
  b = n("653798"),
  O = n("553797"),
  R = n("927699"),
  L = n("987716"),
  j = n("311821"),
  G = n("459965"),
  D = n("811616"),
  F = n("251660"),
  U = n("474936"),
  w = n("981631"),
  B = n("231338"),
  k = n("689938"),
  H = n("206059");

function W(e) {
  var t, n, a, S, _, E;
  let {
    premiumSubscription: N,
    skuId: A,
    selectedPlanId: j,
    setSelectedPlanId: G,
    priceOptions: W,
    planOptions: Y,
    eligibleForMultiMonthPlans: K,
    referralTrialOfferId: V,
    subscriptionPeriodEnd: Z,
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
    giftRecipient: ei,
    selectedGiftStyle: es,
    customGiftMessage: ea,
    setCustomGiftMessage: el
  } = (0, f.useGiftContext)(), er = (0, P.getGiftExperience)(ei), eu = en && (0, P.shouldShowCustomGiftExperience)(ei), {
    confirmUpsellEnabled: eo
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  A = null != A ? A : $, N = null != N ? N : q, l()(void 0 !== N, "should not be undefined");
  let [ec, ed] = (0, r.useStateFromStoresArray)([I.default], () => [null != N ? I.default.get(N.planId) : null, null != j ? I.default.get(j) : null]), em = (0, y.usePremiumTrialOffer)(V), ef = null == em ? void 0 : em.subscription_trial, ep = (0, g.usePremiumDiscountOffer)(), eS = null == ep ? void 0 : null === (t = ep.discount) || void 0 === t ? void 0 : t.plan_ids, e_ = null != ed ? ed : ee, eI = s.useCallback(e => {
    null != G ? G(e) : Q(e)
  }, [G, Q]), eE = null != W ? W : et;
  l()(null != eE, "Price option has to be set");
  let eP = null != em && (0, U.SubscriptionTrials)[em.trial_id].skus.includes(A),
    eT = null != ep && Y.some(e => null == eS ? void 0 : eS.includes(e)) && null != ep.discount,
    eN = (0, h.getPrice)(U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eE);
  s.useEffect(() => {
    K && v.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [K]);
  let eh = (null == e_ ? void 0 : e_.id) != null && Y.includes(e_.id);
  s.useEffect(() => {
    if (!eh) {
      if (null == ec || en) eI(Y[0]);
      else if (null != ec) {
        let e = Y.find(e => e !== ec.id);
        null != e && eI(e)
      }
    }
  }, [eh, en, Y, ec, eI]);
  let ex = !eu && (en || !eP && !eT) && eh && z,
    ev = (0, u.useRadioGroup)(),
    eA = (null == e_ ? void 0 : e_.id) != null ? (0, h.getPrice)(e_.id, !1, en, eE) : void 0,
    {
      ipCountryCode: eC
    } = (0, C.default)(),
    eg = "HR" === eC && null != eA && eA.currency === B.CurrencyCodes.EUR,
    ey = (0, h.isPrepaidPaymentSource)(eE.paymentSourceId),
    eM = (null == ef ? void 0 : ef.interval) === U.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eb = !en && (eT || null != ef && eP && null != Z),
    eO = null == J ? void 0 : null === (S = J.find(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === S ? void 0 : null === (a = S.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: eu ? H.stepBodyCustomGift : H.stepBody,
      children: [(0, i.jsxs)("div", {
        className: eu ? H.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(M.default, {
          fromBoostCancelModal: !1,
          className: H.legacyPricingNotice
        }), eu && null != es && (0, i.jsx)(L.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: eu ? H.bodyColumnRight : void 0,
        children: [(0, i.jsx)(F.SendGiftToUser, {
          giftRecipient: ei
        }), (() => {
          if (er === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != el) return (0, i.jsx)(R.default, {
            sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => el(e),
            pendingText: ea,
            currentText: ea
          })
        })(), null != ec && !en && (0, i.jsx)("div", {
          className: H.bodyText,
          children: function(e, t) {
            let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              s = (() => {
                switch (e.interval) {
                  case U.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case U.SubscriptionIntervalTypes.MONTH:
                  default:
                    return i
                }
              })(),
              a = e.skuId;
            switch (t) {
              case U.PremiumSubscriptionSKUs.TIER_0:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_1:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_2:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === U.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : s;
                  default:
                    return s
                }
              default:
                return s
            }
          }(ec, A)
        }), (_ = eP, E = eT, eu ? (0, i.jsx)(u.FormTitle, {
          children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
        }) : eb ? _ ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
              trialEnd: Z,
              trialPeriod: eM
            })
          }), (0, i.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : E && null != eO && null != eN ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
              numMonths: null == ep ? void 0 : ep.discount.user_usage_limit,
              discountedPrice: (0, x.formatPrice)(eN.amount - eO, eN.currency),
              regularPrice: (0, x.formatPrice)(eN.amount, eN.currency)
            })
          }), (0, i.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : void 0 : (0, i.jsx)("div", {
          className: H.selectPlanChooseTitle,
          children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
        })), (0, i.jsx)("div", {
          ...ev,
          children: Y.map(e => (0, i.jsx)(D.default, {
            planId: e,
            premiumSubscription: en ? null : null != N ? N : null,
            selectPlan: eI,
            selected: (null == e_ ? void 0 : e_.id) === e,
            priceOptions: eE,
            shouldShowUpdatedPaymentModal: eb,
            isEligibleForDiscount: eT,
            discountAmountOff: eO
          }, e))
        }), (0, i.jsx)("div", {
          children: ex && null != e_ && null != eA ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: H.selectPlanDivider
            }), (0, i.jsx)(b.PremiumInvoiceTableTotalRow, {
              label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(O.default, {
                price: eA.amount,
                currency: eA.currency,
                intervalType: en ? null : e_.interval,
                intervalCount: e_.intervalCount,
                isPrepaidPaymentSource: ey
              }),
              className: H.selectPlanTotalRow
            })]
          }) : null
        }), eg && (0, i.jsx)(o.default, {
          message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, x.formatPrice)(7.5345 * eA.amount, B.CurrencyCodes.HRK)
          })
        }), !en && !eb && z && (0, i.jsx)(o.default, {
          message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(w.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), eo && en && (0, i.jsx)(m.default, {
          onClose: X
        })]
      })]
    })
  })
}

function Y(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: s,
    onBackClick: a,
    showBackButton: l,
    planOptions: r,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: S
  } = (0, f.useGiftContext)();
  return s = null != s ? s : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && r.includes(n) ? (0, i.jsx)(K, {
      paymentSources: s,
      onStepChange: t,
      selectedPlanId: n,
      isGift: S,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: k.default.Messages.SELECT
    }), l ? (0, i.jsx)(j.default, {
      onClick: a
    }) : null]
  })
}

function K(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: s,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: l,
    isTrial: o
  } = e, c = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, G.useSubscriptionEntitlements)(n, s), m = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
  var f = l ? k.default.Messages.NEXT : k.default.Messages.SELECT,
    p = S.Step.ADD_PAYMENT_STEPS;
  return m ? p = S.Step.REVIEW : (0, N.isDesktop)() && function() {
    let {
      experiment: e
    } = A.default.getCurrentConfig({
      location: "5f89bb_2"
    });
    if (e === A.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
      let {
        enabled: e
      } = _.default.getCurrentConfig({
        location: "5f89bb_3"
      }, {
        autoTrackExposure: !0
      });
      return e
    }
    return !1
  }() && (p = S.Step.AWAITING_BROWSER_CHECKOUT, f = k.default.Messages.CONTINUE_IN_BROWSER), (0, i.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}