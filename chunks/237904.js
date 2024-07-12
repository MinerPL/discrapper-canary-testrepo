var i, a, l, s, r, o, c = n(442837),
  d = n(570140);
(i = r || (r = {})).FAILED = 'failed', i.SUCCEEDED = 'succeeded';
let u = {};
class h extends(o = c.ZP.Store) {
  getFollowerStatsForChannel(e) {
return u[e];
  }
}
s = 'ChannelFollowerStatsStore', (l = 'displayName') in(a = h) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.Z = new h(d.Z, {
  CONNECTION_OPEN: function() {
u = {};
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
let {
  channelId: t,
  stats: n
} = e;
n = null != n ? n : {}, u[t] = {
  loadingStatus: 'succeeded',
  lastFetched: Date.now(),
  channelsFollowing: n.channels_following,
  guildMembers: n.guild_members,
  guildsFollowing: n.guilds_following,
  usersSeenEver: n.users_seen_ever,
  subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
  subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
};
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
let {
  channelId: t
} = e;
u[t] = {
  loadingStatus: 'failed',
  lastFetched: Date.now(),
  channelsFollowing: 0,
  guildMembers: 0,
  guildsFollowing: 0,
  usersSeenEver: 0,
  subscribersGainedSinceLastPost: 0,
  subscribersLostSinceLastPost: 0
};
  }
});