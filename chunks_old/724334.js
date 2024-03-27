"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("884691"),
  l = s("448993"),
  n = s("197509");

function i(e) {
  let [t, s] = a.useState(!0), [i, r] = a.useState(), [o, d] = a.useState(), u = a.useCallback(async e => {
    s(!0), r(void 0);
    try {
      let t = await n.getCreatorMonetizationOnboardingMarketing(e);
      d(t)
    } catch (e) {
      r(new l.APIError(e))
    } finally {
      s(!1)
    }
  }, []);
  return a.useEffect(() => {
    u(e)
  }, [e, u]), {
    isLoading: t,
    error: i,
    creatorMonetizationOnboardingMarketing: o
  }
}