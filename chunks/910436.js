"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  f = n("920440"),
  E = n("81063"),
  h = n("761282"),
  _ = n("358924"),
  C = n("868854"),
  m = n("817915"),
  S = n("981631");

function I(e) {
  let {
    party: t,
    onChannelContextMenu: n,
    quest: I
  } = e, p = (0, C.useNowPlayingVisible)(), {
    voiceChannels: T,
    currentActivities: g,
    partiedMembers: A,
    applicationStreams: N,
    guildContext: v
  } = t, O = [], R = e => {
    var t, n;
    let {
      length: s
    } = O;
    if (0 === s) {
      O.push(e);
      return
    }
    let l = O[s - 1],
      i = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : "").startsWith("game") && i.startsWith("rich-presence");
    O.push((0, a.jsx)(_.default.Separator, {
      inset: r
    }, "sep-".concat(i))), O.push(e)
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
      R((0, a.jsx)(_.default.VoiceSection, {
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
        R(t);
        break
      }
    } return N.length > 0 && p && N.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: i
    } = e;
    R((0, a.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == v ? void 0 : v.id,
      user: n,
      activity: i,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), g.forEach((e, t) => {
    var n, s, l, f, h, C, p, N, O;
    let {
      activity: L,
      game: P,
      playingMembers: M,
      activityUser: y
    } = e;
    if (null == L || null == L.type) return null;
    if (g.length > 1 && L.type === S.ActivityTypes.PLAYING && !(0, i.default)(L) && null != P) R((0, a.jsx)(_.default.GameSection, {
      icon: P.getIconURL(m.ICON_SIZE),
      name: P.name,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      members: M
    }, "game-".concat(null !== (n = L.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = L.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(L)) {
      let e = new Set(M.map(e => e.id)),
        t = null === (l = T.find(e => null != e)) || void 0 === l ? void 0 : l.channel;
      null != t && R((0, a.jsx)(_.default.EmbeddedActivitySection, {
        activity: L,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(L.application_id)))
    } else if ((null != L.assets || (0, i.default)(L)) && L.type === S.ActivityTypes.PLAYING) R((0, a.jsx)(_.default.RichPresenceSection, {
      activity: L,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (f = L.session_id) && void 0 !== f ? f : t, "-").concat(y.id)));
    else if ((0, d.default)(L)) {
      let e = T.length > 0 && T[0].members.length > 1,
        n = M.length > 1;
      R((0, a.jsx)(_.default.TwitchSection, {
        guildId: null == v ? void 0 : v.id,
        activity: L,
        user: e || n ? y : null,
        getAssetImage: E.getAssetImage
      }, "streaming-".concat(null !== (h = L.session_id) && void 0 !== h ? h : t)))
    } else(0, o.default)(L) ? R((0, a.jsx)(_.default.SpotifySection, {
      activity: L,
      isSolo: 1 === A.length,
      partySize: {
        knownSize: M.length,
        unknownSize: 0,
        totalSize: M.length
      },
      getAssetImage: E.getAssetImage,
      members: M
    }, "spotify-".concat(null !== (C = L.session_id) && void 0 !== C ? C : t, "-").concat(y.id))) : (null != L.assets || (0, i.default)(L)) && L.type === S.ActivityTypes.LISTENING ? R((0, a.jsx)(_.default.RichPresenceSection, {
      activity: L,
      getAssetImage: E.getAssetImage
    }, "rich-presence-".concat(null !== (p = L.session_id) && void 0 !== p ? p : t, "-").concat(y.id))) : (0, u.default)(L) && R((0, a.jsx)(_.default.XboxSection, {
      title: P.name
    }, "xbox-".concat(null !== (N = L.session_id) && void 0 !== N ? N : t)));
    null != I && R((0, a.jsx)(c.default, {
      quest: I
    }, "quest-".concat(I.id, "-").concat(null !== (O = L.session_id) && void 0 !== O ? O : t)))
  }), O.length > 0 ? (0, a.jsx)(_.default.Body, {
    children: O
  }) : null
}