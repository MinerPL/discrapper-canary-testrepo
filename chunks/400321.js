"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("653041");
var a = n("88315"),
  l = n("199766"),
  s = n("813900");

function i(e) {
  let {
    line: t,
    context: n,
    canvasWidth: i,
    canvasHeight: r,
    fallbackColor: o,
    outlineColorDark: u,
    outlineColorLight: d,
    linesDrawnAt: c,
    deadDrawables: f
  } = e;
  null == c.current[t.id] && (c.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let h = t.points.map(e => (0, a.normalizeCoordinates)(e, i, r)),
    m = c.current[t.id],
    p = e => m + e.deltaTime,
    E = e => p(e) + 1500 >= Date.now(),
    C = e => p(e) <= Date.now() && E(e),
    g = h.find(C);
  if (null == g) {
    !E(t.points[t.points.length - 1]) && f.push(t);
    return
  }
  let S = (e, t) => {
      let a = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(g.x, g.y);
      for (let e = 1; e < h.length; e++) {
        let t = h[e];
        C(t) && (n.lineTo(t.x, t.y), a = t)
      }
      return n.stroke(), a
    },
    {
      fillColor: _,
      outlineColor: T
    } = (0, a.getUserColors)(t.userId, u, d, o),
    I = S(T, 6 + s.OUTLINE_WIDTH),
    A = null != I && C(I);
  A && (0, l.renderAvatarCursorOutline)(n, I.x, I.y, T, s.OUTLINE_WIDTH), S(_, 6), A && (0, l.renderAvatarCursor)(n, I.x, I.y, t.userId)
}