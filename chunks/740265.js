"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(726542),
  r = n(603113),
  s = n(981631),
  o = n(689938);

function a(e) {
  var t;
  let n = null !== (t = (0, r.Z)(e)) && void 0 !== t ? t : "";
  switch (n) {
    case s.M7m.PS4:
    case s.M7m.PS5:
      return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
        platform: n.toUpperCase()
      });
    case s.M7m.XBOX:
    case s.M7m.SAMSUNG:
      return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
        platform: i.Z.get(n).name
      });
    default:
      return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING
  }
}