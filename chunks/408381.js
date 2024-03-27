"use strict";
a.r(t), a.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return o
  },
  getAssetSizeByHeight: function() {
    return s
  },
  getBackgroundGradient: function() {
    return i
  },
  getConfettiSprites: function() {
    return d
  }
});
var r = a("635058"),
  n = a("547630");
let o = 1060,
  s = e => e * (0, n.default)(),
  i = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: a,
        secondary: r
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(r.toHslString(), ")")
  },
  l = [a("424869"), a("714293")],
  c = {
    ["".concat(r.CollectiblesCategorySkuId.FANTASY)]: [a("655029"), a("290216")],
    ["".concat(r.CollectiblesCategorySkuId.ANIME)]: [a("597704"), a("714293")],
    ["".concat(r.CollectiblesCategorySkuId.BREAKFAST)]: [a("286642"), a("94646")],
    ["".concat(r.CollectiblesCategorySkuId.HALLOWEEN)]: [a("638538"), a("861485")],
    ["".concat(r.CollectiblesCategorySkuId.FALL)]: [a("740683"), a("489847")],
    ["".concat(r.CollectiblesCategorySkuId.WINTER)]: [a("770704"), a("165057")],
    ["".concat(r.CollectiblesCategorySkuId.MONSTERS)]: [a("330825"), a("125221")]
  },
  d = e => {
    var t;
    return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l
  }