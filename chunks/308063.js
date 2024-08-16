var r = n(392711),
    a = n.n(r),
    i = n(544891),
    E = n(570140),
    _ = n(981631);
let u = ['Spidey Bot', 'Captain Hook'];
t.Z = {
    fetchForGuild(e) {
        E.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: e
        }),
            i.tn
                .get({
                    url: _.ANM.GUILD_WEBHOOKS(e),
                    oldFormErrors: !0
                })
                .then((t) => {
                    let { body: n } = t;
                    return E.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        webhooks: n
                    });
                })
                .catch((t) => {
                    let { body: n } = t;
                    E.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        error: n.message
                    });
                });
    },
    fetchForChannel(e, t) {
        E.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: e,
            channelId: t
        }),
            i.tn
                .get({
                    url: _.ANM.CHANNEL_WEBHOOKS(t),
                    oldFormErrors: !0
                })
                .then((n) => {
                    let { body: r } = n;
                    return E.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        channelId: t,
                        webhooks: r
                    });
                });
    },
    create: (e, t, n) => (
        null == n && (n = u[a().random(0, u.length - 1)]),
        i.tn
            .post({
                url: _.ANM.CHANNEL_WEBHOOKS(t),
                body: { name: n },
                oldFormErrors: !0
            })
            .then((t) => {
                let { body: n } = t;
                return (
                    E.Z.dispatch({
                        type: 'WEBHOOK_CREATE',
                        guildId: e,
                        webhook: n
                    }),
                    n
                );
            })
    ),
    delete: (e, t) =>
        i.tn
            .del({
                url: _.ANM.WEBHOOK(t),
                oldFormErrors: !0
            })
            .then(() => {
                E.Z.dispatch({
                    type: 'WEBHOOK_DELETE',
                    guildId: e,
                    webhookId: t
                });
            }),
    update: (e, t, n) =>
        i.tn
            .patch({
                url: _.ANM.WEBHOOK(t),
                body: n,
                oldFormErrors: !0
            })
            .then((t) => {
                let { body: n } = t;
                return (
                    E.Z.dispatch({
                        type: 'WEBHOOK_UPDATE',
                        guildId: e,
                        webhook: n
                    }),
                    n
                );
            })
};
