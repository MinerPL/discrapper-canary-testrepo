"use strict";
var r = n("67867"),
  a = n("804104").map;
r({
  target: "Array",
  proto: !0,
  forced: !n("469624")("map")
}, {
  map: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
})