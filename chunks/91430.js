s.d(t, {
  MM: function() {
return V;
  },
  Yn: function() {
return k;
  },
  ZP: function() {
return H;
  },
  eS: function() {
return w;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(913527),
  d = s.n(c),
  _ = s(442837),
  E = s(692547),
  u = s(481060),
  T = s(230711),
  I = s(100527),
  S = s(906732),
  N = s(17894),
  C = s(963249),
  m = s(301766),
  A = s(594174),
  h = s(285952),
  g = s(366695),
  O = s(626135),
  p = s(63063),
  R = s(74538),
  x = s(212895),
  M = s(374649),
  D = s(160913),
  f = s(987997),
  P = s(393411),
  L = s(908951),
  Z = s(592889),
  b = s(981631),
  v = s(689938),
  j = s(727880);

function B(e) {
  let t, {
  subscription: s,
  renewalInvoicePreview: a,
  fromStandaloneBillingPage: i = !0,
  className: o
} = e,
c = (0, _.e7)([A.default], () => {
  let e = A.default.getCurrentUser();
  return l()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
});
  if (0 === (0, R.uV)(s.additionalPlans))
return null;
  let {
status: d
  } = s, E = (0, R.v6)(s);
  if (E)
t = j.guildBoostingSubscriptionRowCanceled;
  else
switch (d) {
  case b.O0b.PAST_DUE:
  case b.O0b.ACCOUNT_HOLD:
  case b.O0b.BILLING_RETRY:
    t = j.guildBoostingSubscriptionRowFailedPayment;
    break;
  case b.O0b.PAUSE_PENDING:
  case b.O0b.PAUSED:
    t = j.guildBoostingSubscriptionRowPaused;
    break;
  default:
    t = j.guildBoostingSubscriptionRowActive;
}
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: r()(t, o),
    children: [
      (0, n.jsx)('div', {
        className: j.guildBoostingSubscriptionRowBackground
      }),
      (0, n.jsx)('div', {
        className: j.guildBoostingImage
      }),
      (0, n.jsxs)('div', {
        className: j.guildBoostingSubscriptionRowBody,
        children: [
          (0, n.jsx)('div', {
            className: r()(j.guildBoostingWordmark, {
              [j.canceled]: E
            })
          }),
          (0, n.jsx)('div', {
            children: (0, R.bt)({
              subscription: s,
              renewalInvoicePreview: a,
              user: c
            })
          })
        ]
      }),
      i && (0, n.jsx)(f.Z, {
        color: u.Button.Colors.BRAND,
        onClick: () => T.Z.open(b.oAB.GUILD_BOOSTING),
        children: v.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })
    ]
  }),
  !i && (0, n.jsx)(u.Text, {
    className: j.boostingDesktopAppBlurb,
    variant: 'text-sm/normal',
    children: v.Z.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
      openAppHook: () => (0, N.Z)('app')
    })
  })
]
  });
}

function U() {
  return a.useEffect(() => {
O.default.track(b.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_missing_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    className: j.paymentBannerIcon,
    color: E.Z.unsafe_rawColors.YELLOW_260.css
  }),
  (0, n.jsx)(u.Text, {
    className: j.paymentBannerText,
    variant: 'text-sm/normal',
    children: v.Z.Messages.MISSING_PAYMENT_METHOD_BANNER
  })
]
  });
}

function G() {
  return a.useEffect(() => {
O.default.track(b.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_invalid_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    className: j.paymentBannerIcon,
    color: E.Z.unsafe_rawColors.RED_360.css
  }),
  (0, n.jsx)(u.Text, {
    className: j.paymentBannerText,
    variant: 'text-sm/normal',
    children: v.Z.Messages.INVALID_PAYMENT_METHOD_BANNER
  })
]
  });
}

function F(e) {
  let {
daysPastDue: t,
subscription: s,
openInvoiceId: i
  } = e, {
analyticsLocations: r
  } = (0, S.ZP)(I.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return a.useEffect(() => {
O.default.track(b.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_invalid_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    className: j.paymentBannerIcon,
    color: E.Z.unsafe_rawColors.YELLOW_260.css
  }),
  (0, n.jsx)(u.Text, {
    className: j.paymentBannerText,
    variant: 'text-sm/normal',
    children: v.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
      daysPastDue: t,
      paymentModalRedirect: () => {
        (0, C.Z)({
          initialPlanId: s.planIdFromItems,
          openInvoiceId: i,
          analyticsLocations: r
        });
      }
    })
  })
]
  });
}

