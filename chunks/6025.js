var r = n(570140),
  i = n(904245),
  a = n(593472),
  o = n(526120),
  s = n(348245),
  l = n(897473),
  u = n(176505);
t.Z = {
  openPrivateChannelAsSidebar(e) {
let {
  channelId: t,
  messageId: n,
  baseChannelId: a,
  hasSingleMessageRequest: o
} = e;
r.Z.dispatch({
  type: 'SIDEBAR_VIEW_CHANNEL',
  sidebarType: l.tI.VIEW_MESSAGE_REQUEST,
  baseChannelId: a,
  channelId: t,
  details: {
    type: l.Ff.MESSAGE_REQUEST,
    hasSingleMessageRequest: o
  }
}), null != n ? i.Z.jumpToMessage({
  channelId: t,
  messageId: n,
  flash: !0
}) : s.Z.fetchMessages({
  channelId: t
});
  },
  openChannelAsSidebar(e) {
let {
  guildId: t,
  channelId: n,
  baseChannelId: o,
  flash: u = !0,
  details: c
} = e;
r.Z.dispatch({
  type: 'SIDEBAR_VIEW_CHANNEL',
  sidebarType: l.tI.VIEW_CHANNEL,
  guildId: t,
  baseChannelId: o,
  channelId: n,
  details: c
});
let d = null == c ? void 0 : c.initialMessageId;
null != d ? i.Z.jumpToMessage({
  channelId: n,
  messageId: d,
  flash: u,
  jumpType: a.SR.INSTANT
}) : s.Z.fetchMessages({
  guildId: t,
  channelId: n
});
  },
  openResourceChannelAsSidebar(e) {
let {
  guildId: t,
  channelId: n
} = e;
null != t && ((0, o.C3)(t, n, !1), r.Z.dispatch({
  type: 'SIDEBAR_VIEW_CHANNEL',
  sidebarType: l.tI.VIEW_CHANNEL,
  guildId: t,
  baseChannelId: u.oC.GUILD_HOME,
  channelId: n
}));
  },
  openThreadAsSidebar(e) {
let {
  guildId: t,
  baseChannelId: n,
  channelId: o,
  flash: u = !0,
  details: c
} = e;
r.Z.dispatch({
  type: 'SIDEBAR_VIEW_CHANNEL',
  sidebarType: l.tI.VIEW_THREAD,
  baseChannelId: n,
  channelId: o,
  details: c
}), (null == c ? void 0 : c.initialMessageId) != null ? i.Z.jumpToMessage({
  channelId: o,
  messageId: c.initialMessageId,
  flash: u,
  jumpType: a.SR.INSTANT
}) : s.Z.fetchMessages({
  guildId: t,
  channelId: o
});
  },
  closeChannelSidebar(e) {
r.Z.dispatch({
  type: 'SIDEBAR_CLOSE',
  baseChannelId: e
});
  },
  openGuildSidebar(e) {
let {
  guildId: t,
  baseChannelId: n,
  sidebarType: i,
  details: a
} = e;
return r.Z.dispatch({
  type: 'SIDEBAR_VIEW_GUILD',
  sidebarType: i,
  baseChannelId: n,
  guildId: t,
  details: a
});
  },
  closeGuildSidebar(e) {
r.Z.dispatch({
  type: 'SIDEBAR_CLOSE_GUILD',
  guildId: e
});
  }
};