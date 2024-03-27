"use strict";
E.r(t), E.d(t, {
  default: function() {
    return I
  }
}), E("424973");
var _ = E("233069"),
  s = E("27618"),
  T = E("697218"),
  a = E("679653"),
  n = E("49111"),
  A = E("782340");

function u(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: E
  } = e;
  if (t) return E ? A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function I(e) {
  let t, {
      channel: E,
      unread: I = !1,
      mentionCount: i = 0,
      userCount: l,
      embeddedActivitiesCount: L,
      isSubscriptionGated: o,
      needSubscriptionToAccess: r
    } = e,
    d = (0, a.computeChannelName)(E, T.default, s.default);
  switch (E.type) {
    case n.ChannelTypes.DM:
      t = I ? A.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : A.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case n.ChannelTypes.GROUP_DM:
      t = I ? A.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : A.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case n.ChannelTypes.GUILD_STORE:
      t = A.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case n.ChannelTypes.GUILD_DIRECTORY:
      t = A.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case n.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = i > 0 ? A.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : I ? A.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : A.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case n.ChannelTypes.GUILD_VOICE:
      let N = [A.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: E.name
      })];
      if (i > 0 && N.push(A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: i
        })), I && N.push(A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != l) {
        let e = E.userLimit;
        null != e && e > 0 ? N.push(A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: l,
          limit: e
        })) : N.push(A.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: l
        }))
      }
      null != L && L > 0 && N.push(A.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: L
      }));
      let S = u({
        isSubscriptionGated: o,
        needSubscriptionToAccess: r
      });
      return null != S && N.push(S), N.join(", ");
    case n.ChannelTypes.GUILD_STAGE_VOICE:
      t = A.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = _.THREAD_CHANNEL_TYPES.has(E.type) ? i > 0 ? A.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : I ? A.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : A.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : i > 0 ? A.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : I ? A.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : A.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let g = [t.format({
      channelName: d,
      mentionCount: i
    })],
    D = u({
      isSubscriptionGated: o,
      needSubscriptionToAccess: r
    });
  return null != D && g.push(D), g.join(", ")
}