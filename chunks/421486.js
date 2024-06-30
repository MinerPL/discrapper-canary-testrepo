n(47120);
var r, i, a = n(735250), o = n(470079), s = n(120356), l = n.n(s), u = n(442837), c = n(481060), d = n(906732), _ = n(318374), E = n(522289), f = n(314897), h = n(346656);
n(5192);
var p = n(342656), m = n(785717), I = n(726059), T = n(162267), g = n(171368), S = n(228168), A = n(689938), N = n(647114);
(i = r || (r = {}))[i.NOT_CHECKED = 0] = 'NOT_CHECKED', i[i.NOT_OVERFLOWING = 1] = 'NOT_OVERFLOWING', i[i.OVERFLOWING_LARGE_ONLY = 2] = 'OVERFLOWING_LARGE_ONLY', i[i.OVERFLOWING_ALL = 3] = 'OVERFLOWING_ALL';
let v = o.memo(function (e) {
    let {
            user: t,
            mutualFriends: n,
            mutualGuilds: r,
            onClose: i,
            analyticsLocation: s,
            maxIcons: u = 3,
            underlineTextOnHover: f = !1,
            showTooltips: p = !0
        } = e, {analyticsLocations: I} = (0, d.ZP)(), {
            guildId: T,
            channelId: v,
            messageId: O,
            roleId: R
        } = (0, m.KZ)(), C = o.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(e => {
                let {user: t} = e;
                return t;
            })) && void 0 !== e ? e : [];
        }, [n]), y = o.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(e => {
                let {guild: t} = e;
                return t;
            })) && void 0 !== e ? e : [];
        }, [r]), D = o.useMemo(() => A.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({ count: C.length }), [C]), L = o.useMemo(() => A.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({ count: y.length }), [y]), b = o.useRef(null), [M, P] = o.useState(!1), [U, w] = o.useState(!1), x = o.useCallback(() => {
            if (null != b.current) {
                var e;
                w((null === (e = b.current) || void 0 === e ? void 0 : e.clientHeight) > 19), P(!0);
            }
        }, []), G = o.useCallback(e => () => {
            (0, g.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: I,
                guildId: T,
                channelId: v,
                messageId: O,
                roleId: R,
                section: e,
                analyticsLocation: s
            }), null == i || i();
        }, [
            s,
            I,
            i,
            t.id,
            T,
            v,
            O,
            R
        ]);
    o.useEffect(() => {
        x();
    }, [
        x,
        D
    ]);
    let k = C.length > 0, B = y.length > 0;
    return (0, a.jsxs)('div', {
        className: l()(N.compactItemContainer, !M && N.hideElement),
        ref: b,
        children: [
            k && (() => {
                let e = (0, a.jsxs)(c.Clickable, {
                    onClick: G(S.oh.MUTUAL_FRIENDS),
                    className: l()(N.avatarAndTextContainer, N.__invalid_friendsContainer),
                    children: [
                        (0, a.jsx)('div', {
                            className: N.__invalid_avatars,
                            children: (0, a.jsx)(_.Z, {
                                maxUsers: u,
                                users: C,
                                size: c.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }),
                        (0, a.jsx)(c.Text, {
                            className: l()(N.itemizedListText, f && N.underlineOnHover),
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: D
                        })
                    ]
                });
                return p ? (0, a.jsx)(c.TooltipContainer, {
                    text: A.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e
                }) : e;
            })(),
            k && B && (0, a.jsx)('div', {
                'aria-hidden': 'true',
                className: N.dotSpacer
            }),
            B && (() => {
                let e = (0, a.jsxs)(c.Clickable, {
                    onClick: G(S.oh.MUTUAL_GUILDS),
                    className: l()(N.avatarAndTextContainer, N.serverContainer),
                    children: [
                        !U && (0, a.jsx)('div', {
                            className: N.__invalid_avatars,
                            children: (0, a.jsx)(E.Z, {
                                maxGuilds: u,
                                guilds: y,
                                size: h.Z.Sizes.SMOL,
                                hideOverflowCount: !0,
                                disableGuildNameTooltip: !0
                            })
                        }),
                        (0, a.jsx)(c.Text, {
                            className: l()(N.itemizedListText, f && N.underlineOnHover),
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: L
                        })
                    ]
                });
                return p ? (0, a.jsx)(c.TooltipContainer, {
                    text: A.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e
                }) : e;
            })()
        ]
    });
});
t.ZP = o.memo(function (e) {
    var t, n;
    let {
            user: r,
            onClose: i,
            className: o,
            sourceAnaylticsLocations: s
        } = e, {analyticsLocations: _} = (0, d.ZP)(), E = null !== (n = null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : null == _ ? void 0 : _[0]) && void 0 !== n ? n : null, h = (0, u.e7)([f.default], () => f.default.getId()), m = r.id === h, g = r.bot || m, {enabled: S} = (0, p.qI)({
            autoTrackExposure: !1,
            location: E,
            disable: g
        }), {mutualGuilds: O} = (0, T.Z)(r.id), {mutualFriends: R} = (0, I.Z)(r.id);
    return !S || g || (null == R || 0 === R.length) && (null == O || 0 === O.length) ? null : (0, a.jsxs)('div', {
        className: l()(N.mainContainer, o),
        children: [
            (0, a.jsx)(c.Heading, {
                variant: 'eyebrow',
                className: N.__invalid_title,
                children: A.Z.Messages.USER_PROFILE_MUTUALS_TITLE
            }),
            (0, a.jsx)(v, {
                user: r,
                mutualFriends: R,
                mutualGuilds: O,
                onClose: i
            })
        ]
    });
});
