"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var i = a("481060"),
  l = a("132871"),
  s = a("147890"),
  u = a("912527"),
  d = a("689938");

function r(e) {
  return (0, n.jsx)(i.MenuItem, {
    id: "application-directory",
    label: (0, n.jsx)(n.Fragment, {
      children: d.default.Messages.APP_DIRECTORY
    }),
    icon: u.default,
    action: () => {
      (0, s.goToAppDirectory)({
        guildId: e.id,
        entrypoint: {
          name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
        }
      })
    }
  })
}