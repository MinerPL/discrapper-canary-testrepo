"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("627445"),
  u = s.n(r),
  o = s("446674"),
  d = s("819855"),
  c = s("77078"),
  E = s("850068"),
  f = s("812204"),
  _ = s("685665"),
  p = s("161778"),
  m = s("797647"),
  I = s("10514"),
  N = s("145131"),
  S = s("423487"),
  T = s("719923"),
  C = s("153160"),
  P = s("782340"),
  R = s("264188");

function A(e) {
  let {
    subscription: t,
    renewalMutations: s,
    transitionState: n,
    onClose: i,
    analyticsLocation: l
  } = e, r = (0, o.useStateFromStores)([p.default], () => p.default.theme), {
    analyticsLocations: S
  } = (0, _.default)(f.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function A() {
    await (0, E.upgradeSubscription)(t, t.planId, S, l), i()
  }
  let M = I.default.get(t.planId);
  u(null != M, "Missing subscriptionPlan");
  let h = (0, T.getPrice)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    L = (0, C.formatRate)((0, C.formatPrice)(h.amount, h.currency), M.interval, M.intervalCount);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: n,
    "aria-label": P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, a.jsxs)(c.ModalHeader, {
      justify: N.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, a.jsx)(c.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(c.ModalContent, {
      className: R.modalBody,
      children: (0, m.isNoneSubscription)(t.planId) ? P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: T.default.getDisplayName(s.planId),
        existingRate: L
      }) : P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: T.default.getDisplayName(t.planId),
        downgradedPlan: T.default.getDisplayName(s.planId),
        existingRate: L
      })
    }), (0, a.jsxs)(c.ModalFooter, {
      children: [(0, a.jsx)(c.Button, {
        onClick: A,
        children: P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, a.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, d.isThemeLight)(r) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: i,
        children: P.default.Messages.NEVERMIND
      })]
    })]
  })
}

function M(e) {
  let {
    subscription: t,
    renewalMutations: s,
    className: i,
    analyticsLocation: r
  } = e, [u, o] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: l(R.root, i),
    children: [(0, a.jsx)(S.default, {
      className: R.infoIcon
    }), (0, a.jsx)("div", {
      className: R.text,
      children: P.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, T.getExternalPlanDisplayName)(s) : T.default.getDisplayName(s.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
      onClick: e => {
        o(!0), e.preventDefault()
      },
      className: R.cancelLink,
      children: P.default.Messages.CANCEL
    }), u ? (0, a.jsx)(c.Modal, {
      renderModal: e => {
        let {
          transitionState: n
        } = e;
        return (0, a.jsx)(A, {
          subscription: t,
          renewalMutations: s,
          transitionState: n,
          onClose: () => o(!1),
          analyticsLocation: r
        })
      },
      onCloseRequest: () => o(!1)
    }) : null]
  })
}