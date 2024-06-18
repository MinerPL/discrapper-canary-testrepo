"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(131951),
  r = n(65154);

function s() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z;
  return (e = t).supports(r.AN.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
}