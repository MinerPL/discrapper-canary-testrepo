"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("79390"),
  s = n("446466"),
  u = n("689938");

function r(e) {
  return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, l.hasNonVoteReactions)(e) ? null : (0, a.jsx)(i.MenuItem, {
    id: "reactions",
    label: u.default.Messages.VIEW_REACTIONS,
    icon: s.default,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, "785388"));
      return n => (0, a.jsx)(t, {
        ...n,
        message: e
      })
    })
  })
}