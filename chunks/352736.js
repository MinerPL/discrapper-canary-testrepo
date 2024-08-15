var s, t, n = _(25209),
  a = _(97797),
  M = _(35125),
  S = _(786761),
  r = _(739566),
  N = _(499401),
  u = _(693912),
  A = _(23750),
  O = _(314897),
  i = _(592125),
  l = _(430824),
  I = _(594174),
  T = _(5192),
  L = _(709054),
  G = _(981631),
  R = _(689938);
let C = {
  '234395307759108106': 'https://groovy.bot/commands',
  '365975655608745985': 'https://www.pokecord.com/getting-started',
  '512412940897484800': 'http://jameslantz.net/smilebot'
};
(s = t || (t = {})).NORMAL = 'NORMAL', s.CLAN = 'CLAN';
let o = () => [
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK
  ],
  c = () => [
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012,
R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013
  ],
  g = () => [
R.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK,
R.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK
  ],
  d = () => [
R.Z.Messages.CLAN_WELCOME_MESSAGE_0,
R.Z.Messages.CLAN_WELCOME_MESSAGE_1,
R.Z.Messages.CLAN_WELCOME_MESSAGE_2,
R.Z.Messages.CLAN_WELCOME_MESSAGE_3,
R.Z.Messages.CLAN_WELCOME_MESSAGE_4,
R.Z.Messages.CLAN_WELCOME_MESSAGE_5,
R.Z.Messages.CLAN_WELCOME_MESSAGE_6,
R.Z.Messages.CLAN_WELCOME_MESSAGE_7,
R.Z.Messages.CLAN_WELCOME_MESSAGE_8,
R.Z.Messages.CLAN_WELCOME_MESSAGE_9
  ],
  Z = e => {
switch (e) {
  case 'NORMAL':
  default:
    return o();
  case 'CLAN':
    return g();
}
  },
  U = e => {
switch (e) {
  case 'NORMAL':
  default:
    return c();
  case 'CLAN':
    return d();
}
  };

function D(e, E) {
  let _ = U(E),
s = L.default.extractTimestamp(e) % _.length;
  return _[s];
}

function m(e) {
  return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
username: e,
usernameOnClick: G.dG4
  }));
}

function f(e, E) {
  let _ = i.Z.getChannel(E);
  return null == _ || null == l.Z.getGuild(_.getGuildId()) ? m(e) : (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
username: e,
usernameOnClick: G.dG4
  }));
}

