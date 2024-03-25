"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD: function() {
    return u
  }
});
var i = n("77078"),
  o = n("616265"),
  l = n("243338");
let u = {
  binds: ["mod+shift+n"],
  comboKeysBindGlobal: !0,
  action() {
    (0, i.hasModalOpen)(l.CREATE_GUILD_MODAL_KEY) ? o.default.updateCreateGuildModal({
      slide: l.CreateGuildSlideTypes.JOIN_GUILD,
      location: "Keyboard Shortcut"
    }): o.default.openCreateGuildModal({
      location: "Keyboard Shortcut"
    })
  }
}