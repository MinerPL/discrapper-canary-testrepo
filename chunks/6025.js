"use strict";
n.r(t);
var l = n("570140"),
  i = n("904245"),
  a = n("593472"),
  d = n("526120"),
  u = n("348245"),
  s = n("897473"),
  r = n("176505");
t.default = {
  openPrivateChannelAsSidebar(e) {
    let {
      channelId: t,
      messageId: n,
      baseChannelId: a,
      hasSingleMessageRequest: d
    } = e;
    l.default.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
      baseChannelId: a,
      channelId: t,
      details: {
        type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
        hasSingleMessageRequest: d
      }
    }), null != n ? i.default.jumpToMessage({
      channelId: t,
      messageId: n,
      flash: !0
    }) : u.default.fetchMessages({
      channelId: t
    })
  },
  openChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n,
      baseChannelId: d,
      flash: r = !0,
      details: o
    } = e;
    l.default.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: s.SidebarType.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: d,
      channelId: n,
      details: o
    });
    let c = null == o ? void 0 : o.initialMessageId;
    null != c ? i.default.jumpToMessage({
      channelId: n,
      messageId: c,
      flash: r,
      jumpType: a.JumpTypes.INSTANT
    }) : u.default.fetchMessages({
      guildId: t,
      channelId: n
    })
  },
  openResourceChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != t && ((0, d.selectHomeResourceChannel)(t, n, !1), l.default.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: s.SidebarType.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: r.StaticChannelRoute.GUILD_HOME,
      channelId: n
    }))
  },
  openThreadAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: d,
      flash: r = !0,
      details: o
    } = e;
    l.default.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: s.SidebarType.VIEW_THREAD,
      baseChannelId: n,
      channelId: d,
      details: o
    }), (null == o ? void 0 : o.initialMessageId) != null ? i.default.jumpToMessage({
      channelId: d,
      messageId: o.initialMessageId,
      flash: r,
      jumpType: a.JumpTypes.INSTANT
    }) : u.default.fetchMessages({
      guildId: t,
      channelId: d
    })
  },
  closeChannelSidebar(e) {
    l.default.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e
    })
  },
  openGuildSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      sidebarType: i,
      details: a
    } = e;
    return l.default.dispatch({
      type: "SIDEBAR_VIEW_GUILD",
      sidebarType: i,
      baseChannelId: n,
      guildId: t,
      details: a
    })
  },
  closeGuildSidebar(e) {
    l.default.dispatch({
      type: "SIDEBAR_CLOSE_GUILD",
      guildId: e
    })
  }
}