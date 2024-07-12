t.d(n, {
  Z: function() {
return f;
  }
});
var l = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  r = t(430824),
  u = t(594174),
  s = t(979651),
  d = t(471253),
  o = t(200498),
  c = t(88751),
  Z = t(267980),
  E = t(623633),
  M = t(689938);

function f(e) {
  var n;
  let t = (0, E.Z)(),
f = null == t ? void 0 : t.id,
_ = null == t ? void 0 : t.guild_id,
g = (0, i.e7)([r.Z], () => r.Z.getGuild(_), [_]),
I = (0, i.e7)([s.Z], () => null != f ? s.Z.getVoiceStateForChannel(f, e.id) : null, [
  f,
  e.id
]),
m = (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
R = (0, Z.Z)(),
N = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [
  f,
  e.id
]),
C = (0, o.B)(f);
  if (null == t || null == g || null == I || N.speaker)
return null;
  let T = () => {
m ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
  };
  return C ? (0, l.jsx)(a.MenuItem, {
id: 'invite-speaker',
label: m ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
action: T
  }) : R && m ? (0, l.jsx)(a.MenuItem, {
id: 'invite-speaker',
label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
action: T
  }) : null;
}