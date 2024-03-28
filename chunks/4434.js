"use strict";
t.r(n), t.d(n, {
  GuildBoostingConfirmation: function() {
    return et
  },
  GuildBoostingPlanSelect: function() {
    return $
  },
  GuildBoostingReview: function() {
    return en
  }
}), t("653041"), t("47120"), t("724458");
var i = t("735250"),
  a = t("470079"),
  l = t("803997"),
  s = t.n(l),
  r = t("512722"),
  u = t.n(r),
  o = t("742280"),
  c = t("442837"),
  d = t("692547"),
  I = t("481060"),
  m = t("224550"),
  _ = t("490504"),
  S = t("275850"),
  P = t("672971"),
  p = t("100527"),
  f = t("906732"),
  T = t("374649"),
  E = t("591548"),
  N = t("847903"),
  C = t("639119"),
  U = t("53900"),
  R = t("653798"),
  L = t("553797"),
  v = t("741245"),
  O = t("314182"),
  A = t("42818"),
  M = t("900683"),
  g = t("706454"),
  y = t("430824"),
  x = t("246946"),
  D = t("594174"),
  b = t("351402"),
  G = t("853872"),
  h = t("509545"),
  j = t("672752"),
  B = t("298193"),
  H = t("300395"),
  w = t("709586"),
  F = t("759231"),
  W = t("267642"),
  k = t("63063"),
  Y = t("930153"),
  V = t("74538"),
  K = t("937615"),
  q = t("588797"),
  J = t("981631"),
  Q = t("474936"),
  X = t("231338"),
  Z = t("689938"),
  z = t("734177");

