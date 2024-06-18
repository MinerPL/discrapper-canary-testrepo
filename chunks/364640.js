"use strict";
n(47120);
var i, r, s = n(626135),
  o = n(591759),
  a = n(777754),
  l = n(754688),
  u = n(981631);
(r = i || (i = {})).MESSAGE = "Discord Message Link", r.CHANNEL = "Discord Channel Link", r.SERVER_INVITE = "Discord Server Invite", r.GIFT = "Discord Gift Link", r.UNKNOWN = "Unknown";
let _ = [e => a.Z.isInvite(e) ? "Discord Server Invite" : null, e => {
  let t = o.Z.safeParseWithQuery(e);
  if (null == t) return null;
  let n = (0, l.Qj)(t.path);
  return null == n ? null : d({
    guildId: n.guildId,
    channelId: n.channelId,
    messageId: n.messageId
  })
}];

function d(e) {
  return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
}
t.Z = {
  trackDiscordLinkClicked: function(e) {
    s.default.track(u.rMx.LINK_CLICKED, {
      is_discord_link: !0,
      discord_link_type: d(e)
    })
  },
  trackLinkClicked: function(e, t) {
    var n, i;
    if (null == e && null == t) return;
    let r = o.Z.isDiscordUrl(e, !0) || null != t;
    s.default.track(u.rMx.LINK_CLICKED, {
      is_discord_link: r,
      discord_link_type: r ? (n = e, null == (i = t) && null == n ? "Unknown" : null == i ? function(e) {
        for (let t of _) {
          let n = t(e);
          if (null != n) return n
        }
        return "Unknown"
      }(n) : d(i)) : null
    })
  },
  trackAnnouncementMessageLinkClicked: function(e) {
    let {
      messageId: t,
      channelId: n,
      guildId: i,
      sourceChannelId: r,
      sourceGuildId: o
    } = e;
    s.default.track(u.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
      message_id: t,
      channel_id: n,
      guild_id: i,
      source_channel_id: r,
      source_guild_id: o
    })
  }
}