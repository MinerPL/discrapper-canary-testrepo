"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  _: function() {
    return a
  }
});
var i = n(399606),
  r = n(339085),
  s = n(185923);
let o = [];

function a(e) {
  let {
    emojiStoreInstance: t = r.Z,
    guildId: n,
    pickerIntention: i
  } = e;
  return {
    topEmojis: i !== s.Hz.REACTION ? t.getTopEmoji(n) : o,
    newlyAddedEmojis: i !== s.Hz.REACTION ? t.getNewlyAddedEmoji(n) : o
  }
}

function l(e, t) {
  return (0, i.cj)([r.Z], () => a({
    emojiStoreInstance: r.Z,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}