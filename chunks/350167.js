n.d(t, {
  r: function() {
return u;
  }
}), n(653041), n(47120), n(411104);
var r = n(259443),
  i = n(198584),
  a = n(444675);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let s = '1' === a.env.KV_STORAGE_LOGGING,
  l = new r.Y('Runtime');
class u {
  static nextId() {
return ++this.counter;
  }
  static executeAsync(e, t) {
return this.initialize(), new Promise((n, r) => {
  let i = this.nextId();
  t(i), this.pending.set(i, {
    id: i,
    tag: e,
    started: performance.now(),
    resolve: n,
    reject: r
  });
});
  }
  static addCompletionCallback(e) {
return this.completionCallbacks.push(e), e;
  }
  static addDatabaseStateCallback(e) {
return this.dbStateCallbacks.push(e), e;
  }
  static removeCompletionCallback(e) {
this.completionCallbacks = this.completionCallbacks.filter(t => t !== e);
  }
  static removeDatabaseStateCallback(e) {
this.dbStateCallbacks = this.dbStateCallbacks.filter(t => t !== e);
  }
  static onResponse(e, t) {
let n = performance.now(),
  r = this.pending.get(e.id);
null != r && (this.pending.delete(e.id), e.timings.materializationTimeNanoseconds = null != t ? t : 0, this.completeOperation(r, e, n), this.resolveOperation(r, e));
  }
  static onStatus(e) {
for (let t of this.dbStateCallbacks)
  t(e.handle, e.state);
  }
  static resolveOperation(e, t) {
t.ok ? e.resolve(t.data) : e.reject('string' == typeof t.data ? Error(t.data) : t.data);
  }
  static completeOperation(e, t, n) {
if (this.completionCallbacks.length > 0) {
  let r = {
    id: e.id,
    tag: e.tag,
    ok: t.ok,
    value: t.data,
    timings: {
      queue: t.timings.queueTimeNanoseconds / 1000000,
      execution: t.timings.executionTimeNanoseconds / 1000000,
      materialization: t.timings.materializationTimeNanoseconds / 1000000,
      ccTotal: t.timings.totalTimeNanoseconds / 1000000,
      jsTotal: n - e.started
    }
  };
  for (let e of this.completionCallbacks)
    e(r);
}
  }
  static initialize() {
if (!this.initialized)
  i.d.setCallbacks({
    status: e => this.onStatus(e),
    response: (e, t) => this.onResponse(e, t)
  }), s && (this.addCompletionCallback(e => {
    let t = e.ok ? 'completed' : 'failed',
      n = [
        ''.concat(e.timings.execution.toFixed(3), 'ms execution'),
        ''.concat(e.timings.materialization.toFixed(3), 'ms js materialization'),
        ''.concat(e.timings.ccTotal.toFixed(3), 'ms cc completion'),
        ''.concat(e.timings.jsTotal.toFixed(3), 'ms js reception')
      ].join(', ');
    l.info(''.concat(e.tag, ' (#').concat(e.id, ') ').concat(t, ' in ').concat(e.timings.ccTotal.toFixed(3), 'ms (').concat(n, ').'));
  }), this.addDatabaseStateCallback((e, t) => l.info(''.concat(e, ' (state: ').concat(t, ')')))), this.initialized = !0;
  }
}
o(u, 'counter', 0), o(u, 'pending', new Map()), o(u, 'initialized', !1), o(u, 'dbStateCallbacks', []), o(u, 'completionCallbacks', []);