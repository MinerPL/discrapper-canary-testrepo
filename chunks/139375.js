"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973");
var l = n("233069"),
  i = n("27618"),
  r = n("697218"),
  s = n("679653"),
  o = n("49111"),
  u = n("782340");

function a(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: n
  } = e;
  if (t) return n ? u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function c(e) {
  let t, {
      channel: n,
      unread: c = !1,
      mentionCount: d = 0,
      userCount: f,
      embeddedActivitiesCount: E,
      isSubscriptionGated: _,
      needSubscriptionToAccess: h
    } = e,
    p = (0, s.computeChannelName)(n, r.default, i.default);
  switch (n.type) {
    case o.ChannelTypes.DM:
      t = c ? u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case o.ChannelTypes.GROUP_DM:
      t = c ? u.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case o.ChannelTypes.GUILD_STORE:
      t = u.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case o.ChannelTypes.GUILD_DIRECTORY:
      t = u.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = d > 0 ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case o.ChannelTypes.GUILD_VOICE:
      let S = [u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: n.name
      })];
      if (d > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: d
        })), c && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != f) {
        let e = n.userLimit;
        null != e && e > 0 ? S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: f,
          limit: e
        })) : S.push(u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: f
        }))
      }
      null != E && E > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: E
      }));
      let m = a({
        isSubscriptionGated: _,
        needSubscriptionToAccess: h
      });
      return null != m && S.push(m), S.join(", ");
    case o.ChannelTypes.GUILD_STAGE_VOICE:
      t = u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = l.THREAD_CHANNEL_TYPES.has(n.type) ? d > 0 ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : c ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : d > 0 ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let M = [t.format({
      channelName: p,
      mentionCount: d
    })],
    T = a({
      isSubscriptionGated: _,
      needSubscriptionToAccess: h
    });
  return null != T && M.push(T), M.join(", ")
}