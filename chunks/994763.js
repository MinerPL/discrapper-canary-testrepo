n.r(t), n.d(t, {
    default: function () {
        return eQ;
    },
    getGuildSettingsSections: function () {
        return ez;
    }
});
var s = n(735250), a = n(470079), i = n(990547), r = n(442837), l = n(704215), o = n(481060), c = n(37234), d = n(503089), u = n(493544), _ = n(100527), E = n(367907), I = n(906732), T = n(132871), m = n(147890), N = n(353093), S = n(593128), h = n(979264), g = n(223892), C = n(738774), x = n(296386), p = n(605236), R = n(688465), f = n(826292), L = n(404228), O = n(676317), A = n(874993), M = n(745752), v = n(45966), D = n(637853), j = n(526120), Z = n(621923), b = n(352981), U = n(610403), G = n(923726), P = n(144507), B = n(303737), y = n(15030), F = n(220685), k = n(751189), w = n(409059), H = n(810788), V = n(918658), Y = n(210887), W = n(524329), z = n(575258), K = n(995532), q = n(276687), X = n(984933), Q = n(650774), J = n(496675), $ = n(594174), ee = n(725568), et = n(585483), en = n(771212), es = n(85001), ea = n(434404), ei = n(146596), er = n(559368), el = n(360606), eo = n(946724), ec = n(999382), ed = n(44550), eu = n(853714), e_ = n(359191), eE = n(84658), eI = n(142961), eT = n(730910), em = n(475013), eN = n(213956), eS = n(702478), eh = n(247031), eg = n(787561), eC = n(579648), ex = n(511480), ep = n(460461), eR = n(29605), ef = n(365307), eL = n(497666), eO = n(324330), eA = n(495300), eM = n(312397), ev = n(651780), eD = n(279542), ej = n(413335), eZ = n(665324), eb = n(208150), eU = n(353398), eG = n(365774), eP = n(803288), eB = n(804153), ey = n(981631), eF = n(308083), ek = n(190378), ew = n(135899), eH = n(689938), eV = n(770280);
function eY(e) {
    return '' !== e.toString() ? e.toString() : eH.Z.Messages.SERVER_SETTINGS;
}
function eW(e) {
    var t;
    let {
            guild: a,
            canManageGuild: r,
            canViewAuditLog: d,
            canViewAuditLogV2: _,
            canManageRoles: E,
            canManageGuildExpressions: I,
            canManageWebhooks: x,
            canManageBans: f,
            canAccessMembersPage: M,
            canViewGuildAnalytics: j,
            isOwner: k,
            isOwnerWithRequiredMfaLevel: w,
            showDirtyGuildTemplateIndicator: V,
            memberCount: Y,
            isGuildAuditLogV2Enabled: W,
            showAccessRate: K,
            onboardingStep: X,
            onboardingEnabled: Q,
            welcomeScreenEmpty: J,
            guildMetadata: en,
            section: ei,
            canAccessClanSettings: er
        } = e, eW = () => (0, P.X$)({
            guild: a,
            isOwner: k,
            canManageGuildRoleSubscriptions: (0, P.H2)(a),
            isMonetizationWaitlistEnabledForGuild: (0, g.mG)(a.id),
            isGuildEligibleForRoleSubscriptions: (0, G.kT)(a.id),
            isExpeditedMonetizationOnboardingGuild: (0, g.Rw)(a),
            isUserInCreatorMonetizationEligibleCountry: (0, g.DB)(),
            shouldRestrictUpdatingRoleSubscriptionSettings: (0, C.cu)(a.id)
        }), ez = (0, b.p)(a.id, 'guild_settings'), eK = !1 === a.hasFeature(ey.oNc.CREATOR_MONETIZABLE) && !1 === a.hasFeature(ey.oNc.CREATOR_MONETIZABLE_PROVISIONAL), eq = ez && eK ? {
            label: (0, s.jsx)('div', {
                className: eV.roleSubLabel,
                children: eH.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
            }),
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
        } : {
            label: (0, s.jsx)('div', {
                className: eV.roleSubLabel,
                children: eH.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
            }),
            ariaLabel: eH.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
        }, eX = (null === (t = a.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, N.ky)(a.id, a.clan.badge, eF.NC.SIZE_16) : null;
    return [
        {
            section: u.ID.HEADER,
            label: eY(a)
        },
        {
            section: ey.pNK.OVERVIEW,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: eH.Z.Messages.OVERVIEW,
            ariaLabel: eH.Z.Messages.OVERVIEW,
            element: eM.Z,
            notice: {
                stores: [ec.Z],
                element: eM.O
            }
        },
        {
            section: ey.pNK.ROLES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: eH.Z.Messages.ROLES,
            element: em.Z,
            type: u.bT.MINIMAL,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
            notice: {
                stores: [eo.Z],
                element: em._
            },
            predicate: () => E
        },
        {
            section: ey.pNK.EMOJI,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: eH.Z.Messages.EMOJI,
            element: eR.ZP,
            predicate: () => I
        },
        {
            section: ey.pNK.STICKERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_STICKERS,
            element: eb.Z,
            predicate: () => I
        },
        {
            section: ey.pNK.SOUNDBOARD,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            element: eZ.Z,
            predicate: () => I
        },
        {
            section: ey.pNK.WIDGET,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: eH.Z.Messages.WIDGET,
            element: eB.Z,
            predicate: () => r
        },
        {
            section: ey.pNK.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, s.jsx)(eG.Z, { showDirtyIndicator: V }),
            ariaLabel: eH.Z.Messages.GUILD_TEMPLATES,
            element: eU.ZP,
            notice: {
                stores: [eU.Sf],
                element: eU.Q5
            },
            predicate: () => r
        },
        {
            section: ey.pNK.VANITY_URL,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eH.Z.Messages.VANITY_URL,
            element: eP.Z,
            notice: {
                stores: [ed.Z],
                element: eP.T
            },
            predicate: () => r
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => r || x
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.APPS,
            predicate: () => r || x
        },
        {
            section: ey.pNK.INTEGRATIONS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eH.Z.Messages.INTEGRATIONS,
            ariaLabel: eH.Z.Messages.INTEGRATIONS,
            element: ef.Z,
            notice: {
                stores: [
                    el.Z,
                    ec.Z
                ],
                element: ef.j
            },
            predicate: () => r || x
        },
        {
            section: ey.pNK.APP_DIRECTORY,
            label: eH.Z.Messages.APP_DIRECTORY,
            ariaLabel: eH.Z.Messages.APP_DIRECTORY,
            onClick() {
                (0, m.goToAppDirectory)({
                    guildId: a.id,
                    entrypoint: {
                        name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                        guildSettingsSection: ei
                    }
                }), (0, c.xf)();
            }
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => r
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.MODERATION,
            predicate: () => r
        },
        {
            section: ey.pNK.SAFETY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: eH.Z.Messages.SAFETY_SETUP,
            ariaLabel: eH.Z.Messages.SAFETY_SETUP,
            element: eN.Z,
            newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => r && a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.MODERATION,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: eH.Z.Messages.SAFETY_SETUP,
            element: eD.ZP,
            predicate: () => r && !a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.GUILD_AUTOMOD,
            label: (0, s.jsx)('div', {
                className: eV.landingPageTabLink,
                children: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
            }),
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
            element: A.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !a.hasFeature(ey.oNc.COMMUNITY) && ((0, O.Nb)(a.id) || (0, O.ze)(a.id))
        },
        {
            section: ey.pNK.AUDIT_LOG,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: eH.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
            element: eu.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: ey.pNK.AUDIT_LOG_V2,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
            label: eH.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
            element: L.Z,
            type: u.bT.CUSTOM,
            predicate: () => _ && W
        },
        {
            section: ey.pNK.BANS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
            label: eH.Z.Messages.BANS,
            element: eh.Z,
            predicate: () => f
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => r || j
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.COMMUNITY,
            predicate: () => !er && (r || j)
        },
        {
            section: ey.pNK.CLAN,
            label: eH.Z.Messages.CLAN_SETTINGS,
            ariaLabel: eH.Z.Messages.CLAN_SETTINGS,
            onClick() {
                (0, ee.q4)(e => {
                    let {closeLayer: t} = e;
                    return (0, s.jsx)(S.Z, {
                        onClose: t,
                        guildId: a.id
                    });
                }, { layerKey: eF.q2 }), (0, c.xf)();
            },
            predicate: () => null != er && er,
            icon: null != eX ? (0, s.jsx)(h.KQ, { src: eX }) : null
        },
        {
            section: ey.pNK.COMMUNITY,
            impressionName: a.hasFeature(ey.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: a.hasFeature(ey.oNc.COMMUNITY) ? eH.Z.Messages.OVERVIEW : eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            element: eg.Z,
            ariaLabel: a.hasFeature(ey.oNc.COMMUNITY) ? eH.Z.Messages.OVERVIEW : eH.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            newIndicator: !a.hasFeature(ey.oNc.COMMUNITY) && null != Y && Y >= ew.U3 && H.Z.hasHotspot(ek.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [ec.Z],
                element: eg.X
            },
            predicate: () => r
        },
        {
            section: ey.pNK.ONBOARDING,
            label: eH.Z.Messages.ONBOARDING,
            element: eA.Z,
            ariaLabel: eH.Z.Messages.ONBOARDING,
            newIndicatorDismissibleContentTypes: Q ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [e_.Z],
                element: eT.Z
            },
            predicate: () => (0, D.wC)(a.id),
            decoration: function (e, t) {
                let {homeSettingsEnabled: n} = (0, Z.l6)(e);
                if (v.Z.getEnabled(e))
                    return eH.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
                if ((0, eI.C)(e))
                    return eH.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
                let s = eE.ug.filter(e => !!n || e !== eE.PG.HOME_SETTINGS || !1), a = s.findIndex(e => e === t);
                if (-1 !== a)
                    return eH.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
                        count: a + 1,
                        total: s.length
                    });
            }(a.id, X)
        },
        {
            section: ey.pNK.ANALYTICS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eH.Z.Messages.SERVER_INSIGHTS,
            ariaLabel: eH.Z.Messages.SERVER_INSIGHTS,
            element: eS.Z,
            newIndicator: H.Z.hasHotspot(ek.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: K ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => j && a.hasFeature(ey.oNc.COMMUNITY)
        },
        {
            section: ey.pNK.DISCOVERY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: eH.Z.Messages.DISCOVERY,
            element: ex.Z,
            notice: {
                stores: [ec.Z],
                element: ex.s
            },
            predicate: () => r && a.hasFeature(ey.oNc.COMMUNITY),
            ariaLabel: a.hasFeature(ey.oNc.DISCOVERABLE) ? eH.Z.Messages.DISCOVERY : eH.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        },
        {
            section: ey.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, s.jsxs)('div', {
                className: eV.landingPageTabLink,
                children: [
                    eH.Z.Messages.DISCOVERY_LANDING_PAGE,
                    ' ',
                    (0, s.jsx)(R.Z, {})
                ]
            }),
            ariaLabel: eH.Z.Messages.DISCOVERY_LANDING_PAGE,
            element: ep.Z,
            notice: {
                stores: [ec.Z],
                element: ep.J
            },
            type: u.bT.CUSTOM,
            predicate: () => r && (a.hasFeature(ey.oNc.DISCOVERABLE) || !!(null == en ? void 0 : en.isPublished))
        },
        {
            section: ey.pNK.COMMUNITY_WELCOME,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            element: eC.Z,
            notice: {
                stores: [z.Z],
                element: q.Z
            },
            predicate: () => r && a.hasFeature(ey.oNc.COMMUNITY) && !J && !a.hasFeature(ey.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: eW
        },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.MONETIZATION,
            predicate: eW
        },
        {
            ...eq,
            section: ey.pNK.ROLE_SUBSCRIPTIONS,
            element: y.Z,
            type: u.bT.CUSTOM,
            predicate: eW,
            newIndicatorDismissibleContentTypes: (0, B.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: ey.pNK.GUILD_PRODUCTS,
            label: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
            ariaLabel: eH.Z.Messages.GUILD_PRODUCTS_TITLE,
            element: U.Z,
            predicate: () => eW() && (0, b.p)(a.id, 'guild_product_settings_predicate') && (0, G.sy)(a)
        },
        {
            section: ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            ariaLabel: eH.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            element: F.Z,
            predicate: () => eW() && (0, G.sy)(a)
        },
        { section: u.ID.DIVIDER },
        {
            section: ey.pNK.GUILD_PREMIUM,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: eH.Z.Messages.GUILD_PREMIUM,
            ariaLabel: eH.Z.Messages.GUILD_PREMIUM,
            element: ev.Z,
            className: eV.serverBoostTabItem,
            icon: (0, s.jsx)(ej.Z, { className: eV.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: eH.Z.Messages.USER_MANAGEMENT
        },
        {
            section: ey.pNK.MEMBERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, s.jsx)(eO.$, {}),
            ariaLabel: eH.Z.Messages.MEMBERS,
            element: eO.Z,
            type: u.bT.CUSTOM,
            predicate: () => M
        },
        {
            section: ey.pNK.INSTANT_INVITES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eH.Z.Messages.INVITES,
            element: eL.Z,
            type: u.bT.CUSTOM,
            predicate: () => r
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => w
        },
        {
            section: ey.pNK.DELETE,
            onClick() {
                let e = $.default.getCurrentUser();
                if (null == e)
                    return;
                let t = a.toString(), i = {
                        header: eH.Z.Messages.DELETE_SERVER_TITLE.format({ name: t }),
                        confirmText: eH.Z.Messages.DELETE_SERVER,
                        cancelText: eH.Z.Messages.CANCEL,
                        onConfirm: () => {
                            et.S.subscribeOnce(ey.CkL.LAYER_POP_COMPLETE, () => {
                                ea.Z.deleteGuild(a.id, t).then(() => {
                                    if ((0, p.un)(l.z.GUILD_DELETE_FEEDBACK))
                                        return;
                                    es.Z.trackExposure({ location: 'e4be39_1' });
                                    let {showFeedback: e} = es.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                    e && (0, o.openModalLazy)(async () => {
                                        let {default: e} = await n.e('31811').then(n.bind(n, 945903));
                                        return t => (0, s.jsx)(e, {
                                            ...t,
                                            guildId: a.id
                                        });
                                    });
                                });
                            }), (0, c.xf)();
                        }
                    };
                e.mfaEnabled ? (0, o.openModal)(e => (0, s.jsx)(o.ConfirmModal, {
                    ...e,
                    ...i,
                    children: (0, s.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: eH.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                    })
                })) : (0, o.openModalLazy)(async () => {
                    let {default: e} = await n.e('18259').then(n.bind(n, 1493));
                    return n => (0, s.jsx)(e, {
                        ...n,
                        ...i,
                        validationText: t,
                        instructionText: eH.Z.Messages.DELETE_SERVER_ENTER_NAME,
                        errorText: eH.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
                        children: eH.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                    });
                });
            },
            label: eH.Z.Messages.DELETE_SERVER,
            ariaLabel: eH.Z.Messages.DELETE_SERVER,
            icon: (0, s.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => w
        }
    ];
}
function ez(e, t) {
    let n = J.Z.getGuildPermissionProps(e);
    return eW({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        isGuildAuditLogV2Enabled: !1,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(ey.oNc.CLAN),
        welcomeScreenEmpty: K.Z.isEmpty(e.id)
    }).filter(e => {
        let {section: t} = e;
        return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
    }).filter(e => null == e.predicate || e.predicate());
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0;
    E.ZP.trackWithMetadata(ey.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let eq = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canViewAuditLogV2: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1
};
class eX extends a.PureComponent {
    componentDidMount() {
        eK(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        ea.Z.close();
    }
    componentDidUpdate(e) {
        let {section: t} = e, {
                section: n,
                canManageGuild: s,
                canManageRoles: a,
                canManageBans: i,
                canManageNicknames: r,
                canManageGuildExpressions: l,
                canViewAuditLog: o,
                canViewAuditLogV2: d,
                canManageWebhooks: u,
                canAccessMembersPage: _,
                canViewGuildAnalytics: E
            } = this.props;
        n !== t && eK(n, t), (!s && !a && !i && !r && !l && !o && !d && !_ && !u || !o && n === ey.pNK.AUDIT_LOG || !d && n === ey.pNK.AUDIT_LOG_V2 || !a && n === ey.pNK.ROLES || !l && n === ey.pNK.EMOJI || !l && n === ey.pNK.STICKERS || !l && n === ey.pNK.SOUNDBOARD || !i && n === ey.pNK.BANS || !E && n === ey.pNK.ANALYTICS || !_ && n === ey.pNK.MEMBERS) && (0, c.xf)();
    }
    render() {
        var e, t;
        let {
            theme: n,
            sidebarTheme: a,
            section: i,
            guild: r,
            channels: l,
            canManageGuild: o,
            canViewAuditLog: u,
            canViewAuditLogV2: _,
            canManageRoles: E,
            canManageGuildExpressions: I,
            canManageWebhooks: T,
            canManageBans: m,
            canAccessMembersPage: N,
            canViewGuildAnalytics: S,
            isOwner: h,
            isOwnerWithRequiredMfaLevel: g,
            showDirtyGuildTemplateIndicator: C,
            memberCount: x,
            isGuildAuditLogV2Enabled: p,
            showAccessRate: R,
            onboardingStep: f,
            onboardingEnabled: L,
            welcomeScreenEmpty: O,
            guildMetadata: A,
            canAccessClanSettings: M
        } = this.props;
        if (null == r)
            return null;
        let v = eW({
                guild: r,
                channels: l,
                canManageGuild: o,
                canViewAuditLog: u,
                canViewAuditLogV2: _,
                canManageRoles: E,
                canManageGuildExpressions: I,
                canManageWebhooks: T,
                canManageBans: m,
                canAccessMembersPage: N,
                canViewGuildAnalytics: S,
                isOwner: h,
                isOwnerWithRequiredMfaLevel: g,
                showDirtyGuildTemplateIndicator: C,
                memberCount: x,
                isGuildAuditLogV2Enabled: p,
                showAccessRate: R,
                onboardingStep: f,
                onboardingEnabled: L,
                welcomeScreenEmpty: O,
                guildMetadata: A,
                section: i,
                canAccessClanSettings: M
            }), D = (null === (t = v.find(e => e.section === i)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: a,
                    section: D && null != i ? i : ey.pNK.OVERVIEW,
                    onSetSection: ea.Z.setSection,
                    onClose: c.xf,
                    title: eY(r),
                    sections: v
                }),
                (0, s.jsx)(V.d, { guildId: r.id })
            ]
        });
    }
}
function eQ() {
    var e, t;
    let {
            guild: n,
            section: i,
            analyticsLocation: l,
            guildMetadata: o,
            isGuildMetadataLoaded: c
        } = (0, r.cj)([ec.Z], () => ec.Z.getProps()), {analyticsLocations: d} = (0, I.ZP)(_.Z.GUILD_SETTINGS), u = (0, r.e7)([Y.Z], () => Y.Z.theme), E = (0, r.e7)([Y.Z], () => Y.Z.darkSidebar ? ey.BRd.DARK : void 0), T = (0, r.e7)([X.ZP], () => null != n ? X.ZP.getChannels(n.id).SELECTABLE : null, [n]), m = (0, r.cj)([J.Z], () => null != n ? J.Z.getGuildPermissionProps(n) : eq), N = null == n ? void 0 : n.id, S = (0, r.e7)([J.Z], () => null != n && J.Z.canAccessGuildSettings(n)), h = null != n && (0, en.Fv)(n.id), g = h || S, C = h || m.canViewGuildAnalytics, {
            shouldFetchMemberInsights: p,
            hasAccessRate: R
        } = (0, r.cj)([er.Z], () => ({
            shouldFetchMemberInsights: null != n && er.Z.shouldFetchMemberInsights(n.id),
            hasAccessRate: null != n && er.Z.getMemberInsights(n.id).hasAccessRate
        }));
    a.useEffect(() => {
        !c && null != N && (0, x.aC)(N);
    }, [
        c,
        N
    ]), a.useEffect(() => {
        g && C && p && null != N && (0, ei.r2)(N);
    }, [
        g,
        C,
        p,
        N
    ]);
    let L = null !== (e = null == n ? void 0 : n.hasFeature(ey.oNc.COMMUNITY)) && void 0 !== e && e;
    a.useEffect(() => {
        null != N && L && ((0, M.eM)(N), (0, W.RM)(N));
    }, [
        N,
        L
    ]);
    let {homeSettingsEnabled: O} = (0, Z.kZ)(null != N ? N : ey.lds);
    a.useEffect(() => {
        null != N && O && (0, j.cP)(N);
    }, [
        O,
        N
    ]);
    let {showAccessRate: A} = (0, en.eA)(null == n ? void 0 : n.id, !R || !C || !g), D = m.isGuildAdmin && (null == n ? void 0 : n.hasFeature(ey.oNc.CLAN)), b = (0, r.e7)([w.Z], () => {
            var e;
            return (null == n ? void 0 : n.id) != null && (null === (e = w.Z.getForGuild(n.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
        }, [n]), U = (0, r.e7)([Q.Z], () => Q.Z.getMemberCount(null == n ? void 0 : n.id), [n]), G = (0, f.pU)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ey.lds);
    a.useEffect(() => {
        null != N && m.canManageGuild && k.Z.loadTemplatesForGuild(N);
    }, [
        N,
        m.canManageGuild
    ]), a.useEffect(() => {
        !g && ea.Z.close();
    }, [g]);
    let P = (0, r.e7)([e_.Z], () => e_.Z.getCurrentPage()), B = (0, r.e7)([v.Z], () => null != N && v.Z.getEnabled(N)), y = (0, r.e7)([K.Z], () => null != N && K.Z.isEmpty(N));
    return (0, s.jsx)(I.Gt, {
        value: d,
        children: (0, s.jsx)(eX, {
            guild: n,
            section: i,
            theme: u,
            sidebarTheme: E,
            channels: T,
            showDirtyGuildTemplateIndicator: b,
            analyticsLocation: l,
            memberCount: U,
            isGuildAuditLogV2Enabled: G,
            ...m,
            canViewGuildAnalytics: C,
            showAccessRate: A,
            onboardingStep: P,
            onboardingEnabled: B,
            welcomeScreenEmpty: y,
            guildMetadata: o,
            canAccessClanSettings: D
        })
    });
}
