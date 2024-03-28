"use strict";
s.r(t), s.d(t, {
  Tier1AccountCreditBanner: function() {
    return G
  }
}), s("411104");
var a = s("735250");
s("470079");
var n = s("803997"),
  i = s.n(n),
  l = s("512722"),
  r = s.n(l),
  u = s("481060"),
  o = s("366939"),
  d = s("100527"),
  c = s("906732"),
  E = s("710845"),
  f = s("963249"),
  _ = s("301766"),
  p = s("509545"),
  m = s("931331"),
  I = s("754347"),
  N = s("122289"),
  S = s("74538"),
  P = s("212895"),
  T = s("296848"),
  C = s("140465"),
  R = s("879463"),
  A = s("104494"),
  M = s("987997"),
  h = s("833569"),
  L = s("823188"),
  g = s("474936"),
  y = s("981631"),
  x = s("689938"),
  D = s("131537");
let U = new E.default("SubscriptionHeader.tsx"),
  O = {
    page: y.AnalyticsPages.USER_SETTINGS,
    section: y.AnalyticsSections.SETTINGS_PREMIUM,
    object: y.AnalyticsObjects.CARD
  },
  v = [y.SubscriptionStatusTypes.PAUSED, y.SubscriptionStatusTypes.PAUSE_PENDING];

function b(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, l),
    children: [(0, a.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, a.jsxs)("div", {
      className: D.detailsContainer,
      children: [(0, a.jsx)("div", {
        className: D.image
      }), (0, a.jsxs)("div", {
        className: D.details,
        children: [(0, a.jsxs)("div", {
          className: D.headerLabel,
          children: [t, r && null != u && (0, a.jsx)(L.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: u
            }),
            className: D.discountPill,
            colorOptions: L.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), s]
      })]
    }), (0, a.jsx)("div", {
      className: D.buttons,
      children: n
    })]
  })
}

function B(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, l, D.repositioned),
    children: [(0, a.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, a.jsx)("div", {
      className: D.detailsContainer,
      children: (0, a.jsxs)("div", {
        className: D.details,
        children: [(0, a.jsxs)("div", {
          className: D.headerLabel,
          children: [(0, a.jsx)("div", {
            className: D.image
          }), t, r && null != u && (0, a.jsx)(L.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: u
            }),
            className: D.discountPill,
            colorOptions: L.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), s]
      })
    }), (0, a.jsx)("div", {
      className: D.buttons,
      children: n
    })]
  })
}

function j() {
  return (0, a.jsxs)("div", {
    className: D.wordMark,
    children: [(0, a.jsx)(I.default, {
      className: D.discordWordmark,
      "aria-label": x.default.Messages.PREMIUM_TIER_1
    }), (0, a.jsx)("div", {
      className: D.classicWordmark
    })]
  })
}

