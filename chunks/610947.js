n.d(t, {
  Z: function() {
return E;
  }
}), n(653041);
var i = n(470079),
  a = n(846519),
  l = n(692547),
  s = n(481060),
  r = n(220082),
  o = n(979651),
  c = n(125268),
  d = n(673125),
  u = n(292793),
  h = n(88315),
  p = n(262433),
  m = n(400321),
  _ = n(813900);
let f = 1000 / 60;

function E(e, t, n, E) {
  let C = (0, s.useToken)(l.Z.unsafe_rawColors.BRAND_500).hex(),
g = (0, s.useToken)(l.Z.unsafe_rawColors.BLACK_500).hex(),
I = (0, s.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
x = i.useRef({}),
T = i.useRef(new a.Xp()),
v = i.useCallback(t => {
  let n = d.Z.getDrawables(t);
  (0, h.UN)(e), ! function(e) {
    let {
      canvasRef: t,
      drawables: n,
      fallbackColor: i,
      linesDrawnAt: a,
      streamerId: l,
      channelId: s,
      outlineColorDark: r,
      outlineColorLight: d
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
    } = h.getBoundingClientRect(), C = [];
    n.forEach(e => {
      if (!(null != o.Z.getVoiceStateForChannel(s, e.userId))) {
        C.push(e);
        return;
      }! function(e) {
        let {
          drawable: t,
          context: n,
          canvasWidth: i,
          canvasHeight: a,
          fallbackColor: l,
          outlineColorDark: s,
          outlineColorLight: r,
          linesDrawnAt: o,
          streamerId: c,
          deadDrawables: d
        } = e;
        switch (t.type) {
          case u.W.LINE:
            return (0, m.Z)({
              line: t,
              context: n,
              canvasWidth: i,
              canvasHeight: a,
              fallbackColor: l,
              outlineColorDark: s,
              outlineColorLight: r,
              linesDrawnAt: o,
              deadDrawables: d
            });
          case u.W.EMOJI_HOSE:
            return (0, p.Z)({
              emojiHose: t,
              context: n,
              canvasWidth: i,
              canvasHeight: a,
              fallbackColor: l,
              outlineColorDark: s,
              outlineColorLight: r,
              streamerId: c,
              deadDrawables: d
            });
        }
      }({
        drawable: e,
        context: _,
        canvasWidth: f,
        canvasHeight: E,
        fallbackColor: i,
        outlineColorDark: r,
        outlineColorLight: d,
        linesDrawnAt: a,
        deadDrawables: C,
        streamerId: l
      });
    }), C.length > 0 && (0, c.fW)(C, l);
  }({
    canvasRef: e,
    drawables: n,
    fallbackColor: C,
    linesDrawnAt: x,
    streamerId: t,
    outlineColorDark: g,
    outlineColorLight: I,
    channelId: E
  });
}, [
  e,
  E,
  C,
  g,
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
  t.width = i * window.devicePixelRatio, t.height = a * window.devicePixelRatio, v(n);
});
return null != e.current && t.observe(e.current), () => t.disconnect();
  }, [
e,
v,
n
  ]);
  let N = i.useCallback(() => {
let t = d.Z.getDrawables(n),
  i = p.U.getState().particles,
  a = t.length > 0 || Object.keys(i).length > 0;
a && null == T.current._ref && (null == T.current._ref ? (v(n), T.current.start(f, () => v(n))) : !a && null != T.current._ref && (T.current.stop(), (0, h.UN)(e)));
  }, [
e,
v,
n
  ]);
  i.useEffect(() => {
let e = T.current;
return d.Z.addChangeListener(N), N(), (0, r.vM)(t.getAvatarURL(null, _.Ks)), () => {
  d.Z.removeChangeListener(N), e.stop();
};
  });
}