"use strict";
l.r(t);
var a = l("470079"),
  n = l("906732"),
  s = l("407316"),
  i = l("937784");
t.default = e => {
  let {
    channelId: t,
    setExporting: l
  } = e, {
    analyticsLocations: o
  } = (0, n.default)();
  return {
    onShareClick: a.useCallback(async e => {
      let {
        clip: a,
        cropData: n,
        applicationAudioEnabled: r,
        voiceAudioEnabled: d,
        onShareComplete: c
      } = e;
      l(a.id);
      try {
        var u, p, f, m, v, h, C, g, x, L;
        let e = (0, s.canAttachClipsToChannel)(t);
        await (0, i.shareClip)(a, {
          channelId: e ? t : void 0,
          analyticsLocations: o,
          editMetadata: {
            start: null !== (h = null !== (v = null == n ? void 0 : n.start) && void 0 !== v ? v : null === (u = a.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== h ? h : 0,
            end: null !== (g = null !== (C = null == n ? void 0 : n.end) && void 0 !== C ? C : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.end) && void 0 !== g ? g : a.length / 1e3,
            applicationAudio: null === (x = null != r ? r : null === (f = a.editMetadata) || void 0 === f ? void 0 : f.applicationAudio) || void 0 === x || x,
            voiceAudio: null === (L = null != d ? d : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.voiceAudio) || void 0 === L || L
          }
        })
      } catch (e) {} finally {
        null == c || c(), l(null)
      }
    }, [t, o, l])
  }
}