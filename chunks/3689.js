a.d(n, {
    Z: function () {
        return s;
    }
});
var t = a(735250);
a(470079);
var l = a(442837),
    r = a(481060),
    u = a(496675),
    c = a(981631),
    i = a(689938);
function s(e, n) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        o = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !o) return null;
    let d = () => {
        (0, r.openModalLazy)(async () => {
            let { default: n } = await Promise.all([a.e('7590'), a.e('45094'), a.e('1379')]).then(a.bind(a, 218613));
            return (a) =>
                (0, t.jsx)(n, {
                    ...a,
                    channelType: s,
                    guildId: e.guild_id,
                    categoryId: e.parent_id
                });
        });
    };
    switch (s) {
        case c.d4z.GUILD_TEXT:
            return (0, t.jsx)(r.MenuItem, {
                id: 'create-text-channel',
                label: i.Z.Messages.CREATE_TEXT_CHANNEL,
                action: d
            });
        case c.d4z.GUILD_VOICE:
            return (0, t.jsx)(r.MenuItem, {
                id: 'create-voice-channel',
                label: i.Z.Messages.CREATE_VOICE_CHANNEL,
                action: d
            });
        default:
            return null;
    }
}
