n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(358085),
  i = n(924557),
  a = n(65154);

function o(e) {
  let {
ignorePlatformRestriction: t
  } = i.NV.getCurrentConfig({
location: 'isClipsClientCapable'
  }, {
autoTrackExposure: !1
  });
  return t || r.isDesktop() && e.getMediaEngine().supports(a.AN.CLIPS);
}