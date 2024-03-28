"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("503438"),
  a = n("802856"),
  l = n("420660"),
  i = n("789407"),
  r = n("630186"),
  o = n("250889");

function u(e) {
  return (0, a.default)(e) ? o.XBOX_APPLICATION_ID_PREFIX + e.name : (0, s.default)(e) && null != e.party && null != e.party.id ? i.SpotifyApplication.id : (0, l.default)(e) && null != e.url ? r.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}