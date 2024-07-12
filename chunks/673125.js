n(653041), n(47120);
var i, a, l, s, r = n(442837),
  o = n(570140),
  c = n(633302),
  d = n(594174),
  u = n(176354),
  h = n(292793),
  p = n(88315),
  m = n(813900);
let _ = {},
  f = {},
  E = {},
  C = !0,
  g = null;

function I(e) {
  if (null == f[e]) {
let t = d.default.getUser(e);
if (null == t)
  return;
let n = t.getAvatarURL(null, m.Ks),
  i = new Image();
i.src = n, f[e] = i;
  }
}
class x extends(i = r.ZP.Store) {
  get visibleOverlayCanvas() {
return C;
  }
  getDrawables(e) {
return null != _[e] ? _[e] : [];
  }
  getAvatarImage(e) {
return f[e];
  }
  getEmojiImage(e) {
return E[e];
  }
  getDrawMode() {
return g;
  }
}
s = 'SharedCanvasStore', (l = 'displayName') in(a = x) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s;
let T = new x(o.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
let {
  lineId: t,
  newPoints: n,
  userId: i,
  streamerId: a
} = e, l = _[a];
if (null == l)
  _[a] = [{
    type: h.W.LINE,
    id: t,
    userId: i,
    points: n
  }];
else {
  let e = l.find(e => e.id === t);
  null == e ? l.push({
    type: h.W.LINE,
    id: t,
    userId: i,
    points: n
  }) : (0, p.P7)(e) && e.points.push(...n);
}
I(i);
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
var t, n, i;
let {
  emojiHose: a,
  streamerId: l,
  userId: s
} = e, r = {
  ...a,
  type: h.W.EMOJI_HOSE
};
if (null == _[l])
  _[l] = [r];
else {
  let e = _[l].findIndex(e => e.id === a.id);
  e >= 0 ? _[l][e] = {
    ..._[l][e],
    ...r
  } : _[l].push(r);
}
let o = null !== (n = null !== (t = a.emojiId) && void 0 !== t ? t : a.emojiName) && void 0 !== n ? n : '';
if (null == E[o]) {
  let e = null != a.emojiName ? c.ZP.convertNameToSurrogate(a.emojiName) : null;
  E[o] = new Image(), E[o].src = (0, u.qc)({
    id: a.emojiId,
    name: null !== (i = null != e ? e : a.emojiName) && void 0 !== i ? i : '',
    animated: !1
  }, m.qh);
}
I(s);
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
let {
  drawables: t,
  streamerId: n
} = e;
if (null != _[n]) {
  let e = new Set();
  t.forEach(t => e.add(t.id)), _[n] = _[n].filter(t => !e.has(t.id));
}
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
let {
  drawMode: t
} = e;
g = t;
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
let {} = e;
C = !C;
  }
});
t.Z = T;