"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return b
  },
  captureQuestsException: function() {
    return F
  },
  getContextualEntrypointHeading: function() {
    return G
  },
  getGameLogotypeAssetUrl: function() {
    return D
  },
  getGameTileAssetUrl: function() {
    return v
  },
  getHeroAssetUrl: function() {
    return g
  },
  getPlatformString: function() {
    return U
  },
  getPlaytimeQuestByApplicationId: function() {
    return S
  },
  getQuestBarHeroAssetUrl: function() {
    return L
  },
  getQuestByApplicationId: function() {
    return f
  },
  getQuestForTargetedContent: function() {
    return y
  },
  getQuestUrl: function() {
    return M
  },
  getQuestsFromActivities: function() {
    return H
  },
  getQuestsInstructionsToWinReward: function() {
    return Q
  },
  getRewardAssetUrl: function() {
    return R
  },
  getRewardCodeQuestReward: function() {
    return X
  },
  getVideoAssetMimeType: function() {
    return K
  },
  hasPlaytimeTaskVariant: function() {
    return Z
  },
  hasQuestCollectibleRewards: function() {
    return V
  },
  includesTarget: function() {
    return x
  },
  isAssetAnimated: function() {
    return Y
  },
  isCollectibleReward: function() {
    return B
  },
  isDismissed: function() {
    return k
  },
  isDismissible: function() {
    return w
  },
  isQuestExpired: function() {
    return h
  },
  isQuestWithKnownConfigVersion: function() {
    return I
  },
  isTargetedForContent: function() {
    return P
  },
  isTieredRewardCodeQuest: function() {
    return z
  },
  questUserStatusFromServer: function() {
    return A
  },
  questWithUserStatusFromServer: function() {
    return m
  },
  questsEntitlementsFromServer: function() {
    return O
  },
  questsRewardCodeFromServer: function() {
    return N
  }
}), n("627341"), n("47120"), n("411104");
var i = n("278074"),
  r = n("551910"),
  a = n("887003");
n("597688");
var s = n("630388"),
  o = n("960048"),
  l = n("687744"),
  u = n("497505"),
  d = n("242755"),
  _ = n("46140"),
  c = n("689938");
let E = "https://cdn.discordapp.com/assets/quests/";

function I(e) {
  try {
    return (0, i.match)(e.config).with({
      config_version: 1
    }, () => !0).otherwise(() => !1)
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function T(e, t) {
  let n = t.config.applicationId === e;
  return 1 === t.config.configVersion && null != t.config.supplementaryApplicationIds && t.config.supplementaryApplicationIds.size > 0 && (n = n || t.config.supplementaryApplicationIds.has(e)), n
}

function f(e, t) {
  let n;
  for (let [i, r] of e)
    if (T(t, r) && !h(r)) {
      n = r;
      break
    } return n
}

function S(e, t) {
  return Array.from(e.values()).find(e => T(t, e) && !h(e) && Z({
    quest: e
  }))
}

function h(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function A(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    enrolledAt: e.enrolled_at,
    completedAt: e.completed_at,
    claimedAt: e.claimed_at,
    claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
    streamProgressSeconds: e.stream_progress_seconds,
    dismissedQuestContent: e.dismissed_quest_content,
    progress: function(e) {
      let t = {};
      for (let [n, i] of Object.entries(e)) t[n] = {
        eventName: i.event_name,
        value: i.value,
        updatedAt: i.updated_at,
        completedAt: i.completed_at
      };
      return t
    }(e.progress)
  }
}

function m(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, i.match)(t).with({
      config_version: 1
    }, e => {
      var t, n, i;
      return {
        configVersion: 1,
        expiresAt: e.expires_at,
        streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
        gameTitle: e.game_title,
        getGameLink: e.get_game_link,
        applicationId: e.application_id,
        applicationName: e.application_name,
        messages: {
          questName: (t = e.messages).quest_name,
          rewardName: t.reward_name,
          rewardNameWithArticle: t.reward_name_with_article,
          rewardRedemptionInstructionsByPlatform: function(e) {
            let t = {};
            for (let n in e) {
              let i = parseInt(n);
              u.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
            }
            return t
          }(t.reward_redemption_instructions_by_platform),
          gameTitle: t.game_title,
          gamePublisher: t.game_publisher
        },
        colors: {
          primary: (n = e.colors).primary,
          secondary: n.secondary
        },
        rewardsConfig: (0, l.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => u.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
        assets: {
          rewardTile: (i = e.assets).reward_tile,
          hero: i.hero,
          questBarHero: i.quest_bar_hero,
          gameTile: i.game_tile,
          logotype: i.logotype
        },
        inGameQuestConfig: null,
        variants: e.variants,
        supplementaryApplicationIds: e.supplementary_application_ids
      }
    }).exhaustive()),
    userStatus: null == e.user_status ? null : A(e.user_status),
    targetedContent: e.targeted_content
  }
}

