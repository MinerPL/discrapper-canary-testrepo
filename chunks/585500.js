n.d(t, {
  D: function() {
return d;
  }
}), n(47120);
var r = n(113434),
  i = n(918701),
  a = n(5881),
  s = n(566078),
  o = n(46140),
  l = n(689938);
let u = (0, a.T)({}),
  c = e => {
try {
  let t = '';
  if ('string' == typeof e)
    return e;
  if (Array.isArray(e)) {
    for (let n of e)
      t += c(n.content);
    return t;
  }
  return c(e.content);
} catch (e) {
  return u.error('Failed to convert ASTNode to string', e), '';
}
  };

function d(e) {
  let {
quest: t,
location: n,
questContent: a
  } = e, u = (0, r.uA)({
quest: t,
location: n,
questContent: a
  });
  return function(e) {
let t = function(e) {
  let {
    quest: t,
    taskDetails: n,
    useV2Variants: r = !1,
    connectedConsoleLinkOnClick: a,
    thirdPartyTaskDetails: u,
    withoutMarkdown: c
  } = e, d = t.config.messages.gameTitle, _ = s.r.build(t.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: E
  } = n, f = (0, i.zK)(t, o.S7.IN_HOUSE_CONSOLE_QUEST), h = (0, i.Kr)(t.config), p = (0, i.$J)(t) && (0, i.$H)(t);
  if (f && null != h)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: r,
        withoutMarkdown: a
      } = e, o = s.r.build(n.config).defaultReward.messages.nameWithArticle, u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, c = (0, i.Kr)(n.config), {
        targetMinutes: d
      } = r;
      return u ? l.Z.Messages.QUEST_REWARD_WITH_EXPIRATION[a ? 'astFormat' : 'format']({
        reward: o,
        duration: c
      }) : l.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE[a ? 'astFormat' : 'format']({
        targetMinutes: d,
        rewardNameWithArticle: o,
        duration: c
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  if (p)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: r,
        connectedConsoleLinkOnClick: a,
        withoutMarkdown: o
      } = e, u = s.r.build(n.config).defaultReward.messages.nameWithArticle, c = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, d = (0, i.Kr)(n.config), {
        targetMinutes: _
      } = r, E = n.config.messages.gameTitle;
      if (null != d)
        return c ? l.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD[o ? 'astFormat' : 'format']({
          gameTitle: E,
          reward: u,
          streamingDurationRequirement: _,
          onClick: a,
          duration: d
        }) : l.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[o ? 'astFormat' : 'format']({
          gameTitle: E,
          targetMinutes: _,
          rewardNameWithArticle: u,
          duration: d
        });
      return l.Z.Messages.QUEST_REWARD_MULTIPLATFORM[o ? 'astFormat' : 'format']({
        gameTitle: E,
        streamingDurationRequirement: _,
        reward: u,
        onClick: a
      });
    }({
      quest: t,
      taskDetails: n,
      connectedConsoleLinkOnClick: a,
      withoutMarkdown: c
    });
  if ((0, i.$J)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: r
      } = e, a = s.r.build(t.config).defaultReward.messages.nameWithArticle, o = (0, i.Kr)(t.config), {
        targetMinutes: u
      } = n, c = t.config.messages.gameTitle;
      return null != o ? l.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: u,
        rewardNameWithArticle: a,
        duration: o
      }) : l.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[r ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: u,
        rewardNameWithArticle: a
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  else if ((0, i.$H)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: r
      } = e, a = s.r.build(t.config).defaultReward.messages.nameWithArticle, o = (0, i.Kr)(t.config), {
        targetMinutes: u
      } = n, c = t.config.messages.gameTitle;
      return null != o ? l.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        streamingDurationRequirement: u,
        rewardNameWithArticle: a,
        duration: o
      }) : l.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD[r ? 'astFormat' : 'format']({
        gameTitle: c,
        questReward: a,
        streamingDurationRequirement: u
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
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
      return t ? l.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2[i ? 'astFormat' : 'format']({
        gameTitle: s,
        streamingDurationRequirement: a
      }) : l.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED[i ? 'astFormat' : 'format']({
        gameTitle: s,
        streamingDurationRequirement: a
      });
    }({
      useV2Variants: r,
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  return null != u ? u.description : null != h ? l.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[c ? 'astFormat' : 'format']({
    gameTitle: d,
    streamingDurationRequirement: E,
    questReward: _,
    duration: h
  }) : r ? l.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2[c ? 'astFormat' : 'format']({
    gameTitle: d,
    questReward: _,
    streamingDurationRequirement: E
  }) : l.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD[c ? 'astFormat' : 'format']({
    gameTitle: d,
    questReward: _,
    streamingDurationRequirement: E
  });
}(e);
return e.withoutMarkdown ? c(t) : t;
  }({
...e,
connectedConsoleLinkOnClick: u,
withoutMarkdown: !1
  });
}