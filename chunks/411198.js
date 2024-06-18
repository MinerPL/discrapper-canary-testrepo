"use strict";
n.d(t, {
  EO: function() {
    return h
  },
  Qs: function() {
    return E
  },
  cL: function() {
    return T
  },
  cy: function() {
    return _
  },
  di: function() {
    return c
  },
  sp: function() {
    return d
  },
  tK: function() {
    return I
  },
  wD: function() {
    return u
  }
}), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(283693),
  o = n(601964),
  a = n(625137),
  l = n(981631);

function u(e, t) {
  var n, i, a, u, _, d, c, E, I, T, h, S, f;
  let N = null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
    A = null !== (n = e.premium_subscription_count) && void 0 !== n ? n : 0;
  if (null == e.properties) {
    r()(null != t, "If guild.properties is null, existingGuild must be passed in");
    let e = t.joinedAt instanceof Date ? t.joinedAt.getTime() : t.joinedAt,
      n = N instanceof Date ? N.getTime() : N;
    return A === t.premiumSubscriberCount && e === n ? t : t.merge({
      joinedAt: N,
      premiumSubscriberCount: A
    })
  }
  let m = {
    id: e.id,
    joinedAt: N,
    premiumSubscriberCount: A,
    name: null !== (i = e.properties.name) && void 0 !== i ? i : "",
    description: e.properties.description,
    icon: e.properties.icon,
    splash: e.properties.splash,
    banner: e.properties.banner,
    homeHeader: e.properties.home_header,
    features: new Set(null !== (a = e.properties.features) && void 0 !== a ? a : []),
    preferredLocale: null !== (u = e.properties.preferred_locale) && void 0 !== u ? u : "en-us",
    ownerId: e.properties.owner_id,
    application_id: e.properties.application_id,
    afkChannelId: e.properties.afk_channel_id,
    afkTimeout: e.properties.afk_timeout,
    systemChannelId: e.properties.system_channel_id,
    verificationLevel: null !== (_ = e.properties.verification_level) && void 0 !== _ ? _ : l.sFg.NONE,
    explicitContentFilter: null !== (d = e.properties.explicit_content_filter) && void 0 !== d ? d : l.lxg.DISABLED,
    defaultMessageNotifications: null !== (c = e.properties.default_message_notifications) && void 0 !== c ? c : l.bL.ALL_MESSAGES,
    mfaLevel: null !== (E = e.properties.mfa_level) && void 0 !== E ? E : l.BpS.NONE,
    vanityURLCode: e.properties.vanity_url_code,
    premiumTier: null !== (I = e.properties.premium_tier) && void 0 !== I ? I : l.Eu4.NONE,
    premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
    systemChannelFlags: e.properties.system_channel_flags,
    discoverySplash: e.properties.discovery_splash,
    rulesChannelId: e.properties.rules_channel_id,
    safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
    publicUpdatesChannelId: e.properties.public_updates_channel_id,
    maxStageVideoChannelUsers: null !== (T = e.properties.max_stage_video_channel_users) && void 0 !== T ? T : -1,
    maxVideoChannelUsers: null !== (h = e.properties.max_video_channel_users) && void 0 !== h ? h : -1,
    maxMembers: null !== (S = e.properties.max_members) && void 0 !== S ? S : -1,
    nsfwLevel: null !== (f = e.properties.nsfw_level) && void 0 !== f ? f : l.V_K.DEFAULT,
    hubType: e.properties.hub_type,
    latestOnboardingQuestionId: e.properties.latest_onboarding_question_id,
    clan: e.properties.clan
  };
  return null == t ? (0, s.gh)(m, o.ZP) : t.merge(m)
}

function _(e, t) {
  return new o.Bg({
    ...e,
    roles: t
  })
}

function d(e, t) {
  var n, i, r, s, o, a, u, _, d, c, E, T, h;
  let S = null !== (n = e.properties) && void 0 !== n ? n : I(t),
    f = {
      id: e.id,
      name: null !== (i = S.name) && void 0 !== i ? i : "",
      description: S.description,
      icon: S.icon,
      splash: S.splash,
      banner: S.banner,
      homeHeader: S.home_header,
      features: new Set(null !== (r = S.features) && void 0 !== r ? r : []),
      preferredLocale: null !== (s = S.preferred_locale) && void 0 !== s ? s : "en-us",
      ownerId: S.owner_id,
      application_id: S.application_id,
      afkChannelId: S.afk_channel_id,
      afkTimeout: S.afk_timeout,
      systemChannelId: S.system_channel_id,
      verificationLevel: null !== (o = S.verification_level) && void 0 !== o ? o : l.sFg.NONE,
      explicitContentFilter: null !== (a = S.explicit_content_filter) && void 0 !== a ? a : l.lxg.DISABLED,
      defaultMessageNotifications: null !== (u = S.default_message_notifications) && void 0 !== u ? u : l.bL.ALL_MESSAGES,
      mfaLevel: null !== (_ = S.mfa_level) && void 0 !== _ ? _ : l.BpS.NONE,
      vanityURLCode: S.vanity_url_code,
      premiumTier: null !== (d = S.premium_tier) && void 0 !== d ? d : l.Eu4.NONE,
      premiumProgressBarEnabled: S.premium_progress_bar_enabled || !1,
      systemChannelFlags: S.system_channel_flags,
      discoverySplash: S.discovery_splash,
      rulesChannelId: S.rules_channel_id,
      safetyAlertsChannelId: S.safety_alerts_channel_id,
      publicUpdatesChannelId: S.public_updates_channel_id,
      maxStageVideoChannelUsers: null !== (c = S.max_stage_video_channel_users) && void 0 !== c ? c : -1,
      maxVideoChannelUsers: null !== (E = S.max_video_channel_users) && void 0 !== E ? E : -1,
      maxMembers: null !== (T = S.max_members) && void 0 !== T ? T : -1,
      nsfwLevel: null !== (h = S.nsfw_level) && void 0 !== h ? h : l.V_K.DEFAULT,
      hubType: S.hub_type,
      latestOnboardingQuestionId: S.latest_onboarding_question_id,
      clan: S.clan
    };
  return t.merge(f)
}

function c(e, t) {
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
    roles: (0, a.C5)(e.id, e.roles),
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
  return null == t ? new o.ZP(n) : t.merge(n)
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
  return new o.ZP(t)
}

function I(e) {
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
  }
}

function T(e) {
  var t;
  for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, a.cf)(e.roles[n]);
  return (0, s.gh)(e, o.ZP)
}

function h(e, t, n, i) {
  let r = !1;
  if (null != i)
    for (let e of i) delete t[e], r = !0;
  if (null != n && n.length > 0) {
    for (let e of n) t[e.id] = (0, a.CL)(e);
    r = !0
  }
  return r ? (0, a.iw)(e, Object.values(t)) : t
}