function p(e) {
  var E;
  return (null === (E = l.Z.getGuild(e)) || void 0 === E ? void 0 : E.hasFeature(G.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
E.Z = {
  stringify: function(e, E) {
var _, s, t, L;
let C = null === (_ = e.mentions) || void 0 === _ ? void 0 : _[0],
  o = null != C && 'string' != typeof C ? I.default.getUser(C.id) : void 0,
  c = e.channel_id,
  g = T.ZP.getName(null, c, e.author);
switch (e.type) {
  case G.uaV.RECIPIENT_ADD:
    if (null == o)
      return;
    return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
      username: g,
      usernameOnClick: G.dG4,
      otherUsername: T.ZP.getName(null, c, o),
      otherUsernameOnClick: G.dG4
    }));
  case G.uaV.RECIPIENT_REMOVE:
    if (null == o)
      return;
    let d = e.author;
    if (null == d || d.id === o.id)
      return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
        username: g,
        usernameOnClick: G.dG4
      }));
    return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
      username: g,
      usernameOnClick: G.dG4,
      otherUsername: T.ZP.getName(null, c, o),
      otherUsernameOnClick: G.dG4
    }));
  case G.uaV.CALL:
    let {
      call: Z
    } = e;
    if (null != Z && -1 === Z.participants.indexOf(O.default.getId()))
      return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
        username: g,
        usernameOnClick: G.dG4
      }));
    return;
  case G.uaV.CHANNEL_NAME_CHANGE:
    return (0, n.Rp)((E.isForumPost() ? R.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : R.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
      username: g,
      usernameOnClick: G.dG4,
      channelName: e.content
    }));
  case G.uaV.CHANNEL_ICON_CHANGE:
    return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
      username: g,
      usernameOnClick: G.dG4
    }));
  case G.uaV.CHANNEL_PINNED_MESSAGE:
    return (0, n.Rp)(R.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
      username: g,
      usernameOnClick: G.dG4
    }));
  case G.uaV.USER_JOIN:
    let U = p(E.guild_id);
    return (0, n.Rp)(D(e.id, U).astFormat({
      username: g,
      usernameOnClick: G.dG4
    }));
  case G.uaV.GUILD_BOOST:
    return m(g);
  case G.uaV.GUILD_BOOST_TIER_1:
  case G.uaV.GUILD_BOOST_TIER_2:
  case G.uaV.GUILD_BOOST_TIER_3:
    return f(g, c);
  case G.uaV.GUILD_INVITE_REMINDER:
    return R.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
  case G.uaV.THREAD_STARTER_MESSAGE:
    return R.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
      username: g,
      threadName: E.name
    });
  case G.uaV.ROLE_SUBSCRIPTION_PURCHASE:
    if (e instanceof A.ZP)
      return null;
    return (0, n.Rp)((0, M.vp)({
      username: g,
      guildId: E.guild_id,
      roleSubscriptionData: e.role_subscription_data
    }));
  case G.uaV.PURCHASE_NOTIFICATION:
    if (e instanceof A.ZP || (null === (t = e.purchase_notification) || void 0 === t ? void 0 : null === (s = t.guild_product_purchase) || void 0 === s ? void 0 : s.product_name) == null)
      return null;
    return (0, n.Rp)((0, a.i)({
      username: g,
      productName: e.purchase_notification.guild_product_purchase.product_name
    }));
  case G.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
    if (e instanceof A.ZP)
      return null;
    let H = (0, r.ZH)((0, S.e5)(e));
    return (0, n.Rp)((0, N.Y)({
      application: e.application,
      username: H.nick
    }));
  case G.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
    if (e instanceof A.ZP)
      return null;
    return (0, n.Rp)((0, u.B2)({
      application: e.application,
      username: (0, r.ZH)((0, S.e5)(e)).nick
    }));
  case G.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
    if (e instanceof A.ZP)
      return null;
    return (0, n.Rp)((0, u.hj)({
      application: e.application,
      username: (0, r.ZH)((0, S.e5)(e)).nick
    }));
  case G.uaV.AUTO_MODERATION_ACTION:
    if (null === (L = e.embeds) || void 0 === L ? void 0 : L.some(e => {
        let {
          type: E
        } = e;
        return E === G.hBH.AUTO_MODERATION_NOTIFICATION;
      }))
      return function(e) {
        let E = i.Z.getChannel(e);
        if (null == E)
          return null;
        let _ = l.Z.getGuild(E.getGuildId());
        return null == _ ? null : (0, n.Rp)(R.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
          guildName: _.name
        }));
      }(c);
    return e.content;
  case G.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
    return function(e, E, _) {
      let s = i.Z.getChannel(E);
      if (null == s)
        return null;
      let t = l.Z.getGuild(s.getGuildId());
      return null == t ? null : (0, n.Rp)(R.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
        username: e,
        guildName: t.name,
        time: '' !== _ ? new Date(_).toLocaleString(R.Z.getLocale(), {
          hour: 'numeric',
          minute: '2-digit'
        }) : ''
      }));
    }(g, c, e.content);
  case G.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
    return function(e, E) {
      let _ = i.Z.getChannel(E);
      if (null == _)
        return null;
      let s = l.Z.getGuild(_.getGuildId());
      return null == s ? null : (0, n.Rp)(R.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
        username: e,
        guildName: s.name
      }));
    }(g, c);
  default:
    return e.content;
}
  },
  getSystemMessageUserJoin: function(e, E) {
let _ = Z(E),
  s = L.default.extractTimestamp(e) % _.length;
return _[s];
  },
  getSystemMessageUserJoinMobile: D,
  getSystemMessageBotJoin: function(e) {
return null == C[e] ? null : R.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
  learnOnClick: {
    onClick: () => window.open(C[e])
  }
});
  },
  getWelcomeMessageKind: p
};