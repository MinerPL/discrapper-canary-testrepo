"use strict";
n.r(t), n.d(t, {
  useExplicitMediaActions: function() {
    return l
  }
}), n("222007");
var s = n("884691"),
  a = n("448993");

function l(e) {
  let {
    onError: t,
    onSuccess: n,
    report: l
  } = e, [i, r] = s.useState(!1), o = s.useCallback(async () => {
    if (!i) {
      r(!0);
      try {
        await l(), null == n || n()
      } catch (n) {
        let e = new a.APIError(n);
        null == t || t(e)
      } finally {
        r(!1)
      }
    }
  }, [i, t, n, l]);
  return {
    reportFalsePositive: o,
    isReportFalsePositiveLoading: i
  }
}