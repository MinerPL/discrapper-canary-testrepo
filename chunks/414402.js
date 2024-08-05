n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(620662),
  a = n(710845),
  s = n(652853),
  o = n(475413),
  l = n(228168),
  u = n(981631),
  c = n(689938);

function d(e) {
  let {
user: t,
activity: n,
onClick: d
  } = e, {
profileType: _
  } = (0, s.z)();
  return (0, i.Z)(n, u.xjy.INSTANCE) ? (0, r.jsx)(o.tG, {
text: c.Z.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME,
themeColor: _ === l.y0.FULL_SIZE ? 'secondary' : 'primary',
fullWidth: !0,
onClick: e => {
  null == d || d(e), new a.Z('UserActivityActions').log('notify', t.id, n);
}
  }) : null;
}