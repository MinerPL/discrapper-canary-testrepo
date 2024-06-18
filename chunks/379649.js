"use strict";
n.d(t, {
  G9: function() {
    return l
  },
  Z_: function() {
    return o
  },
  _v: function() {
    return u
  },
  zO: function() {
    return s
  }
}), n(411104), n(368387);
var i = n(643191);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = () => Math.floor(i.v0 + i.Sv.now()),
  o = new class {
    now() {
      return s()
    }
  };
class a {
  isGreaterThan(e) {
    return this.milliseconds > e.milliseconds
  }
  isGreaterOrEqualTo(e) {
    return this.milliseconds >= e.milliseconds
  }
  constructor(e, t, n, i) {
    r(this, "milliseconds", 0), r(this, "asMilliseconds", () => this.milliseconds), r(this, "asSeconds", () => this.milliseconds / 1e3), r(this, "asMinutes", () => this.milliseconds / 1e3 / 60), r(this, "asHours", () => this.milliseconds / 1e3 / 60 / 60), r(this, "add", e => a.fromMilliseconds(this.milliseconds + e.milliseconds)), r(this, "subtract", e => a.fromMilliseconds(this.milliseconds - e.milliseconds)), r(this, "subtractOrZero", e => a.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), this.milliseconds += i || 0, this.milliseconds += 1e3 * (n || 0), this.milliseconds += 6e4 * (t || 0), this.milliseconds += 36e5 * (e || 0)
  }
}
r(a, "fromMilliseconds", e => new a(0, 0, 0, e)), r(a, "fromSeconds", e => new a(0, 0, e)), r(a, "fromMinutes", e => new a(0, e)), r(a, "fromHours", e => new a(e));
class l {
  start() {
    if (null == this.startTime) this.startTime = this.timestampProducer.now()
  }
  restart() {
    this.startTime = this.timestampProducer.now()
  }
  reset() {
    this.startTime = void 0, this.timePassed = 0
  }
  stop() {
    if (null != this.startTime) this.timePassed += this.timestampProducer.now() - this.startTime, this.startTime = void 0
  }
  toggle(e) {
    e !== this.isRunning() && (e ? this.start() : this.stop())
  }
  elapsed() {
    if (null == this.startTime) return a.fromMilliseconds(this.timePassed);
    let e = this.timestampProducer.now() - this.startTime;
    return a.fromMilliseconds(this.timePassed + e)
  }
  isRunning() {
    return null != this.startTime
  }
  static startNew() {
    let e = new l;
    return e.start(), e
  }
  constructor(e = o) {
    r(this, "timestampProducer", void 0), r(this, "startTime", void 0), r(this, "timePassed", void 0), this.timestampProducer = e, this.startTime = void 0, this.timePassed = 0
  }
}

function u(e) {
  let t = "number" == typeof e ? e : e.asMilliseconds();
  return new Promise(e => {
    setTimeout(() => e(), t)
  })
}