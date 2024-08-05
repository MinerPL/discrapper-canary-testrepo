let r;
n.d(t, {
  $H: function() {
return eg;
  },
  $J: function() {
return ex;
  },
  AV: function() {
return en;
  },
  Bz: function() {
return ek;
  },
  C9: function() {
return ej;
  },
  CE: function() {
return k;
  },
  FE: function() {
return ev;
  },
  GN: function() {
return er;
  },
  Gs: function() {
return X;
  },
  Jg: function() {
return e_;
  },
  K: function() {
return eu;
  },
  Kr: function() {
return es;
  },
  Mi: function() {
return ee;
  },
  Nj: function() {
return eT;
  },
  OG: function() {
return eZ;
  },
  Qe: function() {
return b;
  },
  Rs: function() {
return $;
  },
  U3: function() {
return V;
  },
  V$: function() {
return eH;
  },
  WP: function() {
return H;
  },
  Xh: function() {
return j;
  },
  Xv: function() {
return eo;
  },
  ZZ: function() {
return w;
  },
  _: function() {
return J;
  },
  _D: function() {
return U;
  },
  _j: function() {
return eY;
  },
  b7: function() {
return eU;
  },
  dl: function() {
return eS;
  },
  f2: function() {
return eO;
  },
  fY: function() {
return eF;
  },
  gI: function() {
return eV;
  },
  gO: function() {
return K;
  },
  iQ: function() {
return F;
  },
  il: function() {
return eP;
  },
  j8: function() {
return z;
  },
  lQ: function() {
return G;
  },
  mN: function() {
return ep;
  },
  nP: function() {
return eE;
  },
  o9: function() {
return eN;
  },
  oo: function() {
return em;
  },
  ph: function() {
return q;
  },
  t2: function() {
return et;
  },
  uo: function() {
return Q;
  },
  vQ: function() {
return el;
  },
  vR: function() {
return ec;
  },
  xn: function() {
return ea;
  },
  yI: function() {
return Z;
  },
  ys: function() {
return ed;
  },
  zE: function() {
return ei;
  },
  zK: function() {
return eA;
  },
  zi: function() {
return B;
  }
}), n(627341), n(47120), n(411104);
var i = n(164369),
  a = n(392711),
  s = n(278074),
  o = n(754700),
  l = n(551910),
  u = n(887003),
  c = n(742635),
  d = n(570140),
  _ = n(230711),
  E = n(782568);
n(597688);
var f = n(231757);
n(706454);
var h = n(572004),
  p = n(70956),
  m = n(630388),
  I = n(823379),
  T = n(49012),
  g = n(960048),
  S = n(617136),
  A = n(569984),
  N = n(497505),
  v = n(566078),
  O = n(312046),
  R = n(46140),
  C = n(981631),
  y = n(701488),
  D = n(689938);
let L = 'https://cdn.discordapp.com/assets/quests/';

function b(e) {
  try {
return (0, s.EQ)(e.config).with({
  config_version: 2
}, () => !0).exhaustive();
  } catch (n) {
var t;
return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
  }
}
let M = e => e.application_id === y.Ev || e.platform === C.M7m.XBOX,
  P = e => e.platform === C.M7m.PS4 || e.platform === C.M7m.PS5;

function U(e, t) {
  if (null == e)
return !1;
  let n = e.name.toLowerCase(),
r = v.r.build(t.config).application.name.toLowerCase();
  return M(e) || P(e) ? n === r : null != e.application_id && x(e.application_id, t);
}

function w(e, t) {
  for (let [n, r] of e)
if (U(t, r) && !B(r))
  return r;
}

function x(e, t) {
  return null != v.r.build(t.config).application.ids.find(t => t === e);
}

function G(e, t) {
  let n;
  for (let [r, i] of e)
if (x(t, i) && !B(i)) {
  n = i;
  break;
}
  return n;
}

function k(e, t) {
  return Array.from(e.values()).find(e => x(t, e) && !B(e) && eT({
quest: e
  }));
}

function B(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now();
}

function F(e) {
  if (!B(e))
return !1;
  let t = Date.now() - 2592000000,
n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t) && !0;
}

