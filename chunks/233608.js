"use strict";
S.r(s), S("47120");
var e = S("253923"),
  i = S("230711"),
  _ = S("927723"),
  n = S("200876"),
  I = S("456269"),
  t = S("228392"),
  r = S("676317"),
  N = S("467138"),
  o = S("434404"),
  R = S("71275"),
  A = S("60222"),
  O = S("665906"),
  P = S("854536"),
  T = S("131704"),
  M = S("430824"),
  C = S("63063"),
  a = S("981631"),
  l = S("71080"),
  m = S("689938");

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
s.default = {
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
    let i = new Set;
    return !E.hasFeature(a.GuildFeatures.COMMUNITY) && i.add(a.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = e.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (S = i).size ? s : s.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(m.default.Messages, D(E.id))
  }
}