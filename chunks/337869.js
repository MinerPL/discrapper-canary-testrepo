n(411104);
var r = n(992774),
  i = n(710845),
  a = n(358085),
  s = n(998502);
(0, r.f3)({
  supported() {
try {
  if (__OVERLAY__);
  else if (a.isPlatformEmbedded) {
    let e = (0, r.zS)();
    if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink)
      throw Error('voe function missing');
    return !0;
  }
} catch (e) {
  new i.Z('injectMediaEngine').error('Potentially corrupt installation:', e.message);
}
return !1;
  },
  supportsFeature: e => s.ZP.supportsFeature(e),
  setProcessPriority(e) {
s.ZP.getDiscordUtils().setProcessPriority(e);
  },
  getVoiceEngine: () => s.ZP.getVoiceEngine()
});