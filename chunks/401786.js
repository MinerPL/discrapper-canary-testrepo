t.r(s), t.d(s, {
  default: function() {
return U;
  }
}), t(411104), t(47120);
var n, a, i = t(735250),
  r = t(470079),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(355467),
  E = t(179360),
  u = t(100527),
  I = t(906732),
  T = t(600164),
  S = t(374649),
  N = t(431369),
  C = t(55610),
  m = t(653798),
  A = t(311821),
  g = t(42818),
  O = t(314884),
  h = t(509545),
  p = t(78839),
  R = t(267642),
  x = t(74538),
  M = t(937615),
  f = t(518062),
  D = t(474936),
  P = t(231338),
  L = t(689938),
  b = t(637815);

function Z(e) {
  let {
premiumSubscription: s,
isInventory: t,
onNext: n,
onClose: a
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(d.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: t ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
      }),
      (0, i.jsx)(d.ModalCloseButton, {
        onClick: a
      })
    ]
  }),
  (0, i.jsxs)(d.ModalContent, {
    className: b.body,
    children: [
      (0, i.jsx)('div', {
        className: b.cancelImage
      }),
      (0, i.jsx)('div', {
        children: s.isPurchasedExternally && null != s.paymentGateway ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: P.Vz[s.paymentGateway],
          subscriptionManagementLink: (0, x.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
        }) : t ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: s.currentPeriodEnd
        }) : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: s.currentPeriodEnd
        })
      }),
      (0, i.jsx)(C.Z, {
        fromBoostCancelModal: !0
      })
    ]
  }),
  s.isPurchasedExternally ? null : (0, i.jsxs)(d.ModalFooter, {
    justify: T.Z.Justify.START,
    children: [
      (0, i.jsx)(d.Button, {
        onClick: n,
        children: L.Z.Messages.NEXT
      }),
      (0, i.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        onClick: a,
        children: L.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}
(a = n || (n = {}))[a.START = 1] = 'START', a[a.PREVIEW = 2] = 'PREVIEW', a[a.CONFIRM = 3] = 'CONFIRM';
async function v(e, s, t, n) {
  let a = null != n ? n : function() {
let e = Object.values(O.Z.boostSlots),
  s = l().sortBy(e.filter(e => !(0, R.tl)(e)), e => [
    null != e.premiumGuildSubscription,
    null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null
  ])[0];
return null != s ? s.id : null;
  }();
  if (null == a)
throw Error('No slot to cancel');
  await (0, E.pD)(a), await (0, _.Mg)(e, {
items: (0, x.MY)(e, s)
  }, t);
}

function j(e) {
  var s, t, n;
  let {
premiumSubscription: a,
guildBoostSlotId: o,
onBack: l,
onNext: _,
onClose: E
  } = e, [C, O] = r.useState(!1), [p, R] = r.useMemo(() => {
try {
  return [
    (0, N.g)(a, -1),
    !1
  ];
} catch {
  return [
    [],
    !0
  ];
}
  }, [a]);
  r.useEffect(() => {
R && E();
  }, [R]);
  let {
premiumSubscriptionPlan: P,
premiumGuildPlan: Z
  } = (0, c.cj)([h.Z], () => {
let e = h.Z.get(a.planId);
return {
  premiumSubscriptionPlan: e,
  premiumGuildPlan: null != e ? h.Z.getForSkuAndInterval((0, x.Wz)(D.Si.GUILD), e.interval, e.intervalCount) : null
};
  }), {
analyticsLocations: j
  } = (0, I.ZP)(), [B] = (0, S.ED)({
subscriptionId: a.id,
renewal: !0,
currency: a.currency,
paymentSourceId: a.paymentSourceId,
analyticsLocations: j,
analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), U = null != Z ? (0, x.Zx)(a, null !== (n = null === (s = p[0]) || void 0 === s ? void 0 : s.quantity) && void 0 !== n ? n : 0, Z.id) : null, [G] = (0, S.ED)({
subscriptionId: a.id,
items: U,
renewal: !0,
analyticsLocations: j,
analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == G || null == P || null == Z || null == B)
return (0, i.jsx)(d.Spinner, {});
  let F = a.items.some(e => {
  let {
    planId: s
  } = e;
  return !D.Z1.has(s);
}) && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
  let {
    planId: s
  } = e;
  return !D.Z1.has(s);
})) != null,
y = p.some(e => {
  let {
    planId: s
  } = e;
  return D.Z1.has(s);
}),
V = F || y ? G.total - B.total : -B.total,
{
  interval: Y,
  intervalCount: w
} = P;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(f.Z, {
    onClose: E
  }),
  (0, i.jsxs)(d.ModalContent, {
    className: b.body,
    children: [
      (0, i.jsx)('div', {
        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
          endDate: G.subscriptionPeriodStart
        })
      }),
      (0, i.jsxs)(m.PO, {
        className: b.invoiceTable,
        children: [
          (0, i.jsx)(m.q9, {
            children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
          }),
          (0, i.jsx)(m.R$, {
            label: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
              subscriptionCount: 1
            }),
            value: (0, M.og)((0, M.T4)(V, a.currency), Y, w),
            className: b.invoiceCancelRow
          }),
          null != U && U.length > 0 ? (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)(m.KU, {}),
              (0, i.jsx)(g.nd, {
                premiumSubscription: a,
                renewalInvoice: G,
                isUpdate: !0
              })
            ]
          }) : null
        ]
      })
    ]
  }),
  (0, i.jsxs)(d.ModalFooter, {
    align: T.Z.Align.CENTER,
    justify: T.Z.Justify.BETWEEN,
    children: [
      (0, i.jsx)(d.Button, {
        color: d.Button.Colors.RED,
        disabled: C,
        onClick: async () => {
          try {
            O(!0), await v(a, p, j, o), _();
          } catch {
            O(!1);
          }
        },
        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }),
      (0, i.jsx)(A.Z, {
        onClick: l
      })
    ]
  })
]
  });
}

