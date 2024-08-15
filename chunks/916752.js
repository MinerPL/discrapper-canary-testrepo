n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(913527),
  a = n.n(i),
  s = n(718922),
  o = n(70956),
  l = n(660199);
let u = [
[
  2 * o.Z.Seconds.MINUTE,
  o.Z.Seconds.SECOND
],
[
  5 * o.Z.Seconds.MINUTE,
  o.Z.Seconds.MINUTE
],
[
  45 * o.Z.Seconds.MINUTE,
  2 * o.Z.Seconds.MINUTE
],
[
  21 * o.Z.Seconds.HOUR,
  5 * o.Z.Seconds.MINUTE
]
  ],
  c = 2 * o.Z.Seconds.HOUR;

function d(e) {
  let t = (0, s.Z)();
  return (r.useEffect(() => {
if ('R' !== e.format)
  return;
let n = 1000 * c,
  r = Math.abs(e.parsed.diff(a()()));
for (let [e, t] of u)
  if (r < 1000 * e) {
    n = 1000 * t;
    break;
  }
let i = setInterval(() => {
  t();
}, n);
return () => clearInterval(i);
  }, [
t,
e.format,
e.parsed
  ]), 'R' === e.format) ? l.Qh.R(e.parsed) : e.formatted;
}