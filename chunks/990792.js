"use strict";
t(47120);
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(392711),
  u = t(780384),
  o = t(481060),
  c = t(410030),
  d = t(44315),
  f = t(293501),
  m = t(943351),
  h = t(231338),
  g = t(430943);
n.Z = a.memo(function(e) {
  let {
    file: n,
    audio: t,
    className: s,
    waveformSettings: p
  } = e, [N, v] = a.useState({
    width: 0,
    height: 0
  }), _ = a.useRef(null), D = a.useMemo(() => {
    var e;
    let n = null !== (e = null == t ? void 0 : t.duration) && void 0 !== e ? e : 1;
    return {
      fineTuning: -1,
      fineTuningResolution: n / m.nl.fineTuningScale,
      duration: n,
      ...null != p ? p : {}
    }
  }, [t, p]), O = (0, f.b1)(n), x = (0, f.NN)(O, _.current, D), S = (0, c.ZP)(), E = (0, d.Sl)((0, u.wj)(S) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700), y = null == O || null == x, A = (0 === N.width || 0 === N.height || y) && null != n, b = a.useCallback(() => {
    null != _.current && v({
      width: _.current.offsetWidth,
      height: _.current.offsetHeight
    })
  }, []);
  return a.useEffect(() => {
    if (null != _.current) {
      let e = new ResizeObserver((0, r.debounce)(b, 50));
      return e.observe(_.current), () => {
        e.disconnect()
      }
    }
  }, [b]), a.useEffect(() => {
    if (null == _.current) return;
    let e = _.current,
      n = e.getContext("2d");
    if (null == n) return;
    let {
      width: t,
      height: l
    } = e;
    if (0 !== N.width && 0 !== N.height) {
      if (null != x && x.length > 0) {
        let e = t / x.length,
          a = -(e * (m.nl.waveformBarWidth - 1));
        n.clearRect(0, 0, t, l), n.fillStyle = E.hex;
        for (let t = 0; t < x.length; t++) {
          let s = x[t] * l,
            i = t * e + a,
            r = l / 2 - s / 2;
          n.fillRect(i, r, e - a, s)
        }
      }
    }
  }, [E, N, S, x]), (0, l.jsxs)("div", {
    className: i()(g.container, s),
    children: [(0, l.jsx)("canvas", {
      className: g.waveformCanvas,
      ref: _,
      width: 4 * N.width,
      height: 4 * N.height
    }), A && (0, l.jsx)("div", {
      className: g.loading,
      children: (0, l.jsx)(o.Spinner, {
        type: o.SpinnerTypes.SPINNING_CIRCLE
      })
    })]
  })
})