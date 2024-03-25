"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("522632"),
  i = s("446674"),
  r = s("77078"),
  o = s("850068"),
  d = s("775433"),
  u = s("308757"),
  c = s("812204"),
  S = s("685665"),
  E = s("585653"),
  T = s("617917"),
  f = s("257869"),
  _ = s("837008"),
  m = s("108314"),
  g = s("946964"),
  h = s("649844"),
  N = s("509167"),
  I = s("635956"),
  p = s("501768"),
  C = s("305961"),
  A = s("521012"),
  O = s("49111"),
  x = s("646718"),
  R = s("369551");

function M(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, s = (0, _.useGroupListingsForGuild)(null == t ? void 0 : t.id)[0];
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
var D = function() {
  let [e, t] = n.useState(x.PremiumSubscriptionSKUs.TIER_2), [s, _] = n.useState(null), [m] = (0, i.useStateFromStoresArray)([C.default], () => [C.default.getGuilds()]), [D] = (0, i.useStateFromStoresArray)([A.default], () => [A.default.getPremiumSubscription()]);
  (0, p.default)();
  let v = Object.values(m).map(e => ({
      value: e,
      label: e.name
    })),
    [L, P] = n.useState(v.length > 0 ? v[0].value : null),
    [j, b] = n.useState(""),
    [U, y] = n.useState({
      plan_id: x.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    B = "true" !== U.gift && null != D,
    [F, G] = n.useState(v.length > 0 ? v[0].value : null),
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
          onChange: e => _(e)
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
          options: v,
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
          options: v,
          onChange: e => G(e)
        })]
      }), (0, a.jsx)(f.GroupListingsFetchContextProvider, {
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