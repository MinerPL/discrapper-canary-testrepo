t.d(n, {
  Z: function() {
return g;
  }
});
var i = t(735250);
t(470079);
var s = t(442837),
  l = t(481060),
  a = t(668781),
  o = t(846027),
  d = t(763296),
  u = t(131951),
  r = t(19780),
  c = t(914010),
  Z = t(594174),
  E = t(626135),
  M = t(981631),
  f = t(65154),
  I = t(689938),
  _ = t(127544);

function g(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
t = (0, s.e7)([Z.default], () => {
  var n;
  return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
}),
g = (0, s.e7)([d.Z], () => d.Z.isLocalSoundboardMuted(e)),
{
  muted: N,
  deafened: m = !1,
  localVideoDisabled: A = !1,
  localVideoAutoDisabled: C = !1
} = (0, s.cj)([u.Z], () => t ? {
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
T = u.Z.supports(f.AN.DISABLE_VIDEO) && !t ? (0, i.jsx)(l.MenuCheckboxItem, {
  id: 'disable-video',
  label: I.Z.Messages.DISABLE_VIDEO,
  action: () => {
    if (C) {
      a.Z.show({
        title: I.Z.Messages.UNSTABLE_CONNECTION,
        body: I.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
        confirmText: I.Z.Messages.TURN_ON_VIDEO_ANYWAY,
        cancelText: I.Z.Messages.LEAVE_VIDEO_OFF,
        onConfirm: () => o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED)
      });
      return;
    }
    let t = A ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
    o.Z.setDisableLocalVideo(e, t, n);
  },
  checked: A,
  subtext: C ? (0, i.jsxs)('div', {
    className: _.videoPaused,
    children: [
      (0, i.jsx)(l.CircleExclamationPointIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 12,
        className: _.warningCircle
      }),
      I.Z.Messages.UNSTABLE_CONNECTION
    ]
  }) : null
}, 'disable-video') : null,
D = t ? null : (0, i.jsx)(l.MenuCheckboxItem, {
  id: 'soundboard-sound-mute',
  label: I.Z.Messages.MUTE_SOUNDBOARD,
  action: () => {
    let t = r.Z.getRTCConnection();
    E.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
(0, i.jsx)(l.MenuCheckboxItem, {
  id: 'mute',
  label: I.Z.Messages.SOUND_MUTE,
  action: () => o.Z.toggleSelfMute({
    context: n
  }),
  checked: N
}, 'self-mute'),
(0, i.jsx)(l.MenuCheckboxItem, {
  id: 'deafen',
  label: I.Z.Messages.DEAFEN,
  action: () => o.Z.toggleSelfDeaf({
    context: n
  }),
  checked: m
}, 'self-deafen'),
T
  ] : [
(0, i.jsx)(l.MenuCheckboxItem, {
  id: 'mute',
  label: I.Z.Messages.SOUND_MUTE,
  action: () => o.Z.toggleLocalMute(e, n),
  checked: N
}, 'self-mute'),
D,
T
  ];
}