t.d(n, {
  Z: function() {
return o;
  }
});
var l = t(735250);
t(470079);
var i = t(481060),
  a = t(493683),
  r = t(37234),
  u = t(314897),
  s = t(981631),
  d = t(689938);

function o(e, n) {
  let t = u.default.getId(),
o = n === s.IlC.POPOUT;
  return t === e || o ? null : (0, l.jsx)(i.MenuItem, {
id: 'message-user',
label: d.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  a.Z.openPrivateChannel(e), (0, r.xf)();
}
  });
}