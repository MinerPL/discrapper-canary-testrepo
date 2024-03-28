"use strict";
a.r(t), a.d(t, {
  MIN_GUILD_HOME_PAGE_WIDTH: function() {
    return o
  },
  default: function() {
    return c
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  s = a("325708"),
  i = a("213557"),
  d = a("433355"),
  r = a("981631"),
  u = a("176505");
let o = 656;

function c(e) {
  let {
    pageWidth: t,
    onSidebarResize: a
  } = e, c = (0, n.useStateFromStores)([d.default], () => d.default.getSidebarState(u.StaticChannelRoute.GUILD_HOME));
  if (null == c || null == c.channelId) return null;
  let f = t - r.CHANNEL_SIDEBAR_WIDTH - o;
  return (0, l.jsx)(s.default, {
    sidebarType: s.ChatSidebarType.HomeSidebar,
    maxWidth: f,
    onWidthChange: a,
    children: (0, l.jsx)(i.default, {
      channelId: c.channelId,
      baseChannelId: u.StaticChannelRoute.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: !0
    })
  })
}