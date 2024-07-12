i.d(n, {
  Z: function() {
return _;
  }
});
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(592125),
  s = i(430824),
  u = i(496675),
  o = i(594174),
  d = i(471253),
  c = i(88751),
  Z = i(981631),
  E = i(689938);

function _(e, n, i) {
  var _;
  let M = a.Z.getChannel(i),
f = (0, t.e7)([s.Z], () => s.Z.getGuild(n), [n]),
C = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, i), [
  i,
  e.id
]),
I = (null === (_ = o.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
p = (0, t.e7)([u.Z], () => null != i && u.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, {
  channelId: i
}), [i]);
  return null != M && null != f && (p || I) && C.speaker ? (0, r.jsx)(l.MenuItem, {
id: 'audience',
label: I ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
action: () => {
  I ? (0, d.yi)(M) : (0, d.hz)(e, M);
}
  }) : null;
}