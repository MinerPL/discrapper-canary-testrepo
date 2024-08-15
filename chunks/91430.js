t.d(s, {
  MM: function() {
return V;
  },
  Yn: function() {
return H;
  },
  ZP: function() {
return k;
  },
  eS: function() {
return w;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  l = t.n(o),
  c = t(913527),
  d = t.n(c),
  _ = t(442837),
  E = t(692547),
  u = t(481060),
  I = t(230711),
  T = t(100527),
  S = t(906732),
  N = t(17894),
  C = t(600164),
  m = t(925329),
  A = t(963249),
  g = t(301766),
  O = t(594174),
  h = t(626135),
  p = t(63063),
  R = t(74538),
  x = t(212895),
  M = t(374649),
  f = t(160913),
  D = t(987997),
  P = t(393411),
  L = t(908951),
  b = t(592889),
  Z = t(981631),
  v = t(689938),
  j = t(653869);

function B(e) {
  let s, {
  subscription: t,
  renewalInvoicePreview: a,
  fromStandaloneBillingPage: i = !0,
  className: o
} = e,
c = (0, _.e7)([O.default], () => {
  let e = O.default.getCurrentUser();
  return l()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
});
  if (0 === (0, R.uV)(t.additionalPlans))
return null;
  let {
status: d
  } = t, E = (0, R.v6)(t);
  if (E)
s = j.guildBoostingSubscriptionRowCanceled;
  else
switch (d) {
  case Z.O0b.PAST_DUE:
  case Z.O0b.ACCOUNT_HOLD:
  case Z.O0b.BILLING_RETRY:
    s = j.guildBoostingSubscriptionRowFailedPayment;
    break;
  case Z.O0b.PAUSE_PENDING:
  case Z.O0b.PAUSED:
    s = j.guildBoostingSubscriptionRowPaused;
    break;
  default:
    s = j.guildBoostingSubscriptionRowActive;
}
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: r()(s, o),
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
              subscription: t,
              renewalInvoicePreview: a,
              user: c
            })
          })
        ]
      }),
      i && (0, n.jsx)(D.Z, {
        color: u.Button.Colors.BRAND,
        onClick: () => I.Z.open(Z.oAB.GUILD_BOOSTING),
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
h.default.track(Z.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_missing_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleWarningIcon, {
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
h.default.track(Z.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_invalid_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleWarningIcon, {
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
daysPastDue: s,
subscription: t,
openInvoiceId: i
  } = e, {
analyticsLocations: r
  } = (0, S.ZP)(T.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return a.useEffect(() => {
h.default.track(Z.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_invalid_payment_method'
});
  }, []), (0, n.jsxs)('div', {
className: j.paymentBanner,
children: [
  (0, n.jsx)(u.CircleWarningIcon, {
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
      daysPastDue: s,
      paymentModalRedirect: () => {
        (0, A.Z)({
          initialPlanId: t.planIdFromItems,
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
subscription: s,
renewalInvoicePreview: t,
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
    children: R.ZP.getBillingInformationString(s, t)
  })
]
  });
}

function V(e) {
  let {
className: s
  } = e;
  return (0, n.jsxs)('div', {
className: s,
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
    children: (0, n.jsxs)(C.Z, {
      align: C.Z.Align.CENTER,
      children: [
        (0, n.jsx)(m.Z, {
          game: null,
          size: m.Z.Sizes.SMALL,
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
subscription: s,
analyticsLocation: t,
paymentSource: a,
busy: i,
fromStandaloneBillingPage: o,
showInvalidPaymentMethod: l,
showNoPaymentMethod: c,
fetchedCurrentInvoicePreview: d,
fetchedRenewalInvoicePreview: _
  } = e, {
analyticsLocations: E
  } = (0, S.ZP)(T.Z.SUBSCRIPTION_DETAILS), I = null != d ? {} : {
subscriptionId: s.id,
renewal: !0,
analyticsLocations: E,
analyticsLocation: t
  }, [N] = (0, M.ED)(I);
  N = null != d ? d : N;
  let C = null != _ ? {} : {
  subscriptionId: s.id,
  renewal: !0,
  applyEntitlements: !0,
  analyticsLocations: E,
  analyticsLocation: t
},
[m] = (0, M.ED)(C);
  return (m = null != _ ? _ : m, null == N || null == m) ? (0, n.jsx)(u.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: j.subscriptionRows,
    children: [
      (0, n.jsx)(P.Z, {
        subscription: s,
        renewalInvoicePreview: N,
        paymentSource: a,
        busy: i,
        analyticsLocation: t
      }),
      (0, n.jsx)(B, {
        subscription: s,
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
            subscription: s,
            renewalInvoicePreview: m,
            className: j.detailsBlock
          }),
          (0, n.jsxs)('div', {
            className: r()(j.detailsBlock, {
              [j.redBorder]: l
            }),
            children: [
              (0, n.jsx)(u.FormTitle, {
                tag: 'h3',
                className: j.detailBlockHeader,
                children: s.isPurchasedExternally && null != s.paymentGateway ? v.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                  paymentGatewayName: Z.Vzj[s.paymentGateway]
                }) : v.Z.Messages.BILLING_PAY_FOR_IT_WITH
              }),
              (0, n.jsx)(L.Z, {
                subscription: s,
                onPaymentSourceAdded: x.i1,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: t,
                currentInvoicePreview: N,
                dropdownClassName: j.paymentDropdown
              })
            ]
          })
        ]
      })
    })
  })
]
  });
}
let w = new Set([
  Z.O0b.ACTIVE,
  Z.O0b.PAST_DUE,
  Z.O0b.CANCELED,
  Z.O0b.PAUSE_PENDING,
  Z.O0b.PAUSED
]);

function H() {
  return a.useEffect(() => {
h.default.track(Z.rMx.TOOLTIP_VIEWED, {
  type: 'subscription_settings_duplicate_subscriptions'
});
  }, []), (0, n.jsxs)('div', {
className: j.duplicateSubscriptionsBanner,
children: [
  (0, n.jsx)(u.CircleWarningIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: E.Z.unsafe_rawColors.RED_360.css
  }),
  (0, n.jsx)(u.Text, {
    className: j.duplicateSubscriptionsBannerText,
    variant: 'text-sm/normal',
    children: v.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
      helpCenterLink: p.Z.getArticleURL(Z.BhN.NITRO)
    })
  })
]
  });
}

