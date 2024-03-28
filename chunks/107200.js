"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("442837"),
  l = n("352527"),
  s = n("183584"),
  o = n("487029"),
  r = n("592125"),
  d = n("944486"),
  u = n("554174"),
  c = n("710111"),
  f = n("690046");

function h() {
  let [e, t] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.enabled, l.default.keepOpen]), n = (0, a.useStateFromStores)([d.default], () => d.default.getVoiceChannelId()), h = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(n), [n]), p = null == h ? void 0 : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: f.widget,
    children: (0, i.jsx)(o.default, {
      width: c.SoundboardWheelSize.width,
      height: c.SoundboardWheelSize.height,
      guildId: p,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, u.default)();
        null != e && (0, s.closeSoundboardInOverlay)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}