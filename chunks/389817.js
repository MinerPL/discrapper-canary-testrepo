"use strict";
n.r(t), n.d(t, {
  useNowPlayingVisible: function() {
    return o
  },
  getNowPlayingVisible: function() {
    return u
  }
});
var l = n("446674"),
  a = n("350522"),
  s = n("471671"),
  i = n("636174"),
  r = n("49111");

function o() {
  let e = (0, l.useStateFromStores)([s.default], () => s.default.windowSize().width),
    t = (0, l.useStateFromStores)([a.default], () => a.default.hasConsented(r.Consents.PERSONALIZATION));
  return d(e, t)
}

function u() {
  let e = s.default.windowSize().width,
    t = a.default.hasConsented(r.Consents.PERSONALIZATION);
  return d(e, t)
}

function d(e, t) {
  return e > i.NOW_PLAYING_MINIMUM_WIDTH && t
}