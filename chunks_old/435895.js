"use strict";
n.r(t), n.d(t, {
  playDesktopSound: function() {
    return f
  },
  playWebSound: function() {
    return E
  }
}), n("222007");
var a = n("627445"),
  s = n.n(a),
  l = n("773364"),
  i = n("804998"),
  r = n("42887"),
  o = n("812809");
let u = null;
try {
  u = (0, i.getOrCreateAudioContext)()
} catch {}
let d = new Map;
async function c(e) {
  let t = d.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    a = await (null == u ? void 0 : u.decodeAudioData(n));
  return null != a && d.set(e, a), a
}

function f(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: a,
    reportSoundStartedPlaying: i
  } = e;
  return new Promise(async e => {
    let o = await c(n);
    null == o && e(), r.default.getMediaEngine().eachConnection(n => {
      n.context === l.MediaEngineContextTypes.DEFAULT && (i(), s(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, a, () => {
        e()
      }))
    })
  })
}

function E(e, t) {
  let {
    soundKey: n,
    soundURL: a,
    soundVolume: s,
    reportSoundStartedPlaying: l
  } = e, i = t.get(n);
  if (null != i) {
    i.currentTime = 0;
    return
  }
  return new Promise(e => {
    let i = new Audio(a);
    i.volume = (0, o.default)(s), i.addEventListener("canplaythrough", () => {
      l(), t.set(n, i), i.play()
    }), i.addEventListener("ended", () => {
      t.delete(n), i.src = "", e()
    })
  })
}