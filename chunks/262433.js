n.d(t, {
  U: function() {
return _;
  },
  Z: function() {
return E;
  }
}), n(653041);
var i = n(392711),
  a = n.n(i),
  s = n(772848),
  l = n(652874),
  r = n(731965),
  o = n(125268),
  c = n(673125),
  u = n(292793),
  d = n(88315),
  h = n(199766),
  p = n(813900);
let m = {
X_OFFSET: 2 * p.qh,
Y_OFFSET: 25,
X_SPEED: 0.5,
Y_SPEED_MIN: -1,
Y_SPEED_MAX: -5,
OPACITY: 1,
OPACITY_SPEED_MIN: 0.01,
OPACITY_SPEED_MAX: 0.05,
SIZE_MIN: p.qh / 2,
SIZE_MAX: p.qh
  },
  _ = (0, l.Z)(() => ({
particles: {},
lastSpawned: {}
  }));

function f(e, t) {
  var n;
  a()(null !== (n = _.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}

function E(e) {
  var t, n, i, l;
  let {
emojiHose: E,
context: g,
canvasWidth: C,
canvasHeight: I,
fallbackColor: x,
outlineColorDark: T,
outlineColorLight: N,
streamerId: v,
deadDrawables: S
  } = e;
  g.save();
  let Z = c.Z.getEmojiImage(null !== (n = null !== (t = E.emojiId) && void 0 !== t ? t : E.emojiName) && void 0 !== n ? n : ''),
A = (0, d.np)(E.x, C),
M = (0, d.np)(E.y, I),
{
  outlineColor: b
} = (0, d.bg)(E.userId, T, N, x);
  if (f(E, e => {
  var t, n;
  return t = E, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && (0, r.j)(() => {
    _.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e));
  }));
}), ! function(e, t, n) {
  var i;
  let l = null !== (i = _.getState().lastSpawned[e.id]) && void 0 !== i ? i : 0,
    o = Date.now();
  if (!(l + 100 > o) && e.state !== u.f.STOP && !!(0.8 >= Math.random() || l + 300 < o))
    (0, r.j)(() => {
      _.setState(i => {
        var l, r, o;
        let c = null !== (l = i.particles[e.id]) && void 0 !== l ? l : {},
          u = a().random(1, 2);
        for (let e = 0; e < u; e++) {
          ;
          let e = (r = t, o = n, {
            id: (0, s.Z)(),
            x: r + a().random(-m.X_OFFSET, m.X_OFFSET),
            y: o + a().random(-m.Y_OFFSET, m.Y_OFFSET),
            xSpeed: a().random(-m.X_SPEED, m.X_SPEED),
            ySpeed: a().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
            opacity: m.OPACITY,
            opacitySpeed: a().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
            size: a().random(m.SIZE_MIN, m.SIZE_MAX)
          });
          c[e.id] = e;
        }
        return i.particles[e.id] = c, i.lastSpawned[e.id] = Date.now(), i;
      });
    });
}(E, A, M), (0, h.I)(g, A, M, b, p.q2), (0, h.T)(g, A, M, E.userId), f(E, e => function(e, t, n) {
  if (null == t)
    return;
  let i = n.size * window.devicePixelRatio,
    a = n.x - i / 2 * window.devicePixelRatio,
    s = n.y - 1.2 * i * window.devicePixelRatio;
  e.globalAlpha = n.opacity, e.drawImage(t, i / 2 + a, i / 2 + s, i, i);
}(g, Z, e)), E.lastUpdatedAt + p.FO < Date.now() && (0, o.ZZ)(v, E), E.state === u.f.STOP && (i = E, !(Object.keys(null !== (l = _.getState().particles[i.id]) && void 0 !== l ? l : {}).length > 0)))
S.push(E);
  g.restore();
}