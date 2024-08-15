n.d(t, {
  F: function() {
return s;
  }
}), n(47120);
var i = n(470079),
  a = n(295141);
let s = () => {
  let [e, t] = i.useState(!1), [n, s] = i.useState(null);
  return {
loading: e,
error: n,
getTrialPurchaseEligibility: i.useCallback(async (e, n, i) => {
  t(!0), s(null);
  try {
    return await (0, a.LB)(e, n, i);
  } catch (e) {
    s(e);
  } finally {
    t(!1);
  }
}, [])
  };
};