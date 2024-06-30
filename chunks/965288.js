n.d(t, {
    y: function () {
        return N;
    }
});
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(512722), o = n.n(r), c = n(442837), u = n(692547), d = n(481060), h = n(239091), p = n(40851), m = n(484459), _ = n(103575), f = n(271383), E = n(709586), C = n(5192), g = n(590415), I = n(433534);
let x = a.memo(function (e) {
        let {
            guildId: t,
            channelId: n,
            user: a,
            isPremium: l,
            isBlocked: s
        } = e;
        return (0, i.jsxs)('div', {
            className: I.textContainer,
            children: [
                s ? (0, i.jsx)(d.DenyIcon, {
                    size: 'lg',
                    className: I.blockedIcon,
                    color: u.Z.unsafe_rawColors.RED_400.css
                }) : null,
                (0, i.jsx)(d.Text, {
                    className: I.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: C.ZP.getName(t, n, a)
                }),
                l ? (0, i.jsx)(E.Z, {
                    className: I.boost,
                    color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                }) : null
            ]
        });
    }), T = a.memo(function (e) {
        var t;
        let {
                participant: n,
                guildId: a,
                channel: l,
                isPremium: r
            } = e, {
                user: o,
                blocked: c,
                rtsState: u
            } = n, h = u === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, p = u === g.xO.REQUESTED_TO_SPEAK || h;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: I.avatarContainer,
                    children: [
                        p && (0, i.jsx)(d.HandRequestSpeakIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s()(I.icon, { [I.invited]: h })
                        }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(l.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: s()(I.avatar, { [I.faded]: c })
                        })
                    ]
                }),
                (0, i.jsx)(x, {
                    guildId: a,
                    channelId: l.id,
                    user: o,
                    isPremium: r,
                    isBlocked: c
                })
            ]
        });
    }), N = () => (0, i.jsx)('div', { className: I.tileBaseContainer });
t.Z = a.memo(function (e) {
    let {
            participant: t,
            channel: l
        } = e, {
            user: r,
            blocked: u
        } = t, E = l.getGuildId(), C = (0, p.bp)(), g = (0, c.e7)([f.ZP], () => {
            var e;
            return null != E && (null === (e = f.ZP.getMember(E, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
        }, [
            E,
            r.id
        ]);
    o()(null != E, 'Channel cannot be guildless');
    let x = a.useCallback(e => {
            (0, h.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('12435'),
                    n.e('47195')
                ]).then(n.bind(n, 757387));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: r,
                    guildId: E,
                    channel: l,
                    showMediaItems: !0,
                    showStageChannelItems: !0,
                    showChatItems: !1
                });
            }, { context: C });
        }, [
            r,
            E,
            l,
            C
        ]), N = a.useCallback(e => (0, i.jsx)(_.Z, {
            ...e,
            location: 'AudienceTile',
            guildId: E,
            channelId: l.id,
            userId: r.id
        }), [
            l.id,
            E,
            r.id
        ]);
    return (0, i.jsx)(d.Popout, {
        preload: () => (0, m.W)(r, {
            guildId: l.guild_id,
            channelId: l.id
        }),
        renderPopout: N,
        position: 'right',
        spacing: 8,
        children: e => (0, i.jsx)(d.Clickable, {
            className: s()(I.tileContainer, {
                [I.singleIcon]: g || u,
                [I.doubleIcon]: g && u
            }),
            onContextMenu: x,
            ...e,
            children: (0, i.jsx)(T, {
                participant: t,
                guildId: E,
                channel: l,
                isPremium: g
            })
        })
    });
});
