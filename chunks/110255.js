"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("776568"),
  r = n("218035"),
  o = n("775666"),
  u = n("858822"),
  d = n("423589"),
  c = n("131704"),
  f = n("430824");

function E(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: E,
    navId: _,
    label: T,
    location: m,
    includeGuildMute: I
  } = e, p = (0, r.useChannelNotificationRadioItems)(t), h = (0, o.useChannelNotificationSettingsItemInner)(t), N = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id)), S = (0, u.default)(N), C = (0, d.useShouldUseNewNotificationSystem)("ChannelNotificationSettingsPopoutMenu") && c.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(t.type);
  return (0, s.jsxs)(l.Menu, {
    navId: _,
    onClose: n,
    "aria-label": T,
    onSelect: E,
    children: [(0, s.jsx)(l.MenuGroup, {
      children: (0, i.default)(t, m)
    }), I ? (0, s.jsx)(l.MenuGroup, {
      children: S
    }) : null, C ? h : (0, s.jsx)(l.MenuGroup, {
      children: p
    })]
  })
}