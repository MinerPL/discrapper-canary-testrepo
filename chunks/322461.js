"use strict";
var r = n("67867"),
  a = n("570596"),
  o = n("653457");
r({
  target: "Promise",
  stat: !0,
  forced: n("732116").CONSTRUCTOR
}, {
  reject: function(e) {
    var t = o.f(this);
    return a(t.reject, void 0, e), t.promise
  }
})