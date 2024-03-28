"use strict";
n.r(t), n.d(t, {
  getEndHandleValue: function() {
    return o
  },
  getMaxValue: function() {
    return s
  },
  getMinValue: function() {
    return u
  },
  getStartHandleValue: function() {
    return r
  },
  loadAudioFileFromUrl: function() {
    return c
  },
  loadAudioFromFile: function() {
    return d
  },
  toSeconds: function() {
    return i
  }
}), n("411104"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("943351"),
  l = n("689938");
let u = (e, t, n) => -1 === e ? 0 : e - t * e / n;

function i(e) {
  return e / 1e3
}
let s = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
  r = (e, t, n, a) => {
    let l = 0;
    return (l = t >= 0 && n > 0 ? (e - (t - n * t / a)) * 100 / n : 100 * e / a).toFixed(4)
  },
  o = (e, t, n, a) => {
    let l = 0;
    return (l = t >= 0 && n > 0 ? -((e - (t + n * (a - t) / a)) * 100) / n : -100 * e / a + 100).toFixed(4)
  };
async function d(e) {
  var t;
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !a.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(l.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
    fileType: e.type
  }));
  let n = URL.createObjectURL(e),
    u = new Audio(n);
  return await (t = u, new Promise(e => {
    let n = () => {
      e(), t.removeEventListener("canplaythrough", n)
    };
    t.addEventListener("canplaythrough", n), t.load()
  })), u
}
async function c(e, t) {
  let n = await fetch(e),
    a = await n.blob();
  return new File([a], t, {
    type: "audio/mp3"
  })
}