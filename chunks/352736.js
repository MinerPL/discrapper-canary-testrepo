"use strict";
n.r(t);
var s = n("25209"),
  a = n("97797"),
  l = n("35125"),
  i = n("786761"),
  r = n("739566"),
  o = n("499401"),
  u = n("693912"),
  d = n("23750"),
  c = n("314897"),
  f = n("592125"),
  E = n("430824"),
  _ = n("594174"),
  T = n("5192"),
  m = n("709054"),
  I = n("981631"),
  p = n("689938");
let h = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  N = () => [p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  S = () => [p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function C(e) {
  let t = S(),
    n = m.default.extractTimestamp(e) % t.length;
  return t[n]
}

function A(e) {
  return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}

function g(e, t) {
  let n = f.default.getChannel(t);
  return null == n || null == E.default.getGuild(n.getGuildId()) ? A(e) : (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var n, m, h, N;
    let S = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
      M = null != S && "string" != typeof S ? _.default.getUser(S.id) : void 0,
      R = e.channel_id,
      O = T.default.getName(null, R, e.author);
    switch (e.type) {
      case I.MessageTypes.RECIPIENT_ADD:
        if (null == M) return;
        return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: O,
          usernameOnClick: I.NOOP,
          otherUsername: T.default.getName(null, R, M),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.RECIPIENT_REMOVE:
        if (null == M) return;
        let v = e.author;
        if (null == v || v.id === M.id) return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: O,
          usernameOnClick: I.NOOP
        }));
        return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: O,
          usernameOnClick: I.NOOP,
          otherUsername: T.default.getName(null, R, M),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CALL:
        let {
          call: L
        } = e;
        if (null != L && -1 === L.participants.indexOf(c.default.getId())) return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: O,
          usernameOnClick: I.NOOP
        }));
        return;
      case I.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, s.astToString)((t.isForumPost() ? p.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : p.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: O,
          usernameOnClick: I.NOOP,
          channelName: e.content
        }));
      case I.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: O,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, s.astToString)(p.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: O,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.USER_JOIN:
        return (0, s.astToString)(C(e.id).astFormat({
          username: O,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.GUILD_BOOST:
        return A(O);
      case I.MessageTypes.GUILD_BOOST_TIER_1:
      case I.MessageTypes.GUILD_BOOST_TIER_2:
      case I.MessageTypes.GUILD_BOOST_TIER_3:
        return g(O, R);
      case I.MessageTypes.GUILD_INVITE_REMINDER:
        return p.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case I.MessageTypes.THREAD_STARTER_MESSAGE:
        return p.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: O,
          threadName: t.name
        });
      case I.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, l.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: O,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case I.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof d.default || (null === (h = e.purchase_notification) || void 0 === h ? void 0 : null === (m = h.guild_product_purchase) || void 0 === m ? void 0 : m.product_name) == null) return null;
        return (0, s.astToString)((0, a.getGuildProductPurchaseSystemMessageContentMobile)({
          username: O,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case I.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof d.default) return null;
        let x = (0, r.getMessageAuthor)((0, i.createMessageRecord)(e));
        return (0, s.astToString)((0, o.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: x.nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, r.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, r.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (N = e.embeds) || void 0 === N ? void 0 : N.some(e => {
            let {
              type: t
            } = e;
            return t === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = f.default.getChannel(e);
          if (null == t) return null;
          let n = E.default.getGuild(t.getGuildId());
          return null == n ? null : (0, s.astToString)(p.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: n.name
          }))
        }(R);
        return e.content;
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, n) {
          let a = f.default.getChannel(t);
          if (null == a) return null;
          let l = E.default.getGuild(a.getGuildId());
          return null == l ? null : (0, s.astToString)(p.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: l.name,
            time: "" !== n ? new Date(n).toLocaleString(p.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(O, R, e.content);
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let n = f.default.getChannel(t);
          if (null == n) return null;
          let a = E.default.getGuild(n.getGuildId());
          return null == a ? null : (0, s.astToString)(p.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: a.name
          }))
        }(O, R);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = N(),
      n = m.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: C,
  getSystemMessageBotJoin: function(e) {
    return null == h[e] ? null : p.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(h[e])
      }
    })
  }
}