n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(392711),
  s = n.n(i),
  a = n(996106),
  r = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class o {
  constructor(e, t, n) {
if (l(this, 'transport', void 0), l(this, 'version', void 0), l(this, 'encoding', void 0), l(this, 'id', void 0), l(this, 'authorization', void 0), l(this, 'application', void 0), this.transport = e, this.version = t, this.encoding = n, this.id = s().uniqueId(), this.authorization = {
    authing: !1,
    scopes: [],
    accessToken: null,
    expires: new Date(0)
  }, this.application = {
    id: null,
    name: null,
    icon: null
  }, null == t || t > r.X6Q || t < 1)
  throw new a.Z({
    closeCode: r.$VG.INVALID_VERSION
  }, 'Invalid Version: '.concat(t));
  }
}