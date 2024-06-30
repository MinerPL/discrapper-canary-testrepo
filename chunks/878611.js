var r = n(735250);
n(470079);
var i = n(239091), a = n(644956), o = n(819366), s = n(592125);
t.Z = {
    handleUserContextMenu(e, t, a, o) {
        let l = s.Z.getChannel(t);
        null != l && (0, i.jW)(o, async () => {
            let {default: t} = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('12435'),
                n.e('69971')
            ]).then(n.bind(n, 757387));
            return n => (0, r.jsx)(t, {
                ...n,
                user: e,
                channel: l,
                guildId: a
            });
        });
    },
    react(e, t, n) {
        let {
            userId: i,
            channelId: s,
            parsedUserId: l,
            roleId: u,
            roleName: c,
            viewingChannelId: d
        } = e;
        return null == i && (null != u || '@everyone' === c || '@here' === c) ? (0, r.jsx)(a.Z, {
            inlinePreview: n.formatInline,
            ...e,
            children: t(e.content, n)
        }, n.key) : (0, r.jsx)(o.Z, {
            className: 'mention',
            userId: i,
            channelId: s,
            viewingChannelId: d,
            parsedUserId: l,
            content: t(e.content, n),
            inlinePreview: n.noStyleAndInteraction
        }, n.key);
    }
};
