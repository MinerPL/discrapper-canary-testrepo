n.d(t, {
  Z: function() {
return a;
  }
}), n(789020);
var i = n(630388),
  s = n(620662),
  o = n(981631);

function a(e, t, n, a) {
  let l = null == t ? void 0 : t.application_id;
  if (null == e || null == t || !(0, s.Z)(t, o.xjy.JOIN) || null == l)
return !1;
  let r = a.getApplication(l);
  return !(null == r || (0, i.yE)(r.flags, o.udG.EMBEDDED)) && n.shouldShowEducation(l);
}