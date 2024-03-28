"use strict";
var r = n("67867"),
  a = n("184580"),
  o = n("611345"),
  i = n("474883"),
  l = n("338752"),
  u = n("15507");
r({
  target: "Array",
  proto: !0
}, {
  flat: function() {
    var e = arguments.length ? arguments[0] : void 0,
      t = o(this),
      n = i(t),
      r = u(t, 0);
    return r.length = a(r, t, t, n, 0, void 0 === e ? 1 : l(e)), r
  }
})