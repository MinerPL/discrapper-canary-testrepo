"use strict";
n.r(t), n.d(t, {
  getMinValue: function() {
    return i
  },
  toSeconds: function() {
    return s
  },
  getMaxValue: function() {
    return r
  },
  getStartHandleValue: function() {
    return u
  },
  getEndHandleValue: function() {
    return o
  },
  loadAudioFromFile: function() {
    return d
  },
  loadAudioFileFromUrl: function() {
    return c
  }
}), n("70102"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var l = n("89050"),
  a = n("782340");
let i = (e, t, n) => -1 === e ? 0 : e - t * e / n;

function s(e) {
  return e / 1e3
}
let r = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
  u = (e, t, n, l) => {
    let a = 0;
    return (a = t >= 0 && n > 0 ? (e - (t - n * t / l)) * 100 / n : 100 * e / l).toFixed(4)
  },
  o = (e, t, n, l) => {
    let a = 0;
    return (a = t >= 0 && n > 0 ? -((e - (t + n * (l - t) / l)) * 100) / n : -100 * e / l + 100).toFixed(4)
  };
async function d(e) {
  var t;
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !l.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(a.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
    fileType: e.type
  }));
  let n = URL.createObjectURL(e),
    i = new Audio(n);
  return await (t = i, new Promise(e => {
    let n = () => {
      e(), t.removeEventListener("canplaythrough", n)
    };
    t.addEventListener("canplaythrough", n), t.load()
  })), i
}
async function c(e, t) {
  let n = await fetch(e),
    l = await n.blob();
  return new File([l], t, {
    type: "audio/mp3"
  })
}