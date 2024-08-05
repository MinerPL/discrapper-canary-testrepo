t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var r = t(481060),
  a = t(493683),
  s = t(37234),
  l = t(314897),
  o = t(981631),
  u = t(689938);

function d(e, n) {
  let t = l.default.getId(),
d = n === o.IlC.POPOUT;
  return t === e || d ? null : (0, i.jsx)(r.MenuItem, {
id: 'message-user',
label: u.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  a.Z.openPrivateChannel(e), (0, s.xf)();
}
  });
}