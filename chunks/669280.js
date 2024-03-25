"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("446674"),
  a = n("913144"),
  l = n("718517"),
  i = n("299039"),
  r = n("271938"),
  o = n("27618");
let u = 180 * l.default.Millis.DAY,
  d = !1;
class c extends s.default.Store {
  initialize() {
    this.waitFor(o.default, r.default)
  }
  isEligible() {
    return d
  }
}
c.displayName = "PremiumPromoStore";
var E = new c(a.default, {
  CONNECTION_OPEN: function() {
    let e = d;
    return e !== (d = o.default.getFriendIDs().length >= 10 && i.default.extractTimestamp(r.default.getId()) < Date.now() - u)
  }
})