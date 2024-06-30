n.d(t, {
    EO: function () {
        return p;
    },
    Qs: function () {
        return E;
    },
    cL: function () {
        return h;
    },
    cy: function () {
        return c;
    },
    di: function () {
        return _;
    },
    sp: function () {
        return d;
    },
    tK: function () {
        return f;
    },
    wD: function () {
        return u;
    }
}), n(47120);
var r = n(512722), i = n.n(r), a = n(283693), o = n(601964), s = n(625137), l = n(981631);
function u(e, t) {
    var n, r, s, u, c, d, _, E, f, h, p, m, I;
    let T = null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt, g = null !== (n = e.premium_subscription_count) && void 0 !== n ? n : 0;
    if (null == e.properties) {
        i()(null != t, 'If guild.properties is null, existingGuild must be passed in');
        let e = t.joinedAt instanceof Date ? t.joinedAt.getTime() : t.joinedAt, n = T instanceof Date ? T.getTime() : T;
        return g === t.premiumSubscriberCount && e === n ? t : t.merge({
            joinedAt: T,
            premiumSubscriberCount: g
        });
    }
    let S = {
        id: e.id,
        joinedAt: T,
        premiumSubscriberCount: g,
        name: null !== (r = e.properties.name) && void 0 !== r ? r : '',
        description: e.properties.description,
        icon: e.properties.icon,
        splash: e.properties.splash,
        banner: e.properties.banner,
        homeHeader: e.properties.home_header,
        features: new Set(null !== (s = e.properties.features) && void 0 !== s ? s : []),
        preferredLocale: null !== (u = e.properties.preferred_locale) && void 0 !== u ? u : 'en-us',
        ownerId: e.properties.owner_id,
        application_id: e.properties.application_id,
        afkChannelId: e.properties.afk_channel_id,
        afkTimeout: e.properties.afk_timeout,
        systemChannelId: e.properties.system_channel_id,
        verificationLevel: null !== (c = e.properties.verification_level) && void 0 !== c ? c : l.sFg.NONE,
        explicitContentFilter: null !== (d = e.properties.explicit_content_filter) && void 0 !== d ? d : l.lxg.DISABLED,
        defaultMessageNotifications: null !== (_ = e.properties.default_message_notifications) && void 0 !== _ ? _ : l.bL.ALL_MESSAGES,
        mfaLevel: null !== (E = e.properties.mfa_level) && void 0 !== E ? E : l.BpS.NONE,
        vanityURLCode: e.properties.vanity_url_code,
        premiumTier: null !== (f = e.properties.premium_tier) && void 0 !== f ? f : l.Eu4.NONE,
        premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
        systemChannelFlags: e.properties.system_channel_flags,
        discoverySplash: e.properties.discovery_splash,
        rulesChannelId: e.properties.rules_channel_id,
        safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
        publicUpdatesChannelId: e.properties.public_updates_channel_id,
        maxStageVideoChannelUsers: null !== (h = e.properties.max_stage_video_channel_users) && void 0 !== h ? h : -1,
        maxVideoChannelUsers: null !== (p = e.properties.max_video_channel_users) && void 0 !== p ? p : -1,
        maxMembers: null !== (m = e.properties.max_members) && void 0 !== m ? m : -1,
        nsfwLevel: null !== (I = e.properties.nsfw_level) && void 0 !== I ? I : l.V_K.DEFAULT,
        hubType: e.properties.hub_type,
        latestOnboardingQuestionId: e.properties.latest_onboarding_question_id,
        clan: e.properties.clan
    };
    return null == t ? (0, a.gh)(S, o.ZP) : t.merge(S);
}
function c(e, t) {
    return new o.Bg({
        ...e,
        roles: t
    });
}
function d(e, t) {
    var n, r, i, a, o, s, u, c, d, _, E, h, p;
    let m = null !== (n = e.properties) && void 0 !== n ? n : f(t), I = {
            id: e.id,
            name: null !== (r = m.name) && void 0 !== r ? r : '',
            description: m.description,
            icon: m.icon,
            splash: m.splash,
            banner: m.banner,
            homeHeader: m.home_header,
            features: new Set(null !== (i = m.features) && void 0 !== i ? i : []),
            preferredLocale: null !== (a = m.preferred_locale) && void 0 !== a ? a : 'en-us',
            ownerId: m.owner_id,
            application_id: m.application_id,
            afkChannelId: m.afk_channel_id,
            afkTimeout: m.afk_timeout,
            systemChannelId: m.system_channel_id,
            verificationLevel: null !== (o = m.verification_level) && void 0 !== o ? o : l.sFg.NONE,
            explicitContentFilter: null !== (s = m.explicit_content_filter) && void 0 !== s ? s : l.lxg.DISABLED,
            defaultMessageNotifications: null !== (u = m.default_message_notifications) && void 0 !== u ? u : l.bL.ALL_MESSAGES,
            mfaLevel: null !== (c = m.mfa_level) && void 0 !== c ? c : l.BpS.NONE,
            vanityURLCode: m.vanity_url_code,
            premiumTier: null !== (d = m.premium_tier) && void 0 !== d ? d : l.Eu4.NONE,
            premiumProgressBarEnabled: m.premium_progress_bar_enabled || !1,
            systemChannelFlags: m.system_channel_flags,
            discoverySplash: m.discovery_splash,
            rulesChannelId: m.rules_channel_id,
            safetyAlertsChannelId: m.safety_alerts_channel_id,
            publicUpdatesChannelId: m.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (_ = m.max_stage_video_channel_users) && void 0 !== _ ? _ : -1,
            maxVideoChannelUsers: null !== (E = m.max_video_channel_users) && void 0 !== E ? E : -1,
            maxMembers: null !== (h = m.max_members) && void 0 !== h ? h : -1,
            nsfwLevel: null !== (p = m.nsfw_level) && void 0 !== p ? p : l.V_K.DEFAULT,
            hubType: m.hub_type,
            latestOnboardingQuestionId: m.latest_onboarding_question_id,
            clan: m.clan
        };
    return t.merge(I);
}
function _(e, t) {
    let n = {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        homeHeader: e.home_header,
        features: e.features,
        preferredLocale: e.preferred_locale,
        ownerId: e.owner_id,
        application_id: e.application_id,
        roles: (0, s.C5)(e.id, e.roles),
        afkChannelId: e.afk_channel_id,
        afkTimeout: e.afk_timeout,
        systemChannelId: e.system_channel_id,
        joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
        verificationLevel: e.verification_level,
        explicitContentFilter: e.explicit_content_filter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: e.mfa_level,
        vanityURLCode: e.vanity_url_code,
        premiumTier: e.premium_tier,
        premiumSubscriberCount: e.premium_subscription_count,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: e.discovery_splash,
        rulesChannelId: e.rules_channel_id,
        safetyAlertsChannelId: e.safety_alerts_channel_id,
        publicUpdatesChannelId: e.public_updates_channel_id,
        maxStageVideoChannelUsers: e.max_stage_video_channel_users,
        maxVideoChannelUsers: e.max_video_channel_users,
        maxMembers: e.max_members,
        nsfwLevel: e.nsfw_level,
        hubType: e.hub_type,
        latestOnboardingQuestionId: e.latest_onboarding_question_id,
        clan: e.clan
    };
    return null == t ? new o.ZP(n) : t.merge(n);
}
function E(e) {
    let t = {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: e.features,
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        memberCount: e.approximate_member_count
    };
    return new o.ZP(t);
}
function f(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        home_header: e.homeHeader,
        features: Array.from(e.features),
        preferred_locale: e.preferredLocale,
        owner_id: e.ownerId,
        application_id: e.application_id,
        afk_channel_id: e.afkChannelId,
        afk_timeout: e.afkTimeout,
        system_channel_id: e.systemChannelId,
        verification_level: e.verificationLevel,
        explicit_content_filter: e.explicitContentFilter,
        default_message_notifications: e.defaultMessageNotifications,
        mfa_level: e.mfaLevel,
        vanity_url_code: e.vanityURLCode,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        unavailable: !1,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        clan: e.clan
    };
}
function h(e) {
    var t;
    for (let n in (null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles))
        (0, s.cf)(e.roles[n]);
    return (0, a.gh)(e, o.ZP);
}
function p(e, t, n, r) {
    let i = !1;
    if (null != r)
        for (let e of r)
            delete t[e], i = !0;
    if (null != n && n.length > 0) {
        for (let e of n)
            t[e.id] = (0, s.CL)(e);
        i = !0;
    }
    return i ? (0, s.iw)(e, Object.values(t)) : t;
}
