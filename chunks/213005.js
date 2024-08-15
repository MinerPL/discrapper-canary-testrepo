n.d(t, {
  Z: function() {
return u;
  }
}), n(47120), n(653041);
var s = n(836560),
  i = n(358085),
  r = n(998502),
  o = n(13140),
  l = n(981631);
let a = [],
  d = (e, t, n) => {
let s = (0, i.isWindows)() ? 0 : 1;
if (e !== l.MoX.MOUSE_BUTTON || n !== s)
  a.forEach(s => s._handleEvent(e, t, n));
  };
class u extends s.EventEmitter {
  destroy() {
this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && r.ZP.setOnInputEventCallback(null);
  }
  toString() {
return (0, o.BB)(this.combo);
  }
  _handleEvent(e, t, n) {
0 === t ? this.combo = this.combo.filter(t => {
  let [s, i] = t;
  return !(s === e && i === n);
}) : (this.combo.push([
  e,
  n,
  (0, o.dU)()
]), this.emit('change', this));
  }
  constructor() {
var e, t, n;
super(), e = this, n = [], (t = 'combo') in e ? Object.defineProperty(e, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n, a.push(this), 1 === a.length && r.ZP.setOnInputEventCallback(d);
  }
}