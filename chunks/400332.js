"use strict";
n.r(t), n.d(t, {
  SEARCH_STICKERS: function() {
    return l
  }
});
var i = n("585483"),
  o = n("981631");
let l = {
  binds: ["mod+s"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.TOGGLE_STICKER_PICKER), !1)
}