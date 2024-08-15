l.d(n, {
  SU: function() {
return i;
  },
  sR: function() {
return r;
  }
}), l(47120), l(653041);
var s = l(442837),
  a = l(889161);
l(427679);
var t = l(984933);

function i(e, n) {
  let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [t.ZP];
  if (null == n)
return [];
  let s = l.getChannels(e)[t.Zb],
i = [];
  for (let {
  channel: e
}
of s) {
let {
  canCreateGuildEvent: l,
  canManageAllEvents: s
} = (0, a.Gw)(e), t = l || s;
if (e.type === n)
  e.isGuildVoice() && t ? i.push(e) : e.isGuildStageVoice() && t && i.push(e);
  }
  return i;
}

function r(e, n) {
  return (0, s.Wu)([t.ZP], () => i(e, n, [t.ZP]), [
e,
n
  ]);
}
l(496675), l(85243);