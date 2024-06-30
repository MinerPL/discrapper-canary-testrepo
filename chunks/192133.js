n.d(t, {
    Z: function () {
        return x;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(100527), c = n(580552), d = n(314897), _ = n(592125), E = n(246946), f = n(5192), h = n(51144), p = n(342656), m = n(621853), I = n(652853), T = n(421486), g = n(138394), S = n(790711), A = n(248345), N = n(337125), v = n(19836), O = n(207570), R = n(77097), C = n(538564), y = n(489642), D = n(319300), L = n(591600), b = n(579729), M = n(186395), P = n(584045), U = n(981631), w = n(841719);
function x(e) {
    var t, n, a;
    let {
            activity: x,
            customStatusActivity: G,
            user: k,
            displayProfile: B,
            guild: F,
            guildMember: V,
            channelId: H,
            onClose: Z,
            setNote: Y = !1,
            canDM: j,
            hideNote: W = !1,
            showCopiableUsername: K = !1,
            analyticsParams: z
        } = e, q = (0, s.e7)([E.Z], () => E.Z.hidePersonalInformation), Q = (0, s.e7)([m.Z], () => {
            var e;
            return null === (e = m.Z.getUserProfile(k.id)) || void 0 === e ? void 0 : e.application;
        }), X = (0, s.e7)([_.Z], () => _.Z.getChannel(H)), {theme: $} = (0, I.z)(), J = i.useRef(null), [ee, et] = i.useState(!0), en = i.useCallback(() => {
            let {current: e} = J;
            null != e && et(0 === e.getScrollerState().scrollTop);
        }, []);
    i.useLayoutEffect(() => {
        var e;
        let {current: t} = J;
        null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({ top: 0 }));
    }, []);
    let er = (0, s.e7)([d.default], () => d.default.getId()), ei = k.id === er, ea = k.bot || ei, {enabled: eo} = (0, p.qI)({
            autoTrackExposure: !0,
            location: u.Z.PROFILE_POPOUT,
            disable: ea
        });
    if ((0, c.Z)(k.id))
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(P.Z, {
                    className: w.usernameSection,
                    user: k,
                    nickname: h.ZP.getName(k),
                    pronouns: null
                }),
                (0, r.jsxs)(l.HeadingLevel, {
                    children: [
                        (0, r.jsx)(g.Z, { className: w.divider }),
                        (0, r.jsx)(l.AdvancedScroller, {
                            className: o()(w.scroller, { [w.scrollerSeparator]: !ee }),
                            onScroll: en,
                            ref: J,
                            children: (0, r.jsx)(v.Z, {
                                bio: null,
                                hidePersonalInformation: !1,
                                userId: k.id,
                                lastSection: !0
                            })
                        })
                    ]
                })
            ]
        });
    if (k.isSystemUser())
        return (0, r.jsx)(P.Z, {
            user: k,
            nickname: h.ZP.getName(k),
            pronouns: null,
            className: w.usernameSection,
            lastSection: !0
        });
    if (k.isNonUserBot())
        return (0, r.jsx)(P.Z, {
            user: k,
            nickname: null,
            pronouns: null,
            className: w.usernameSection,
            lastSection: !0
        });
    let es = null !== (t = f.ZP.getNickname(null == F ? void 0 : F.id, H, k)) && void 0 !== t ? t : h.ZP.getName(k), el = {
            location: {
                page: U.ZY5.USER_POPOUT,
                section: U.jXE.USER_PROFILE
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.Z, {
                className: w.usernameSection,
                user: k,
                nickname: es,
                pronouns: null == B ? void 0 : B.pronouns,
                usernameIcon: k.hasAvatarForGuild(null == F ? void 0 : F.id) && (0, r.jsx)(S.Z, {
                    user: k,
                    nickname: es
                }),
                shouldCopyOnClick: K
            }),
            (0, r.jsxs)(l.HeadingLevel, {
                children: [
                    (0, r.jsx)(C.Z, {
                        className: w.customStatusSection,
                        customStatusActivity: G
                    }),
                    (0, r.jsx)(g.Z, { className: w.divider }),
                    (0, r.jsxs)(l.AdvancedScroller, {
                        className: o()(w.scroller, { [w.scrollerSeparator]: !ee }),
                        onScroll: en,
                        ref: J,
                        children: [
                            (0, r.jsx)(O.Z, {
                                user: k,
                                guildId: null == F ? void 0 : F.id
                            }),
                            (0, r.jsx)(v.Z, {
                                isUsingGuildBio: null !== (n = null == B ? void 0 : B.isUsingGuildMemberBio()) && void 0 !== n && n,
                                bio: null == B ? void 0 : B.bio,
                                guild: F,
                                hidePersonalInformation: q
                            }),
                            eo && (0, r.jsx)(T.ZP, {
                                className: w.profileMutuals,
                                user: k,
                                onClose: Z
                            }),
                            (0, r.jsx)(D.Z, {
                                userId: k.id,
                                guildId: null == F ? void 0 : F.id
                            }),
                            (0, r.jsx)(A.Z, {
                                activity: x,
                                user: k,
                                guild: F,
                                channelId: H,
                                onClose: Z,
                                analyticsParams: (null == z ? void 0 : z.location) != null ? z : el
                            }),
                            (null == Q ? void 0 : Q.popularApplicationCommandIds) != null && null != X ? (0, r.jsx)(b.Z, {
                                applicationId: Q.id,
                                commandIds: Q.popularApplicationCommandIds,
                                channel: X,
                                guildId: null == F ? void 0 : F.id,
                                onClick: Z
                            }) : null,
                            (0, r.jsx)(N.Z, {
                                user: k,
                                guildId: null == F ? void 0 : F.id
                            }),
                            (0, r.jsx)(M.Z, {
                                user: k,
                                guild: F,
                                guildMember: V,
                                showBorder: null !== (a = null == B ? void 0 : B.canEditThemes) && void 0 !== a && a
                            }),
                            (0, r.jsx)(R.Z, {
                                userId: k.id,
                                channelId: H,
                                guild: F,
                                onClose: Z,
                                theme: $
                            }),
                            !q && !W && (0, r.jsx)(L.Z, {
                                user: k,
                                setNote: Y,
                                autoFocus: !j,
                                lastSection: !j
                            }),
                            !k.isNonUserBot() && j && (0, r.jsx)(y.Z, {
                                user: k,
                                setNote: Y,
                                canDM: j,
                                onClose: Z
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
