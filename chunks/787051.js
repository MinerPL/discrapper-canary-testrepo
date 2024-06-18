"use strict";
t.d(s, {
  Z: function() {
    return a
  }
}), t(47120);
var n = t(470079),
  i = t(881052),
  l = t(53365);

function a(e) {
  let [s, t] = n.useState(!0), [a, r] = n.useState(), [o, c] = n.useState(), d = n.useCallback(async e => {
    t(!0), r(void 0);
    try {
      let s = await l.wZ(e);
      c(s)
    } catch (e) {
      r(new i.Hx(e))
    } finally {
      t(!1)
    }
  }, []);
  return n.useEffect(() => {
    d(e)
  }, [e, d]), {
    isLoading: s,
    error: a,
    creatorMonetizationOnboardingMarketing: o
  }
}