var r = n(266067),
    i = n(544891),
    a = n(570140),
    s = n(38618),
    o = n(893607),
    l = n(131704),
    u = n(592125),
    c = n(944486),
    d = n(981631),
    _ = n(176505);
let E = {},
    f = !1;
function h(e) {
    if (null == e || e === _.V || (0, _.AB)(e) || null != u.Z.getChannel(e)) return Promise.resolve();
    if (
        (f ||
            ((f = !0),
            a.Z.subscribe('CONNECTION_OPEN', () => {
                E = {};
                let e = c.Z.getChannelId(),
                    t = u.Z.getChannel(e);
                null != e && null == t && h(e);
            })),
        !s.Z.isConnected())
    )
        return Promise.resolve();
    let t = E[e];
    if (null != t) return 'LOADING' === t.type ? t.promise : Promise.resolve();
    let n = (0, r.LX)(location.pathname, {
            path: d.Z5c.CHANNEL(o.Hw.guildId(), o.Hw.channelId(), ':messageId'),
            exact: !0
        }),
        p = i.tn
            .get(d.ANM.CHANNEL(e))
            .then((t) => {
                let { body: r } = t;
                if (((E[e] = { type: 'LOADED' }), l.Ec.has(r.type))) {
                    var i;
                    a.Z.dispatch({
                        type: 'THREAD_CREATE',
                        channel: (0, l.q_)(r),
                        messageId: null == n ? void 0 : null === (i = n.params) || void 0 === i ? void 0 : i.messageId
                    });
                }
            })
            .catch(() => {
                var t;
                (E[e] = { type: 'NOT_FOUND' }),
                    a.Z.dispatch({
                        type: 'CHANNEL_DELETE',
                        channel: {
                            id: e,
                            guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                            parent_id: void 0
                        }
                    });
            });
    return (
        (E[e] = {
            type: 'LOADING',
            promise: p
        }),
        p
    );
}
t.Z = { loadThread: h };
