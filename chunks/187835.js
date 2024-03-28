"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("943461"),
  i = n("603592"),
  r = n("689938");
let o = "DOWNLOAD_APPS";

function u() {
  let e = (0, a.useModalsStore)(e => (0, a.hasModalOpenSelector)(e, o));
  return (0, l.jsx)(i.default, {
    id: "app-download-button",
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "431583"));
        return t => (0, l.jsx)(e, {
          source: "Guilds",
          ...t
        })
      }, {
        modalKey: o
      })
    },
    selected: e,
    tooltip: r.default.Messages.DOWNLOAD_APPS,
    icon: s.default
  })
}