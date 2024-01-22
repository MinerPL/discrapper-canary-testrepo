"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  },
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return C
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("446674"),
  u = n("77078"),
  o = n("465527"),
  d = n("635357"),
  c = n("891865"),
  _ = n("353365"),
  f = n("10514"),
  I = n("552712"),
  E = n("719923"),
  S = n("977934"),
  m = n("646718"),
  P = n("49111"),
  p = n("782340"),
  T = n("535539");

function N(e) {
  var t, n;
  let a, {
      planId: l,
      startingPremiumSubscriptionPlanId: u,
      paymentSourceType: o
    } = e,
    [d, c] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.get(u), f.default.get(l)]);
  if (r(null != d && null != c, "Missing startingPlan or newPlan"), t = u, n = l, m.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < m.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(n)) switch (l) {
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, P.DELAYED_PAYMENTS.has(null != o ? o : P.PaymentSourceTypes.UNKNOWN) && (a = p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, P.DELAYED_PAYMENTS.has(null != o ? o : P.PaymentSourceTypes.UNKNOWN) && (a = p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, P.DELAYED_PAYMENTS.has(null != o ? o : P.PaymentSourceTypes.UNKNOWN) && (a = p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: m.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), P.DELAYED_PAYMENTS.has(null != o ? o : P.PaymentSourceTypes.UNKNOWN) && (a = p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: m.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case m.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case m.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(l))
    } else if (d.skuId === m.PremiumSubscriptionSKUs.TIER_2 && c.skuId === m.PremiumSubscriptionSKUs.TIER_1) a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (c.skuId) {
      case m.PremiumSubscriptionSKUs.TIER_0:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case m.PremiumSubscriptionSKUs.TIER_1:
        a = p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case m.PremiumSubscriptionSKUs.TIER_2:
        a = 1 !== d.intervalCount ? p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, s.jsx)("div", {
    className: T.text,
    children: a
  })
}

function M(e) {
  let t, n, {
      planId: l,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: c,
      onClose: _,
      followupSKUInfo: M,
      isDowngrade: C,
      hideClose: L,
      postSuccessGuild: R,
      paymentSourceType: A
    } = e,
    {
      theme: g
    } = (0, u.useThemeContext)(),
    O = (0, i.useStateFromStores)([I.default], () => null != M ? I.default.get(M.id) : null);
  a.useEffect(() => {
    if (null == M || null != O) return;
    let {
      applicationId: e,
      id: t
    } = M;
    (0, o.fetchSKU)(e, t).catch(P.NOOP_NULL)
  }, [M, O]);
  let x = e => {
    if (e.skuId === m.PremiumSubscriptionSKUs.TIER_0) return P.DELAYED_PAYMENTS.has(null != A ? A : P.PaymentSourceTypes.UNKNOWN) ? p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === m.PremiumSubscriptionSKUs.TIER_1) return P.DELAYED_PAYMENTS.has(null != A ? A : P.PaymentSourceTypes.UNKNOWN) ? p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return P.DELAYED_PAYMENTS.has(null != A ? A : P.PaymentSourceTypes.UNKNOWN) ? p.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : p.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != O) t = (0, s.jsx)("div", {
    className: T.text,
    children: p.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: O.name
    })
  });
  else if (null != c) t = (0, s.jsx)(N, {
    planId: l,
    startingPremiumSubscriptionPlanId: c
  });
  else if (null != R) {
    let e = f.default.get(l);
    r(null != e, "Missing plan"), t = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: T.text,
        children: x(e)
      }), (0, s.jsx)("div", {
        className: T.text,
        children: p.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: R.name
        })
      })]
    })
  } else {
    let e = f.default.get(l);
    r(null != e, "Missing plan"), t = (0, s.jsx)("div", {
      className: T.text,
      children: x(e)
    })
  }
  let h = E.default.getPremiumType(l);
  return r(null != h, "premium type should not be null in purchase confirmation"), n = null != O ? p.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: O.name
  }) : C ? p.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != R ? p.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : p.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, s.jsxs)("div", {
    className: T.confirmation,
    children: [(0, s.jsx)(S.default, {
      className: T.banner,
      theme: g,
      premiumType: h,
      type: P.DELAYED_PAYMENTS.has(null != A ? A : P.PaymentSourceTypes.UNKNOWN) ? S.default.Types.PREMIUM_PAYMENT_STARTED : null != c ? S.default.Types.PREMIUM_UPDATED : S.default.Types.PREMIUM_ACTIVATED
    }), t, L ? null : (0, s.jsx)(u.Button, {
      onClick: _,
      children: n
    })]
  })
}

function C(e) {
  let {
    planId: t,
    onClose: n
  } = e, {
    giftRecipient: a,
    selectedGiftStyle: l,
    hasSentMessage: u,
    giftMessageError: o,
    isSendingMessage: I
  } = (0, d.useGiftContext)(), E = (0, i.useStateFromStores)([f.default], () => f.default.get(t));
  r(null != E, "Missing plan");
  let S = (0, i.useStateFromStores)([_.default], () => _.default.getGiftCode(E.skuId));
  return (0, s.jsx)(c.default, {
    giftCode: S,
    subscriptionPlan: E,
    onClose: n,
    selectedGiftStyle: l,
    hasSentMessage: u,
    giftRecipient: a,
    giftMessageError: o,
    isSendingMessage: I
  })
}