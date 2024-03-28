"use strict";
n.r(t), n("47120"), n("653041"), n("724458");
var l, a, s, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("782769"),
  f = n("527805"),
  h = n("841784"),
  C = n("503438"),
  p = n("802856"),
  m = n("420660"),
  g = n("728345"),
  E = n("812206"),
  S = n("710845"),
  _ = n("38618"),
  I = n("656063"),
  N = n("761282"),
  T = n("789407"),
  A = n("630186"),
  L = n("250889"),
  v = n("199902"),
  x = n("592125"),
  R = n("480294"),
  M = n("831506"),
  O = n("731290"),
  y = n("430824"),
  D = n("496675"),
  b = n("158776"),
  j = n("699516"),
  G = n("800599"),
  U = n("594174"),
  P = n("979651"),
  w = n("823379"),
  F = n("981631");
let B = !1,
  V = !1,
  H = [],
  k = [],
  Y = {},
  K = {},
  W = new Set,
  Z = new Set;

function z() {
  let e = j.default.getFriendIDs();
  return R.default.hasConsented(F.Consents.PERSONALIZATION) ? new Set([...G.default.getUserAffinitiesUserIds(), ...e]) : new Set(e)
}

function X(e) {
  return b.default.findActivity(e, e => e.type !== F.ActivityTypes.CUSTOM_STATUS)
}

function Q(e) {
  return null == Y[e] && (Y = {
    ...Y,
    [e]: new L.default({
      name: e
    })
  }), Y[e]
}

function q(e) {
  return null == K[e] && (K = {
    ...K,
    [e]: new A.default({
      url: e
    })
  }), K[e]
}

function J(e) {
  !Z.has(e) && W.add(e)
}

function $(e) {
  if ((0, C.default)(e)) return T.SpotifyApplication;
  let t = null != e.application_id ? E.default.getApplication(e.application_id) : null;
  return null != t ? t : (0, p.default)(e) ? Q(e.name) : (0, m.default)(e) && null != e.url ? q(e.url) : (null != e.application_id && J(e.application_id), t)
}

