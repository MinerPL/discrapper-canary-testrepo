n.d(t, {
  b: function() {
return s;
  }
});
var r, i, a = n(836560);
(r = i || (i = {})).VERTICAL = 'vertical', r.HORIZONTAL = 'horizontal';
let o = {
  open: !1,
  orientation: null
};
class s extends a.EventEmitter {
  get orientations() {
return Object.values(i);
  }
  get state() {
return o;
  }
  check() {
let e = function() {
    try {
      return window.outerWidth - window.innerWidth;
    } catch (e) {
      return 0;
    }
  }() > 160,
  t = function() {
    try {
      return window.outerHeight - window.innerHeight;
    } catch (e) {
      return 0;
    }
  }() > 160,
  n = e ? 'vertical' : 'horizontal';
if (!(t && e) && (e || t)) {
  let e = o.open;
  o = {
    open: !0,
    orientation: n
  }, (!e || o.orientation !== n) && this.emit('changed', o);
} else
  o.open && (o.open = !1, this.emit('changed', o));
  }
  constructor() {
super(), setInterval(() => this.check(), 500);
  }
}