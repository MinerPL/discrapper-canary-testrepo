n.d(t, {
    PZ: function () {
        return K;
    },
    Qj: function () {
        return Q;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(512722), o = n.n(s), c = n(613828), u = n(91192), d = n(873546), h = n(442837), p = n(481060), _ = n(493683), f = n(239091), m = n(420660), g = n(702321), C = n(201895), I = n(43267), E = n(933557), N = n(979264), x = n(853856), S = n(93687), Z = n(785232), v = n(280234), T = n(509275), L = n(878857), A = n(204197), b = n(199902), M = n(158776), R = n(306680), y = n(111583), O = n(9156), P = n(594174), j = n(467679), D = n(514342), U = n(28718), G = n(733880), w = n(709054), k = n(998502), B = n(788307), V = n(960670), H = n(981631), F = n(689938), W = n(608418);
let Y = k.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar, z = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    }, K = e => (0, i.jsx)(p.Clickable, {
        className: W.closeButton,
        ...e,
        focusProps: {
            offset: {
                top: -2,
                bottom: -2,
                left: -2,
                right: 6
            }
        },
        children: (0, i.jsx)(p.CloseSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: W.closeIcon
        })
    }), q = () => (0, i.jsx)(p.StarIcon, {
        size: 'xs',
        color: 'currentColor',
        className: W.favoriteIcon
    });
class Q extends l.Component {
    render() {
        let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: l,
            interactiveClassName: r,
            text: s,
            children: o,
            locationState: u,
            onClick: h,
            className: _,
            role: f,
            'aria-posinset': m,
            'aria-setsize': g,
            ...C
        } = this.props;
        return (0, i.jsx)(G.Z, {
            className: a()(W.channel, { [W.fullWidth]: d.tq }, _),
            onClick: h,
            role: f,
            focusProps: {
                within: !0,
                ...z
            },
            'aria-posinset': m,
            'aria-setsize': g,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: a()(r, W.interactive, W.linkButton, { [W.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: u
                    },
                    className: W.link,
                    ...C,
                    children: [
                        (0, i.jsx)(U.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: a()(W.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: W.avatarWithText
                        }),
                        o
                    ]
                })
            })
        });
    }
}
function J(e) {
    let {
            channel: t,
            isGDMFacepileEnabled: r,
            selected: s = !1,
            user: d,
            activities: S,
            applicationStream: b,
            isTyping: M,
            status: y,
            isMobile: P,
            lastOnlineTimestamp: w,
            'aria-posinset': k,
            'aria-setsize': Q
        } = e, [J, X] = l.useState(!1), $ = l.useRef(null), ee = l.useRef(null), {
            avatarSrc: et,
            avatarDecorationSrc: en,
            eventHandlers: ei
        } = (0, A.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(s || J)
        }), el = (0, h.e7)([O.ZP], () => O.ZP.isChannelMuted(t.getGuildId(), t.id)), er = (0, h.e7)([R.ZP], () => R.ZP.getMentionCount(t.id) > 0), ea = (0, E.ZP)(t), es = (0, h.e7)([x.Z], () => x.Z.isFavorite(t.id)), eo = null != S && S.length > 0, {
            isRecentlyOnlineShowable: ec,
            isRecentlyOnlineTrackable: eu
        } = (0, v.$)(w), ed = !eo && y === H.Skl.OFFLINE && null != w;
    l.useEffect(() => {
        eu && ed && v.Z.trackExposure({ location: 'private_channel' });
    }, [
        eu,
        ed
    ]);
    let eh = () => {
            X(!0);
        }, ep = () => {
            X(!1);
        }, e_ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), _.Z.closePrivateChannel(t.id, s, n);
        }, ef = () => {
            _.Z.preload(H.ME, t.id);
        }, em = e => {
            e.stopPropagation();
        }, eg = e => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = $.current) || void 0 === t || t.click();
            }
        }, eC = e => {
            t.isMultiUserDM() ? (0, f.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('25421')
                ]).then(n.bind(n, 354741));
                return n => (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    selected: s
                });
            }, { noBlurEvent: !0 }) : (0, f.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('56826'),
                    n.e('4562')
                ]).then(n.bind(n, 131404));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: d,
                    channel: t,
                    channelSelected: s
                });
            });
        }, eI = e => {
            e.preventDefault(), e.stopPropagation();
            let n = F.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name }), l = F.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name });
            t.isManaged() && (n = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name }), l = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name })), (0, p.openModal)(e => (0, i.jsx)(V.Z, {
                header: n,
                body: l,
                onSubmit: e_,
                ...e
            }));
        }, eE = () => {
            let e = {
                className: W.activity,
                textClassName: W.activityText,
                emojiClassName: W.activityEmoji
            };
            if (t.isSystemDM())
                return (0, i.jsx)('div', {
                    className: W.subtext,
                    children: (0, g.Z)(t.id) ? F.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : F.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
                });
            if (t.isMultiUserDM())
                return (0, i.jsx)('div', {
                    className: W.subtext,
                    children: F.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
                });
            if (eo)
                return (0, i.jsx)(B.Z, {
                    ...e,
                    activities: S,
                    applicationStream: b,
                    animate: J,
                    hideTooltip: !0,
                    user: d
                });
            if (ed && ec) {
                let e = (0, T.H)(w);
                return (0, i.jsx)('div', {
                    className: W.subtext,
                    children: e
                });
            }
            return null;
        }, eN = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
                return t.recipients.length >= 2 && r && null == t.icon ? (0, i.jsx)(Z.Z, {
                    'aria-hidden': !0,
                    recipients: t.recipients,
                    size: e,
                    isTyping: M,
                    status: y
                }) : (0, i.jsx)(Y, {
                    ...ei,
                    src: (0, I.x)(t),
                    'aria-hidden': !0,
                    size: e,
                    status: M ? H.Skl.ONLINE : y,
                    isTyping: M
                });
            o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return !d.isSystemUser() && (n = (0, m.Z)(S) ? H.Skl.STREAMING : y), (0, i.jsx)(Y, {
                ...ei,
                size: p.AvatarSizes.SIZE_32,
                src: et,
                avatarDecoration: en,
                status: n,
                isMobile: P,
                isTyping: M,
                'aria-label': d.username,
                statusTooltip: !0
            });
        }, ex = t.isMultiUserDM(), eS = t.isSystemDM(), eZ = (0, L.Q)(), ev = ex || eS || t.type !== H.d4z.DM || (null == d ? void 0 : d.clan) == null ? ea : (0, i.jsxs)(i.Fragment, {
            children: [
                ea,
                (0, i.jsx)(N.ZP, {
                    clan: null == d ? void 0 : d.clan,
                    userId: null == d ? void 0 : d.id,
                    inline: !0,
                    disableGuildProfile: !0,
                    className: W.clanTag
                })
            ]
        });
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: e => {
            let {
                role: n,
                ...l
            } = e;
            return (0, i.jsx)(G.Z, {
                className: W.channel,
                role: n,
                focusProps: {
                    ...z,
                    focusTarget: $,
                    ringTarget: ee
                },
                ref: ee,
                onMouseEnter: eh,
                onMouseLeave: ep,
                onMouseDown: ef,
                onContextMenu: eC,
                'aria-setsize': Q,
                'aria-posinset': k,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(W.interactive, {
                        [W.interactiveSystemDM]: eZ && eS,
                        [W.interactiveSelected]: s
                    }),
                    as: 'div',
                    onClick: eg,
                    muted: el,
                    selected: s,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: $,
                            to: H.Z5c.CHANNEL(H.ME, t.id),
                            className: W.link,
                            'aria-label': (0, C.ZP)({
                                channel: t,
                                unread: er
                            }),
                            ...l,
                            children: (0, i.jsx)(U.Z, {
                                avatar: eN(),
                                selected: s,
                                highlighted: er,
                                muted: null != el && el,
                                subText: eE(),
                                name: (0, i.jsx)(D.Z, {
                                    tooltipClassName: W.overflowTooltip,
                                    children: ev
                                }),
                                decorators: t.isSystemDM() ? (0, i.jsx)(j.Z, {
                                    className: W.decorator,
                                    type: j.Z.Types.SYSTEM_DM,
                                    verified: !0
                                }) : null
                            })
                        }),
                        es ? (0, i.jsx)(q, {}) : null,
                        (0, i.jsx)(K, {
                            'aria-label': ex ? F.Z.Messages.LEAVE_GROUP_DM : F.Z.Messages.CLOSE_DM,
                            onClick: ex ? eI : e_,
                            onMouseDown: em
                        })
                    ]
                })
            });
        }
    });
}
t.ZP = e => {
    let {
            channel: t,
            selected: n,
            ...l
        } = e, r = (0, h.e7)([P.default], () => P.default.getUser(t.getRecipientId())), {
            isStatusIndicatorEnabled: a,
            isTypingIndicatorEnabled: s,
            isFacepileEnabled: o
        } = S.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }), {isRecentlyOnlineEnabled: c} = v.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !1 }), u = null == r ? void 0 : r.id, d = (0, h.cj)([
            M.Z,
            b.Z
        ], () => {
            let e, n;
            if (t.isMultiUserDM()) {
                if (a) {
                    let n = M.Z.getState().statuses;
                    t.recipients.some(e => n[e] === H.Skl.ONLINE) && (e = H.Skl.ONLINE);
                }
            } else
                null != u && (e = M.Z.getStatus(u), n = M.Z.getLastOnlineTimestamp(u));
            return {
                status: e,
                lastOnlineTimestamp: n,
                activities: null != u ? M.Z.getActivities(u) : null,
                applicationStream: null != u ? b.Z.getAnyStreamForUser(u) : null,
                isMobile: null != u && M.Z.isMobileOnline(u),
                isRecentlyOnlineEnabled: c
            };
        }, [
            t,
            u,
            a,
            c
        ]), p = (0, h.e7)([
            P.default,
            y.Z
        ], () => {
            if (t.isMultiUserDM())
                return !!s && w.default.keys(y.Z.getTypingUsers(t.id)).some(e => {
                    var t;
                    return e !== (null === (t = P.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                });
            if (null != r)
                return y.Z.isTyping(t.id, t.getRecipientId());
            return !1;
        }, [
            t,
            r,
            s
        ]);
    return t.isMultiUserDM() ? (0, i.jsx)(J, {
        channel: t,
        selected: n,
        isTyping: p,
        status: d.status === H.Skl.ONLINE ? H.Skl.ONLINE : void 0,
        isGDMFacepileEnabled: o,
        ...l
    }) : (0, i.jsx)(J, {
        channel: t,
        selected: n,
        user: r,
        isTyping: p,
        ...l,
        ...d
    });
};
