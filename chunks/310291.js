"use strict";
t(47120);
var n = t(470079),
  i = t(392711),
  l = t.n(i),
  a = t(232473);
let r = e => {
  let s = {};
  for (let t of e) {
    let e = "".concat(t.period_starting_at, ",").concat(t.status);
    null == s[e] && (s[e] = {
      key: e,
      periodStartingAt: t.period_starting_at,
      ppgs: {},
      paymentsCount: 0,
      amount: 0
    });
    let n = s[e];
    n.amount += t.amount, n.paymentsCount += t.payments_count, n.ppgs[t.grouping_id] = t
  }
  return l().orderBy(Object.values(s), ["periodStartingAt"], ["desc"])
};
s.Z = (e, s) => {
  let {
    groupType: t,
    teamId: i
  } = s, [l, o] = n.useState(!0), [c, d] = n.useState([]), u = n.useCallback(async () => {
    if (d([]), null == e) {
      o(!1);
      return
    }
    try {
      o(!0);
      let s = await a.C(e, {
        grouping_type: t
      });
      d(s)
    } catch {} finally {
      o(!1)
    }
  }, [e, t]);
  return n.useEffect(() => {
    u()
  }, [u]), {
    payoutsByPeriod: n.useMemo(() => r(null != i ? c.filter(e => e.user_id === i) : c), [c, i]),
    loading: l
  }
}