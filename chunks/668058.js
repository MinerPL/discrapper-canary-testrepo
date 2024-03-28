"use strict";
n.r(t), n.d(t, {
  useExplicitMediaActions: function() {
    return l
  }
}), n("47120");
var s = n("470079"),
  a = n("881052");

function l(e) {
  let {
    onError: t,
    onSuccess: n,
    report: l
  } = e, [i, r] = s.useState(!1);
  return {
    reportFalsePositive: s.useCallback(async () => {
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
    }, [i, t, n, l]),
    isReportFalsePositiveLoading: i
  }
}