"use strict";
n.d(e, {
  u: function() {
    return i
  }
});
var r = n(607190);
let i = (t, e) => {
  let n = i => {
    ("pagehide" === i.type || "hidden" === r.m.document.visibilityState) && (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
  };
  addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
}