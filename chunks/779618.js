"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(358085),
  r = n(924557),
  s = n(65154);

function o(e) {
  let {
    ignorePlatformRestriction: t
  } = r.NV.getCurrentConfig({
    location: "isClipsClientCapable"
  }, {
    autoTrackExposure: !1
  });
  return t || i.isDesktop() && e.getMediaEngine().supports(s.AN.CLIPS)
}