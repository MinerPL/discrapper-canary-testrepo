"use strict";
n.r(t), n.d(t, {
  SPOTIFY_APPLICATION_ID: function() {
    return l
  },
  SpotifyApplication: function() {
    return o
  },
  default: function() {
    return r
  }
});
var s = n("726542"),
  a = n("973616");
let l = "spotify",
  i = s.default.get(l);
class r extends a.default {
  getIconURL(e) {
    return i.icon.lightPNG
  }
  constructor() {
    super({}), this.id = l, this.name = i.name
  }
}
let o = new r