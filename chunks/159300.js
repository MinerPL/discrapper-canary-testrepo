t.d(n, {
  b: function() {
return r;
  }
});
var i = t(981631);

function r(e, n, t, r) {
  let a = null != t ? t : n;
  return null != a && e.can(i.Plq.CREATE_INSTANT_INVITE, a) || null != n && null != n.vanityURLCode || (null == r ? void 0 : r.invite_code) != null;
}