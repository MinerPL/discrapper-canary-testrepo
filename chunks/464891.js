n.d(t, {
    CF: function () {
        return Z;
    },
    ZP: function () {
        return K;
    },
    nD: function () {
        return Y;
    }
}),
    n(47120),
    n(653041),
    n(789020);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(366030),
    E = n(91218),
    f = n(71619),
    h = n(340797),
    p = n(946241),
    I = n(98278),
    m = n(869765),
    T = n(243317),
    S = n(621853),
    g = n(518950),
    A = n(484459),
    N = n(184301),
    O = n(740492),
    R = n(430824),
    v = n(496675),
    C = n(594174),
    L = n(768581),
    y = n(585483),
    D = n(630388),
    b = n(74538),
    M = n(276554),
    P = n(421399),
    U = n(453687),
    w = n(318713),
    x = n(304176),
    G = n(47930),
    k = n(981631),
    B = n(689938),
    F = n(825193),
    V = n(255963);
function H(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: i, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: _ = !1, className: E } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                onClick: a,
                onContextMenu: o,
                onMouseDown: l,
                onKeyDown: d,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                'aria-hidden': !0,
                className: s()(E, F.avatar, {
                    [F.compact]: i,
                    [F.clickable]: null != a,
                    [F.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == n || i
                ? null
                : (0, r.jsx)('img', {
                      className: F.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function Z(e, t, n) {
    let { message: i, channel: a, author: s, compact: o = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: _ } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.Z, {
                message: i,
                channel: a,
                author: s,
                compact: o,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: _,
                decorations: n,
                renderRemixTag: !0
            }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: F.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function Y(e) {
    let { message: t, avatar: n, username: i, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: c, showTimestampOnHover: d, ariaLabelledBy: _, ariaDescribedBy: E, className: f, messageClassname: h, badges: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(u.H, {
                className: s()(F.header, f),
                'aria-describedby': E,
                'aria-labelledby': _,
                children: [
                    c &&
                        l &&
                        (0, r.jsx)(w.Z, {
                            id: (0, U.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: h,
                            isInline: !1
                        }),
                    l && n,
                    (0, r.jsx)('span', {
                        id: a,
                        className: o,
                        children: i
                    }),
                    c &&
                        !l &&
                        (0, r.jsx)(w.Z, {
                            id: (0, U.Dv)(t),
                            timestamp: t.timestamp,
                            className: h
                        }),
                    null != p && p.length > 0
                        ? (0, r.jsx)('div', {
                              className: F.badgesContainer,
                              children: p
                          })
                        : null
                ]
            })
        ]
    });
}
let j = (e) => {
    !e && (0, I.z)();
};
function W(e) {
    let { currentUserIsPremium: t, author: n } = e,
        i = (0, l.e7)([S.Z], () => {
            var e;
            return null === (e = S.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(u.Tooltip, {
        tooltipClassName: F.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
        onTooltipShow: () => (0, A.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(u.Clickable, {
                className: F.nitroAuthorBadgeContainer,
                onClick: () => j(t),
                'aria-label': B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
                children: (0, r.jsx)('img', {
                    alt: '',
                    className: F.nitroBadgeSvg,
                    src: V,
                    ...e
                })
            })
    });
}
function K(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: I, showTimestampOnHover: S, roleIcon: A, subscribeToGroupId: w, hideTimestamp: V, className: j, channel: K } = e,
        z = i.useMemo(() => (null != I ? (e) => I(e, t) : void 0), [I, t]),
        [, q] = (0, f.ZP)(t.author.id, e.guildId),
        Q = (0, l.e7)([R.Z], () => R.Z.getGuild(e.guildId), [e.guildId]),
        X = null != t.author && null != Q && v.Z.canManageUser(k.Plq.MODERATE_MEMBERS, t.author, Q),
        $ = q && X,
        J = (function (e) {
            var t, n;
            let { props: a, guildId: s, handleRenderPopout: _, showCommunicationDisabledStyles: E = !1, className: f } = e,
                { message: h, author: p, compact: I = !1, subscribeToGroupId: m, animate: T = !0, onContextMenu: S, onClickAvatar: A, onPopoutRequestClose: R, showAvatarPopout: v } = a,
                [C, D] = i.useState(!1),
                { analyticsLocations: b } = (0, d.ZP)(c.Z.AVATAR),
                M = (0, l.e7)([O.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : O.ZP.displayCompactAvatars;
                }),
                P = null != h.messageReference && null != h.webhookId && h.hasFlag(k.iLy.IS_CROSSPOST),
                U = h.author,
                { id: w } = U,
                x = I ? 32 : 80,
                {
                    avatarSrc: G,
                    avatarDecorationSrc: B,
                    eventHandlers: F
                } = (0, g.Z)({
                    user: U,
                    guildId: s,
                    size: x,
                    animateOnHover: null != m ? !C : !T,
                    showPending: !0
                }),
                V = h.isInteractionPlaceholder(),
                Z = i.useMemo(() => {
                    var e, t;
                    return V && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null
                        ? null !==
                              (t = L.ZP.getApplicationIconURL({
                                  id: h.application.id,
                                  icon: h.application.icon,
                                  size: x,
                                  fallbackAvatar: !1
                              })) && void 0 !== t
                            ? t
                            : G
                        : G;
                }, [V, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, U.avatar, x, G]);
            return (i.useEffect(() => {
                if (null != m) return y.S.subscribeKeyed(k.LPv.ANIMATE_CHAT_AVATAR, ''.concat(m, ':').concat(w), D), () => void y.S.unsubscribeKeyed(k.LPv.ANIMATE_CHAT_AVATAR, ''.concat(m, ':').concat(w), D);
            }, [w, m]),
            I && !M)
                ? void 0
                : null != _ && null != v
                  ? (0, r.jsx)(d.Gt, {
                        value: b,
                        children: (0, r.jsx)(u.Popout, {
                            preload: P
                                ? void 0
                                : function () {
                                      return (0, N.Z)(
                                          h.author.id,
                                          null != p.guildMemberAvatar && null != s
                                              ? L.ZP.getGuildMemberAvatarURLSimple({
                                                    guildId: s,
                                                    userId: h.author.id,
                                                    avatar: p.guildMemberAvatar,
                                                    size: 80
                                                })
                                              : h.author.getAvatarURL(void 0, 80, !1),
                                          {
                                              guildId: s,
                                              channelId: h.channel_id
                                          }
                                      );
                                  },
                            renderPopout: _,
                            shouldShow: v,
                            position: o.tq ? 'window_center' : 'right',
                            onRequestClose: R,
                            children: (e) =>
                                H({
                                    ...F,
                                    avatarSrc: Z,
                                    avatarDecorationSrc: B,
                                    compact: I,
                                    onClick: A,
                                    onContextMenu: S,
                                    onMouseDown: e.onMouseDown,
                                    onKeyDown: e.onKeyDown,
                                    showCommunicationDisabledStyles: E,
                                    className: f
                                })
                        })
                    })
                  : (0, r.jsx)(d.Gt, {
                        value: b,
                        children: H({
                            ...F,
                            avatarSrc: Z,
                            avatarDecorationSrc: B,
                            compact: I,
                            onClick: A,
                            onContextMenu: S,
                            onMouseDown: void 0,
                            onKeyDown: void 0,
                            showCommunicationDisabledStyles: E,
                            className: f
                        })
                    });
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: z,
            showCommunicationDisabledStyles: $
        }),
        ee = (0, l.e7)([O.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : O.ZP.displayCompactAvatars;
        }),
        et =
            (!a || ee) && null != A && null != Q
                ? (0, r.jsx)(
                      u.Popout,
                      {
                          animation: u.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(x.Z, {
                                  roleIcon: A,
                                  guild: Q
                              }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(E.Z, {
                                  ...A,
                                  className: F.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || ee) && null != A
                  ? (0, r.jsx)(
                        E.Z,
                        {
                            ...A,
                            className: F.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        en = (0, G.x)({
            message: t,
            channel: K,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        er = [],
        ei = C.default.getCurrentUser(),
        ea = b.ZP.isPremium(t.author),
        es = b.ZP.isPremium(ei),
        eo = null == K ? void 0 : K.isPrivate();
    (0, M.R)(null != A, 'Message Username') &&
        ea &&
        !a &&
        !eo &&
        er.push(
            (0, r.jsx)(
                W,
                {
                    currentUserIsPremium: es,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != et && er.push(et),
        null != Q &&
            (er.push(
                (0, r.jsx)(
                    h.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'new-member'
                )
            ),
            er.push(
                (0, r.jsx)(
                    p.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != K &&
            null != Q &&
            er.push(
                (0, r.jsx)(
                    _.Z,
                    {
                        guild: Q,
                        channel: K,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let el = [];
    (0, D.yE)(t.flags, k.iLy.SUPPRESS_NOTIFICATIONS) && el.push((0, r.jsx)(T.Z, {}, 'suppress-notifications'));
    let eu = {};
    (eu[P.a.SYSTEM_TAG] = en), (eu[P.a.BADGES] = er);
    let ec = Z(e, z, eu),
        ed = (0, U.XX)(t, w),
        e_ = (0, U.Dv)(t),
        eE = V ? ''.concat(ed) : ''.concat(ed, ' ').concat(e_),
        ef = (null == n ? void 0 : n.state) === m.Y.LOADED ? (0, U.Gq)(t) : void 0;
    return (0, r.jsx)(Y, {
        message: t,
        avatar: J,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                $ &&
                    (0, r.jsx)(u.Tooltip, {
                        text: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: a ? F.compactCommunicationDisabled : F.communicationDisabled
                                    }),
                                    (0, r.jsx)(u.HiddenVisually, { children: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
                                ]
                            })
                    }),
                ec
            ]
        }),
        usernameSpanId: (0, U.XX)(t, w),
        usernameClassName: s()(F.headerText, {
            [F.hasRoleIcon]: null != et,
            [F.hasBadges]: null != en || el.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== V,
        showTimestampOnHover: S,
        ariaLabelledBy: eE,
        ariaDescribedBy: ef,
        className: j,
        badges: el
    });
}
