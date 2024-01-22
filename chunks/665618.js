"use strict";
n.r(t), n.d(t, {
  fromServer: function() {
    return l
  },
  fromBackgroundSync: function() {
    return u
  },
  fromServerUpdate: function() {
    return d
  },
  fromInviteGuild: function() {
    return c
  },
  toServer: function() {
    return f
  },
  fromSerializedGuildRecord: function() {
    return _
  },
  filterRoleDeletes: function() {
    return h
  }
}), n("222007");
var i = n("627929"),
  s = n("886167"),
  r = n("813006"),
  a = n("605136"),
  o = n("49111");

function l(e, t) {
  var n, l, u, d, c, f, _, h, g, m, E, p, v;
  let S = {
    id: e.id,
    name: null !== (n = e.properties.name) && void 0 !== n ? n : "",
    description: e.properties.description,
    icon: e.properties.icon,
    splash: e.properties.splash,
    banner: e.properties.banner,
    homeHeader: e.properties.home_header,
    features: new Set(null !== (l = e.properties.features) && void 0 !== l ? l : []),
    preferredLocale: null !== (u = e.properties.preferred_locale) && void 0 !== u ? u : "en-us",
    ownerId: e.properties.owner_id,
    application_id: e.properties.application_id,
    roles: e.roles instanceof Array ? (0, a.sortServerRoles)(e.id, e.roles) : e.roles,
    afkChannelId: e.properties.afk_channel_id,
    afkTimeout: e.properties.afk_timeout,
    systemChannelId: e.properties.system_channel_id,
    joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
    verificationLevel: null !== (d = e.properties.verification_level) && void 0 !== d ? d : o.VerificationLevels.NONE,
    explicitContentFilter: null !== (c = e.properties.explicit_content_filter) && void 0 !== c ? c : o.GuildExplicitContentFilterTypes.DISABLED,
    defaultMessageNotifications: null !== (f = e.properties.default_message_notifications) && void 0 !== f ? f : o.UserNotificationSettings.ALL_MESSAGES,
    mfaLevel: null !== (_ = e.properties.mfa_level) && void 0 !== _ ? _ : o.MFALevels.NONE,
    vanityURLCode: e.properties.vanity_url_code,
    premiumTier: null !== (h = e.properties.premium_tier) && void 0 !== h ? h : o.BoostedGuildTiers.NONE,
    premiumSubscriberCount: null !== (g = e.premium_subscription_count) && void 0 !== g ? g : 0,
    premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
    systemChannelFlags: e.properties.system_channel_flags,
    discoverySplash: e.properties.discovery_splash,
    rulesChannelId: e.properties.rules_channel_id,
    safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
    publicUpdatesChannelId: e.properties.public_updates_channel_id,
    maxStageVideoChannelUsers: null !== (m = e.properties.max_stage_video_channel_users) && void 0 !== m ? m : -1,
    maxVideoChannelUsers: null !== (E = e.properties.max_video_channel_users) && void 0 !== E ? E : -1,
    maxMembers: null !== (p = e.properties.max_members) && void 0 !== p ? p : -1,
    nsfwLevel: null !== (v = e.properties.nsfw_level) && void 0 !== v ? v : o.GuildNSFWContentLevel.DEFAULT,
    hubType: e.properties.hub_type,
    latestOnboardingQuestionId: e.properties.latest_onboarding_question_id,
    inventorySettings: (0, s.guildInventorySettingsFromServer)(e.properties.inventory_settings)
  };
  return null == t ? (0, i.dangerouslyCast)(S, r.default) : t.merge(S)
}

function u(e, t) {
  var n, i, r, l, u, d, c, _, g, m, E, p, v;
  let S = null !== (n = e.properties) && void 0 !== n ? n : f(t),
    T = {
      id: e.id,
      name: null !== (i = S.name) && void 0 !== i ? i : "",
      description: S.description,
      icon: S.icon,
      splash: S.splash,
      banner: S.banner,
      homeHeader: S.home_header,
      features: new Set(null !== (r = S.features) && void 0 !== r ? r : []),
      preferredLocale: null !== (l = S.preferred_locale) && void 0 !== l ? l : "en-us",
      ownerId: S.owner_id,
      application_id: S.application_id,
      roles: "partial" === e.data_mode ? h(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : (0, a.sortServerRoles)(e.id, e.roles),
      afkChannelId: S.afk_channel_id,
      afkTimeout: S.afk_timeout,
      systemChannelId: S.system_channel_id,
      verificationLevel: null !== (u = S.verification_level) && void 0 !== u ? u : o.VerificationLevels.NONE,
      explicitContentFilter: null !== (d = S.explicit_content_filter) && void 0 !== d ? d : o.GuildExplicitContentFilterTypes.DISABLED,
      defaultMessageNotifications: null !== (c = S.default_message_notifications) && void 0 !== c ? c : o.UserNotificationSettings.ALL_MESSAGES,
      mfaLevel: null !== (_ = S.mfa_level) && void 0 !== _ ? _ : o.MFALevels.NONE,
      vanityURLCode: S.vanity_url_code,
      premiumTier: null !== (g = S.premium_tier) && void 0 !== g ? g : o.BoostedGuildTiers.NONE,
      premiumProgressBarEnabled: S.premium_progress_bar_enabled || !1,
      systemChannelFlags: S.system_channel_flags,
      discoverySplash: S.discovery_splash,
      rulesChannelId: S.rules_channel_id,
      safetyAlertsChannelId: S.safety_alerts_channel_id,
      publicUpdatesChannelId: S.public_updates_channel_id,
      maxStageVideoChannelUsers: null !== (m = S.max_stage_video_channel_users) && void 0 !== m ? m : -1,
      maxVideoChannelUsers: null !== (E = S.max_video_channel_users) && void 0 !== E ? E : -1,
      maxMembers: null !== (p = S.max_members) && void 0 !== p ? p : -1,
      nsfwLevel: null !== (v = S.nsfw_level) && void 0 !== v ? v : o.GuildNSFWContentLevel.DEFAULT,
      hubType: S.hub_type,
      latestOnboardingQuestionId: S.latest_onboarding_question_id,
      inventorySettings: (0, s.guildInventorySettingsFromServer)(S.inventory_settings)
    };
  return t.merge(T)
}

function d(e, t) {
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
    roles: (0, a.sortServerRoles)(e.id, e.roles),
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
    inventorySettings: (0, s.guildInventorySettingsFromServer)(e.inventory_settings)
  };
  return null == t ? new r.default(n) : t.merge(n)
}

function c(e) {
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
  return new r.default(t)
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
    inventory_settings: (0, s.guildInventorySettingsToServer)(e.inventorySettings)
  }
}

function _(e) {
  var t;
  for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, a.fromSerializedGuildRole)(e.roles[n]);
  return (0, i.dangerouslyCast)(e, r.default)
}

function h(e, t, n, i) {
  let s = !1;
  if (null != i)
    for (let e of i) delete t[e], s = !0;
  if (null != n && n.length > 0) {
    for (let e of n) t[e.id] = (0, a.fromServerRole)(e);
    s = !0
  }
  return s ? (0, a.sortClientRoles)(e, Object.values(t)) : t
}