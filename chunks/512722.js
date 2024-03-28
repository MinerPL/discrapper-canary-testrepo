    "use strict";
    t.exports = function(t, r, e, n, o, i, u, c) {
      if (!t) {
        var s;
        if (void 0 === r) s = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var a = [e, n, o, i, u, c],
            f = 0;
          (s = Error(r.replace(/%s/g, function() {
            return a[f++]
          }))).name = "Invariant Violation"
        }
        throw s.framesToPop = 1, s
      }
    }