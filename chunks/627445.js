function(t, e, i) {
    "use strict";
    i("70102"), i("781738");
    t.exports = function(t, e, i, n, r, a, s, o) {
        if (!t) {
            var l;
            if (void 0 === e) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [i, n, r, a, s, o],
                    c = 0;
                (l = Error(e.replace(/%s/g, function() {
                    return u[c++]
                }))).name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    }
}