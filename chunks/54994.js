n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(470079),
  i = n(442837),
  a = n(27144),
  s = n(70956),
  o = n(564990),
  l = n(353647);
let u = s.Z.Millis.MINUTE;

function c(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getUserOutbox(e.id)),
{
  pastActivityEnabled: n
} = (0, a.z)({
  location: 'useMaybeFetchUserOutbox'
});
  r.useEffect(() => {
if (!(!n || null != t && Date.now() - t.lastFetched < u))
  (0, o.JX)(e.id);
  }, [
t,
e,
n
  ]);
}