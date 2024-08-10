t.d(n, {
  Z: function() {
return g;
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  s = t(481060),
  l = t(668781),
  o = t(846027),
  r = t(763296),
  u = t(131951),
  d = t(19780),
  c = t(914010),
  E = t(594174),
  Z = t(626135),
  M = t(981631),
  f = t(65154),
  _ = t(689938),
  I = t(127544);

function g(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
t = (0, i.e7)([E.default], () => {
  var n;
  return (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
}),
g = (0, i.e7)([r.Z], () => r.Z.isLocalSoundboardMuted(e)),
{
  muted: m,
  deafened: A = !1,
  localVideoDisabled: N = !1,
  localVideoAutoDisabled: C = !1
} = (0, i.cj)([u.Z], () => t ? {
  muted: u.Z.isSelfMute(n),
  deafened: u.Z.isSelfDeaf(n)
} : {
  muted: u.Z.isLocalMute(e, n),
  localVideoDisabled: u.Z.isLocalVideoDisabled(e, n),
  localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, n)
}, [
  t,
  n,
  e
]),
T = u.Z.supports(f.AN.DISABLE_VIDEO) && !t ? (0, a.jsx)(s.MenuCheckboxItem, {
  id: 'disable-video',
  label: _.Z.Messages.DISABLE_VIDEO,
  action: () => {
    if (C) {
      l.Z.show({
        title: _.Z.Messages.UNSTABLE_CONNECTION,
        body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
        confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
        cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
        onConfirm: () => o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED)
      });
      return;
    }
    let t = N ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
    o.Z.setDisableLocalVideo(e, t, n);
  },
  checked: N,
  subtext: C ? (0, a.jsxs)('div', {
    className: I.videoPaused,
    children: [
      (0, a.jsx)(s.CircleWarningIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 12,
        className: I.warningCircle
      }),
      _.Z.Messages.UNSTABLE_CONNECTION
    ]
  }) : null
}, 'disable-video') : null,
v = t ? null : (0, a.jsx)(s.MenuCheckboxItem, {
  id: 'soundboard-sound-mute',
  label: _.Z.Messages.MUTE_SOUNDBOARD,
  action: () => {
    let t = d.Z.getRTCConnection();
    Z.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
      guild_id: c.Z.getGuildId(),
      target_user_id: e,
      media_session_id: null == t ? void 0 : t.getMediaSessionId(),
      parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
      mute_soundboard: !g
    }), o.Z.toggleLocalSoundboardMute(e, n);
  },
  checked: g
}, 'soundboard-sound-mute');
  return t ? [
(0, a.jsx)(s.MenuCheckboxItem, {
  id: 'mute',
  label: _.Z.Messages.SOUND_MUTE,
  action: () => o.Z.toggleSelfMute({
    context: n
  }),
  checked: m
}, 'self-mute'),
(0, a.jsx)(s.MenuCheckboxItem, {
  id: 'deafen',
  label: _.Z.Messages.DEAFEN,
  action: () => o.Z.toggleSelfDeaf({
    context: n
  }),
  checked: A
}, 'self-deafen'),
T
  ] : [
(0, a.jsx)(s.MenuCheckboxItem, {
  id: 'mute',
  label: _.Z.Messages.SOUND_MUTE,
  action: () => o.Z.toggleLocalMute(e, n),
  checked: m
}, 'self-mute'),
v,
T
  ];
}