"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("49111"),
  i = {
    createChannelFollower: (e, t) => s.HTTP.post({
      url: l.Endpoints.CHANNEL_FOLLOWERS(t),
      body: {
        webhook_channel_id: e
      },
      oldFormErrors: !0
    }),
    async fetchChannelFollowerStats(e) {
      a.default.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
      });
      try {
        let t = await s.HTTP.get({
          url: l.Endpoints.CHANNEL_FOLLOWER_STATS(e),
          body: {
            channel_id: e
          },
          oldFormErrors: !0
        });
        a.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
          stats: t.body,
          channelId: e
        })
      } catch (t) {
        a.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
          channelId: e
        })
      }
    },
    dismissPublishBump(e) {
      a.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
        messageId: e
      })
    },
    permanentlyHidePublishBump(e) {
      a.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
        channelId: e
      })
    }
  }