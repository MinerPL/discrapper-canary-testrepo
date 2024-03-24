"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("222007"), n("424973"), n("808653");
var l = n("917351"),
  a = n.n(l),
  s = n("446674"),
  i = n("913144"),
  r = n("126939"),
  o = n("501260"),
  u = n("152311"),
  d = n("429928"),
  c = n("36539"),
  f = n("502651"),
  h = n("651057"),
  C = n("299285"),
  p = n("605250"),
  m = n("619443"),
  E = n("177589"),
  g = n("67139"),
  I = n("671071"),
  S = n("322631"),
  _ = n("947297"),
  N = n("373469"),
  T = n("42203"),
  A = n("350522"),
  L = n("925758"),
  v = n("305961"),
  x = n("957255"),
  R = n("824563"),
  M = n("27618"),
  O = n("843823"),
  y = n("697218"),
  D = n("800762"),
  b = n("449008"),
  j = n("49111");
let G = !1,
  U = !1,
  P = [],
  w = [],
  F = {},
  B = {},
  V = new Set,
  H = new Set;

function k() {
  let e = M.default.getFriendIDs();
  return A.default.hasConsented(j.Consents.PERSONALIZATION) ? new Set([...O.default.getUserAffinitiesUserIds(), ...e]) : new Set(e)
}

function Y(e) {
  return R.default.findActivity(e, e => e.type !== j.ActivityTypes.CUSTOM_STATUS)
}

function K(e) {
  let t = F[e];
  return null == t && (F = {
    ...F,
    [e]: new _.default({
      name: e
    })
  }), F[e]
}

function W(e) {
  let t = B[e];
  return null == t && (B = {
    ...B,
    [e]: new S.default({
      url: e
    })
  }), B[e]
}

function Z(e) {
  !H.has(e) && V.add(e)
}

function z(e) {
  if ((0, d.default)(e)) return I.SpotifyApplication;
  let t = null != e.application_id ? C.default.getApplication(e.application_id) : null;
  return null != t ? t : (0, c.default)(e) ? K(e.name) : (0, f.default)(e) && null != e.url ? W(e.url) : (null != e.application_id && Z(e.application_id), t)
}

