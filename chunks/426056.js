"use strict";

function n(e) {
  var t, r = e.Symbol;
  return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
}
r.r(t), r.d(t, {
  default: function() {
    return n
  }
})