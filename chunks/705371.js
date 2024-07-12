t.d(n, {
  l: function() {
return d;
  }
});
var i = t(904245),
  l = t(181945),
  o = t(888369),
  E = t(375954),
  r = t(944486),
  u = t(914010),
  a = t(585483),
  s = t(981631);
let d = {
  binds: ['shift+esc'],
  comboKeysBindGlobal: !0,
  action() {
let e = u.Z.getGuildId();
if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e))
  return;
(0, l.Z)([e]);
let n = r.Z.getChannelId(e);
if (null != n)
  E.Z.getMessages(n).hasMoreAfter ? i.Z.jumpToPresent(n, s.AQB) : a.S.dispatch(s.CkL.SCROLLTO_PRESENT);
  }
};