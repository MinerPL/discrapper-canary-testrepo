"use strict";
n.r(t), n("653041"), n("47120");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("633302"),
  d = n("594174"),
  c = n("176354"),
  f = n("292793"),
  h = n("88315"),
  m = n("813900");
let p = {},
  E = {},
  C = {},
  g = !0,
  S = null;

function _(e) {
  if (null == E[e]) {
    let t = d.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, m.AVATAR_COLOR_AVATAR_SIZE),
      a = new Image;
    a.src = n, E[e] = a
  }
}
class T extends(a = r.default.Store) {
  get visibleOverlayCanvas() {
    return g
  }
  getDrawables(e) {
    return null != p[e] ? p[e] : []
  }
  getAvatarImage(e) {
    return E[e]
  }
  getEmojiImage(e) {
    return C[e]
  }
  getDrawMode() {
    return S
  }
}
i = "SharedCanvasStore", (s = "displayName") in(l = T) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i;
let I = new T(o.default, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: a,
      streamerId: l
    } = e, s = p[l];
    if (null == s) p[l] = [{
      type: f.DrawableType.LINE,
      id: t,
      userId: a,
      points: n
    }];
    else {
      let e = s.find(e => e.id === t);
      null == e ? s.push({
        type: f.DrawableType.LINE,
        id: t,
        userId: a,
        points: n
      }) : (0, h.isLine)(e) && e.points.push(...n)
    }
    _(a)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, a;
    let {
      emojiHose: l,
      streamerId: s,
      userId: i
    } = e, r = {
      ...l,
      type: f.DrawableType.EMOJI_HOSE
    };
    if (null == p[s]) p[s] = [r];
    else {
      let e = p[s].findIndex(e => e.id === l.id);
      e >= 0 ? p[s][e] = {
        ...p[s][e],
        ...r
      } : p[s].push(r)
    }
    let o = null !== (n = null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) && void 0 !== n ? n : "";
    if (null == C[o]) {
      let e = null != l.emojiName ? u.default.convertNameToSurrogate(l.emojiName) : null;
      C[o] = new Image, C[o].src = (0, c.getEmojiUrl)({
        id: l.emojiId,
        name: null !== (a = null != e ? e : l.emojiName) && void 0 !== a ? a : "",
        animated: !1
      }, m.EMOJI_HOSE_EMOJI_SIZE)
    }
    _(i)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != p[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), p[n] = p[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    S = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    g = !g
  }
});
t.default = I