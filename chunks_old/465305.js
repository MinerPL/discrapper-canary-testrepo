"use strict";
S.r(s), S.d(s, {
  default: function() {
    return g
  }
}), S("222007");
var e = S("200900"),
  i = S("79112"),
  _ = S("980215"),
  n = S("250666"),
  I = S("680986"),
  t = S("867965"),
  r = S("348934"),
  N = S("520141"),
  o = S("592407"),
  R = S("819450"),
  A = S("178225"),
  O = S("300322"),
  P = S("146932"),
  T = S("233069"),
  M = S("305961"),
  C = S("701909"),
  a = S("49111"),
  l = S("606762"),
  m = S("782340");

function D(E) {
  let s = (0, A.isGuildEligibleForStageChannels)(E),
    S = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = M.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    o = (0, _.getClydeExperimentEnabled)(t),
    R = P.default.getCurrentConfig({
      guildId: E,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(a.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: C.default.getArticleURL(a.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: S,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: o,
    inVoiceBgExperiment: R
  }
}

function L(E, s) {
  return E ? [s()] : []
}
var g = {
  generateChannelPermissionSpec: function(E, s, S, i) {
    var n, N, A, P, C, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, l.getChannelPermissionSpecMap)(s, S, g, i),
      c = D(E),
      d = O.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && T.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      G = (0, R.isStageVideoEnabled)(E),
      f = (0, r.canCurrentUserManageMessageFilters)(E),
      U = s.isMediaChannel(),
      p = M.default.getGuild(E),
      V = (0, _.getClydeExperimentEnabled)(p);
    switch (s.type) {
      case a.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case a.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case a.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, G), e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case a.ChannelTypes.GUILD_FORUM:
      case a.ChannelTypes.GUILD_MEDIA:
        ;
        let h = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, h, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: f ? H.format({
            setUpAutomod: () => {
              !U && (0, t.trackForumEnableAutomodClicked)(), o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: V
        }), ...(A = d, P = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), A ? [P()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== a.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), ...(C = d, L = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), C ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var s, S;
    let i = new Set,
      _ = E.hasFeature(a.GuildFeatures.COMMUNITY);
    return !_ && i.add(a.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = e.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (S = i).size ? s : s.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(m.default.Messages, D(E.id))
  }
}