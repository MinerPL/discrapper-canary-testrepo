"use strict";
n.d(t, {
  h: function() {
    return a
  }
}), n(177593), n(653041);
var i = n(570140),
  r = n(38618);
let s = [];

function o(e) {
  setImmediate(() => e())
}

function a(e) {
  r.Z.isConnectedOrOverlay() ? o(e) : s.push(e)
}
i.Z.subscribe("CONNECTION_OPEN", () => {
  s.forEach(e => o(e)), s = []
}), i.Z.subscribe("CONNECTION_RESUMED", () => {
  s.forEach(e => o(e)), s = []
})