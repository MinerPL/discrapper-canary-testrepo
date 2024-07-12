t.d(n, {
  Z: function() {
return o;
  }
});
var l = t(399606),
  s = t(430824),
  a = t(971130),
  i = t(956829),
  r = t(981631);

function o(e) {
  let {
guildId: n
  } = e, t = i.h.useExperiment({
guildId: null != n ? n : r.lds,
location: '6798be_2'
  }), o = (0, l.e7)([s.Z], () => s.Z.getGuild(n));
  return null != n && function(e) {
var n;
let {
  guild: t,
  experimentConfig: l
} = e, {
  defaultInvitesToNeverExpire: s
} = null != l ? l : i.h.getCurrentConfig({
  guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : r.lds,
  location: '6798be_1'
});
if ((null == t ? void 0 : t.hasFeature(r.oNc.HUB)) === !0 || (null == t ? void 0 : t.hasFeature(r.oNc.COMMUNITY)) === !0 && s)
  return a.ZP.INVITE_OPTIONS_FOREVER.value;
  }({
guild: o,
experimentConfig: t
  });
}