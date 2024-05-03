"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("653041"), n("47120");
var a = n("735250");
n("470079");
var s = n("287734"),
  l = n("872810"),
  i = n("122810"),
  r = n("841784"),
  o = n("503438"),
  u = n("802856"),
  d = n("420660"),
  c = n("23404"),
  f = n("769654"),
  E = n("81063"),
  h = n("761282"),
  _ = n("358924"),
  C = n("868854"),
  S = n("817915"),
  m = n("981631");

function p(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: p
  } = e, I = (0, C.useNowPlayingVisible)(), {
    voiceChannels: T,
    currentActivities: g,
    partiedMembers: A,
    applicationStreams: N,
    guildContext: v
  } = t, R = [], L = e => {
    var t, n;
    let {
      length: s
    } = R;
    if (0 === s) {
      R.push(e);
      return
    }
    let l = R[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : "").startsWith("game") && i.startsWith("rich-presence");
    R.push((0, a.jsx)(_.default.Separator, {
      inset: r
    }, "sep-".concat(i))), R.push(e)
  };
  for (let {
      activity: e
    }
    of(T.length > 0 && T.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: l
      } = e;
      L((0, a.jsx)(_.default.VoiceSection, {
        guild: l,
        channel: s,
        members: t,
        partySize: function(e, t) {
          let n;
          let a = e.length,
            s = 0;
          if (null != t && null != t.party && null != t.party.size && t.party.size.length >= 2) {
            let a = t.party.size;
            s = Math.max(a[0] - e.length, 0), n = a[1]
          } else n = a + s;
          return {
            knownSize: a,
            unknownSize: s,
            totalSize: n
          }
        }(t),
        onChannelContextMenu: n,
        onGuildClick: () => {
          (0, f.transitionToGuild)(l.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = h.createBody(e);
      if (null != t) {
        L(t);
        break
      }
    } return N.length > 0 && I && N.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: i
    } = e;
    L((0, a.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == v ? void 0 : v.id,
      user: n,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), g.forEach((e, t) => {
    var n, s, l, f, h, C, I, N, R;
    let {
      activity: O,
      game: M,
      playingMembers: P,
      activityUser: y
    } = e;
    if (null == O || null == O.type) return null;
    if (g.length > 1 && O.type === m.ActivityTypes.PLAYING && !(0, i.default)(O) && null != M) L((0, a.jsx)(_.default.GameSection, {
      icon: M.getIconURL(S.ICON_SIZE),
      name: M.name,
      partySize: {
        knownSize: P.length,
        unknownSize: 0,
        totalSize: P.length
      },
      members: P
    }, "game-".concat(null !== (n = O.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = O.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(O)) {
      let e = new Set(P.map(e => e.id)),
        t = null === (l = T.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && L((0, a.jsx)(_.default.EmbeddedActivitySection, {
        activity: O,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(O.application_id)))
    } else if ((null != O.assets || (0, i.default)(O)) && O.type === m.ActivityTypes.PLAYING) L((0, a.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (f = O.session_id) && void 0 !== f ? f : t, "-").concat(y.id)));
    else if ((0, d.default)(O)) {
      let e = T.length > 0 && T[0].members.length > 1,
        n = P.length > 1;
      L((0, a.jsx)(_.default.TwitchSection, {
        guildId: null == v ? void 0 : v.id,
        activity: O,
        user: e || n ? y : null,
        getAssetImage: E.getAssetImage
      }, "streaming-".concat(null !== (h = O.session_id) && void 0 !== h ? h : t)))
    } else(0, o.default)(O) ? L((0, a.jsx)(_.default.SpotifySection, {
      activity: O,
      isSolo: 1 === A.length,
      partySize: {
        knownSize: P.length,
        unknownSize: 0,
        totalSize: P.length
      },
      getAssetImage: E.getAssetImage,
      members: P
    }, "spotify-".concat(null !== (C = O.session_id) && void 0 !== C ? C : t, "-").concat(y.id))) : (null != O.assets || (0, i.default)(O)) && O.type === m.ActivityTypes.LISTENING ? L((0, a.jsx)(_.default.RichPresenceSection, {
      activity: O,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (I = O.session_id) && void 0 !== I ? I : t, "-").concat(y.id))) : (0, u.default)(O) && L((0, a.jsx)(_.default.XboxSection, {
      title: M.name
    }, "xbox-".concat(null !== (N = O.session_id) && void 0 !== N ? N : t)));
    null != p && null != M && M.id === p.config.applicationId && L((0, a.jsx)(c.default, {
      quest: p
    }, "quest-".concat(p.id, "-").concat(null !== (R = O.session_id) && void 0 !== R ? R : t)))
  }), R.length > 0 ? (0, a.jsx)(_.default.Body, {
    children: R
  }) : null
}