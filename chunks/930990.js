"use strict";
var e = n(545576),
  o = n(4340),
  i = n(641236),
  u = n(325008),
  c = i("species");
t.exports = function(t) {
  var r = e(t);
  u && r && !r[c] && o(r, c, {
    configurable: !0,
    get: function() {
      return this
    }
  })
}