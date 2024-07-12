t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  s = t.n(i),
  r = t(481060),
  u = t(70956),
  o = t(747071),
  c = t(586826),
  d = t(622594),
  f = t(174727),
  m = t(710111),
  h = t(339045);
let g = {
  startPositionMs: 0,
  endPositionMs: 2 * (10 * u.Z.Millis.SECOND),
  playheadPositionMs: 0
};
n.Z = a.memo(function(e) {
  var n;
  let {
className: t,
volume: i,
disabled: p = !1,
onChange: N
  } = e, {
audio: _
  } = (0, c.p)(), [v, D] = a.useState(!1), [O, S] = a.useState(g), {
playheadPositionMs: x,
endPositionMs: y,
startPositionMs: E
  } = O, A = null != _, b = y - E, M = b > m.YW * u.Z.Millis.SECOND;
  a.useEffect(() => {
null != _ && S({
  playheadPositionMs: 0,
  endPositionMs: _.duration * u.Z.Millis.SECOND,
  startPositionMs: 0
});
  }, [_]);
  let C = a.useCallback(e => {
  null != _ && (_.pause(), null != e && (_.currentTime = e), D(!1));
}, [_]),
j = a.useCallback(() => {
  if (null != _) {
    if (v) {
      C();
      return;
    }
    x >= y ? _.currentTime = (0, f.my)(E) : _.currentTime = (0, f.my)(x), _.volume = (0, o.Z)(i), _.play(), D(!0);
  }
}, [
  _,
  y,
  C,
  x,
  v,
  E,
  i
]),
I = a.useCallback(e => {
  S(e), null == N || N({
    startMs: e.startPositionMs,
    endMs: e.endPositionMs
  });
}, [N]),
w = a.useCallback(e => {
  null != _ && (_.currentTime = e);
}, [_]);
  return (0, l.jsxs)('div', {
className: s()(h.container, {
  [h.initialized]: A,
  [h.disabled]: !A || p
}, t),
children: [
  (0, l.jsxs)('div', {
    className: h.playButtonContainer,
    children: [
      (0, l.jsx)(r.Clickable, {
        className: h.playButton,
        onClick: A ? j : void 0,
        children: v ? (0, l.jsx)(r.StopIcon, {
          size: 'xs',
          color: 'currentColor',
          className: h.playButtonIcon
        }) : (0, l.jsx)(r.PlayIcon, {
          size: 'xs',
          color: 'currentColor',
          className: h.playButtonIcon
        })
      }),
      (0, l.jsx)('div', {
        className: h.durationContainer,
        children: (0, l.jsx)(r.Text, {
          className: h.__invalid_duration,
          variant: 'text-xs/normal',
          color: M ? 'text-warning' : 'text-positive',
          children: (n = b, ''.concat((0, f.my)(n).toFixed(2), 's'))
        })
      })
    ]
  }),
  (0, l.jsx)(d.Z, {
    playing: v,
    onPlaybackChange: w,
    onPausePlayback: C,
    onChangePosition: I,
    disabled: p
  })
]
  });
});