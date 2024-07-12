n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(701488),
  i = n(981631);

function a(e) {
  return e.type === i.IIU.STREAMING && null != e.url && r.Fr.test(e.url);
}

function o(e) {
  return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}