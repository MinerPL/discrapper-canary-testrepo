"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(81825);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s extends i.Z {
  static createFromServer(e) {
    return new s(e)
  }
  constructor(e) {
    super(), r(this, "id", void 0), r(this, "name", void 0), this.id = e.id, this.name = e.name
  }
}