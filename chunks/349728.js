"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("981631");
let n = new Set([a.PlatformTypes.XBOX, a.PlatformTypes.PLAYSTATION, a.PlatformTypes.PLAYSTATION_STAGING, a.PlatformTypes.CRUNCHYROLL]);

function l(e) {
  return n.has(e.type) && e.twoWayLink
}