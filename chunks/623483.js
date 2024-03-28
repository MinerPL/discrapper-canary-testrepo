"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var l = a("481060"),
  u = a("117984"),
  s = a("689938");

function d(e) {
  return (0, n.jsx)(l.MenuItem, {
    id: "delete-channel",
    label: s.default.Messages.REMOVE_CATEGORY,
    subtext: s.default.Messages.DELETE_CATEGORY_SUBTEXT,
    color: "danger",
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await a.e("37720").then(a.bind(a, "357632"));
      return a => (0, n.jsx)(t, {
        ...a,
        onConfirm: () => {
          a.onClose(), (0, u.removeFavoriteCategory)(e.id)
        },
        channel: e
      })
    })
  })
}