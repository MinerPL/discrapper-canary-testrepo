"use strict";
t.r(s), t.d(s, {
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return L
  },
  default: function() {
    return M
  }
}), t("47120"), t("411104");
var a = t("735250"),
  l = t("470079"),
  n = t("512722"),
  _ = t.n(n),
  u = t("442837"),
  i = t("481060"),
  I = t("16084"),
  r = t("987209"),
  d = t("179118"),
  o = t("912788"),
  E = t("509545"),
  N = t("55563"),
  T = t("74538"),
  R = t("741245"),
  c = t("474936"),
  S = t("981631"),
  f = t("689938"),
  A = t("17974");

function P(e) {
  var s, t;
  let l, {
      planId: n,
      startingPremiumSubscriptionPlanId: i,
      paymentSourceType: I
    } = e,
    [r, d] = (0, u.useStateFromStoresArray)([E.default], () => [E.default.get(i), E.default.get(n)]);
  if (_()(null != r && null != d, "Missing startingPlan or newPlan"), s = i, t = n, c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (n) {
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case c.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case c.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (r.skuId === c.PremiumSubscriptionSKUs.TIER_2 && d.skuId === c.PremiumSubscriptionSKUs.TIER_1) l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (d.skuId) {
      case c.PremiumSubscriptionSKUs.TIER_0:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case c.PremiumSubscriptionSKUs.TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case c.PremiumSubscriptionSKUs.TIER_2:
        l = 1 !== r.intervalCount ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(d.skuId))
    }
  return (0, a.jsx)("div", {
    className: A.text,
    children: l
  })
}

function M(e) {
  let s, t, {
      planId: n,
      enableNoPaymentTrial: r,
      startingPremiumSubscriptionPlanId: d,
      onClose: o,
      followupSKUInfo: M,
      isDowngrade: L,
      hideClose: C,
      postSuccessGuild: O,
      paymentSourceType: p
    } = e,
    {
      theme: m
    } = (0, i.useThemeContext)(),
    g = (0, u.useStateFromStores)([N.default], () => null != M ? N.default.get(M.id) : null);
  l.useEffect(() => {
    if (null == M || null != g) return;
    let {
      applicationId: e,
      id: s
    } = M;
    (0, I.fetchSKU)(e, s).catch(S.NOOP_NULL)
  }, [M, g]);
  let U = e => {
    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_0) return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_1) return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : r ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != g) s = (0, a.jsx)("div", {
    className: A.text,
    children: f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: g.name
    })
  });
  else if (null != d) s = (0, a.jsx)(P, {
    planId: n,
    startingPremiumSubscriptionPlanId: d
  });
  else if (null != O) {
    let e = E.default.get(n);
    _()(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: A.text,
        children: U(e)
      }), (0, a.jsx)("div", {
        className: A.text,
        children: f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: O.name
        })
      })]
    })
  } else {
    let e = E.default.get(n);
    _()(null != e, "Missing plan"), s = (0, a.jsx)("div", {
      className: A.text,
      children: U(e)
    })
  }
  let h = T.default.getPremiumType(n);
  return _()(null != h, "premium type should not be null in purchase confirmation"), t = null != g ? f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: g.name
  }) : L ? f.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != O ? f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : f.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
    className: A.confirmation,
    children: [(0, a.jsx)(R.default, {
      className: A.banner,
      theme: m,
      premiumType: h,
      type: S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
    }), s, C ? null : (0, a.jsx)(i.Button, {
      onClick: o,
      children: t
    })]
  })
}

function L(e) {
  let {
    planId: s,
    onClose: t
  } = e, {
    giftRecipient: l,
    selectedGiftStyle: n,
    hasSentMessage: i,
    giftMessageError: I,
    isSendingMessage: N
  } = (0, r.useGiftContext)(), T = (0, u.useStateFromStores)([E.default], () => E.default.get(s));
  _()(null != T, "Missing plan");
  let R = (0, u.useStateFromStores)([o.default], () => o.default.getGiftCode(T.skuId));
  return (0, a.jsx)(d.default, {
    giftCode: R,
    subscriptionPlan: T,
    onClose: t,
    selectedGiftStyle: n,
    hasSentMessage: i,
    giftRecipient: l,
    giftMessageError: I,
    isSendingMessage: N
  })
}