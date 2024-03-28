"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("470079"),
  l = s("584825"),
  n = s("14263");

function i(e, t) {
  let s = (0, l.useSubscriptionListingsForGuild)(e),
    i = (0, n.default)(e);
  return a.useMemo(() => s.map(e => {
    var s;
    let a = null == e ? void 0 : e.role_id;
    return {
      ...null !== (s = null == t ? void 0 : t.ppgs[e.id]) && void 0 !== s ? s : {},
      key: e.id,
      subscriptionListing: e,
      roleMemberCount: null == a ? void 0 : null == i ? void 0 : i[a]
    }
  }), [s, null == t ? void 0 : t.ppgs, i])
}