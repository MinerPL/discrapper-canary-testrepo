"use strict";
n.r(t), n.d(t, {
  SPOTIFY_APPLICATION_ID: function() {
    return i
  },
  SpotifyApplication: function() {
    return o
  },
  default: function() {
    return s
  }
});
var s, a = n("376556"),
  l = n("653047");
let i = "spotify",
  r = a.default.get(i);
s = class extends l.default {
  getIconURL(e) {
    return r.icon.lightPNG
  }
  constructor() {
    super({}), this.id = i, this.name = r.name
  }
};
let o = new s