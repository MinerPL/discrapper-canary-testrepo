n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(442837),
    o = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    _ = n(344185),
    E = n(488131),
    I = n(592125),
    m = n(823379),
    T = n(709054),
    h = n(124368),
    N = n(742644);
function f(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        f = (0, l.Wu)(
            [_.Z, I.Z],
            () =>
                r()(_.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return T.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return I.Z.getChannel(t);
                    })
                    .filter(m.lm)
                    .sort((e, t) => T.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        C = a.useCallback((e, t) => {
            (0, E.ok)(e, t, h.on.INBOX);
        }, []);
    return (
        a.useEffect(() => {
            null != n &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                0 === f.length &&
                o.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), s(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: N.container,
            children: f.map((e) =>
                (0, i.jsx)(
                    d.oL,
                    {
                        createStore: () => (0, d.NU)(n),
                        children: (0, i.jsx)(u.ZP, {
                            className: N.forumPost,
                            threadId: e.id,
                            goToThread: C
                        })
                    },
                    e.id
                )
            )
        })
    );
}
