"use strict";
n.r(t), n.d(t, {
  getDataUrlFromFile: function() {
    return c
  },
  trimAndEncodeAudio: function() {
    return h
  },
  uploadFileReadPromise: function() {
    return f
  }
}), n("411104"), n("653041"), n("951953"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("518263");
var a = n("512722"),
  l = n.n(a),
  u = n("304809"),
  i = n("70956"),
  s = n("208049"),
  r = n("419202");
let o = new AudioContext({
  sampleRate: Math.min((0, u.getOrCreateAudioContext)().sampleRate, 48e3)
});
async function d(e) {
  let t = await e.arrayBuffer();
  if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
  return o.decodeAudioData(t)
}
async function c(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let a = new FileReader,
      l = () => {
        a.removeEventListener("load", l), a.removeEventListener("error", n), e(a.result)
      };
    a.addEventListener("load", l), a.addEventListener("error", n), t(a)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function f(e) {
  let {
    readPromise: t,
    guildId: n,
    name: a,
    volume: l,
    emojiId: u,
    emojiName: i
  } = e;
  return (0, s.uploadSound)({
    guildId: n,
    name: a,
    sound: await t,
    volume: l,
    emojiId: u,
    emojiName: i
  })
}
async function m(e) {
  let t = [],
    n = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          a = [];
        for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
        let l = new Float32Array(a.length);
        return l.set(a), l
      }
      throw Error("Only handles up to 2 channels")
    }(function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
      return n
    }(e)),
    a = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: n
    }),
    u = new AudioEncoder({
      output: function(n) {
        l()(null != n.duration, "Chunk duration must not be null");
        let a = n.duration / 1e6 * e.sampleRate,
          u = new Uint8Array(n.byteLength);
        n.copyTo(u), t.push({
          buffer: u,
          numSamples: a
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  u.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), u.encode(a), await u.flush();
  let i = (0, r.default)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  });
  return new Blob([i], {
    type: "audio/ogg"
  })
}
async function h(e, t) {
  let n = function(e, t) {
      let {
        startMs: n,
        endMs: a
      } = t, {
        sampleRate: l,
        numberOfChannels: u,
        duration: s
      } = e, r = s * i.default.Millis.SECOND, d = Math.min(a, r);
      if (0 === n && d === r) return e;
      let c = Math.floor(n / r * e.length),
        f = Math.floor(d / r * e.length),
        m = o.createBuffer(u, f - c, l);
      for (let t = 0; t < u; t++) {
        let n = m.getChannelData(t),
          a = e.getChannelData(t),
          l = 0;
        for (let e = c; e <= f; e++) n[l] = a[e], l++
      }
      return m
    }(await d(e), t),
    a = await m(n);
  return new File([a], "sound.ogg", {
    type: "audio/ogg"
  })
}