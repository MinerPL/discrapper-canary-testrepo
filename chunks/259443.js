n.d(t, {
  Y: function() {
return s;
  },
  _: function() {
return o;
  }
}), n(47120);
var r = n(247071);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let a = () => {};

function o(e) {
  a = e;
}
class s {
  constructor(e = 'default') {
var t = this;
i(this, 'name', void 0), i(this, 'logDangerously', function(e) {
  for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  a(t.name, 'log', e, ...r);
}), i(this, 'log', function(e) {
  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  (0, r.c)(e, ...i), a(t.name, 'log', e, ...i);
}), i(this, 'verboseDangerously', function(e) {
  for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  a(t.name, 'debug', e, ...r);
}), i(this, 'verbose', function(e) {
  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  (0, r.c)(e, ...i), a(t.name, 'debug', e, ...i);
}), i(this, 'info', function(e) {
  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  (0, r.c)(e, ...i), a(t.name, 'info', e, ...i);
}), i(this, 'warn', function(e) {
  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  (0, r.c)(e, ...i), a(t.name, 'warn', e, ...i);
}), i(this, 'error', function(e) {
  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  (0, r.c)(e, ...i), a(t.name, 'error', e, ...i);
}), i(this, 'trace', function(e) {
  for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  a(t.name, 'trace', e, ...r);
}), i(this, 'time', (e, t) => {
  let n = Date.now(),
    r = t();
  return this.log(e, Date.now() - n), r;
}), i(this, 'fileOnly', function(e) {
  for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  a(t.name, 'file-only', e, ...r);
}), this.name = e;
  }
}