"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("289867"),
  i = n("217513"),
  r = n("893980"),
  u = n("58351"),
  o = n("982108"),
  d = n("849483"),
  c = n("664336"),
  f = n("49111"),
  h = n("782340");

function m(e) {
  let {
    channel: t,
    showCall: n
  } = e, m = (0, l.useStateFromStores)([o.default], () => o.default.getSection(t.id, null == t ? void 0 : t.isDM())), p = (0, i.default)(t.getRecipientId()), E = (0, u.default)(), g = m === f.ChannelSections.PROFILE && !E;
  return (0, a.jsx)(c.Icon, {
    disabled: E || n,
    tooltip: E || n ? h.default.Messages.SHOW_USER_PROFILE_UNAVAILABLE : g ? h.default.Messages.HIDE_USER_PROFILE : h.default.Messages.SHOW_USER_PROFILE,
    icon: d.default,
    onClick: () => {
      (0, r.trackProfilePanelToggled)(p, !g), s.default.toggleProfilePanelSection()
    },
    selected: g && !E && !n
  })
}