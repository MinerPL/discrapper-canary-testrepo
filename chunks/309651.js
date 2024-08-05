n.d(t, {
  x: function() {
return i;
  }
}), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
async function i(e, t, n) {
  if (0 !== e)
throw Error('unsupported fingerprint format version');
  if (0 === t.byteLength)
throw Error('zero-length key');
  if (0 === n.length)
throw Error('zero-length user ID');
  let i = BigInt(n);
  if (i < 0n || i >= 2n ** 64n)
throw Error('user ID out of range');
  let s = new Uint8Array(),
a = new Uint8Array(2 + t.byteLength + 8);
  a.set(t, 2);
  let r = new DataView(a.buffer);
  r.setUint16(0, e), r.setBigUint64(2 + t.byteLength, i);
  for (let e = 0; e < 5200; e++) {
let e = a.byteLength + t.byteLength;
s.byteLength !== e && (s = new Uint8Array(e)), s.set(a, 0), s.set(t, a.byteLength), a = new Uint8Array(await window.crypto.subtle.digest('SHA-512', s));
  }
  return a;
}