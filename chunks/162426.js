"use strict";
u.r(e), u.d(e, {
  default: function() {
    return l
  }
}), u("222007");
var n = u("884691"),
  r = u("599417"),
  i = u("782340");

function l(t) {
  let [e, u] = n.useState(!1), [l, o] = n.useState(null), c = n.useCallback(async function() {
    for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
    try {
      return o(null), u(!0), await t(...n)
    } catch (t) {
      t.message !== i.default.Messages.MFA_V2_CANCELED && o(t instanceof r.default ? t : new r.default(t))
    } finally {
      u(!1)
    }
  }, [t]);
  return [c, {
    loading: e,
    error: l
  }]
}