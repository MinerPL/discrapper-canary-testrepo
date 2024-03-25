"use strict";
i.r(t), i.d(t, {
  replaceAnimationColors: function() {
    return o
  },
  getBurstAnimationHash: function() {
    return s
  }
}), i("781738");
var n, a = i("917351"),
  l = i("284679");
(n || (n = {})).OUT_OF_BURSTS = "out of burst reactions modal";
let o = (e, t) => {
    let i = (0, l.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(i[0][0] / 255, ",").concat(i[0][1] / 255, ",").concat(i[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(i[1][0] / 255, ",").concat(i[1][1] / 255, ",").concat(i[1][2] / 255, ","))
  },
  s = (0, a.memoize)(e => {
    let t = 0;
    for (let i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i);
    return Math.abs(t)
  })