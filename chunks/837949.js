t.d(n, {
  Z: function() {
return E;
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  s = t(430824),
  o = t(594174),
  u = t(724213),
  r = t(398758),
  d = t(981631),
  c = t(689938);

function E(e) {
  let n = (0, r.DM)(e),
t = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
E = (0, i.e7)([o.default], () => o.default.getCurrentUser());
  return null != E && null != t && (t.hasFeature(d.oNc.COMMUNITY) || E.isStaff()) ? (0, a.jsx)(l.MenuCheckboxItem, {
id: 'opt-in',
label: c.Z.Messages.GUILD_CHANNEL_OPT_IN,
checked: !n,
action: () => {
  (0, u.kH)(e);
}
  }) : null;
}