n.d(t, {
  J: function() {
return r;
  }
});
var i = n(442837),
  a = n(375954),
  s = n(594174);
let r = e => (0, i.e7)([
  a.Z,
  s.default
], () => {
  if (null == e)
return !1;
  let t = s.default.getCurrentUser();
  return null != a.Z.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id));
});