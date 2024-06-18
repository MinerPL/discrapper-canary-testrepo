"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(653041), n(47120), n(411104);
var i = n(836560),
  r = n(259443),
  s = n(643191);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = new r.Y("Flux");
class l extends i.EventEmitter {
  log(e, t) {
    let n = new _(e);
    n.startTime = s.Sv.now();
    try {
      t((t, i) => {
        let r;
        let o = {
            name: t,
            time: -1
          },
          a = s.Sv.now();
        try {
          r = i()
        } finally {
          o.time = s.Sv.now() - a, this.persist && n.traces.push(o), this.emit("trace", e.type, t, o.time)
        }
        return r
      })
    } catch (e) {
      throw n.error = e, e
    } finally {
      n.totalTime = s.Sv.now() - n.startTime, this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
    }
    return n
  }
  getSlowestActions(e) {
    var t;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
      r = [];
    for (let t of this.logs) {
      if (null == e || t.name === e)
        for (let e of t.traces) r.push([e.name, t.name, e.time])
    }
    r.sort((e, t) => t[2] - e[2]), r.length > i && (r.length = i);
    let s = 0,
      o = 0,
      l = r.map(t => {
        let [n, i, r] = t, o = "".concat(n);
        return null == e && (o += "<".concat(i, ">")), s = Math.max(o.length, s), [o, r]
      }).map(e => {
        let [t, n] = e;
        return o += n, "".concat(t.padEnd(s + 1, " "), " - ").concat(n, "ms")
      }).join("\n");
    return 0 === r.length || r[0][2] < 10 || o < 20 ? r : (a.log("Using Hermes:", void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), a.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(l, "\n")), a.log("Total Time: ".concat(o, "ms")), r)
  }
  getLastActionMetrics(e) {
    var t;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
      r = {};
    for (let e of this.logs)
      for (let t of e.traces) r[t.name] = [t.name, e.name, t.time];
    let s = Object.values(r);
    s.sort((e, t) => t[2] - e[2]), s.length > i && (s.length = i);
    let o = 0,
      l = 0,
      u = s.map(e => {
        let [t, n, i] = e;
        return o = Math.max(t.length, o), [t, i]
      }).map(e => {
        let [t, n] = e;
        return l += n, "".concat(t.padEnd(o + 1, " "), " - ").concat(n, "ms")
      }).join("\n");
    return 0 === s.length || l < 8 ? s : (a.log("\nUsing Hermes: ".concat(void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(u), "\nTotal Time: ".concat(l, "ms\n\n")), s)
  }
  constructor({
    persist: e = !1
  } = {}) {
    super(), o(this, "logs", []), o(this, "persist", void 0), this.persist = e
  }
}
let u = 0;
class _ {
  get name() {
    return this.action.type
  }
  toJSON() {
    if (null == this.createdAt) throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
    return {
      actionType: this.action.type,
      created_at: this.createdAt,
      totalTime: this.totalTime,
      traces: this.traces
    }
  }
  constructor(e) {
    o(this, "id", void 0), o(this, "action", void 0), o(this, "createdAt", void 0), o(this, "startTime", 0), o(this, "totalTime", 0), o(this, "traces", []), o(this, "error", void 0), this.id = u++, this.action = e, this.createdAt = new Date
  }
}