n.d(t, {
  $1: function() {
return ed;
  },
  CE: function() {
return em;
  },
  DE: function() {
return ef;
  },
  Es: function() {
return el;
  },
  FP: function() {
return es;
  },
  K6: function() {
return eu;
  },
  NZ: function() {
return eh;
  },
  QO: function() {
return er;
  },
  V1: function() {
return ei;
  },
  bA: function() {
return en;
  },
  fd: function() {
return eo;
  },
  ni: function() {
return ep;
  },
  ob: function() {
return ec;
  },
  pV: function() {
return r;
  }
}), n(47120), n(390547), n(653041), n(627341), n(757143);
var r, i, a = n(470079),
  s = n(392711),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(925549),
  d = n(317381),
  _ = n(841784),
  E = n(367907),
  f = n(835473),
  h = n(12498),
  p = n(557135),
  m = n(471445),
  I = n(66999),
  T = n(15274),
  g = n(924301),
  S = n(230900),
  A = n(703656),
  N = n(881824),
  v = n(922482),
  O = n(565799),
  R = n(501655),
  C = n(344185),
  y = n(814443),
  D = n(199902),
  L = n(592125),
  b = n(480294),
  M = n(984933),
  P = n(271383),
  U = n(496675),
  w = n(158776),
  x = n(699516),
  G = n(594174),
  k = n(979651),
  B = n(938475),
  F = n(626135),
  V = n(823379),
  H = n(5192),
  Z = n(51144),
  Y = n(912787),
  j = n(126134),
  W = n(981631),
  K = n(765305),
  z = n(689938);
let q = 7,
  Q = 6,
  X = 5,
  $ = 4,
  J = 3,
  ee = 2,
  et = 1;

function en(e, t) {
  let n = B.ZP.getVoiceStatesForChannelAlt(e, t).map(e => {
  let {
    user: t
  } = e;
  return t.id;
}),
r = b.Z.hasConsented(W.pjP.PERSONALIZATION),
i = y.Z.getUserAffinities();
  return (r && i.length > 0 ? (0, s.orderBy)(n, [e => {
var t, n;
return null !== (n = null === (t = y.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
  }], ['desc']) : n).map(e => G.default.getUser(e)).filter(V.lm);
}

function er(e, t) {
  return function(e, t, n, r) {
let i;
let s = es(e),
  o = a.useMemo(() => s.map(e => G.default.getUser(e)).filter(V.lm), [s]),
  l = o.slice(0, 6),
  u = Math.max(0, o.length - l.length);
if (null != r && r.length > 0) {
  let e = H.ZP.getName(t, n, G.default.getUser(r[0]));
  i = 1 === r.length ? z.Z.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
    username: e
  }) : z.Z.Messages.GUILD_POPOUT_USERS_STREAMING.format({
    username: e,
    count: r.length - 1
  });
} else if (l.length > 0) {
  let e = H.ZP.getName(t, n, G.default.getUser(l[0].id));
  i = 1 === l.length ? z.Z.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
    username: e
  }) : z.Z.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
    username: e,
    count: l.length - 1
  });
}
return {
  totalUsers: o.length,
  usersToShow: l,
  othersCount: u,
  usersText: i
};
  }((0, l.e7)([B.ZP], () => B.ZP.getVoiceStatesForChannelAlt(e, t), [
e,
t
  ]).map(e => {
let {
  user: t
} = e;
return t.id;
  }), t, e);
}
(i = r || (r = {})).CARD = 'card', i.JOIN_BUTTON = 'join_button';

