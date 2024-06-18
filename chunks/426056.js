"use strict";

function n(e) {
  var t, r = e.Symbol;
  return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
}
r.d(t, {
  Z: function() {
    return n
  }
})