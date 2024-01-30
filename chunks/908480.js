"use strict";
n.r(t), n.d(t, {
  useExplicitMediaActions: function() {
    return a
  }
}), n("222007");
var s = n("884691"),
  l = n("448993");

function a(e) {
  let {
    onError: t,
    onSuccess: n,
    report: a
  } = e, [i, r] = s.useState(!1), o = s.useCallback(async () => {
    if (!i) {
      r(!0);
      try {
        await a(), null == n || n()
      } catch (n) {
        let e = new l.APIError(n);
        null == t || t(e)
      } finally {
        r(!1)
      }
    }
  }, [i, t, n, a]);
  return {
    reportFalsePositive: o,
    isReportFalsePositiveLoading: i
  }
}