function V(e) {
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
  for (let [r, i] of Object.entries(e)) {
    var n;
    t[r] = {
      eventName: i.event_name,
      value: i.value,
      updatedAt: i.updated_at,
      completedAt: i.completed_at,
      heartbeat: null == (n = i.heartbeat) ? null : {
        lastBeatAt: n.last_beat_at,
        expiresAt: n.expires_at
      }
    };
  }
  return t;
}(e.progress)
  };
}

function H(e) {
  var t;
  return {
id: e.id,
preview: e.preview,
config: (t = e.config, (0, s.EQ)(t).with({
  config_version: 2
}, e => (0, O.Q)(e)).exhaustive()),
userStatus: null == e.user_status ? null : V(e.user_status),
targetedContent: e.targeted_content
  };
}

function Z(e) {
  var t;
  return {
userId: e.user_id,
questId: e.quest_id,
code: e.code,
platform: e.platform,
claimedAt: e.claimed_at,
tier: null !== (t = e.tier) && void 0 !== t ? t : null
  };
}

function Y(e) {
  return {
skuId: e.sku_id,
tenantMetadata: function(e) {
  if ((null == e ? void 0 : e.quest_rewards) == null)
    return null;
  let t = e.quest_rewards;
  switch (t.reward.tag) {
    case u.w.IN_GAME:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag
          }
        }
      };
    case u.w.REWARD_CODE:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag,
            rewardCode: Z(t.reward.reward_code)
          }
        }
      };
  }
}(e.tenant_metadata)
  };
}

function j(e) {
  return {
claimedAt: e.claimed_at,
items: e.entitlements.map(Y),
errors: e.errors
  };
}

function W(e, t) {
  return e.startsWith('data') ? e : t;
}
let K = e => {
var t, n;
let r = eN({
    quest: e,
    idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
  }),
  i = v.r.build(e.config).defaultRewardAsset,
  a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
return {
  name: a,
  url: W(a, ''.concat(L).concat(e.id, '/').concat(a))
};
  },
  z = e => W(e.config.assets.hero, ''.concat(L).concat(e.id, '/').concat(e.config.assets.hero)),
  q = e => W(e.config.assets.questBarHero, ''.concat(L).concat(e.id, '/').concat(e.config.assets.questBarHero)),
  Q = (e, t) => W(e.config.assets.gameTile, ''.concat(L).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)),
  X = (e, t) => W(e.config.assets.logotype, ''.concat(L).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)),
  $ = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);

function J(e, t) {
  for (let [n, r] of e)
if (!B(r) && r.targetedContent.includes(t))
  return r;
  return null;
}

function ee(e, t) {
  return e.targetedContent.includes(t);
}
let et = e => {
  switch (e) {
case N.y$.XBOX:
  return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
case N.y$.PLAYSTATION:
  return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
case N.y$.SWITCH:
  return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
case N.y$.PC:
  return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
case N.y$.CROSS_PLATFORM:
  return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
  }
};

function en(e) {
  var t, n;
  let {
quest: r,
taskDetails: i,
thirdPartyTaskDetails: a
  } = e;
  if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
return D.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
let {
  percentComplete: e
} = i, t = null != a ? a.completedRatio : e;
return t >= 0.75 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : D.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
  }
  return D.Z.Messages.QUESTS_TITLE.format({
questName: r.config.messages.questName
  });
}

function er(e) {
  return Object.keys(R.a_).includes(N.jn[e]);
}

function ei(e, t) {
  if (!er(t))
return !1;
  let n = N.jn[t];
  return (0, m.yE)(e.dismissedQuestContent, R.a_[n]);
}

function ea(e) {
  return (0, s.EQ)(e).with({
configVersion: 2
  }, e => {
let t = e.rewardsConfig.rewards.find(e => e.type === u.w.COLLECTIBLE);
return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
  }).exhaustive();
}

function es(e) {
  let t = ea(e);
  if (null == t || !('expiresAt' in t) || null == t.expiresAt)
return null;
  let n = {
days: 0,
weeks: 0,
months: 0,
years: 0,
...(0, i.Z)({
  start: new Date(e.expiresAt),
  end: new Date(t.expiresAt)
})
  };
  return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? D.Z.Messages.DURATION_YEARS.format({
years: n.years
  }) : n.months > 0 ? D.Z.Messages.DURATION_MONTHS.format({
months: n.months
  }) : n.weeks > 0 ? D.Z.Messages.DURATION_WEEKS.format({
weeks: n.weeks
  }) : D.Z.Messages.DURATION_DAYS.format({
days: n.days
  });
}

