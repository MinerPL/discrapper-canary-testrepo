"use strict";
n(47120), n(789020);
var i = n(544891),
  r = n(780384),
  s = n(570140),
  o = n(149071),
  a = n(9156),
  l = n(630388),
  u = n(621600),
  _ = n(709054),
  d = n(981631),
  c = n(526761),
  E = n(689938);
t.Z = {
  open(e) {
    s.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
      guildId: e
    })
  },
  close() {
    s.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
    })
  },
  updateGuildNotificationSettings(e, t, n, i) {
    let r = (0, u.GA)(e);
    o.Z.saveUserGuildSettings(e, t), s.Z.dispatch({
      type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
      guildId: e,
      settings: t
    }), (0, u.Wq)(e, t, r, n, i)
  },
  updateGuildAndChannelNotificationSettings(e, t, n, i) {
    let r = _.default.keys(t.channel_overrides),
      a = (0, u.GA)(e),
      l = (0, u.wK)(e, r);
    o.Z.saveUserGuildSettings(e, t), s.Z.dispatch({
      type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
      guildId: e,
      settings: t
    }), (0, u.Wq)(e, t, a, n, i), _.default.keys(t.channel_overrides).forEach(r => {
      let s = l.get(r);
      (0, u.jz)(e, r, t.channel_overrides[r], s, n, i)
    })
  },
  updateGuildNotificationSettingsBulk(e, t, n) {
    let i = _.default.keys(e),
      r = (0, u.rU)(i);
    o.Z.saveUserGuildSettingsBulk(e), _.default.entries(e).forEach(e => {
      let [i, o] = e, a = r.get(i);
      s.Z.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: i,
        settings: o
      }), (0, u.Wq)(i, o, a, t, n)
    })
  },
  updateChannelOverrideSettings(e, t, n, i, a) {
    let l = (0, u.I)(e, t);
    o.Z.saveUserGuildSettings(e, {
      channel_overrides: {
        [t]: n
      }
    }), s.Z.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
      guildId: e,
      channelId: t,
      settings: n
    }), r.uv.announce(E.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.jz)(e, t, n, l, i, a)
  },
  updateChannelOverrideSettingsBulk(e, t, n, i) {
    let r = _.default.keys(t),
      a = (0, u.wK)(e, r);
    o.Z.saveUserGuildSettings(e, {
      channel_overrides: t
    }), s.Z.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
      guildId: e,
      overrides: t
    }), _.default.keys(t).forEach(r => (0, u.jz)(e, r, t[r], a.get(r), n, i))
  },
  setForumThreadsCreated(e, t) {
    let n = t ? c.ic.NEW_FORUM_THREADS_ON : c.ic.NEW_FORUM_THREADS_OFF,
      i = t ? c.ic.NEW_FORUM_THREADS_OFF : c.ic.NEW_FORUM_THREADS_ON,
      r = a.ZP.getChannelFlags(e);
    this.updateChannelOverrideSettings(e.guild_id, e.id, {
      flags: r & ~i | n
    }, u.UE.forumThreadsCreated(t))
  },
  async setAccountFlag(e, t) {
    let n = a.ZP.accountNotificationSettings.flags,
      r = (0, l.mB)(n, e, t);
    await i.tn.patch({
      url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
      body: {
        flags: r
      }
    }), await s.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_UPDATE",
      settings: {
        flags: r
      }
    })
  }
}