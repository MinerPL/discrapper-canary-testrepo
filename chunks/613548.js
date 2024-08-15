n.d(t, {
  Z: function() {
return z;
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
  h = n(194082),
  m = n(320007),
  p = n(236091),
  _ = n(569545),
  f = n(517525),
  E = n(665149),
  g = n(6242),
  C = n(757692),
  I = n(141321),
  x = n(121254),
  T = n(954551),
  N = n(44136),
  v = n(651183),
  S = n(618158),
  Z = n(390322),
  A = n(616286),
  M = n(961048),
  b = n(179424),
  R = n(786915),
  j = n(975146),
  L = n(991617),
  P = n(597998),
  O = n(606304),
  y = n(594174),
  D = n(74538),
  k = n(358221),
  U = n(887012),
  w = n(444253),
  B = n(355827),
  H = n(354459),
  G = n(981631),
  V = n(689938),
  F = n(492334);

function W(e) {
  let {
channelId: t,
guildId: n
  } = e, a = Date.now(), s = (0, u.e7)([
O.Z,
k.Z
  ], () => o()(O.Z.getSpeakers()).map(e => k.Z.getParticipant(t, e)).filter(e => null != e && e.type === H.fO.USER && e.speaking && !(0, N.ZP)(e)).sortBy(e => -O.Z.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
  return 0 === s.length ? null : (0, i.jsx)(i.Fragment, {
children: s.map((e, t) => (0, i.jsx)(d.Tooltip, {
  position: 'bottom',
  color: d.Tooltip.Colors.GREY,
  text: V.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
    username: e.user.username
  }),
  children: a => (0, i.jsx)(P.Z, {
    ...a,
    className: l()(F.speaker, {
      [F.last]: t === s.length - 1
    }),
    user: e.user,
    speaking: !0,
    collapsed: !0,
    guildId: n
  })
}, e.id))
  });
}

function z(e) {
  let {
inPopout: t,
channel: n,
appContext: s,
inCall: l,
isChatOpen: r,
exitFullScreen: o
  } = e, N = n.id, {
voiceParticipantsHidden: P,
selectedParticipant: O,
userParticipantCount: V
  } = (0, u.cj)([k.Z], () => ({
selectedParticipant: k.Z.getSelectedParticipant(N),
voiceParticipantsHidden: k.Z.getVoiceParticipantsHidden(N),
userParticipantCount: k.Z.getUserParticipantCount(N)
  }), [N]), z = (0, u.e7)([y.default], () => y.default.getCurrentUser()), Y = (0, U.Z)(n), K = (0, D.So)(c.q.STREAM_HIGH_QUALITY), q = (0, C.o)(O, z), X = (0, g.lL)('CallHeader', !0, z, q), {
enabled: Q
  } = x.Z.useExperiment({
location: 'ChannelCallHeaderToolbar'
  }, {
autoTrackExposure: !1
  }), {
preventIdle: J,
allowIdle: $
  } = (0, S.Y)('popup'), ee = [];
  if (Y) {
let e = (null == O ? void 0 : O.type) === H.fO.STREAM ? (0, _.my)(O.id) : void 0,
  t = (null == O ? void 0 : O.type) === H.fO.ACTIVITY ? O.id : void 0;
ee.push((0, i.jsx)(R.Z, {
  className: F.button,
  channel: n,
  applicationId: t,
  stream: e,
  exitFullScreen: o,
  analyticsLocation: n.type === G.d4z.GUILD_VOICE ? G.ZY5.GUILD_CHANNEL : G.ZY5.DM_CHANNEL
}, 'invite-button'));
  }
  return P && ee.push((0, i.jsx)(W, {
channelId: N,
guildId: n.guild_id
  }, 'current-speaker')), ee.push((0, i.jsx)(p.Z, {
className: F.button,
channelId: N
  }, 'clips-enabled-indicator')), (null == O ? void 0 : O.type) === H.fO.STREAM && (ee.push((0, i.jsx)(v.Z, {
className: F.button,
participant: O
  }, 'warning')), ee.push((0, i.jsx)(f.Z, {
size: h.ZP.Sizes.LARGE,
className: F.button,
participant: O,
showQuality: !0,
premiumIndicator: K || X.enabled
  }, 'live-indicator'))), P && ee.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: () => (0, i.jsx)(Z.Z, {
  children: (0, i.jsx)(B.Z, {
    channel: n
  })
}),
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, a.createElement)(j.Z, {
    ...e,
    isActive: n,
    count: V,
    key: 'call-members',
    className: F.button
  });
}
  }, 'call-members-popout')), l && ee.push(null != O ? (0, i.jsx)(b.Z, {
className: F.button,
channelId: N
  }, 'deselect-participant') : (0, i.jsx)(L.Z, {
className: F.button,
channelId: N,
isHorizontal: !0
  }, 'select-participant')), !t && ee.push((0, i.jsx)(m.Z, {
className: F.button
  }, 'clips')), ee.push((0, i.jsx)(I.Z, {
onOpen: J,
onClose: $,
className: F.button
  }, 'recents')), Q && ee.push((0, i.jsx)(T.Z, {
className: F.button
  }, 'for-later')), ee.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(Z.Z, {
    children: (0, i.jsx)(w.Z, {
      channelId: N,
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
  return (0, a.createElement)(M.Z, {
    ...e,
    key: 'more-options',
    isActive: n,
    className: F.lastButton
  });
}
  }, 'more-options-popout')), !r && (ee.push((0, i.jsx)(E.ZP.Divider, {
className: F.divider
  }, 'divider')), ee.push((0, i.jsx)(A.T, {
channelId: n.id,
className: F.chatButtonSpacer,
disabled: !0
  }, 'chat-spacer'))), (0, i.jsx)(i.Fragment, {
children: ee
  });
}