function k(e) {
  var s;
  let t, {
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
analyticsLocations: I
  } = (0, S.ZP)(T.Z.SUBSCRIPTION_DETAILS), N = null != i ? i.slice(1) : [], [C] = (0, M.ED)({
subscriptionId: a.id,
renewal: !0,
analyticsLocations: I,
analyticsLocation: E
  }), [m] = (0, M.ED)({
subscriptionId: a.id,
renewal: !0,
applyEntitlements: !0,
analyticsLocations: I,
analyticsLocation: E
  }), A = (0, _.e7)([O.default], () => {
var e;
return null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
  }), h = d()(a.currentPeriodEnd), p = null != a.paymentSourceId, R = null !== (s = null == m ? void 0 : m.total) && void 0 !== s ? s : 0, x = null == r ? void 0 : r.invalid, D = !p && R > 0 && (7 >= h.diff(d()(), 'days') || a.status === Z.O0b.PAST_DUE) && !A && !a.isPurchasedExternally, P = x && a.status === Z.O0b.PAST_DUE && !A && !a.isPurchasedExternally, L = (0, f.U)(), B = !A && L, y = (null == a ? void 0 : a.status) === Z.O0b.PAST_DUE ? d()().diff(d()(a.currentPeriodStart), 'days') : 0, [V] = (0, M.Ox)({
subscriptionId: a.id,
preventFetch: !B
  });
  return null == C || null == m ? (0, n.jsx)(u.Spinner, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, g.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (t = (0, n.jsx)(b.Z, {
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
    D ? (0, n.jsx)(U, {}) : null,
    P ? (0, n.jsx)(G, {}) : null,
    B && null != V ? (0, n.jsx)(F, {
      daysPastDue: y,
      subscription: a,
      openInvoiceId: V.id
    }) : null,
    t,
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
            showNoPaymentMethod: D,
            showInvalidPaymentMethod: P,
            fetchedCurrentInvoicePreview: C,
            fetchedRenewalInvoicePreview: m
          })
        }),
        N.map((e, s) => (0, n.jsxs)('div', {
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
              showNoPaymentMethod: D,
              showInvalidPaymentMethod: P,
              fetchedCurrentInvoicePreview: null,
              fetchedRenewalInvoicePreview: null
            })
          ]
        }, s))
      ]
    })
  ]
})
  }));
}