s.r(t), s.d(t, {
  default: function() {
return U;
  }
}), s(411104), s(47120);
var n, a, i = s(735250),
  r = s(470079),
  o = s(392711),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(355467),
  E = s(179360),
  u = s(100527),
  T = s(906732),
  I = s(374649),
  S = s(431369),
  N = s(55610),
  C = s(653798),
  m = s(311821),
  A = s(42818),
  g = s(314884),
  h = s(509545),
  O = s(78839),
  p = s(285952),
  R = s(267642),
  x = s(74538),
  M = s(937615),
  f = s(518062),
  D = s(474936),
  P = s(231338),
  L = s(689938),
  b = s(326785);

function Z(e) {
  let {
premiumSubscription: t,
isInventory: s,
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
        children: s ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
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
        children: t.isPurchasedExternally && null != t.paymentGateway ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: P.Vz[t.paymentGateway],
          subscriptionManagementLink: (0, x.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
        }) : s ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: t.currentPeriodEnd
        }) : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: t.currentPeriodEnd
        })
      }),
      (0, i.jsx)(N.Z, {
        fromBoostCancelModal: !0
      })
    ]
  }),
  t.isPurchasedExternally ? null : (0, i.jsxs)(d.ModalFooter, {
    justify: p.Z.Justify.START,
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
async function v(e, t, s, n) {
  let a = null != n ? n : function() {
let e = Object.values(g.Z.boostSlots),
  t = l().sortBy(e.filter(e => !(0, R.tl)(e)), e => [
    null != e.premiumGuildSubscription,
    null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null
  ])[0];
return null != t ? t.id : null;
  }();
  if (null == a)
throw Error('No slot to cancel');
  await (0, E.pD)(a), await (0, _.Mg)(e, {
items: (0, x.MY)(e, t)
  }, s);
}

function j(e) {
  var t, s, n;
  let {
premiumSubscription: a,
guildBoostSlotId: o,
onBack: l,
onNext: _,
onClose: E
  } = e, [N, g] = r.useState(!1), [O, R] = r.useMemo(() => {
try {
  return [
    (0, S.g)(a, -1),
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
  } = (0, T.ZP)(), [B] = (0, I.ED)({
subscriptionId: a.id,
renewal: !0,
currency: a.currency,
paymentSourceId: a.paymentSourceId,
analyticsLocations: j,
analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), U = null != Z ? (0, x.Zx)(a, null !== (n = null === (t = O[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== n ? n : 0, Z.id) : null, [G] = (0, I.ED)({
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
    planId: t
  } = e;
  return !D.Z1.has(t);
}) && null == a.renewalMutations || (null === (s = a.renewalMutations) || void 0 === s ? void 0 : s.items.find(e => {
  let {
    planId: t
  } = e;
  return !D.Z1.has(t);
})) != null,
y = O.some(e => {
  let {
    planId: t
  } = e;
  return D.Z1.has(t);
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
      (0, i.jsxs)(C.PO, {
        className: b.invoiceTable,
        children: [
          (0, i.jsx)(C.q9, {
            children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
          }),
          (0, i.jsx)(C.R$, {
            label: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
              subscriptionCount: 1
            }),
            value: (0, M.og)((0, M.T4)(V, a.currency), Y, w),
            className: b.invoiceCancelRow
          }),
          null != U && U.length > 0 ? (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)(C.KU, {}),
              (0, i.jsx)(A.nd, {
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
    align: p.Z.Align.CENTER,
    justify: p.Z.Justify.BETWEEN,
    children: [
      (0, i.jsx)(d.Button, {
        color: d.Button.Colors.RED,
        disabled: N,
        onClick: async () => {
          try {
            g(!0), await v(a, O, j, o), _();
          } catch {
            g(!1);
          }
        },
        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }),
      (0, i.jsx)(m.Z, {
        onClick: l
      })
    ]
  })
]
  });
}

function B(e) {
  let {
premiumSubscription: t,
onClose: s
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
        onClick: s
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
          endDate: t.currentPeriodEnd
        })
      })
    ]
  }),
  (0, i.jsx)(d.ModalFooter, {
    children: (0, i.jsx)(d.Button, {
      onClick: s,
      children: L.Z.Messages.OKAY
    })
  })
]
  });
}

function U(e) {
  let t, {
guildBoostSlot: s,
transitionState: n,
onClose: a
  } = e;
  r.useEffect(() => {
!O.ZP.hasFetchedSubscriptions() && (0, _.jg)();
  }, []);
  let o = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
[l, E] = r.useState(1),
{
  analyticsLocations: I
} = (0, T.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == o)
t = (0, i.jsx)(d.ModalContent, {
  children: (0, i.jsx)(d.Spinner, {})
});
  else
switch (l) {
  case 1:
    t = (0, i.jsx)(Z, {
      premiumSubscription: o,
      isInventory: null == s.premiumGuildSubscription,
      onNext: () => E(2),
      onClose: a
    });
    break;
  case 2:
    t = (0, i.jsx)(j, {
      premiumSubscription: o,
      guildBoostSlotId: s.id,
      onBack: () => E(1),
      onNext: () => E(3),
      onClose: a
    });
    break;
  case 3:
    t = (0, i.jsx)(B, {
      premiumSubscription: o,
      onClose: a
    });
    break;
  default:
    throw Error('Unexpected step: '.concat(l));
}
  return (0, i.jsx)(T.Gt, {
value: I,
children: (0, i.jsx)(d.ModalRoot, {
  transitionState: n,
  children: t
})
  });
}