s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(722770),
  l = s(442837),
  c = s(481060),
  d = s(355467),
  _ = s(37234),
  E = s(254854),
  u = s(230711),
  T = s(100527),
  I = s(906732),
  S = s(377171),
  N = s(674180),
  C = s(374649),
  m = s(908951),
  A = s(703656),
  h = s(853872),
  g = s(346656),
  O = s(755596),
  p = s(153124),
  R = s(245950),
  x = s(404203),
  M = s(330181),
  D = s(954821),
  f = s(980864),
  P = s(981631),
  L = s(176505),
  Z = s(526761),
  b = s(689938),
  v = s(381512);
let j = e => {
let {
  label: t,
  value: s,
  showInfoIcon: a,
  infoIconTooltipText: i
} = e;
return (0, n.jsxs)('div', {
  className: v.infoCard,
  children: [
    (0, n.jsxs)('div', {
      className: v.infoCardLabelContainer,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-deprecated-12/semibold',
          className: v.infoCardLabel,
          children: t
        }),
        a && (0, n.jsx)(c.Tooltip, {
          clickableOnMobile: !0,
          text: i,
          children: e => (0, n.jsx)(c.CircleInformationIcon, {
            size: 'xs',
            color: 'currentColor',
            ...e,
            className: v.infoCardIcon
          })
        })
      ]
    }),
    (0, n.jsx)(c.Heading, {
      variant: 'heading-xl/semibold',
      className: v.infoCardValue,
      children: s
    })
  ]
});
  },
  B = e => {
let {
  subscription: t
} = e, {
  analyticsLocations: s
} = (0, I.ZP)(), [a] = (0, C.ED)({
  subscriptionId: t.id,
  renewal: !0,
  analyticsLocations: s,
  analyticsLocation: T.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
}), i = (0, l.e7)([h.Z], () => h.Z.hasFetchedPaymentSources);
return null != a && i ? (0, n.jsx)(m.Z, {
  subscription: t,
  currentInvoicePreview: a,
  dropdownClassName: v.paymentSourceDropdown
}) : (0, n.jsx)(c.Spinner, {});
  },
  U = e => {
let {
  isTrial: t,
  isCancelled: s,
  isResubscribing: a,
  shouldHideRoleSubscriptionEntryPoints: i,
  onCancelSubscriptionClick: r,
  onResubscribeClick: o,
  onChangePlanClick: l
} = e;
return s && (t || i) ? null : (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(c.FormTitle, {
      children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
    }),
    (0, n.jsx)('div', {
      className: v.__invalid_rowButtons,
      children: s ? (0, n.jsx)(c.Button, {
        onClick: o,
        submitting: a,
        children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
      }) : (0, n.jsxs)(n.Fragment, {
        children: [
          !t && !i && (0, n.jsx)(O.Z, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: l
          }),
          (0, n.jsx)(O.Z, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: r
          })
        ]
      })
    })
  ]
});
  };
t.Z = e => {
  let {
subscription: t
  } = e, {
listing: s,
groupListing: i,
guild: l,
expanded: T,
handleToggleExpanded: C,
subscriptionInfo: m
  } = (0, R.Z)(t), [h, O] = a.useState(!1), G = (0, p.Dt)(), {
analyticsLocations: F
  } = (0, I.ZP)(), {
shouldHideGuildPurchaseEntryPoints: y
  } = (0, N.uP)(null == l ? void 0 : l.id), V = (null == t ? void 0 : t.paymentGateway) === P.gg$.APPLE_PARTNER;
  if (null == i || null == s || null == m)
return null;
  let Y = () => {
  null != l && ((0, A.uL)(P.Z5c.CHANNEL(l.id, L.oC.ROLE_SUBSCRIPTIONS)), (0, _.xf)(), E.Z.show(P.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => u.Z.open(P.oAB.SUBSCRIPTIONS, Z.cP)));
},
w = () => {
  null != l && (0, D.h)({
    guildId: l.id,
    groupListing: i,
    listing: s,
    subscription: t
  });
},
k = async () => {
  try {
    O(!0), await d.pl(t, F), (0, f.h)();
  } finally {
    O(!1);
  }
}, {
  isCancelled: H,
  isPastDue: W,
  subscriptionPrice: K,
  memberSince: z,
  nextRenewalDate: Q,
  nextRenewalLabel: X,
  isTrial: q
} = m, J = s.soft_deleted || null == l || V, $ = () => {
  if (H)
    return (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
    });
  if (q)
    return (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
      color: o.Z.BRAND_500
    });
  if (W)
    return (0, n.jsx)(c.Tooltip, {
      text: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, n.jsx)('div', {
        ...e,
        children: (0, n.jsx)(c.TextBadge, {
          className: v.paymentDueBadge,
          text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: o.Z.YELLOW_300
        })
      })
    });
  else
    return null;
}, ee = () => V ? (0, n.jsx)(c.Tooltip, {
  text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
  children: e => (0, n.jsx)('div', {
    ...e,
    children: (0, n.jsx)(c.TextBadge, {
      text: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
      color: S.Z.INTERACTIVE_MUTED
    })
  })
}) : null;
  return (0, n.jsxs)('div', {
className: v.container,
children: [
  (0, n.jsx)(x.Z, {
    onClick: C,
    className: v.headerContainer,
    children: e => {
      let {
        areaRef: t,
        handleStopPropagation: a
      } = e;
      return (0, n.jsxs)(n.Fragment, {
        children: [
          null != l && (0, n.jsx)(g.Z, {
            guild: l,
            active: !0,
            size: g.Z.Sizes.MEDIUM
          }),
          (0, n.jsxs)('div', {
            className: v.headerTextContainer,
            children: [
              (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: v.guildName,
                children: null != l ? l.name : b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
              }),
              (0, n.jsxs)('div', {
                className: v.headerSubtitleContainer,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    className: v.tierName,
                    children: s.name
                  }),
                  $(),
                  ee()
                ]
              })
            ]
          }),
          (0, n.jsx)(c.Clickable, {
            onClick: a(C),
            'aria-label': b.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            'aria-controls': G,
            'aria-expanded': T,
            focusProps: {
              ringTarget: t
            },
            children: (0, n.jsx)(c.ChevronSmallDownIcon, {
              size: 'md',
              color: 'currentColor',
              className: r()(v.arrowIcon, {
                [v.arrowIconExpanded]: T
              })
            })
          })
        ]
      });
    }
  }),
  T ? (0, n.jsxs)('div', {
    id: G,
    children: [
      (0, n.jsx)('div', {
        className: v.divider
      }),
      (0, n.jsx)(M.Z, {
        groupListingId: i.id,
        subscription: t,
        className: v.changePlanNotice
      }),
      (0, n.jsxs)('div', {
        className: v.subscriptionInfoCards,
        children: [
          (0, n.jsx)(j, {
            label: X,
            value: Q
          }),
          (0, n.jsx)(j, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
            value: K,
            showInfoIcon: q,
            infoIconTooltipText: q ? b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
          }),
          (0, n.jsx)(j, {
            label: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
            value: z
          })
        ]
      }),
      (0, n.jsx)(c.Spacer, {
        size: 16
      }),
      !H && !V && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(c.FormTitle, {
            children: b.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
          }),
          (0, n.jsx)(B, {
            subscription: t
          })
        ]
      }),
      !J && (0, n.jsx)(U, {
        isTrial: q,
        isCancelled: H,
        isResubscribing: h,
        shouldHideRoleSubscriptionEntryPoints: y,
        onCancelSubscriptionClick: w,
        onChangePlanClick: Y,
        onResubscribeClick: k
      })
    ]
  }) : null
]
  });
};