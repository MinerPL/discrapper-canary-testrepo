n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var i, a = n(442837),
  s = n(253135),
  r = n(570140),
  l = n(709054);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = {};
class u extends(i = a.ZP.PersistedStore) {
  initialize(e) {
var t;
c = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
  }
  getState() {
return {
  users: c
};
  }
  getKeyTrustedAt(e, t) {
var n;
let i = (0, s.MK)(t);
return null === (n = c[e]) || void 0 === n ? void 0 : n[i];
  }
  isKeyVerified(e, t) {
return null != this.getKeyTrustedAt(e, t);
  }
  getUserIds() {
return l.default.keys(c);
  }
  getUserVerifiedKeys(e) {
return c[e];
  }
}
o(u, 'displayName', 'VerifiedKeyStore'), o(u, 'persistKey', 'VerifiedKeyStore'), t.Z = new u(r.Z, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
let {
  userId: t,
  key: n
} = e, i = function(e) {
  var t;
  let n = null !== (t = c[e]) && void 0 !== t ? t : {};
  return c[e] = n, n;
}(t), a = new Uint8Array(n);
i[(0, s.MK)(a)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
let {
  userId: t,
  serializedKey: n
} = e, i = c[t];
if (null == i)
  return !1;
let a = delete i[n],
  s = !1;
return 0 === Object.keys(i).length && (delete c[t], s = !0), a || s;
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
let {
  userId: t
} = e;
return null != c[t] && delete c[t];
  },
  SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: function() {
c = {};
  }
});