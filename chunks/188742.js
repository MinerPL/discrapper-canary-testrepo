"use strict";
let i = new(n(113638)).Z(function(e) {
  {
    let t = n(160170).B[e];
    return void 0 !== t ? t().then(e => e.default) : Promise.resolve({})
  }
});
t.Z = {
  setEmojiLocale: function(e) {
    i.setParams(e)
  },
  getTermsForEmoji: function(e) {
    let t = i.get();
    return void 0 !== t ? t[e] : []
  }
}