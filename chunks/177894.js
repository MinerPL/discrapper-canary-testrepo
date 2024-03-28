"use strict";
var r = n("67867"),
  a = n("707074").left,
  o = n("54659"),
  i = n("882708"),
  l = n("42433");
r({
  target: "Array",
  proto: !0,
  forced: !l && i > 79 && i < 83 || !o("reduce")
}, {
  reduce: function(e) {
    var t = arguments.length;
    return a(this, e, t, t > 1 ? arguments[1] : void 0)
  }
})