"use strict";
t.d(s, {
  Z: function() {
    return a
  }
}), t(47120);
var n = t(470079),
  i = t(479531),
  l = t(53365);

function a(e) {
  let [s, t] = n.useState(), [a, r] = n.useState(!1), [o, c] = n.useState(!1);
  return {
    error: s,
    loading: a,
    createEnableRequest: n.useCallback(async () => {
      if (null != e) {
        r(!0), t(void 0), c(!1);
        try {
          await l.He(e), c(!0)
        } catch (e) {
          t(new i.Z(e))
        } finally {
          r(!1)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}