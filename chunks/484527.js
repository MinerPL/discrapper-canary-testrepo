t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(643872),
    l = t(442837),
    c = t(481060),
    d = t(570140),
    u = t(652898),
    _ = t(93093),
    E = t(768581),
    m = t(810568),
    I = t(981631),
    A = t(689938),
    p = t(51527),
    g = t(479537);
function f(e) {
    let { detectedGame: n, trackClick: t, onInviteResolved: s } = e,
        [f, T] = r.useState(),
        O = (0, l.e7)([_.Z], () => {
            var e, n;
            return (null == f ? void 0 : null === (e = f.guild) || void 0 === e ? void 0 : e.id) != null && _.Z.isMember(null == f ? void 0 : null === (n = f.guild) || void 0 === n ? void 0 : n.id);
        }),
        N = r.useMemo(() => {
            var e;
            return null === (e = n.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: n } = e;
                      return n === o.p.DISCORD;
                  });
        }, [n.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let n = e.split('/').pop();
                if (null != n) {
                    let e = await (0, u.Z)(n);
                    !0 !== e.banned && (T(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != N && e(N.url);
        }, [N, s]),
        null == f || null == f.guild || (!f.guild.features.includes('VERIFIED') && !f.guild.features.includes('PARTNER')))
    )
        return null;
    let R = E.ZP.getGuildIconURL({
        id: f.guild.id,
        icon: f.guild.icon,
        size: 32
    });
    return (0, a.jsxs)('div', {
        className: p.column,
        children: [
            (0, a.jsx)(c.Heading, {
                className: p.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, a.jsxs)('div', {
                className: i()(p.row, p.gapMd),
                children: [
                    (0, a.jsx)('img', {
                        className: g.guildIcon,
                        src: R,
                        alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: f.guild.name })
                    }),
                    (0, a.jsxs)('div', {
                        className: g.inviteInfo,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: f.guild.name
                            }),
                            null != f.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: f.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    t(m.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: f,
                            code: f.code,
                            context: I.IlC.APP
                        });
                },
                children: O ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
