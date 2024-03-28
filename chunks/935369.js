"use strict";
r.r(e), r.d(e, {
  default: function() {
    return l
  }
}), r("47120");
var n = r("470079"),
  u = r("479531"),
  i = r("689938");

function l(t) {
  let [e, r] = n.useState(!1), [l, o] = n.useState(null);
  return [n.useCallback(async function() {
    for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
    try {
      return o(null), r(!0), await t(...n)
    } catch (t) {
      t.message !== i.default.Messages.MFA_V2_CANCELED && o(t instanceof u.default ? t : new u.default(t))
    } finally {
      r(!1)
    }
  }, [t]), {
    loading: e,
    error: l
  }]
}