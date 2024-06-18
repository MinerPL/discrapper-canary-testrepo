"use strict";
var l = t(735250),
  a = t(470079),
  s = t(586826),
  i = t(990792);
n.Z = a.memo(function(e) {
  let {
    fineTuning: n,
    fineTuningResolution: t,
    duration: a
  } = e, {
    file: r,
    audio: u
  } = (0, s.p)();
  return (0, l.jsx)(i.Z, {
    file: r,
    audio: u,
    waveformSettings: {
      fineTuning: n,
      fineTuningResolution: t,
      duration: a
    }
  })
})