function N(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at,
    tier: null !== (t = e.tier) && void 0 !== t ? t : null
  }
}

function p(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case a.QuestRewardTypes.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case a.QuestRewardTypes.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: N(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function O(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(p),
    errors: e.errors
  }
}

function C(e, t) {
  return e.startsWith("data") ? e : t
}
let R = e => {
    var t, n;
    let i = z({
        quest: e
      }) ? X({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }) : null,
      r = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : e.config.assets.rewardTile;
    return C(r, "".concat(E).concat(e.id, "/").concat(r))
  },
  g = e => C(e.config.assets.hero, "".concat(E).concat(e.id, "/").concat(e.config.assets.hero)),
  L = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : C(e.config.assets.questBarHero, "".concat(E).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  v = (e, t) => C(e.config.assets.gameTile, "".concat(E).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  D = (e, t) => C(e.config.assets.logotype, "".concat(E).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  M = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function y(e, t) {
  for (let [n, i] of e)
    if (!h(i) && i.targetedContent.includes(t)) return i;
  return null
}

function P(e, t) {
  return e.targetedContent.includes(t)
}
let U = e => {
  switch (e) {
    case u.QuestRewardCodePlatforms.XBOX:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case u.QuestRewardCodePlatforms.PLAYSTATION:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case u.QuestRewardCodePlatforms.SWITCH:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case u.QuestRewardCodePlatforms.PC:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case u.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function b(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let {
    streamDurationRequirementMinutes: i
  } = e.config;
  return Math.min(t / 60 / i, 1)
}

function G(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return c.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = b(e);
    return t >= .75 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : c.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return c.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function w(e) {
  return Object.keys(_.DismissibleQuestContentFlags).includes(u.QuestContent[e])
}

function k(e, t) {
  if (!w(t)) return !1;
  let n = u.QuestContent[t];
  return (0, s.hasFlag)(e.dismissedQuestContent, _.DismissibleQuestContentFlags[n])
}

function B(e) {
  return e.tag === a.QuestRewardTypes.COLLECTIBLE
}

function V(e) {
  return e.rewardsConfig.rewards.some(B)
}

function x(e, t) {
  return e.targetedContent.includes(t)
}

function F(e, t) {
  o.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function H(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = f(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function Y(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let j = /\.([a-zA-Z0-9]+)$/,
  W = /^data:video\/([a-zA-Z0-9]+)\;/;

function K(e) {
  var t, n, i, r, a;
  switch (null !== (a = null === (n = j.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (r = W.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function z(e) {
  let {
    quest: t
  } = e, n = t.config.rewardsConfig;
  return n.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.tag === a.QuestRewardTypes.REWARD_CODE)
}

function Z(e) {
  let {
    quest: t
  } = e;
  return t.config.variants.includes(_.QuestVariants.PLAYTIME_TASK)
}

function X(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  if (null == i);
  else if (i.tag === a.QuestRewardTypes.REWARD_CODE) return i;
  return null
}

function Q(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, {
    messages: r,
    streamDurationRequirementMinutes: a
  } = t.config, {
    gameTitle: s,
    rewardNameWithArticle: o
  } = r;
  return (0, d.isEligibleForQuestPlaytime)({
    location: n
  }) && Z({
    quest: t
  }) ? c.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: s,
    questReward: o,
    streamingDurationRequirement: a
  }) : z({
    quest: t
  }) ? (i ? c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: s,
    streamingDurationRequirement: a
  }) : (i ? c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: s,
    questReward: o,
    streamingDurationRequirement: a
  })
}