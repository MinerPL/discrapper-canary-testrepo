a(47120);
var n = a(735250),
    r = a(470079),
    l = a(120356),
    t = a.n(l),
    i = a(643872),
    o = a(481060),
    E = a(570140),
    c = a(652898),
    _ = a(93093),
    u = a(768581),
    I = a(810568),
    d = a(981631),
    A = a(689938),
    R = a(707443);
let N = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
    O = (e) => {
        let { invite: s, trackClick: a } = e,
            { approximate_member_count: r, guild: l } = s;
        if (null == l) return null;
        let i = _.Z.isMember(l.id);
        if (!(null == l ? void 0 : l.features.includes('VERIFIED')) && !(null == l ? void 0 : l.features.includes('PARTNER'))) return null;
        let c = u.ZP.getGuildIconURL({
            id: l.id,
            icon: l.icon,
            size: 32
        });
        return (0, n.jsxs)('div', {
            className: t()(R.column),
            children: [
                (0, n.jsx)(o.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, n.jsxs)('div', {
                    className: t()(R.row, R.gapMd),
                    children: [
                        (0, n.jsx)('img', {
                            className: R.icon,
                            src: c,
                            alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: l.name })
                        }),
                        (0, n.jsxs)('div', {
                            className: t()(R.gapNone),
                            children: [
                                (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: l.name
                                }),
                                null != r &&
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: r })
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(o.Button, {
                    color: o.ButtonColors.PRIMARY,
                    onClick: () => {
                        a(I.as.JoinOfficialServer),
                            E.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: s,
                                code: s.code,
                                context: d.IlC.APP
                            });
                    },
                    children: i ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
                })
            ]
        });
    };
s.Z = (e) => {
    let { websites: s, trackClick: a } = e,
        l =
            null == s
                ? void 0
                : s.find((e) => {
                      let { category: s } = e;
                      return s === i.p.DISCORD;
                  }),
        [E, _] = r.useState();
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let s = e.split('/').pop();
                if (null != s) {
                    let e = await (0, c.Z)(s);
                    !0 !== e.banned && _(e.invite);
                }
            };
            null != l && e(l.url);
        }, [l]),
        null == s || 0 === s.length)
    )
        return null;
    let u = s
        .filter((e) => {
            let { category: s } = e;
            return N.includes(s);
        })
        .sort((e, s) => e.category - s.category);
    return (0, n.jsxs)('div', {
        className: t()(R.column),
        children: [
            null != E &&
                (0, n.jsx)(O, {
                    invite: E,
                    trackClick: a
                }),
            (0, n.jsxs)('div', {
                className: t()(R.column, R.gapSm),
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: A.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, n.jsx)('div', {
                        className: R.row,
                        children: u.map((e) => {
                            let s,
                                r,
                                { category: l, url: t } = e,
                                E = null;
                            switch (l) {
                                case i.p.OFFICIAL:
                                    (E = (0, n.jsx)(o.GlobeEarthIcon, { colorClass: R.linkIcon })), (r = I.as.WebsiteLink), (s = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case i.p.TWITTER:
                                    (E = (0, n.jsx)(o.XNeutralIcon, { colorClass: R.linkIcon })), (r = I.as.XLink), (s = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case i.p.YOUTUBE:
                                    (r = I.as.YouTubeLink), (E = (0, n.jsx)(o.YoutubeNeutralIcon, { colorClass: R.linkIcon })), (s = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != E
                                ? (0, n.jsx)(
                                      o.Anchor,
                                      {
                                          className: R.linkAnchor,
                                          title: s,
                                          href: t,
                                          onClick: () => {
                                              a(r);
                                          },
                                          target: '_blank',
                                          children: E
                                      },
                                      t
                                  )
                                : null;
                        })
                    })
                ]
            })
        ]
    });
};
