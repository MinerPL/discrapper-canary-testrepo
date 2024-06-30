a.d(n, {
    Z: function () {
        return o;
    }
});
var t = a(735250);
a(470079);
var l = a(442837), i = a(481060), u = a(496675), s = a(981631), d = a(647086), r = a(689938);
function o(e) {
    let n = (0, l.e7)([u.Z], () => u.Z.can(s.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__ ? null : e.id === d._ ? (0, t.jsx)(t.Fragment, {
        children: (0, t.jsx)(i.MenuItem, {
            id: 'create-category',
            label: r.Z.Messages.CREATE_CATEGORY,
            action: () => (0, i.openModalLazy)(async () => {
                let {default: e} = await a.e('1812').then(a.bind(a, 477782));
                return n => (0, t.jsx)(e, { ...n });
            })
        })
    }) : n ? [
        (0, t.jsx)(i.MenuItem, {
            id: 'create-channel',
            label: r.Z.Messages.CREATE_CHANNEL,
            action: () => (0, i.openModalLazy)(async () => {
                let {default: n} = await Promise.all([
                    a.e('45094'),
                    a.e('9458')
                ]).then(a.bind(a, 218613));
                return a => (0, t.jsx)(n, {
                    ...a,
                    channelType: s.d4z.GUILD_TEXT,
                    guildId: e.id
                });
            })
        }, 'create-channel'),
        (0, t.jsx)(i.MenuItem, {
            id: 'create-category',
            label: r.Z.Messages.CREATE_CATEGORY,
            action: () => (0, i.openModalLazy)(async () => {
                let {default: n} = await Promise.all([
                    a.e('45094'),
                    a.e('9458')
                ]).then(a.bind(a, 218613));
                return a => (0, t.jsx)(n, {
                    ...a,
                    channelType: s.d4z.GUILD_CATEGORY,
                    guildId: e.id
                });
            })
        }, 'create-category')
    ] : null;
}
