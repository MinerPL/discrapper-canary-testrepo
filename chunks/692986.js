"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  r = n("404118"),
  a = n("629109"),
  o = n("235004"),
  s = n("42887"),
  d = n("945956"),
  c = n("162771"),
  f = n("697218"),
  g = n("423487"),
  _ = n("599110"),
  h = n("49111"),
  E = n("353927"),
  S = n("782340"),
  m = n("622393");

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT,
    n = (0, i.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    v = (0, i.useStateFromStores)([o.default], () => o.default.isLocalSoundboardMuted(e)),
    {
      muted: p,
      deafened: T = !1,
      localVideoDisabled: M = !1,
      localVideoAutoDisabled: C = !1
    } = (0, i.useStateFromStoresObject)([s.default], () => n ? {
      muted: s.default.isSelfMute(t),
      deafened: s.default.isSelfDeaf(t)
    } : {
      muted: s.default.isLocalMute(e, t),
      localVideoDisabled: s.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: s.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    I = s.default.supports(E.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(u.MenuCheckboxItem, {
      id: "disable-video",
      label: S.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (C) {
          r.default.show({
            title: S.default.Messages.UNSTABLE_CONNECTION,
            body: S.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: S.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: S.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => a.default.setDisableLocalVideo(e, h.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = M ? h.VideoToggleState.MANUAL_ENABLED : h.VideoToggleState.DISABLED;
        a.default.setDisableLocalVideo(e, n, t)
      },
      checked: M,
      subtext: C ? (0, l.jsxs)("div", {
        className: m.videoPaused,
        children: [(0, l.jsx)(g.default, {
          width: 12,
          className: m.warningCircle
        }), S.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    A = n ? null : (0, l.jsx)(u.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: S.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = d.default.getRTCConnection();
        _.default.track(h.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !v
        }), a.default.toggleLocalSoundboardMute(e, t)
      },
      checked: v
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: S.default.Messages.SOUND_MUTE,
    action: () => a.default.toggleSelfMute({
      context: t
    }),
    checked: p
  }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
    id: "deafen",
    label: S.default.Messages.DEAFEN,
    action: () => a.default.toggleSelfDeaf({
      context: t
    }),
    checked: T
  }, "self-deafen"), I] : [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: S.default.Messages.SOUND_MUTE,
    action: () => a.default.toggleLocalMute(e, t),
    checked: p
  }, "self-mute"), A, I]
}