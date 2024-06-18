"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(580747),
  r = n(479801);

function s(e) {
  let t = null == e ? void 0 : e.paymentGateway,
    n = (0, i.Z)("shop_disable_cache"),
    s = (0, i.Z)("shop_include_unpublished");
  return (0, r.e)({
    noCache: n,
    includeUnpublished: s,
    paymentGateway: t
  })
}