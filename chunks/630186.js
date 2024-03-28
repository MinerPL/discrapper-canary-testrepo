"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return i
  },
  default: function() {
    return r
  }
});
var s = n("726542"),
  a = n("973616"),
  l = n("689938");
let i = "twitch:";
class r extends a.default {
  getIconURL() {
    return s.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(i).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}