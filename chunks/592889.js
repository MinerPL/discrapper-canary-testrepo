s.d(t, {
  Z: function() {
return p;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(780384),
  _ = s(481060),
  E = s(355467),
  u = s(100527),
  T = s(906732),
  I = s(210887),
  S = s(301766),
  N = s(509545),
  C = s(285952),
  m = s(74538),
  A = s(937615),
  h = s(689938),
  g = s(288911);

function O(e) {
  let {
subscription: t,
renewalMutations: s,
transitionState: a,
onClose: i,
analyticsLocation: r
  } = e, o = (0, c.e7)([I.Z], () => I.Z.theme), {
analyticsLocations: O
  } = (0, T.ZP)(u.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function p() {
await (0, E.dP)(t, t.planId, O, r), i();
  }
  let R = N.Z.get(t.planId);
  l()(null != R, 'Missing subscriptionPlan');
  let x = (0, m.aS)(t.planId, !1, !1, {
  paymentSourceId: t.paymentSourceId,
  currency: t.currency
}),
M = (0, A.og)((0, A.T4)(x.amount, x.currency), R.interval, R.intervalCount);
  return (0, n.jsxs)(_.ModalRoot, {
transitionState: a,
'aria-label': h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
children: [
  (0, n.jsxs)(_.ModalHeader, {
    justify: C.Z.Justify.BETWEEN,
    separator: !1,
    children: [
      (0, n.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }),
      (0, n.jsx)(_.ModalCloseButton, {
        onClick: i
      })
    ]
  }),
  (0, n.jsx)(_.ModalContent, {
    className: g.modalBody,
    children: (0, S.Q0)(t.planId) ? h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
      downgradedPlan: m.ZP.getDisplayName(s.planId),
      existingRate: M
    }) : h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
      existingPlan: m.ZP.getDisplayName(t.planId),
      downgradedPlan: m.ZP.getDisplayName(s.planId),
      existingRate: M
    })
  }),
  (0, n.jsxs)(_.ModalFooter, {
    children: [
      (0, n.jsx)(_.Button, {
        onClick: p,
        children: h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }),
      (0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, d.ap)(o) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: i,
        children: h.Z.Messages.NEVERMIND
      })
    ]
  })
]
  });
}

function p(e) {
  let {
subscription: t,
renewalMutations: s,
className: i,
analyticsLocation: o
  } = e, [l, c] = a.useState(!1);
  return (0, n.jsxs)('div', {
className: r()(g.root, i),
children: [
  (0, n.jsx)(_.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: g.infoIcon
  }),
  (0, n.jsx)('div', {
    className: g.text,
    children: h.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
      planName: t.hasExternalPlanChange ? (0, m.zL)(s) : m.ZP.getDisplayName(s.planId),
      date: t.currentPeriodEnd
    })
  }),
  t.isPurchasedExternally ? null : (0, n.jsx)(_.Anchor, {
    onClick: e => {
      c(!0), e.preventDefault();
    },
    className: g.cancelLink,
    children: h.Z.Messages.CANCEL
  }),
  l ? (0, n.jsx)(_.Modal, {
    renderModal: e => {
      let {
        transitionState: a
      } = e;
      return (0, n.jsx)(O, {
        subscription: t,
        renewalMutations: s,
        transitionState: a,
        onClose: () => c(!1),
        analyticsLocation: o
      });
    },
    onCloseRequest: () => c(!1)
  }) : null
]
  });
}