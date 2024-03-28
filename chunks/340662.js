"use strict";
var r = n("67867"),
  a = n("653457");
r({
  target: "Promise",
  stat: !0
}, {
  withResolvers: function() {
    var e = a.f(this);
    return {
      promise: e.promise,
      resolve: e.resolve,
      reject: e.reject
    }
  }
})