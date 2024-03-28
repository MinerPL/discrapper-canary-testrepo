"use strict";
n.r(t), n.d(t, {
  getLocalizedLink: function() {
    return l
  }
});
var s = n("330711");
let l = e => {
  let t = s.default.getLocale().toLowerCase();
  return t in e ? e[t] : e.default
}