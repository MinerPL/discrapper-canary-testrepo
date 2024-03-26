"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var r = a("446674"),
  s = a("913144");

function l(e, t) {
  let a = {};
  return e.forEach(e => {
    a[e] = t
  }), a
}
let n = {},
  i = new Date("2024-03-13").getTime(),
  o = new Date("2024-03-27").getTime(),
  c = ["1212569433839636530", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581147675205652", "1212581390936178768", "1212582298893946880", "1212582372877541427", "1212582452640350238"],
  u = ["1217624148080332820", "1217625289681801316", "1217625572168044604", "1217625794382401577", "1217626024540508170", "1217626509737459852", "1217627051217911848", "1217627230818009171"];
class d extends r.default.PersistedStore {
  initialize(e) {
    n = null != e ? e : {}
  }
  getState() {
    return n
  }
  getIsProductNew(e) {
    var t;
    return Date.now() < (null !== (t = n[e]) && void 0 !== t ? t : 0)
  }
}
d.displayName = "CollectiblesProductFreshnessStore", d.persistKey = "CollectiblesProductFreshnessStore", d.migrations = [() => l(c, i), () => l(u, o), e => ({
  ...e,
  "1217626219651006495": o
})];
var f = new d(s.default, {
  COLLECTIBLES_PRODUCT_DETAILS_CLOSE: function(e) {
    delete n[e.item.skuId]
  }
})