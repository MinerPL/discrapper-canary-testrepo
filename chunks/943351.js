"use strict";
n.r(t), n.d(t, {
  SUPPORTED_AUDIO_FILE_TYPES: function() {
    return i
  },
  defaultWaveformConfig: function() {
    return a
  },
  getAudioFileId: function() {
    return u
  },
  getWaveformId: function() {
    return l
  }
}), n("47120");
let a = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  l = (e, t) => {
    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(n, "-").concat(JSON.stringify(t))
  },
  u = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  i = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])