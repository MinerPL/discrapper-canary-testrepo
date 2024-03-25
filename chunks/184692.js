"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("129722"),
  s = n("477633"),
  r = a.memo(function(e) {
    let {
      fineTuning: t,
      fineTuningResolution: n,
      duration: a
    } = e, {
      file: r,
      audio: u
    } = (0, i.useAudioTrimmerStore)();
    return (0, l.jsx)(s.default, {
      file: r,
      audio: u,
      waveformSettings: {
        fineTuning: t,
        fineTuningResolution: n,
        duration: a
      }
    })
  })