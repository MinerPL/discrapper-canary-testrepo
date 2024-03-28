"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("689938");
let l = ["a", "b", "c", "d"],
  s = e => e;

function i(e, t) {
  let n = {},
    a = Math.min(e.length, l.length);
  for (let s = 0; s < a; ++s) n[l[s]] = (n, a) => t(e[s], a);
  return n
}
class r {
  asString() {
    return this.transformed(s)
  }
  isEmpty() {
    return 0 === this.items.length
  }
  transformed(e) {
    switch (this.items.length) {
      case 0:
        return "";
      case 1:
        return e(this.items[0], "");
      case 2:
        return a.default.Messages.GENERIC_FORMATTED_LIST_TWO.format(i(this.items, e));
      case 3:
        return a.default.Messages.GENERIC_FORMATTED_LIST_THREE.format(i(this.items, e));
      default:
        return a.default.Messages.GENERIC_FORMATTED_LIST_FOUR.format(i(this.items, e))
    }
  }
  constructor(e) {
    var t, n, a;
    t = this, a = void 0, (n = "items") in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a, this.items = e
  }
}