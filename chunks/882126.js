"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  u = n("586826"),
  i = n("990792");
t.default = l.memo(function(e) {
  let {
    fineTuning: t,
    fineTuningResolution: n,
    duration: l
  } = e, {
    file: s,
    audio: r
  } = (0, u.useAudioTrimmerStore)();
  return (0, a.jsx)(i.default, {
    file: s,
    audio: r,
    waveformSettings: {
      fineTuning: t,
      fineTuningResolution: n,
      duration: l
    }
  })
})