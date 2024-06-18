"use strict";
t.d(n, {
  V3: function() {
    return a
  },
  bp: function() {
    return i
  },
  hp: function() {
    return s
  },
  nl: function() {
    return l
  }
}), t(47120);
let l = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  a = (e, n) => {
    let t = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(t, "-").concat(JSON.stringify(n))
  },
  s = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  i = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])