function $(e) {
  var n, t;
  let {
    guildId: a,
    premiumSubscriptionPlan: l,
    numGuildBoosts: r,
    setNumGuildBoosts: o,
    setForceDisableSubmitButton: m,
    premiumSubscription: S,
    onClickPremiumSubscriptionLink: P,
    existingAvailableSlots: E = [],
    priceOptions: R
  } = e, v = (0, U.default)(), O = l.interval, A = l.intervalCount, x = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval((0, V.castPremiumSubscriptionAsSkuId)(Q.PremiumSubscriptionSKUs.GUILD), O, A)), b = (0, c.useStateFromStores)([D.default], () => D.default.getCurrentUser()), G = (0, c.useStateFromStores)([y.default], () => y.default.getGuild(a), [a]);
  u()(null != x, "Missing guildBoostingSubscriptionPlan"), u()(null != G, "Unknown guild: ".concat(a));
  let H = [{
      planId: x.id,
      quantity: 1
    }],
    $ = null == S ? void 0 : S.items.find(e => e.planId === Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2 || e.planId === Q.SubscriptionPlans.PREMIUM_YEAR_TIER_2);
  null != $ && H.push($);
  let ee = null == S ? void 0 : S.items.find(e => e.planId === Q.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.planId === Q.SubscriptionPlans.PREMIUM_YEAR_GUILD),
    {
      enabled: en
    } = q.default.useExperiment({
      location: "32b64a_1"
    }),
    et = !en || null == v || !Q.LegacyPricingCountries.has(v) || null == ee,
    {
      analyticsLocations: ei
    } = (0, f.default)(),
    [ea, el] = (0, T.useSubscriptionInvoicePreview)({
      subscriptionId: null == S ? void 0 : S.id,
      items: H,
      renewal: !0,
      paymentSourceId: null == S ? void 0 : S.paymentSourceId,
      currency: R.currency,
      preventFetch: et,
      analyticsLocations: ei,
      analyticsLocation: p.default.GUILD_BOOSTING_PLAN_SELECT
    }),
    es = !et && null == ea && null == el,
    er = (null === (t = (0, C.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === Q.PremiumSubscriptionSKUs.TIER_2,
    eu = V.default.hasBoostDiscount(b) && null != x.premiumUserPrice,
    eo = null == ea ? void 0 : ea.invoiceItems.find(e => e.subscriptionPlanId === x.id),
    ec = null != eo ? {
      amount: eo.amount,
      tax: 0,
      taxInclusive: !0,
      currency: R.currency
    } : V.default.getPrice(x.id, eu, !1, R),
    ed = r * ec.amount,
    eI = V.default.hasBoostDiscount(b) && null != S ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({
      planName: V.default.getDisplayPremiumType(S.planId)
    }) : (er ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
      onPremiumSubscriptionClick: P,
      discountPercentage: (0, Y.formatPercent)(g.default.locale, Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100),
      freeSubscriptionCount: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
    }),
    em = E.filter(e => (0, W.isGuildBoostSlotCanceled)(e)).length,
    e_ = (0, V.isPrepaidPaymentSource)(R.paymentSourceId),
    {
      ipCountryCode: eS
    } = (0, N.default)(),
    eP = "HR" === eS && ec.currency === X.CurrencyCodes.EUR;
  return m(es), (0, i.jsxs)("div", {
    className: z.planSelectStep,
    children: [(0, i.jsx)("div", {
      className: s()(z.planSelectText, z.bodyText),
      children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
    }), E.length > 0 ? (0, i.jsxs)("div", {
      className: z.existingSlotNotice,
      children: [(0, i.jsx)(w.default, {
        className: z.existingSlotIcon,
        color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }), (0, i.jsxs)("div", {
        children: [Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({
          slotCount: E.length
        }), em > 0 && null != S ? (0, i.jsx)(I.Tooltip, {
          text: Z.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
            canceledCount: em,
            date: S.currentPeriodEnd
          }),
          children: e => (0, i.jsx)(F.default, {
            ...e,
            className: z.existingSlotTooltipWarningIcon,
            color: d.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : null]
      })]
    }) : null, (0, i.jsxs)("div", {
      className: z.planSelectRow,
      children: [(0, i.jsxs)("div", {
        className: z.planSelectorWrapper,
        children: [(0, i.jsx)(B.default, {
          value: r,
          onChange: e => o(e),
          className: z.__invalid_planSelector,
          minValue: 1,
          maxValue: 30
        }), (0, i.jsx)("div", {
          className: z.planSelectorLabel,
          children: e_ ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === Q.SubscriptionIntervalTypes.YEAR ? Z.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === Q.SubscriptionIntervalTypes.MONTH && 1 === t ? Z.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null
          }({
            intervalType: O,
            intervalCount: A
          }) : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
        })]
      }), (0, i.jsx)("div", {
        className: s()(z.planSelectorPreviewPrice, {
          [z.loadingSpinner]: es
        }),
        children: es ? (0, i.jsx)(I.Spinner, {}) : e_ ? (0, K.formatPrice)(ec.amount, ec.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: a = 1
          } = e, l = (0, K.formatPrice)(n, t);
          if (i === Q.SubscriptionIntervalTypes.YEAR) return Z.default.Messages.BILLING_PRICE_PER_YEAR_EACH.format({
            price: l
          });
          if (i === Q.SubscriptionIntervalTypes.MONTH && 1 === a) return Z.default.Messages.BILLING_PRICE_PER_MONTH_EACH.format({
            price: l
          });
          if (i === Q.SubscriptionIntervalTypes.MONTH && a > 1) return Z.default.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({
            price: l
          });
          return null
        }({
          intervalType: O,
          intervalCount: A,
          amount: ec.amount,
          currency: ec.currency
        })
      })]
    }), (0, i.jsx)("div", {
      className: z.planSelectDivider
    }), (0, i.jsxs)("div", {
      className: z.planSelectRow,
      children: [(0, i.jsx)("div", {
        className: z.planSelectorSubtotal,
        children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
      }), (0, i.jsx)("div", {
        className: s()(z.__invalid_planSelectorSubtotalPrice, {
          [z.loadingSpinner]: es
        }),
        children: es ? (0, i.jsx)(I.Spinner, {}) : (0, i.jsx)(L.default, {
          price: ed,
          currency: ec.currency,
          intervalType: O,
          intervalCount: A,
          isPrepaidPaymentSource: e_
        })
      })]
    }), eP && (0, i.jsx)(_.default, {
      message: Z.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
        kunaPriceWithCurrency: (0, K.formatPrice)(7.5345 * ed, X.CurrencyCodes.HRK)
      })
    }), (0, i.jsx)(_.default, {
      message: Z.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
        documentationLink: k.default.getArticleURL(J.HelpdeskArticles.LOCALIZED_PRICING)
      })
    }), (0, i.jsx)(M.default, {
      text: eI,
      color: j.GradientCssUrls.PREMIUM_TIER_2
    })]
  })
}

