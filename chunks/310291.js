"use strict";
s.r(t), s("47120");
var a = s("470079"),
  l = s("392711"),
  n = s.n(l),
  i = s("232473");
let r = e => {
  let t = {};
  for (let s of e) {
    let e = "".concat(s.period_starting_at, ",").concat(s.status);
    null == t[e] && (t[e] = {
      key: e,
      periodStartingAt: s.period_starting_at,
      ppgs: {},
      paymentsCount: 0,
      amount: 0
    });
    let a = t[e];
    a.amount += s.amount, a.paymentsCount += s.payments_count, a.ppgs[s.grouping_id] = s
  }
  return n().orderBy(Object.values(t), ["periodStartingAt"], ["desc"])
};
t.default = (e, t) => {
  let {
    groupType: s,
    teamId: l
  } = t, [n, o] = a.useState(!0), [d, u] = a.useState([]), c = a.useCallback(async () => {
    if (u([]), null == e) {
      o(!1);
      return
    }
    try {
      o(!0);
      let t = await i.getPaymentPayoutGroups(e, {
        grouping_type: s
      });
      u(t)
    } catch {} finally {
      o(!1)
    }
  }, [e, s]);
  return a.useEffect(() => {
    c()
  }, [c]), {
    payoutsByPeriod: a.useMemo(() => r(null != l ? d.filter(e => e.user_id === l) : d), [d, l]),
    loading: n
  }
}