n.d(t, {
  m: function() {
return u;
  }
});
var s = n(454585),
  a = n(551452),
  r = n(532901);
let l = {
...s.Z.guildEventRules.link,
react: (0, r.Z)({
  enableBuildOverrides: !1,
  mustConfirmExternalLink: !0
}).react
  },
  i = {
...s.Z.guildEventRules.channelMention,
react: (0, a.Z)({
  enableBuildOverrides: !1,
  shouldCloseDefaultModals: !0,
  shouldStopPropagation: !0
}).react
  },
  u = s.Z.reactParserFor({
...s.Z.guildEventRules,
link: l,
channelMention: i
  });