function B(e) {
  let {
premiumSubscription: s,
onClose: t
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(d.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
      }),
      (0, i.jsx)(d.ModalCloseButton, {
        onClick: t
      })
    ]
  }),
  (0, i.jsxs)(d.ModalContent, {
    className: b.body,
    children: [
      (0, i.jsx)('div', {
        className: b.cancelImage
      }),
      (0, i.jsx)('div', {
        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
          endDate: s.currentPeriodEnd
        })
      })
    ]
  }),
  (0, i.jsx)(d.ModalFooter, {
    children: (0, i.jsx)(d.Button, {
      onClick: t,
      children: L.Z.Messages.OKAY
    })
  })
]
  });
}

function U(e) {
  let s, {
guildBoostSlot: t,
transitionState: n,
onClose: a
  } = e;
  r.useEffect(() => {
!p.ZP.hasFetchedSubscriptions() && (0, _.jg)();
  }, []);
  let o = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
[l, E] = r.useState(1),
{
  analyticsLocations: T
} = (0, I.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == o)
s = (0, i.jsx)(d.ModalContent, {
  children: (0, i.jsx)(d.Spinner, {})
});
  else
switch (l) {
  case 1:
    s = (0, i.jsx)(Z, {
      premiumSubscription: o,
      isInventory: null == t.premiumGuildSubscription,
      onNext: () => E(2),
      onClose: a
    });
    break;
  case 2:
    s = (0, i.jsx)(j, {
      premiumSubscription: o,
      guildBoostSlotId: t.id,
      onBack: () => E(1),
      onNext: () => E(3),
      onClose: a
    });
    break;
  case 3:
    s = (0, i.jsx)(B, {
      premiumSubscription: o,
      onClose: a
    });
    break;
  default:
    throw Error('Unexpected step: '.concat(l));
}
  return (0, i.jsx)(I.Gt, {
value: T,
children: (0, i.jsx)(d.ModalRoot, {
  transitionState: n,
  children: s
})
  });
}