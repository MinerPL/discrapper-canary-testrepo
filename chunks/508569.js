"use strict";
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120), n(653041), n(411104);
var i, r, s = n(442837),
  o = n(710845),
  a = n(483012),
  l = n(138859),
  u = n(91247);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = new o.Z("GatewaySocket"),
  c = new Set(["INITIAL_GUILD", "READY"]),
  E = new Set(["READY", "INITIAL_GUILD"]),
  I = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
(r = i || (i = {}))[r.NotStarted = 0] = "NotStarted", r[r.Loading = 1] = "Loading", r[r.Loaded = 2] = "Loaded";
class T {
  hasStuffToDispatchNow() {
    return this.queue.length > 0 && 2 === this.queue[0].status
  }
  processFirstQueuedDispatch(e) {
    let t = [];
    for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;) t.push(this.queue.shift());
    this.dispatchMultiple(t)
  }
  unpauseDispatchQueue() {
    for (let e of (this.paused = !1, this.queue)) this.maybePreload(e);
    this.flush()
  }
  receiveDispatch(e, t, n) {
    if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
    let i = {
      data: e,
      type: t,
      compressionAnalytics: n,
      status: 0,
      preloadPromise: null,
      preloadedData: null
    };
    this.queue.push(i), !this.maybePreload(i) && this.scheduleFlush(t)
  }
  maybePreload(e) {
    if (this.paused && !c.has(e.type)) return !1;
    if (0 === e.status) {
      var t;
      let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
      if (e.status = null == n ? 2 : 1, e.preloadPromise = n, null != n) return n.then(t => {
        e.preloadedData = t, e.status = 2, this.scheduleFlush(e.type)
      }).catch(t => this.socket.resetSocketOnDispatchError({
        error: t,
        action: e.type
      })), !0
    }
    return !1
  }
  scheduleFlush(e) {
    !this.paused && (E.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
  }
  dispatchMultiple(e) {
    if (0 === e.length) return;
    let t = "none",
      n = !1;
    try {
      this.socket.connectionState === l.Z.RESUMING && s.ZP.Emitter.pause(150), s.ZP.Emitter.batched(() => {
        e.forEach(e => {
          t = e.type, n = n || I.has(e.type), this.dispatchOne(e)
        }), a.Z.flush()
      }), n && s.ZP.Emitter.resume()
    } catch (e) {
      this.socket.resetSocketOnDispatchError({
        error: e,
        action: t
      })
    }
  }
  dispatchOne(e) {
    var t, n, i;
    let {
      data: r,
      type: s,
      compressionAnalytics: o,
      preloadedData: _
    } = e, d = performance.now();
    if (this.socket.connectionState === l.Z.RESUMING) {
      let e = d - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = d, this.resumeAnalytics.numEvents += 1
    }
    if (a.Z.flush(s, r), "READY" === s) {
      let e = (0, u.vW)(r);
      null === (t = this.getDispatchHandler(s)) || void 0 === t || t.dispatch(r, s, _), (0, u.dm)(this.socket, r, d, o, e)
    } else "RESUMED" === s ? (null === (n = this.getDispatchHandler(s)) || void 0 === n || n.dispatch(r, s, _), (0, u.uB)(this.resumeAnalytics), this.resumeAnalytics = (0, u.zH)(), this.socket.handleResumeDispatched()) : null === (i = this.getDispatchHandler(s)) || void 0 === i || i.dispatch(r, s, _);
    this.socket.connectionState === l.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d)
  }
  clear() {
    this.paused = !1, this.queue.length = 0
  }
  constructor(e) {
    _(this, "socket", void 0), _(this, "queue", void 0), _(this, "dispatchTimeout", void 0), _(this, "nextDispatchTimeout", void 0), _(this, "paused", void 0), _(this, "resumeAnalytics", void 0), _(this, "getDispatchHandler", void 0), _(this, "flush", void 0), this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, u.zH)(), this.getDispatchHandler = null, this.flush = () => {
      if (this.paused) return;
      clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
      let e = Date.now(),
        t = 0;
      for (; t < this.queue.length && 2 === this.queue[t].status; t++);
      if (0 === t) return;
      let n = this.queue.splice(0, t);
      this.dispatchMultiple(n);
      let i = Date.now() - e;
      i > 100 ? (d.log("Dispatched ".concat(n.length, " messages in ").concat(i, "ms")), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33
    }
  }
}