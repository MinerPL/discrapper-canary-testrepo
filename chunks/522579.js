n.d(t, {
  z9: function() {
return l;
  }
}), n(399606);
var i = n(592125),
  a = n(709054);

function l(e, t) {
  if (e !== a.default.castChannelIdAsMessageId(t))
return !1;
  let n = i.Z.getChannel(t);
  if (null == n || !n.isForumPost())
return !1;
  let l = i.Z.getChannel(n.parent_id);
  return (null == l ? void 0 : l.isMediaChannel()) === !0;
}