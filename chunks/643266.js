"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(493683),
  r = n(592125),
  s = n(176505);

function o(e) {
  if (e !== s.V) return null;
  let t = r.Z.getChannel(e);
  return null == t ? null : i.Z.ensurePrivateChannel(t.recipients)
}