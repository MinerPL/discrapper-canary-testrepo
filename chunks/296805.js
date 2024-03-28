"use strict";
n.r(t), n.d(t, {
  OPEN_APP_DIRECTORY: function() {
    return u
  }
});
var i = n("132871"),
  o = n("147890"),
  l = n("914010");
let u = {
  binds: ["mod+ctrl+a"],
  comboKeysBindGlobal: !0,
  action() {
    var e;
    let t = null !== (e = l.default.getGuildId()) && void 0 !== e ? e : void 0;
    (0, o.goToAppDirectory)({
      guildId: t,
      entrypoint: {
        name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT
      }
    })
  }
}