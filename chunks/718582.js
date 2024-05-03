"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return P
  },
  useGetEventCardUsers: function() {
    return U
  },
  useGuildPopoutCards: function() {
    return M
  }
}), n("47120"), n("390547"), n("627341");
var i = n("470079"),
  r = n("392711"),
  a = n.n(r),
  s = n("278074"),
  o = n("442837"),
  l = n("317381"),
  u = n("841784"),
  d = n("924301"),
  _ = n("565799"),
  c = n("501655"),
  E = n("344185"),
  I = n("199902"),
  T = n("480294"),
  f = n("984933"),
  S = n("158776"),
  h = n("699516"),
  A = n("800599"),
  m = n("594174"),
  N = n("979651"),
  p = n("938475"),
  O = n("823379"),
  R = n("5192"),
  C = n("709054"),
  g = n("456774"),
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
    [n, a] = i.useState([]),
    [_, c] = i.useState(0),
    m = (0, o.useStateFromStoresArray)([f.default, E.default], () => {
      let e = f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === L.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(E.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    R = (0, o.useStateFromStoresArray)([d.default], () => d.default.getGuildScheduledEventsForGuild(t).filter(e => (0, d.isGuildScheduledEventActive)(e)).map(e => ({
      category: g.CardCategory.EVENT,
      event: e
    })), [t]),
    v = (0, o.useStateFromStores)([h.default, p.default, l.default, N.default, S.default, I.default], () => {
      let n = h.default.getRelationships(),
        i = C.default.keys(n).filter(e => n[e] === L.RelationshipTypes.BLOCKED),
        r = R.map(e => {
          let {
            event: t
          } = e;
          return t.channel_id
        }),
        a = p.default.getVoiceStates(t),
        s = Object.keys(a);
      return 0 === s.length ? [] : s.filter(t => {
        let n = a[t].filter(O.isNotNullish);
        return !(0 === n.length || r.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return i.includes(t.id)
        }) && t !== e.afkChannelId && m.includes(t)
      }).map(e => {
        let t = I.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
          n = l.default.getEmbeddedActivitiesForChannel(e);
        if (n.length > 0)
          for (let e of n) return {
            category: g.CardCategory.EMBEDDED_ACTIVITY,
            embeddedActivity: e,
            streamersCount: t.length
          };
        let i = a[e].filter(O.isNotNullish);
        for (let n of i) {
          let r = S.default.findActivity(n.user.id, y(n));
          if (null != r && !(0, u.default)(r)) return {
            category: g.CardCategory.GAMING,
            channelId: e,
            game: r,
            voiceStates: i,
            streamersCount: t.length
          }
        }
        let r = i.map(e => {
            let {
              user: t
            } = e;
            return t.id
          }),
          s = N.default.hasVideo(e);
        return {
          category: g.CardCategory.HANGOUT,
          channelId: e,
          userIds: r,
          streamUserIds: t,
          channelHasVideo: s
        }
      })
    }, [m, R, e.afkChannelId, t]),
    D = (0, o.useStateFromStores)([T.default], () => T.default.hasConsented(L.Consents.PERSONALIZATION)),
    M = (0, o.useStateFromStores)([A.default], () => A.default.getUserAffinities());
  if (0 === v.length && 0 === R.length) return 0 === m.length ? [] : m.slice(0, 2).map(e => ({
    category: g.CardCategory.EMPTY,
    channelId: e
  }));
  let P = D && M.length > 0,
    U = [...v, ...R];
  return _ !== U.length && (a((function(e, t) {
    return (0, r.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = A.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, s.match)(e).with({
          category: g.CardCategory.EVENT
        }, () => 7).with({
          category: g.CardCategory.GAMING
        }, () => 6).with({
          category: g.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: s.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: g.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        a = 0;
      return t ? ("userIds" in e && (a += Math.max(...i(e.userIds))), "embeddedActivity" in e && (a += Math.max(...i([...e.embeddedActivity.userIds]))), "voiceStates" in e && (a += Math.max(...i(e.voiceStates.filter(O.isNotNullish).map(e => {
        let {
          user: t
        } = e;
        return t.id
      }))))) : ("userIds" in e && (a += e.userIds.length), "embeddedActivity" in e && (a += [...e.embeddedActivity.userIds].length), "voiceStates" in e && (a += e.voiceStates.filter(O.isNotNullish).map(e => {
        let {
          user: t
        } = e;
        return t.id
      }).length)), a = a > 0 ? a * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(U, P).slice(0, 3)), c(U.length)), n
}
let y = e => t => [L.ActivityTypes.PLAYING, L.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

function P(e, t, n) {
  let i = (0, o.useStateFromStoresArray)([I.default], () => I.default.getAllApplicationStreamsForChannel(n).map(e => e.ownerId), [n]),
    s = (0, o.useStateFromStoresArray)([T.default, A.default, m.default], () => {
      let t = T.default.hasConsented(L.Consents.PERSONALIZATION),
        n = A.default.getUserAffinities(),
        i = a()(e).map(e => m.default.getUser(e)).filter(O.isNotNullish).value();
      return t && n.length > 0 ? (0, r.orderBy)(i, [e => {
        var t, n;
        return null !== (n = null === (t = A.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      }], ["desc"]) : i
    }),
    l = s.slice(0, 7),
    u = Math.max(0, s.length - l.length),
    d = 1 === i.length ? i[0] : null,
    _ = R.default.getName(t, n, m.default.getUser(d)),
    c = null != d ? v.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: _
    }) : v.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMERS.format({
      streamerCount: i.length
    });
  return {
    totalUsers: s.length,
    usersToShow: l,
    othersCount: u,
    streamUserIds: i,
    streamerUsersText: c
  }
}

function U(e) {
  let t = (0, o.useStateFromStores)([_.default], () => null == e ? null : _.default.getParticipantCount(e.id, c.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, o.useStateFromStoresArray)([_.default], () => null == e ? [] : _.default.getMutableParticipants(e.id, c.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === c.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, o.useStateFromStoresArray)([p.default], () => null == e ? [] : p.default.getVoiceStatesForChannel(e).filter(O.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: e,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_VOICE) {
    let e = i.slice(0, 7),
      t = Math.max(0, i.length - e.length);
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