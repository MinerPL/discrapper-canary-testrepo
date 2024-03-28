"use strict";
n.r(t), n.d(t, {
  SEARCH_GIFS: function() {
    return l
  }
});
var i = n("585483"),
  o = n("981631");
let l = {
  binds: ["mod+g"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.TOGGLE_GIF_PICKER), !1)
}