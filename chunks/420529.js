"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("735250");
n("470079");
var u = n("399606"),
  a = n("481060"),
  i = n("231757"),
  r = n("397639"),
  s = n("19780"),
  d = n("979651"),
  o = n("951206"),
  c = n("446226"),
  f = n("937393"),
  E = n("721351"),
  C = n("981631"),
  S = n("689938");

function h(e) {
  let t = (0, u.useStateFromStores)([s.default], () => s.default.getChannelId() === e.id),
    h = (0, c.default)(),
    N = (null == h ? void 0 : h.channelId) === e.id,
    v = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
    m = (0, r.default)(e),
    _ = !(0, u.useStateFromStores)([d.default], () => d.default.isInChannel(e.id)) && m || v,
    T = (0, f.default)();
  if (!N && 0 === T.length) return null;
  let I = t => {
    if (!t.twoWayLink || t.revoked) {
      (0, i.default)({
        platformType: t.type,
        location: "Console Transfer Item"
      });
      return
    }
    t.type === C.PlatformTypes.XBOX ? (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("73422"), n.e("522")]).then(n.bind(n, "200623"));
      return n => (0, l.jsx)(t, {
        ...n,
        channel: e
      })
    }) : (t.type === C.PlatformTypes.PLAYSTATION || t.type === C.PlatformTypes.PLAYSTATION_STAGING) && (0, a.openModalLazy)(async () => {
      let {
        default: u
      } = await Promise.all([n.e("99387"), n.e("638")]).then(n.bind(n, "543974"));
      return n => (0, l.jsx)(u, {
        ...n,
        platform: t.type,
        channel: e
      })
    })
  };
  return (0, l.jsx)(l.Fragment, {
    children: N ? (0, l.jsx)(a.MenuItem, {
      label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
      id: "handoff",
      action: () => {
        (0, o.handoffRemote)(h)
      },
      icon: (0, E.default)(void 0),
      disabled: _
    }) : T.map(e => (0, l.jsx)(a.MenuItem, {
      id: "transfer-".concat(e.type, "-").concat(e.id),
      label: function(e, t) {
        if (e === C.PlatformTypes.XBOX) return t ? S.default.Messages.TRANSFER_VOICE_TO_XBOX : S.default.Messages.JOIN_ON_XBOX;
        if (e === C.PlatformTypes.PLAYSTATION) return t ? S.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
        if (e === C.PlatformTypes.PLAYSTATION_STAGING) return t ? S.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
      }(e.type, t),
      action: () => I(e),
      icon: (0, E.default)(e.type),
      disabled: _
    }, e.id))
  })
}