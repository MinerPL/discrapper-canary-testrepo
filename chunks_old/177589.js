"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("429928"),
  i = r("36539"),
  s = r("502651"),
  l = r("671071"),
  a = r("322631"),
  u = r("947297");

function o(e) {
  return (0, i.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, n.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, s.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}