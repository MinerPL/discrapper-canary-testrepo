"use strict";
n.d(t, {
  b: function() {
    return a
  }
});
var i, r, s = n(836560);
(i = r || (r = {})).VERTICAL = "vertical", i.HORIZONTAL = "horizontal";
let o = {
  open: !1,
  orientation: null
};
class a extends s.EventEmitter {
  get orientations() {
    return Object.values(r)
  }
  get state() {
    return o
  }
  check() {
    let e = function() {
        try {
          return window.outerWidth - window.innerWidth
        } catch (e) {
          return 0
        }
      }() > 160,
      t = function() {
        try {
          return window.outerHeight - window.innerHeight
        } catch (e) {
          return 0
        }
      }() > 160,
      n = e ? "vertical" : "horizontal";
    if (!(t && e) && (e || t)) {
      let e = o.open;
      o = {
        open: !0,
        orientation: n
      }, (!e || o.orientation !== n) && this.emit("changed", o)
    } else o.open && (o.open = !1, this.emit("changed", o))
  }
  constructor() {
    super(), setInterval(() => this.check(), 500)
  }
}