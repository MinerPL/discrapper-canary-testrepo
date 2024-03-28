"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var l = s("512508"),
  n = s("706371"),
  i = s("563115");

function r(e) {
  let {
    guildId: t,
    selectedChannelIds: s,
    selectedRoleIds: r,
    onChange: o,
    placeholder: d,
    disableEveryoneRole: u,
    includeRoleRestrictedPrivateChannels: c = !1,
    includeStageVoiceChannels: E = !1,
    helperText: _,
    className: I
  } = e, T = (0, n.useChannelRows)(t, s, c, E), S = (0, i.useRoleRows)(t, r, u);
  return (0, a.jsx)(l.default, {
    channelRows: T,
    roleRows: S,
    guildId: t,
    selectedChannelIds: s,
    selectedRoleIds: r,
    onChange: o,
    placeholder: d,
    helperText: _,
    className: I
  })
}