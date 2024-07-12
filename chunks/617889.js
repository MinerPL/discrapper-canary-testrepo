n.d(t, {
  B: function() {
return x;
  },
  L: function() {
return f;
  }
});
var s = n(470079),
  o = n(626135),
  r = n(70956),
  a = n(617136),
  i = n(918701),
  l = n(988303),
  c = n(658590),
  d = n(448018),
  u = n(46140),
  p = n(981631);
let x = (e, t) => {
let n = (0, i.zK)(e, u.S7.QUEST_BAR_V2),
  o = (0, c.a)(e),
  {
    primaryVariant: r,
    progressVariant: a
  } = l.u.useExperiment({
    location: u.dr.QUESTS_BAR
  }, {
    autoTrackExposure: t && n
  });
return s.useMemo(() => o ? (0, d.v)(e, l.P.V2, l.P.V2) : n ? (0, d.v)(e, r, a) : (0, d.v)(e, l.P.V1, l.P.V1), [
  o,
  r,
  a,
  e,
  n
]);
  },
  m = 30 * r.Z.Millis.SECOND,
  g = 20 * r.Z.Millis.MINUTE,
  C = Date.now();

function f(e) {
  let t = s.useRef({
renderCount: 0,
renderCountResetAt: 0,
expandedAt: 0,
paintedAfterExpandAt: 0,
expandAnimationBeganAt: 0,
expandAnimationEndedAt: 0
  });
  return s.useEffect(() => {
let n = performance.now();
n - t.current.renderCountResetAt > m && (t.current.renderCount = 0, t.current.renderCountResetAt = n), t.current.renderCount++, ! function(e, t) {
  let n = Date.now();
  if (!(n - C < g))
    C = n, window.requestIdleCallback(() => {
      o.default.track(p.rMx.QUEST_BAR_RENDER_PERFORMANCE_MEASURED, {
        render_count_30s: e.renderCount,
        expanded_paint_duration_ms: e.paintedAfterExpandAt - e.expandedAt,
        expand_animation_duration_ms: e.expandAnimationEndedAt - e.expandAnimationBeganAt,
        ...(0, a.mH)(t)
      });
    });
}(t.current, e);
  }), t;
}