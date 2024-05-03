"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var l = n("470079"),
  a = n("392711"),
  s = n.n(a),
  i = n("106351"),
  r = n("442837"),
  o = n("846519"),
  u = n("941028"),
  d = n("867176"),
  c = n("317381"),
  f = n("554747"),
  h = n("146085"),
  p = n("427679"),
  m = n("131704"),
  C = n("199902"),
  g = n("314897"),
  E = n("592125"),
  _ = n("650774"),
  S = n("430824"),
  I = n("496675"),
  N = n("944486"),
  T = n("9156"),
  A = n("979651"),
  L = n("709054"),
  v = n("510601"),
  x = n("901621"),
  R = n("981631");
let M = [];

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.default;
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
      d = (0, r.useStateFromStores)([_.default], () => {
        let t = _.default.getMemberCount(e);
        return null == t || t > 1e3
      }),
      c = (0, r.useStateFromStoresObject)([A.default], () => {
        if (!i || t || d) return M;
        let n = Object.keys(A.default.getVoiceStates(e));
        return 0 === n.length ? M : n.slice(0, 50)
      }, [e, t, d, i]);
    l.useEffect(() => {
      ! function(e, t, n, l, a) {
        let i = s().random(1e3, 1e4);
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
    y = (0, d.useIsActivitiesInTextEnabled)(null === (t = R[0]) || void 0 === t ? void 0 : t.channelId, !1, "GuildMediaState"),
    {
      guildHasVoice: D,
      guildHasVideo: b,
      selectedVoiceChannelHasVideo: j
    } = (0, r.useStateFromStoresObject)([A.default, E.default, I.default, S.default, N.default], () => {
      var t;
      let l = N.default.getVoiceChannelId(),
        a = null === (t = S.default.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
        s = A.default.getUsersWithVideo(e),
        i = A.default.getVoiceStates(e),
        r = (() => {
          if (n) return !1;
          for (let e in i)
            if (O(E.default.getBasicChannel(i[e].channelId), null != a ? a : void 0, I.default)) return !0;
          return !1
        })();
      return {
        guildHasVoice: r,
        guildHasVideo: (() => {
          if (n) return !1;
          for (let e of s)
            if (O(E.default.getBasicChannel(i[e].channelId), null != a ? a : void 0, I.default)) return !0;
          return !1
        })(),
        selectedVoiceChannelHasVideo: null != l && A.default.hasVideo(l)
      }
    }, [e, n]),
    P = g.default.getId();
  return (0, r.useStateFromStoresObject)([N.default, C.default, p.default, E.default, I.default, c.default], () => {
    var t, l, s;
    let r = N.default.getVoiceChannelId(),
      o = (null === (t = E.default.getChannel(r)) || void 0 === t ? void 0 : t.guild_id) === e,
      u = !1,
      d = !1,
      f = !1,
      g = !1,
      _ = !1,
      S = !1;
    if (!o && n) return {
      audio: u,
      video: g,
      screenshare: _,
      liveStage: f,
      activeEvent: d,
      activity: S,
      gaming: i,
      isCurrentUserConnected: !1
    };
    let T = L.default.keys(p.default.getStageInstancesByGuild(e)).some(e => {
        let t = E.default.getChannel(e);
        return null != t && I.default.can(h.JOIN_VOCAL_CHANNEL_PERMISSIONS, t)
      }),
      A = o && null !== (s = null === (l = E.default.getChannel(r)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== s && s,
      v = !!o && null != C.default.getActiveStreamForUser(P, e),
      x = C.default.getAllApplicationStreams().some(t => t.guildId === e),
      M = o && j,
      O = (() => {
        if (y) return R.length > 0;
        for (let e of R) {
          let t = E.default.getChannel(e.channelId);
          if (null != t && (0, m.isVoiceChannel)(t.type)) return !0
        }
        return !1
      })(),
      G = c.default.getEmbeddedActivitiesForGuild(e).length > 0;
    return o ? (u = !0, d = (null == a ? void 0 : a.channel_id) === r, f = A, g = M, _ = v, S = G) : (u = D, d = null != a, f = T, g = b, _ = x, S = O), {
      audio: u,
      video: g,
      screenshare: _,
      liveStage: f,
      activeEvent: d,
      activity: S,
      gaming: i,
      isCurrentUserConnected: o || A
    }
  }, [P, R, i, a, e, y, n, b, D, j])
}