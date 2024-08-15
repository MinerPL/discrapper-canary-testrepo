t.d(n, {
  U: function() {
return E;
  }
});
var i = t(592125),
  l = t(944486),
  o = t(585483),
  r = t(981631);
let E = {
  binds: ['mod+shift+u'],
  comboKeysBindGlobal: !0,
  action() {
let e = i.Z.getChannel(l.Z.getChannelId());
return null != e && !e.isManaged() && o.S.dispatch(r.CkL.UPLOAD_FILE), !1;
  }
};