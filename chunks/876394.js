"use strict";
var r = n("67867"),
  a = n("96403"),
  o = n("952256"),
  i = a([].reverse),
  l = [1, 2];
r({
  target: "Array",
  proto: !0,
  forced: String(l) === String(l.reverse())
}, {
  reverse: function() {
    return o(this) && (this.length = this.length), i(this)
  }
})