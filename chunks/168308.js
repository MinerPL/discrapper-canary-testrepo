"use strict";
s.r(t), s.d(t, {
  shouldShowRegisteredGamesSettings: function() {
    return i
  },
  useShouldShowOverlaySettings: function() {
    return r
  }
});
var a = s("442837"),
  n = s("808506"),
  l = s("358085");

function i() {
  return l.isPlatformEmbedded
}

function r() {
  return (0, a.useStateFromStores)([n.default], () => n.default.isSupported()) || !1
}