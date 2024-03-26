"use strict";
a.r(t), a.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return l
  },
  getAssetSizeByHeight: function() {
    return n
  },
  getBackgroundGradient: function() {
    return o
  },
  getConfettiSprites: function() {
    return c
  }
});
var s = a("635058"),
  r = a("547630");
let l = 1060,
  n = e => e * (0, r.default)(),
  o = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: a,
        secondary: s
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(s.toHslString(), ")")
  },
  i = [a("424869"), a("714293")],
  u = {
    ["".concat(s.CollectiblesCategorySkuId.FANTASY)]: [a("655029"), a("290216")],
    ["".concat(s.CollectiblesCategorySkuId.ANIME)]: [a("597704"), a("714293")],
    ["".concat(s.CollectiblesCategorySkuId.BREAKFAST)]: [a("286642"), a("94646")],
    ["".concat(s.CollectiblesCategorySkuId.HALLOWEEN)]: [a("638538"), a("861485")],
    ["".concat(s.CollectiblesCategorySkuId.FALL)]: [a("740683"), a("489847")],
    ["".concat(s.CollectiblesCategorySkuId.WINTER)]: [a("770704"), a("165057")],
    ["".concat(s.CollectiblesCategorySkuId.MONSTERS)]: [a("330825"), a("125221")]
  },
  c = e => {
    var t;
    return null == e ? i : null !== (t = u[e]) && void 0 !== t ? t : i
  }