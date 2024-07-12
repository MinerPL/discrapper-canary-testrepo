s.d(t, {
  R: function() {
return G;
  }
}), s(411104);
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(512722),
  o = s.n(r),
  l = s(481060),
  c = s(366939),
  d = s(100527),
  _ = s(906732),
  E = s(710845),
  u = s(963249),
  T = s(301766),
  I = s(509545),
  S = s(931331),
  N = s(754347),
  C = s(122289),
  m = s(74538),
  A = s(212895),
  h = s(296848),
  g = s(140465),
  O = s(879463),
  p = s(104494),
  R = s(987997),
  x = s(833569),
  M = s(823188),
  D = s(474936),
  f = s(981631),
  P = s(689938),
  L = s(464165);
let Z = new E.Z('SubscriptionHeader.tsx'),
  b = {
page: f.ZY5.USER_SETTINGS,
section: f.jXE.SETTINGS_PREMIUM,
object: f.qAy.CARD
  },
  v = [
f.O0b.PAUSED,
f.O0b.PAUSE_PENDING,
f.O0b.BILLING_RETRY
  ];

function j(e) {
  let {
wordMark: t,
subscriptionInfo: s,
buttons: a,
statusClasses: r,
shouldUseDiscountMarketing: o,
discountAmount: l
  } = e;
  return (0, n.jsxs)('div', {
className: i()(L.banner, r),
children: [
  (0, n.jsx)('div', {
    className: L.bannerBackgroundImage
  }),
  (0, n.jsxs)('div', {
    className: L.detailsContainer,
    children: [
      (0, n.jsx)('div', {
        className: L.image
      }),
      (0, n.jsxs)('div', {
        className: L.details,
        children: [
          (0, n.jsxs)('div', {
            className: L.headerLabel,
            children: [
              t,
              o && null != l && (0, n.jsx)(M.Cy, {
                text: P.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                  percent: l
                }),
                className: L.discountPill,
                colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                isPillOnBorder: !1
              })
            ]
          }),
          s
        ]
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: L.buttons,
    children: a
  })
]
  });
}

function B(e) {
  let {
wordMark: t,
subscriptionInfo: s,
buttons: a,
statusClasses: r,
shouldUseDiscountMarketing: o,
discountAmount: l
  } = e;
  return (0, n.jsxs)('div', {
className: i()(L.banner, r, L.repositioned),
children: [
  (0, n.jsx)('div', {
    className: L.bannerBackgroundImage
  }),
  (0, n.jsx)('div', {
    className: L.detailsContainer,
    children: (0, n.jsx)('div', {
      className: L.details,
      children: (0, n.jsxs)('div', {
        className: L.headerLabel,
        children: [
          (0, n.jsx)('div', {
            className: L.image
          }),
          (0, n.jsxs)('div', {
            className: L.headerColumnB,
            children: [
              t,
              o && null != l && (0, n.jsx)(M.Cy, {
                text: P.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                  percent: l
                }),
                className: L.discountPill,
                colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
                isPillOnBorder: !1
              }),
              s
            ]
          })
        ]
      })
    })
  }),
  (0, n.jsx)('div', {
    className: L.buttons,
    children: a
  })
]
  });
}

function U() {
  return (0, n.jsxs)('div', {
className: L.wordMark,
children: [
  (0, n.jsx)(N.Z, {
    className: L.discordWordmark,
    'aria-label': P.Z.Messages.PREMIUM_TIER_1
  }),
  (0, n.jsx)('div', {
    className: L.classicWordmark
  })
]
  });
}

