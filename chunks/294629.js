n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(442837),
  a = n(160404),
  s = n(314897),
  l = n(131951),
  r = n(496675),
  o = n(979651),
  c = n(981631);

function u(e) {
  return (0, i.cj)([
s.default,
o.Z,
l.Z,
r.Z,
a.Z
  ], () => function(e) {
var t;
let {
  channel: n,
  authenticationStore: i = s.default,
  voiceStateStore: u = o.Z,
  mediaEngineStore: d = l.Z,
  permissionStore: h = r.Z,
  impersonateStore: p = a.Z
} = e, m = null != n ? u.getVoiceState(n.getGuildId(), i.getId()) : null, _ = d.isSelfMute() || d.isSelfMutedTemporarily(), f = null == n ? void 0 : n.getGuildId(), E = p.isViewingRoles(f) && !h.can(c.Plq.SPEAK, n);
return {
  selfMute: _,
  suppress: (null == m ? void 0 : m.suppress) || E,
  mute: null !== (t = null == m ? void 0 : m.mute) && void 0 !== t && t
};
  }({
channel: e,
authenticationStore: s.default,
voiceStateStore: o.Z,
mediaEngineStore: l.Z,
permissionStore: r.Z,
impersonateStore: a.Z
  }));
}