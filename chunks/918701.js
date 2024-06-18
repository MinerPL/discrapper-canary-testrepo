"use strict";
let i;
n.d(t, {
  $H: function() {
    return el
  },
  $J: function() {
    return em
  },
  AV: function() {
    return W
  },
  Bz: function() {
    return eR
  },
  CE: function() {
    return D
  },
  FE: function() {
    return eE
  },
  GN: function() {
    return K
  },
  Gs: function() {
    return Z
  },
  Jg: function() {
    return ee
  },
  Kr: function() {
    return X
  },
  Mi: function() {
    return Y
  },
  Nj: function() {
    return ea
  },
  Qe: function() {
    return g
  },
  Rs: function() {
    return H
  },
  U3: function() {
    return P
  },
  WP: function() {
    return y
  },
  Xh: function() {
    return G
  },
  Xv: function() {
    return Q
  },
  _: function() {
    return F
  },
  dl: function() {
    return eu
  },
  f2: function() {
    return eI
  },
  gO: function() {
    return k
  },
  il: function() {
    return eN
  },
  j8: function() {
    return B
  },
  lQ: function() {
    return v
  },
  mN: function() {
    return er
  },
  nP: function() {
    return et
  },
  o9: function() {
    return ed
  },
  oo: function() {
    return es
  },
  pG: function() {
    return ec
  },
  ph: function() {
    return x
  },
  t2: function() {
    return j
  },
  uo: function() {
    return V
  },
  vR: function() {
    return J
  },
  xn: function() {
    return q
  },
  yI: function() {
    return U
  },
  ys: function() {
    return $
  },
  zE: function() {
    return z
  },
  zK: function() {
    return e_
  },
  zi: function() {
    return M
  }
}), n(627341), n(47120), n(411104);
var r = n(164369),
  s = n(278074),
  o = n(754700),
  a = n(551910),
  l = n(887003),
  u = n(742635),
  _ = n(782568);
n(597688);
var d = n(572004),
  c = n(70956),
  E = n(630388),
  I = n(823379),
  T = n(49012),
  h = n(960048),
  S = n(617136),
  f = n(687744),
  N = n(497505),
  A = n(242755),
  m = n(566078),
  O = n(312046),
  R = n(46140),
  C = n(689938);
let p = "https://cdn.discordapp.com/assets/quests/";

function g(e) {
  try {
    return (0, s.EQ)(e.config).with({
      config_version: 1
    }, () => !0).with({
      config_version: 2
    }, () => !0).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function L(e, t) {
  return null != m.r.build(t.config).application.ids.find(t => t === e)
}

function v(e, t) {
  let n;
  for (let [i, r] of e)
    if (L(t, r) && !M(r)) {
      n = r;
      break
    } return n
}

function D(e, t) {
  return Array.from(e.values()).find(e => L(t, e) && !M(e) && ea({
    quest: e
  }))
}

function M(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function P(e) {
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
      for (let [i, r] of Object.entries(e)) {
        var n;
        t[i] = {
          eventName: r.event_name,
          value: r.value,
          updatedAt: r.updated_at,
          completedAt: r.completed_at,
          heartbeat: null == (n = r.heartbeat) ? null : {
            lastBeatAt: n.last_beat_at,
            expiresAt: n.expires_at
          }
        }
      }
      return t
    }(e.progress)
  }
}

function y(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, s.EQ)(t).with({
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
              N.xw.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, f.Q)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => N.xw.has(e)),
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
    }).with({
      config_version: 2
    }, e => (0, O.Q)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : P(e.user_status),
    targetedContent: e.targeted_content
  }
}

