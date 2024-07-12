n.d(t, {
  J: function() {
return r;
  }
});
var i = n(442837),
  s = n(375954),
  a = n(594174);
let r = e => (0, i.e7)([
  s.Z,
  a.default
], () => {
  if (null == e)
return !1;
  let t = a.default.getCurrentUser();
  return null != s.Z.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id));
});