"use strict";
l.r(t), l.d(t, {
  TOGGLE_HOTKEYS: function() {
    return a
  }
});
var n = l("481060"),
  s = l("191980"),
  u = l("285371");
let a = {
  binds: ["mod+/", "mod+shift+/"],
  comboKeysBindGlobal: !0,
  action: () => ((0, n.hasModalOpen)(u.KEYBOARD_SHORTCUT_MODAL_KEY) ? s.hide() : s.show(), !1)
}