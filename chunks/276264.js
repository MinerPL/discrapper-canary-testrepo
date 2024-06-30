n.d(t, {
    x: function () {
        return b;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(477690), l = n(481060), u = n(420660), c = n(979264), d = n(33934), _ = n(736144), E = n(113434), f = n(918701), h = n(553393), p = n(509275), m = n(204197), I = n(594174), T = n(467679), g = n(681426), S = n(709586), A = n(360048), N = n(624138), v = n(51144), O = n(788307), R = n(981631), C = n(674563), y = n(524484), D = n(689938), L = n(328000);
let b = (0, N.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let {
            selected: n = !1,
            colorString: a,
            colorRoleName: s,
            isOwner: N,
            ownerTooltipText: b,
            lostPermissionTooltipText: M,
            isTyping: P = !1,
            nick: U,
            user: w,
            currentUser: x,
            activities: G,
            applicationStream: k,
            status: B,
            shouldAnimateStatus: F = !1,
            isMobile: V,
            premiumSince: H,
            channel: Z,
            guildId: Y,
            lastOnlineTimestamp: j,
            className: W,
            onMouseDown: K,
            onKeyDown: z,
            onClick: q,
            onContextMenu: Q,
            onClickPremiumGuildIcon: X,
            onFocus: $,
            'aria-controls': J,
            'aria-expanded': ee,
            'aria-posinset': et,
            'aria-setsize': en,
            id: er,
            tabIndex: ei,
            itemProps: ea
        } = e, eo = null == w ? void 0 : w.id, es = v.ZP.useName(w), el = (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eo, eu = i.useRef(null), [ec, ed] = i.useState(!1), [e_, eE] = i.useState(null), {
            avatarDecorationSrc: ef,
            avatarSrc: eh,
            eventHandlers: ep
        } = (0, m.Z)({
            user: w,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ec),
            guildId: Y
        }), em = i.useMemo(() => ({
            source: R.jXE.MEMBER_LIST,
            tagUserId: eo
        }), [eo]), [eI, eT] = i.useState(!1);
    i.useEffect(() => {
        n && eT(!1);
    }, [n]);
    let eg = (0, E.Fr)(G), eS = null != eg && !el && n && !eI && (0, f.dl)(eg), eA = () => {
            ed(!0);
        }, eN = () => {
            ed(!1);
        }, ev = e => {
            eE(e);
        }, eO = () => {
            let e = null != G ? G.find(e => e.type === R.IIU.CUSTOM_STATUS) : null, t = null != e && null != w && (0, d.Z)(e, w, Z);
            if (null != j && null == e) {
                let e = (0, p.H)(j);
                return (0, r.jsx)('div', {
                    className: L.subtext,
                    children: e
                });
            }
            return (0, r.jsx)(O.Z, {
                className: L.activity,
                textClassName: L.activityText,
                emojiClassName: L.activityEmoji,
                activities: G,
                applicationStream: k,
                animate: ec,
                hideEmoji: !t,
                hideTooltip: !0,
                user: w,
                hasQuest: null != eg && (0, f.dl)(eg)
            });
        }, eR = () => null != N && N && null == M ? (0, r.jsx)(l.Tooltip, {
            text: null != b ? b : D.Z.Messages.GUILD_OWNER,
            children: e => (0, r.jsx)(l.CrownIcon, {
                size: 'md',
                color: 'currentColor',
                ...e,
                className: L.ownerIcon
            })
        }) : null, eC = () => null == H ? null : (0, r.jsx)(l.Tooltip, {
            text: D.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: H }),
            children: e => (0, r.jsx)(l.Clickable, {
                onClick: X,
                tabIndex: -1,
                children: (0, r.jsx)(S.Z, {
                    ...e,
                    className: L.premiumIcon
                })
            })
        }), ey = () => {
            let e = (null == w ? void 0 : w.isClyde()) ? C.Hb.AI : C.Hb.BOT;
            return null != w && w.bot ? (0, r.jsx)(T.Z, {
                className: L.botTag,
                type: e,
                verified: w.isVerifiedBot()
            }) : null;
        }, eD = () => (0, r.jsxs)(r.Fragment, {
            children: [
                ey(),
                eR(),
                eC()
            ]
        }), eL = (e, t) => {
            let n = F ? l.AnimatedAvatar : l.Avatar, i = (0, u.Z)(G) ? R.Skl.STREAMING : B;
            return i = t ? void 0 : i, (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(n, {
                        ...ep,
                        size: l.AvatarSizes.SIZE_32,
                        src: eh,
                        isMobile: V,
                        isTyping: P,
                        status: i,
                        'aria-label': e.username,
                        statusTooltip: !0,
                        avatarDecoration: ef,
                        typingIndicatorRef: ev
                    }),
                    (0, r.jsx)(_.Z, {
                        confettiSpawnRef: e_,
                        shouldFire: P && null != x && e.id !== x.id,
                        confettiLocation: y.Hn.MEMBER_USER
                    })
                ]
            });
        }, eb = () => (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.NameWithRole, {
                    roleName: s,
                    color: null != a ? a : void 0,
                    name: null != U ? U : es,
                    className: L.name
                }),
                (0, r.jsx)(c.ZP, {
                    clan: null == w ? void 0 : w.clan,
                    userId: null == w ? void 0 : w.id,
                    contextGuildId: Y,
                    disableGuildProfile: !0,
                    className: L.clanTag,
                    profileViewedAnalytics: em
                })
            ]
        }), eM = B === R.Skl.OFFLINE, eP = null != j;
    return null == w ? (0, r.jsx)(g.Z, {
        avatarSize: l.AvatarSizes.SIZE_32,
        className: L.placeholder
    }) : (0, r.jsx)(l.Popout, {
        renderPopout: e => (0, r.jsx)(h.Z, {
            quest: eg,
            memberListItemRef: eu,
            applicationStream: k,
            ...e,
            closePopout: () => eT(!0)
        }),
        position: 'bottom',
        shouldShow: eS,
        nudgeAlignIntoViewport: !1,
        useRawTargetDimensions: !0,
        animation: l.Popout.Animation.NONE,
        spacing: -3,
        children: () => (0, r.jsx)(A.Z, {
            ref: eu,
            selected: n,
            className: o()(L.member, W, { [L.offline]: eM && !eP && !n }),
            innerClassName: L.memberInner,
            onClick: q,
            onKeyDown: z,
            onMouseDown: K,
            onContextMenu: Q,
            onMouseEnter: eA,
            onMouseLeave: eN,
            name: null == M ? (0, r.jsx)('span', {
                className: L.username,
                children: eb()
            }) : (0, r.jsx)(l.Tooltip, {
                text: M,
                children: e => (0, r.jsx)('span', {
                    ...e,
                    className: o()(L.username, L.lostPermission),
                    children: eb()
                })
            }),
            avatar: eL(w, eM),
            subText: eO(),
            decorators: eD(),
            'aria-controls': J,
            'aria-expanded': ee,
            'aria-setsize': en,
            'aria-posinset': et,
            id: er,
            tabIndex: ei,
            onFocus: $,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                }
            },
            ...ea
        })
    });
};
