"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return c
  },
  useAudioWaveformData: function() {
    return h
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var l = n("884691"),
  a = n("748820"),
  i = n("804998"),
  s = n("129722"),
  r = n("89050");
let u = new Worker(new URL(n.p + n.u("21401"), n.b)),
  o = (0, i.getOrCreateAudioContext)();
async function d(e) {
  let t = await e.arrayBuffer(),
    n = await o.decodeAudioData(t);
  return n.getChannelData(0)
}

function c(e) {
  let [t, n] = l.useState(null), [a, i] = l.useState(null);
  return l.useEffect(() => {
    if (null == e) return;
    let t = (0, r.getAudioFileId)(e);
    t !== a && (i(t), n(null), d(e).then(n))
  }, [a, e]), t
}
let f = {
  ...r.defaultWaveformConfig
};

function h(e, t, n) {
  let [i, o] = l.useState(null), [d, c] = l.useState(null), [h, m] = l.useState(1), {
    setMaxVolume: g
  } = (0, s.useAudioTrimmerStore)(), v = l.useCallback((e, t) => {
    var l, i, s, r, o;
    c(null), (l = e, i = t.offsetWidth, s = n, r = f, o = m, new Promise(e => {
      let t = (0, a.v4)(),
        n = l => {
          let {
            data: {
              waveform: a,
              id: i,
              normalizedVolumeMultipler: s
            }
          } = l;
          t === i && (e(a), o(s)), null == u || u.removeEventListener("message", n)
        };
      null == u || u.addEventListener("message", n), null == u || u.postMessage({
        id: t,
        options: s,
        config: r,
        width: i,
        rawBufferData: l
      })
    })).then(c)
  }, [n]);
  return l.useEffect(() => {
    if (null == e || null == t) return;
    let l = (0, r.getWaveformId)(e, n);
    i !== l && (o(l), v(e, t))
  }, [e, v, t, n, i]), l.useEffect(() => {
    g(h)
  }, [h, g]), d
}