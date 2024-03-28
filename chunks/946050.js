"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("263704"),
  r = n("465670"),
  o = n("670044"),
  u = n("28391"),
  d = n("526761"),
  c = n("689938"),
  f = n("102257");

function h(e) {
  return l.useEffect(() => e.onChannelChange(), [e.channel.id]), (0, a.jsxs)("div", {
    className: f.notice,
    children: [(0, a.jsx)(o.default, {
      id: e.channel.id
    }), (0, a.jsx)("div", {
      className: f.info,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: c.default.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE
      })
    }), (0, a.jsxs)("div", {
      className: f.buttons,
      children: [(0, a.jsxs)(s.Button, {
        size: s.Button.Sizes.TINY,
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.PRIMARY,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => (0, u.default)(e.channel.guild_id, e.channel.id, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES),
        children: [(0, a.jsx)(i.default, {
          height: 16,
          width: 16,
          style: {
            marginRight: 4
          }
        }), c.default.Messages.YES_TEXT]
      }), (0, a.jsx)(s.Button, {
        style: {
          marginLeft: 8
        },
        size: s.Button.Sizes.TINY,
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.PRIMARY,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => (0, u.default)(e.channel.guild_id, e.channel.id, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS),
        children: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.default, {
            height: 16,
            width: 16,
            style: {
              marginRight: 4
            }
          }), c.default.Messages.NO_TEXT]
        })
      })]
    })]
  })
}