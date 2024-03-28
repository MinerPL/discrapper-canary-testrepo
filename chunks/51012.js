"use strict";
var r = n("67867"),
  a = n("804104").every;
r({
  target: "Array",
  proto: !0,
  forced: !n("54659")("every")
}, {
  every: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
})