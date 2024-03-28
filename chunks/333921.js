"use strict";
var r = n("67867"),
  a = n("96403"),
  o = n("505642"),
  i = n("463374"),
  l = n("342545"),
  u = n("663158"),
  s = a("".indexOf);
r({
  target: "String",
  proto: !0,
  forced: !u("includes")
}, {
  includes: function(e) {
    return !!~s(l(i(this)), l(o(e)), arguments.length > 1 ? arguments[1] : void 0)
  }
})