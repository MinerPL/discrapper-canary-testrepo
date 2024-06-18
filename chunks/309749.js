"use strict";
var n = e(147018),
  o = e(926515);
n({
  target: "URL",
  proto: !0,
  enumerable: !0
}, {
  toJSON: function() {
    return o(URL.prototype.toString, this)
  }
})