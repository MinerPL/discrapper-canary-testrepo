n(47120), n(789020);
var r = n(544891),
  i = n(780384),
  a = n(570140),
  s = n(149071),
  o = n(9156),
  l = n(630388),
  u = n(621600),
  c = n(709054),
  d = n(981631),
  _ = n(526761),
  E = n(689938);
t.Z = {
  open(e) {
a.Z.dispatch({
  type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
  guildId: e
});
  },
  close() {
a.Z.dispatch({
  type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE'
});
  },
  updateGuildNotificationSettings(e, t, n, r) {
let i = (0, u.GA)(e);
s.Z.saveUserGuildSettings(e, t), a.Z.dispatch({
  type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
  guildId: e,
  settings: t
}), (0, u.Wq)(e, t, i, n, r);
  },
  updateGuildAndChannelNotificationSettings(e, t, n, r) {
let i = c.default.keys(t.channel_overrides),
  o = (0, u.GA)(e),
  l = (0, u.wK)(e, i);
s.Z.saveUserGuildSettings(e, t), a.Z.dispatch({
  type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
  guildId: e,
  settings: t
}), (0, u.Wq)(e, t, o, n, r), c.default.keys(t.channel_overrides).forEach(i => {
  let a = l.get(i);
  (0, u.jz)(e, i, t.channel_overrides[i], a, n, r);
});
  },
  updateGuildNotificationSettingsBulk(e, t, n) {
let r = c.default.keys(e),
  i = (0, u.rU)(r);
s.Z.saveUserGuildSettingsBulk(e), c.default.entries(e).forEach(e => {
  let [r, s] = e, o = i.get(r);
  a.Z.dispatch({
    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
    guildId: r,
    settings: s
  }), (0, u.Wq)(r, s, o, t, n);
});
  },
  updateChannelOverrideSettings(e, t, n, r, o) {
let l = (0, u.I)(e, t);
s.Z.saveUserGuildSettings(e, {
  channel_overrides: {
    [t]: n
  }
}), a.Z.dispatch({
  type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
  guildId: e,
  channelId: t,
  settings: n
}), i.uv.announce(E.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.jz)(e, t, n, l, r, o);
  },
  updateChannelOverrideSettingsBulk(e, t, n, r) {
let i = c.default.keys(t),
  o = (0, u.wK)(e, i);
s.Z.saveUserGuildSettings(e, {
  channel_overrides: t
}), a.Z.dispatch({
  type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
  guildId: e,
  overrides: t
}), c.default.keys(t).forEach(i => (0, u.jz)(e, i, t[i], o.get(i), n, r));
  },
  setForumThreadsCreated(e, t) {
let n = t ? _.ic.NEW_FORUM_THREADS_ON : _.ic.NEW_FORUM_THREADS_OFF,
  r = t ? _.ic.NEW_FORUM_THREADS_OFF : _.ic.NEW_FORUM_THREADS_ON,
  i = o.ZP.getChannelFlags(e);
this.updateChannelOverrideSettings(e.guild_id, e.id, {
  flags: i & ~r | n
}, u.UE.forumThreadsCreated(t));
  },
  async setAccountFlag(e, t) {
let n = o.ZP.accountNotificationSettings.flags,
  i = (0, l.mB)(n, e, t);
await r.tn.patch({
  url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
  body: {
    flags: i
  }
}), await a.Z.dispatch({
  type: 'NOTIFICATION_SETTINGS_UPDATE',
  settings: {
    flags: i
  }
});
  }
};