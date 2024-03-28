"use strict";
a.r(t);
var s, r = a("442837"),
  l = a("570140");

function i(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function n(e, t) {
  let a = {};
  return e.forEach(e => {
    a[e] = t
  }), a
}
let o = {},
  u = new Date("2024-03-13").getTime(),
  c = new Date("2024-03-27").getTime(),
  d = ["1212569433839636530", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581147675205652", "1212581390936178768", "1212582298893946880", "1212582372877541427", "1212582452640350238"],
  f = ["1217624148080332820", "1217625289681801316", "1217625572168044604", "1217625794382401577", "1217626024540508170", "1217626509737459852", "1217627051217911848", "1217627230818009171"];
class h extends(s = r.default.PersistedStore) {
  initialize(e) {
    o = null != e ? e : {}
  }
  getState() {
    return o
  }
  getIsProductNew(e) {
    var t;
    return Date.now() < (null !== (t = o[e]) && void 0 !== t ? t : 0)
  }
}
i(h, "displayName", "CollectiblesProductFreshnessStore"), i(h, "persistKey", "CollectiblesProductFreshnessStore"), i(h, "migrations", [() => n(d, u), () => n(f, c), e => ({
  ...e,
  "1217626219651006495": c
})]), t.default = new h(l.default, {
  COLLECTIBLES_PRODUCT_DETAILS_CLOSE: function(e) {
    delete o[e.item.skuId]
  }
})