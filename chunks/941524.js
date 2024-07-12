n.d(t, {
  Z: function() {
return l;
  }
});
var s = n(735250);
n(470079);
var a = n(512508),
  i = n(706371),
  r = n(563115);

function l(e) {
  let {
guildId: t,
selectedChannelIds: n,
selectedRoleIds: l,
onChange: o,
placeholder: c,
disableEveryoneRole: d,
includeRoleRestrictedPrivateChannels: u = !1,
includeStageVoiceChannels: _ = !1,
helperText: I,
className: E
  } = e, T = (0, i.r)(t, n, u, _), m = (0, r.h)(t, l, d);
  return (0, s.jsx)(a.ZP, {
channelRows: T,
roleRows: m,
guildId: t,
selectedChannelIds: n,
selectedRoleIds: l,
onChange: o,
placeholder: c,
helperText: I,
className: E
  });
}