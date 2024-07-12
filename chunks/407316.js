n.d(t, {
  W: function() {
return s;
  }
});
var a = n(592125),
  l = n(496675),
  i = n(981631);

function s(e) {
  let t = a.Z.getChannel(e),
n = null == t ? void 0 : t.isPrivate(),
s = null == t ? void 0 : t.isForumChannel();
  return n || l.Z.can(i.Plq.ATTACH_FILES, t) && l.Z.can(i.Plq.SEND_MESSAGES, t) && !s;
}