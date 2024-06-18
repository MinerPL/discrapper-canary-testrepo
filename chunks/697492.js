"use strict";
n.d(t, {
  Gd: function() {
    return s
  },
  ME: function() {
    return o
  },
  Ym: function() {
    return a
  },
  _g: function() {
    return r
  },
  hu: function() {
    return l
  }
});
var i = n(570140);

function r(e, t, n) {
  i.Z.dispatch({
    type: "HIGH_FIVE_QUEUE",
    userId: t,
    channelId: n,
    emoji: e
  })
}

function s(e, t) {
  i.Z.dispatch({
    type: "HIGH_FIVE_REMOVE",
    channelId: t,
    userId: e
  })
}

function o(e) {
  i.Z.dispatch({
    type: "HIGH_FIVE_SET_ENABLED",
    enabled: e
  })
}

function a(e, t, n, r) {
  i.Z.dispatch({
    type: "HIGH_FIVE_COMPLETE",
    waitingUserId: e,
    completingUserId: t,
    channelId: n,
    completingEmoji: r
  })
}

function l(e, t, n) {
  i.Z.dispatch({
    type: "HIGH_FIVE_COMPLETE_CLEAR",
    firstUserId: e,
    secondUserId: t,
    channelId: n
  })
}