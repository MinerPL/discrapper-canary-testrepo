"use strict";
n.d(t, {
  G: function() {
    return s
  },
  U: function() {
    return r
  }
});
var i = n(570140);

function r(e, t, n, r) {
  i.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
    messageId: e,
    emojiName: t,
    emojiId: n,
    startPosition: r
  })
}

function s(e, t, n) {
  i.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
    messageId: e,
    emojiName: t,
    emojiId: n
  })
}