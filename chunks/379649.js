n.d(t, {
    A3: function () {
        return f;
    },
    CI: function () {
        return I;
    },
    G9: function () {
        return _;
    },
    J6: function () {
        return r;
    },
    Z_: function () {
        return c;
    },
    _v: function () {
        return E;
    },
    jU: function () {
        return p;
    },
    zO: function () {
        return u;
    }
}),
    n(411104),
    n(368387);
var r,
    i,
    a = n(627698),
    s = n.n(a),
    o = n(643191);
function l(e, t, n) {
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
let u = () => Math.floor(o.v0 + o.Sv.now()),
    c = new (class {
        now() {
            return u();
        }
    })();
class d {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, t, n, r) {
        l(this, 'milliseconds', 0), l(this, 'asMilliseconds', () => this.milliseconds), l(this, 'asSeconds', () => this.milliseconds / 1000), l(this, 'asMinutes', () => this.milliseconds / 1000 / 60), l(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), l(this, 'add', (e) => d.fromMilliseconds(this.milliseconds + e.milliseconds)), l(this, 'subtract', (e) => d.fromMilliseconds(this.milliseconds - e.milliseconds)), l(this, 'subtractOrZero', (e) => d.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += r || 0), (this.milliseconds += 1000 * (n || 0)), (this.milliseconds += 60000 * (t || 0)), (this.milliseconds += 3600000 * (e || 0));
    }
}
l(d, 'fromMilliseconds', (e) => new d(0, 0, 0, e)), l(d, 'fromSeconds', (e) => new d(0, 0, e)), l(d, 'fromMinutes', (e) => new d(0, e)), l(d, 'fromHours', (e) => new d(e));
class _ {
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
        if (null == this.startTime) return d.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return d.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new _();
        return e.start(), e;
    }
    constructor(e = c) {
        l(this, 'timestampProducer', void 0), l(this, 'startTime', void 0), l(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
    }
}
function E(e) {
    let t = 'number' == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
function f(e, t) {
    switch (t) {
        case 'NONE':
            return 0;
        case 'SECONDS':
            return 60 * e;
        case 'MINUTES':
            return e;
        case 'HOURS':
            return e / 60;
        case 'DAYS':
            return e / 60 / 24;
        case 'WEEKS':
            return e / 60 / 24 / 7;
        case 'MONTHS':
            return e / 60 / 24 / 31;
        case 'YEARS':
            return e / 60 / 24 / 365;
    }
}
((i = r || (r = {})).NONE = 'NONE'), (i.SECONDS = 'SECONDS'), (i.MINUTES = 'MINUTES'), (i.HOURS = 'HOURS'), (i.DAYS = 'DAYS'), (i.WEEKS = 'WEEKS'), (i.MONTHS = 'MONTHS'), (i.YEARS = 'YEARS');
let h = [
    {
        unit: 'NONE',
        max: 0
    },
    {
        unit: 'SECONDS',
        max: 1
    },
    {
        unit: 'MINUTES',
        max: 60
    },
    {
        unit: 'HOURS',
        max: 1440
    },
    {
        unit: 'DAYS',
        max: 44640
    },
    {
        unit: 'WEEKS',
        max: 40320
    },
    {
        unit: 'MONTHS',
        max: 525600
    },
    {
        unit: 'YEARS',
        max: 1 / 0
    }
];
function p(e, t) {
    let n = h.findIndex((t) => {
            let { max: n, unit: r } = t;
            return ('NONE' === r && e === n) || e < n;
        }),
        r = s()(
            h,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n
        );
    if (null != r) return r.unit;
    let i = h.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != i ? i.unit : null;
}
function I(e, t) {
    if (null == e)
        return {
            unit: 'NONE',
            time: 0
        };
    let n = p(e, (e) => t.includes(e)),
        r = null != n ? f(e, n) : null;
    return {
        unit: n,
        time: null != r ? Math.floor(r) : null
    };
}