function G() {
  let {
analyticsLocations: e
  } = (0, _.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
  return (0, n.jsx)(j, {
wordMark: (0, n.jsx)(U, {}),
subscriptionInfo: (0, n.jsx)('div', {
  className: L.planInfo,
  children: P.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
}),
buttons: (0, n.jsx)(R.Z, {
  className: L.toolsButton,
  onClick: () => (0, u.Z)({
    subscriptionTier: D.Si.TIER_1,
    analyticsLocations: e,
    analyticsObject: b
  }),
  children: P.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
}),
statusClasses: {
  [L.tier1]: !0
}
  });
}
t.Z = function(e) {
  var t, a;
  let {
subscription: r,
renewalInvoicePreview: E,
paymentSource: M,
busy: G,
analyticsLocation: F
  } = e, {
analyticsLocations: y
  } = (0, _.ZP)(d.Z.SUBSCRIPTION_HEADER), {
enabled: V
  } = (0, O.ZP)({
location: 'subscription_header'
  });
  (!D.pj.has(r.planId) || !f.JwP.ALL_PAUSEABLE.has(r.status)) && (V = !1);
  let Y = (0, p.Ng)(),
w = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
k = (0, g.t7)(),
H = (0, g.lr)(),
W = () => {
  if (r.status === f.O0b.ACTIVE || r.status === f.O0b.PAST_DUE || r.status === f.O0b.PAUSED)
    Q(x.Steps.PAUSE_SELECT);
},
K = () => {
  if (r.status === f.O0b.ACTIVE || r.status === f.O0b.PAST_DUE || r.status === f.O0b.PAUSE_PENDING)
    Q();
},
z = () => {
  if (r.status === f.O0b.BILLING_RETRY)
    Q(x.Steps.CONFIRM);
},
Q = e => {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(s.bind(s, 833569));
    return s => (0, n.jsx)(t, {
      ...s,
      premiumSubscription: r,
      analyticsLocation: F,
      analyticsLocations: y,
      initialStep: e
    });
  });
},
X = () => {
  if (null != r && null != r.planIdFromItems) {
    let e = I.Z.get(r.planIdFromItems);
    if (null == e) {
      Z.info('Plan not fetched for plan id: '.concat(r.planIdFromItems));
      return;
    }
    let t = (0, A.DE)(e, null == M ? void 0 : M.id, !1),
      s = t.length > 0 ? t[0] : r.currency,
      n = !1;
    1 === t.length && (null == M ? void 0 : M.id) === r.paymentSourceId && (0, A.tD)(e.id, s, null == M ? void 0 : M.id) && (n = !0), n ? c.O5(r, y) : (0, u.Z)({
      initialPlanId: r.planIdFromItems,
      analyticsLocations: y,
      analyticsLocation: F,
      analyticsObject: b,
      subscription: r
    });
  }
},
q = () => {
  if (!v.includes(r.status) || null == r.pauseEndsAt) {
    (0, C.q2)(Error('Invalid subscription to resume'), {
      extra: {
        subscriptionId: r.id,
        status: r.status,
        pauseEndsAt: r.pauseEndsAt
      }
    });
    return;
  }
  r.status === f.O0b.PAUSED ? (0, u.Z)({
    initialPlanId: r.planIdFromItems,
    analyticsLocations: y,
    analyticsLocation: F,
    analyticsObject: b,
    subscription: r,
    skipConfirm: !0
  }) : c.v4(r, y);
},
J = () => {
  if (r.status === f.O0b.PAUSED)
    Q(x.Steps.PAUSE_SELECT);
},
$ = () => {
  Q(x.Steps.WHAT_YOU_LOSE);
},
ee = m.ZP.getPlanIdFromInvoice(r, E);
  if ((0, T.Q0)(ee))
return null;
  let et = m.ZP.getStatusFromInvoice(r, E),
