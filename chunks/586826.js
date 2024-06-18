"use strict";
t.d(n, {
  p: function() {
    return r
  }
});
var l = t(652874),
  a = t(143927),
  s = t(174727);
let i = (0, l.Z)(e => ({
  audio: null,
  file: null,
  loading: !1,
  loadAudioFromFile: async n => {
    if (e({
        file: n,
        audio: null,
        loading: null != n
      }), null == n) return;
    let t = await (0, s.lj)(n);
    null != t && e({
      audio: t,
      loading: !1
    })
  },
  maxVolume: 1,
  setMaxVolume: n => {
    e({
      maxVolume: n
    })
  }
}));

function r() {
  return i(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), a.Z)
}