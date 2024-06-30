n.d(t, {
    Z: function () {
        return k;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(410575), l = n(727637), u = n(980591), c = n(58540), d = n(603113), _ = n(420660), E = n(100527), f = n(906732), h = n(812206), p = n(835473), m = n(199902), I = n(271383), T = n(430824), g = n(158776), S = n(699516), A = n(626135), N = n(785717), v = n(621853), O = n(505737), R = n(318661), C = n(502762), y = n(192133), D = n(240328), L = n(436478), b = n(131640), M = n(664202), P = n(228168), U = n(981631), w = n(616922), x = n(530086);
function G(e) {
    e.stopPropagation();
}
function k(e) {
    let {
            user: t,
            guildId: n,
            channelId: k,
            messageId: B,
            roleId: F,
            setNote: V,
            closePopout: H,
            setPopoutRef: Z,
            disableUserProfileLink: Y = __OVERLAY__,
            analyticsParams: j = {},
            newAnalyticsLocations: W = []
        } = e, {analyticsLocations: K} = (0, f.ZP)([
            ...W,
            E.Z.PROFILE_POPOUT
        ]), z = i.useRef(null), q = (0, R.ZP)(t.id, n), Q = (0, l.Z)(z), X = (0, a.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }), $ = (0, a.e7)([T.Z], () => null != n ? T.Z.getGuild(n) : null), J = (0, a.e7)([I.ZP], () => null != n ? I.ZP.getMember(n, t.id) : null), ee = t.isNonUserBot(), {
            activity: et,
            customStatusActivity: en,
            status: er,
            isMobile: ei,
            isApplicationStreaming: ea
        } = (0, a.cj)([
            m.Z,
            g.Z
        ], () => {
            let e = null != m.Z.getAnyStreamForUser(t.id);
            return {
                activity: g.Z.findActivity(t.id, t => {
                    let {type: n} = t;
                    return e ? n === U.IIU.PLAYING : n !== U.IIU.CUSTOM_STATUS;
                }),
                customStatusActivity: g.Z.findActivity(t.id, e => {
                    let {type: t} = e;
                    return t === U.IIU.CUSTOM_STATUS;
                }),
                status: ee ? null : g.Z.getStatus(t.id),
                isMobile: g.Z.isMobileOnline(t.id),
                isApplicationStreaming: e
            };
        }), [eo, es] = i.useState(!1), el = i.useMemo(() => null != n ? { [n]: [t.id] } : {}, [
            n,
            t.id
        ]);
    (0, c.$)(el);
    let eu = (0, O.Z)(t.id, n), ec = (0, M.J)({
            popoutUser: t,
            source: L.m.USER_POPOUT,
            guildId: n
        }), [ed, e_] = i.useState(!1);
    (0, u.Z)(() => e_(!0), ec.shouldShow ? 250 : null);
    let eE = (0, p.q)(null == et ? void 0 : et.application_id);
    return i.useEffect(() => {
        null == Z || Z(null == z ? void 0 : z.current);
    }, [
        z,
        Z
    ]), i.useEffect(() => {
        if (!eo) {
            if ((null == et ? void 0 : et.application_id) == null || null != eE)
                (null == n || (null == J ? void 0 : J.fullProfileLoadedTimestamp) != null) && (function () {
                    var e;
                    let r, i, a;
                    null != et && (r = et.party, i = et.assets, a = null != et.application_id ? h.Z.getApplication(et.application_id) : null);
                    let o = er;
                    er === U.Skl.ONLINE && (o = ei ? U.j28.ONLINE_MOBILE : U.j28.ONLINE_DESKTOP);
                    let s = null != J ? {
                            has_nickname: !!(null == J ? void 0 : J.nick),
                            has_guild_member_avatar: !!(null == J ? void 0 : J.avatar),
                            has_guild_member_banner: !!(null == q ? void 0 : q.isUsingGuildMemberBanner()),
                            has_guild_member_bio: !!(null == q ? void 0 : q.isUsingGuildMemberBio())
                        } : {}, l = null != X ? {
                            other_application_id: null == X ? void 0 : X.id,
                            other_application_name: t.toString()
                        } : {};
                    A.default.track(U.rMx.OPEN_POPOUT, {
                        type: 'Profile Popout',
                        guild_id: n,
                        channel_id: k,
                        other_user_id: t.id,
                        application_id: null != et ? et.application_id : void 0,
                        application_name: null != et ? et.name : void 0,
                        sku_id: null != a ? a.primarySkuId : null,
                        is_friend: S.Z.isFriend(t.id),
                        has_images: !!(null !== (e = null == i ? void 0 : i.large_image) && void 0 !== e ? e : null == i ? void 0 : i.small_image),
                        party_max: null != r && null != r.size ? r.size[1] : void 0,
                        party_id: null != r ? r.id : void 0,
                        party_platform: null != r && (0, w.Ps)(r.id) ? U.ABu.SPOTIFY : null,
                        game_platform: (0, d.Z)(et),
                        profile_user_status: o,
                        is_streaming: ea,
                        has_custom_status: null != en,
                        has_avatar_decoration: null != t.avatarDecoration,
                        has_profile_effect: (null == q ? void 0 : q.profileEffectId) != null,
                        profile_has_nitro_customization: null != q && (null == q ? void 0 : q.hasPremiumCustomization()),
                        profile_has_theme_color_customized: null != q && q.hasThemeColors(),
                        profile_has_theme_animation: (null == q ? void 0 : q.popoutAnimationParticleType) != null,
                        ...s,
                        ...l,
                        ...j
                    });
                }(), es(!0));
        }
    }, [
        J,
        null == et ? void 0 : et.application_id,
        eE,
        eo,
        n
    ]), (0, r.jsx)(f.Gt, {
        value: K,
        children: (0, r.jsx)(N.Mt, {
            layout: 'POPOUT',
            userId: t.id,
            guildId: n,
            channelId: k,
            messageId: B,
            roleId: F,
            shouldTrackViewOnMount: null == J || null != J.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(s.Z, {
                section: U.jXE.PROFILE_POPOUT,
                children: (0, r.jsx)(o.Dialog, {
                    ref: z,
                    'aria-label': t.username,
                    onClick: G,
                    onContextMenu: G,
                    style: ec.shouldShow ? { marginTop: D.Ao } : void 0,
                    children: (0, r.jsxs)(C.Z, {
                        user: t,
                        displayProfile: q,
                        profileType: P.y0.POPOUT,
                        className: ec.shouldShow ? x.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: ed,
                        children: [
                            (0, r.jsx)(b.ZP, {
                                user: t,
                                displayProfile: q,
                                guildId: n,
                                channelId: k,
                                onClose: () => null == H ? void 0 : H(),
                                isMobile: ei,
                                isStreaming: (0, _.Z)(et),
                                status: er,
                                disableUserProfileLink: Y,
                                isHovering: Q,
                                upsell: ec.shouldShow ? (0, r.jsx)(D.ZP, {
                                    user: t,
                                    upsellSource: L.m.USER_POPOUT,
                                    displayProfile: q,
                                    onClose: H,
                                    ...ec
                                }) : void 0
                            }),
                            (0, r.jsx)(C.Z.Overlay, {
                                children: (0, r.jsx)(y.Z, {
                                    activity: et,
                                    customStatusActivity: en,
                                    displayProfile: q,
                                    user: t,
                                    guild: $,
                                    guildMember: J,
                                    channelId: k,
                                    onClose: H,
                                    setNote: V,
                                    canDM: eu,
                                    analyticsParams: j
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
