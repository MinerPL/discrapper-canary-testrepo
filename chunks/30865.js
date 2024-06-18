"use strict";
n.d(e, {
  B: function() {
    return i
  }
});
let r = (0, n(24716).Rf)();

function i() {
  let t = r.chrome,
    e = t && t.app && t.app.runtime,
    n = "history" in r && !!r.history.pushState && !!r.history.replaceState;
  return !e && n
}