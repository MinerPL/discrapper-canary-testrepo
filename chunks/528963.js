var i = n(544891),
  s = n(570140),
  a = n(981631);
t.Z = {
  createChannelFollower: (e, t) => i.tn.post({
url: a.ANM.CHANNEL_FOLLOWERS(t),
body: {
  webhook_channel_id: e
},
oldFormErrors: !0
  }),
  async fetchChannelFollowerStats(e) {
s.Z.dispatch({
  type: 'CHANNEL_FOLLOWER_STATS_FETCH_START'
});
try {
  let t = await i.tn.get({
    url: a.ANM.CHANNEL_FOLLOWER_STATS(e),
    body: {
      channel_id: e
    },
    oldFormErrors: !0
  });
  s.Z.dispatch({
    type: 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS',
    stats: t.body,
    channelId: e
  });
} catch (t) {
  s.Z.dispatch({
    type: 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE',
    channelId: e
  });
}
  },
  dismissPublishBump(e) {
s.Z.dispatch({
  type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED',
  messageId: e
});
  },
  permanentlyHidePublishBump(e) {
s.Z.dispatch({
  type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY',
  channelId: e
});
  }
};