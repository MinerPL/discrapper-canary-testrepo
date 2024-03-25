"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("18054"),
  s = n("843624"),
  o = n("259141"),
  r = n("957255"),
  d = n("207273"),
  c = n("49111"),
  f = n("782340");

function E(e, t) {
  let E = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_CHANNELS, t)),
    _ = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)),
    S = (0, o.useIsConnectedToVoiceChannel)(e),
    N = (0, i.useStateFromStores)([d.default], () => d.default.getChannelStatus(e)),
    T = null != N && N.length > 0;
  return e.isGuildVoice() && (E || _) ? !S && E && T ? (0, a.jsx)(l.MenuItem, {
    id: "clear-status",
    label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
    action: () => {
      u.default.updateVoiceChannelStatus(e.id, "")
    }
  }) : S && _ ? (0, a.jsx)(l.MenuItem, {
    id: "set-status",
    label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("843624").then(n.bind(n, "843624"));
        return n => (0, a.jsx)(t, {
          channel: e,
          ...n
        })
      }, {
        modalKey: s.VOICE_CHANNEL_STATUS_MODAL_KEY
      })
    }
  }) : null : null
}