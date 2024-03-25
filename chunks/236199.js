"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("913144"),
  s = n("597517"),
  l = n("533613"),
  i = {
    init() {
      a.default.subscribe("VOICE_CHANNEL_SELECT", e => {
        let {
          channelId: t
        } = e;
        null == t && s.hideHotspot(l.HotspotLocations.VOICE_PANEL_INTRODUCTION)
      })
    }
  }