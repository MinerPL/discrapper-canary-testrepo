n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var l = n(442837), r = n(704215), a = n(481060), s = n(239091), o = n(605236), c = n(554747), u = n(306680), d = n(9156), h = n(434479), p = n(490897), _ = n(689938), f = n(359123);
function m(e) {
    let {
            guild: t,
            selected: m
        } = e, {
            hasUnread: g,
            mentionCount: C
        } = (0, l.cj)([u.ZP], () => ({
            hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
            mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT)
        }), [t.id]), I = (0, l.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
    async function E() {
        await (0, a.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                n.e('22347'),
                n.e('56236'),
                n.e('56289')
            ]).then(n.bind(n, 17671));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: t.id
            });
        }), (0, o.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
    }
    let N = (0, c.ZP)(t.id), x = N.length > 0 ? _.Z.Messages.GUILD_EVENTS_PLURAL.format({ number: N.length }) : _.Z.Messages.GUILD_EVENTS;
    return (0, i.jsx)(h.m, {
        id: 'upcoming-events-'.concat(t.id),
        renderIcon: e => (0, i.jsx)(a.CalendarIcon, {
            size: 'md',
            color: 'currentColor',
            className: e
        }),
        text: x,
        selected: m,
        onClick: E,
        onContextMenu: e => {
            (0, s.jW)(e, async () => {
                let {default: e} = await n.e('95307').then(n.bind(n, 867757));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: t.id
                });
            });
        },
        showUnread: g && !I,
        trailing: !I && C > 0 ? (0, i.jsx)(a.NumberBadge, {
            className: f.numberBadge,
            disableColor: !0,
            count: C
        }) : null
    });
}
