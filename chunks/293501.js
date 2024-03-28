"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return c
  },
  useAudioWaveformData: function() {
    return m
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("470079"),
  l = n("153832"),
  u = n("304809"),
  i = n("586826"),
  s = n("943351");
let r = new Worker(new URL(n.p + n.u("14315"), n.b)),
  o = (0, u.getOrCreateAudioContext)();
async function d(e) {
  let t = await e.arrayBuffer();
  return (await o.decodeAudioData(t)).getChannelData(0)
}

function c(e) {
  let [t, n] = a.useState(null), [l, u] = a.useState(null);
  return a.useEffect(() => {
    if (null == e) return;
    let t = (0, s.getAudioFileId)(e);
    t !== l && (u(t), n(null), d(e).then(n))
  }, [l, e]), t
}
let f = {
  ...s.defaultWaveformConfig
};

function m(e, t, n) {
  let [u, o] = a.useState(null), [d, c] = a.useState(null), [m, h] = a.useState(1), {
    setMaxVolume: g
  } = (0, i.useAudioTrimmerStore)(), S = a.useCallback((e, t) => {
    var a, u, i, s, o;
    c(null), (a = e, u = t.offsetWidth, i = n, s = f, o = h, new Promise(e => {
      let t = (0, l.v4)(),
        n = a => {
          let {
            data: {
              waveform: l,
              id: u,
              normalizedVolumeMultipler: i
            }
          } = a;
          t === u && (e(l), o(i)), null == r || r.removeEventListener("message", n)
        };
      null == r || r.addEventListener("message", n), null == r || r.postMessage({
        id: t,
        options: i,
        config: s,
        width: u,
        rawBufferData: a
      })
    })).then(c)
  }, [n]);
  return a.useEffect(() => {
    if (null == e || null == t) return;
    let a = (0, s.getWaveformId)(e, n);
    u !== a && (o(a), S(e, t))
  }, [e, S, t, n, u]), a.useEffect(() => {
    g(m)
  }, [m, g]), d
}