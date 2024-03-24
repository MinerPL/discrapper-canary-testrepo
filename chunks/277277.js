"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, l = s("666038"),
  n = s("766274");
a = class extends l.default {
  constructor(e) {
    super(), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new n.default(e.user), this.animated = e.animated, this.available = e.available
  }
}