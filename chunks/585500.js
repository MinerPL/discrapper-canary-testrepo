n.d(t, {
  D: function() {
return _;
  }
}), n(47120);
var r = n(113434),
  i = n(918701),
  a = n(5881),
  s = n(665430),
  o = n(566078),
  l = n(46140),
  u = n(689938);
let c = (0, a.T)({}),
  d = e => {
try {
  let t = '';
  if ('string' == typeof e)
    return e;
  if (Array.isArray(e)) {
    for (let n of e)
      t += d(n.content);
    return t;
  }
  return d(e.content);
} catch (e) {
  return c.error('Failed to convert ASTNode to string', e), '';
}
  };

function _(e) {
  let {
quest: t,
location: n,
questContent: a
  } = e, c = (0, r.uA)({
quest: t,
location: n,
questContent: a
  });
  return function(e) {
let t = function(e) {
  let {
    quest: t,
    taskDetails: n,
    location: r,
    useV2Variants: a = !1,
    connectedConsoleLinkOnClick: c,
    thirdPartyTaskDetails: d,
    withoutMarkdown: _
  } = e, E = t.config.messages.gameTitle, f = o.r.build(t.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: h
  } = n, p = (0, i.zK)(t, l.S7.IN_HOUSE_CONSOLE_QUEST), m = (0, i.Kr)(t.config), I = (0, i.$J)(t) && (0, i.$H)(t), T = (0, s.T)({
    location: r
  });
  if (p && null != m)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: r,
        withoutMarkdown: a
      } = e, s = o.r.build(n.config).defaultReward.messages.nameWithArticle, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, c = (0, i.Kr)(n.config), {
        targetMinutes: d
      } = r;
      return l ? u.Z.Messages.QUEST_REWARD_WITH_EXPIRATION[a ? 'astFormat' : 'format']({
        reward: s,
        duration: c
      }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE[a ? 'astFormat' : 'format']({
        targetMinutes: d,
        rewardNameWithArticle: s,
        duration: c
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: _
    });
  if (I)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: r,
        connectedConsoleLinkOnClick: a,
        withoutMarkdown: s,
        mobileGAExperiment: l
      } = e, c = o.r.build(n.config).defaultReward.messages.nameWithArticle, d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, _ = (0, i.Kr)(n.config), {
        targetMinutes: E
      } = r, f = n.config.messages.gameTitle;
      if (null != _)
        return d && !l ? u.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
          gameTitle: f,
          reward: c,
          streamingDurationRequirement: E,
          onClick: a,
          duration: _
        }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
          gameTitle: f,
          targetMinutes: E,
          rewardNameWithArticle: c,
          duration: _
        });
      return u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[s ? 'astFormat' : 'format']({
        gameTitle: f,
        targetMinutes: E,
        rewardNameWithArticle: c
      });
    }({
      quest: t,
      taskDetails: n,
      connectedConsoleLinkOnClick: c,
      withoutMarkdown: _,
      mobileGAExperiment: T
    });
  if ((0, i.$J)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: r
      } = e, a = o.r.build(t.config).defaultReward.messages.nameWithArticle, s = (0, i.Kr)(t.config), {
        targetMinutes: l
      } = n, c = t.config.messages.gameTitle;
      return null != s ? u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: l,
        rewardNameWithArticle: a,
        duration: s
      }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[r ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: l,
        rewardNameWithArticle: a
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: _
    });
  else if ((0, i.$H)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: r
      } = e, a = o.r.build(t.config).defaultReward.messages.nameWithArticle, s = (0, i.Kr)(t.config), {
        targetMinutes: l
      } = n, c = t.config.messages.gameTitle;
      return null != s ? u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        streamingDurationRequirement: l,
        rewardNameWithArticle: a,
        duration: s
      }) : u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        questReward: a,
        streamingDurationRequirement: l
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: _
    });
  else if ((0, i.oo)({
      quest: t
    }))
    return function(e) {
      let {
        useV2Variants: t,
        quest: n,
        taskDetails: r,
        withoutMarkdown: i
      } = e, {
        targetMinutes: a
      } = r, s = n.config.messages.gameTitle;
      return t ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2[i ? 'astFormat' : 'format']({
        gameTitle: s,
        streamingDurationRequirement: a
      }) : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED[i ? 'astFormat' : 'format']({
        gameTitle: s,
        streamingDurationRequirement: a
      });
    }({
      useV2Variants: a,
      quest: t,
      taskDetails: n,
      withoutMarkdown: _
    });
  return null != d ? d.description : null != m ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[_ ? 'astFormat' : 'format']({
    gameTitle: E,
    streamingDurationRequirement: h,
    questReward: f,
    duration: m
  }) : a ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2[_ ? 'astFormat' : 'format']({
    gameTitle: E,
    questReward: f,
    streamingDurationRequirement: h
  }) : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD[_ ? 'astFormat' : 'format']({
    gameTitle: E,
    questReward: f,
    streamingDurationRequirement: h
  });
}(e);
return e.withoutMarkdown ? d(t) : t;
  }({
...e,
connectedConsoleLinkOnClick: c,
withoutMarkdown: !1
  });
}