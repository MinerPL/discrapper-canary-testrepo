"use strict";
u.r(t), u.d(t, {
  default: function() {
    return E
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("787014"),
  d = u("339340"),
  i = u("869768"),
  o = u("496675"),
  r = u("12498"),
  f = u("981631"),
  c = u("689938");

function E(e, t) {
  let E = (0, n.useStateFromStores)([o.default], () => o.default.can(f.Permissions.MANAGE_CHANNELS, t)),
    _ = (0, n.useStateFromStores)([o.default], () => o.default.can(f.Permissions.SET_VOICE_CHANNEL_STATUS, e)),
    M = (0, i.useIsConnectedToVoiceChannel)(e),
    S = (0, n.useStateFromStores)([r.default], () => r.default.getChannelStatus(e)),
    C = null != S && S.length > 0;
  return e.isGuildVoice() && (E || _) ? !M && E && C ? (0, a.jsx)(l.MenuItem, {
    id: "clear-status",
    label: c.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
    action: () => {
      s.default.updateVoiceChannelStatus(e.id, "")
    }
  }) : M && _ ? (0, a.jsx)(l.MenuItem, {
    id: "set-status",
    label: c.default.Messages.VOICE_CHANNEL_SET_STATUS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(u.bind(u, "339340"));
        return u => (0, a.jsx)(t, {
          channel: e,
          ...u
        })
      }, {
        modalKey: d.VOICE_CHANNEL_STATUS_MODAL_KEY
      })
    }
  }) : null : null
}