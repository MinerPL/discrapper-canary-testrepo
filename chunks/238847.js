s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(722770),
  d = s(442837),
  _ = s(481060),
  E = s(355467),
  u = s(100527),
  T = s(906732),
  I = s(218946),
  S = s(565138),
  N = s(404203),
  C = s(330181),
  m = s(374649),
  A = s(908951),
  g = s(777036),
  h = s(255078),
  O = s(853872),
  p = s(755596),
  R = s(153124),
  x = s(171246),
  M = s(41959),
  f = s(650919),
  D = s(981631),
  P = s(689938),
  L = s(857367);
let b = e => {
let {
  label: t,
  value: s,
  showInfoIcon: a,
  infoIconTooltipText: i
} = e;
return (0, n.jsxs)('div', {
  className: L.infoCard,
  children: [
    (0, n.jsxs)('div', {
      className: L.infoCardLabelContainer,
      children: [
        (0, n.jsx)(_.Heading, {
          variant: 'heading-deprecated-12/semibold',
          className: L.infoCardLabel,
          children: t
        }),
        a && (0, n.jsx)(_.Tooltip, {
          text: i,
          children: e => (0, n.jsx)(_.CircleInformationIcon, {
            size: 'xs',
            color: 'currentColor',
            ...e,
            className: L.infoCardIcon
          })
        })
      ]
    }),
    (0, n.jsx)(_.Heading, {
      variant: 'heading-xl/semibold',
      className: L.infoCardValue,
      children: s
    })
  ]
});
  },
  Z = e => {
let {
  subscription: t,
  disabled: s
} = e, {
  analyticsLocations: a
} = (0, T.ZP)(), [i] = (0, m.ED)({
  subscriptionId: t.id,
  renewal: !0,
  analyticsLocations: a,
  analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
});
return (0, d.e7)([O.Z], () => O.Z.hasFetchedPaymentSources) ? null == i ? null : (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)(_.FormTitle, {
      children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
    }),
    (0, n.jsx)(A.Z, {
      subscription: t,
      currentInvoicePreview: i,
      dropdownClassName: L.paymentSourceDropdown,
      disabled: s
    })
  ]
}) : (0, n.jsx)(_.Spinner, {});
  },
  v = e => {
let {
  isCancelled: t,
  onCancelSubscriptionClick: s,
  isResubscribing: a,
  onResubscribeClick: i
} = e;
return (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(_.FormTitle, {
      children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
    }),
    (0, n.jsx)('div', {
      className: L.__invalid_rowButtons,
      children: t ? (0, n.jsx)(_.Button, {
        onClick: i,
        submitting: a,
        children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
      }) : (0, n.jsx)(p.Z, {
        label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
        onClick: s
      })
    })
  ]
});
  };
t.Z = e => {
  let {
subscription: t
  } = e, {
listing: i,
groupListing: o,
guild: d,
expanded: u,
handleToggleExpanded: m,
subscriptionInfo: A,
application: O
  } = (0, f.Z)(t), p = (0, R.Dt)(), [j, B] = a.useState(!1), {
analyticsLocations: U
  } = (0, T.ZP)();
  if (null == o || null == i || null == A)
return null;
  let G = () => {
  l()(null != O, 'Application cannot be null'), (0, _.openModalLazy)(async () => {
    let {
      default: e
    } = await s.e('6284').then(s.bind(s, 257514));
    return s => (0, n.jsx)(e, {
      application: O,
      listing: i,
      subscription: t,
      guild: d,
      ...s
    });
  });
},
F = async () => {
  try {
    B(!0);
    let {
      subscription: e
    } = await E.pl(t, U);
    null != e && (0, _.openModalLazy)(async () => {
      let {
        default: t
      } = await s.e('18879').then(s.bind(s, 535278));
      return s => (0, n.jsx)(t, {
        listing: i,
        subscription: h.Z.createFromServer(e),
        ...s
      });
    });
  } finally {
    B(!1);
  }
}, {
  isCancelled: y,
  isDeleted: V,
  isPastDue: Y,
  subscriptionPlanPrice: w,
  subscribedSinceDate: k,
  currentPeriodEndDate: H,
  currentPeriodEndLabel: W
} = A, K = (0, x.KW)(i.sku_flags), z = (0, x.KK)(i.sku_flags), Q = i.soft_deleted || null == O || (!z || null == d) && !K, X = () => y || V ? (0, n.jsx)(_.TextBadge, {
  text: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
}) : Y ? (0, n.jsx)(_.Tooltip, {
  text: P.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
  children: e => (0, n.jsx)('div', {
    ...e,
    children: (0, n.jsx)(_.TextBadge, {
      className: L.paymentDueBadge,
      text: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
      color: c.Z.YELLOW_300
    })
  })
}) : null, q = null;
  if (z) {
var J;
q = (0, n.jsxs)(_.Text, {
  variant: 'text-sm/normal',
  className: L.tierName,
  children: [
    P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
      guildName: null !== (J = null == d ? void 0 : d.name) && void 0 !== J ? J : P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
    }),
    null != d && (0, n.jsx)(S.Z, {
      guild: d,
      size: S.Z.Sizes.MINI,
      className: L.guildIcon
    })
  ]
});
  } else