function U(e) {
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

function b(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case l.w.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case l.w.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: U(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function G(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(b),
    errors: e.errors
  }
}

function w(e, t) {
  return e.startsWith("data") ? e : t
}
let k = e => {
    var t, n;
    let i = ed({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = m.r.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: w(s, "".concat(p).concat(e.id, "/").concat(s))
    }
  },
  B = e => w(e.config.assets.hero, "".concat(p).concat(e.id, "/").concat(e.config.assets.hero)),
  x = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : w(e.config.assets.questBarHero, "".concat(p).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  V = (e, t) => w(e.config.assets.gameTile, "".concat(p).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  Z = (e, t) => w(e.config.assets.logotype, "".concat(p).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  H = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function F(e, t) {
  for (let [n, i] of e)
    if (!M(i) && i.targetedContent.includes(t)) return i;
  return null
}

function Y(e, t) {
  return e.targetedContent.includes(t)
}
let j = e => {
  switch (e) {
    case N.y$.XBOX:
      return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case N.y$.PLAYSTATION:
      return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case N.y$.SWITCH:
      return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case N.y$.PC:
      return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case N.y$.CROSS_PLATFORM:
      return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function W(e) {
  var t, n;
  let {
    quest: i,
    taskDetails: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = r;
    return e >= .75 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return C.Z.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function K(e) {
  return Object.keys(R.a_).includes(N.jn[e])
}

function z(e, t) {
  if (!K(t)) return !1;
  let n = N.jn[t];
  return (0, E.yE)(e.dismissedQuestContent, R.a_[n])
}

function q(e) {
  return (0, s.EQ)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null
  }).exhaustive()
}

function X(e) {
  let t = q(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = {
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
    ...(0, r.Z)({
      start: new Date(e.expiresAt),
      end: new Date(t.expiresAt)
    })
  };
  return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? C.Z.Messages.DURATION_YEARS.format({
    years: n.years
  }) : n.months > 0 ? C.Z.Messages.DURATION_MONTHS.format({
    months: n.months
  }) : n.weeks > 0 ? C.Z.Messages.DURATION_WEEKS.format({
    weeks: n.weeks
  }) : C.Z.Messages.DURATION_DAYS.format({
    days: n.days
  })
}

function Q(e) {
  return null != q(e)
}

function J(e, t) {
  return e.targetedContent.includes(t)
}

function $(e, t) {
  h.Z.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function ee(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = v(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function et(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let en = /\.([a-zA-Z0-9]+)$/,
  ei = /^data:video\/([a-zA-Z0-9]+)\;/;

function er(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = en.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = ei.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function es(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, s.EQ)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === l.w.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === l.w.REWARD_CODE)
  }).exhaustive()
}
let eo = e => (0, s.EQ)(e.taskConfig).with({
  type: u.L.FIRST_PARTY
}, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);

function ea(e) {
  let {
    quest: t
  } = e;
  return (0, s.EQ)(t.config).with({
    configVersion: 1
  }, e => e_(t, R.S7.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => e_(t, R.S7.PLAYTIME_TASK) || eo(e)).exhaustive()
}

function el(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && ea({
    quest: t
  }) && (0, A.J)({
    location: n
  })
}

function eu(e) {
  return !e_(e, R.S7.IN_HOUSE_CONSOLE_QUEST)
}

function e_(e, t) {
  return m.r.build(e.config).features.has(t)
}

function ed(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  return (0, s.EQ)(i).with({
    tag: l.w.REWARD_CODE
  }, e => e).with({
    type: l.w.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function ec(e) {
  var t;
  let {
    quest: n,
    location: i,
    useV2Variants: r = !1,
    taskDetails: s
  } = e, o = n.config.messages.gameTitle, a = m.r.build(n.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: l
  } = null != s ? s : eN({
    quest: n,
    location: i
  }), u = e_(n, R.S7.IN_HOUSE_CONSOLE_QUEST), _ = X(n.config), d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  if (u && null != _) return d ? C.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
    reward: a,
    duration: _
  }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
    targetMinutes: l,
    rewardNameWithArticle: a,
    duration: _
  });
  if (em(n)) return null != _ ? C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    targetMinutes: l,
    rewardNameWithArticle: a,
    duration: _
  }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: o,
    targetMinutes: l,
    rewardNameWithArticle: a
  });
  if (el({
      quest: n,
      location: i
    })) return null != _ ? C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    streamingDurationRequirement: l,
    rewardNameWithArticle: a,
    duration: _
  }) : C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: o,
    questReward: a,
    streamingDurationRequirement: l
  });
  else if (es({
      quest: n
    })) return (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: o,
    streamingDurationRequirement: l
  });
  return null != _ ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: o,
    streamingDurationRequirement: l,
    questReward: a,
    duration: _
  }) : (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: o,
    questReward: a,
    streamingDurationRequirement: l
  })
}

