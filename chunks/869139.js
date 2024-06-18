"use strict";
n.d(e, {
  VT: function() {
    return i
  }
});
let r = ["fatal", "error", "warning", "log", "info", "debug"];

function i(t) {
  return "warn" === t ? "warning" : r.includes(t) ? t : "log"
}