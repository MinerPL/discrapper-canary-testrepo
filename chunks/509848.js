n.d(t, {
  KV: function() {
return u;
  },
  ZP: function() {
return d;
  },
  dj: function() {
return l;
  }
});
var r = n(392711),
  i = n.n(r),
  a = n(31775),
  o = n.n(a);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = 100,
  u = [
[
  0,
  99
]
  ];

function c(e) {
  let t = {};
  return e.forEach((e, n) => {
t[n] = e;
  }), t;
}
class d {
  reset() {
this._subscriptions = {};
  }
  get(e) {
return c(this._get(e));
  }
  _get(e) {
var t;
return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(o())({
  max: 5
});
  }
  clear(e) {
delete this._subscriptions[e];
  }
  subscribe(e, t, n) {
let r = this._get(e);
return !i().isEqual(r.get(t), n) && (r.set(t, n), this._subscriptions[e] = r, this._onChange(e, c(r)), !0);
  }
  constructor(e) {
s(this, '_subscriptions', {}), s(this, '_onChange', void 0), this._onChange = e;
  }
}