n.d(t, {
  D: function() {
return u;
  }
});
var s = n(113434),
  a = n(918701),
  r = n(566078),
  i = n(46140),
  o = n(689938);

function u(e) {
  let {
quest: t,
taskDetails: n,
location: u,
questContent: _,
useV2Variants: l = !1,
thirdPartyTaskDetails: T,
expiryDate: E
  } = e, I = t.config.messages.gameTitle, c = r.r.build(t.config).defaultReward.messages.nameWithArticle, {
targetMinutes: d
  } = n, R = (0, a.zK)(t, i.S7.IN_HOUSE_CONSOLE_QUEST), m = (0, a.Kr)(t.config), S = (0, a.$J)(t) && (0, a.$H)(t), g = (0, s.uA)({
quest: t,
location: u,
questContent: _
  });
  if (R && null != m)
return function(e, t, n) {
  var s;
  let i = r.r.build(e.config).defaultReward.messages.nameWithArticle,
    u = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null,
    _ = (0, a.Kr)(e.config),
    {
      targetMinutes: l
    } = t;
  return u ? null != n ? o.Z.Messages.QUEST_REWARD_WITH_EXPIRATION_WITH_EXPIRY_DATE.format({
    reward: i,
    duration: _,
    expiryDate: n
  }) : o.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
    reward: i,
    duration: _
  }) : null != n ? o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE_WITH_EXPIRY_DATE.format({
    targetMinutes: l,
    rewardNameWithArticle: i,
    duration: _,
    expiryDate: n
  }) : o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
    targetMinutes: l,
    rewardNameWithArticle: i,
    duration: _
  });
}(t, n, E);
  if (S)
return function(e) {
  var t;
  let {
    quest: n,
    taskDetails: s,
    connectedConsoleLinkOnClick: i,
    expiryDate: u
  } = e, _ = r.r.build(n.config).defaultReward.messages.nameWithArticle, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (0, a.Kr)(n.config), {
    targetMinutes: E
  } = s, I = n.config.messages.gameTitle;
  if (null != T)
    return l ? null != u ? o.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
      gameTitle: I,
      reward: _,
      streamingDurationRequirement: E,
      onClick: i,
      duration: T,
      expiryDate: u
    }) : o.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
      gameTitle: I,
      reward: _,
      streamingDurationRequirement: E,
      onClick: i,
      duration: T
    }) : null != u ? o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
      gameTitle: I,
      targetMinutes: E,
      rewardNameWithArticle: _,
      duration: T,
      expiryDate: u
    }) : o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
      gameTitle: I,
      targetMinutes: E,
      rewardNameWithArticle: _,
      duration: T
    });
  return null != u ? o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
    gameTitle: I,
    targetMinutes: E,
    rewardNameWithArticle: _,
    expiryDate: u
  }) : o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: I,
    targetMinutes: E,
    rewardNameWithArticle: _
  });
}({
  quest: t,
  taskDetails: n,
  connectedConsoleLinkOnClick: g,
  expiryDate: E
});
  if ((0, a.$J)(t))
return function(e, t, n) {
  let s = r.r.build(e.config).defaultReward.messages.nameWithArticle,
    i = (0, a.Kr)(e.config),
    {
      targetMinutes: u
    } = t,
    _ = e.config.messages.gameTitle;
  return null != i ? null != n ? o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
    gameTitle: _,
    targetMinutes: u,
    rewardNameWithArticle: s,
    duration: i,
    expiryDate: n
  }) : o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: _,
    targetMinutes: u,
    rewardNameWithArticle: s,
    duration: i
  }) : null != n ? o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
    gameTitle: _,
    targetMinutes: u,
    rewardNameWithArticle: s,
    expiryDate: n
  }) : o.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: _,
    targetMinutes: u,
    rewardNameWithArticle: s
  });
}(t, n, E);
  else if ((0, a.$H)(t))
return function(e, t, n) {
  let s = r.r.build(e.config).defaultReward.messages.nameWithArticle,
    i = (0, a.Kr)(e.config),
    {
      targetMinutes: u
    } = t,
    _ = e.config.messages.gameTitle;
  return null != i ? null != n ? o.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
    gameTitle: _,
    streamingDurationRequirement: u,
    rewardNameWithArticle: s,
    duration: i,
    expiryDate: n
  }) : o.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: _,
    streamingDurationRequirement: u,
    rewardNameWithArticle: s,
    duration: i
  }) : null != n ? o.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
    gameTitle: _,
    questReward: s,
    streamingDurationRequirement: u,
    expiryDate: n
  }) : o.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: _,
    questReward: s,
    streamingDurationRequirement: u
  });
}(t, n, E);
  else if ((0, a.oo)({
  quest: t
}))
return function(e, t, n, s) {
  let {
    targetMinutes: a
  } = n, r = t.config.messages.gameTitle;
  return e ? null != s ? o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2_WITH_EXPIRY_DATE.format({
    gameTitle: r,
    streamingDurationRequirement: a,
    expiryDate: s
  }) : o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2.format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : null != s ? o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_WITH_EXPIRY_DATE.format({
    gameTitle: r,
    streamingDurationRequirement: a,
    expiryDate: s
  }) : o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
    gameTitle: r,
    streamingDurationRequirement: a
  });
}(l, t, n, E);
  return null != T ? T.description : null != m ? null != E ? o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
gameTitle: I,
streamingDurationRequirement: d,
questReward: c,
duration: m,
expiryDate: E
  }) : o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
gameTitle: I,
streamingDurationRequirement: d,
questReward: c,
duration: m
  }) : l ? null != E ? o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2_WITH_EXPIRY_DATE.format({
gameTitle: I,
questReward: c,
streamingDurationRequirement: d,
expiryDate: E
  }) : o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2.format({
gameTitle: I,
questReward: c,
streamingDurationRequirement: d
  }) : null != E ? o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
gameTitle: I,
questReward: c,
streamingDurationRequirement: d,
expiryDate: E
  }) : o.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
gameTitle: I,
questReward: c,
streamingDurationRequirement: d
  });
}