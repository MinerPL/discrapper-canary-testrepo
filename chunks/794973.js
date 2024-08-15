t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(493683),
  r = t(592125),
  u = t(689938);

function s(e, n) {
  let t = r.Z.getChannel(e);
  return null == t || t.isMultiUserDM() ? null : (0, i.jsx)(a.MenuItem, {
id: 'close-dm',
label: u.Z.Messages.CLOSE_DM,
action: () => l.Z.closePrivateChannel(e, n)
  });
}