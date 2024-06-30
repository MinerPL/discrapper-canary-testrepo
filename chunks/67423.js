n.d(t, {
    B_: function () {
        return c;
    },
    Lm: function () {
        return o;
    },
    Ol: function () {
        return s;
    },
    P4: function () {
        return l;
    },
    Tk: function () {
        return _;
    },
    cO: function () {
        return u;
    },
    cj: function () {
        return a;
    },
    qu: function () {
        return d;
    }
}), n(411104);
var r = n(654861), i = n.n(r);
let a = 1420070400000;
function o(e) {
    return Math.floor(Number(e) / 4194304) + a;
}
function s(e) {
    let t = e - a;
    return t <= 0 ? '0' : i()(t).shiftLeft(22).toString();
}
function l(e, t) {
    let n = e - a;
    return i()(n <= 0 ? 0 : n).shiftLeft(22).add(t.next()).toString();
}
function u(e) {
    return s(o(e) - 1);
}
function c(e) {
    return Date.now() - o(e);
}
function d(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1;
}
class _ {
    next() {
        if (this.seq > 4095)
            throw Error('Snowflake sequence number overflow: '.concat(this.seq));
        return this.seq++;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        var e, t, n;
        e = this, t = 'seq', n = void 0, 'seq' in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, this.seq = 0;
    }
}
