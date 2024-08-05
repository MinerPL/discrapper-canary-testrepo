s(47120);
var n = s(735250),
  a = s(470079),
  i = s(664751),
  r = s(442837),
  o = s(481060),
  l = s(355467),
  c = s(821849),
  d = s(72924),
  _ = s(100527),
  E = s(906732),
  u = s(883904),
  T = s(678558),
  I = s(730647),
  S = s(584825),
  N = s(305342),
  C = s(333867),
  m = s(963249),
  A = s(87484),
  g = s(197115),
  h = s(911367),
  O = s(430824),
  p = s(78839),
  R = s(981631),
  x = s(474936),
  M = s(184796);

function f(e) {
  let {
selectedGuildForGuildSub: t
  } = e, s = (0, S.GG)(null == t ? void 0 : t.id)[0];
  return (0, n.jsx)(n.Fragment, {
children: null != t && null != s ? (0, n.jsx)('div', {
  className: M.formItem,
  children: s.subscription_listings_ids.map(e => (0, n.jsx)(N.Z, {
    guildId: t.id,
    groupListingId: e,
    listingId: e
  }, e))
}) : null
  });
}
t.Z = function() {
  let [e, t] = a.useState(x.Si.TIER_2), [s, S] = a.useState(null), [N] = (0, r.Wu)([O.Z], () => [O.Z.getGuilds()]), [D] = (0, r.Wu)([p.ZP], () => [p.ZP.getPremiumSubscription()]);
  (0, h.t)();
  let P = Object.values(N).map(e => ({
  value: e,
  label: e.name
})),
[L, b] = a.useState(P.length > 0 ? P[0].value : null),
[Z, v] = a.useState(''),
[j, B] = a.useState({
  plan_id: x.Xh.PREMIUM_MONTH_TIER_2,
  gift: 'true'
}),
U = 'true' !== j.gift && null != D,
[G, F] = a.useState(P.length > 0 ? P[0].value : null),
{
  analyticsLocations: y
} = (0, E.ZP)(_.Z.PAYMENT_FLOW_TEST_PAGE),
[V, Y] = a.useState(''),
[w, k] = a.useState(R.lds),
[H, W] = a.useState(''),
[K, z] = a.useState(R.lds),
[Q, X] = a.useState(R.lds);
  return (0, n.jsx)(E.Gt, {
value: y,
children: (0, n.jsxs)(o.FormSection, {
  title: 'Payment Flow Modals',
  tag: o.FormTitleTags.H1,
  children: [
    (0, n.jsx)(o.FormTitle, {
      children: 'Gift'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.SingleSelect, {
          value: e,
          options: [{
              value: x.Si.TIER_2,
              label: 'Nitro'
            },
            {
              value: x.Si.TIER_1,
              label: 'Nitro Classic'
            },
            {
              value: x.Si.TIER_0,
              label: 'Nitro Basic'
            },
            {
              value: null,
              label: 'None'
            }
          ],
          onChange: e => t(e)
        }),
        (0, n.jsx)(g.Z, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Premium Select Plan'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.SingleSelect, {
          value: s,
          options: [{
              value: x.Si.TIER_2,
              label: 'Nitro'
            },
            {
              value: x.Si.TIER_1,
              label: 'Nitro Classic'
            },
            {
              value: x.Si.TIER_0,
              label: 'Nitro Basic'
            },
            {
              value: null,
              label: 'None'
            }
          ],
          onChange: e => S(e)
        }),
        (0, n.jsx)(o.Button, {
          onClick: () => (0, m.Z)({
            subscriptionTier: s,
            analyticsLocations: y
          }),
          children: 'Select Plan'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Boost'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.SingleSelect, {
          value: L,
          options: P,
          onChange: e => b(e)
        }),
        null != L ? (0, n.jsx)(T.Z, {
          guild: L,
          analyticsLocation: {}
        }) : (0, n.jsx)('div', {
          children: 'No Guild to boost'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsxs)(o.FormTitle, {
      children: [
        (0, n.jsx)('div', {
          children: 'Standalone: Trial Promotion Redemption'
        }),
        (0, n.jsx)(o.Anchor, {
          href: 'https://i.dis.gd/createPromo',
          children: 'How to create promotion'
        })
      ]
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.TextInput, {
          placeholder: 'Promotion Code',
          value: Z,
          onChange: e => v(e)
        }),
        (0, n.jsx)(o.Tooltip, {
          text: 'Need Promotion Code',
          shouldShow: Z.length < 1,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, n.jsx)(o.Button, {
              disabled: Z.length < 1,
              onMouseEnter: t,
              onMouseLeave: s,
              onClick: () => {
                window.open(R.Z5c.BILLING_PROMOTION_REDEMPTION(Z));
              },
              children: 'Open Link'
            });
          }
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Standalone: Gift/Subscription Purchase'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.SingleSelect, {
          value: j.plan_id,
          options: [{
              value: x.Xh.PREMIUM_MONTH_TIER_2,
              label: 'Nitro'
            },
            {
              value: x.Xh.PREMIUM_MONTH_TIER_1,
              label: 'Nitro Classic'
            },
            {
              value: x.Xh.PREMIUM_MONTH_TIER_0,
              label: 'Nitro Basic'
            }
          ],
          onChange: e => B(t => ({
            ...t,
            plan_id: e
          }))
        }),
        (0, n.jsx)(o.SingleSelect, {
          value: j.gift,
          options: [{
              value: 'true',
              label: 'Gift'
            },
            {
              value: 'false',
              label: 'Not Gift'
            }
          ],
          onChange: e => B(t => ({
            ...t,
            gift: e
          }))
        }),
        (0, n.jsx)(o.Tooltip, {
          text: 'Already subscribed',
          shouldShow: U,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, n.jsx)(o.Button, {
              onMouseLeave: s,
              onMouseEnter: t,
              disabled: U,
              onClick: () => {
                window.open(R.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + i.stringify({
                  ...j
                }));
              },
              children: 'Open Link'
            });
          }
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Creator Revenue'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.Text, {
          className: M.guildServerDescription,
          variant: 'text-sm/normal',
          children: 'Premium Server Subscription For'
        }),
        (0, n.jsx)(o.SingleSelect, {
          value: G,
          options: P,
          onChange: e => F(e)
        })
      ]
    }),
    (0, n.jsx)(I.l, {
      guildId: null == G ? void 0 : G.id,
      children: (0, n.jsx)(f, {
        selectedGuildForGuildSub: G
      })
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Activities & Application Payment Modals'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.TextInput, {
          placeholder: 'Application Id',
          value: V,
          onChange: Y
        }),
        (0, n.jsx)(o.TextInput, {
          placeholder: 'Sku Id',
          value: w,
          onChange: e => k(e)
        }),
        (0, n.jsx)(o.Button, {
          onClick: () => (0, d.S)({
            applicationId: V,
            skuId: w,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: R.ZY5.IN_APP
            },
            context: R.IlC.APP
          }),
          children: 'Open App Subs Modal for Activity'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Standard Payment Modal Test'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.TextInput, {
          placeholder: 'Application Id',
          value: H,
          onChange: W
        }),
        (0, n.jsx)(o.TextInput, {
          placeholder: 'SKU ID',
          value: K,
          onChange: e => z(e)
        }),
        (0, n.jsx)(o.Button, {
          onClick: () => (0, A.Z)({
            applicationId: H,
            skuId: K,
            analyticsLocations: y
          }),
          children: 'Open Standard Payment Modal for SKU'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Collectibles Payment Modal Test'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.TextInput, {
          placeholder: 'SKU ID',
          value: Q,
          onChange: e => X(e)
        }),
        (0, n.jsx)(o.Button, {
          onClick: () => (0, C.Z)({
            skuId: Q,
            analyticsLocations: y
          }),
          children: 'Open Collectibles Payment Modal for SKU'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Helpers'
    }),
    (0, n.jsxs)(o.FormItem, {
      className: M.formItem,
      children: [
        (0, n.jsx)(o.Button, {
          onClick: () => (0, c.mE)(),
          children: 'Reset SubscriptionPlanStore'
        }),
        (0, n.jsx)(o.Button, {
          onClick: () => (0, l.GM)(),
          children: 'Reset SubscriptionStore'
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.formDivider
    }),
    (0, n.jsx)(o.FormTitle, {
      children: 'Dismissible Content Framework'
    }),
    (0, n.jsx)(o.FormItem, {
      className: M.formItem,
      children: (0, n.jsx)(o.Button, {
        onClick: () => (0, u.EG)(),
        children: 'Reset DismissibleContentFrameworkStore'
      })
    })
  ]
})
  });
};