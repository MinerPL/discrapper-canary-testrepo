n(653041);
t.Z = new class e {
  enqueue(e) {
this.queue.push(e);
  }
  flush() {
for (; this.queue.length > 0;) {
  var e;
  null === (e = this.queue.shift()) || void 0 === e || e();
}
  }
  constructor() {
var e, t, n;
e = this, n = [], (t = 'queue') in e ? Object.defineProperty(e, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n;
  }
}();