function ei(e) {
  let t = e.id,
[n, r] = a.useState([]),
[i, u] = a.useState(0),
c = (0, l.Wu)([
  M.ZP,
  C.Z
], () => {
  let e = M.ZP.getChannels(t)[M.Zb].map(e => {
    let {
      channel: t
    } = e;
    return t.id;
  });
  return [
    ...e,
    ...Object.values(C.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))
  ];
}, [t]),
E = (0, l.e7)([
  g.ZP,
  L.Z
], () => g.ZP.getGuildScheduledEventsForGuild(t).filter(e => (0, g.xt)(e)).map(e => {
  var t;
  return {
    category: j.L.EVENT,
    event: e,
    isStage: !!(null === (t = L.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
  };
}), [t], s.isEqual),
f = E.map(e => {
  let {
    event: t
  } = e;
  return t.channel_id;
}),
h = (0, l.e7)([x.Z], () => x.Z.getRelationships()),
p = a.useMemo(() => Object.keys(h).filter(e => h[e] === W.OGo.BLOCKED), [h]),
m = (0, l.e7)([B.ZP], () => B.ZP.getVoiceStates(t), [t]),
I = a.useMemo(() => {
  let t = Object.keys(m);
  return 0 === t.length ? [] : t.filter(t => {
    let n = m[t].filter(V.lm);
    return !(0 === n.length || f.includes(t)) && null == n.find(e => {
      let {
        user: t
      } = e;
      return p.includes(t.id);
    }) && t !== e.afkChannelId && c.includes(t);
  });
}, [
  m,
  f,
  c,
  p,
  e.afkChannelId
]),
T = (0, l.e7)([
  d.ZP,
  k.Z,
  D.Z,
  w.Z,
  L.Z
], () => I.map(e => {
  var t;
  let n = D.Z.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
    r = m[e].filter(V.lm),
    i = d.ZP.getEmbeddedActivitiesForChannel(e),
    a = j.L.HANGOUT,
    s = [],
    o = r.map(e => {
      let {
        user: t
      } = e;
      return t.id;
    }),
    l = k.Z.hasVideo(e),
    u = [],
    c = [];
  for (let e of (i.length > 0 && (a = j.L.EMBEDDED_ACTIVITY), r)) {
    let t = w.Z.findActivity(e.user.id, ea(e));
    null != t && !(0, _.Z)(t) && (a = j.L.GAMING, s.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id);
  }
  if (a === j.L.EMBEDDED_ACTIVITY)
    return {
      category: a,
      embeddedActivities: i,
      streamersCount: n.length,
      voiceUsersCount: r.length
    };
  if (a === j.L.GAMING)
    return {
      category: a,
      channelId: e,
      games: s,
      voiceStates: r,
      streamersCount: n.length,
      gameUserIds: u
    };
  return {
    category: a,
    channelId: e,
    userIds: o,
    streamUserIds: n,
    channelHasVideo: l,
    videoUserIds: c,
    isStage: !!(null === (t = L.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
  };
}), [
  m,
  I
], s.isEqual),
S = (0, l.e7)([b.Z], () => b.Z.hasConsented(W.pjP.PERSONALIZATION)),
A = (0, l.e7)([y.Z], () => y.Z.getUserAffinities()),
N = S && A.length > 0,
v = [
  ...T,
  ...E
];
  return i !== v.length && v.length > 0 && (r(function(e) {
let t = [...e],
  n = t[0].category,
  r = t.findIndex(e => e.category === j.L.EVENT),
  i = t.findIndex(e => e.category === j.L.HANGOUT && e.isStage),
  a = t.findIndex(e => e.category === j.L.EMBEDDED_ACTIVITY),
  s = t.findIndex(e => e.category === j.L.HANGOUT && e.streamUserIds.length > 0),
  o = t.findIndex(e => e.category === j.L.HANGOUT && e.videoUserIds.length > 0),
  l = t.findIndex(e => e.category === j.L.GAMING);
if (n === j.L.EVENT && 0 === r || n === j.L.HANGOUT && 0 === i || n === j.L.EMBEDDED_ACTIVITY && 0 === a || n === j.L.HANGOUT && 0 === s && -1 === i || n === j.L.HANGOUT && 0 === o && -1 === i && -1 === s || n === j.L.GAMING && 0 === l || -1 === r && -1 === i && -1 === a && -1 === s && -1 === o && -1 === l)
  return e;
if (-1 !== r) {
  let e = t.splice(r, 1);
  return t.splice(0, 0, e[0]), t;
}
if (-1 !== i) {
  let e = t.splice(i, 1);
  return t.splice(0, 0, e[0]), t;
}
if (-1 !== a) {
  let e = t.splice(a, 1);
  return t.splice(0, 0, e[0]), t;
}
if (-1 !== s) {
  let e = t.splice(s, 1);
  return t.splice(0, 0, e[0]), t;
}
if (-1 !== o) {
  let e = t.splice(o, 1);
  return t.splice(0, 0, e[0]), t;
}
if (-1 !== l) {
  let e = t.splice(l, 1);
  return t.splice(0, 0, e[0]), t;
}
return e;
  }(function(e, t) {
return (0, s.orderBy)(e, [e => function(e, t) {
  let n = e => e > 0 ? Math.log(e + 1) : 0,
    r = e => e.map(e => {
      var t, n;
      return null !== (n = null === (t = y.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
    }).map(n),
    i = (0, o.EQ)(e).with({
      category: j.L.EVENT
    }, () => q).with({
      category: j.L.GAMING
    }, () => Q).with({
      category: j.L.EMBEDDED_ACTIVITY
    }, () => X).with({
      streamUserIds: o.P.when(e => e.length > 0)
    }, () => $).with({
      channelHasVideo: !0
    }, () => J).with({
      category: j.L.HANGOUT
    }, () => ee).otherwise(() => et),
    a = 0;
  if (t) {
    if ('userIds' in e && (a += Math.max(...r(e.userIds))), 'embeddedActivities' in e) {
      let t = new Set();
      e.embeddedActivities.forEach(e => {
        t = new Set([
          ...t,
          ...e.userIds
        ]);
      }), a += Math.max(...r([...t]));
    }
    'voiceStates' in e && (a += Math.max(...r(e.voiceStates.filter(V.lm).map(e => {
      let {
        user: t
      } = e;
      return t.id;
    }))));
  } else {
    if ('userIds' in e && (a += e.userIds.length), 'embeddedActivities' in e) {
      let t = new Set();
      e.embeddedActivities.forEach(e => {
        t = new Set([
          t,
          ...e.userIds
        ]);
      }), a += t.size;
    }
    'voiceStates' in e && (a += e.voiceStates.filter(V.lm).map(e => {
      let {
        user: t
      } = e;
      return t.id;
    }).length);
  }
  return a = a > 0 ? a * i : 0.00001 * i;
}(e, t)], ['desc']);
  }(v, N)).slice(0, 3)), u(v.length)), n;
}
let ea = e => e => [
  W.IIU.PLAYING,
  W.IIU.WATCHING
].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function es(e) {
  return (0, l.Wu)([
b.Z,
y.Z
  ], () => {
let t = b.Z.hasConsented(W.pjP.PERSONALIZATION),
  n = y.Z.getUserAffinities();
return t && n.length > 0 ? (0, s.orderBy)(e, [e => {
  var t, n;
  return null !== (n = null === (t = y.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
}], ['desc']) : e;
  }, [e]);
}

function eo(e) {
  return (0, l.Wu)([
b.Z,
y.Z
  ], () => {
let t = b.Z.hasConsented(W.pjP.PERSONALIZATION),
  n = y.Z.getUserAffinities();
return t && n.length > 0 ? (0, s.orderBy)(e, [e => {
  var t, n;
  return null !== (n = null === (t = y.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
}], ['desc']) : e;
  }, [e]);
}

function el(e) {
  let t = (0, l.e7)([O.Z], () => null == e ? null : O.Z.getParticipantCount(e.id, R.pV.AUDIENCE)),
n = (0, l.Wu)([O.Z], () => null == e ? [] : O.Z.getMutableParticipants(e.id, R.pV.SPEAKER).filter(e => e.type === R.Ui.VOICE).map(e => {
  let {
    user: t
  } = e;
  return t;
})),
r = (0, l.Wu)([B.ZP], () => null == e ? [] : B.ZP.getVoiceStatesForChannel(e).filter(V.lm).map(e => {
  let {
    user: t
  } = e;
  return t;
}));
  if ((null == e ? void 0 : e.type) === W.d4z.GUILD_STAGE_VOICE) {
let e = n.slice(0, 3),
  r = Math.max(0, n.length - e.length);
return {
  usersToShow: n,
  othersCount: r,
  audienceCount: null != t ? t : 0
};
  }
  if ((null == e ? void 0 : e.type) === W.d4z.GUILD_VOICE) {
let e = r.slice(0, 7),
  t = Math.max(0, r.length - e.length);
return {
  usersToShow: e,
  othersCount: t,
  audienceCount: null
};
  }
  return {
usersToShow: [],
othersCount: 0,
audienceCount: null
  };
}

function eu(e, t) {
  var n, r;
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  let a = (n = e, r = t, n.map(e => {
  var t;
  let n = G.default.getUser(e);
  if (null == n)
    return null;
  let i = P.ZP.getNick(r, n.id);
  return null !== (t = null != i ? i : Z.ZP.getGlobalName(n)) && void 0 !== t ? t : Z.ZP.getUserTag(n);
}).filter(e => null != e)),
s = a.length;
  if (s > 0)
return 1 === s || i ? z.Z.Messages.USER_SUMMARY_ONE.format({
  first: a[0]
}) : (2 === s ? z.Z.Messages.USER_SUMMARY_TWO : 3 === s ? z.Z.Messages.USER_SUMMARY_THREE : z.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
  first: a[0],
  second: null == a ? void 0 : a[1],
  third: null == a ? void 0 : a[2],
  count: s - 3
});
}

function ec(e, t, n, r) {
  var i, a;
  let s = {},
o = null !== (a = (0, Y.i)(e)) && void 0 !== a ? a : '';
  s.source = r, s.card_type = e.category, s.card_position = n, s.channel_id = o, s.channel_type = null === (i = L.Z.getChannel(o)) || void 0 === i ? void 0 : i.type;
  let l = en(o, t);
  s.card_affinity_users_count = Math.min(l.length, 6), s.card_total_users_count = l.length, s.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), s.card_max_affinity_user_id = l.length > 0 ? l[0].id : '0', s.card_user_affinity_scores = l.slice(0, 6).map(e => {
var t, n;
return null !== (n = null === (t = y.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
  }), F.default.track(W.rMx.GUILD_TOOLTIP_CARD_CLICKED, {
...s,
...(0, E.hH)(t)
  });
}

function ed(e, t, n) {
  let {
category: r
  } = e;
  switch (r) {
case j.L.HANGOUT:
case j.L.GAMING:
  return () => {
    let {
      channelId: r
    } = e, i = L.Z.getChannel(r), a = U.Z.can(W.Plq.CONNECT, i);
    ec(e, t, n, 'card'), a ? (0, A.XU)(t, r) : ((0, A.XU)(t), c.Z.channelListScrollTo(t, r));
  };
case j.L.EMBEDDED_ACTIVITY:
  return () => {
    let {
      channelId: r
    } = e.embeddedActivities[0], i = L.Z.getChannel(r), a = U.Z.can(W.Plq.CONNECT, i);
    ec(e, t, n, 'card'), a ? (0, A.XU)(t, r) : ((0, A.XU)(t), c.Z.channelListScrollTo(t, r));
  };
case j.L.EVENT:
  return () => {
    ec(e, t, n, 'card'), (0, T.bO)({
      eventId: e.event.id
    });
  };
default:
  return null;
  }
}
let e_ = async (e, t) => {
  let n = await (0, v.AC)(e, t);
  (0, N.R5)(n, null, !1);
}, eE = (e, t) => {
  p.Z.handleVoiceConnect({
channel: t,
connected: k.Z.isInChannel(t.id),
needSubscriptionToAccess: (0, I.$)(t.id).needSubscriptionToAccess,
locked: !1
  }), (0, A.XU)(e, t.id);
};

function ef(e, t) {
  let {
category: n
  } = e;
  switch (n) {
case j.L.HANGOUT:
case j.L.GAMING:
  return () => {
    let {
      channelId: n
    } = e, r = L.Z.getChannel(n);
    if (null != r && !!U.Z.can(W.Plq.CONNECT, r))
      r.isGuildStageVoice() ? e_(t, n) : r.isGuildVoice() && eE(t, r);
  };
case j.L.EMBEDDED_ACTIVITY:
  return () => {
    let {
      channelId: n
    } = e.embeddedActivities[0], r = L.Z.getChannel(n);
    if (null != r && r.type === W.d4z.GUILD_VOICE && !!U.Z.can(W.Plq.CONNECT, r))
      eE(t, r);
  };
case j.L.EVENT:
  return () => {
    let {
      event: t
    } = e, {
      channel_id: n,
      guild_id: r,
      entity_type: i
    } = t, a = L.Z.getChannel(n);
    if (null == n || null == a || !U.Z.can(W.Plq.CONNECT, a)) {
      (0, T.bO)({
        eventId: t.id
      });
      return;
    }
    i === K.WX.STAGE_INSTANCE ? e_(r, n) : i === K.WX.VOICE && eE(r, a);
  };
default:
  return null;
  }
}

function eh(e) {
  let t, n;
  let r = (0, S.cS)(e),
i = null == r ? void 0 : r.replace(/[<#>]/g, ''),
a = null != i ? L.Z.getChannel(i) : L.Z.getChannel(e.channel_id),
s = U.Z.can(W.Plq.VIEW_CHANNEL, a);
  if (null != a && s)
t = (0, m.Th)(a.type), n = a.name;
  else {
if (null == r)
  return null;
t = u.LocationIcon, n = r;
  }
  return {
IconComponent: t,
locationName: n
  };
}

function ep(e) {
  let t = e.category === j.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, f.q)(t);
}

function em(e) {
  let t = (0, l.e7)([h.Z], () => h.Z.getChannelStatus(e)),
n = null != t && t.trim().length > 0;
  return {
channelStatus: t,
hasChannelStatus: n
  };
}