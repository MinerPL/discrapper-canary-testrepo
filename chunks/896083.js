"use strict";
n.r(t), n.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return s
  }
}), n("47120");
var a = n("470079"),
  l = n("295141");
let s = () => {
  let [e, t] = a.useState(!1), [n, s] = a.useState(null);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: a.useCallback(async (e, n, a) => {
      t(!0), s(null);
      try {
        return await (0, l.getGuildRoleSubscriptionTrialEligibility)(e, n, a)
      } catch (e) {
        s(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}