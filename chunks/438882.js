n.d(t, {
  D: function() {
return i;
  }
}), n(411104);

function i(e, t, n) {
  if (e.byteLength < t)
throw Error('data.byteLength must be greater than or equal to desiredLength');
  if (t % n != 0)
throw Error('desiredLength must be a multiple of groupSize');
  if (n > 8)
throw Error('groupSize must be less than or equal to '.concat(8));
  let i = BigInt(10 ** n),
s = '';
  for (let a = 0; a < t; a += n) {
let t = BigInt(0);
for (let i = n; i > 0; --i)
  t = t << 8n | BigInt(e[a + (n - i)]);
t %= i, s += t.toString().padStart(n, '0');
  }
  return s;
}