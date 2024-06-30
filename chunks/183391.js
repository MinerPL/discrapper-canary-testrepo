a(47120);
var n = a(735250), t = a(470079), s = a(120356), i = a.n(s), r = a(643872), o = a(481060), c = a(570140), d = a(652898), u = a(93093), m = a(768581), h = a(810568), x = a(981631), g = a(689938), I = a(997844);
let E = [
        r.p.OFFICIAL,
        r.p.TWITTER,
        r.p.YOUTUBE
    ], v = e => {
        let {
                invite: l,
                trackClick: a
            } = e, {
                approximate_member_count: t,
                guild: s
            } = l;
        if (null == s)
            return null;
        let r = u.Z.isMember(s.id);
        if (!(null == s ? void 0 : s.features.includes('VERIFIED')) && !(null == s ? void 0 : s.features.includes('PARTNER')))
            return null;
        let d = m.ZP.getGuildIconURL({
            id: s.id,
            icon: s.icon,
            size: 32
        });
        return (0, n.jsxs)('div', {
            className: i()(I.column),
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'text-xs/semibold',
                    children: g.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, n.jsxs)('div', {
                    className: i()(I.row, I.gapMd),
                    children: [
                        (0, n.jsx)('img', {
                            className: I.icon,
                            src: d,
                            alt: g.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: s.name })
                        }),
                        (0, n.jsxs)('div', {
                            className: i()(I.gapNone),
                            children: [
                                (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: s.name
                                }),
                                null != t && (0, n.jsx)(o.Text, {
                                    variant: 'text-xxs/normal',
                                    children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(o.Button, {
                    color: o.ButtonColors.PRIMARY,
                    onClick: () => {
                        a(h.as.JoinOfficialServer), c.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: l,
                            code: l.code,
                            context: x.IlC.APP
                        });
                    },
                    children: r ? g.Z.Messages.JOINED_GUILD : g.Z.Messages.JOIN_GUILD
                })
            ]
        });
    };
l.Z = e => {
    let {
            websites: l,
            trackClick: a
        } = e, s = null == l ? void 0 : l.find(e => {
            let {category: l} = e;
            return l === r.p.DISCORD;
        }), [c, u] = t.useState();
    if (t.useEffect(() => {
            let e = async e => {
                let l = e.split('/').pop();
                if (null != l) {
                    let e = await (0, d.Z)(l);
                    !0 !== e.banned && u(e.invite);
                }
            };
            null != s && e(s.url);
        }, [s]), null == l || 0 === l.length)
        return null;
    let m = l.filter(e => {
        let {category: l} = e;
        return E.includes(l);
    }).sort((e, l) => e.category - l.category);
    return (0, n.jsxs)('div', {
        className: i()(I.column),
        children: [
            null != c && (0, n.jsx)(v, {
                invite: c,
                trackClick: a
            }),
            (0, n.jsxs)('div', {
                className: i()(I.column, I.gapSm),
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/semibold',
                        children: g.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, n.jsx)('div', {
                        className: I.row,
                        children: m.map(e => {
                            let l, {
                                    category: t,
                                    url: s
                                } = e, i = null;
                            switch (t) {
                            case r.p.OFFICIAL:
                                i = (0, n.jsx)(o.GlobeEarthIcon, {}), l = h.as.WebsiteLink;
                                break;
                            case r.p.TWITTER:
                                i = (0, n.jsx)(o.XNeutralIcon, {}), l = h.as.XLink;
                                break;
                            case r.p.YOUTUBE:
                                l = h.as.YouTubeLink, i = (0, n.jsx)(o.YouTubeIcon, {});
                            }
                            return null != i ? (0, n.jsx)(o.Anchor, {
                                href: s,
                                onClick: () => {
                                    a(l);
                                },
                                target: '_blank',
                                children: i
                            }, s) : null;
                        })
                    })
                ]
            })
        ]
    });
};
