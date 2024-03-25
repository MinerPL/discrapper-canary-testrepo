"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("424973");
var a = n("52477"),
  l = n("357304"),
  s = n("827520");

function i(e) {
  let {
    line: t,
    context: n,
    canvasWidth: i,
    canvasHeight: r,
    fallbackColor: u,
    outlineColorDark: o,
    outlineColorLight: d,
    linesDrawnAt: c,
    deadDrawables: f
  } = e;
  null == c.current[t.id] && (c.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let h = t.points.map(e => (0, a.normalizeCoordinates)(e, i, r)),
    m = c.current[t.id],
    p = e => m + e.deltaTime,
    E = e => p(e) + 1500 >= Date.now(),
    g = e => p(e) <= Date.now() && E(e),
    S = h.find(g);
  if (null == S) {
    !E(t.points[t.points.length - 1]) && f.push(t);
    return
  }
  let C = (e, t) => {
      let a = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(S.x, S.y);
      for (let e = 1; e < h.length; e++) {
        let t = h[e];
        g(t) && (n.lineTo(t.x, t.y), a = t)
      }
      return n.stroke(), a
    },
    {
      fillColor: _,
      outlineColor: I
    } = (0, a.getUserColors)(t.userId, o, d, u),
    T = C(I, 6 + s.OUTLINE_WIDTH),
    v = null != T && g(T);
  v && (0, l.renderAvatarCursorOutline)(n, T.x, T.y, I, s.OUTLINE_WIDTH), C(_, 6), v && (0, l.renderAvatarCursor)(n, T.x, T.y, t.userId)
}