function ee(e) {
  let {
    premiumSubscription: n,
    premiumSubscriptionPlan: t,
    proratedInvoicePreview: a,
    renewalInvoicePreview: l,
    priceOptions: s
  } = e, r = t.interval, o = t.intervalCount, d = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval((0, V.castPremiumSubscriptionAsSkuId)(Q.PremiumSubscriptionSKUs.GUILD), r, o));
  u()(null != d, "Missing guildBoostingSubscriptionPlan");
  let I = e => (0, E.coalesceInvoiceItems)(a.invoiceItems).find(n => Q.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(n.subscriptionPlanId) && e(n)),
    m = I(e => e.amount >= 0);
  u()(null != m, "Missing guild boosting invoice item");
  let _ = I(e => e.amount < 0),
    S = null != _ ? m.quantity - _.quantity : m.quantity,
    P = a.invoiceItems.filter(e => (0, V.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId)),
    p = P.reduce((e, n) => e + n.amount, 0),
    f = (0, T.getItemUnitPriceWithDiscount)(m) * S,
    N = (0, K.formatPrice)(f, a.currency),
    C = (0, K.formatRate)(N, r, o),
    U = (0, K.formatPrice)(a.total, a.currency) + (a.currency !== X.CurrencyCodes.USD ? "*" : ""),
    L = a.total - f - p,
    v = m.discounts.map(e => {
      let n = e.amount / m.quantity;
      return {
        ...e,
        amount: n * S
      }
    }),
    O = (0, V.isPrepaidPaymentSource)(s.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [O ? null : (0, i.jsx)(A.SubscriptionPeriodResetNotice, {
      proratedInvoice: a,
      renewalInvoice: l
    }), (0, i.jsxs)(R.PremiumInvoiceTable, {
      children: [(0, i.jsx)(R.PremiumInvoiceTableHeader, {
        children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER
      }), (0, i.jsx)(R.PremiumInvoiceDiscountedTableRow, {
        label: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
          numGuildSubscriptions: S,
          planName: (0, V.getDisplayName)(d.id, !1, O)
        }),
        value: O ? N : C,
        discounts: v,
        originalAmount: m.subscriptionPlanPrice * S,
        currency: a.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== p ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
        label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
          label: Z.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
            planName: (0, V.getTierDisplayName)(P[0].subscriptionPlanId)
          }),
          tooltipText: Z.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
        }),
        value: (0, K.formatPrice)(p, a.currency)
      }) : null, 0 !== L ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
        label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
          label: Z.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
          tooltipText: Z.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
        }),
        value: (0, K.formatPrice)(L, a.currency)
      }) : null, (0, i.jsx)(R.PremiumInvoiceTableDivider, {}), (0, i.jsx)(R.PremiumInvoiceTableTotalRow, {
        label: (a.taxInclusive ? O ? Z.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : Z.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : Z.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
        value: U
      }), null != n ? (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        proratedInvoice: a,
        renewalInvoice: l,
        isUpdate: !0,
        isPrepaidPaymentSource: O
      }) : (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        renewalInvoice: l,
        priceOptions: s,
        isPrepaidPaymentSource: O
      })]
    })]
  })
}

