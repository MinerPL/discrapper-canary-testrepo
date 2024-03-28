"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("664751"),
  i = s("442837"),
  r = s("481060"),
  o = s("355467"),
  d = s("821849"),
  u = s("72924"),
  c = s("100527"),
  S = s("906732"),
  E = s("883904"),
  T = s("678558"),
  _ = s("730647"),
  f = s("584825"),
  m = s("305342"),
  g = s("333867"),
  h = s("963249"),
  N = s("87484"),
  I = s("197115"),
  p = s("996678"),
  C = s("430824"),
  A = s("78839"),
  O = s("981631"),
  x = s("474936"),
  R = s("738127");

function M(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, s = (0, f.useGroupListingsForGuild)(null == t ? void 0 : t.id)[0];
  return (0, a.jsx)(a.Fragment, {
    children: null != t && null != s ? (0, a.jsx)("div", {
      className: R.formItem,
      children: s.subscription_listings_ids.map(e => (0, a.jsx)(m.default, {
        guildId: t.id,
        groupListingId: e,
        listingId: e
      }, e))
    }) : null
  })
}
t.default = function() {
  let [e, t] = n.useState(x.PremiumSubscriptionSKUs.TIER_2), [s, f] = n.useState(null), [m] = (0, i.useStateFromStoresArray)([C.default], () => [C.default.getGuilds()]), [v] = (0, i.useStateFromStoresArray)([A.default], () => [A.default.getPremiumSubscription()]);
  (0, p.default)();
  let D = Object.values(m).map(e => ({
      value: e,
      label: e.name
    })),
    [L, P] = n.useState(D.length > 0 ? D[0].value : null),
    [j, b] = n.useState(""),
    [U, y] = n.useState({
      plan_id: x.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    B = "true" !== U.gift && null != v,
    [F, G] = n.useState(D.length > 0 ? D[0].value : null),
    {
      analyticsLocations: k
    } = (0, S.default)(c.default.PAYMENT_FLOW_TEST_PAGE),
    [H, w] = n.useState(""),
    [V, Y] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID),
    [K, W] = n.useState(""),
    [z, Q] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID),
    [X, q] = n.useState(O.EMPTY_STRING_SNOWFLAKE_ID);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: k,
    children: (0, a.jsxs)(r.FormSection, {
      title: "Payment Flow Modals",
      tag: r.FormTitleTags.H1,
      children: [(0, a.jsx)(r.FormTitle, {
        children: "Gift"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: e,
          options: [{
            value: x.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: x.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => t(e)
        }), (0, a.jsx)(I.default, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Premium Select Plan"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: s,
          options: [{
            value: x.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: x.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => f(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, h.default)({
            subscriptionTier: s,
            analyticsLocations: k
          }),
          children: "Select Plan"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Boost"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: L,
          options: D,
          onChange: e => P(e)
        }), null != L ? (0, a.jsx)(T.default, {
          guild: L,
          analyticsLocation: {}
        }) : (0, a.jsx)("div", {
          children: "No Guild to boost"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsxs)(r.FormTitle, {
        children: [(0, a.jsx)("div", {
          children: "Standalone: Trial Promotion Redemption"
        }), (0, a.jsx)(r.Anchor, {
          href: "https://i.dis.gd/createPromo",
          children: "How to create promotion"
        })]
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Promotion Code",
          value: j,
          onChange: e => b(e)
        }), (0, a.jsx)(r.Tooltip, {
          text: "Need Promotion Code",
          shouldShow: j.length < 1,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              disabled: j.length < 1,
              onMouseEnter: t,
              onMouseLeave: s,
              onClick: () => {
                window.open(O.Routes.BILLING_PROMOTION_REDEMPTION(j))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standalone: Gift/Subscription Purchase"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: U.plan_id,
          options: [{
            value: x.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            label: "Nitro"
          }, {
            value: x.SubscriptionPlans.PREMIUM_MONTH_TIER_1,
            label: "Nitro Classic"
          }, {
            value: x.SubscriptionPlans.PREMIUM_MONTH_TIER_0,
            label: "Nitro Basic"
          }],
          onChange: e => y(t => ({
            ...t,
            plan_id: e
          }))
        }), (0, a.jsx)(r.SingleSelect, {
          value: U.gift,
          options: [{
            value: "true",
            label: "Gift"
          }, {
            value: "false",
            label: "Not Gift"
          }],
          onChange: e => y(t => ({
            ...t,
            gift: e
          }))
        }), (0, a.jsx)(r.Tooltip, {
          text: "Already subscribed",
          shouldShow: B,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              onMouseLeave: s,
              onMouseEnter: t,
              disabled: B,
              onClick: () => {
                window.open(O.Routes.BILLING_PREMIUM_SUBSCRIBE + "?" + l.stringify({
                  ...U
                }))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Creator Revenue"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.Text, {
          className: R.guildServerDescription,
          variant: "text-sm/normal",
          children: "Premium Server Subscription For"
        }), (0, a.jsx)(r.SingleSelect, {
          value: F,
          options: D,
          onChange: e => G(e)
        })]
      }), (0, a.jsx)(_.GroupListingsFetchContextProvider, {
        guildId: null == F ? void 0 : F.id,
        children: (0, a.jsx)(M, {
          selectedGuildForGuildSub: F
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Activities & Application Payment Modals"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: H,
          onChange: w
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "Sku Id",
          value: V,
          onChange: e => Y(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, u.openIAPPurchaseModal)({
            applicationId: H,
            skuId: V,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: O.AnalyticsPages.IN_APP
            },
            context: O.AppContext.APP
          }),
          children: "Open App Subs Modal for Activity"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standard Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: K,
          onChange: W
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: z,
          onChange: e => Q(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, N.default)({
            applicationId: K,
            skuId: z,
            analyticsLocations: k
          }),
          children: "Open Standard Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Collectibles Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: X,
          onChange: e => q(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, g.default)({
            skuId: X,
            analyticsLocations: k
          }),
          children: "Open Collectibles Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Helpers"
      }), (0, a.jsxs)(r.FormItem, {
        className: R.formItem,
        children: [(0, a.jsx)(r.Button, {
          onClick: () => (0, d.resetSubscriptionPlanData)(),
          children: "Reset SubscriptionPlanStore"
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, o.resetSubscriptionStore)(),
          children: "Reset SubscriptionStore"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Dismissible Content Framework"
      }), (0, a.jsx)(r.FormItem, {
        className: R.formItem,
        children: (0, a.jsx)(r.Button, {
          onClick: () => (0, E.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        })
      })]
    })
  })
}