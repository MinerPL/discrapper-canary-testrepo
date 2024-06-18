"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(81825),
  i = t(598077);

function l(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class a extends n.Z {
  constructor(e) {
    super(), l(this, "id", void 0), l(this, "name", void 0), l(this, "managed", void 0), l(this, "roles", void 0), l(this, "requiredColons", void 0), l(this, "user", void 0), l(this, "animated", void 0), l(this, "available", void 0), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new i.Z(e.user), this.animated = e.animated, this.available = e.available
  }
}