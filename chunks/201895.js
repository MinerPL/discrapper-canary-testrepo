"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("653041");
var E = s("131704"),
  _ = s("699516"),
  a = s("594174"),
  n = s("933557"),
  T = s("981631"),
  i = s("689938");

function u(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: s
  } = e;
  if (t) return s ? i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function A(e) {
  let t, {
      channel: s,
      unread: A = !1,
      mentionCount: l = 0,
      userCount: I,
      embeddedActivitiesCount: r,
      isSubscriptionGated: o,
      needSubscriptionToAccess: L
    } = e,
    d = (0, n.computeChannelName)(s, a.default, _.default);
  switch (s.type) {
    case T.ChannelTypes.DM:
      t = A ? i.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : i.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case T.ChannelTypes.GROUP_DM:
      t = A ? i.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : i.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_STORE:
      t = i.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_DIRECTORY:
      t = i.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = l > 0 ? i.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : A ? i.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : i.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_VOICE:
      let N = [i.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: s.name
      })];
      if (l > 0 && N.push(i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: l
        })), A && N.push(i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != I) {
        let e = s.userLimit;
        null != e && e > 0 ? N.push(i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: I,
          limit: e
        })) : N.push(i.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: I
        }))
      }
      null != r && r > 0 && N.push(i.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: r
      }));
      let S = u({
        isSubscriptionGated: o,
        needSubscriptionToAccess: L
      });
      return null != S && N.push(S), N.join(", ");
    case T.ChannelTypes.GUILD_STAGE_VOICE:
      t = i.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = E.THREAD_CHANNEL_TYPES.has(s.type) ? l > 0 ? i.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : A ? i.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : i.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : l > 0 ? i.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : A ? i.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : i.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let g = [t.format({
      channelName: d,
      mentionCount: l
    })],
    D = u({
      isSubscriptionGated: o,
      needSubscriptionToAccess: L
    });
  return null != D && g.push(D), g.join(", ")
}