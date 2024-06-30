var i = n(544891), a = n(570140), s = n(981631);
t.Z = {
    createChannelFollower: (e, t) => i.tn.post({
        url: s.ANM.CHANNEL_FOLLOWERS(t),
        body: { webhook_channel_id: e },
        oldFormErrors: !0
    }),
    async fetchChannelFollowerStats(e) {
        a.Z.dispatch({ type: 'CHANNEL_FOLLOWER_STATS_FETCH_START' });
        try {
            let t = await i.tn.get({
                url: s.ANM.CHANNEL_FOLLOWER_STATS(e),
                body: { channel_id: e },
                oldFormErrors: !0
            });
            a.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS',
                stats: t.body,
                channelId: e
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE',
                channelId: e
            });
        }
    },
    dismissPublishBump(e) {
        a.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED',
            messageId: e
        });
    },
    permanentlyHidePublishBump(e) {
        a.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY',
            channelId: e
        });
    }
};
