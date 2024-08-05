t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817);
var r, u, l, i, c = t(442837),
  a = t(570140);
let o = new Map();
class s extends(r = c.ZP.Store) {
  getUsers() {
return o;
  }
  isKeyVerified(e, n) {
let t = o.get(e);
if (null == n || null == t || t.length !== n.length)
  return !1;
for (let e = 0; e < n.length; e++)
  if (n[e] !== t[e])
    return !1;
return !0;
  }
}
i = 'TransientKeyStore', (l = 'displayName') in(u = s) ? Object.defineProperty(u, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[l] = i, n.Z = new s(a.Z, {
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
let {
  userId: n,
  key: t
} = e, r = new Uint8Array(t);
o.set(n, r);
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
let {
  userId: n
} = e;
return o.delete(n);
  }
});