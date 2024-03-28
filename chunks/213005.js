"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120"), s("653041");
var n = s("836560"),
  l = s("358085"),
  i = s("998502"),
  a = s("13140"),
  r = s("981631");
let o = [],
  d = (e, t, s) => {
    let n = (0, l.isWindows)() ? 0 : 1;
    (e !== r.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) && o.forEach(n => n._handleEvent(e, t, s))
  };
class u extends n.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && i.default.setOnInputEventCallback(null)
  }
  toString() {
    return (0, a.toString)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [n, l] = t;
      return !(n === e && l === s)
    }) : (this.combo.push([e, s, (0, a.getEnv)()]), this.emit("change", this))
  }
  constructor() {
    var e, t, s;
    super(), e = this, s = [], (t = "combo") in e ? Object.defineProperty(e, t, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = s, o.push(this), 1 === o.length && i.default.setOnInputEventCallback(d)
  }
}