function ee(e) {
  let t = P.default.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && D.default.canWithPartialContext(F.Permissions.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function et(e) {
  return j.default.isFriend(e.id)
}

function en(e, t, n) {
  var l, a, s, i, r, u;
  let d;
  let C = U.default.getCurrentUser(),
    p = null !== (l = null == C ? void 0 : C.nsfwAllowed) && void 0 !== l && l,
    m = t.map(e => e.id),
    g = t.filter(t => e.has(t.id)),
    _ = !1,
    R = [],
    j = new Set,
    G = !1,
    F = [];
  for (let e of t) {
    let n = v.default.getAnyStreamForUser(e.id),
      l = x.default.getChannel(null == n ? void 0 : n.channelId);
    if ((null == l ? void 0 : l.isNSFW()) && (!p || !O.default.didAgree(null == l ? void 0 : l.getGuildId()))) continue;
    let r = X(e.id);
    if (null != n && F.push({
        stream: n,
        streamUser: e,
        activity: r
      }), null == r) continue;
    let u = (0, I.default)(r);
    if (null == u) continue;
    G = u === T.SPOTIFY_APPLICATION_ID;
    let d = function(e) {
        let t = E.default.getApplication(e);
        return null != t ? t : "string" != typeof e ? (new S.default("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
          tags: {
            source: "ACTIVITIES"
          }
        }), null) : e === T.SPOTIFY_APPLICATION_ID ? T.SpotifyApplication : e.startsWith(L.XBOX_APPLICATION_ID_PREFIX) ? Q(e.slice(L.XBOX_APPLICATION_ID_PREFIX.length)) : e.startsWith(A.TWITCH_APPLICATION_ID_PREFIX) ? q(e.slice(A.TWITCH_APPLICATION_ID_PREFIX.length)) : (J(e), null)
      }(u),
      m = null === (a = r.timestamps) || void 0 === a ? void 0 : a.start;
    if ((0, h.default)(r)) {
      let t = (0, c.getIsActivitiesEnabledForCurrentPlatform)();
      if ((0, f.default)({
          activity: r,
          userId: e.id,
          application: d,
          channelId: null === (s = P.default.getVoiceStateForUser(e.id)) || void 0 === s ? void 0 : s.channelId,
          currentUser: C,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: x.default,
          VoiceStateStore: P.default,
          PermissionStore: D.default,
          GuildStore: y.default
        }) !== f.EmbeddedActivityJoinability.CAN_JOIN) continue
    } else if (null == m) continue;
    if (!N.shouldShowActivity(r) || null == d || j.has(d.id)) continue;
    let g = null != r ? $(r) : null;
    (null == g || g.id !== d.id) && (r = null);
    let b = [];
    b = null != r && null != r.party && null != r.party.id ? Array.from(null !== (i = M.default.getParty(r.party.id)) && void 0 !== i ? i : []).reduce((e, t) => {
      let n = U.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = X(e.id),
        n = null != t ? $(t) : null;
      return null != n && n.id === d.id
    }), (b = o().orderBy(b, [et], ["desc"])).length !== t.length && (_ = !0), j.add(d.id), R.push({
      game: d,
      activity: r,
      activityUser: e,
      startedPlayingTime: m,
      playingMembers: b
    })
  }
  let B = 1 === g.length,
    V = [],
    H = new Set,
    k = new Set;
  for (let e of t) {
    let n = ee(e.id),
      l = x.default.getChannel(n),
      a = null != l ? l.getGuildId() : null,
      s = y.default.getGuild(a);
    if (k.has(a) && H.has(n) || null == l || null == s || l.id === s.afkChannelId) null == l && (d = null, B = !0);
    else {
      let e = o()(P.default.getVoiceStatesForChannel(l.id)).map(e => {
        let {
          userId: t
        } = e;
        return U.default.getUser(t)
      }).filter(w.isNotNullish).orderBy([et], ["desc"]).value();
      e.filter(e => !m.includes(e.id)).forEach(e => t.push(e)), B ? !k.has(a) && (d = null) : (d = s, B = !0), k.add(a), H.add(n), V.push({
        channel: l,
        guild: s,
        members: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: V,
    isSpotifyActivity: G,
    priorityMembers: g.map(e => ({
      user: e,
      status: b.default.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: _,
    guildContext: d,
    currentActivities: (r = R, u = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, o()(r).orderBy([u, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: F
  }
}

function el() {
  return B && _.default.isConnected()
}
let ea = o().throttle(() => {
  ! function() {
    var e;
    if (!el()) return;
    W.clear(), k = (H = (function(e) {
      let t = z(),
        n = en.bind(null, t);
      return o()(e).mapValues(n)
    })((e = Array.from(z()).reduce((e, t) => {
      let n = U.default.getUser(t);
      return null != n && !n.bot && e.push(n), e
    }, []), o()(e).groupBy(e => {
      var t;
      let n = ee(e.id),
        l = X(e.id);
      return null != n ? "".concat("channel-", "-").concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-", "-").concat(l.party.id) : "".concat("user-", "-").concat(e.id)
    }))).values().orderBy([e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["desc", "desc", "desc", "desc", "asc", "asc"]).value().filter(e => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map(e => ({
      type: F.ActivityCardTypes.USER,
      party: e
    })), ! function() {
      if (W.size > 0) {
        let e = Array.from(W);
        g.default.fetchApplications(e), e.forEach(e => Z.add(e)), W.clear()
      }
    }(), V = !0
  }(), er.emitChange()
}, 1e3);

function es() {
  return !!el() && (ea(), !1)
}
class ei extends(l = u.default.Store) {
  initialize() {
    this.syncWith([U.default, E.default, b.default, M.default, P.default, v.default, j.default, R.default, G.default], es), this.waitFor(_.default, y.default, E.default, U.default, G.default)
  }
  get currentActivityParties() {
    return H
  }
  get nowPlayingCards() {
    return k
  }
  get isMounted() {
    return B
  }
  get loaded() {
    return V
  }
}
i = "NowPlayingViewStore", (s = "displayName") in(a = ei) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i;
let er = new ei(d.default, {
  LOGOUT: function() {
    B = !1, H = [], k = [], W.clear()
  },
  NOW_PLAYING_MOUNTED: function() {
    B = !0, ea()
  },
  NOW_PLAYING_UNMOUNTED: function() {
    B = !1
  }
});
t.default = er