n.d(t, {
  Z: function() {
return F;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(848246),
  u = n(442837),
  d = n(481060),
  h = n(320007),
  p = n(236091),
  m = n(569545),
  _ = n(517525),
  f = n(665149),
  E = n(6242),
  g = n(757692),
  C = n(141321),
  I = n(44136),
  x = n(651183),
  T = n(618158),
  N = n(390322),
  v = n(616286),
  S = n(961048),
  Z = n(179424),
  A = n(786915),
  M = n(975146),
  b = n(991617),
  R = n(606304),
  j = n(594174),
  L = n(805009),
  P = n(368666),
  O = n(74538),
  y = n(358221),
  D = n(887012),
  k = n(444253),
  U = n(355827),
  w = n(354459),
  B = n(981631),
  H = n(689938),
  G = n(867358);

function V(e) {
  let {
channelId: t,
guildId: n
  } = e, a = Date.now(), s = (0, u.e7)([
R.Z,
y.Z
  ], () => o()(R.Z.getSpeakers()).map(e => y.Z.getParticipant(t, e)).filter(e => null != e && e.type === w.fO.USER && e.speaking && !(0, I.ZP)(e)).sortBy(e => -R.Z.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
  return 0 === s.length ? null : (0, i.jsx)(i.Fragment, {
children: s.map((e, t) => (0, i.jsx)(d.Tooltip, {
  position: 'bottom',
  color: d.Tooltip.Colors.GREY,
  text: H.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
    username: e.user.username
  }),
  children: a => (0, i.jsx)(L.Z, {
    ...a,
    className: l()(G.speaker, {
      [G.last]: t === s.length - 1
    }),
    user: e.user,
    speaking: !0,
    collapsed: !0,
    guildId: n
  })
}, e.id))
  });
}

function F(e) {
  let {
inPopout: t,
channel: n,
appContext: s,
inCall: l,
isChatOpen: r,
exitFullScreen: o
  } = e, I = n.id, {
voiceParticipantsHidden: R,
selectedParticipant: L,
userParticipantCount: H
  } = (0, u.cj)([y.Z], () => ({
selectedParticipant: y.Z.getSelectedParticipant(I),
voiceParticipantsHidden: y.Z.getVoiceParticipantsHidden(I),
userParticipantCount: y.Z.getUserParticipantCount(I)
  }), [I]), F = (0, u.e7)([j.default], () => j.default.getCurrentUser()), W = (0, D.Z)(n), z = (0, O.So)(c.q.STREAM_HIGH_QUALITY), Y = (0, g.o)(L, F), K = (0, E.lL)('CallHeader', !0, F, Y), {
preventIdle: q,
allowIdle: X
  } = (0, T.Y)('popup'), Q = [];
  if (W) {
let e = (null == L ? void 0 : L.type) === w.fO.STREAM ? (0, m.my)(L.id) : void 0,
  t = (null == L ? void 0 : L.type) === w.fO.ACTIVITY ? L.id : void 0;
Q.push((0, i.jsx)(A.Z, {
  className: G.button,
  channel: n,
  applicationId: t,
  stream: e,
  exitFullScreen: o,
  analyticsLocation: n.type === B.d4z.GUILD_VOICE ? B.ZY5.GUILD_CHANNEL : B.ZY5.DM_CHANNEL
}, 'invite-button'));
  }
  return R && Q.push((0, i.jsx)(V, {
channelId: I,
guildId: n.guild_id
  }, 'current-speaker')), Q.push((0, i.jsx)(p.Z, {
className: G.button,
channelId: I
  }, 'clips-enabled-indicator')), (null == L ? void 0 : L.type) === w.fO.STREAM && (Q.push((0, i.jsx)(x.Z, {
className: G.button,
participant: L
  }, 'warning')), Q.push((0, i.jsx)(_.Z, {
size: P.ZP.Sizes.LARGE,
className: G.button,
participant: L,
showQuality: !0,
premiumIndicator: z || K.enabled
  }, 'live-indicator'))), R && Q.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: () => (0, i.jsx)(N.Z, {
  children: (0, i.jsx)(U.Z, {
    channel: n
  })
}),
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, a.createElement)(M.Z, {
    ...e,
    isActive: n,
    count: H,
    key: 'call-members',
    className: G.button
  });
}
  }, 'call-members-popout')), l && Q.push(null != L ? (0, i.jsx)(Z.Z, {
className: G.button,
channelId: I
  }, 'deselect-participant') : (0, i.jsx)(b.Z, {
className: G.button,
channelId: I,
isHorizontal: !0
  }, 'select-participant')), !t && Q.push((0, i.jsx)(h.Z, {
className: G.button
  }, 'clips')), Q.push((0, i.jsx)(C.Z, {
onOpen: q,
onClose: X,
className: G.button
  }, 'recents')), Q.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(N.Z, {
    children: (0, i.jsx)(k.Z, {
      channelId: I,
      onClose: t,
      appContext: s,
      exitFullScreen: o
    })
  });
},
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, a.createElement)(S.Z, {
    ...e,
    key: 'more-options',
    isActive: n,
    className: G.lastButton
  });
}
  }, 'more-options-popout')), !r && (Q.push((0, i.jsx)(f.ZP.Divider, {
className: G.divider
  }, 'divider')), Q.push((0, i.jsx)(v.T, {
channelId: n.id,
className: G.chatButtonSpacer,
disabled: !0
  }, 'chat-spacer'))), (0, i.jsx)(i.Fragment, {
children: Q
  });
}