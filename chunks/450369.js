n.d(t, {
  Q: function() {
return R;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  u = n(239091),
  d = n(872810),
  h = n(40851),
  p = n(358221),
  m = n(258609),
  _ = n(569545),
  f = n(382182),
  E = n(352978),
  g = n(184301),
  C = n(103575),
  I = n(199902),
  x = n(430824),
  T = n(496675),
  N = n(979651),
  v = n(88751),
  S = n(252132),
  Z = n(248400),
  A = n(981631),
  M = n(354459),
  b = n(508283);
let R = 16 / 9,
  j = e => {
let {
  stageParticipant: t,
  rtcParticipant: n,
  channel: s,
  guildId: l,
  user: r,
  width: c,
  isModerator: u,
  onContextMenu: d,
  inPopout: h
} = e, {
  reducedMotion: p
} = a.useContext(o.AccessibilityPreferencesContext), {
  blocked: m,
  id: _
} = t;
return (0, i.jsx)(o.Popout, {
  preload: null == n ? void 0 : () => (0, g.Z)(n.user, {
    guildId: s.guild_id,
    channelId: s.id
  }),
  renderPopout: e => (0, i.jsx)(C.Z, {
    ...e,
    location: 'StageTile',
    guildId: l,
    channelId: s.id,
    userId: r.id
  }),
  position: 'right',
  spacing: 8,
  children: e => (0, i.jsx)(o.Clickable, {
    onContextMenu: e => d(n, e),
    ...e,
    children: (0, i.jsx)(S.Z, {
      participant: n,
      aspectRatio: R,
      blocked: m,
      channel: s,
      className: b.tile,
      inCall: !0,
      inPopout: h,
      paused: !1,
      pulseSpeakingIndicator: !p.enabled,
      width: c,
      children: u && (0, i.jsx)(Z.Z, {})
    }, _)
  })
});
  },
  L = e => {
let {
  stageParticipant: t,
  rtcParticipant: n,
  channel: s,
  width: l,
  isModerator: u,
  onContextMenu: h,
  inPopout: g
} = e, {
  reducedMotion: C
} = a.useContext(o.AccessibilityPreferencesContext), {
  id: v,
  blocked: j
} = t, L = (0, r.Wu)([I.Z], () => I.Z.getAllActiveStreams(), []), {
  selectedParticipant: P,
  largeStream: O
} = (0, r.cj)([p.Z], () => ({
  selectedParticipant: null != s ? p.Z.getSelectedParticipant(s.id) : null,
  largeStream: null != s && p.Z.getStageStreamSize(s.id)
})), y = a.useCallback((e, t) => {
  if (e.type === M.fO.STREAM && 0 === L.filter(t => (0, _.V9)(t) === e.id && t.state !== A.jm8.ENDED).length) {
    if (!(0, f.p9)(s, N.Z, x.Z, T.Z, m.Z)[0])
      return;
    (0, d.rn)((0, _.my)(e.id), {
      forceMultiple: t.shiftKey
    });
  }
  (null == P ? void 0 : P.id) === e.id ? O ? (c.Z.selectParticipant(s.id, null), c.Z.updateStageStreamSize(s.id, !1)) : c.Z.updateStageStreamSize(s.id, !0) : (c.Z.updateStageStreamSize(s.id, !1), c.Z.selectParticipant(s.id, e.id));
}, [
  L,
  s,
  P,
  O
]);
return (0, i.jsx)(S.Z, {
  participant: n,
  aspectRatio: R,
  fit: n.type === M.fO.USER ? E.L.COVER : void 0,
  blocked: j,
  channel: s,
  className: b.tile,
  inCall: !0,
  inPopout: g,
  onClick: y,
  onContextMenu: h,
  paused: !1,
  pulseSpeakingIndicator: !C.enabled,
  width: l,
  children: u && n.type === M.fO.USER && (0, i.jsx)(Z.Z, {})
}, v);
  };
t.Z = a.memo(function(e) {
  var t;
  let {
participant: a,
channel: s,
width: o
  } = e, c = (0, h.bp)(), d = s.getGuildId();
  l()(null != d, 'Channel cannot be guildless');
  let {
user: m
  } = a, _ = (0, r.e7)([p.Z], () => p.Z.getParticipant(s.id, a.id), [
s.id,
a.id
  ]), f = (0, r.e7)([v.ZP], () => v.ZP.isModerator(m.id, s.id), [
s.id,
m.id
  ]);
  if (null == _ || _.type === M.fO.ACTIVITY)
return null;
  let E = (e, t) => {
  switch (e.type) {
    case M.fO.HIDDEN_STREAM:
    case M.fO.STREAM:
      (0, u.jW)(t, async () => {
        let {
          default: t
        } = await n.e('22183').then(n.bind(n, 987281));
        return n => (0, i.jsx)(t, {
          ...n,
          stream: e.stream,
          appContext: c,
          exitFullscreen: () => {}
        });
      }, {
        context: c
      });
      return;
    case M.fO.USER:
    default:
      (0, u.jW)(t, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79695'),
          n.e('70474'),
          n.e('12435'),
          n.e('17463')
        ]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, {
          ...t,
          user: m,
          guildId: d,
          channel: s,
          showMediaItems: !0,
          showStageChannelItems: !0,
          showChatItems: !1
        });
      }, {
        context: c
      });
  }
},
g = _.type === M.fO.USER && !(null === (t = _.voiceState) || void 0 === t ? void 0 : t.selfVideo);
  return (0, i.jsx)(i.Fragment, {
children: g ? (0, i.jsx)(j, {
  stageParticipant: a,
  rtcParticipant: _,
  channel: s,
  guildId: d,
  user: m,
  width: o,
  isModerator: f,
  onContextMenu: E,
  inPopout: c === A.IlC.POPOUT
}) : (0, i.jsx)(L, {
  stageParticipant: a,
  rtcParticipant: _,
  channel: s,
  guildId: d,
  user: m,
  width: o,
  isModerator: f,
  onContextMenu: E,
  inPopout: c === A.IlC.POPOUT
})
  });
});