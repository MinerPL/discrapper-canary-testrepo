"use strict";
t.r(s), t.d(s, {
  default: function() {
    return M
  },
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return L
  }
}), t("222007"), t("70102");
var a = t("37983"),
  _ = t("884691"),
  l = t("627445"),
  I = t.n(l),
  u = t("446674"),
  n = t("77078"),
  i = t("465527"),
  r = t("635357"),
  N = t("891865"),
  E = t("353365"),
  T = t("10514"),
  d = t("552712"),
  S = t("719923"),
  R = t("977934"),
  f = t("646718"),
  A = t("49111"),
  P = t("782340"),
  o = t("766593");

function c(e) {
  var s, t;
  let _, {
      planId: l,
      startingPremiumSubscriptionPlanId: n,
      paymentSourceType: i
    } = e,
    [r, N] = (0, u.useStateFromStoresArray)([T.default], () => [T.default.get(n), T.default.get(l)]);
  if (I(null != r && null != N, "Missing startingPlan or newPlan"), s = n, t = l, f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (l) {
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, A.DELAYED_PAYMENTS.has(null != i ? i : A.PaymentSourceTypes.UNKNOWN) && (_ = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, A.DELAYED_PAYMENTS.has(null != i ? i : A.PaymentSourceTypes.UNKNOWN) && (_ = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, A.DELAYED_PAYMENTS.has(null != i ? i : A.PaymentSourceTypes.UNKNOWN) && (_ = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), A.DELAYED_PAYMENTS.has(null != i ? i : A.PaymentSourceTypes.UNKNOWN) && (_ = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case f.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case f.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(l))
    } else if (r.skuId === f.PremiumSubscriptionSKUs.TIER_2 && N.skuId === f.PremiumSubscriptionSKUs.TIER_1) _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (N.skuId) {
      case f.PremiumSubscriptionSKUs.TIER_0:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case f.PremiumSubscriptionSKUs.TIER_1:
        _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case f.PremiumSubscriptionSKUs.TIER_2:
        _ = 1 !== r.intervalCount ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(N.skuId))
    }
  return (0, a.jsx)("div", {
    className: o.text,
    children: _
  })
}

function M(e) {
  let s, t, {
      planId: l,
      enableNoPaymentTrial: r,
      startingPremiumSubscriptionPlanId: N,
      onClose: E,
      followupSKUInfo: M,
      isDowngrade: L,
      hideClose: O,
      postSuccessGuild: C,
      paymentSourceType: m
    } = e,
    {
      theme: g
    } = (0, n.useThemeContext)(),
    U = (0, u.useStateFromStores)([d.default], () => null != M ? d.default.get(M.id) : null);
  _.useEffect(() => {
    if (null == M || null != U) return;
    let {
      applicationId: e,
      id: s
    } = M;
    (0, i.fetchSKU)(e, s).catch(A.NOOP_NULL)
  }, [M, U]);
  let p = e => {
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0) return A.DELAYED_PAYMENTS.has(null != m ? m : A.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1) return A.DELAYED_PAYMENTS.has(null != m ? m : A.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return A.DELAYED_PAYMENTS.has(null != m ? m : A.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : r ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != U) s = (0, a.jsx)("div", {
    className: o.text,
    children: P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: U.name
    })
  });
  else if (null != N) s = (0, a.jsx)(c, {
    planId: l,
    startingPremiumSubscriptionPlanId: N
  });
  else if (null != C) {
    let e = T.default.get(l);
    I(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: o.text,
        children: p(e)
      }), (0, a.jsx)("div", {
        className: o.text,
        children: P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: C.name
        })
      })]
    })
  } else {
    let e = T.default.get(l);
    I(null != e, "Missing plan"), s = (0, a.jsx)("div", {
      className: o.text,
      children: p(e)
    })
  }
  let F = S.default.getPremiumType(l);
  return I(null != F, "premium type should not be null in purchase confirmation"), t = null != U ? P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: U.name
  }) : L ? P.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != C ? P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : P.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
    className: o.confirmation,
    children: [(0, a.jsx)(R.default, {
      className: o.banner,
      theme: g,
      premiumType: F,
      type: A.DELAYED_PAYMENTS.has(null != m ? m : A.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != N ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
    }), s, O ? null : (0, a.jsx)(n.Button, {
      onClick: E,
      children: t
    })]
  })
}

function L(e) {
  let {
    planId: s,
    onClose: t
  } = e, {
    giftRecipient: _,
    selectedGiftStyle: l,
    hasSentMessage: n,
    giftMessageError: i,
    isSendingMessage: d
  } = (0, r.useGiftContext)(), S = (0, u.useStateFromStores)([T.default], () => T.default.get(s));
  I(null != S, "Missing plan");
  let R = (0, u.useStateFromStores)([E.default], () => E.default.getGiftCode(S.skuId));
  return (0, a.jsx)(N.default, {
    giftCode: R,
    subscriptionPlan: S,
    onClose: t,
    selectedGiftStyle: l,
    hasSentMessage: n,
    giftRecipient: _,
    giftMessageError: i,
    isSendingMessage: d
  })
}