"use strict";
u.r(t), u.d(t, {
  default: function() {
    return M
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("787014"),
  s = u("362721"),
  i = u("339340"),
  o = u("869768"),
  r = u("496675"),
  f = u("12498"),
  c = u("981631"),
  E = u("689938");

function M(e, t) {
  let M = (0, a.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_CHANNELS, t)),
    _ = (0, s.default)(e),
    C = (0, o.useIsConnectedToVoiceChannel)(e),
    N = (0, a.useStateFromStores)([f.default], () => f.default.getChannelStatus(e)),
    S = null != N && N.length > 0;
  return e.isGuildVoice() && (M || _) ? !C && M && S ? (0, n.jsx)(l.MenuItem, {
    id: "clear-status",
    label: E.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
    action: () => {
      d.default.updateVoiceChannelStatus(e.id, "")
    }
  }) : C && _ ? (0, n.jsx)(l.MenuItem, {
    id: "set-status",
    label: E.default.Messages.VOICE_CHANNEL_SET_STATUS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(u.bind(u, "339340"));
        return u => (0, n.jsx)(t, {
          channel: e,
          ...u
        })
      }, {
        modalKey: i.VOICE_CHANNEL_STATUS_MODAL_KEY
      })
    }
  }) : null : null
}