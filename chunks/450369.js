n.d(t, {
  Q: function() {
return R;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(512722),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  d = n(239091),
  u = n(872810),
  h = n(40851),
  p = n(358221),
  m = n(258609),
  _ = n(569545),
  f = n(382182),
  E = n(484459),
  C = n(103575),
  g = n(199902),
  I = n(430824),
  x = n(496675),
  T = n(979651),
  v = n(40300),
  N = n(88751),
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
  channel: l,
  guildId: s,
  user: r,
  width: c,
  isModerator: d,
  onContextMenu: u,
  inPopout: h
} = e, {
  reducedMotion: p
} = a.useContext(o.AccessibilityPreferencesContext), {
  blocked: m,
  id: _
} = t;
return (0, i.jsx)(o.Popout, {
  preload: null == n ? void 0 : () => (0, E.W)(n.user, {
    guildId: l.guild_id,
    channelId: l.id
  }),
  renderPopout: e => (0, i.jsx)(C.Z, {
    ...e,
    location: 'StageTile',
    guildId: s,
    channelId: l.id,
    userId: r.id
  }),
  position: 'right',
  spacing: 8,
  children: e => (0, i.jsx)(o.Clickable, {
    onContextMenu: e => u(n, e),
    ...e,
    children: (0, i.jsx)(S.Z, {
      participant: n,
      aspectRatio: R,
      blocked: m,
      channel: l,
      className: b.tile,
      inCall: !0,
      inPopout: h,
      paused: !1,
      pulseSpeakingIndicator: !p.enabled,
      width: c,
      children: d && (0, i.jsx)(Z.Z, {})
    }, _)
  })
});
  },
  L = e => {
let {
  stageParticipant: t,
  rtcParticipant: n,
  channel: l,
  width: s,
  isModerator: d,
  onContextMenu: h,
  inPopout: E
} = e, {
  reducedMotion: C
} = a.useContext(o.AccessibilityPreferencesContext), {
  id: N,
  blocked: j
} = t, L = (0, r.Wu)([g.Z], () => g.Z.getAllActiveStreams(), []), {
  selectedParticipant: P,
  largeStream: O
} = (0, r.cj)([p.Z], () => ({
  selectedParticipant: null != l ? p.Z.getSelectedParticipant(l.id) : null,
  largeStream: null != l && p.Z.getStageStreamSize(l.id)
})), y = a.useCallback((e, t) => {
  if (e.type === M.fO.STREAM && 0 === L.filter(t => (0, _.V9)(t) === e.id && t.state !== A.jm8.ENDED).length) {
    if (!(0, f.p9)(l, T.Z, I.Z, x.Z, m.Z)[0])
      return;
    (0, u.rn)((0, _.my)(e.id), {
      forceMultiple: t.shiftKey
    });
  }
  (null == P ? void 0 : P.id) === e.id ? O ? (c.Z.selectParticipant(l.id, null), c.Z.updateStageStreamSize(l.id, !1)) : c.Z.updateStageStreamSize(l.id, !0) : (c.Z.updateStageStreamSize(l.id, !1), c.Z.selectParticipant(l.id, e.id));
}, [
  L,
  l,
  P,
  O
]);
return (0, i.jsx)(S.Z, {
  participant: n,
  aspectRatio: R,
  fit: n.type === M.fO.USER ? v.L.COVER : void 0,
  blocked: j,
  channel: l,
  className: b.tile,
  inCall: !0,
  inPopout: E,
  onClick: y,
  onContextMenu: h,
  paused: !1,
  pulseSpeakingIndicator: !C.enabled,
  width: s,
  children: d && n.type === M.fO.USER && (0, i.jsx)(Z.Z, {})
}, N);
  };
t.Z = a.memo(function(e) {
  var t;
  let {
participant: a,
channel: l,
width: o
  } = e, c = (0, h.bp)(), u = l.getGuildId();
  s()(null != u, 'Channel cannot be guildless');
  let {
user: m
  } = a, _ = (0, r.e7)([p.Z], () => p.Z.getParticipant(l.id, a.id), [
l.id,
a.id
  ]), f = (0, r.e7)([N.ZP], () => N.ZP.isModerator(m.id, l.id), [
l.id,
m.id
  ]);
  if (null == _ || _.type === M.fO.ACTIVITY)
return null;
  let E = (e, t) => {
  switch (e.type) {
    case M.fO.HIDDEN_STREAM:
    case M.fO.STREAM:
      (0, d.jW)(t, async () => {
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
      (0, d.jW)(t, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79695'),
          n.e('17400'),
          n.e('12435'),
          n.e('17463')
        ]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, {
          ...t,
          user: m,
          guildId: u,
          channel: l,
          showMediaItems: !0,
          showStageChannelItems: !0,
          showChatItems: !1
        });
      }, {
        context: c
      });
  }
},
C = _.type === M.fO.USER && !(null === (t = _.voiceState) || void 0 === t ? void 0 : t.selfVideo);
  return (0, i.jsx)(i.Fragment, {
children: C ? (0, i.jsx)(j, {
  stageParticipant: a,
  rtcParticipant: _,
  channel: l,
  guildId: u,
  user: m,
  width: o,
  isModerator: f,
  onContextMenu: E,
  inPopout: c === A.IlC.POPOUT
}) : (0, i.jsx)(L, {
  stageParticipant: a,
  rtcParticipant: _,
  channel: l,
  guildId: u,
  user: m,
  width: o,
  isModerator: f,
  onContextMenu: E,
  inPopout: c === A.IlC.POPOUT
})
  });
});