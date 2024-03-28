"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120");
var a = s("470079"),
  l = s("479531"),
  n = s("53365");

function i(e) {
  let [t, s] = a.useState(), [i, r] = a.useState(!1), [o, d] = a.useState(!1);
  return {
    error: t,
    loading: i,
    createEnableRequest: a.useCallback(async () => {
      if (null != e) {
        r(!0), s(void 0), d(!1);
        try {
          await n.createCreatorMonetizationEnableRequest(e), d(!0)
        } catch (e) {
          s(new l.default(e))
        } finally {
          r(!1)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}