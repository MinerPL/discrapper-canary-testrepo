var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(37234),
    o = n(710845),
    l = n(408987),
    u = n(962086),
    c = n(160404),
    d = n(41776),
    _ = n(6025),
    E = n(314897),
    f = n(271383),
    h = n(430824),
    p = n(546796),
    I = n(573261),
    m = n(999382),
    T = n(981631),
    S = n(308083),
    g = n(689938);
let A = new o.Z('GuildSettingsActionCreators'),
    N = {
        init(e, t, n, r) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: t,
                subsection: r,
                location: n
            });
        },
        async open(e, t, r, i) {
            var a;
            await Promise.all([n.e('96427'), n.e('23755'), n.e('89350'), n.e('11751'), n.e('33053'), n.e('37581'), n.e('65840'), n.e('7654'), n.e('90508'), n.e('18146'), n.e('44156'), n.e('14203'), n.e('85552'), n.e('98926'), n.e('58227'), n.e('1187'), n.e('75531'), n.e('92557'), n.e('64679'), n.e('23693'), n.e('87713'), n.e('81463')]).then(n.bind(n, 994763)), (null === (a = h.Z.getGuild(e)) || void 0 === a ? void 0 : a.hasFeature(T.oNc.COMMUNITY)) && (t === T.pNK.GUILD_AUTOMOD && ((t = T.pNK.SAFETY), (i = T.KsC.SAFETY_AUTOMOD)), t === T.pNK.MEMBER_VERIFICATION && ((t = T.pNK.SAFETY), (i = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), N.init(e, t, r, i);
            _.Z.closeGuildSidebar(e), (0, s.jN)(T.S9g.GUILD_SETTINGS);
        },
        close() {
            a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
        },
        saveRouteStack(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
                state: e
            });
        },
        setSection(e, t) {
            var n;
            let r = m.Z.getGuildId();
            null != r &&
                ((null === (n = h.Z.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(T.oNc.COMMUNITY)) && (e === T.pNK.GUILD_AUTOMOD && ((e = T.pNK.SAFETY), (t = T.KsC.SAFETY_AUTOMOD)), e === T.pNK.MEMBER_VERIFICATION && ((e = T.pNK.SAFETY), (t = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_SECTION',
                    section: e,
                    subsection: t
                }));
        },
        setSearchQuery(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
                searchQuery: e
            });
        },
        selectRole: (e, t) =>
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_ROLE_SELECT',
                roleId: e,
                searchQuery: t
            }),
        updateEmbed(e, t, n) {
            i.tn
                .patch({
                    url: T.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                })
                .then((t) => {
                    a.Z.dispatch({
                        type: 'GUILD_SETTINGS_SET_WIDGET',
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    });
                });
        },
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: r } = e;
            return (0, p.Z)(
                (e) =>
                    i.tn.post({
                        url: T.ANM.GUILD_MFA(t),
                        body: {
                            level: n,
                            ...e
                        },
                        oldFormErrors: !0
                    }),
                {
                    modalProps: {
                        title: g.Z.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                        actionText: r ? g.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : g.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                    },
                    checkEnabled: !1
                }
            ).then((e) =>
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
                    level: e.body.level
                })
            );
        },
        updateIcon(e, t) {
            i.tn
                .patch({
                    url: T.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0
                })
                .then(
                    () => {
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_UPDATE',
                            icon: t
                        }),
                            l.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                            errors: e.body
                        })
                );
        },
        cancelChanges(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_CANCEL_CHANGES',
                guildId: e
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, clan: n, ...r } = e,
                i = { ...r };
            if (null != n) {
                var s;
                i.clan = {
                    ...(null !== (s = i.clan) && void 0 !== s ? s : {}),
                    ...n
                };
            }
            null != m.Z.getGuildId() && null != t && (i.safetyAlertsChannelId = t),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_UPDATE',
                    ...i
                });
        },
        saveGuild(e, t) {
            let { name: n, description: r, icon: s, splash: o, banner: u, homeHeader: c, afkChannelId: d, afkTimeout: _, systemChannelId: E, verificationLevel: f, defaultMessageNotifications: h, explicitContentFilter: p, features: I, systemChannelFlags: m, preferredLocale: g, rulesChannelId: N, safetyAlertsChannelId: O, discoverySplash: R, publicUpdatesChannelId: v, premiumProgressBarEnabled: C, clan: y } = t,
                L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = {
                    name: n,
                    description: r,
                    icon: s,
                    splash: o,
                    banner: u,
                    home_header: c,
                    features: I,
                    preferred_locale: g,
                    afk_channel_id: d,
                    afk_timeout: _,
                    system_channel_id: E,
                    verification_level: f,
                    default_message_notifications: h,
                    explicit_content_filter: p,
                    system_channel_flags: m,
                    rules_channel_id: N,
                    discovery_splash: R,
                    public_updates_channel_id: v,
                    safety_alerts_channel_id: O,
                    ...(null != C ? { premium_progress_bar_enabled: C } : null),
                    clan: null != y ? (0, S.A9)(y) : y
                };
            return (
                a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                i.tn
                    .patch({
                        url: T.ANM.GUILD(e),
                        query: { for_discovery: L.isForDiscovery },
                        body: D,
                        oldFormErrors: !0
                    })
                    .then(
                        (t) => {
                            a.Z.dispatch({
                                type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
                                guild: t.body
                            }),
                                l.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (a.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                A.error('Failed to save guild settings', { errors: e.body }),
                                L.throwErr)
                            )
                                throw e.body;
                        }
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            i.tn
                .patch({
                    url: T.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter
                    },
                    oldFormErrors: !0
                })
                .then((t) => (l.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, p.Z)(
                (a) =>
                    I.Z.patch({
                        url: T.ANM.GUILD(e),
                        body: {
                            owner_id: t,
                            code: i,
                            ...a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: n
                            }
                        }
                    }),
                {
                    modalProps: {
                        title: g.Z.Messages.TRANSFER_OWNERSHIP,
                        actionText: g.Z.Messages.TRANSFER_OWNERSHIP
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return I.Z.put({
                url: T.ANM.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: {
                        guild_id: e,
                        is_resend: t
                    }
                }
            });
        },
        deleteGuild: (e, t) =>
            (0, p.Z)(
                (t) =>
                    i.tn.post({
                        url: T.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0
                    }),
                {
                    modalProps: {
                        title: g.Z.Messages.DELETE_SERVER_TITLE.format({ name: t }),
                        actionText: g.Z.Messages.DELETE_SERVER,
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                N.close();
            }),
        async leaveGuild(e) {
            await i.tn.del({
                url: T.ANM.GUILD_LEAVE(e),
                body: { lurking: d.Z.isLurking(e) || f.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0
            }),
                N.close();
        },
        async updateMemberRoles(e, t, n, r, s) {
            if (c.Z.isFullServerPreview(e) && t === E.default.getId()) {
                (0, u.og)(e, n);
                return;
            }
            await i.tn.patch({
                url: T.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0
            }),
                r.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                ),
                s.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_REMOVE',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            i.tn
                .patch({
                    url: T.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n }
                })
                .then((n) => {
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_BULK_ADD',
                        guildId: e,
                        roleId: t,
                        added: n.body
                    });
                }),
        enableIntegration: (e, t, n) =>
            i.tn.post({
                url: T.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: T.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0
            }),
        updateIntegration: (e, t, n, r, a) =>
            i.tn.patch({
                url: T.ANM.GUILD_INTEGRATION(e, t),
                body: {
                    expire_behavior: n,
                    expire_grace_period: r,
                    enable_emoticons: a
                },
                oldFormErrors: !0
            }),
        syncIntegration(e, t) {
            i.tn.post({
                url: T.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0
            });
        }
    };
t.Z = N;