function y(e) {
  let {
subscription: t,
renewalInvoicePreview: s,
className: a
  } = e;
  return (0, n.jsxs)('div', {
className: r()(j.billingInformation, a),
children: [
  (0, n.jsx)(u.FormTitle, {
    tag: 'h3',
    className: j.detailBlockHeader,
    children: v.Z.Messages.PREMIUM_SETTINGS_BILLING_INFO
  }),
  (0, n.jsx)('div', {
    children: R.ZP.getBillingInformationString(t, s)
  })
]
  });
}

function V(e) {
  let {
className: t
  } = e;
  return (0, n.jsxs)('div', {
className: t,
children: [
  (0, n.jsx)(u.FormTitle, {
    className: j.sectionTitle,
    tag: 'h1',
    children: v.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
  }),
  (0, n.jsx)('p', {
    className: j.sectionDescription,
    children: v.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
  }),
  (0, n.jsx)(u.Card, {
    className: j.noItemsCard,
    type: u.Card.Types.CUSTOM,
    children: (0, n.jsxs)(h.Z, {
      align: h.Z.Align.CENTER,
      children: [
        (0, n.jsx)(g.Z, {
          game: null,
          size: g.Z.Sizes.SMALL,
          className: j.noItemsIcon
        }),
        (0, n.jsx)('span', {
          className: j.cardText,
          children: v.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })
      ]
    })
  })
]
  });
}

function Y(e) {
  let {
subscription: t,
analyticsLocation: s,
paymentSource: a,
busy: i,
fromStandaloneBillingPage: o,
showInvalidPaymentMethod: l,
showNoPaymentMethod: c,
fetchedCurrentInvoicePreview: d,
fetchedRenewalInvoicePreview: _
  } = e, {
analyticsLocations: E
  } = (0, S.ZP)(I.Z.SUBSCRIPTION_DETAILS), T = null != d ? {} : {
subscriptionId: t.id,
renewal: !0,
analyticsLocations: E,
analyticsLocation: s
  }, [N] = (0, M.ED)(T);
  N = null != d ? d : N;
  let C = null != _ ? {} : {
  subscriptionId: t.id,
  renewal: !0,
  applyEntitlements: !0,
  analyticsLocations: E,
  analyticsLocation: s
},
[m] = (0, M.ED)(C);
  return (m = null != _ ? _ : m, null == N || null == m) ? (0, n.jsx)(u.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: j.subscriptionRows,
    children: [
      (0, n.jsx)(P.Z, {
        subscription: t,
        renewalInvoicePreview: N,
        paymentSource: a,
        busy: i,
        analyticsLocation: s
      }),
      (0, n.jsx)(B, {
        subscription: t,
        renewalInvoicePreview: N,
        fromStandaloneBillingPage: o,
        className: j.guildSubscriptionRow
      })
    ]
  }),
  (0, n.jsx)('div', {
    children: (0, n.jsx)(u.HeadingLevel, {
      component: (0, n.jsx)(u.FormTitle, {
        tag: 'h5',
        children: v.Z.Messages.BILLING_STEP_PAYMENT
      }),
      children: (0, n.jsxs)('div', {
        className: j.details,
        children: [
          (0, n.jsx)(y, {
            subscription: t,
            renewalInvoicePreview: m,
            className: j.detailsBlock
          }),
          t.isPurchasedExternally || (null == a ? void 0 : a.id) === t.paymentSourceId ? (0, n.jsxs)('div', {
            className: r()(j.detailsBlock, {
              [j.redBorder]: l
            }),
            children: [
              (0, n.jsx)(u.FormTitle, {
                tag: 'h3',
                className: j.detailBlockHeader,
                children: t.isPurchasedExternally && null != t.paymentGateway ? v.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                  paymentGatewayName: b.Vzj[t.paymentGateway]
                }) : v.Z.Messages.BILLING_PAY_FOR_IT_WITH
              }),
              (0, n.jsx)(L.Z, {
                subscription: t,
                onPaymentSourceAdded: x.i1,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: s,
                currentInvoicePreview: N,
                dropdownClassName: j.paymentDropdown
              })
            ]
          }) : null
        ]
      })
    })
  })
]
  });
}
let w = new Set([
  b.O0b.ACTIVE,
  b.O0b.PAST_DUE,
  b.O0b.CANCELED,
  b.O0b.PAUSE_PENDING,
  b.O0b.PAUSED
]);

