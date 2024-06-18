"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(470079),
  i = t(584825),
  l = t(14263);

function a(e, s) {
  let t = (0, i.qi)(e),
    a = (0, l.Z)(e);
  return n.useMemo(() => t.map(e => {
    var t;
    let n = null == e ? void 0 : e.role_id;
    return {
      ...null !== (t = null == s ? void 0 : s.ppgs[e.id]) && void 0 !== t ? t : {},
      key: e.id,
      subscriptionListing: e,
      roleMemberCount: null == n ? void 0 : null == a ? void 0 : a[n]
    }
  }), [t, null == s ? void 0 : s.ppgs, a])
}