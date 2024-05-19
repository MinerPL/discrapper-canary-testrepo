"use strict";
s.r(S), s("47120");
var e = s("253923"),
  i = s("230711"),
  _ = s("797610"),
  n = s("200876"),
  I = s("456269"),
  t = s("228392"),
  r = s("676317"),
  N = s("467138"),
  o = s("434404"),
  R = s("71275"),
  O = s("60222"),
  A = s("665906"),
  P = s("131704"),
  T = s("430824"),
  M = s("63063"),
  C = s("981631"),
  a = s("71080"),
  D = s("689938");

function m(E) {
  let S = (0, O.isGuildEligibleForStageChannels)(E),
    s = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = T.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    o = (0, _.getClydeExperimentEnabled)(t);
  return {
    PRIORITY_SPEAKER_DESCRIPTION: D.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: D.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(C.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: D.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: M.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: S,
    showExperimental: !0,
    showForumPermissions: s,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: o
  }
}

function l(E, S) {
  return E ? [S()] : []
}
S.default = {
  generateChannelPermissionSpec: function(E, S, s, i) {
    var n, N, O, M, l, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, a.getChannelPermissionSpecMap)(S, s, g, i),
      c = m(E),
      G = A.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && P.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(S.type),
      d = (0, R.isStageVideoEnabled)(E),
      U = (0, r.canCurrentUserManageMessageFilters)(E),
      f = S.isMediaChannel(),
      p = T.default.getGuild(E),
      V = (0, _.getClydeExperimentEnabled)(p);
    switch (S.type) {
      case C.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, d), e.generateChannelStageSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case C.ChannelTypes.GUILD_FORUM:
      case C.ChannelTypes.GUILD_MEDIA:
        ;
        let h = f ? D.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : D.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = f ? D.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : D.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, h, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: U ? H.format({
            setUpAutomod: () => {
              !f && (0, t.trackForumEnableAutomodClicked)(), o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: V
        }), ...(O = G, M = () => e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), O ? [M()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: S.type !== C.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), ...(l = G, L = () => e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), l ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var S, s;
    let i = new Set;
    return !E.hasFeature(C.GuildFeatures.COMMUNITY) && i.add(C.Permissions.VIEW_GUILD_ANALYTICS.toString()), S = e.generateGuildPermissionSpec(D.default.Messages, m(E.id)), 0 === (s = i).size ? S : S.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !s.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(D.default.Messages, m(E.id))
  }
}