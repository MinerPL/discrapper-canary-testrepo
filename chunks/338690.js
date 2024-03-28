"use strict";
s.r(e), s.d(e, {
  default: function() {
    return d
  }
});
var n = s("287734"),
  a = s("592125"),
  r = s("894257");

function d() {
  let t = a.default.getDMFromUserId(r.SYSTEM_USER);
  null != t && n.default.selectPrivateChannel(t)
}