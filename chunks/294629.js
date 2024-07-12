n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(442837),
  a = n(160404),
  l = n(314897),
  s = n(131951),
  r = n(496675),
  o = n(979651),
  c = n(981631);

function d(e) {
  return (0, i.cj)([
l.default,
o.Z,
s.Z,
r.Z,
a.Z
  ], () => function(e) {
var t;
let {
  channel: n,
  authenticationStore: i = l.default,
  voiceStateStore: d = o.Z,
  mediaEngineStore: u = s.Z,
  permissionStore: h = r.Z,
  impersonateStore: p = a.Z
} = e, m = null != n ? d.getVoiceState(n.getGuildId(), i.getId()) : null, _ = u.isSelfMute() || u.isSelfMutedTemporarily(), f = null == n ? void 0 : n.getGuildId(), E = p.isViewingRoles(f) && !h.can(c.Plq.SPEAK, n);
return {
  selfMute: _,
  suppress: (null == m ? void 0 : m.suppress) || E,
  mute: null !== (t = null == m ? void 0 : m.mute) && void 0 !== t && t
};
  }({
channel: e,
authenticationStore: l.default,
voiceStateStore: o.Z,
mediaEngineStore: s.Z,
permissionStore: r.Z,
impersonateStore: a.Z
  }));
}