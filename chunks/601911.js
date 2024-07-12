t.d(n, {
  y: function() {
return l;
  }
});
var i = t(591759);

function l(e, n) {
  let t = e.getIconSource(n);
  if (null != t && 'number' != typeof t) {
let e;
if (Array.isArray(t) ? t.length > 0 && (e = t[0].uri) : e = t.uri, null != e) {
  var l;
  return null !== (l = i.Z.toURLSafe(e)) && void 0 !== l ? l : void 0;
}
  }
}