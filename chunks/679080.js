"use strict";
n.r(t), n.d(t, {
  SEARCH_EMOJIS: function() {
    return a
  }
});
var i = n("130402"),
  o = n("585483"),
  l = n("981631"),
  u = n("185923");
let a = {
  binds: ["mod+e"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.initiateEmojiInteraction)(u.EmojiInteractionPoint.SearchEmojiKeybindPressed), o.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
}