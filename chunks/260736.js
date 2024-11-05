n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(739566),
    a = n(942951),
    o = n(834129),
    s = n(388032),
    c = n(116264);
function d(e) {
    let { compact: t, message: n, channel: d } = e,
        u = (0, l.ZP)(n),
        m = (0, a.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: d.guild_id,
            messageId: n.id
        })(u);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                timestamp: n.timestamp,
                compact: t,
                iconNode: (0, i.jsx)(r.HdIcon, {
                    size: 'md',
                    colorClass: 'currentColor',
                    className: c.icon
                }),
                children: (0, i.jsx)('div', {
                    className: c.parentContainer,
                    children: s.intl.format(s.t['5bYXjo'], {
                        actorName: u.nick,
                        actorHook: m
                    })
                })
            }),
            (0, i.jsxs)(r.Clickable, {
                className: c.embed,
                children: [
                    (0, i.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/shop/images/potion.png',
                        alt: s.intl.string(s.t.N6rchI)
                    }),
                    (0, i.jsxs)('div', {
                        className: c.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: c.title,
                                children: s.intl.string(s.t.AeU3uL)
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: s.intl.string(s.t['UoHq/f'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