function k() {
  return a.useEffect(() => {
O.default.track(b.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_duplicate_subscriptions'
});
  }, []), (0, n.jsxs)('div', {
className: j.duplicateSubscriptionsBanner,
children: [
  (0, n.jsx)(u.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: E.Z.unsafe_rawColors.RED_360.css
  }),
  (0, n.jsx)(u.Text, {
    className: j.duplicateSubscriptionsBannerText,
    variant: 'text-sm/normal',
    children: v.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
      helpCenterLink: p.Z.getArticleURL(b.BhN.NITRO)
    })
  })
]
  });
}

function H(e) {
  var t;
  let s, {
subscription: a,
subscriptions: i,
paymentSource: r,
busy: o,
className: l,
fromStandaloneBillingPage: c = !0,
analyticsLocation: E
  } = e;
  null != i && null != i[0] && (a = i[0]);
  let {
analyticsLocations: T
  } = (0, S.ZP)(I.Z.SUBSCRIPTION_DETAILS), N = null != i ? i.slice(1) : [], [C] = (0, M.ED)({
subscriptionId: a.id,
renewal: !0,
analyticsLocations: T,
analyticsLocation: E
  }), [h] = (0, M.ED)({
subscriptionId: a.id,
renewal: !0,
applyEntitlements: !0,
analyticsLocations: T,
analyticsLocation: E
  }), g = (0, _.e7)([A.default], () => {
var e;
return null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
  }), O = d()(a.currentPeriodEnd), p = null != a.paymentSourceId, R = null !== (t = null == h ? void 0 : h.total) && void 0 !== t ? t : 0, x = null == r ? void 0 : r.invalid, f = !p && R > 0 && (7 >= O.diff(d()(), 'days') || a.status === b.O0b.PAST_DUE) && !g && !a.isPurchasedExternally, P = x && a.status === b.O0b.PAST_DUE && !g && !a.isPurchasedExternally, L = (0, D.U)(), B = !g && L, y = (null == a ? void 0 : a.status) === b.O0b.PAST_DUE ? d()().diff(d()(a.currentPeriodStart), 'days') : 0, [V] = (0, M.Ox)({
subscriptionId: a.id,
preventFetch: !B
  });
  return null == C || null == h ? (0, n.jsx)(u.Spinner, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, m.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (s = (0, n.jsx)(Z.Z, {
subscription: a,
renewalMutations: a.renewalMutations,
className: j.renewalMutationNotice,
analyticsLocation: E
  })), (0, n.jsx)('div', {
className: l,
children: (0, n.jsxs)(u.HeadingLevel, {
  component: (0, n.jsx)(u.FormTitle, {
    className: j.sectionTitle,
    tag: 'h1',
    children: v.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
  }),
  children: [
    f ? (0, n.jsx)(U, {}) : null,
    P ? (0, n.jsx)(G, {}) : null,
    B && null != V ? (0, n.jsx)(F, {
      daysPastDue: y,
      subscription: a,
      openInvoiceId: V.id
    }) : null,
    s,
    (0, n.jsx)('div', {
      children: (0, n.jsx)('p', {
        className: j.sectionDescription,
        children: v.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
      })
    }),
    (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)('div', {
          className: N.length > 0 ? j.dupSubscriptionRow : j.__invalid_singleSubscription,
          children: (0, n.jsx)(Y, {
            subscription: a,
            analyticsLocation: E,
            paymentSource: r,
            busy: o,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: f,
            showInvalidPaymentMethod: P,
            fetchedCurrentInvoicePreview: C,
            fetchedRenewalInvoicePreview: h
          })
        }),
        N.map((e, t) => (0, n.jsxs)('div', {
          className: j.dupSubscriptionRow,
          children: [
            (0, n.jsx)(u.FormTitle, {
              tag: 'h2',
              className: j.duplicateHeader,
              children: 'Duplicate Subscriptions'
            }),
            (0, n.jsx)(Y, {
              subscription: e,
              analyticsLocation: E,
              paymentSource: r,
              busy: o,
              fromStandaloneBillingPage: c,
              showNoPaymentMethod: f,
              showInvalidPaymentMethod: P,
              fetchedCurrentInvoicePreview: null,
              fetchedRenewalInvoicePreview: null
            })
          ]
        }, t))
      ]
    })
  ]
})
  }));
}