"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("653041");
var a = n("470079"),
  l = n("846519"),
  s = n("692547"),
  i = n("481060"),
  r = n("220082"),
  o = n("979651"),
  u = n("125268"),
  d = n("673125"),
  c = n("292793"),
  f = n("88315"),
  h = n("262433"),
  m = n("400321"),
  p = n("813900");
let E = 1e3 / 60;

function C(e, t, n, C) {
  let g = (0, i.useToken)(s.default.unsafe_rawColors.BRAND_500).hex(),
    S = (0, i.useToken)(s.default.unsafe_rawColors.BLACK_500).hex(),
    _ = (0, i.useToken)(s.default.unsafe_rawColors.WHITE_500).hex(),
    T = a.useRef({}),
    I = a.useRef(new l.Interval),
    A = a.useCallback(t => {
      let n = d.default.getDrawables(t);
      (0, f.clearCanvas)(e), ! function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: a,
          linesDrawnAt: l,
          streamerId: s,
          channelId: i,
          outlineColorDark: r,
          outlineColorLight: d
        } = e;
        if (0 === n.length) return;
        let f = t.current;
        if (null == f) return;
        let p = f.getContext("2d");
        if (null == p) return;
        let {
          width: E,
          height: C
        } = f.getBoundingClientRect(), g = [];
        n.forEach(e => {
          if (!(null != o.default.getVoiceStateForChannel(i, e.userId))) {
            g.push(e);
            return
          }! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: a,
              canvasHeight: l,
              fallbackColor: s,
              outlineColorDark: i,
              outlineColorLight: r,
              linesDrawnAt: o,
              streamerId: u,
              deadDrawables: d
            } = e;
            switch (t.type) {
              case c.DrawableType.LINE:
                return (0, m.default)({
                  line: t,
                  context: n,
                  canvasWidth: a,
                  canvasHeight: l,
                  fallbackColor: s,
                  outlineColorDark: i,
                  outlineColorLight: r,
                  linesDrawnAt: o,
                  deadDrawables: d
                });
              case c.DrawableType.EMOJI_HOSE:
                return (0, h.default)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: a,
                  canvasHeight: l,
                  fallbackColor: s,
                  outlineColorDark: i,
                  outlineColorLight: r,
                  streamerId: u,
                  deadDrawables: d
                })
            }
          }({
            drawable: e,
            context: p,
            canvasWidth: E,
            canvasHeight: C,
            fallbackColor: a,
            outlineColorDark: r,
            outlineColorLight: d,
            linesDrawnAt: l,
            deadDrawables: g,
            streamerId: s
          })
        }), g.length > 0 && (0, u.clearDrawables)(g, s)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: g,
        linesDrawnAt: T,
        streamerId: t,
        outlineColorDark: S,
        outlineColorLight: _,
        channelId: C
      })
    }, [e, C, g, S, _]);
  a.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: a,
        height: l
      } = t.getBoundingClientRect();
      t.width = a * window.devicePixelRatio, t.height = l * window.devicePixelRatio, A(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, A, n]);
  let v = a.useCallback(() => {
    let t = d.default.getDrawables(n),
      a = h.useEmojiHoseStore.getState().particles,
      l = t.length > 0 || Object.keys(a).length > 0;
    l && null == I.current._ref && (null == I.current._ref ? (A(n), I.current.start(E, () => A(n))) : !l && null != I.current._ref && (I.current.stop(), (0, f.clearCanvas)(e)))
  }, [e, A, n]);
  a.useEffect(() => {
    let e = I.current;
    return d.default.addChangeListener(v), v(), (0, r.maybeFetchColors)(t.getAvatarURL(null, p.AVATAR_COLOR_AVATAR_SIZE)), () => {
      d.default.removeChangeListener(v), e.stop()
    }
  })
}