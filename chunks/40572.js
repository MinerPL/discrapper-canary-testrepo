n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(81825),
  a = n(598077);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class r extends s.Z {
  constructor(e) {
super(), i(this, 'id', void 0), i(this, 'name', void 0), i(this, 'managed', void 0), i(this, 'roles', void 0), i(this, 'requiredColons', void 0), i(this, 'user', void 0), i(this, 'animated', void 0), i(this, 'available', void 0), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new a.Z(e.user), this.animated = e.animated, this.available = e.available;
  }
}