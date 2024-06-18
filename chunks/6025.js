"use strict";
var i = n(570140),
  r = n(904245),
  s = n(593472),
  o = n(526120),
  a = n(348245),
  l = n(897473),
  u = n(176505);
t.Z = {
  openPrivateChannelAsSidebar(e) {
    let {
      channelId: t,
      messageId: n,
      baseChannelId: s,
      hasSingleMessageRequest: o
    } = e;
    i.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_MESSAGE_REQUEST,
      baseChannelId: s,
      channelId: t,
      details: {
        type: l.Ff.MESSAGE_REQUEST,
        hasSingleMessageRequest: o
      }
    }), null != n ? r.Z.jumpToMessage({
      channelId: t,
      messageId: n,
      flash: !0
    }) : a.Z.fetchMessages({
      channelId: t
    })
  },
  openChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n,
      baseChannelId: o,
      flash: u = !0,
      details: _
    } = e;
    i.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: o,
      channelId: n,
      details: _
    });
    let d = null == _ ? void 0 : _.initialMessageId;
    null != d ? r.Z.jumpToMessage({
      channelId: n,
      messageId: d,
      flash: u,
      jumpType: s.SR.INSTANT
    }) : a.Z.fetchMessages({
      guildId: t,
      channelId: n
    })
  },
  openResourceChannelAsSidebar(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != t && ((0, o.C3)(t, n, !1), i.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_CHANNEL,
      guildId: t,
      baseChannelId: u.oC.GUILD_HOME,
      channelId: n
    }))
  },
  openThreadAsSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      channelId: o,
      flash: u = !0,
      details: _
    } = e;
    i.Z.dispatch({
      type: "SIDEBAR_VIEW_CHANNEL",
      sidebarType: l.tI.VIEW_THREAD,
      baseChannelId: n,
      channelId: o,
      details: _
    }), (null == _ ? void 0 : _.initialMessageId) != null ? r.Z.jumpToMessage({
      channelId: o,
      messageId: _.initialMessageId,
      flash: u,
      jumpType: s.SR.INSTANT
    }) : a.Z.fetchMessages({
      guildId: t,
      channelId: o
    })
  },
  closeChannelSidebar(e) {
    i.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e
    })
  },
  openGuildSidebar(e) {
    let {
      guildId: t,
      baseChannelId: n,
      sidebarType: r,
      details: s
    } = e;
    return i.Z.dispatch({
      type: "SIDEBAR_VIEW_GUILD",
      sidebarType: r,
      baseChannelId: n,
      guildId: t,
      details: s
    })
  },
  closeGuildSidebar(e) {
    i.Z.dispatch({
      type: "SIDEBAR_CLOSE_GUILD",
      guildId: e
    })
  }
}