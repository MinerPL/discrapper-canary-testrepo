n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(620662),
  a = n(710845),
  s = n(475413),
  o = n(981631),
  l = n(689938);

function u(e) {
  let {
user: t,
activity: n,
onAction: u
  } = e;
  return (0, i.Z)(n, o.xjy.INSTANCE) ? (0, r.jsx)(s.tG, {
text: l.Z.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME,
fullWidth: !0,
onClick: () => {
  null == u || u({
    action: 'PRESS_NOTIFY_BUTTON'
  }), new a.Z('UserActivityActions').log('notify', t.id, n);
}
  }) : null;
}