function en(e) {
  var n, t;
  let a, l, {
      paymentSources: s,
      priceOptions: r,
      currentPremiumSubscription: u,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: _,
      newAdditionalPlans: E,
      onPaymentSourceChange: N,
      onPaymentSourceAdd: C,
      onPurchaseTermsChange: U,
      legalTermsNodeRef: R,
      hasLegalTermsFlash: L
    } = e,
    v = r.paymentSourceId,
    A = (0, c.useStateFromStores)([G.default], () => null != d ? G.default.getPaymentSource(d) : null),
    M = (0, c.useStateFromStores)([x.default], () => x.default.hidePersonalInformation);
  a = null != u ? (0, V.getItemsWithUpsertedPremiumGuildPlan)(u, E[0].quantity, E[0].planId) : E;
  let {
    analyticsLocations: g
  } = (0, f.default)(), [y] = (0, T.useSubscriptionInvoicePreview)({
    subscriptionId: null == u ? void 0 : u.id,
    items: a,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: v,
    currency: r.currency,
    analyticsLocations: g,
    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_PRORATED
  }), [D] = (0, T.useSubscriptionInvoicePreview)({
    subscriptionId: null == u ? void 0 : u.id,
    items: a,
    renewal: !0,
    paymentSourceId: v,
    currency: r.currency,
    analyticsLocations: g,
    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != D && (l = {
    amount: D.total,
    currency: D.currency,
    tax: D.tax,
    taxInclusive: D.taxInclusive
  });
  let h = o.CountryCodesSets.EEA_COUNTRIES.has(b.default.ipCountryCodeWithFallback);
  return (0, i.jsxs)("div", {
    className: z.reviewStep,
    children: [null != y && null != D ? (0, i.jsx)(ee, {
      premiumSubscription: u,
      premiumSubscriptionPlan: _,
      proratedInvoicePreview: y,
      renewalInvoicePreview: D,
      priceOptions: r
    }) : null, (0, i.jsxs)("div", {
      className: z.paymentSourceWrapper,
      children: [(0, i.jsx)(I.FormTitle, {
        tag: I.FormTitleTags.H5,
        children: Z.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), null != d ? null != A ? (0, i.jsx)(I.TooltipContainer, {
        text: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
        children: (0, i.jsx)(S.default, {
          paymentSources: [A],
          selectedPaymentSourceId: A.id,
          hidePersonalInformation: M,
          disabled: !0
        })
      }) : (0, i.jsx)("div", {
        children: (0, i.jsx)(I.Spinner, {})
      }) : (0, i.jsx)(S.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: v,
        onChange: N,
        onPaymentSourceAdd: C,
        hidePersonalInformation: M
      })]
    }), (0, i.jsx)(O.default, {
      isActive: L,
      ref: R,
      children: null != l && (0, i.jsx)(P.default, {
        onChange: U,
        forceShow: !0,
        finePrint: (0, i.jsx)(m.default, {
          subscriptionPlan: _,
          paymentSourceType: null === (n = s[null != v ? v : ""]) || void 0 === n ? void 0 : n.type,
          basePrice: l
        }),
        showPricingLink: (null !== (t = null == y ? void 0 : y.currency) && void 0 !== t ? t : X.CurrencyCodes.USD) !== X.CurrencyCodes.USD,
        showWithdrawalWaiver: h,
        subscriptionPlan: _
      })
    })]
  })
}

function et(e) {
  let n, {
      onClose: t,
      guild: l,
      guildBoostQuantity: s,
      isTransfer: r = !1,
      withAnimation: u = !0,
      paymentSourceType: o
    } = e,
    {
      theme: c
    } = (0, I.useThemeContext)(),
    [d, m] = a.useState(H.PremiumPaymentGuildAnimation.Scenes.ENTRY),
    [_, S] = a.useState(!1);
  return n = r ? null == l ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format() : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({
    guildName: l.name
  }) : null == l ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({
    guildSubscriptionQuantity: s
  }) : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
    guildName: l.name,
    guildSubscriptionQuantity: s
  }), (0, i.jsxs)("div", {
    className: z.confirmationContainer,
    children: [u ? (0, i.jsx)(H.PremiumPaymentGuildAnimation, {
      className: z.confirmationAnimation,
      nextScene: d,
      onScenePlay: e => {
        if (!_) switch (e) {
          case H.PremiumPaymentGuildAnimation.Scenes.ENTRY:
            return m(H.PremiumPaymentGuildAnimation.Scenes.IDLE);
          case H.PremiumPaymentGuildAnimation.Scenes.IDLE:
            return m(H.PremiumPaymentGuildAnimation.Scenes.SUCCESS);
          case H.PremiumPaymentGuildAnimation.Scenes.SUCCESS:
            return S(!0), m(H.PremiumPaymentGuildAnimation.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: !1
    }) : null, (0, i.jsx)(v.default, {
      className: z.confirmationUpgradedBanner,
      theme: c,
      premiumType: Q.PremiumTypes.TIER_2,
      type: X.DELAYED_PAYMENTS.has(null != o ? o : X.PaymentSourceTypes.UNKNOWN) ? v.default.Types.PREMIUM_PAYMENT_STARTED : v.default.Types.GUILD_BOOST_APPLIED
    }), (0, i.jsx)("div", {
      className: z.confirmationText,
      children: n
    }), (0, i.jsx)(I.Button, {
      onClick: t,
      children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
    })]
  })
}