es = m.ZP.getPremiumType(ee),
en = {
  [L.tier0]: es === D.p9.TIER_0,
  [L.tier1]: es === D.p9.TIER_1,
  [L.tier2]: es === D.p9.TIER_2,
  [L.canceled]: et === f.O0b.CANCELED,
  [L.pausePending]: et === f.O0b.PAUSE_PENDING,
  [L.paused]: et === f.O0b.PAUSED,
  [L.failedPayment]: (0, m.zV)(et)
},
ea = null;
  switch (es) {
case D.p9.TIER_0:
  ea = (0, n.jsxs)('div', {
    className: L.wordMark,
    children: [
      (0, n.jsx)(N.Z, {
        className: L.discordWordmark,
        'aria-label': P.Z.Messages.PREMIUM_TIER_0
      }),
      (0, n.jsx)('div', {
        className: L.basicWordmark
      })
    ]
  });
  break;
case D.p9.TIER_1:
  ea = (0, n.jsx)(U, {});
  break;
case D.p9.TIER_2:
  ea = (0, n.jsx)(S.Z, {
    className: L.planName,
    'aria-label': P.Z.Messages.PREMIUM_TITLE
  });
  }
  let ei = v.includes(r.status) ? B : j;
  return (0, n.jsx)(ei, {
wordMark: ea,
subscriptionInfo: (a = ee, o()(null != E, 'Expected renewalInvoicePreview'), (0, n.jsx)('div', {
  className: L.planInfo,
  children: (0, m.qV)({
    planId: a,
    subscription: r,
    renewalInvoicePreview: E,
    hasDiscountApplied: k,
    activeDiscountInfo: H
  })
})),
buttons: (() => {
  let {
    status: e
  } = r;
  if (r.isPurchasedExternally) {
    let e = (0, m.JE)(r.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
    return (0, n.jsx)(l.Anchor, {
      href: e,
      useDefaultUnderlineStyles: !1,
      children: (0, n.jsx)(l.Button, {
        className: i()(L.toolsButton, L.externalButton),
        size: l.Button.Sizes.SMALL,
        look: l.ButtonLooks.OUTLINED,
        color: l.ButtonColors.WHITE,
        submitting: G,
        children: P.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
      })
    });
  }
  if (m.ZP.isBaseSubscriptionCanceled(r))
    return (0, n.jsx)(l.Button, {
      className: L.toolsButton,
      size: l.Button.Sizes.SMALL,
      color: l.ButtonColors.BRAND_INVERTED,
      submitting: G,
      onClick: X,
      children: P.Z.Messages.RESUBSCRIBE
    });
  switch (e) {
    case f.O0b.BILLING_RETRY:
      return (0, n.jsx)(l.Button, {
        className: L.billingRetryCancel,
        size: l.Button.Sizes.SMALL,
        color: l.ButtonColors.CUSTOM,
        submitting: G,
        onClick: z,
        children: P.Z.Messages.CANCEL
      });
    case f.O0b.PAUSE_PENDING:
      return (0, n.jsxs)('div', {
        className: L.toolsButtons,
        children: [
          (0, n.jsx)(l.Button, {
            className: L.toolsButton,
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.LINK,
            color: l.ButtonColors.WHITE,
            submitting: G,
            onClick: K,
            children: P.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
          }),
          (0, n.jsx)(l.Button, {
            className: L.toolsButton,
            size: l.Button.Sizes.SMALL,
            color: l.ButtonColors.BRAND_INVERTED,
            submitting: G,
            onClick: q,
            children: P.Z.Messages.CANCEL_PAUSE
          })
        ]
      });
    case f.O0b.PAUSED:
      let {
        durations: t
      } = (0, h.AT)(r);
      return (0, n.jsxs)('div', {
        className: L.toolsButtons,
        children: [
          t.length > 0 ? (0, n.jsx)(l.Button, {
            className: L.linkButton,
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.LINK,
            color: l.ButtonColors.WHITE,
            submitting: G,
            onClick: J,
            children: P.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
          }) : (0, n.jsx)(l.Button, {
            className: L.linkButton,
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.LINK,
            color: l.ButtonColors.WHITE,
            submitting: G,
            onClick: $,
            children: P.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
          }),
          (0, n.jsx)(l.Button, {
            className: L.toolsButton,
            size: l.Button.Sizes.SMALL,
            color: l.ButtonColors.BRAND_INVERTED,
            submitting: G,
            onClick: q,
            children: P.Z.Messages.RESUME
          })
        ]
      });
    case f.O0b.ACTIVE:
    case f.O0b.PAST_DUE:
      let s = !1,
        a = null;
      return null != r.renewalMutations && (s = !0, a = r.renewalMutations.planId !== r.planId ? P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != r.trialEndsAt && (s = !0, a = P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === f.O0b.PAST_DUE && (s = !0), (0, n.jsxs)('div', {
        className: L.toolsButtons,
        children: [
          V ? (0, n.jsx)(l.Button, {
            className: L.toolsButton,
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.LINK,
            color: l.ButtonColors.WHITE,
            submitting: G,
            onClick: W,
            children: P.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
          }) : (0, n.jsx)(l.Button, {
            className: L.toolsButton,
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.LINK,
            color: l.ButtonColors.WHITE,
            submitting: G,
            onClick: K,
            children: P.Z.Messages.CANCEL
          }),
          (0, n.jsx)(l.Tooltip, {
            text: a,
            children: e => (0, n.jsx)(R.Z, {
              ...e,
              disabled: s,
              className: L.toolsButton,
              onClick: () => {
                (0, u.Z)({
                  analyticsLocations: y,
                  analyticsLocation: F,
                  analyticsObject: b,
                  subscription: r
                });
              },
              children: P.Z.Messages.PREMIUM_SWITCH_PLANS
            })
          })
        ]
      });
  }
})(),
statusClasses: en,
shouldUseDiscountMarketing: k,
discountAmount: w
  });
};