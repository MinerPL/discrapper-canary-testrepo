n.d(t, {
    CF: function () {
        return V;
    },
    ZP: function () {
        return j;
    },
    nD: function () {
        return H;
    }
}), n(47120), n(653041), n(789020);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(873546), l = n(442837), u = n(481060), c = n(100527), d = n(906732), _ = n(366030), E = n(71619), f = n(340797), h = n(276554), p = n(453687), m = n(304176), I = n(98278), T = n(869765), g = n(243317), S = n(621853), A = n(484459), N = n(204197), v = n(740492), O = n(430824), R = n(496675), C = n(594174), y = n(176278), D = n(768581), L = n(585483), b = n(630388), M = n(74538), P = n(534761), U = n(307187), w = n(750858), x = n(981631), G = n(689938), k = n(250050), B = n(255963);
function F(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: a,
        onContextMenu: s,
        onMouseDown: l,
        onMouseEnter: u,
        onMouseLeave: c,
        onKeyDown: d,
        showCommunicationDisabledStyles: _ = !1,
        className: E
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                onClick: a,
                onContextMenu: s,
                onMouseDown: l,
                onKeyDown: d,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                'aria-hidden': !0,
                className: o()(E, k.avatar, {
                    [k.compact]: i,
                    [k.clickable]: null != a,
                    [k.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == n || i ? null : (0, r.jsx)('img', {
                className: k.avatarDecoration,
                src: n,
                alt: ' ',
                'aria-hidden': !0
            })
        ]
    });
}
function V(e, t, n) {
    let {
        message: i,
        channel: a,
        author: o,
        compact: s = !1,
        onContextMenu: l,
        showUsernamePopout: u,
        roleIcon: c,
        onClickUsername: d,
        onPopoutRequestClose: _
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.Z, {
                message: i,
                channel: a,
                author: o,
                compact: s,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: _,
                decorations: n,
                renderRemixTag: !0
            }),
            s && (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('i', {
                        className: k.separator,
                        children: ':'
                    }),
                    ' '
                ]
            })
        ]
    });
}
function H(e) {
    let {
        message: t,
        avatar: n,
        username: i,
        usernameSpanId: a,
        usernameClassName: s,
        compact: l,
        showTimestamp: c,
        showTimestampOnHover: d,
        ariaLabelledBy: _,
        ariaDescribedBy: E,
        className: f,
        messageClassname: h,
        badges: m
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(u.H, {
                className: o()(k.header, f),
                'aria-describedby': E,
                'aria-labelledby': _,
                children: [
                    c && l && (0, r.jsx)(P.Z, {
                        id: (0, p.Dv)(t),
                        compact: !0,
                        timestamp: t.timestamp,
                        isVisibleOnlyOnHover: d,
                        className: h,
                        isInline: !1
                    }),
                    l && n,
                    (0, r.jsx)('span', {
                        id: a,
                        className: s,
                        children: i
                    }),
                    c && !l && (0, r.jsx)(P.Z, {
                        id: (0, p.Dv)(t),
                        timestamp: t.timestamp,
                        className: h
                    }),
                    null != m && m.length > 0 ? (0, r.jsx)('div', {
                        className: k.badgesContainer,
                        children: m
                    }) : null
                ]
            })
        ]
    });
}
let Z = e => {
    !e && (0, I.z)();
};
function Y(e) {
    let {
            currentUserIsPremium: t,
            author: n
        } = e, i = (0, l.e7)([S.Z], () => {
            var e;
            return null === (e = S.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(u.Tooltip, {
        tooltipClassName: k.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: G.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
        onTooltipShow: () => (0, A.Z)(n.id),
        children: e => (0, r.jsx)(u.Clickable, {
            className: k.nitroAuthorBadgeContainer,
            onClick: () => Z(t),
            'aria-label': G.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
            children: (0, r.jsx)('img', {
                alt: '',
                className: k.nitroBadgeSvg,
                src: B,
                ...e
            })
        })
    });
}
function j(e) {
    let {
            message: t,
            repliedMessage: n,
            compact: a = !1,
            renderPopout: I,
            showTimestampOnHover: S,
            roleIcon: P,
            subscribeToGroupId: B,
            hideTimestamp: Z,
            className: j,
            channel: W
        } = e, K = i.useMemo(() => null != I ? e => I(e, t) : void 0, [
            I,
            t
        ]), [, z] = (0, E.ZP)(t.author.id, e.guildId), q = (0, l.e7)([O.Z], () => O.Z.getGuild(e.guildId), [e.guildId]), Q = null != t.author && null != q && R.Z.canManageUser(x.Plq.MODERATE_MEMBERS, t.author, q), X = z && Q, $ = function (e) {
            var t, n;
            let {
                    props: a,
                    guildId: o,
                    handleRenderPopout: _,
                    showCommunicationDisabledStyles: E = !1,
                    className: f
                } = e, {
                    message: h,
                    author: p,
                    compact: m = !1,
                    subscribeToGroupId: I,
                    animate: T = !0,
                    onContextMenu: g,
                    onClickAvatar: S,
                    onPopoutRequestClose: O,
                    showAvatarPopout: R
                } = a, [C, y] = i.useState(!1), {analyticsLocations: b} = (0, d.ZP)(c.Z.AVATAR), M = (0, l.e7)([v.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : v.ZP.displayCompactAvatars;
                }), P = null != h.messageReference && null != h.webhookId && h.hasFlag(x.iLy.IS_CROSSPOST), U = h.author, {id: w} = U, G = m ? 32 : 80, {
                    avatarSrc: k,
                    avatarDecorationSrc: B,
                    eventHandlers: V
                } = (0, N.Z)({
                    user: U,
                    guildId: o,
                    size: G,
                    animateOnHover: null != I ? !C : !T,
                    showPending: !0
                }), H = h.isInteractionPlaceholder(), Z = i.useMemo(() => {
                    var e, t;
                    return H && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = D.ZP.getApplicationIconURL({
                        id: h.application.id,
                        icon: h.application.icon,
                        size: G,
                        fallbackAvatar: !1
                    })) && void 0 !== t ? t : k : k;
                }, [
                    H,
                    null === (t = h.application) || void 0 === t ? void 0 : t.icon,
                    null === (n = h.application) || void 0 === n ? void 0 : n.id,
                    U.avatar,
                    G,
                    k
                ]);
            return (i.useEffect(() => {
                if (null != I)
                    return L.S.subscribeKeyed(x.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y), () => void L.S.unsubscribeKeyed(x.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y);
            }, [
                w,
                I
            ]), m && !M) ? void 0 : null != _ && null != R ? (0, r.jsx)(d.Gt, {
                value: b,
                children: (0, r.jsx)(u.Popout, {
                    preload: P ? void 0 : function () {
                        return (0, A.W)(h.author.id, null != p.guildMemberAvatar && null != o ? D.ZP.getGuildMemberAvatarURLSimple({
                            guildId: o,
                            userId: h.author.id,
                            avatar: p.guildMemberAvatar,
                            size: 80
                        }) : h.author.getAvatarURL(void 0, 80, !1), {
                            guildId: o,
                            channelId: h.channel_id
                        });
                    },
                    renderPopout: _,
                    shouldShow: R,
                    position: s.tq ? 'window_center' : 'right',
                    onRequestClose: O,
                    children: e => F({
                        ...V,
                        avatarSrc: Z,
                        avatarDecorationSrc: B,
                        compact: m,
                        onClick: S,
                        onContextMenu: g,
                        onMouseDown: e.onMouseDown,
                        onKeyDown: e.onKeyDown,
                        showCommunicationDisabledStyles: E,
                        className: f
                    })
                })
            }) : (0, r.jsx)(d.Gt, {
                value: b,
                children: F({
                    ...V,
                    avatarSrc: Z,
                    avatarDecorationSrc: B,
                    compact: m,
                    onClick: S,
                    onContextMenu: g,
                    onMouseDown: void 0,
                    onKeyDown: void 0,
                    showCommunicationDisabledStyles: E,
                    className: f
                })
            });
        }({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: K,
            showCommunicationDisabledStyles: X
        }), J = (0, l.e7)([v.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : v.ZP.displayCompactAvatars;
        }), ee = (!a || J) && null != P && null != q ? (0, r.jsx)(u.Popout, {
            animation: u.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: () => (0, r.jsx)(m.Z, {
                roleIcon: P,
                guild: q
            }),
            children: e => {
                let {onClick: t} = e;
                return (0, r.jsx)(y.Z, {
                    ...P,
                    className: k.roleIcon,
                    onClick: t
                });
            }
        }, 'role-icon-children') : (!a || J) && null != P ? (0, r.jsx)(y.Z, {
            ...P,
            className: k.roleIcon
        }, 'role-icon-children') : null, et = (0, U.x)({
            message: t,
            channel: W,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }), en = [], er = C.default.getCurrentUser(), ei = M.ZP.isPremium(t.author), ea = M.ZP.isPremium(er), eo = null == W ? void 0 : W.isPrivate();
    (0, h.R)(null != P, 'Message Username') && ei && !a && !eo && en.push((0, r.jsx)(Y, {
        currentUserIsPremium: ea,
        author: t.author
    }, 'nitro-author')), null != ee && en.push(ee), null != q && en.push((0, r.jsx)(f.Z, {
        guild: q,
        message: t
    }, 'new-member')), null != W && null != q && en.push((0, r.jsx)(_.Z, {
        guild: q,
        channel: W,
        userId: t.author.id,
        messageId: t.id
    }, 'connections'));
    let es = [];
    (0, b.yE)(t.flags, x.iLy.SUPPRESS_NOTIFICATIONS) && es.push((0, r.jsx)(g.Z, {}, 'suppress-notifications'));
    let el = {};
    el[w.a.SYSTEM_TAG] = et, el[w.a.BADGES] = en;
    let eu = V(e, K, el), ec = (0, p.XX)(t, B), ed = (0, p.Dv)(t), e_ = Z ? ''.concat(ec) : ''.concat(ec, ' ').concat(ed), eE = (null == n ? void 0 : n.state) === T.Y.LOADED ? (0, p.Gq)(t) : void 0;
    return (0, r.jsx)(H, {
        message: t,
        avatar: $,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                X && (0, r.jsx)(u.Tooltip, {
                    text: G.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                    children: e => (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.ClockWarningIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                ...e,
                                className: a ? k.compactCommunicationDisabled : k.communicationDisabled
                            }),
                            (0, r.jsx)(u.HiddenVisually, { children: G.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
                        ]
                    })
                }),
                eu
            ]
        }),
        usernameSpanId: (0, p.XX)(t, B),
        usernameClassName: o()(k.headerText, {
            [k.hasRoleIcon]: null != ee,
            [k.hasBadges]: null != et || es.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== Z,
        showTimestampOnHover: S,
        ariaLabelledBy: e_,
        ariaDescribedBy: eE,
        className: j,
        badges: es
    });
}
