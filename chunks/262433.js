"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useEmojiHoseStore: function() {
    return m
  }
}), n("653041");
var a = n("392711"),
  l = n.n(a),
  s = n("153832"),
  i = n("652874"),
  r = n("125268"),
  o = n("673125"),
  u = n("292793"),
  d = n("88315"),
  c = n("199766"),
  f = n("813900");
let h = {
    X_OFFSET: 2 * f.EMOJI_HOSE_EMOJI_SIZE,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: -1,
    Y_SPEED_MAX: -5,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: f.EMOJI_HOSE_EMOJI_SIZE / 2,
    SIZE_MAX: f.EMOJI_HOSE_EMOJI_SIZE
  },
  m = (0, i.default)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function p(e, t) {
  var n;
  l()(null !== (n = m.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t)
}

function E(e) {
  var t, n, a, i;
  let {
    emojiHose: E,
    context: C,
    canvasWidth: g,
    canvasHeight: S,
    fallbackColor: _,
    outlineColorDark: T,
    outlineColorLight: I,
    streamerId: A,
    deadDrawables: v
  } = e;
  C.save();
  let N = o.default.getEmojiImage(null !== (n = null !== (t = E.emojiId) && void 0 !== t ? t : E.emojiName) && void 0 !== n ? n : ""),
    x = (0, d.normalizeCoordinate)(E.x, g),
    M = (0, d.normalizeCoordinate)(E.y, S),
    {
      outlineColor: R
    } = (0, d.getUserColors)(E.userId, T, I, _);
  if (p(E, e => {
      var t, n;
      return t = E, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && m.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e)))
    }), ! function(e, t, n) {
      var a;
      let i = null !== (a = m.getState().lastSpawned[e.id]) && void 0 !== a ? a : 0,
        r = Date.now();
      if (!(i + 100 > r) && e.state !== u.EmojiHoseState.STOP)(.8 >= Math.random() || i + 300 < r) && m.setState(a => {
        var i, r, o;
        let u = null !== (i = a.particles[e.id]) && void 0 !== i ? i : {},
          d = l().random(1, 2);
        for (let e = 0; e < d; e++) {
          ;
          let e = (r = t, o = n, {
            id: (0, s.v4)(),
            x: r + l().random(-h.X_OFFSET, h.X_OFFSET),
            y: o + l().random(-h.Y_OFFSET, h.Y_OFFSET),
            xSpeed: l().random(-h.X_SPEED, h.X_SPEED),
            ySpeed: l().random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
            opacity: h.OPACITY,
            opacitySpeed: l().random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
            size: l().random(h.SIZE_MIN, h.SIZE_MAX)
          });
          u[e.id] = e
        }
        return a.particles[e.id] = u, a.lastSpawned[e.id] = Date.now(), a
      })
    }(E, x, M), (0, c.renderAvatarCursorOutline)(C, x, M, R, f.OUTLINE_WIDTH), (0, c.renderAvatarCursor)(C, x, M, E.userId), p(E, e => (function(e, t, n) {
      if (null == t) return;
      let a = n.size * window.devicePixelRatio,
        l = n.x - a / 2 * window.devicePixelRatio,
        s = n.y - 1.2 * a * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, a / 2 + l, a / 2 + s, a, a)
    })(C, N, e)), E.lastUpdatedAt + f.EMOJI_HOSE_PING_DELAY < Date.now() && (0, r.stopRenderedEmojiHose)(A, E), E.state === u.EmojiHoseState.STOP && (a = E, !(Object.keys(null !== (i = m.getState().particles[a.id]) && void 0 !== i ? i : {}).length > 0))) v.push(E);
  C.restore()
}