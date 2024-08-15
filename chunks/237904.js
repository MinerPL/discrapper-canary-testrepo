var i,
	a,
	s,
	l,
	r,
	o,
	c = n(442837),
	u = n(570140);
((i = r || (r = {})).FAILED = 'failed'), (i.SUCCEEDED = 'succeeded');
let d = {};
class h extends (o = c.ZP.Store) {
	getFollowerStatsForChannel(e) {
		return d[e];
	}
}
(l = 'ChannelFollowerStatsStore'),
	(s = 'displayName') in (a = h)
		? Object.defineProperty(a, s, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = l),
	(t.Z = new h(u.Z, {
		CONNECTION_OPEN: function () {
			d = {};
		},
		CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
			let { channelId: t, stats: n } = e;
			(n = null != n ? n : {}),
				(d[t] = {
					loadingStatus: 'succeeded',
					lastFetched: Date.now(),
					channelsFollowing: n.channels_following,
					guildMembers: n.guild_members,
					guildsFollowing: n.guilds_following,
					usersSeenEver: n.users_seen_ever,
					subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
					subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
				});
		},
		CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
			let { channelId: t } = e;
			d[t] = {
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
	}));
