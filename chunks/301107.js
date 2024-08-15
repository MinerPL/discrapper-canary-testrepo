n.d(t, {
  W: function() {
return s;
  }
}), n(411104);
var r = n(470079),
  i = n(250683),
  a = n(253135);

function s(e) {
  let {
fingerprintBase64: t,
chunkSize: n,
desiredLength: s
  } = e, o = r.useMemo(() => {
if (null == t || '' === t)
  return null;
let e = i.toByteArray(t),
  r = (0, a.Dq)(e, s, n);
if (null == r)
  return null;
let o = RegExp('.{1,'.concat(n, '}'), 'g'),
  E = r.match(o);
return null == E ? null : Array.from(E);
  }, [
n,
t,
s
  ]);
  if (null != t && '' !== t && null == o)
throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
  return o;
}