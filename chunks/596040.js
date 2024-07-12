n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(470079),
  a = n(566620),
  l = n(782769),
  s = n(451576);
let r = e => null != e && '' !== e;

function o(e, t) {
  let n = (0, l.z)(null != t ? t : void 0),
o = (0, s.Z)(t),
c = r(e) || o;
  return i.useEffect(() => {
c && n && (0, a.w1)({
  guildId: e
});
  }, [
e,
n,
c
  ]), c && n;
}