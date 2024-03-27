"use strict";
n.r(t), n.d(t, {
  SEARCH_EMOJIS: function() {
    return a
  }
});
var i = n("558986"),
  o = n("659500"),
  l = n("49111"),
  u = n("958706");
let a = {
  binds: ["mod+e"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.initiateEmojiInteraction)(u.EmojiInteractionPoint.SearchEmojiKeybindPressed), o.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
}