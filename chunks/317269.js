n.d(s, {
  TB: function() {
return j;
  },
  VY: function() {
return T;
  },
  ZP: function() {
return N;
  }
}), n(47120), n(411104);
var t = n(735250),
  i = n(470079),
  r = n(512722),
  l = n.n(r),
  a = n(442837),
  o = n(481060),
  C = n(16084),
  d = n(987209),
  u = n(179118),
  c = n(912788),
  _ = n(509545),
  p = n(55563),
  x = n(74538),
  L = n(741245),
  h = n(474936),
  f = n(981631),
  I = n(689938),
  E = n(308445);

function M(e) {
  var s, n;
  let i, {
  planId: r,
  startingPremiumSubscriptionPlanId: o,
  paymentSourceType: C
} = e,
[d, u] = (0, a.Wu)([_.Z], () => [
  _.Z.get(o),
  _.Z.get(r)
]);
  if (l()(null != d && null != u, 'Missing startingPlan or newPlan'), s = o, n = r, h.Y1.indexOf(s) < h.Y1.indexOf(n))
switch (r) {
  case h.Xh.PREMIUM_MONTH_TIER_1:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
    break;
  case h.Xh.PREMIUM_MONTH_TIER_2:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
    break;
  case h.Xh.PREMIUM_YEAR_TIER_1:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
    break;
  case h.Xh.PREMIUM_YEAR_TIER_2:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
      numFreeGuildSubscriptions: h.cb
    }), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
      numFreeGuildSubscriptions: h.cb
    }));
    break;
  case h.Xh.PREMIUM_3_MONTH_TIER_2:
  case h.Xh.PREMIUM_6_MONTH_TIER_2:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
    break;
  case h.Xh.PREMIUM_MONTH_TIER_0:
  case h.Xh.PREMIUM_YEAR_TIER_0:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
    break;
  default:
    throw Error('Unexpected planId: '.concat(r));
}
  else if (d.skuId === h.Si.TIER_2 && u.skuId === h.Si.TIER_1)
i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
  else
switch (u.skuId) {
  case h.Si.TIER_0:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
    break;
  case h.Si.TIER_1:
    i = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
    break;
  case h.Si.TIER_2:
    i = 1 !== d.intervalCount ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
    break;
  default:
    throw Error('Unexpected skuId: '.concat(u.skuId));
}
  return (0, t.jsx)('div', {
className: E.text,
children: i
  });
}

function N(e) {
  let s, n, {
  planId: r,
  enableNoPaymentTrial: d,
  startingPremiumSubscriptionPlanId: u,
  onClose: c,
  followupSKUInfo: N,
  isDowngrade: j,
  hideClose: T,
  postSuccessGuild: g,
  paymentSourceType: m
} = e,
{
  theme: A
} = (0, o.useThemeContext)(),
O = (0, a.e7)([p.Z], () => null != N ? p.Z.get(N.id) : null);
  i.useEffect(() => {
if (null == N || null != O)
  return;
let {
  applicationId: e,
  id: s
} = N;
(0, C.$N)(e, s).catch(f.VqG);
  }, [
N,
O
  ]);
  let S = e => {
if (e.skuId === h.Si.TIER_0)
  return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
if (e.skuId === h.Si.TIER_1)
  return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
  };
  if (null != O)
s = (0, t.jsx)('div', {
  className: E.text,
  children: I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
    skuName: O.name
  })
});
  else if (null != u)
s = (0, t.jsx)(M, {
  planId: r,
  startingPremiumSubscriptionPlanId: u
});
  else if (null != g) {
let e = _.Z.get(r);
l()(null != e, 'Missing plan'), s = (0, t.jsxs)(t.Fragment, {
  children: [
    (0, t.jsx)('div', {
      className: E.text,
      children: S(e)
    }),
    (0, t.jsx)('div', {
      className: E.text,
      children: I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
        guildName: g.name
      })
    })
  ]
});
  } else {
let e = _.Z.get(r);
l()(null != e, 'Missing plan'), s = (0, t.jsx)('div', {
  className: E.text,
  children: S(e)
});
  }
  let R = x.ZP.getPremiumType(r);
  return l()(null != R, 'premium type should not be null in purchase confirmation'), n = null != O ? I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
skuName: O.name
  }) : j ? I.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != g ? I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : I.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, t.jsxs)('div', {
className: E.confirmation,
children: [
  (0, t.jsx)(L.C, {
    className: E.banner,
    theme: A,
    premiumType: R,
    type: f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? L.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? L.C.Types.PREMIUM_UPDATED : L.C.Types.PREMIUM_ACTIVATED
  }),
  s,
  T ? null : (0, t.jsx)(o.Button, {
    onClick: c,
    children: n
  })
]
  });
}

function j(e) {
  let {
planId: s,
onClose: n
  } = e, {
giftRecipient: i,
selectedGiftStyle: r,
hasSentMessage: o,
giftMessageError: C,
isSendingMessage: p
  } = (0, d.wD)(), x = (0, a.e7)([_.Z], () => _.Z.get(s));
  l()(null != x, 'Missing plan');
  let L = (0, a.e7)([c.Z], () => c.Z.getGiftCode(x.skuId));
  return (0, t.jsx)(u.Z, {
giftCode: L,
subscriptionPlan: x,
onClose: n,
selectedGiftStyle: r,
hasSentMessage: o,
giftRecipient: i,
giftMessageError: C,
isSendingMessage: p
  });
}

function T() {
  return (0, t.jsxs)('div', {
className: E.redirectConfirmation,
children: [
  (0, t.jsx)(o.Heading, {
    variant: 'heading-xl/bold',
    children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
  }),
  (0, t.jsxs)('div', {
    className: E.redirectBody,
    children: [
      (0, t.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }),
      (0, t.jsx)('br', {}),
      (0, t.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })
    ]
  })
]
  });
}