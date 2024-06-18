"use strict";
n.d(t, {
  r: function() {
    return l
  }
}), n(470079), n(399606);
var i = n(430824),
  r = n(358085),
  s = n(341653),
  o = n(981631);
let a = [o.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

function l(e) {
  if (!(0, r.isIOS)()) return !1;
  let t = (0, s.e)();
  if (null == t || -1 === function(e, t) {
      let n = e.split(".").map(Number),
        i = t.split(".").map(Number),
        r = Math.max(n.length, i.length);
      for (let e = 0; e < r; e++) {
        var s, o;
        let t = null !== (s = n[e]) && void 0 !== s ? s : 0,
          r = null !== (o = i[e]) && void 0 !== o ? o : 0;
        if (t < r) return -1;
        if (t > r) return 1
      }
      return 0
    }(t, "13.2")) return !1;
  let n = i.Z.getGuild(e);
  return !!(null != n && a.every(e => n.hasFeature(e))) || !1
}