"use strict";
n.r(t), n.d(t, {
  defaultWaveformConfig: function() {
    return l
  },
  getWaveformId: function() {
    return a
  },
  getAudioFileId: function() {
    return i
  },
  SUPPORTED_AUDIO_FILE_TYPES: function() {
    return s
  }
}), n("222007");
let l = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  a = (e, t) => {
    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(n, "-").concat(JSON.stringify(t))
  },
  i = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  s = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])