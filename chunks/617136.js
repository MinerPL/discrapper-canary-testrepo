n.d(t, {
  _3: function() {
return I;
  },
  _b: function() {
return E;
  },
  dA: function() {
return m;
  },
  jZ: function() {
return i;
  },
  mH: function() {
return p;
  },
  uk: function() {
return f;
  }
});
var r, i, a = n(367907),
  o = n(857192),
  s = n(626135),
  l = n(569984),
  u = n(497505),
  c = n(566078),
  d = n(981631);
let _ = Object.keys(u.jn);

function E(e) {
  var t;
  return null !== (t = _.find(t => u.jn[t] === e)) && void 0 !== t ? t : '';
}

function f(e) {
  var t, n, r;
  return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}

function h(e) {
  let t = c.r.build(e.config);
  return {
quest_id: e.id,
game_id: t.application.id,
game_name: t.application.name
  };
}

function p(e, t) {
  return {
content_id: e,
content_name: E(e),
content_position: t
  };
}

function m(e) {
  let {
questId: t,
event: n,
properties: r,
trackGuildAndChannelMetadata: i = !1
  } = e, u = l.Z.quests.get(t);
  if (null != u) {
if (o.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, {
    ...h(u),
    ...r
  }), u.preview)
  return;
if (i)
  return a.ZP.trackWithMetadata(n, {
    ...h(u),
    ...r
  });
s.default.track(n, {
  ...h(u),
  ...r
});
  }
}

function I(e) {
  let {
questId: t,
questContent: n,
questContentCTA: r,
questContentPosition: i,
trackGuildAndChannelMetadata: a = !1
  } = e;
  m({
questId: t,
event: d.rMx.QUEST_CONTENT_CLICKED,
properties: {
  ...p(n, i),
  cta_name: r
},
trackGuildAndChannelMetadata: a
  });
}
(r = i || (i = {})).LEARN_MORE = 'LEARN_MORE', r.SHOW_REWARD = 'SHOW_REWARD', r.CLAIM_REWARD = 'CLAIM_REWARD', r.GET_REWARD_CODE = 'GET_REWARD_CODE', r.COPY_REWARD_CODE = 'COPY_REWARD_CODE', r.ACCEPT_QUEST = 'ACCEPT_QUEST', r.COPY_QUEST_URL = 'COPY_QUEST_URL', r.TRACK_PROGRESS = 'TRACK_PROGRESS', r.CONNECT_CONSOLE = 'CONNECT_CONSOLE', r.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK', r.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK', r.DEFIBRILLATOR = 'DEFIBRILLATOR', r.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME', r.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE', r.WATCH_STREAM = 'WATCH_STREAM', r.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE', r.OPEN_GAME_LINK = 'OPEN_GAME_LINK', r.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU', r.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK', r.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK', r.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT', r.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK', r.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE', r.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE', r.EXPAND = 'EXPAND', r.COLLAPSE = 'COLLAPSE', r.START_QUEST = 'START_QUEST';