"use strict";
var r = n("67867"),
  a = n("818140").includes,
  o = n("821819"),
  i = n("501953");
r({
  target: "Array",
  proto: !0,
  forced: o(function() {
    return ![, ].includes()
  })
}, {
  includes: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
}), i("includes")