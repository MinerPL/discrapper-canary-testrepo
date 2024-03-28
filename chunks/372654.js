"use strict";
r.r(t), r.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return n
  },
  getAssetSizeByHeight: function() {
    return l
  },
  getBackgroundGradient: function() {
    return s
  },
  getConfettiSprites: function() {
    return u
  }
});
var a = r("180650"),
  o = r("921948");
let n = 1060,
  l = e => e * (0, o.default)(),
  s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: a
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(a.toHslString(), ")")
  },
  i = [r("241371"), r("448509")],
  c = {
    ["".concat(a.CollectiblesCategorySkuId.FANTASY)]: [r("709393"), r("646584")],
    ["".concat(a.CollectiblesCategorySkuId.ANIME)]: [r("647387"), r("448509")],
    ["".concat(a.CollectiblesCategorySkuId.BREAKFAST)]: [r("289901"), r("402344")],
    ["".concat(a.CollectiblesCategorySkuId.HALLOWEEN)]: [r("292006"), r("799718")],
    ["".concat(a.CollectiblesCategorySkuId.FALL)]: [r("432170"), r("15888")],
    ["".concat(a.CollectiblesCategorySkuId.WINTER)]: [r("304088"), r("774694")],
    ["".concat(a.CollectiblesCategorySkuId.MONSTERS)]: [r("16724"), r("441506")]
  },
  u = e => {
    var t;
    return null == e ? i : null !== (t = c[e]) && void 0 !== t ? t : i
  }