"use strict";
E.r(_), E.d(_, {
  getQuestByApplicationId: function() {
    return a
  },
  isQuestExpired: function() {
    return i
  },
  questUserStatusFromServer: function() {
    return I
  },
  questWithUserStatusFromServer: function() {
    return s
  },
  questsRewardCodeFromServer: function() {
    return T
  },
  getRewardAssetUrl: function() {
    return S
  },
  getHeroAssetUrl: function() {
    return N
  },
  getQuestBarHeroAssetUrl: function() {
    return O
  },
  getGameTileAssetUrl: function() {
    return A
  },
  getGameLogotypeAssetUrl: function() {
    return R
  },
  getQuestForTargetedContent: function() {
    return l
  },
  getPlatformString: function() {
    return L
  }
}), E("222007");
var t = E("2973"),
  o = E("588025"),
  n = E("782340");
let r = "https://cdn.discordapp.com/assets/quests/";

function a(e) {
  let _;
  for (let [E, o] of t.default.quests)
    if (o.config.applicationId === e) {
      _ = o;
      break
    } return _
}

function i(e) {
  let _ = new Date(e.config.expiresAt);
  return _.valueOf() <= Date.now()
}

function I(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    enrolledAt: e.enrolled_at,
    completedAt: e.completed_at,
    claimedAt: e.claimed_at,
    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
    streamProgressSeconds: e.stream_progress_seconds,
    dismissedQuestContent: e.dismissed_quest_content
  }
}

function s(e) {
  return {
    id: e.id,
    config: function(e) {
      var _, E;
      let t = new Set(Object.values(o.QuestRewardCodePlatforms));
      return {
        expiresAt: e.expires_at,
        streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
        gameTitle: e.game_title,
        applicationId: e.application_id,
        messages: {
          questName: (_ = e.messages).quest_name,
          rewardName: _.reward_name,
          rewardNameWithArticle: _.reward_name_with_article,
          rewardRedemptionInstructions: _.reward_redemption_instructions,
          gameTitle: _.game_title,
          gamePublisher: _.game_publisher
        },
        colors: {
          primary: (E = e.colors).primary,
          secondary: E.secondary
        },
        rewardCodePlatforms: e.reward_code_platforms.filter(e => t.has(e))
      }
    }(e.config),
    userStatus: null == e.user_status ? null : I(e.user_status),
    targetedContent: e.targeted_content
  }
}

function T(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at
  }
}
let S = e => "".concat(r).concat(e).concat("/reward.png"),
  N = e => "".concat(r).concat(e).concat("/hero.png"),
  O = e => "".concat(r).concat(e).concat("/quest_bar_hero.gif"),
  A = e => "".concat(r).concat(e).concat("/game_tile.png"),
  R = (e, _) => "".concat(r).concat(e, "/").concat(_).concat("/game_logotype.png");

function l(e, _) {
  for (let [E, t] of e)
    if (!i(t) && t.targetedContent.includes(_)) return t;
  return null
}
let L = e => {
  switch (e) {
    case o.QuestRewardCodePlatforms.XBOX:
      return n.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case o.QuestRewardCodePlatforms.PLAYSTATION:
      return n.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case o.QuestRewardCodePlatforms.SWITCH:
      return n.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case o.QuestRewardCodePlatforms.PC:
      return n.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    default:
      return ""
  }
}