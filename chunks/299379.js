"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(689938);

function r(e) {
  let t = i.Z.getLocale().toLowerCase();
  return t in e ? e[t] : e.default
}