"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return b
  },
  useGetEventCardUsers: function() {
    return G
  },
  useGuildPopoutCards: function() {
    return M
  },
  useSortUserIdsByAffinity: function() {
    return P
  },
  useSortUsersByAffinity: function() {
    return U
  }
}), n("47120"), n("390547"), n("653041"), n("627341");
var i = n("470079"),
  r = n("392711"),
  a = n("278074"),
  s = n("442837"),
  o = n("317381"),
  l = n("841784"),
  u = n("924301"),
  d = n("565799"),
  _ = n("501655"),
  c = n("344185"),
  E = n("199902"),
  I = n("592125"),
  T = n("480294"),
  f = n("984933"),
  S = n("158776"),
  h = n("699516"),
  A = n("800599"),
  m = n("594174"),
  N = n("979651"),
  p = n("938475"),
  O = n("823379"),
  C = n("5192"),
  R = n("59688"),
  g = n("126134"),
  L = n("981631"),
  v = n("689938");
let D = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function M(e) {
  let t = e.id,
    [n, d] = i.useState([]),
    [_, m] = i.useState(0),
    C = (0, s.useStateFromStoresArray)([f.default, c.default], () => {
      let e = f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(c.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    R = (0, s.useStateFromStores)([u.default, I.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: g.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = I.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], r.isEqual),
    v = R.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    D = (0, s.useStateFromStores)([h.default], () => h.default.getRelationships()),
    M = i.useMemo(() => Object.keys(D).filter(e => D[e] === L.RelationshipTypes.BLOCKED), [D]),
    P = (0, s.useStateFromStores)([p.default], () => p.default.getVoiceStates(t), [t]),
    U = i.useMemo(() => {
      let t = Object.keys(P);
      return 0 === t.length ? [] : t.filter(t => {
        let n = P[t].filter(O.isNotNullish);
        return !(0 === n.length || v.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return M.includes(t.id)
        }) && t !== e.afkChannelId && C.includes(t)
      })
    }, [P, v, C, M, e.afkChannelId]),
    b = (0, s.useStateFromStores)([o.default, N.default, E.default, S.default, I.default], () => U.map(e => {
      var t;
      let n = E.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = P[e].filter(O.isNotNullish),
        r = o.default.getEmbeddedActivitiesForChannel(e),
        a = g.CardCategory.HANGOUT,
        s = [],
        u = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        d = N.default.hasVideo(e),
        _ = [],
        c = [];
      for (let e of (r.length > 0 && (a = g.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = S.default.findActivity(e.user.id, y(e));
        null != t && !(0, l.default)(t) && (a = g.CardCategory.GAMING, s.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (a === g.CardCategory.EMBEDDED_ACTIVITY) return {
        category: a,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (a === g.CardCategory.GAMING) return {
        category: a,
        channelId: e,
        games: s,
        voiceStates: i,
        streamersCount: n.length,
        gameUserIds: _
      };
      return {
        category: a,
        channelId: e,
        userIds: u,
        streamUserIds: n,
        channelHasVideo: d,
        videoUserIds: c,
        isStage: !!(null === (t = I.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [P, U], r.isEqual),
    G = (0, s.useStateFromStores)([T.default], () => T.default.hasConsented(L.Consents.PERSONALIZATION)),
    w = (0, s.useStateFromStores)([A.default], () => A.default.getUserAffinities());
  if (0 === b.length && 0 === R.length) return 0 === C.length ? [] : C.slice(0, 2).map(e => ({
    category: g.CardCategory.EMPTY,
    channelId: e
  }));
  let k = G && w.length > 0,
    B = [...b, ...R];
  return _ !== B.length && (d((function(e, t) {
    return (0, r.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = A.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, a.match)(e).with({
          category: g.CardCategory.EVENT
        }, () => 7).with({
          category: g.CardCategory.GAMING
        }, () => 6).with({
          category: g.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: a.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: g.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(O.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }))))
      } else {
        if ("userIds" in e && (s += e.userIds.length), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([t, ...e.userIds])
          }), s += t.size
        }
        "voiceStates" in e && (s += e.voiceStates.filter(O.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(B, k).slice(0, 3)), m(B.length)), n
}
let y = e => t => [L.ActivityTypes.PLAYING, L.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

function P(e) {
  return (0, s.useStateFromStoresArray)([T.default, A.default], () => {
    let t = T.default.hasConsented(L.Consents.PERSONALIZATION),
      n = A.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = A.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function U(e) {
  return (0, s.useStateFromStoresArray)([T.default, A.default], () => {
    let t = T.default.hasConsented(L.Consents.PERSONALIZATION),
      n = A.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = A.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function b(e, t, n, r) {
  let a;
  let s = P(e),
    o = i.useMemo(() => s.map(e => m.default.getUser(e)).filter(O.isNotNullish), [s]),
    l = o.slice(0, 6),
    u = Math.max(0, o.length - l.length);
  if (null != r && r.length > 0) {
    let e = C.default.getName(t, n, m.default.getUser(r[0]));
    a = 1 === r.length ? v.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: e
    }) : v.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
      username: e,
      count: r.length - 1
    })
  } else if (l.length > 0) {
    let e = C.default.getName(t, n, m.default.getUser(l[0].id));
    a = 1 === l.length ? v.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
      username: e
    }) : v.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
      username: e,
      count: l.length - 1
    })
  }
  return {
    totalUsers: o.length,
    usersToShow: l,
    othersCount: u,
    usersText: a
  }
}

function G(e) {
  let t = (0, R.useGuildPeekCardType)(),
    n = (0, s.useStateFromStores)([d.default], () => null == e ? null : d.default.getParticipantCount(e.id, _.StageChannelParticipantNamedIndex.AUDIENCE)),
    i = (0, s.useStateFromStoresArray)([d.default], () => null == e ? [] : d.default.getMutableParticipants(e.id, _.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === _.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    r = (0, s.useStateFromStoresArray)([p.default], () => null == e ? [] : p.default.getVoiceStatesForChannel(e).filter(O.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = i.slice(0, 3),
      r = Math.max(0, i.length - e.length);
    return {
      usersToShow: t === g.GuildPeekCardTypes.WHO ? i : e,
      othersCount: r,
      audienceCount: null != n ? n : 0
    }
  }
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_VOICE) {
    let e = r.slice(0, 7),
      t = Math.max(0, r.length - e.length);
    return {
      usersToShow: e,
      othersCount: t,
      audienceCount: null
    }
  }
  return {
    usersToShow: [],
    othersCount: 0,
    audienceCount: null
  }
}