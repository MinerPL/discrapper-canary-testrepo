"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("81825"),
  l = s("598077");

function n(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class i extends a.default {
  constructor(e) {
    super(), n(this, "id", void 0), n(this, "name", void 0), n(this, "managed", void 0), n(this, "roles", void 0), n(this, "requiredColons", void 0), n(this, "user", void 0), n(this, "animated", void 0), n(this, "available", void 0), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new l.default(e.user), this.animated = e.animated, this.available = e.available
  }
}