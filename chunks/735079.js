"use strict";
E.r(t), E.d(t, {
  FamilyCenterGuild: function() {
    return T
  }
});
var _ = E("601964");
class T extends _.default {
  constructor(e) {
    var t, E, _;
    super(e), t = this, _ = void 0, (E = "approximateMemberCount") in t ? Object.defineProperty(t, E, {
      value: _,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[E] = _, this.approximateMemberCount = e.approximate_member_count
  }
}