"use strict";
n.r(t), n.d(t, {
  addLinePoints: function() {
    return u
  },
  clearDrawables: function() {
    return p
  },
  drawLinePoint: function() {
    return o
  },
  setDrawMode: function() {
    return E
  },
  startEmojiHose: function() {
    return c
  },
  stopEmojiHose: function() {
    return f
  },
  stopRenderedEmojiHose: function() {
    return h
  },
  toggleOverlayCanvas: function() {
    return C
  },
  updateEmojiHose: function() {
    return m
  },
  updateLinePoints: function() {
    return d
  }
});
var a = n("261470"),
  l = n("544891"),
  s = n("570140"),
  i = n("292793"),
  r = n("981631");

function o(e, t, n, a, l) {
  s.default.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: a,
    point: l
  })
}

function u(e, t, n, a) {
  return l.HTTP.post({
    url: r.Endpoints.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: a
    }
  })
}

function d(e, t, n, a) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: a,
    streamerId: n
  })
}

function c(e, t, n) {
  return l.HTTP.post({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    }
  })
}

function f(e, t, n) {
  l.HTTP.del({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new a.default
  })
}

function h(e, t) {
  t.state = i.EmojiHoseState.STOP, s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function m(e, t, n) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function p(e, t) {
  s.default.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function E(e) {
  s.default.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function C() {
  s.default.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}