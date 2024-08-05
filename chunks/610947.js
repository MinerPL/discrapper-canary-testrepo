n.d(t, {
  Z: function() {
return E;
  }
}), n(653041);
var i = n(470079),
  a = n(846519),
  s = n(692547),
  l = n(481060),
  r = n(220082),
  o = n(979651),
  c = n(125268),
  u = n(673125),
  d = n(292793),
  h = n(88315),
  p = n(262433),
  m = n(400321),
  _ = n(813900);
let f = 1000 / 60;

function E(e, t, n, E) {
  let g = (0, l.useToken)(s.Z.unsafe_rawColors.BRAND_500).hex(),
C = (0, l.useToken)(s.Z.unsafe_rawColors.BLACK_500).hex(),
I = (0, l.useToken)(s.Z.unsafe_rawColors.WHITE_500).hex(),
x = i.useRef({}),
T = i.useRef(new a.Xp()),
N = i.useCallback(t => {
  let n = u.Z.getDrawables(t);
  (0, h.UN)(e), ! function(e) {
    let {
      canvasRef: t,
      drawables: n,
      fallbackColor: i,
      linesDrawnAt: a,
      streamerId: s,
      channelId: l,
      outlineColorDark: r,
      outlineColorLight: u
    } = e;
    if (0 === n.length)
      return;
    let h = t.current;
    if (null == h)
      return;
    let _ = h.getContext('2d');
    if (null == _)
      return;
    let {
      width: f,
      height: E
    } = h.getBoundingClientRect(), g = [];
    n.forEach(e => {
      if (!(null != o.Z.getVoiceStateForChannel(l, e.userId))) {
        g.push(e);
        return;
      }! function(e) {
        let {
          drawable: t,
          context: n,
          canvasWidth: i,
          canvasHeight: a,
          fallbackColor: s,
          outlineColorDark: l,
          outlineColorLight: r,
          linesDrawnAt: o,
          streamerId: c,
          deadDrawables: u
        } = e;
        switch (t.type) {
          case d.W.LINE:
            return (0, m.Z)({
              line: t,
              context: n,
              canvasWidth: i,
              canvasHeight: a,
              fallbackColor: s,
              outlineColorDark: l,
              outlineColorLight: r,
              linesDrawnAt: o,
              deadDrawables: u
            });
          case d.W.EMOJI_HOSE:
            return (0, p.Z)({
              emojiHose: t,
              context: n,
              canvasWidth: i,
              canvasHeight: a,
              fallbackColor: s,
              outlineColorDark: l,
              outlineColorLight: r,
              streamerId: c,
              deadDrawables: u
            });
        }
      }({
        drawable: e,
        context: _,
        canvasWidth: f,
        canvasHeight: E,
        fallbackColor: i,
        outlineColorDark: r,
        outlineColorLight: u,
        linesDrawnAt: a,
        deadDrawables: g,
        streamerId: s
      });
    }), g.length > 0 && (0, c.fW)(g, s);
  }({
    canvasRef: e,
    drawables: n,
    fallbackColor: g,
    linesDrawnAt: x,
    streamerId: t,
    outlineColorDark: C,
    outlineColorLight: I,
    channelId: E
  });
}, [
  e,
  E,
  g,
  C,
  I
]);
  i.useEffect(() => {
let t = new ResizeObserver(() => {
  let t = e.current;
  if (null == t)
    return;
  let {
    width: i,
    height: a
  } = t.getBoundingClientRect();
  t.width = i * window.devicePixelRatio, t.height = a * window.devicePixelRatio, N(n);
});
return null != e.current && t.observe(e.current), () => t.disconnect();
  }, [
e,
N,
n
  ]);
  let v = i.useCallback(() => {
let t = u.Z.getDrawables(n),
  i = p.U.getState().particles,
  a = t.length > 0 || Object.keys(i).length > 0;
a && null == T.current._ref && (null == T.current._ref ? (N(n), T.current.start(f, () => N(n))) : !a && null != T.current._ref && (T.current.stop(), (0, h.UN)(e)));
  }, [
e,
N,
n
  ]);
  i.useEffect(() => {
let e = T.current;
return u.Z.addChangeListener(v), v(), (0, r.vM)(t.getAvatarURL(null, _.Ks)), () => {
  u.Z.removeChangeListener(v), e.stop();
};
  });
}