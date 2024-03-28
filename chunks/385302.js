"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  s = n("668781"),
  u = n("79390"),
  r = n("222677"),
  o = n("665906"),
  d = n("496675"),
  c = n("981631"),
  f = n("689938");

function E(e, t) {
  let n = (0, o.useIsActiveChannelOrUnarchivableThread)(t),
    E = (0, i.useStateFromStores)([d.default], () => d.default.can(c.Permissions.MANAGE_MESSAGES, t) && n, [t, n]);
  return !E || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, u.hasNonVoteReactions)(e) ? null : (0, a.jsx)(l.MenuItem, {
    id: "remove-reactions",
    label: f.default.Messages.REMOVE_ALL_REACTIONS,
    action: function(n) {
      n.shiftKey ? (0, r.removeAllReactions)(t.id, e.id) : s.default.show({
        title: f.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
        body: f.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
        confirmText: f.default.Messages.YES_TEXT,
        cancelText: f.default.Messages.NO_TEXT,
        onConfirm: () => {
          (0, r.removeAllReactions)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}