"use strict";
t.exports = function(t, r, e, n, o, i, a, u) {
  if (!t) {
    var f;
    if (void 0 === r) f = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [e, n, o, i, a, u],
        s = 0;
      (f = Error(r.replace(/%s/g, function() {
        return c[s++]
      }))).name = "Invariant Violation"
    }
    throw f.framesToPop = 1, f
  }
}