function X(e) {
  let t = D.default.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && x.default.canWithPartialContext(j.Permissions.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function Q(e) {
  return M.default.isFriend(e.id)
}

function q(e, t, n) {
  var l, s, i, d, c;
  let f;
  let h = y.default.getCurrentUser(),
    m = t.map(e => e.id),
    A = t.filter(t => e.has(t.id)),
    M = !1,
    O = [],
    j = new Set,
    G = !1,
    U = [];
  for (let e of t) {
    ;
    let n = N.default.getAnyStreamForUser(e.id),
      d = Y(e.id);
    if (null != n && U.push({
        stream: n,
        streamUser: e,
        activity: d
      }), null == d) continue;
    let c = (0, E.default)(d);
    if (null == c) continue;
    G = c === I.SPOTIFY_APPLICATION_ID;
    let f = function(e) {
        let t = C.default.getApplication(e);
        return null != t ? t : "string" != typeof e ? (new(0, p.default)("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
          tags: {
            source: "ACTIVITIES"
          }
        }), null) : e === I.SPOTIFY_APPLICATION_ID ? I.SpotifyApplication : e.startsWith(_.XBOX_APPLICATION_ID_PREFIX) ? K(e.slice(_.XBOX_APPLICATION_ID_PREFIX.length)) : e.startsWith(S.TWITCH_APPLICATION_ID_PREFIX) ? W(e.slice(S.TWITCH_APPLICATION_ID_PREFIX.length)) : (Z(e), null)
      }(c),
      m = null === (l = d.timestamps) || void 0 === l ? void 0 : l.start;
    if ((0, u.default)(d)) {
      let t = (0, r.getIsActivitiesEnabledForCurrentPlatform)(),
        n = (0, o.default)({
          activity: d,
          userId: e.id,
          application: f,
          channelId: null === (s = D.default.getVoiceStateForUser(e.id)) || void 0 === s ? void 0 : s.channelId,
          currentUser: h,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: T.default,
          VoiceStateStore: D.default,
          PermissionStore: x.default,
          GuildStore: v.default
        }) !== o.EmbeddedActivityJoinability.CAN_JOIN;
      if (n) continue
    } else if (null == m) continue;
    if (!g.shouldShowActivity(d) || null == f || j.has(f.id)) continue;
    let A = null != d ? z(d) : null;
    (null == A || A.id !== f.id) && (d = null);
    let R = [];
    if (null != d && null != d.party && null != d.party.id) {
      let e = null !== (i = L.default.getParty(d.party.id)) && void 0 !== i ? i : [];
      R = Array.from(e).reduce((e, t) => {
        let n = y.default.getUser(t);
        return null != n && e.push(n), e
      }, [])
    } else R = t.filter(e => {
      let t = Y(e.id),
        n = null != t ? z(t) : null;
      return null != n && n.id === f.id
    });
    (R = a.orderBy(R, [Q], ["desc"])).length !== t.length && (M = !0), j.add(f.id), O.push({
      game: f,
      activity: d,
      activityUser: e,
      startedPlayingTime: m,
      playingMembers: R
    })
  }
  let P = 1 === A.length,
    w = [],
    F = new Set,
    B = new Set;
  for (let e of t) {
    let n = X(e.id),
      l = T.default.getChannel(n),
      s = null != l ? l.getGuildId() : null,
      i = v.default.getGuild(s);
    if (B.has(s) && F.has(n) || null == l || null == i || l.id === i.afkChannelId) null == l && (f = null, P = !0);
    else {
      let e = a(D.default.getVoiceStatesForChannel(l.id)).map(e => {
        let {
          userId: t
        } = e;
        return y.default.getUser(t)
      }).filter(b.isNotNullish).orderBy([Q], ["desc"]).value();
      e.filter(e => !m.includes(e.id)).forEach(e => t.push(e)), P ? !B.has(s) && (f = null) : (f = i, P = !0), B.add(s), F.add(n), w.push({
        channel: l,
        guild: i,
        members: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: w,
    isSpotifyActivity: G,
    priorityMembers: A.map(e => ({
      user: e,
      status: R.default.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: M,
    guildContext: f,
    currentActivities: (d = O, c = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, a(d).orderBy([c, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: U
  }
}

function J() {
  return G && m.default.isConnected()
}
let $ = a.throttle(() => {
  ! function() {
    if (!J()) return;
    V.clear();
    let e = Array.from(k()).reduce((e, t) => {
        let n = y.default.getUser(t);
        return null != n && !n.bot && e.push(n), e
      }, []),
      t = a(e).groupBy(e => {
        var t;
        let n = X(e.id),
          l = Y(e.id);
        return null != n ? "".concat("channel-", "-").concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-", "-").concat(l.party.id) : "".concat("user-", "-").concat(e.id)
      }),
      n = function(e) {
        let t = k(),
          n = q.bind(null, t);
        return a(e).mapValues(n)
      }(t),
      l = n.values().orderBy([e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["desc", "desc", "desc", "desc", "asc", "asc"]).value();
    w = (P = l.filter(e => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map(e => ({
      type: j.ActivityCardTypes.USER,
      party: e
    })), ! function() {
      if (V.size > 0) {
        let e = Array.from(V);
        h.default.fetchApplications(e), e.forEach(e => H.add(e)), V.clear()
      }
    }(), U = !0
  }(), en.emitChange()
}, 1e3);

function ee() {
  return !!J() && ($(), !1)
}
class et extends s.default.Store {
  initialize() {
    this.syncWith([y.default, C.default, R.default, L.default, D.default, N.default, M.default, A.default, O.default], ee), this.waitFor(m.default, v.default, C.default, y.default, O.default)
  }
  get currentActivityParties() {
    return P
  }
  get nowPlayingCards() {
    return w
  }
  get isMounted() {
    return G
  }
  get loaded() {
    return U
  }
}
et.displayName = "NowPlayingViewStore";
let en = new et(i.default, {
  LOGOUT: function() {
    G = !1, P = [], w = [], V.clear()
  },
  NOW_PLAYING_MOUNTED: function() {
    G = !0, $()
  },
  NOW_PLAYING_UNMOUNTED: function() {
    G = !1
  }
});
var el = en