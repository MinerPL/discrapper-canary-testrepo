"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(653041), n(47120);
var r = n(512722),
  i = n.n(r),
  l = n(90757),
  s = n.n(l),
  a = n(65154);

function o(e, t, n) {
  let r = window.DiscordNative;
  i()(null != r, "Can't get desktop sources outside of native app"), t = null != t ? t : [a.vA.WINDOW, a.vA.SCREEN], n = null != n ? n : {
    width: 150,
    height: 150
  };
  let l = [];
  return t.includes(a.vA.SCREEN) && e.supports(a.AN.SCREEN_PREVIEWS) && (l.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== a.vA.SCREEN)), t.includes(a.vA.WINDOW) && e.supports(a.AN.WINDOW_PREVIEWS) && (l.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== a.vA.WINDOW)), 0 !== t.length && l.push(r.desktopCapture.getDesktopCaptureSources({
    types: t,
    thumbnailSize: n
  })), Promise.all(l).then(e => s()(e))
}