function eo(e) {
  return null != ea(e);
}

function el(e) {
  return (0, s.EQ)(e).with({
configVersion: 2
  }, e => e.rewardsConfig.rewards.some(e => e.type === u.w.IN_GAME)).exhaustive();
}

function eu(e) {
  return (0, s.EQ)(e).with({
configVersion: 2
  }, e => {
var t;
return null !== (t = e.rewardsConfig.rewards.find(e => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
  }).exhaustive();
}

function ec(e, t) {
  return e.targetedContent.includes(t);
}

function ed(e, t) {
  g.Z.captureException(e, {
...t,
tags: {
  ...null == t ? void 0 : t.tags,
  app_context: 'quests'
}
  });
}

function e_(e, t) {
  if (null == t || null == e)
return null;
  for (let n of t) {
let t = w(e, n);
if (null != t)
  return t;
  }
  return null;
}

function eE(e) {
  return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let ef = /\.([a-zA-Z0-9]+)$/,
  eh = /^data:video\/([a-zA-Z0-9]+)\;/;

function ep(e) {
  var t, n, r, i, a;
  switch (null !== (a = null === (n = ef.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = eh.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
case 'webm':
  return 'video/webm';
case 'mp4':
  return 'video/mp4';
default:
  throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
  }
}

function em(e) {
  let {
quest: {
  config: t
}
  } = e;
  return (0, s.EQ)(t).with({
configVersion: 2
  }, e => {
let t = e.rewardsConfig;
return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === u.w.REWARD_CODE);
  }).exhaustive();
}
let eI = e => (0, s.EQ)(e.taskConfig).with({
  type: c.L.FIRST_PARTY
}, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);

function eT(e) {
  let {
quest: t
  } = e;
  return (0, s.EQ)(t.config).with({
configVersion: 2
  }, e => eA(t, R.S7.PLAYTIME_TASK) || eI(e)).exhaustive();
}

function eg(e) {
  return null != e && eT({
quest: e
  });
}

function eS(e) {
  return !eA(e, R.S7.IN_HOUSE_CONSOLE_QUEST);
}

function eA(e, t) {
  return v.r.build(e.config).features.has(t);
}

function eN(e) {
  let {
quest: t,
idx: n
  } = e;
  if (null == n)
return null;
  let r = t.config.rewardsConfig.rewards[n];
  return (0, s.EQ)(r).with({
type: u.w.REWARD_CODE
  }, e => e).otherwise(() => null);
}

function ev(e, t) {
  let n = v.r.build(e.config).application.link;
  (0, T.q)({
href: n,
onConfirm: () => {
  (0, S._3)({
    questId: e.id,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position
  }), (0, E.Z)(n);
}
  });
}
let eO = (e, t) => {
(0, S._3)({
  questId: e,
  questContent: t.content,
  questContentCTA: t.ctaContent,
  questContentPosition: t.position
}), (0, h.JG)($(e));
  },
  eR = (e, t) => e > 0 ? (0, a.floor)(Math.min(t / e, 1), 4) : 0,
  eC = e => ek(e) || A.Z.isProgressingOnDesktop(e.id),
  ey = (e, t) => {
var n, r, i, s;
let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (i = s.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
if (null == o || !eC(e))
  return 0;
let l = Date.now() - new Date(o).valueOf();
return (0, a.floor)(l / p.Z.Millis.SECOND, 2);
  },
  eD = (e, t) => {
var n, r, i;
let s = t.target,
  o = e.userStatus;
if ((null == o ? void 0 : o.completedAt) != null)
  return s;
let l = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
  u = null !== (i = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0,
  c = ey(e, t),
  d = Math.min(0.99 * s, u + c);
return (0, a.floor)(d, 2);
  },
  eL = e => {
var t, n;
let {
  quest: r,
  taskType: i,
  includeTaskTypes: a = o.T.ALL
} = e, s = r.config.taskConfig;
if (s.type !== c.L.FIRST_PARTY)
  throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
let l = null != i ? i : null === (t = Object.values(s.tasks).filter(e => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
  u = null !== (n = s.tasks[l]) && void 0 !== n ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
if (null == u)
  throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
let d = u.target,
  _ = eD(r, u);
return {
  progressSeconds: _,
  targetSeconds: d,
  targetMinutes: Math.round(d / p.Z.Seconds.MINUTE),
  percentComplete: eR(d, _),
  taskType: l
};
  },
  eb = e => o.T.ALL.has(e) ? e : null,
  eM = e => {
var t, n;
let {
  quest: r,
  includeTaskTypes: i = o.T.ALL
} = e;
for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
      a = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
    if (null != i && null != a)
      return new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1;
    if (null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null)
      return new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1;
    if (null != i && null == a)
      return -1;
    else
      return 1;
  }).filter(I.lm)) {
  let t = eb(e.eventName);
  if (null != t) {
    if (null == i ? void 0 : i.has(t))
      return eL({
        quest: r,
        taskType: t,
        includeTaskTypes: i
      });
  }
}
return eL({
  quest: r,
  includeTaskTypes: i
});
  },
  eP = (e, t) => (0, s.EQ)(e).with({
config: {
  configVersion: 2
}
  }, e => e.config.taskConfig.type !== c.L.FIRST_PARTY ? {
progressSeconds: 0,
targetSeconds: 1,
targetMinutes: 1,
percentComplete: 0,
taskType: o.X.STREAM_ON_DESKTOP
  } : ew(e) ? eM({
quest: e,
includeTaskTypes: null != t ? t : ek(e) ? o.T.CONSOLE : o.T.ALL
  }) : eg(e) ? eL({
quest: e,
taskType: o.X.PLAY_ON_DESKTOP
  }) : eL({
quest: e,
taskType: o.X.STREAM_ON_DESKTOP
  })).exhaustive();

function eU(e) {
  return (0, s.EQ)(e.config).with({
configVersion: 2
  }, t => {
var n, r, i, a;
if (t.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
  return null;
let s = Object.keys(t.taskConfig.tasks)[0],
  o = t.taskConfig.tasks[s],
  l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
  u = eR(o.target, l);
return {
  title: o.title,
  description: o.description,
  target: o.target,
  progress: l,
  completedRatio: u
};
  }).exhaustive();
}
let ew = (r = [
o.X.PLAY_ON_XBOX,
o.X.PLAY_ON_PLAYSTATION
  ], e => r.some(t => null != e.config.taskConfig.tasks[t])),
  ex = e => (0, s.EQ)(e).with({
config: {
  configVersion: 2
}
  }, ew).exhaustive(),
  eG = (e, t) => {
var n, r;
let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
if (null == i)
  return !1;
let a = new Date(i).valueOf();
return !isNaN(a) && a > Date.now();
  },
  ek = e => (0, s.EQ)(e).with({
config: {
  configVersion: 2
}
  }, e => null != e.userStatus && (eG(e.userStatus, o.X.PLAY_ON_XBOX) || eG(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();

function eB() {
  _.Z.open(C.oAB.CONNECTIONS);
}

function eF(e, t) {
  let {
platformType: n,
quest: r,
showInline: i
  } = e;
  (0, S._3)({
questId: r.id,
questContent: t.content,
questContentCTA: t.ctaContent
  }), !i && eB(), (0, f.Z)({
platformType: n,
location: t.ctaContent
  });
}

function eV(e, t) {
  let {
quest: n,
showInline: r
  } = e;
  (0, S._3)({
questId: n.id,
questContent: t.content,
questContentPosition: t.position,
questContentRowIndex: t.rowIndex,
questContentCTA: t.ctaContent
  }), !r && eB(), d.Z.dispatch({
type: 'CONNECTIONS_GRID_MODAL_SHOW',
onComplete: e => (0, f.Z)({
  platformType: e
}),
includedPlatformTypes: new Set([
  C.ABu.XBOX,
  C.ABu.PLAYSTATION
])
  });
}

function eH(e, t) {
  let {
quest: n
  } = e;
  (0, S._3)({
questId: n.id,
questContent: t.content,
questContentPosition: t.position,
questContentCTA: t.ctaContent
  }), eB();
}

function eZ() {
  return window.location.pathname.startsWith(C.Z5c.QUEST_HOME);
}

function eY(e) {
  return 'xbox' === e.connected_account_type ? C.ABu.XBOX : C.ABu.PLAYSTATION;
}

function ej(e) {
  return eY(e) === C.ABu.XBOX ? D.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : D.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}