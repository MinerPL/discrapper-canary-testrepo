"use strict";
t.d(s, {
  o: function() {
    return i
  }
});
var n = t(330711);
let i = (e, s) => {
  let t = Math.round(10 * e) / 10;
  if (e < 1e6) return new Intl.NumberFormat(s, {
    maximumFractionDigits: t % 1 == 0 ? 0 : 1
  }).format(e);
  let i = Math.round(e / 1e6 * 10) / 10,
    l = new Intl.NumberFormat(s, {
      maximumFractionDigits: i % 1 == 0 ? 0 : 1
    }).format(e / 1e6);
  return n.Z.Messages.NumberAbbreviations.MILLION.format({
    num: l
  })
}