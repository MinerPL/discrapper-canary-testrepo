n.d(t, {
  Z: function() {
return l;
  }
}), n(653041), n(47120);
var r = n(512722),
  o = n.n(r),
  a = n(90757),
  i = n.n(a),
  c = n(65154);

function l(e, t, n) {
  let r = window.DiscordNative;
  o()(null != r, 'Can\'t get desktop sources outside of native app'), t = null != t ? t : [
c.vA.WINDOW,
c.vA.SCREEN
  ], n = null != n ? n : {
width: 150,
height: 150
  };
  let a = [];
  return t.includes(c.vA.SCREEN) && e.supports(c.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== c.vA.SCREEN)), t.includes(c.vA.WINDOW) && e.supports(c.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== c.vA.WINDOW)), 0 !== t.length && a.push(r.desktopCapture.getDesktopCaptureSources({
types: t,
thumbnailSize: n
  })), Promise.all(a).then(e => i()(e));
}