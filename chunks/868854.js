"use strict";
n.r(t), n.d(t, {
  getNowPlayingVisible: function() {
    return u
  },
  useNowPlayingVisible: function() {
    return o
  }
});
var l = n("442837"),
  a = n("480294"),
  s = n("451478"),
  i = n("817915"),
  r = n("981631");

function o() {
  let e = (0, l.useStateFromStores)([s.default], () => s.default.windowSize().width);
  return d(e, (0, l.useStateFromStores)([a.default], () => a.default.hasConsented(r.Consents.PERSONALIZATION)))
}

function u() {
  let e = s.default.windowSize().width;
  return d(e, a.default.hasConsented(r.Consents.PERSONALIZATION))
}

function d(e, t) {
  return e > i.NOW_PLAYING_MINIMUM_WIDTH && t
}