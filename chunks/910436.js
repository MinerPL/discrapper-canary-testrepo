n.d(t, {
  Z: function() {
return S;
  }
}), n(653041), n(47120);
var i = n(735250);
n(470079);
var a = n(287734),
  s = n(872810),
  r = n(122810),
  l = n(841784),
  o = n(503438),
  c = n(802856),
  d = n(420660),
  u = n(918701),
  _ = n(23404),
  h = n(769654),
  E = n(81063),
  I = n(761282),
  m = n(358924),
  g = n(868854),
  p = n(817915),
  T = n(981631);

function S(e) {
  let {
party: t,
onChannelContextMenu: n,
quest: S
  } = e, f = (0, g.L)(), {
voiceChannels: C,
currentActivities: N,
partiedMembers: A,
applicationStreams: v,
guildContext: Z
  } = t, L = [], O = e => {
var t, n;
let {
  length: a
} = L;
if (0 === a) {
  L.push(e);
  return;
}
let s = L[a - 1],
  r = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
  l = ''.concat(null !== (n = null == s ? void 0 : s.key) && void 0 !== n ? n : '').startsWith('game') && r.startsWith('rich-presence');
L.push((0, i.jsx)(m.Z.Separator, {
  inset: l
}, 'sep-'.concat(r))), L.push(e);
  };
  for (let {
  activity: e
}
of(C.length > 0 && C.forEach(e => {
  let {
    members: t,
    channel: a,
    guild: s
  } = e;
  O((0, i.jsx)(m.Z.VoiceSection, {
    guild: s,
    channel: a,
    members: t,
    partySize: function(e, t) {
      let n;
      let i = e.length,
        a = 0;
      !1;
      n = i + a;
      return {
        knownSize: i,
        unknownSize: a,
        totalSize: n
      };
    }(t),
    onChannelContextMenu: n,
    onGuildClick: () => {
      (0, h.X)(s.id);
    }
  }, 'voice-'.concat(a.id)));
}), t.currentActivities))
if (null != e) {
  let t = I.ct(e);
  if (null != t) {
    O(t);
    break;
  }
}
  return v.length > 0 && f && v.forEach(e => {
let {
  stream: t,
  streamUser: n,
  activity: r
} = e;
O((0, i.jsx)(m.Z.ApplicationStreamingSection, {
  guildId: null == Z ? void 0 : Z.id,
  user: n,
  activity: r,
  applicationStream: t,
  onPreviewClick: () => {
    a.default.selectVoiceChannel(t.channelId), (0, s.iV)(t);
  }
}, 'application-stream-'.concat(t.ownerId)));
  }), N.forEach((e, t) => {
var n, a, s, h, I, g, f, v, L;
let {
  activity: R,
  game: x,
  playingMembers: b,
  activityUser: P
} = e;
if (null == R || null == R.type)
  return null;
if (N.length > 1 && R.type === T.IIU.PLAYING && !(0, r.Z)(R) && null != x)
  O((0, i.jsx)(m.Z.GameSection, {
    icon: x.getIconURL(p.Z),
    name: x.name,
    partySize: {
      knownSize: b.length,
      unknownSize: 0,
      totalSize: b.length
    },
    members: b
  }, 'game-'.concat(null !== (n = R.session_id) && void 0 !== n ? n : t, '-').concat(null !== (a = R.application_id) && void 0 !== a ? a : t)));
else if ((0, l.Z)(R)) {
  let e = new Set(b.map(e => e.id)),
    t = null === (s = C.find(e => null != e)) || void 0 === s ? void 0 : s.channel;
  null != t && O((0, i.jsx)(m.Z.EmbeddedActivitySection, {
    activity: R,
    participants: e,
    channel: t,
    guildId: t.guild_id
  }, 'embedded-activity-'.concat(R.application_id)));
} else if ((null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.PLAYING)
  O((0, i.jsx)(m.Z.RichPresenceSection, {
    activity: R,
    getAssetImage: E.getAssetImage
  }, 'rich-presence-'.concat(null !== (h = R.session_id) && void 0 !== h ? h : t, '-').concat(P.id)));
else if ((0, d.Z)(R)) {
  let e = C.length > 0 && C[0].members.length > 1,
    n = b.length > 1;
  O((0, i.jsx)(m.Z.TwitchSection, {
    guildId: null == Z ? void 0 : Z.id,
    activity: R,
    user: e || n ? P : null,
    getAssetImage: E.getAssetImage
  }, 'streaming-'.concat(null !== (I = R.session_id) && void 0 !== I ? I : t)));
} else
  (0, o.Z)(R) ? O((0, i.jsx)(m.Z.SpotifySection, {
    activity: R,
    isSolo: 1 === A.length,
    partySize: {
      knownSize: b.length,
      unknownSize: 0,
      totalSize: b.length
    },
    getAssetImage: E.getAssetImage,
    members: b
  }, 'spotify-'.concat(null !== (g = R.session_id) && void 0 !== g ? g : t, '-').concat(P.id))) : (null != R.assets || (0, r.Z)(R)) && R.type === T.IIU.LISTENING ? O((0, i.jsx)(m.Z.RichPresenceSection, {
    activity: R,
    getAssetImage: E.getAssetImage
  }, 'rich-presence-'.concat(null !== (f = R.session_id) && void 0 !== f ? f : t, '-').concat(P.id))) : (0, c.Z)(R) && O((0, i.jsx)(m.Z.XboxSection, {
    title: x.name
  }, 'xbox-'.concat(null !== (v = R.session_id) && void 0 !== v ? v : t)));
null != S && null != x && (0, u._D)(R, S) && O((0, i.jsx)(_.Z, {
  quest: S
}, 'quest-'.concat(S.id, '-').concat(null !== (L = R.session_id) && void 0 !== L ? L : t)));
  }), L.length > 0 ? (0, i.jsx)(m.Z.Body, {
children: L
  }) : null;
}