function G() {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
  return (0, a.jsx)(b, {
    wordMark: (0, a.jsx)(j, {}),
    subscriptionInfo: (0, a.jsx)("div", {
      className: D.planInfo,
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, a.jsx)(M.default, {
      className: D.toolsButton,
      onClick: () => (0, f.default)({
        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_1,
        analyticsLocations: e,
        analyticsObject: O
      }),
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
    }),
    statusClasses: {
      [D.tier1]: !0
    }
  })
}
t.default = function(e) {
  var t, n;
  let {
    subscription: l,
    renewalInvoicePreview: E,
    paymentSource: L,
    busy: G,
    analyticsLocation: F
  } = e, {
    analyticsLocations: k
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: w
  } = (0, R.default)({
    location: "subscription_header"
  }), H = (0, A.usePremiumDiscountOffer)(), Y = null == H ? void 0 : null === (t = H.discount) || void 0 === t ? void 0 : t.amount, W = (0, C.useHasDiscountApplied)(), V = (0, C.useActiveDiscountInfo)(), K = () => {
    (l.status === y.SubscriptionStatusTypes.ACTIVE || l.status === y.SubscriptionStatusTypes.PAST_DUE || l.status === y.SubscriptionStatusTypes.PAUSED) && Z(h.Steps.PAUSE_SELECT)
  }, z = () => {
    (l.status === y.SubscriptionStatusTypes.ACTIVE || l.status === y.SubscriptionStatusTypes.PAST_DUE || l.status === y.SubscriptionStatusTypes.PAUSE_PENDING) && Z()
  }, Z = e => {
    (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.resolve().then(s.bind(s, "833569"));
      return s => (0, a.jsx)(t, {
        ...s,
        premiumSubscription: l,
        analyticsLocation: F,
        analyticsLocations: k,
        initialStep: e
      })
    })
  }, X = () => {
    if (null != l && null != l.planIdFromItems) {
      let e = p.default.get(l.planIdFromItems);
      if (null == e) {
        U.info("Plan not fetched for plan id: ".concat(l.planIdFromItems));
        return
      }
      let t = (0, P.getCurrencies)(e, null == L ? void 0 : L.id, !1),
        s = t.length > 0 ? t[0] : l.currency,
        a = !1;
      1 === t.length && (null == L ? void 0 : L.id) === l.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == L ? void 0 : L.id) && (a = !0), a ? o.resubscribe(l, k) : (0, f.default)({
        initialPlanId: l.planIdFromItems,
        analyticsLocations: k,
        analyticsLocation: F,
        analyticsObject: O,
        subscription: l
      })
    }
  }, q = () => {
    if (!v.includes(l.status) || null == l.pauseEndsAt) {
      (0, N.captureBillingException)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: l.id,
          status: l.status,
          pauseEndsAt: l.pauseEndsAt
        }
      });
      return
    }
    l.status === y.SubscriptionStatusTypes.PAUSED ? (0, f.default)({
      initialPlanId: l.planIdFromItems,
      analyticsLocations: k,
      analyticsLocation: F,
      analyticsObject: O,
      subscription: l,
      skipConfirm: !0
    }) : o.resume(l, k)
  }, J = () => {
    l.status === y.SubscriptionStatusTypes.PAUSED && Z(h.Steps.PAUSE_SELECT)
  }, Q = () => {
    Z(h.Steps.WHAT_YOU_LOSE)
  }, $ = S.default.getPlanIdFromInvoice(l, E);
  if ((0, _.isNoneSubscription)($)) return null;
  let ee = S.default.getStatusFromInvoice(l, E),
    et = S.default.getPremiumType($),
    es = {
      [D.tier0]: et === g.PremiumTypes.TIER_0,
      [D.tier1]: et === g.PremiumTypes.TIER_1,
      [D.tier2]: et === g.PremiumTypes.TIER_2,
      [D.canceled]: ee === y.SubscriptionStatusTypes.CANCELED,
      [D.pausePending]: ee === y.SubscriptionStatusTypes.PAUSE_PENDING,
      [D.paused]: ee === y.SubscriptionStatusTypes.PAUSED,
      [D.failedPayment]: (0, S.isSubscriptionStatusFailedPayment)(ee)
    },
    ea = null;
  switch (et) {
    case g.PremiumTypes.TIER_0:
      ea = (0, a.jsxs)("div", {
        className: D.wordMark,
        children: [(0, a.jsx)(I.default, {
          className: D.discordWordmark,
          "aria-label": x.default.Messages.PREMIUM_TIER_0
        }), (0, a.jsx)("div", {
          className: D.basicWordmark
        })]
      });
      break;
    case g.PremiumTypes.TIER_1:
      ea = (0, a.jsx)(j, {});
      break;
    case g.PremiumTypes.TIER_2:
      ea = (0, a.jsx)(m.default, {
        className: D.planName,
        "aria-label": x.default.Messages.PREMIUM_TITLE
      })
  }
  let en = l.status === y.SubscriptionStatusTypes.PAUSED ? B : b;
  return (0, a.jsx)(en, {
    wordMark: ea,
    subscriptionInfo: (n = $, r()(null != E, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
      className: D.planInfo,
      children: (0, S.getPlanDescriptionFromInvoice)({
        planId: n,
        subscription: l,
        renewalInvoicePreview: E,
        hasDiscountApplied: W,
        activeDiscountInfo: V
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = l;
      if (l.isPurchasedExternally) {
        let e = (0, S.getExternalSubscriptionMethodUrl)(l.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, a.jsx)(u.Anchor, {
          href: e,
          useDefaultUnderlineStyles: !1,
          children: (0, a.jsx)(u.Button, {
            className: i()(D.toolsButton, D.externalButton),
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            submitting: G,
            children: x.default.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (S.default.isBaseSubscriptionCanceled(l)) return (0, a.jsx)(u.Button, {
        className: D.toolsButton,
        size: u.Button.Sizes.SMALL,
        look: u.ButtonLooks.INVERTED,
        color: u.ButtonColors.BRAND,
        submitting: G,
        onClick: X,
        children: x.default.Messages.RESUBSCRIBE
      });
      if (e === y.SubscriptionStatusTypes.PAUSE_PENDING) return (0, a.jsxs)("div", {
        className: D.toolsButtons,
        children: [(0, a.jsx)(u.Button, {
          className: D.toolsButton,
          size: u.Button.Sizes.SMALL,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.WHITE,
          submitting: G,
          onClick: z,
          children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
        }), (0, a.jsx)(u.Button, {
          className: D.toolsButton,
          size: u.Button.Sizes.SMALL,
          look: u.ButtonLooks.INVERTED,
          color: u.ButtonColors.BRAND,
          submitting: G,
          onClick: q,
          children: x.default.Messages.WITHDRAW_PAUSE
        })]
      });
      if (e === y.SubscriptionStatusTypes.PAUSED) {
        let {
          durations: e
        } = (0, T.getSubscriptionPauseDurations)(l);
        return (0, a.jsxs)("div", {
          className: D.toolsButtons,
          children: [e.length > 0 ? (0, a.jsx)(u.Button, {
            className: D.linkButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: G,
            onClick: J,
            children: x.default.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
          }) : (0, a.jsx)(u.Button, {
            className: D.linkButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: G,
            onClick: Q,
            children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
          }), (0, a.jsx)(u.Button, {
            className: D.toolsButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.INVERTED,
            color: u.ButtonColors.BRAND,
            submitting: G,
            onClick: q,
            children: x.default.Messages.RESUME
          })]
        })
      }
      if (e === y.SubscriptionStatusTypes.ACTIVE || e === y.SubscriptionStatusTypes.PAST_DUE) {
        let t = !1,
          s = null;
        return null != l.renewalMutations && (t = !0, s = l.renewalMutations.planId !== l.planId ? x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != l.trialEndsAt && (t = !0, s = x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === y.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
          className: D.toolsButtons,
          children: [w ? (0, a.jsx)(u.Button, {
            className: D.toolsButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: G,
            onClick: K,
            children: x.default.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
          }) : (0, a.jsx)(u.Button, {
            className: D.toolsButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: G,
            onClick: z,
            children: x.default.Messages.CANCEL
          }), (0, a.jsx)(u.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(M.default, {
              ...e,
              disabled: t,
              className: D.toolsButton,
              onClick: () => {
                (0, f.default)({
                  analyticsLocations: k,
                  analyticsLocation: F,
                  analyticsObject: O,
                  subscription: l
                })
              },
              children: x.default.Messages.PREMIUM_SWITCH_PLANS
            })
          })]
        })
      }
    })(),
    statusClasses: es,
    shouldUseDiscountMarketing: W,
    discountAmount: Y
  })
}