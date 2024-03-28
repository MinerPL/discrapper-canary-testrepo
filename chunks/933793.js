"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var u = a("442837"),
  r = a("481060"),
  i = a("240872"),
  s = a("456269"),
  d = a("346479"),
  l = a("665906"),
  o = a("592125"),
  f = a("176505"),
  c = a("689938");

function h(e) {
  let t = (0, u.useStateFromStores)([o.default], () => o.default.getChannel(e.parent_id)),
    a = (0, l.useIsThreadModerator)(e),
    h = (0, s.useExistingPin)(e);
  return (null == t ? void 0 : t.isForumLikeChannel()) && a ? e.hasFlag(f.ChannelFlags.PINNED) ? (0, n.jsx)(r.MenuItem, {
    id: "unpin-thread",
    label: c.default.Messages.UNPIN_POST,
    action: () => d.default.unpin(e)
  }) : (0, n.jsx)(r.MenuItem, {
    id: "pin-thread",
    label: c.default.Messages.PIN_POST,
    action: function() {
      null != h ? i.default.show({
        title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
        body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
        onConfirm: async () => {
          await d.default.unpin(h), d.default.pin(e)
        }
      }) : d.default.pin(e)
    }
  }) : null
}