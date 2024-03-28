"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("653041"), n("47120");
var l = n("512722"),
  r = n.n(l),
  s = n("90757"),
  a = n.n(s),
  i = n("65154");

function u(e, t, n) {
  let l = window.DiscordNative;
  r()(null != l, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], n = null != n ? n : {
    width: 150,
    height: 150
  };
  let s = [];
  return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== i.DesktopSources.SCREEN)), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== t.length && s.push(l.desktopCapture.getDesktopCaptureSources({
    types: t,
    thumbnailSize: n
  })), Promise.all(s).then(e => a()(e))
}