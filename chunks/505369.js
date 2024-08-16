var i = n(544891),
    a = n(570140),
    s = n(960048),
    r = n(715035),
    l = n(207205),
    o = n(981631);
t.Z = {
    async fetchDehydrated() {
        if (!(0, l.rK)('fetchDehydrated')) return;
        let e = r.Z.negativeContentOnly();
        try {
            let t = Date.now(),
                n = await i.tn.get({ url: e ? o.ANM.GRAVITY_ITEMS_NEGATIVE : o.ANM.GRAVITY_ITEMS_DEHYDRATED });
            await a.Z.dispatch({
                type: 'LOAD_GRAVITY_DEHYDRATED',
                items: n.body.items,
                loadId: n.body.load_id,
                startTime: t
            });
        } catch (e) {
            s.Z.captureException(e);
        }
    },
    setGravitySelectedChannel(e) {
        a.Z.dispatch({
            type: 'SET_GRAVITY_SELECTED_CHANNEL',
            channelId: e
        });
    },
    async fetchHydrated(e, t, n, r, c) {
        if (!!(0, l.rK)('fetchHydrated')) {
            if (0 === e.length && 0 === t.length && 0 === n.length) {
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: [],
                    requestSummaryItems: [],
                    requestActivityItems: [],
                    messageItems: [],
                    summaryItems: [],
                    activityItems: [],
                    startingIndex: r,
                    endingIndex: c
                });
                return;
            }
            try {
                let s = await i.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: e,
                        summary_items: t,
                        activity_items: n
                    }
                });
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: e,
                    requestSummaryItems: t,
                    requestActivityItems: n,
                    messageItems: s.body.message_items,
                    summaryItems: s.body.summary_items,
                    activityItems: s.body.activity_items,
                    startingIndex: r,
                    endingIndex: c
                });
            } catch (e) {
                s.Z.captureException(e);
            }
        }
    },
    async getGuildChannelScores() {
        if (!!(0, l.rK)('guildChannelScores'))
            try {
                let e = await i.tn.get({ url: o.ANM.GRAVITY_CUSTOM_SCORES });
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_CUSTOM_SCORES',
                    scores: e.body
                });
            } catch (e) {
                s.Z.captureException(e);
            }
    },
    reloadICYMITab() {
        a.Z.dispatch({ type: 'RELOAD_GRAVITY' });
    },
    openICYMITab() {
        a.Z.dispatch({ type: 'GRAVITY_TAB_OPENED' });
    },
    ackGravityItems: (e, t) =>
        a.Z.dispatch({
            type: 'GRAVITY_ACK_ITEMS',
            items: e,
            override: t
        }),
    setFilters: (e) =>
        a.Z.dispatch({
            type: 'SET_GRAVITY_FILTERS',
            filters: e
        }),
    giveFeedback: () => a.Z.dispatch({ type: 'GRAVITY_FEEDBACK_GIVEN' })
};
