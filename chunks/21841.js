"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var l = n("884691"),
  a = n("917351"),
  s = n.n(a),
  i = n("298386"),
  r = n("446674"),
  o = n("862337"),
  u = n("666020"),
  d = n("427953"),
  c = n("191225"),
  f = n("534222"),
  h = n("923510"),
  C = n("834052"),
  p = n("233069"),
  m = n("373469"),
  E = n("271938"),
  g = n("42203"),
  I = n("525065"),
  S = n("305961"),
  _ = n("957255"),
  N = n("18494"),
  T = n("282109"),
  A = n("800762"),
  L = n("299039"),
  v = n("471374"),
  x = n("501981"),
  R = n("49111");
let M = [];

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.default;
  return null != e && e.type !== i.ChannelTypes.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(R.BasicPermissions.VIEW_CHANNEL, e)
}

function y(e) {
  var t;
  let n = (0, r.useStateFromStores)([T.default], () => T.default.isMuted(e)),
    a = (0, f.useGuildActiveEvent)(e);
  ! function(e, t) {
    let n = l.useRef(new Set),
      a = l.useRef(new o.Timeout),
      {
        shouldSubscribeToGuildMemberUpdates: i
      } = v.default.useExperiment({
        location: "useGuildMediaState"
      }, {
        autoTrackExposure: !1
      }),
      d = (0, r.useStateFromStores)([I.default], () => {
        let t = I.default.getMemberCount(e);
        return null == t || t > 1e3
      }),
      c = (0, r.useStateFromStoresObject)([A.default], () => {
        if (!i || t || d) return M;
        let n = A.default.getVoiceStates(e),
          l = Object.keys(n);
        return 0 === l.length ? M : l.slice(0, 50)
      }, [e, t, d, i]);
    l.useEffect(() => {
      ! function(e, t, n, l, a) {
        let i = s.random(1e3, 1e4);
        l.start(i, () => {
          let l = new Set(t),
            s = t.filter(e => !n.has(e)),
            i = Array.from(n).filter(e => !l.has(e));
          (0, u.unsubscribeMembers)(e, i), (0, u.subscribeMembers)(e, s), a()
        })
      }(e, c, n.current, a.current, () => {
        n.current = new Set(c)
      })
    }, [e, c]), l.useEffect(() => () => {
      a.current.stop(), (0, u.unsubscribeMembers)(e, Array.from(n.current))
    }, [e])
  }(e, n);
  let i = (0, x.default)(e),
    R = (0, r.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForGuild(e)),
    y = (0, d.useIsActivitiesInTextEnabled)(null === (t = R[0]) || void 0 === t ? void 0 : t.channelId, "GuildMediaState"),
    {
      guildHasVoice: D,
      guildHasVideo: b,
      selectedVoiceChannelHasVideo: j
    } = (0, r.useStateFromStoresObject)([A.default, g.default, _.default, S.default, N.default], () => {
      var t;
      let l = N.default.getVoiceChannelId(),
        a = null === (t = S.default.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
        s = A.default.getUsersWithVideo(e),
        i = A.default.getVoiceStates(e),
        r = (() => {
          if (n) return !1;
          for (let e in i)
            if (O(g.default.getBasicChannel(i[e].channelId), null != a ? a : void 0, _.default)) return !0;
          return !1
        })(),
        o = (() => {
          if (n) return !1;
          for (let e of s)
            if (O(g.default.getBasicChannel(i[e].channelId), null != a ? a : void 0, _.default)) return !0;
          return !1
        })();
      return {
        guildHasVoice: r,
        guildHasVideo: o,
        selectedVoiceChannelHasVideo: null != l && A.default.hasVideo(l)
      }
    }, [e, n]),
    G = E.default.getId();
  return (0, r.useStateFromStoresObject)([N.default, m.default, C.default, g.default, _.default, c.default], () => {
    var t, l, s;
    let r = N.default.getVoiceChannelId(),
      o = null === (t = g.default.getChannel(r)) || void 0 === t ? void 0 : t.guild_id,
      u = o === e,
      d = !1,
      f = !1,
      E = !1,
      I = !1,
      S = !1,
      T = !1;
    if (!u && n) return {
      audio: d,
      video: I,
      screenshare: S,
      liveStage: E,
      activeEvent: f,
      activity: T,
      gaming: i,
      isCurrentUserConnected: !1
    };
    let A = L.default.keys(C.default.getStageInstancesByGuild(e)).some(e => {
        let t = g.default.getChannel(e);
        return null != t && _.default.can(h.JOIN_VOCAL_CHANNEL_PERMISSIONS, t)
      }),
      v = u && null !== (s = null === (l = g.default.getChannel(r)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== s && s,
      x = !!u && null != m.default.getActiveStreamForUser(G, e),
      M = m.default.getAllApplicationStreams().some(t => t.guildId === e),
      O = u && j,
      U = (() => {
        if (y) return R.length > 0;
        for (let e of R) {
          let t = g.default.getChannel(e.channelId);
          if (null != t && (0, p.isVoiceChannel)(t.type)) return !0
        }
        return !1
      })(),
      P = c.default.getEmbeddedActivitiesForGuild(e).length > 0;
    return u ? (d = !0, f = (null == a ? void 0 : a.channel_id) === r, E = v, I = O, S = x, T = P) : (d = D, f = null != a, E = A, I = b, S = M, T = U), {
      audio: d,
      video: I,
      screenshare: S,
      liveStage: E,
      activeEvent: f,
      activity: T,
      gaming: i,
      isCurrentUserConnected: u || v
    }
  }, [G, R, i, a, e, y, n, b, D, j])
}