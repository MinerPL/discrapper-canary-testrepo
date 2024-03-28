"use strict";
n.r(t);
var a, l, s, i, r, o, u = n("442837"),
  d = n("570140");
(a = r || (r = {})).FAILED = "failed", a.SUCCEEDED = "succeeded";
let c = {};
class f extends(o = u.default.Store) {
  getFollowerStatsForChannel(e) {
    return c[e]
  }
}
i = "ChannelFollowerStatsStore", (s = "displayName") in(l = f) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new f(d.default, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: n
    } = e;
    n = null != n ? n : {}, c[t] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: n.channels_following,
      guildMembers: n.guild_members,
      guildsFollowing: n.guilds_following,
      usersSeenEver: n.users_seen_ever,
      subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    c[t] = {
      loadingStatus: "failed",
      lastFetched: Date.now(),
      channelsFollowing: 0,
      guildMembers: 0,
      guildsFollowing: 0,
      usersSeenEver: 0,
      subscribersGainedSinceLastPost: 0,
      subscribersLostSinceLastPost: 0
    }
  }
})