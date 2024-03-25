"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("917351"),
  u = n("819855"),
  o = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  h = n("89050"),
  m = n("843455"),
  g = n("584150"),
  v = a.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: i,
      waveformSettings: v
    } = e, [S, E] = a.useState({
      width: 0,
      height: 0
    }), p = a.useRef(null), N = a.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / h.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != v ? v : {}
      }
    }, [n, v]), _ = (0, f.useAudioBufferData)(t), O = (0, f.useAudioWaveformData)(_, p.current, N), A = (0, d.default)(), D = (0, c.useColorValue)((0, u.isThemeDark)(A) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700), b = null == _ || null == O, C = 0 === S.width || 0 === S.height, x = (C || b) && null != t, M = a.useCallback(() => {
      null != p.current && E({
        width: p.current.offsetWidth,
        height: p.current.offsetHeight
      })
    }, []);
    return a.useEffect(() => {
      if (null != p.current) {
        let e = new ResizeObserver((0, r.debounce)(M, 50));
        return e.observe(p.current), () => {
          e.disconnect()
        }
      }
    }, [M]), a.useEffect(() => {
      if (null == p.current) return;
      let e = p.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: l
      } = e;
      if (0 !== S.width && 0 !== S.height && null != O && O.length > 0) {
        let e = n / O.length,
          a = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, l), t.fillStyle = D.hex;
        for (let n = 0; n < O.length; n++) {
          let i = O[n] * l,
            s = n * e + a,
            r = l / 2 - i / 2;
          t.fillRect(s, r, e - a, i)
        }
      }
    }, [D, S, A, O]), (0, l.jsxs)("div", {
      className: s(g.container, i),
      children: [(0, l.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: p,
        width: 4 * S.width,
        height: 4 * S.height
      }), x && (0, l.jsx)("div", {
        className: g.loading,
        children: (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })