t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    s = t(668781),
    o = t(846027),
    u = t(763296),
    d = t(131951),
    r = t(19780),
    c = t(914010),
    Z = t(594174),
    E = t(626135),
    M = t(981631),
    f = t(65154),
    _ = t(689938),
    I = t(201683);
function g(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
        t = (0, i.e7)([Z.default], () => {
            var n;
            return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
        }),
        g = (0, i.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: A,
            deafened: N = !1,
            localVideoDisabled: m = !1,
            localVideoAutoDisabled: C = !1
        } = (0, i.cj)(
            [d.Z],
            () =>
                t
                    ? {
                          muted: d.Z.isSelfMute(n),
                          deafened: d.Z.isSelfDeaf(n)
                      }
                    : {
                          muted: d.Z.isLocalMute(e, n),
                          localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
                          localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n)
                      },
            [t, n, e]
        ),
        T =
            d.Z.supports(f.AN.DISABLE_VIDEO) && !t
                ? (0, l.jsx)(
                      a.MenuCheckboxItem,
                      {
                          id: 'disable-video',
                          label: _.Z.Messages.DISABLE_VIDEO,
                          action: () => {
                              if (C) {
                                  s.Z.show({
                                      title: _.Z.Messages.UNSTABLE_CONNECTION,
                                      body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                      confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                      cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
                                      onConfirm: () => o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let t = m ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                              o.Z.setDisableLocalVideo(e, t, n);
                          },
                          checked: m,
                          subtext: C
                              ? (0, l.jsxs)('div', {
                                    className: I.videoPaused,
                                    children: [
                                        (0, l.jsx)(a.CircleWarningIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: I.warningCircle
                                        }),
                                        _.Z.Messages.UNSTABLE_CONNECTION
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        v = t
            ? null
            : (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                      id: 'soundboard-sound-mute',
                      label: _.Z.Messages.MUTE_SOUNDBOARD,
                      action: () => {
                          let t = r.Z.getRTCConnection();
                          E.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                              parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                              mute_soundboard: !g
                          }),
                              o.Z.toggleLocalSoundboardMute(e, n);
                      },
                      checked: g
                  },
                  'soundboard-sound-mute'
              );
    return t
        ? [
              (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: _.Z.Messages.SOUND_MUTE,
                      action: () =>
                          o.Z.toggleSelfMute({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: A
                  },
                  'self-mute'
              ),
              (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                      id: 'deafen',
                      label: _.Z.Messages.DEAFEN,
                      action: () => o.Z.toggleSelfDeaf({ context: n }),
                      checked: N
                  },
                  'self-deafen'
              ),
              T
          ]
        : [
              (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: _.Z.Messages.SOUND_MUTE,
                      action: () => o.Z.toggleLocalMute(e, n),
                      checked: A
                  },
                  'self-mute'
              ),
              v,
              T
          ];
}
