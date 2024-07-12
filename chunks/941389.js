t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(496675),
  l = t(996861),
  o = t(981631),
  s = t(689938);

function u(e, n) {
  let t = n.getGuildId();
  return null != t && (e.type === o.uaV.USER_JOIN || e.type === o.uaV.GUILD_INVITE_REMINDER) && r.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, {
guildId: t
  }) ? (0, i.jsx)(a.MenuItem, {
id: 'configure',
label: s.Z.Messages.CONFIGURE,
icon: a.CircleQuestionIcon,
action: () => (0, l.zW)(n)
  }) : null;
}