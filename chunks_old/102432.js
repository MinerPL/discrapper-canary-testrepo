"use strict";
n.r(t), n.d(t, {
  getDataUrlFromFile: function() {
    return c
  },
  uploadFileReadPromise: function() {
    return f
  },
  trimAndEncodeAudio: function() {
    return m
  }
}), n("70102"), n("424973"), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790");
var l = n("627445"),
  a = n.n(l),
  i = n("804998"),
  s = n("718517"),
  r = n("305122"),
  u = n("108391");
let o = new AudioContext({
  sampleRate: Math.min((0, i.getOrCreateAudioContext)().sampleRate, 48e3)
});
async function d(e) {
  let t = await e.arrayBuffer(),
    n = t instanceof ArrayBuffer;
  if (!n) throw Error("Unexpected file type");
  return o.decodeAudioData(t)
}
async function c(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let l = new FileReader,
      a = () => {
        l.removeEventListener("load", a), l.removeEventListener("error", n), e(l.result)
      };
    l.addEventListener("load", a), l.addEventListener("error", n), t(l)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function f(e) {
  let {
    readPromise: t,
    guildId: n,
    name: l,
    volume: a,
    emojiId: i,
    emojiName: s
  } = e;
  return (0, r.uploadSound)({
    guildId: n,
    name: l,
    sound: await t,
    volume: a,
    emojiId: i,
    emojiName: s
  })
}
async function h(e) {
  let t = [],
    n = function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let l = 0; l < t; l++) n.push(e.getChannelData(l));
      return n
    }(e),
    l = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          l = [];
        for (let e = 0; e < t.length; e++) l.push(t[e]), l.push(n[e]);
        let a = new Float32Array(l.length);
        return a.set(l), a
      }
      throw Error("Only handles up to 2 channels")
    }(n),
    i = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: l
    }),
    s = new AudioEncoder({
      output: function(n) {
        a(null != n.duration, "Chunk duration must not be null");
        let l = n.duration / 1e6 * e.sampleRate,
          i = new Uint8Array(n.byteLength);
        n.copyTo(i), t.push({
          buffer: i,
          numSamples: l
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  s.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), s.encode(i), await s.flush();
  let r = (0, u.default)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  });
  return new Blob([r], {
    type: "audio/ogg"
  })
}
async function m(e, t) {
  let n = await d(e),
    l = function(e, t) {
      let {
        startMs: n,
        endMs: l
      } = t, {
        sampleRate: a,
        numberOfChannels: i,
        duration: r
      } = e, u = r * s.default.Millis.SECOND, d = Math.min(l, u);
      if (0 === n && d === u) return e;
      let c = Math.floor(n / u * e.length),
        f = Math.floor(d / u * e.length),
        h = o.createBuffer(i, f - c, a);
      for (let t = 0; t < i; t++) {
        let n = h.getChannelData(t),
          l = e.getChannelData(t),
          a = 0;
        for (let e = c; e <= f; e++) n[a] = l[e], a++
      }
      return h
    }(n, t),
    a = await h(l);
  return new File([a], "sound.ogg", {
    type: "audio/ogg"
  })
}