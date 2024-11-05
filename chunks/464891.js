n.d(t, {
    CF: function () {
        return H;
    },
    ZP: function () {
        return z;
    },
    nD: function () {
        return Y;
    }
}),
    n(47120),
    n(789020),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(835473),
    _ = n(366030),
    h = n(91218),
    p = n(71619),
    m = n(340797),
    g = n(946241),
    E = n(98278),
    v = n(869765),
    I = n(243317),
    S = n(621853),
    T = n(518950),
    b = n(484459),
    y = n(184301),
    A = n(740492),
    N = n(430824),
    C = n(496675),
    R = n(594174),
    O = n(768581),
    D = n(585483),
    L = n(630388),
    x = n(74538),
    w = n(276554),
    M = n(421399),
    P = n(453687),
    k = n(318713),
    U = n(304176),
    G = n(47930),
    B = n(981631),
    Z = n(388032),
    F = n(825193),
    V = n(255963);
function j(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: i, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: f = !1, className: _ } = e;
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
                className: s()(_, F.avatar, {
                    [F.compact]: i,
                    [F.clickable]: null != a,
                    [F.communicationDisabledOpacity]: f
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
function H(e, t, n) {
    let { message: i, channel: a, author: s, compact: o = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: f } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.Z, {
                message: i,
                channel: a,
                author: s,
                compact: o,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: f,
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
    let { message: t, avatar: n, username: i, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: c, showTimestampOnHover: d, ariaLabelledBy: _, ariaDescribedBy: h, className: p, messageClassname: m, badges: g } = e,
        E = (0, f.q)(t.applicationId);
    return (
        null != E && !(0, L.yE)(E.flags, B.udG.SOCIAL_LAYER_INTEGRATION) && (E = null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !l && n,
                (0, r.jsxs)(u.H, {
                    className: s()(F.header, p),
                    'aria-describedby': h,
                    'aria-labelledby': _,
                    children: [
                        c &&
                            l &&
                            (0, r.jsx)(k.Z, {
                                id: (0, P.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: m,
                                isInline: !1,
                                application: E
                            }),
                        l && n,
                        (0, r.jsx)('span', {
                            id: a,
                            className: o,
                            children: i
                        }),
                        c &&
                            !l &&
                            (0, r.jsx)(k.Z, {
                                id: (0, P.Dv)(t),
                                timestamp: t.timestamp,
                                className: m,
                                application: E
                            }),
                        null != g && g.length > 0
                            ? (0, r.jsx)('div', {
                                  className: F.badgesContainer,
                                  children: g
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let W = (e) => {
    !e && (0, E.z)();
};
function K(e) {
    let { currentUserIsPremium: t, author: n } = e,
        i = (0, l.e7)([S.Z], () => {
            var e;
            return null === (e = S.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(u.Tooltip, {
        tooltipClassName: F.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: Z.intl.formatToPlainString(Z.t['8zbGNT'], { date: i }),
        onTooltipShow: () => (0, b.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(u.Clickable, {
                className: F.nitroAuthorBadgeContainer,
                onClick: () => W(t),
                'aria-label': Z.intl.formatToPlainString(Z.t['8zbGNT'], { date: i }),
                children: (0, r.jsx)('img', {
                    alt: '',
                    className: F.nitroBadgeSvg,
                    src: V,
                    ...e
                })
            })
    });
}
function z(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: f, showTimestampOnHover: E, roleIcon: S, subscribeToGroupId: b, hideTimestamp: k, className: V, channel: W } = e,
        z = i.useMemo(() => (null != f ? (e) => f(e, t) : void 0), [f, t]),
        [, q] = (0, p.ZP)(t.author.id, e.guildId),
        Q = (0, l.e7)([N.Z], () => N.Z.getGuild(e.guildId), [e.guildId]),
        X = null != t.author && null != Q && C.Z.canManageUser(B.Plq.MODERATE_MEMBERS, t.author, Q),
        J = q && X,
        $ = (function (e) {
            var t, n;
            let { props: a, guildId: s, handleRenderPopout: f, showCommunicationDisabledStyles: _ = !1, className: h } = e,
                { message: p, author: m, compact: g = !1, subscribeToGroupId: E, animate: v = !0, onContextMenu: I, onClickAvatar: S, onPopoutRequestClose: b, showAvatarPopout: N } = a,
                [C, R] = i.useState(!1),
                { analyticsLocations: L } = (0, d.ZP)(c.Z.AVATAR),
                x = (0, l.e7)([A.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : A.ZP.displayCompactAvatars;
                }),
                w = null != p.messageReference && null != p.webhookId && p.hasFlag(B.iLy.IS_CROSSPOST),
                M = p.author,
                { id: P } = M,
                k = g ? 32 : 80,
                {
                    avatarSrc: U,
                    avatarDecorationSrc: G,
                    eventHandlers: Z
                } = (0, T.Z)({
                    user: M,
                    guildId: s,
                    size: k,
                    animateOnHover: null != E ? !C : !v,
                    showPending: !0
                }),
                F = p.isInteractionPlaceholder(),
                V = i.useMemo(() => {
                    var e, t;
                    return F && null == M.avatar && (null === (e = p.application) || void 0 === e ? void 0 : e.icon) != null
                        ? null !==
                              (t = O.ZP.getApplicationIconURL({
                                  id: p.application.id,
                                  icon: p.application.icon,
                                  size: k,
                                  fallbackAvatar: !1
                              })) && void 0 !== t
                            ? t
                            : U
                        : U;
                }, [F, null === (t = p.application) || void 0 === t ? void 0 : t.icon, null === (n = p.application) || void 0 === n ? void 0 : n.id, M.avatar, k, U]);
            return (i.useEffect(() => {
                if (null != E) return D.S.subscribeKeyed(B.LPv.ANIMATE_CHAT_AVATAR, ''.concat(E, ':').concat(P), R), () => void D.S.unsubscribeKeyed(B.LPv.ANIMATE_CHAT_AVATAR, ''.concat(E, ':').concat(P), R);
            }, [P, E]),
            g && !x)
                ? void 0
                : null != f && null != N
                  ? (0, r.jsx)(d.Gt, {
                        value: L,
                        children: (0, r.jsx)(u.Popout, {
                            preload: w
                                ? void 0
                                : function () {
                                      return (0, y.Z)(
                                          p.author.id,
                                          null != m.guildMemberAvatar && null != s
                                              ? O.ZP.getGuildMemberAvatarURLSimple({
                                                    guildId: s,
                                                    userId: p.author.id,
                                                    avatar: m.guildMemberAvatar,
                                                    size: 80
                                                })
                                              : p.author.getAvatarURL(void 0, 80, !1),
                                          {
                                              guildId: s,
                                              channelId: p.channel_id
                                          }
                                      );
                                  },
                            renderPopout: f,
                            shouldShow: N,
                            position: o.tq ? 'window_center' : 'right',
                            onRequestClose: b,
                            children: (e) =>
                                j({
                                    ...Z,
                                    avatarSrc: V,
                                    avatarDecorationSrc: G,
                                    compact: g,
                                    onClick: S,
                                    onContextMenu: I,
                                    onMouseDown: e.onMouseDown,
                                    onKeyDown: e.onKeyDown,
                                    showCommunicationDisabledStyles: _,
                                    className: h
                                })
                        })
                    })
                  : (0, r.jsx)(d.Gt, {
                        value: L,
                        children: j({
                            ...Z,
                            avatarSrc: V,
                            avatarDecorationSrc: G,
                            compact: g,
                            onClick: S,
                            onContextMenu: I,
                            onMouseDown: void 0,
                            onKeyDown: void 0,
                            showCommunicationDisabledStyles: _,
                            className: h
                        })
                    });
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: z,
            showCommunicationDisabledStyles: J
        }),
        ee = (0, l.e7)([A.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : A.ZP.displayCompactAvatars;
        }),
        et =
            (!a || ee) && null != S && null != Q
                ? (0, r.jsx)(
                      u.Popout,
                      {
                          animation: u.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(U.Z, {
                                  roleIcon: S,
                                  guild: Q
                              }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(h.Z, {
                                  ...S,
                                  className: F.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || ee) && null != S
                  ? (0, r.jsx)(
                        h.Z,
                        {
                            ...S,
                            className: F.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        en = (0, G.x)({
            message: t,
            channel: W,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        er = [],
        ei = R.default.getCurrentUser(),
        ea = x.ZP.isPremium(t.author),
        es = x.ZP.isPremium(ei),
        eo = null == W ? void 0 : W.isPrivate();
    (0, w.R)(null != S, 'Message Username') &&
        ea &&
        !a &&
        !eo &&
        er.push(
            (0, r.jsx)(
                K,
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
                    m.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'new-member'
                )
            ),
            er.push(
                (0, r.jsx)(
                    g.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != W &&
            null != Q &&
            er.push(
                (0, r.jsx)(
                    _.Z,
                    {
                        guild: Q,
                        channel: W,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let el = [];
    (0, L.yE)(t.flags, B.iLy.SUPPRESS_NOTIFICATIONS) && el.push((0, r.jsx)(I.Z, {}, 'suppress-notifications'));
    let eu = {};
    (eu[M.a.SYSTEM_TAG] = en), (eu[M.a.BADGES] = er);
    let ec = H(e, z, eu),
        ed = (0, P.XX)(t, b),
        ef = (0, P.Dv)(t),
        e_ = k ? ''.concat(ed) : ''.concat(ed, ' ').concat(ef),
        eh = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, P.Gq)(t) : void 0;
    return (0, r.jsx)(Y, {
        message: t,
        avatar: $,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                J &&
                    (0, r.jsx)(u.Tooltip, {
                        text: Z.intl.string(Z.t.AeYyLy),
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: a ? F.compactCommunicationDisabled : F.communicationDisabled
                                    }),
                                    (0, r.jsx)(u.HiddenVisually, { children: Z.intl.string(Z.t.AmHag4) })
                                ]
                            })
                    }),
                ec
            ]
        }),
        usernameSpanId: (0, P.XX)(t, b),
        usernameClassName: s()(F.headerText, {
            [F.hasRoleIcon]: null != et,
            [F.hasBadges]: null != en || el.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== k,
        showTimestampOnHover: E,
        ariaLabelledBy: e_,
        ariaDescribedBy: eh,
        className: V,
        badges: el
    });
}
