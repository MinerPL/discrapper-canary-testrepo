"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("787014"),
  i = n("933557"),
  r = n("454585"),
  o = n("131704"),
  u = n("496675"),
  d = n("185403"),
  c = n("396769"),
  f = n("967128"),
  h = n("981631"),
  m = n("689938"),
  p = n("761525");

function E(e) {
  let {
    channel: t
  } = e, n = (0, i.default)(t, !0), E = (0, l.useStateFromStores)([u.default], () => u.default.can(h.Permissions.MANAGE_CHANNELS, t) && o.EDITABLE_CHANNEL_TYPES.has(t.type));
  return (0, a.jsxs)(f.default, {
    channelId: t.id,
    children: [(0, a.jsx)(f.EmptyMessageIcon, {
      channelType: t.type
    }), (0, a.jsx)(f.EmptyMessageHeader, {
      children: m.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: n
      })
    }), (0, a.jsx)(f.EmptyMessageBody, {
      children: m.default.Messages.BEGINNING_CHANNEL_DESCRIPTION.format({
        channelName: n,
        topicHook: () => r.default.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), E ? (0, a.jsx)("div", {
      className: p.buttonContainer,
      children: (0, a.jsx)(c.default, {
        label: m.default.Messages.EDIT_CHANNEL,
        onClick: () => {
          s.default.open(t.id)
        },
        icon: (0, a.jsx)(d.default, {
          width: 16,
          height: 16
        })
      })
    }) : null]
  })
}