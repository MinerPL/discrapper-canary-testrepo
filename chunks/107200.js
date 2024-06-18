"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(442837),
  l = n(352527),
  a = n(183584),
  o = n(487029),
  r = n(592125),
  d = n(944486),
  c = n(554174),
  u = n(710111),
  h = n(278029);

function p() {
  let [e, t] = (0, s.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]), n = (0, s.e7)([d.Z], () => d.Z.getVoiceChannelId()), p = (0, s.e7)([r.Z], () => r.Z.getChannel(n), [n]), f = null == p ? void 0 : p.getGuildId();
  return e && null != p ? (0, i.jsx)("div", {
    className: h.widget,
    children: (0, i.jsx)(o.Z, {
      width: u.FW.width,
      height: u.FW.height,
      guildId: f,
      channel: p,
      keepOpen: t,
      onClose: function() {
        let e = (0, c.Z)();
        null != e && (0, a.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}