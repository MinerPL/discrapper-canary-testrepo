n.d(t, {
    P: function () {
        return f;
    },
    e: function () {
        return p;
    }
});
var i = n(735250), a = n(470079), s = n(481060), l = n(239091), r = n(739566), o = n(942951), c = n(484459), d = n(103575), u = n(594174), _ = n(702346), E = n(768581), m = n(91047), I = n(628566), T = n(693912), h = n(981631);
function N(e, t) {
    return a.useCallback(a => (r, o) => {
        var _;
        let T = E.ZP.getApplicationIconURL({
                id: a.id,
                icon: a.icon,
                bot: a.bot,
                botIconFirst: !0
            }), h = u.default.getUser(null === (_ = a.bot) || void 0 === _ ? void 0 : _.id), N = I.Z.getIntegration(e.id, a.id), f = e.isPrivate() && null != N ? t => {
                (0, l.jW)(t, async () => {
                    let {default: t} = await n.e('30887').then(n.bind(n, 496281));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e,
                        integration: N
                    });
                });
            } : null != h ? t => (0, m.Pv)(t, h, e) : void 0, {bot: p} = a;
        return null == p ? r : (0, i.jsx)(s.Popout, {
            position: 'right',
            preload: () => (0, c.W)(p.id, T, {
                guildId: e.guild_id,
                channelId: e.id
            }),
            renderPopout: n => (0, i.jsx)(d.Z, {
                ...n,
                location: 'PrivateChannelIntegrationSystemMessage',
                userId: p.id,
                guildId: e.guild_id,
                channelId: e.id,
                messageId: t.id
            }),
            children: e => (0, i.jsx)(s.Anchor, {
                ...e,
                onContextMenu: f,
                children: r
            })
        }, o);
    }, [
        e,
        t.id
    ]);
}
function f(e) {
    let {
            message: t,
            channel: a,
            compact: s
        } = e, l = (0, r.ZP)(t), c = t.application, d = (0, o.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }), u = N(a, t);
    return (0, i.jsx)(_.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: s,
        children: (0, T.DS)({
            application: c,
            username: l.nick,
            usernameHook: d(l),
            applicationNameHook: null != c ? u(c) : h.dG4
        })
    });
}
function p(e) {
    let {
            message: t,
            channel: a,
            compact: s
        } = e, l = (0, r.ZP)(t), c = t.application, d = (0, o.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }), u = N(a, t);
    return (0, i.jsx)(_.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: s,
        children: (0, T.nh)({
            application: c,
            username: l.nick,
            usernameHook: d(l),
            applicationNameHook: null != c ? u(c) : h.dG4
        })
    });
}
