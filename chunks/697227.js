"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionMutationPlanId: function() {
    return s
  },
  getRoleSubscriptionPlanId: function() {
    return l
  }
});
var r = n("512722"),
  i = n.n(r);

function l(e) {
  let t = e.items;
  return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
}

function s(e) {
  var t;
  let n = null == e ? void 0 : null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
  if (null != n) return i()(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? void 0 : n[0].planId
}