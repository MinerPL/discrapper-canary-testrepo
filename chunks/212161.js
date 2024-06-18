"use strict";
n.d(t, {
  H: function() {
    return s
  },
  Z: function() {
    return o
  }
});
var i = n(979554),
  r = n(656698);
let s = e => e instanceof o;
class o extends r.Z {
  static fromServer(e) {
    return new o({
      ...super.fromServer(e),
      ...e
    })
  }
  constructor(e) {
    super(e), this.type = i.Z.PROFILE_EFFECT
  }
}