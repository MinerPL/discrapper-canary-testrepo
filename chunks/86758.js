"use strict";
s.r(t), s.d(t, {
  truncateAndLocalizeNumber: function() {
    return l
  }
});
var a = s("792788");
let l = (e, t) => {
  let s = Math.round(10 * e) / 10;
  if (e < 1e6) return new Intl.NumberFormat(t, {
    maximumFractionDigits: s % 1 == 0 ? 0 : 1
  }).format(e);
  let l = Math.round(e / 1e6 * 10) / 10,
    n = new Intl.NumberFormat(t, {
      maximumFractionDigits: l % 1 == 0 ? 0 : 1
    }).format(e / 1e6);
  return a.default.Messages.NumberAbbreviations.MILLION.format({
    num: n
  })
}