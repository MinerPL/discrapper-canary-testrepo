"use strict";
n(411104);
var i = n(992774),
  r = n(710845),
  s = n(358085),
  o = n(998502);
(0, i.f3)({
  supported() {
    try {
      if (__OVERLAY__);
      else if (s.isPlatformEmbedded) {
        let e = (0, i.zS)();
        if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink) throw Error("voe function missing");
        return !0
      }
    } catch (e) {
      new r.Z("injectMediaEngine").error("Potentially corrupt installation:", e.message)
    }
    return !1
  },
  supportsFeature: e => o.ZP.supportsFeature(e),
  setProcessPriority(e) {
    o.ZP.getDiscordUtils().setProcessPriority(e)
  },
  getVoiceEngine: () => o.ZP.getVoiceEngine()
})