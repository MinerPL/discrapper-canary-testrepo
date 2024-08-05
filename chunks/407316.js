n.d(t, {
  W: function() {
return i;
  }
});
var a = n(592125),
  l = n(496675),
  s = n(981631);

function i(e) {
  let t = a.Z.getChannel(e),
n = null == t ? void 0 : t.isPrivate(),
i = null == t ? void 0 : t.isForumChannel();
  return n || l.Z.can(s.Plq.ATTACH_FILES, t) && l.Z.can(s.Plq.SEND_MESSAGES, t) && !i;
}