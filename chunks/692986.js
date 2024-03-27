"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("404118"),
  d = n("629109"),
  s = n("235004"),
  o = n("42887"),
  r = n("945956"),
  c = n("162771"),
  f = n("697218"),
  E = n("423487"),
  _ = n("599110"),
  S = n("49111"),
  T = n("353927"),
  g = n("782340"),
  p = n("622393");

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT,
    n = (0, u.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    M = (0, u.useStateFromStores)([s.default], () => s.default.isLocalSoundboardMuted(e)),
    {
      muted: A,
      deafened: v = !1,
      localVideoDisabled: I = !1,
      localVideoAutoDisabled: m = !1
    } = (0, u.useStateFromStoresObject)([o.default], () => n ? {
      muted: o.default.isSelfMute(t),
      deafened: o.default.isSelfDeaf(t)
    } : {
      muted: o.default.isLocalMute(e, t),
      localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    C = o.default.supports(T.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(a.MenuCheckboxItem, {
      id: "disable-video",
      label: g.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (m) {
          i.default.show({
            title: g.default.Messages.UNSTABLE_CONNECTION,
            body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => d.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = I ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
        d.default.setDisableLocalVideo(e, n, t)
      },
      checked: I,
      subtext: m ? (0, l.jsxs)("div", {
        className: p.videoPaused,
        children: [(0, l.jsx)(E.default, {
          width: 12,
          className: p.warningCircle
        }), g.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    h = n ? null : (0, l.jsx)(a.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: g.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = r.default.getRTCConnection();
        _.default.track(S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !M
        }), d.default.toggleLocalSoundboardMute(e, t)
      },
      checked: M
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleSelfMute({
      context: t
    }),
    checked: A
  }, "self-mute"), (0, l.jsx)(a.MenuCheckboxItem, {
    id: "deafen",
    label: g.default.Messages.DEAFEN,
    action: () => d.default.toggleSelfDeaf({
      context: t
    }),
    checked: v
  }, "self-deafen"), C] : [(0, l.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: g.default.Messages.SOUND_MUTE,
    action: () => d.default.toggleLocalMute(e, t),
    checked: A
  }, "self-mute"), h, C]
}