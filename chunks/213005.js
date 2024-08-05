s.d(t, {
  Z: function() {
return d;
  }
}), s(47120), s(653041);
var n = s(836560),
  a = s(358085),
  i = s(998502),
  r = s(13140),
  o = s(981631);
let l = [],
  c = (e, t, s) => {
let n = (0, a.isWindows)() ? 0 : 1;
if (e !== o.MoX.MOUSE_BUTTON || s !== n)
  l.forEach(n => n._handleEvent(e, t, s));
  };
class d extends n.EventEmitter {
  destroy() {
this.removeAllListeners(), 0 === (l = l.filter(e => e !== this)).length && i.ZP.setOnInputEventCallback(null);
  }
  toString() {
return (0, r.BB)(this.combo);
  }
  _handleEvent(e, t, s) {
0 === t ? this.combo = this.combo.filter(t => {
  let [n, a] = t;
  return !(n === e && a === s);
}) : (this.combo.push([
  e,
  s,
  (0, r.dU)()
]), this.emit('change', this));
  }
  constructor() {
var e, t, s;
super(), e = this, s = [], (t = 'combo') in e ? Object.defineProperty(e, t, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = s, l.push(this), 1 === l.length && i.ZP.setOnInputEventCallback(c);
  }
}