function eE(e, t) {
  let n = m.r.build(e.config).application.link;
  (0, T.q)({
    href: n,
    onConfirm: () => {
      (0, S._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, _.Z)(n)
    }
  })
}
let eI = (e, t) => {
    (0, S._3)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, d.JG)(H(e))
  },
  eT = (e, t) => e > 0 ? Math.min(t / e, 1) : 0,
  eh = e => {
    var t, n, i, r, s, a, l, _;
    let {
      quest: d,
      taskType: E
    } = e, I = d.config.taskConfig;
    if (I.type !== u.L.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(I.type, "!"));
    let T = null != E ? E : null === (t = Object.values(I.tasks)[0]) || void 0 === t ? void 0 : t.eventName,
      h = null !== (a = I.tasks[T]) && void 0 !== a ? a : I.tasks[o.X.STREAM_ON_DESKTOP];
    if (null == h) throw Error("No task with type ".concat(E, " found for quest ").concat(d.id, "!"));
    let S = h.target,
      f = null !== (_ = null !== (l = null === (r = d.userStatus) || void 0 === r ? void 0 : null === (i = r.progress) || void 0 === i ? void 0 : null === (n = i[T]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : null === (s = d.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== _ ? _ : 0;
    return {
      progressSeconds: f,
      targetSeconds: S,
      targetMinutes: Math.round(S / c.Z.Seconds.MINUTE),
      percentComplete: eT(S, f),
      taskType: T
    }
  },
  eS = e => o.T.ALL.has(e) ? e : null,
  ef = e => {
    var t, n;
    let {
      quest: i
    } = e;
    for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(I.lm)) {
      let t = eS(e.eventName);
      if (null != t) return eh({
        quest: i,
        taskType: t
      })
    }
    return eh({
      quest: i
    })
  },
  eN = e => {
    let {
      quest: t,
      location: n
    } = e;
    return (0, s.EQ)(t).with({
      config: {
        configVersion: 1
      }
    }, e => {
      var t, n;
      let i = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
        r = Math.round(e.config.streamDurationRequirementMinutes * c.Z.Seconds.MINUTE);
      return {
        progressSeconds: i,
        targetSeconds: r,
        targetMinutes: e.config.streamDurationRequirementMinutes,
        percentComplete: eT(r, i),
        taskType: o.X.STREAM_ON_DESKTOP
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: o.X.STREAM_ON_DESKTOP
    } : eA(e) ? ef({
      quest: e
    }) : el({
      quest: e,
      location: n
    }) ? eh({
      quest: e,
      taskType: o.X.PLAY_ON_DESKTOP
    }) : eh({
      quest: e,
      taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive()
  };
let eA = (i = [o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION], e => i.some(t => null != e.config.taskConfig.tasks[t])),
  em = e => (0, s.EQ)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, eA).exhaustive(),
  eO = (e, t) => {
    var n, i;
    let r = null == e ? void 0 : null === (i = e.progress[t]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == r) return !1;
    let s = new Date(r).valueOf();
    return !isNaN(s) && s > Date.now()
  },
  eR = e => (0, s.EQ)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, e => null != e.userStatus && (eO(e.userStatus, o.X.PLAY_ON_XBOX) || eO(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive()