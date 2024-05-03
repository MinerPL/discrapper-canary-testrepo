"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  u = n("120356"),
  i = n.n(u),
  s = n("392711"),
  r = n("780384"),
  o = n("481060"),
  d = n("410030"),
  c = n("44315"),
  f = n("293501"),
  m = n("943351"),
  h = n("231338"),
  g = n("683465");
t.default = l.memo(function(e) {
  let {
    file: t,
    audio: n,
    className: u,
    waveformSettings: S
  } = e, [p, N] = l.useState({
    width: 0,
    height: 0
  }), v = l.useRef(null), _ = l.useMemo(() => {
    var e;
    let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
    return {
      fineTuning: -1,
      fineTuningResolution: t / m.defaultWaveformConfig.fineTuningScale,
      duration: t,
      ...null != S ? S : {}
    }
  }, [n, S]), D = (0, f.useAudioBufferData)(t), O = (0, f.useAudioWaveformData)(D, v.current, _), A = (0, d.default)(), x = (0, c.useColorValue)((0, r.isThemeDark)(A) ? h.Color.PRIMARY_300 : h.Color.PRIMARY_700), E = null == D || null == O, M = (0 === p.width || 0 === p.height || E) && null != t, C = l.useCallback(() => {
    null != v.current && N({
      width: v.current.offsetWidth,
      height: v.current.offsetHeight
    })
  }, []);
  return l.useEffect(() => {
    if (null != v.current) {
      let e = new ResizeObserver((0, s.debounce)(C, 50));
      return e.observe(v.current), () => {
        e.disconnect()
      }
    }
  }, [C]), l.useEffect(() => {
    if (null == v.current) return;
    let e = v.current,
      t = e.getContext("2d");
    if (null == t) return;
    let {
      width: n,
      height: a
    } = e;
    if (0 !== p.width && 0 !== p.height && null != O && O.length > 0) {
      let e = n / O.length,
        l = -(e * (m.defaultWaveformConfig.waveformBarWidth - 1));
      t.clearRect(0, 0, n, a), t.fillStyle = x.hex;
      for (let n = 0; n < O.length; n++) {
        let u = O[n] * a,
          i = n * e + l,
          s = a / 2 - u / 2;
        t.fillRect(i, s, e - l, u)
      }
    }
  }, [x, p, A, O]), (0, a.jsxs)("div", {
    className: i()(g.container, u),
    children: [(0, a.jsx)("canvas", {
      className: g.waveformCanvas,
      ref: v,
      width: 4 * p.width,
      height: 4 * p.height
    }), M && (0, a.jsx)("div", {
      className: g.loading,
      children: (0, a.jsx)(o.Spinner, {
        type: o.SpinnerTypes.SPINNING_CIRCLE
      })
    })]
  })
})