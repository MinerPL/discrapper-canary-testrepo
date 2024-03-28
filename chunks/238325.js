"use strict";
var r = n("67867"),
  a = n("96403"),
  o = Date,
  i = a(o.prototype.getTime);
r({
  target: "Date",
  stat: !0
}, {
  now: function() {
    return i(new o)
  }
})