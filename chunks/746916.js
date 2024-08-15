n.d(t, {
  E: function() {
return c;
  }
});
var r = n(442837),
  i = n(271383),
  a = n(594174),
  s = n(881952),
  o = n(467138),
  l = n(937111),
  u = n(981631);

function c(e) {
  let t = (0, o.e)(null != e ? e : u.lds),
n = (0, r.e7)([
  l.Z,
  a.default,
  i.ZP
], () => {
  let t = l.Z.getRequest(e),
    n = a.default.getCurrentUser();
  if (null == n || null == t || t.userId !== n.id)
    return;
  let r = i.ZP.getMember(e, t.userId);
  if (null == r || !!r.isPending || !!(0, s.oP)(t))
    return t.applicationStatus;
}, [e]);
  return t ? n : void 0;
}