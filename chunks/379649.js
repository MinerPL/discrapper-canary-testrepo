n.d(t, {
    G9: function () {
        return l;
    },
    Z_: function () {
        return s;
    },
    _v: function () {
        return u;
    },
    zO: function () {
        return a;
    }
}),
    n(411104),
    n(368387);
var r = n(643191);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = () => Math.floor(r.v0 + r.Sv.now()),
    s = new (class {
        now() {
            return a();
        }
    })();
class o {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, t, n, r) {
        i(this, 'milliseconds', 0), i(this, 'asMilliseconds', () => this.milliseconds), i(this, 'asSeconds', () => this.milliseconds / 1000), i(this, 'asMinutes', () => this.milliseconds / 1000 / 60), i(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), i(this, 'add', (e) => o.fromMilliseconds(this.milliseconds + e.milliseconds)), i(this, 'subtract', (e) => o.fromMilliseconds(this.milliseconds - e.milliseconds)), i(this, 'subtractOrZero', (e) => o.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += r || 0), (this.milliseconds += 1000 * (n || 0)), (this.milliseconds += 60000 * (t || 0)), (this.milliseconds += 3600000 * (e || 0));
    }
}
i(o, 'fromMilliseconds', (e) => new o(0, 0, 0, e)), i(o, 'fromSeconds', (e) => new o(0, 0, e)), i(o, 'fromMinutes', (e) => new o(0, e)), i(o, 'fromHours', (e) => new o(e));
class l {
    start() {
        if (null == this.startTime) this.startTime = this.timestampProducer.now();
    }
    restart() {
        this.startTime = this.timestampProducer.now();
    }
    reset() {
        (this.startTime = void 0), (this.timePassed = 0);
    }
    stop() {
        if (null != this.startTime) (this.timePassed += this.timestampProducer.now() - this.startTime), (this.startTime = void 0);
    }
    toggle(e) {
        e !== this.isRunning() && (e ? this.start() : this.stop());
    }
    elapsed() {
        if (null == this.startTime) return o.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return o.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new l();
        return e.start(), e;
    }
    constructor(e = s) {
        i(this, 'timestampProducer', void 0), i(this, 'startTime', void 0), i(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
    }
}
function u(e) {
    let t = 'number' == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
