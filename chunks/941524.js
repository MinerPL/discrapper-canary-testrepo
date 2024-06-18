"use strict";
t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(512508),
  l = t(706371),
  a = t(563115);

function r(e) {
  let {
    guildId: s,
    selectedChannelIds: t,
    selectedRoleIds: r,
    onChange: o,
    placeholder: c,
    disableEveryoneRole: d,
    includeRoleRestrictedPrivateChannels: u = !1,
    includeStageVoiceChannels: E = !1,
    helperText: _,
    className: I
  } = e, T = (0, l.r)(s, t, u, E), N = (0, a.h)(s, r, d);
  return (0, n.jsx)(i.ZP, {
    channelRows: T,
    roleRows: N,
    guildId: s,
    selectedChannelIds: t,
    selectedRoleIds: r,
    onChange: o,
    placeholder: c,
    helperText: _,
    className: I
  })
}