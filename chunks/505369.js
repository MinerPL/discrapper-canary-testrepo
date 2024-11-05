var i = n(544891),
    r = n(570140),
    a = n(960048);
n(109911);
var l = n(715035),
    s = n(207205),
    o = n(981631);
t.Z = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await i.tn.post({
                    url: o.ANM.GRAVITY_TOPIC_GUILDS,
                    body: {
                        category_ids: e,
                        offset: t
                    }
                })
            ).body;
            return (
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_POPULAR_GUILDS',
                    categoryIds: e,
                    guilds: n,
                    offset: t
                }),
                !0
            );
        } catch (e) {
            a.Z.captureException(e);
        }
        return !1;
    },
    async fetchDehydrated() {
        let { isReloading: e, forceRefresh: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!(0, s.rK)('fetchDehydrated')) return;
        let n = l.Z.negativeContentOnly();
        try {
            let a = Date.now(),
                l = await i.tn.get({
                    url: n ? o.ANM.GRAVITY_ITEMS_NEGATIVE : o.ANM.GRAVITY_ITEMS_DEHYDRATED,
                    query: { refresh: t }
                });
            await r.Z.dispatch({
                type: 'LOAD_GRAVITY_DEHYDRATED',
                items: l.body.items,
                loadId: l.body.load_id,
                startTime: a,
                isReloading: e
            });
        } catch (e) {
            a.Z.captureException(e);
        }
    },
    async gravityJoinGuild(e, t) {
        if (!!(0, s.rK)('gravityJoinGuild') && 0 !== e.length)
            try {
                return (
                    await i.tn.post({
                        url: o.ANM.GRAVITY_JOIN_GUILD,
                        body: {
                            guild_ids: e,
                            location: t
                        }
                    }),
                    !0
                );
            } catch (e) {
                return a.Z.captureException(e), !1;
            }
    },
    setGravitySelectedChannel(e) {
        r.Z.dispatch({
            type: 'SET_GRAVITY_SELECTED_CHANNEL',
            channelId: e
        });
    },
    async fetchForNotification(e, t) {
        if (!!(0, s.rK)('fetchInitial'))
            try {
                let n = await i.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: [
                            {
                                channel_id: e,
                                message_id: t
                            }
                        ],
                        summary_items: [],
                        activity_items: []
                    }
                });
                if (0 === n.body.message_items.length) return;
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_FROM_NOTIFICATION',
                    messageItem: n.body.message_items[0]
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    async fetchHydrated(e, t, n, l, c) {
        if (!!(0, s.rK)('fetchHydrated')) {
            if (0 === e.length && 0 === t.length && 0 === n.length) {
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: [],
                    requestSummaryItems: [],
                    requestActivityItems: [],
                    messageItems: [],
                    summaryItems: [],
                    activityItems: [],
                    startingIndex: l,
                    endingIndex: c
                });
                return;
            }
            try {
                let a = await i.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: e,
                        summary_items: t,
                        activity_items: n
                    }
                });
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: e,
                    requestSummaryItems: t,
                    requestActivityItems: n,
                    messageItems: a.body.message_items,
                    summaryItems: a.body.summary_items,
                    activityItems: a.body.activity_items,
                    startingIndex: l,
                    endingIndex: c
                });
            } catch (e) {
                a.Z.captureException(e);
            }
        }
    },
    async getGuildChannelScores() {
        if (!!(0, s.rK)('guildChannelScores'))
            try {
                let e = await i.tn.get({ url: o.ANM.GRAVITY_CUSTOM_SCORES });
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_CUSTOM_SCORES',
                    scores: e.body
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if (!!(0, s.rK)('recommendedGuilds'))
            try {
                let e = await i.tn.get({ url: o.ANM.GRAVITY_RECOMMENDED_GUILDS });
                r.Z.dispatch({
                    type: 'LOAD_GRAVITY_RECOMMENDED_GUILDS',
                    guilds: e.body.guilds
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    reloadICYMITab() {
        r.Z.dispatch({ type: 'RELOAD_GRAVITY' });
    },
    openICYMITab() {
        r.Z.dispatch({ type: 'GRAVITY_TAB_OPENED' });
    },
    ackGravityItems: (e, t) =>
        r.Z.dispatch({
            type: 'GRAVITY_ACK_ITEMS',
            items: e,
            override: t
        }),
    setFilters: (e) =>
        r.Z.dispatch({
            type: 'SET_GRAVITY_FILTERS',
            filters: e
        }),
    giveFeedback: () => r.Z.dispatch({ type: 'GRAVITY_FEEDBACK_GIVEN' }),
    clearReadStates: () => r.Z.dispatch({ type: 'CLEAR_GRAVITY_READ_STATES' }),
    addedRecommendedGuild: () => r.Z.dispatch({ type: 'GRAVITY_JOINED_RECOMMENDED_GUILD' }),
    setVideosMuted(e) {
        r.Z.dispatch({
            type: 'GRAVITY_SET_VIDEOS_MUTED',
            muted: e
        });
    }
};
