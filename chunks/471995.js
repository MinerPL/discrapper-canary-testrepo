n.d(t, {
    B: function () {
        return I;
    }
});
var i = n(735250),
    l = n(227879),
    r = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(605236),
    c = n(523751),
    u = n(527379),
    d = n(31445),
    h = n(703656),
    p = n(650774),
    _ = n(443063),
    f = n(981631),
    g = n(176505),
    m = n(689938),
    C = n(552770);
function I(e) {
    let { guild: t, guildChannels: l, hasBanner: I } = e,
        N = l.getGuildActionSection(),
        x = (0, d.Z)(t),
        S = (0, r.e7)([p.Z], () => p.Z.getMemberCount(t.id)),
        v = async () => {
            let { default: e } = await n.e('46826').then(n.bind(n, 859432));
            return (n) => {
                let { closePopout: l } = n;
                return (
                    null != t &&
                    (0, i.jsx)(e, {
                        onClose: l,
                        guild: t
                    })
                );
            };
        };
    return (0, i.jsxs)('div', {
        className: C.container,
        'data-has-banner': I,
        children: [
            (0, i.jsxs)('div', {
                className: C.header,
                children: [
                    (0, i.jsx)(c.Z, { guild: t }),
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: t.name
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: C.subheader,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-low-contrast',
                    children: m.Z.Messages.MEMBERS_HEADER.format({ members: S })
                })
            }),
            (0, i.jsxs)('div', {
                className: C.buttons,
                children: [
                    N.getRows().map((e, l) => {
                        switch (N.getRow(l)) {
                            case _.z.CHANNELS_AND_ROLES:
                                return (0, i.jsx)(E, {
                                    tooltip: m.Z.Messages.CHANNELS_AND_ROLES,
                                    onPress: () => {
                                        (0, h.uL)(f.Z5c.CHANNEL(t.id, x ? g.oC.CUSTOMIZE_COMMUNITY : g.oC.CHANNEL_BROWSER));
                                    },
                                    children: (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, { size: 'sm' })
                                });
                            case _.z.GUILD_SCHEDULED_EVENTS:
                                return (0, i.jsx)(E, {
                                    tooltip: 'Events',
                                    onPress: async () => {
                                        await (0, s.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('2938')]).then(n.bind(n, 17671));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    guildId: t.id
                                                });
                                        }),
                                            (0, o.EW)(a.z.GUILD_HEADER_EVENT_UPSELL);
                                    },
                                    children: (0, i.jsx)(s.CalendarIcon, { size: 'sm' })
                                });
                            case _.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                                return (0, i.jsx)(E, {
                                    tooltip: m.Z.Messages.MEMBERS,
                                    onPress: () => {
                                        (0, u._X)(t.id);
                                    },
                                    children: (0, i.jsx)(s.GroupIcon, { size: 'sm' })
                                });
                            default:
                                return null;
                        }
                    }),
                    (0, i.jsx)(s.LazyPopout, {
                        renderPopout: v,
                        position: 'bottom',
                        align: 'center',
                        animation: s.Popout.Animation.SCALE,
                        children: (e) =>
                            (0, i.jsx)(E, {
                                ...e,
                                children: (0, i.jsx)(s.MoreHorizontalIcon, { size: 'sm' })
                            })
                    })
                ]
            })
        ]
    });
}
function E(e) {
    let { children: t, tooltip: n, ...r } = e,
        a = (0, i.jsx)(l.zx, {
            className: C.button,
            ...r,
            children: (0, i.jsx)('span', {
                className: C.buttonIcon,
                children: t
            })
        });
    return null == n
        ? a
        : (0, i.jsx)(s.TooltipContainer, {
              text: n,
              position: 'bottom',
              children: a
          });
}
