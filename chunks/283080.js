"use strict";
n.d(t, {
  EA: function() {
    return s
  }
}), n(47120), n(735250), n(470079);
let i = {};

function r(e, t) {
  let n = e.length > t ? t : e.length;
  return e.substring(0, n).padEnd(t, " ")
}

function s() {
  if (0 === Object.keys(i).length) return "";
  let e = "|".concat(r("id", 20), "|").concat(r("Mounts", 8), "|").concat(r("Mount Mean", 20), "|").concat(r("Updates", 8), "|").concat(r("Update Mean", 20), "|").concat(r("Nested", 8), "|").concat(r("Nested Mean", 20), "|\n");
  return "Component Render Stats (microseconds):\n" + e + Object.entries(i).map(e => {
    let [t, n] = e;
    return "|".concat(r(t, 20), "|").concat(r(n.mount.count.toString(), 8), "|").concat(r(n.mount.mean.toString(), 20), "|").concat(r(n.update.count.toString(), 8), "|").concat(r(n.update.mean.toString(), 20), "|").concat(r(n.nestedUpdate.count.toString(), 8), "|").concat(r(n.nestedUpdate.mean.toString(), 20), "|\n")
  })
}