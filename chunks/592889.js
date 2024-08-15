t.d(s, {
  Z: function() {
return p;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  l = t.n(o),
  c = t(442837),
  d = t(780384),
  _ = t(481060),
  E = t(355467),
  u = t(100527),
  I = t(906732),
  T = t(600164),
  S = t(210887),
  N = t(301766),
  C = t(509545),
  m = t(74538),
  A = t(937615),
  g = t(689938),
  O = t(981129);

function h(e) {
  let {
subscription: s,
renewalMutations: t,
transitionState: a,
onClose: i,
analyticsLocation: r
  } = e, o = (0, c.e7)([S.Z], () => S.Z.theme), {
analyticsLocations: h
  } = (0, I.ZP)(u.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function p() {
await (0, E.dP)(s, s.planId, h, r), i();
  }
  let R = C.Z.get(s.planId);
  l()(null != R, 'Missing subscriptionPlan');
  let x = (0, m.aS)(s.planId, !1, !1, {
  paymentSourceId: s.paymentSourceId,
  currency: s.currency
}),
M = (0, A.og)((0, A.T4)(x.amount, x.currency), R.interval, R.intervalCount);
  return (0, n.jsxs)(_.ModalRoot, {
transitionState: a,
'aria-label': g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
children: [
  (0, n.jsxs)(_.ModalHeader, {
    justify: T.Z.Justify.BETWEEN,
    separator: !1,
    children: [
      (0, n.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }),
      (0, n.jsx)(_.ModalCloseButton, {
        onClick: i
      })
    ]
  }),
  (0, n.jsx)(_.ModalContent, {
    className: O.modalBody,
    children: (0, N.Q0)(s.planId) ? g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
      downgradedPlan: m.ZP.getDisplayName(t.planId),
      existingRate: M
    }) : g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
      existingPlan: m.ZP.getDisplayName(s.planId),
      downgradedPlan: m.ZP.getDisplayName(t.planId),
      existingRate: M
    })
  }),
  (0, n.jsxs)(_.ModalFooter, {
    children: [
      (0, n.jsx)(_.Button, {
        onClick: p,
        children: g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }),
      (0, n.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, d.ap)(o) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: i,
        children: g.Z.Messages.NEVERMIND
      })
    ]
  })
]
  });
}

function p(e) {
  let {
subscription: s,
renewalMutations: t,
className: i,
analyticsLocation: o
  } = e, [l, c] = a.useState(!1);
  return (0, n.jsxs)('div', {
className: r()(O.root, i),
children: [
  (0, n.jsx)(_.CircleWarningIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: O.infoIcon
  }),
  (0, n.jsx)('div', {
    className: O.text,
    children: g.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
      planName: s.hasExternalPlanChange ? (0, m.zL)(t) : m.ZP.getDisplayName(t.planId),
      date: s.currentPeriodEnd
    })
  }),
  s.isPurchasedExternally ? null : (0, n.jsx)(_.Anchor, {
    onClick: e => {
      c(!0), e.preventDefault();
    },
    className: O.cancelLink,
    children: g.Z.Messages.CANCEL
  }),
  l ? (0, n.jsx)(_.Modal, {
    renderModal: e => {
      let {
        transitionState: a
      } = e;
      return (0, n.jsx)(h, {
        subscription: s,
        renewalMutations: t,
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