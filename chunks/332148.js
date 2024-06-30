var t = s(544891), l = s(570140), i = s(346479), a = s(624453), r = s(668781), o = s(981631), d = s(689938);
let u = {
    async pinMessage(e, n) {
        let {
            id: s,
            name: l
        } = e;
        await i.Z.unarchiveThreadIfNecessary(e.id), t.tn.put({
            url: o.ANM.PIN(s, n),
            oldFormErrors: !0
        }).catch(() => {
            let n;
            n = e.isPrivate() ? d.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({ maxPins: o.tG9 }) : d.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                maxPins: o.tG9,
                channelName: l
            }), r.Z.show({
                title: d.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                body: n,
                confirmText: d.Z.Messages.OKAY
            });
        });
    },
    async unpinMessage(e, n) {
        await i.Z.unarchiveThreadIfNecessary(e.id), t.tn.del({
            url: o.ANM.PIN(e.id, n),
            oldFormErrors: !0
        }).catch(() => r.Z.show({
            title: d.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
            body: d.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
            confirmText: d.Z.Messages.TRY_AGAIN,
            cancelText: d.Z.Messages.CANCEL,
            onConfirm: u.unpinMessage.bind(u, e, n)
        }));
    },
    ackPins(e) {
        l.Z.dispatch({
            type: 'CHANNEL_PINS_ACK',
            channelId: e
        });
    },
    fetchPins(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = a.Z.getPinnedMessages(e);
        if (!!n || null == s || !s.loaded && !s.loading)
            l.Z.dispatch({
                type: 'LOAD_PINNED_MESSAGES',
                channelId: e
            }), t.tn.get({
                url: o.ANM.PINS(e),
                retries: 2,
                oldFormErrors: !0
            }).then(n => {
                l.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                    messages: n.body,
                    channelId: e
                });
            }, () => {
                l.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES_FAILURE',
                    channelId: e
                });
            });
    }
};
n.Z = u;