K && (q = (0, n.jsx)(_.Text, {
  variant: 'text-sm/normal',
  className: L.tierName,
  children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
}));
  return (0, n.jsxs)('div', {
className: L.container,
children: [
  (0, n.jsx)(N.Z, {
    onClick: m,
    className: L.headerContainer,
    children: e => {
      let {
        areaRef: t,
        handleStopPropagation: s
      } = e;
      return (0, n.jsxs)(n.Fragment, {
        children: [
          null != O && (0, n.jsx)(M.Z, {
            size: M.H.SMALL,
            className: L.applicationIcon,
            application: O,
            asset: null != i.image_asset ? (0, I.m)(i.image_asset) : null
          }),
          (0, n.jsxs)('div', {
            className: L.headerTextContainer,
            children: [
              (0, n.jsx)(_.Text, {
                variant: 'text-md/medium',
                className: L.applicationName,
                children: null != O ? O.name : P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
              }),
              (0, n.jsxs)('div', {
                className: L.headerSubtitleContainer,
                children: [
                  q,
                  X()
                ]
              })
            ]
          }),
          (0, n.jsx)(_.Clickable, {
            onClick: s(m),
            'aria-label': P.Z.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            'aria-controls': p,
            'aria-expanded': u,
            focusProps: {
              ringTarget: t
            },
            children: (0, n.jsx)(_.ChevronSmallDownIcon, {
              size: 'md',
              color: 'currentColor',
              className: r()(L.arrowIcon, {
                [L.arrowIconExpanded]: u
              })
            })
          })
        ]
      });
    }
  }),
  u ? (0, n.jsxs)('div', {
    id: p,
    children: [
      (0, n.jsx)('div', {
        className: L.divider
      }),
      V ? (0, n.jsx)(g.Z, {
        messageType: g.Q.WARNING,
        className: L.deletedHelpMessage,
        children: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null,
      (0, n.jsx)(C.Z, {
        groupListingId: o.id,
        subscription: t,
        className: L.changePlanNotice
      }),
      (0, n.jsxs)('div', {
        className: L.subscriptionInfoCards,
        children: [
          (0, n.jsx)(b, {
            label: W,
            value: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
              timestamp: H.getTime()
            })
          }),
          (0, n.jsx)(b, {
            label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
            value: w
          }),
          (0, n.jsx)(b, {
            label: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
            value: P.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
              timestamp: k.getTime()
            })
          })
        ]
      }),
      (0, n.jsx)(_.Spacer, {
        size: 16
      }),
      t.status === D.O0b.ACTIVE && (0, n.jsx)(Z, {
        subscription: t,
        disabled: V
      }),
      !Q && (0, n.jsx)(v, {
        isCancelled: y,
        onCancelSubscriptionClick: G,
        isResubscribing: j,
        onResubscribeClick: F
      })
    ]
  }) : null
]
  });
};