"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("866227"),
  i = n.n(l),
  r = n("850068"),
  o = n("812204"),
  u = n("685665"),
  d = n("837008"),
  c = n("755574"),
  f = n("782340");
let E = e => {
  let [t, n] = s.useState(!1), [a, l] = s.useState(null), i = async t => {
    n(!0), l(null);
    try {
      await (0, r.deleteRenewalMutation)(t, e)
    } catch (e) {
      l(e)
    } finally {
      n(!1)
    }
  };
  return {
    resetRenewalMutation: i,
    submitting: t,
    error: a
  }
};

function h(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: l
  } = e, {
    analyticsLocations: r
  } = (0, u.default)(o.default.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: _,
    error: C
  } = E(r), S = (0, d.useSubscriptionListingsForGroup)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: I,
    nextListing: m
  } = s.useMemo(() => {
    if ((null == n ? void 0 : n.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId,
      a = S.find(t => t.subscription_plans[0].id === e),
      s = S.find(e => e.subscription_plans[0].id === t);
    return {
      currentListing: a,
      nextListing: s
    }
  }, [n, S]);
  if (null == n || null == I || null == m) return null;
  let p = i(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, a.jsx)(c.default, {
    message: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: I.name,
      nextListing: m.name,
      changeDate: p
    }),
    error: null == C ? void 0 : C.message,
    onClick: () => h(n),
    submitting: _,
    ctaMessage: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: l
  })
}